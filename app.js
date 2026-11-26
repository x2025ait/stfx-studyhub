(function () {
  "use strict";

  const storage = {
    get: function (key, fallback) {
      try {
        const saved = localStorage.getItem(key);
        return saved === null ? fallback : JSON.parse(saved);
      } catch (error) {
        return fallback;
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
      }
    }
  };

  const storageKey = "tend-plants";
  const plantList = document.getElementById("plant-list");
  const emptyMessage = document.getElementById("empty-message");
  const plantCount = document.getElementById("plant-count");
  const dueCount = document.getElementById("due-count");
  const summaryMessage = document.getElementById("summary-message");
  const form = document.getElementById("plant-form");
  const lastWateredInput = document.getElementById("last-watered");

  function localDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function daysFromToday(dateString) {
    const today = new Date(localDateString(new Date()) + "T00:00:00Z");
    const date = new Date(dateString + "T00:00:00Z");
    return Math.round((date.getTime() - today.getTime()) / 86400000);
  }

  function dateAfter(dateString, days) {
    const date = new Date(dateString + "T00:00:00Z");
    date.setUTCDate(date.getUTCDate() + days);
    return date.toISOString().slice(0, 10);
  }

  function readableDate(dateString) {
    return new Date(dateString + "T00:00:00").toLocaleDateString(undefined, {
      month: "short",
      day: "numeric"
    });
  }

  function makeStarterPlants() {
    const today = localDateString(new Date());
    return STARTER_PLANTS.map(function (plant) {
      return {
        id: plant.id,
        name: plant.name,
        kind: plant.kind,
        interval: plant.interval,
        lastWatered: dateAfter(today, -plant.daysSinceWatered)
      };
    });
  }

  let plants = storage.get(storageKey, null);
  if (!Array.isArray(plants)) {
    plants = makeStarterPlants();
    storage.set(storageKey, plants);
  }

  function dueLabel(daysUntilWatering) {
    if (daysUntilWatering < 0) {
      return { label: Math.abs(daysUntilWatering) + " day" + (daysUntilWatering === -1 ? "" : "s") + " overdue", status: "overdue" };
    }
    if (daysUntilWatering === 0) {
      return { label: "Water today", status: "today" };
    }
    if (daysUntilWatering === 1) {
      return { label: "Water tomorrow", status: "soon" };
    }
    return { label: "In " + daysUntilWatering + " days", status: "soon" };
  }

  function makePlantRow(plant) {
    const dueDate = dateAfter(plant.lastWatered, Number(plant.interval));
    const daysUntilWatering = daysFromToday(dueDate);
    const due = dueLabel(daysUntilWatering);
    const row = document.createElement("article");
    row.className = "plant-row";

    const details = document.createElement("div");
    details.className = "plant-details";

    const status = document.createElement("span");
    status.className = "status status-" + due.status;
    status.textContent = due.label;

    const name = document.createElement("h3");
    name.textContent = plant.name;

    const meta = document.createElement("p");
    meta.className = "plant-meta";
    meta.textContent = (plant.kind || "Houseplant") + " · Every " + plant.interval + " days · Last watered " + readableDate(plant.lastWatered);
    details.append(status, name, meta);

    const actions = document.createElement("div");
    actions.className = "plant-actions";

    const waterButton = document.createElement("button");
    waterButton.type = "button";
    waterButton.className = "button water-button";
    waterButton.textContent = "Watered today";
    waterButton.setAttribute("aria-label", "Mark " + plant.name + " as watered today");
    waterButton.addEventListener("click", function () {
      plant.lastWatered = localDateString(new Date());
      saveAndRender();
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("aria-label", "Remove " + plant.name);
    removeButton.addEventListener("click", function () {
      plants = plants.filter(function (item) { return item.id !== plant.id; });
      saveAndRender();
    });

    actions.append(waterButton, removeButton);
    row.append(details, actions);
    return row;
  }

  function render() {
    const sortedPlants = plants.slice().sort(function (first, second) {
      const firstDue = dateAfter(first.lastWatered, Number(first.interval));
      const secondDue = dateAfter(second.lastWatered, Number(second.interval));
      return firstDue.localeCompare(secondDue) || first.name.localeCompare(second.name);
    });
    const dueTodayOrEarlier = sortedPlants.filter(function (plant) {
      return daysFromToday(dateAfter(plant.lastWatered, Number(plant.interval))) <= 0;
    }).length;

    plantList.replaceChildren.apply(plantList, sortedPlants.map(makePlantRow));
    emptyMessage.hidden = sortedPlants.length > 0;
    plantCount.textContent = String(plants.length);
    dueCount.textContent = String(dueTodayOrEarlier);
    summaryMessage.textContent = dueTodayOrEarlier === 0
      ? "All caught up. Your plants are in good hands."
      : dueTodayOrEarlier + " plant" + (dueTodayOrEarlier === 1 ? " needs" : "s need") + " a drink. You’ve got this.";
  }

  function saveAndRender() {
    storage.set(storageKey, plants);
    render();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    plants.push({
      id: "plant-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8),
      name: String(formData.get("name")).trim(),
      kind: String(formData.get("kind")).trim(),
      interval: Number(formData.get("interval")),
      lastWatered: String(formData.get("lastWatered"))
    });
    saveAndRender();
    form.reset();
    lastWateredInput.value = localDateString(new Date());
    document.getElementById("plant-name").focus();
  });

  const today = new Date();
  document.getElementById("today-label").textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  lastWateredInput.value = localDateString(today);
  render();
})();
