# KEP v6.0.4 — Role Navigation and Final Website Structure

## Your question

Will student, admin, and developer areas all be in one website?

## Simple answer

Yes, technically they can live inside the same website package, but they should not be shown the same way to every user.

## Final structure

### Public area

For visitors and new students:

- Home
- Kankor Info
- Girls Education
- Subjects
- Library
- About
- Contact
- Login

### Student area

For normal logged-in students:

- Student Home
- Practice
- Mock Exam
- Progress
- Study Plan
- Library
- Profile

### Admin/reviewer area

For authorised admins/reviewers only:

- Admin Home
- Content Quality
- Review Content
- AI Assistant
- Saved AI Suggestions

### Developer/setup area

For project owner/developer only:

- Database Setup
- Supabase Setup
- Migration
- Deployment Guide
- Production Checklist

## Important security note

Because KEP is a static website, a student may still open an admin page URL manually.

But that does not mean they can manage real data.

Real protection must come from:

- Supabase login
- `profiles.role`
- Row Level Security policies
- admin/reviewer checks in database and functions

Navigation hiding is only for clean user experience. It is not security.

## What v6.0.4 fixed

- Student pages now show only student navigation.
- Admin pages now show only admin navigation.
- Developer pages now show only setup navigation.
- Public pages now show only public navigation.
- Added protected area notice on admin/developer pages.
- Removed confusing mixed navigation and old mode badges.
