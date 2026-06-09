# KEP v6.1.1 — SQL Fix Report

## Error fixed

Supabase error:

`ERROR: 42703: column "status" of relation "subjects" does not exist`

## Cause

The first v6.1 content SQL used newer column names that do not exist in the current KEP database schema.

Your current schema has:

### subjects

- `name`
- `slug`
- `language`
- `description`

No `status` column.

### questions

Uses `options jsonb`, not separate `option_a`, `option_b`, etc.

### resources

Uses `file_url` and `source_details`, not `url` and `description`.

### exam_templates

Uses `time_minutes` and `distribution`, not `duration_minutes`, `total_questions`, or `template_json`.

## Fixed file

Run:

`scripts/KEP_v6_1_1_Content_Launch_Pack_FIXED.sql`

This should work with the current KEP database schema.

## No need to change database structure

This fix changes the SQL insert script, not your tables.
