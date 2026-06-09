# KEP v6.1.1 — Content Launch Pack Guide

## Purpose

KEP has strong features now. The next stage is content.

This pack adds:

- starter subjects
- simple starter MCQs
- explanations
- placeholder study resources
- one small mock template

## Important warning

This is starter educational content for controlled testing.

It is **not** an official Kankor question bank.

Before wider public launch:

- verify questions
- improve explanations
- replace placeholder resources
- add trusted source notes
- check subject structure against official/current guidance

## How to install

1. Open Supabase.
2. Go to SQL Editor.
3. Open this file:

`scripts/KEP_v6_1_1_Content_Launch_Pack_FIXED.sql`

4. Copy and run it.
5. Open the live KEP website.
6. Test:

- Practice
- Mock Exam
- Progress Analytics
- Content Quality Dashboard

## What it inserts

### Subjects

- Mathematics
- Physics
- Chemistry
- Biology
- English
- Islamic Studies
- General Knowledge

### Questions

24 simple starter questions with explanations.

### Resources

5 placeholder study pack resources.

### Mock template

One small 20-question starter mock template.

## Next after this

KEP v6.2 should focus on:

- better onboarding for first testers
- feedback form
- report-a-question flow
- tester instructions


## v6.1.1 fix

The first v6.1 SQL used newer column names such as:

- `subjects.status`
- `questions.option_a`
- `resources.url`
- `exam_templates.total_questions`

Your actual KEP database uses:

- `subjects.name, slug, language, description`
- `questions.options` as JSONB
- `resources.file_url`
- `exam_templates.time_minutes` and `distribution`

So v6.1.1 fixes the SQL to match your current database.
