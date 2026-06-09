# KEP v6.3 — Kankor Exam Preparation

This is the modern starter website for KEP, rebuilt from the original Kankor Exam Preparation FYP idea into a web-first education platform.











## v6.3 updates — Simplify & Launch Mode

- Added `start.html`.
- Simplified public navigation.
- Simplified student navigation.
- Simplified admin navigation.
- Added homepage student journey section.
- Added `KEP_v6_3_Simplify_Launch_Mode_Guide.md`.
- Added `/docs/KEP_v6_3_Simple_First_Test_Plan.md`.
- No SQL required.
- No new complex features added.

## v6.2 updates — Tester Feedback Pack

- Added tester instructions, feedback page, question report page, and admin feedback dashboard.
- Added `feedback.js`.
- Added `scripts/KEP_v6_2_Tester_Feedback_Table.sql`.
- Feedback requires login and saves to Supabase.
- Admin can review and mark feedback as reviewed/fixed.

## v6.1.1 updates — Content SQL Schema Fix

- Fixed v6.1 SQL error: `subjects.status` column does not exist.
- Updated content SQL to match current KEP schema.
- Questions now use `options` JSONB.
- Resources now use `file_url` and `source_details`.
- Exam template now uses `time_minutes` and `distribution`.
- Added `scripts/KEP_v6_1_1_Content_Launch_Pack_FIXED.sql`.
- Added `KEP_v6_1_1_SQL_Fix_Report.md`.

## v6.1 updates — Content Launch Pack

- Added `content-launch-pack.html`.
- Added `scripts/KEP_v6_1_Content_Launch_Pack.sql`.
- Added starter subjects, questions, resources, and mock template SQL.
- Added `KEP_v6_1_Content_Launch_Pack_Guide.md`.
- Added `/docs/KEP_v6_1_Content_Review_Checklist.md`.
- Updated Developer Setup with Content Launch Pack.
- No frontend logic change required.

## v6.0.6 updates — Progress Loader Fix

- Fixed Progress Analytics still showing 0 attempts after v6.0.5.
- Progress now checks the real KEP DB client: `window.KEP_DB.client()`.
- Status message now shows database + local attempt counts.
- Added `window.kepProgressDebug()` for console inspection.
- Added `KEP_v6_0_6_Progress_Loader_Fix_Report.md`.

## v6.0.5 updates — Progress Analytics Database Fix

- Fixed Progress Analytics showing 0 while Student Profile showed saved attempts.
- Added missing Supabase CDN and `supabase-config.js` to `progress-analytics.html`.
- Updated Progress Analytics to load `exam_attempts` for the logged-in student.
- Added mapping for `attempt_type`, `score`, `total`, and `percentage`.
- Progress now auto-loads shortly after opening.
- Added `KEP_v6_0_5_Progress_Analytics_Fix_Report.md`.

## v6.0.4 updates — Role Navigation and Internal Polish

- Rebuilt navigation into four clean areas: Public, Student, Admin, Developer.
- Removed confusing mixed navigation between student/admin/developer areas.
- Added protected area notice on admin/developer pages.
- Updated old version labels on mock/database/launch/admin pages.
- Improved internal page hero sizes and spacing.
- Added `KEP_v6_0_4_Role_Navigation_Guide.md`.

## v6.0.3 updates — Final Visual Polish

- Improved public header layout from live screenshot feedback.
- Reduced duplicate Login appearance.
- Hid distracting public area badge in header.
- Improved official logo size and spacing.
- Added stronger overflow protection.
- Improved hero section rhythm and spacing.
- Added `KEP_v6_0_3_Final_Visual_Polish_Report.md`.

## v6.0.2 updates — Official Logo Brand Update

- Added official KEP logo: `assets/kep-logo-official.png`.
- Added header-ready logo: `assets/logo-header.png`.
- Added favicon and app icons.
- Updated all HTML pages to use the new header logo.
- Updated manifest icons.
- Added official logo showcase section to Home and About pages.

## v6.0.1 updates — UI Polish Fix

- Fixed crowded desktop header/navigation.
- Improved logo sizing.
- Improved active navigation pills.
- Improved tablet/mobile menu behavior.
- Reduced oversized hero titles.
- Added better spacing below sticky header.
- Updated old version labels on key pages.

## v6.0 updates — Deployment Ready Package

- Added `deploy-guide.html`.
- Added `production-checklist.html`.
- Added `launch-mode.html`.
- Added `release-notes.html`.
- Added `version.json`.
- Added `netlify.toml`, `_headers`, `robots.txt`, `sitemap.xml`, and `.gitignore`.
- Added deployment, security, and release docs under `/docs`.
- Updated Developer Setup with v6.0 deployment tools.
- Polished footer trust links.
- Prepared KEP as a release-candidate package for deployment testing.

## v6.0 launch rule

Deploy and test with 2–3 trusted testers first.
Do not invite many students until student flow, admin flow, content quality, privacy, and Supabase Auth settings are verified.


## v5.9 updates

- Added public launch pages: `about.html`, `privacy.html`, `terms.html`, `contact.html`, `public-launch-checklist.html`.
- Added universal site footer.
- Updated public navigation.
- Added public launch section on homepage.
- Added `KEP_v5_9_Public_Launch_Polish_Guide.md`.
- Added trust, privacy, and no-guarantee wording for safer launch.


## v5.8 updates

- Added Student Progress Analytics: `progress-analytics.html`.
- Added progress logic: `progress-analytics.js`.
- Added score stats, trends, subject performance, recommendations, and export.
- Updated student navigation and mobile student shell with Progress.
- Added `KEP_v5_8_Student_Progress_Analytics_Guide.md`.


## v5.7 updates

- Added Content Quality Dashboard: `content-quality-db.html`.
- Added quality logic: `content-quality-db.js`.
- Added readiness score, weak question checks, subject coverage, duplicate risk, and report export.
- Added `KEP_v5_7_Content_Quality_Dashboard_Guide.md`.
- Updated admin navigation and Admin Home.


## v5.6 updates

- Added Saved AI Suggestions dashboard: `ai-suggestions-db.html`.
- Added dashboard script: `ai-suggestions-db.js`.
- Added save connector: `ai-suggestion-save.js`.
- Added Save AI Suggestion button to AI Review Assistant.
- Added reviewer decision workflow: suggested, accepted, edited, rejected.
- Added `KEP_v5_6_AI_Suggestions_Workflow_Guide.md`.


## v5.5 updates

- Added Supabase Edge Function scaffold: `supabase/functions/kep-ai-review/index.ts`.
- Added frontend connector: `ai-edge-client.js`.
- Added AI Edge Setup page: `ai-edge-setup.html`.
- Added environment example: `supabase/functions/.env.example`.
- Added Supabase config scaffold: `supabase/config.toml`.
- Updated AI Review Assistant with Backend AI Review button.
- Added setup guide and safety checklist.


## v5.4 updates

- Added `ai-review-assistant.html`.
- Added `ai-review-assistant.js`.
- Added safe AI review assistant prototype.
- Added AI review panel inside `admin-review-db.html`.
- Added optional SQL table: `scripts/KEP_v5_4_AI_Review_Suggestions_Table.sql`.
- Added `KEP_v5_4_AI_Review_Assistant_Guide.md`.
- Added `KEP_v5_4_Future_AI_Backend_Plan.md`.
- Updated admin navigation to point to the AI assistant.


## v5.3 updates

- Added `student-shell.js`.
- Added mobile bottom navigation for student pages.
- Polished Student Home with a clearer quick-start learning section.
- Added `student-experience.html`.
- Improved mobile spacing, buttons, cards, forms, and student navigation.
- Added `KEP_v5_3_Mobile_Student_Experience_Guide.md`.


## v5.2 updates

- Added final navigation structure.
- Added role-based UI layout helper: `nav-layout.js`.
- Added `admin-home.html`.
- Added `developer-setup.html`.
- Student, admin, developer, and public pages now have separate navigation.
- Added visual polish for sticky header, active links, role cards, and mobile navigation.
- Added `KEP_v5_2_Final_Navigation_Guide.md`.

## v5.1.1 updates

- Fixed mock exam count logic when only a small number of questions are available.
- Improved question field mapping for `question_text`, `correct_answer`, and different option column names.
- Added `scripts/KEP_v5_1_1_Demo_Content_Boost.sql` with 72 safe demo questions.
- Added `ai-automation.html`.
- Added `KEP_v5_1_1_AI_Automation_Roadmap.md`.
- Added `KEP_v5_1_1_Mock_Fix_Guide.md`.


## v5.1 updates

- Added `supabase-setup.html`.
- Added real Supabase setup walkthrough.
- Added SQL run order checklist.
- Added admin role setup instructions.
- Added full testing flow.
- Added troubleshooting section.
- Added sample content SQL: `scripts/KEP_v5_1_Sample_Content.sql`.
- Added setup guide: `KEP_v5_1_Supabase_Setup_Walkthrough_Guide.md`.


## v5.0 updates

- Added `system-review.html`.
- Added `deployment-checklist.html`.
- Added full system review report: `KEP_v5_0_Full_System_Review_Report.md`.
- Added v5.0 check report: `KEP_v5_0_Check_Report.md`.
- Added student journey map and admin journey map.
- Added deployment checklist for Supabase, admin setup, student testing, content testing, mobile, and safety.
- Rebuilt service worker cache as `kep-v5.0`.


## v4.5 updates

- Added `student-home.html`.
- Student Home combines profile, progress, weak subjects, today’s task, weekly plan, resources, and wrong-answer review.
- Added quick links to Practice DB, Mock DB, Library DB, Study Plan, and Student DB.
- Added guide: `KEP_v4_5_Student_Home_Guide.md`.


## v4.4 updates

- Added `study-plan-db.html`.
- Reads student profile, exam attempts, and published resources from Supabase.
- Generates a 7-day study plan based on weak subjects and student goal.
- Recommends library resources from weak subjects.
- Saves the latest plan locally.
- Added optional Supabase table SQL: `scripts/KEP_v4_4_Study_Plans_Table.sql`.
- Added guide: `KEP_v4_4_Database_Study_Plan_Guide.md`.


## v4.3.1 quality check updates

- Added missing `assets/kep-logo.svg` alias.
- Rebuilt `service-worker.js` cache list for all current local files.
- Removed unused placeholder code from `app-v4.js`.
- Added optional SQL patch: `scripts/KEP_v4_3_1_Profile_Insert_Policy.sql`.
- Added quality report: `KEP_v4_3_1_Quality_Check_Report.md`.


## v4.3 updates

- Added `admin-review-db.html` for database content review.
- Admin/reviewer users can load questions and resources from Supabase.
- Added filters by content type, status, and search.
- Added edit-before-publish for questions and resources.
- Added status workflow: needs_review, approved, published, rejected.
- Added optional audit SQL: `scripts/KEP_v4_3_Review_Audit_Log.sql`.
- Added guide: `KEP_v4_3_Admin_Review_Dashboard_Guide.md`.


## v4.2 updates

- Added `library-db.html` for Supabase published books, notes, PDFs, and past papers.
- Added `mock-db.html` for Supabase published questions and exam templates.
- Database mock exam now saves logged-in student results into `exam_attempts`.
- Library DB can save resources to `saved_resources`.
- Added guide: `KEP_v4_2_Supabase_Library_Mock_Guide.md`.


## v4.1 updates

- Added `migrate-to-db.html` for Google Sheets → Supabase migration.
- Added `app-v4-migration.js`.
- Imports Published questions into Supabase `questions`.
- Imports Published resources into Supabase `resources`.
- Added preview before import.
- Added admin/reviewer check before importing.
- Added optional stricter RLS update: `scripts/KEP_v4_1_RLS_Admin_Status_Policies.sql`.
- Added guide: `KEP_v4_1_Google_Sheets_to_Supabase_Migration_Guide.md`.

## v4.0 updates

- Added Supabase database + auth foundation.
- Added login/signup, student database dashboard, database practice, and admin question management.
- Added SQL schema with RLS policies.
- Added setup guide for moving from prototype to real platform.


## v3.10 updates

- Added `kankor-rules.html` for Kankor rules research and exam template management.
- Added rule entries with source, year, exam time, subject distribution, marking rules, verifier, and date checked.
- Added exam template manager with subject distribution rows.
- Saved templates now appear in the Mock Exam page.
- Kept full Kankor-style format marked as `To be verified` until trusted sources confirm the real structure.


## v3.9 updates

- Upgraded `mock.html` into a timed Mock Exam engine.
- Mock exams load only Published questions from Google Sheets.
- Added Quick Mock, Subject Mock, and flexible Full Kankor-style Mock templates.
- Added timer, question navigation, score, subject breakdown, wrong-answer review, and field-readiness estimates.
- Added clear disclaimer: KEP results are study estimates, not official admission or placement results.


## v3.8 updates

- Upgraded `library.html` to load approved books, notes, PDFs, and past papers from Google Sheets.
- Added `publishedResources` API action in `scripts/KEP_Google_Sheets_Web_API_v3_8.gs`.
- Library now only shows resources marked `Published` in the Review Dashboard.
- Added filters for resource type, subject, and language.
- Added local saving for approved resources.
- Updated offline cache to `kep-v3.8`.


## v3.4 updates

- Upgraded `dashboard.html` into a real local-first Student Dashboard.
- Practice MCQ results now save locally in the browser after each completed quiz.
- Dashboard shows study streak, latest score, average score, weak subject, dream field, and total attempts.
- Added subject progress bars, recent attempts, and wrong-answer review list.
- Added Dream Field selector: Medicine, Engineering, Computer Science, Law, Education, General Kankor.
- Added today's study plan based on the student’s weakest subject.
- Added clear-local-progress button for testing.
- No new Apps Script is required for v3.4.






## v2.9 updates

- Added `review-dashboard.html` for the KEP content review queue.
- Added sample review items and interactive status changes stored locally in the browser.
- Added review stages: Collected, Source Check, Academic Review, Translation Review, Ready to Publish, Published, Rejected.
- Added homepage section linking Collect → Review → Admin.
- Updated navigation and offline cache to `kep-v2-9-cache`.
- Added `KEP_v2_9_Content_Review_Dashboard_Guide.md`.

## v2.8 updates

- Connected the live Google Forms links provided by Sharafat.
- Updated `submit-content.html` with direct links to MCQ, Past Paper, Book/Notes, Correction, and Volunteer forms.
- Updated `volunteer.html` so real volunteers go to the live Volunteer Application form.
- Reworked `google-forms.html` into a live forms launch page.
- Added `form-links.json` and updated `templates/google-form-links-template.json`.
- Updated offline cache to `kep-v2-8-cache`.

## v2.7 updates

- Added Google Forms + Google Sheets launch kit.
- Added Apps Script auto-setup file to create five live forms and one master content spreadsheet.
- Added `google-forms.html` setup page.
- Added manual form blueprints, content governance policy, outreach messages, and form link template.
- Updated offline cache.

## v2.6 updates

- Added Submit Content page.
- Added forms for questions, past papers, books/notes, and corrections.
- Added local browser storage for demo submissions.
- Added JSON export/clear buttons for testing sample submissions.
- Added Google Forms and Google Sheets setup guide.
- Added content submission schema JSON.
- Updated navigation, homepage, offline cache, and README.

## v2.4 updates

- Added a dedicated Volunteer & Contributor page.
- Added Volunteer link to the main navigation.
- Added homepage community mission section.
- Added role cards for question contributors, teacher reviewers, past paper collectors, translators, Girls Education support, and student testers.
- Added content trust pipeline: collect, check source, review, publish.
- Added a sample volunteer form that stores demo submissions locally in the browser.
- Added multilingual text support for the volunteer page in English, Pashto, and Dari.
- Offline cache updated.

## v2.3 updates

- Multilingual system foundation: English, Pashto, Dari.
- RTL layout support for Pashto and Dari.
- Header language switcher works across the website.
- Dedicated Girls Education Space remains part of the core mission.
- Live counter from 23 March 2022 for girls' school closure beyond Grade 6.
- Practice MCQs page upgraded into a working quiz engine.
- Sample question bank in English, Pashto, and Dari.
- Subject selector, question count selector, results screen, answer review, and explanations.
- Offline cache updated.

## Test locally

Open `index.html` directly, or run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Next recommended step

Start sharing the live Google Forms with trusted people, then review submissions in the master Google Sheet before publishing content to KEP.


## KEP v3.10 — Live Google Sheets Review Dashboard

This version adds an Apps Script Web API and a live connector panel on `review-dashboard.html`. Use `scripts/KEP_Google_Sheets_Web_API.gs` and follow `KEP_v3_0_Google_Sheets_Live_Connection_Guide.md` to connect the dashboard to the real KEP Content Collection System Google Sheet.

Privacy note: keep the review dashboard private/admin-only while submissions contain volunteer or contributor contact details.


## KEP v3.10 — Save Review Status Back to Google Sheets

This version upgrades the Review Dashboard from read-only to review management. Live Google Sheet submissions can now be marked as Collected, Source Check, Academic Review, Translation Review, Ready to Publish, Published, or Rejected. Reviewer notes, reviewer name, and reviewed date are saved back to the Google Sheet.

Use `scripts/KEP_Google_Sheets_Web_API_v3_1.gs` or replace the existing `scripts/KEP_Google_Sheets_Web_API.gs` with the v3.1 script. Follow `KEP_v3_1_Save_Review_Status_Guide.md`.


## KEP v3.10

Published questions can now be loaded into `practice.html` from Google Sheets using the Apps Script API action `publishedQuestions`. Only rows marked `Review Status = Published` are used.

## KEP v3.10 — Practice Page Upgrade

The Practice MCQs page now feels more like a real learning tool:

- Dynamic subject list from published questions
- Question count adapts to available questions
- Question bank summary
- Better result insight
- Practise wrong answers again
- Report issue link connected to the correction form
- Clearer empty states when no questions are available

Use the same Apps Script Web App URL from v3.2. No new script deployment is required for v3.3.


## KEP v3.10 — Student Profile + Weekly Study Plan

The Student Dashboard now includes a private local student profile and a weekly study plan generator. Students can save a nickname, province/location, dream field, available study time, study days, preferred language, and target date. KEP generates a simple seven-day plan using the student's weak subjects and dream field.

The profile and weekly plan stay in the browser for now. No Tazkira or sensitive identity is required.


## KEP v3.10 — Girls Education Self-Study Pathway

This version adds `girls-pathway.html`, a dedicated private pathway builder for girls whose school doors were closed and for any private learner rebuilding quietly.

Main additions:

- Private self-study pathway page
- Neutral/safe mode for shared devices
- Local weekly pathway generator
- Foundation, Science, Math, Language, and Kankor Bridge focus paths
- Pashto, Dari, and English page text
- Printable/save-as-PDF plan layout
- Links from Home and Girls Education Space

The plan stays in the learner's browser. No Tazkira, real name, or sensitive identity is required.


## KEP v3.10 — Books & Self-Study Pack System

- Added `study-packs.html`.
- Added Study Packs navigation link.
- Added starter pack cards for Girls private study, Foundation, Kankor Bridge, Math, Science, and Languages.
- Added a weekly pack builder with print/save-as-PDF support.
- Linked packs to Library, Practice MCQs, Girls Self-Study Pathway, and Submit Content.
- Added `KEP_v3_7_Study_Packs_Guide.md`.
- Updated offline cache to `kep-v3.7`.
