-- KEP v6.2 — Tester Feedback Table
-- Purpose: collect controlled tester feedback and wrong-question reports.

create table if not exists public.feedback_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  reporter_email text,
  report_type text not null default 'general_feedback',
  priority text not null default 'normal',
  page_url text,
  question_id text,
  subject_name text,
  question_text text,
  message text not null,
  screenshot_note text,
  status text not null default 'new',
  admin_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.feedback_reports enable row level security;

drop policy if exists "feedback_insert_authenticated" on public.feedback_reports;
create policy "feedback_insert_authenticated"
on public.feedback_reports for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists "feedback_select_own" on public.feedback_reports;
create policy "feedback_select_own"
on public.feedback_reports for select to authenticated
using (auth.uid() = user_id);

drop policy if exists "feedback_select_admin" on public.feedback_reports;
create policy "feedback_select_admin"
on public.feedback_reports for select to authenticated
using (public.is_admin());

drop policy if exists "feedback_update_admin" on public.feedback_reports;
create policy "feedback_update_admin"
on public.feedback_reports for update to authenticated
using (public.is_admin()) with check (public.is_admin());

grant select, insert, update on public.feedback_reports to authenticated;

create or replace function public.set_feedback_reports_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_feedback_reports_updated_at on public.feedback_reports;
create trigger set_feedback_reports_updated_at
before update on public.feedback_reports
for each row execute function public.set_feedback_reports_updated_at();
