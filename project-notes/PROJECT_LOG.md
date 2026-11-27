# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Team name:** Emma Samson
**Startup name:** StFX StudyHub
**Live site link:**file:///Users/emmasamson/GitHub%20(BSAD281)/index.html

---

## Work sessions

Copy this block for each session.

### Session 1— [Nov 24] — driver: [Emma]

- **Goal for this session:**	Brainstorm my startup idea, my target audience and the features I wanted for the webpage before writing any code.
- **Key prompts we gave Copilot** (paste the important ones):
  1.Help me brainstorm a webpage idea for StFX students that are struggling to study for midterm and exams and so that students can keep exam topics and study tip organized across courses.
  2.What are good features that would make StFX StudyHub useful for students during midterms and finals?
- **What worked:** Making the webpage so that you can only add concepts into specific courses and the readiness tracker so that its easier and organized for students.
- **What broke, and how we fixed it:** While I was brainstorming I originally wanted the webpage to also include a place where students can upload files into specific courses but I realized that it was honestly just unrealistic for a single file and it could have also risked academic integrity issues so I decided to just get rid of that idea only only keep topic titles, tips and readiness tracker.
- **Committed?** yes / no — commit message: No --- planning and brainstorming my features before creating the repository

### Session 2— [Nov 25] — driver: [Emma]

- **Goal for this session:** Build StFX StudyHub webpage with the features that I want. Which was a place for other students to add topics and tip, add a filtering block so that it makes it easier for students to find exactly what they’re looking for and a readiness tracker that tracks their progress.
- **Key prompts we gave Copilot** (paste the important ones):
  1. Create a clean and well-organized single page website called StFX StudyHub for StFX courses where students are able to review topics and also add topics. Track their readiness for an exam. Make it navy blue and White.
  2. Add a place where students can search by the category they are looking for. And add real Stfx courses with material
- **What worked:** Most of it worked like the filtering by categories, the adding a topic button and the readiness tracker.
- **What broke, and how we fixed it:** o	Nothing technically broke but on the first version it made it looked very cluttered and unorganized which can stress people out so what I did to fix it was I asked Copilot to make it a more organized webpage that does not feel as cluttered.
- **Committed?** yes / no — commit message: Yes—"Initial commit”

### Session 3 — [Nov 25] — driver: [Emma]

- **Goal for this session:** View the finished webpage file as a live webpage instead of just the code and verify that all the feature work properly.
- **Key prompts we gave Copilot** (paste the important ones):
  1.Why am I only seeing the code and not the actual webpage when I open index.html
- **What worked:** The coding was complete and on GitHub 
- **What broke, and how we fixed it:** After GitHub was done coding all I could see was the code and no link or webpage so I watched a YouTube video to see how to fix it and put the code into VS code app and then it worked, and I got the link and could see the webpage to know if I wanted to make any final changes.
- **Committed?** yes / no — commit message: Yes— “add files via upload”


---

## Things that broke (running list)

| Date | What went wrong | What we tried | What finally fixed it |
|------|-----------------|---------------|-----------------------|
|Nov 25 |Opening index.html only opened code and no preview of the webpage.|I tried double clicking on index.html and finding a button that said preview.|What actually fixed it was putting the code into VS code after GitHub created it and it showed me the link and a preview.|

## What a real version would need

Everything we wanted but faked or left out — real logins, a real database, payments, security, moderation, an app, staff, etc. For each one, say **why** it's needed and roughly **how hard or expensive** you think it would be.

|**Feature we faked or skipped**|**Why a real company would need it**|**How hard / expensive?**|
|--------------------|--------------------|--------------------|
|Real StFX login |A real company would need it to be sure that only people with a StFX email can access it so that other people don’t add false information. |Medium: you can use a login server like Auth0 or Clerk (SaaS). Free to begin until you reach so many users|
|Shared cloud database|A real company would need it so that students can see topics uploaded from other people|Medium: you can use a (PaaS) database like supabase and it’s also free until you hit a certain range then its $25/month.|
|Security and data privacy|A real company would need it to protect students emails, logins, exam readiness etc.|Medium: usually included in (SaaS and PaaS) plan which is anywhere from 0-$25/month. It would only take a couple of days to set it up and test it|
|Automated backups |A real company would need it because if the server ever crashes especially right before midterms or finals, students will lose their study guide and even maybe their trust.|Low: Would need to set up an automatic database backup and portable code that allows us to easily move to another provider without having to lose the data so like the topics. $5-$15/month|

## Reflection (fill in at the end)

1. What surprised you most about building software with AI? What surprised me most was how fast AI could turn exactly what I imagined my webpage being into a real webpage. With all the topics and tips, the filter categories, the colors and the readiness tracker. 
2. Which parts were easy, and which were hard? Why do you think that is? The easiest parts were explaining to AI exactly what I  wanted and it telling me exactly what to say to GitHub to get what I wanted. The hardest part that I experienced was learning GitHub and making other websites before this one to see how it worked because I struggled to find out how to preview my webpage because everytime I asked AI to do something it would give me the code but I was unable to preview it. So then I asked it how and it told me to put it in VS Code if it would allow me to preview it in GitHub by double clicking on index.html.
3. If a competitor had the same AI tool, how long would it take them to copy your site? If a competitor had my tool to copy my site it would not take long at all, most likely less than a day. Because the layout of my webpage is not hard to recreate with Ai tools because AI does all the codes for you once you tell it exactly what you want.
