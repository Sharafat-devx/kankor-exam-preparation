
-- KEP v6.1.1 — Content Launch Pack FIXED for current KEP Supabase schema
-- Fixes v6.1 error: subjects table does not have a "status" column.
-- Works with the original KEP v4.0 schema:
-- subjects(name, slug, language, description)
-- questions(options jsonb, source_details, status)
-- resources(file_url, source_details, status)
-- exam_templates(time_minutes, distribution jsonb, verification_status)

-- =========================
-- 1) Starter Subjects
-- =========================
insert into public.subjects (name, slug, language, description)
values
  ('Mathematics', 'mathematics', 'English', 'Algebra, geometry, arithmetic, and problem solving practice.'),
  ('Physics', 'physics', 'English', 'Basic mechanics, electricity, measurement, and general science practice.'),
  ('Chemistry', 'chemistry', 'English', 'Atoms, reactions, acids, bases, and core chemistry concepts.'),
  ('Biology', 'biology', 'English', 'Cells, human body, plants, ecology, and biology foundations.'),
  ('English', 'english', 'English', 'Vocabulary, grammar, reading, and sentence practice.'),
  ('Islamic Studies', 'islamic-studies', 'English', 'Core Islamic knowledge practice with respectful explanations.'),
  ('General Knowledge', 'general-knowledge', 'English', 'General awareness, reasoning, and basic knowledge practice.')
on conflict (slug) do update set
  name = excluded.name,
  language = excluded.language,
  description = excluded.description;

-- =========================
-- 2) Starter Questions
-- =========================
with q(slug, question_text, options, correct_answer, explanation, difficulty, source_details) as (
  values
  ('mathematics', 'What is 12 × 8?', '["80","88","96","108"]'::jsonb, '96', '12 multiplied by 8 equals 96.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('mathematics', 'If x + 7 = 15, what is x?', '["6","7","8","9"]'::jsonb, '8', 'Subtract 7 from both sides: x = 15 - 7 = 8.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('mathematics', 'What is the area of a rectangle with length 6 and width 4?', '["10","18","24","28"]'::jsonb, '24', 'Area of a rectangle = length × width. 6 × 4 = 24.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('mathematics', 'What is 25% of 200?', '["25","40","50","75"]'::jsonb, '50', '25% means one quarter. One quarter of 200 is 50.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),

  ('physics', 'Which unit is used to measure force?', '["Joule","Newton","Watt","Volt"]'::jsonb, 'Newton', 'Force is measured in Newtons.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('physics', 'What force pulls objects toward Earth?', '["Friction","Gravity","Magnetism","Pressure"]'::jsonb, 'Gravity', 'Gravity is the force that attracts objects toward Earth.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('physics', 'Which quantity is calculated by distance divided by time?', '["Speed","Mass","Force","Energy"]'::jsonb, 'Speed', 'Speed = distance ÷ time.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('physics', 'Which simple device is used to open and close an electric circuit?', '["Switch","Battery","Bulb","Wire"]'::jsonb, 'Switch', 'A switch controls whether current can flow in a circuit.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),

  ('chemistry', 'What is the chemical symbol for water?', '["CO2","H2O","O2","NaCl"]'::jsonb, 'H2O', 'Water is made of hydrogen and oxygen, with the formula H2O.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('chemistry', 'Which particle has a negative charge?', '["Proton","Neutron","Electron","Nucleus"]'::jsonb, 'Electron', 'Electrons are negatively charged particles.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('chemistry', 'What is common table salt called chemically?', '["Sodium chloride","Calcium carbonate","Hydrogen peroxide","Carbon dioxide"]'::jsonb, 'Sodium chloride', 'Table salt is sodium chloride, written as NaCl.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('chemistry', 'A substance with pH less than 7 is usually called what?', '["Base","Acid","Salt","Metal"]'::jsonb, 'Acid', 'Acids usually have pH values below 7.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),

  ('biology', 'What is the basic unit of life?', '["Atom","Cell","Tissue","Organ"]'::jsonb, 'Cell', 'The cell is the basic structural and functional unit of life.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('biology', 'Which organ pumps blood through the body?', '["Lung","Liver","Heart","Kidney"]'::jsonb, 'Heart', 'The heart pumps blood around the body.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('biology', 'Which part of a plant absorbs water from soil?', '["Flower","Root","Leaf","Fruit"]'::jsonb, 'Root', 'Roots absorb water and minerals from soil.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('biology', 'Which gas do humans mainly need for breathing?', '["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"]'::jsonb, 'Oxygen', 'Humans need oxygen for respiration.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),

  ('english', 'Choose the correct sentence.', '["She go to school.","She goes to school.","She going to school.","She gone to school."]'::jsonb, 'She goes to school.', 'For third-person singular in the present simple, we use “goes”.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('english', 'What is the opposite of “strong”?', '["Powerful","Weak","Large","Fast"]'::jsonb, 'Weak', 'The opposite of strong is weak.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('english', 'Which word is a noun?', '["Run","Beautiful","Book","Quickly"]'::jsonb, 'Book', 'A noun names a person, place, thing, or idea. Book is a thing.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('english', 'Complete the sentence: I ____ a student.', '["am","is","are","be"]'::jsonb, 'am', 'With “I”, the correct form of the verb “to be” is “am”.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),

  ('islamic-studies', 'How many daily obligatory prayers are there in Islam?', '["Three","Four","Five","Six"]'::jsonb, 'Five', 'Muslims perform five daily obligatory prayers.', 'Easy', 'KEP v6.1.1 starter sample — review respectfully before public launch.'),
  ('islamic-studies', 'What is the holy book of Islam?', '["Torah","Quran","Bible","Zabur"]'::jsonb, 'Quran', 'The Quran is the holy book of Islam.', 'Easy', 'KEP v6.1.1 starter sample — review respectfully before public launch.'),
  ('general-knowledge', 'Which planet do humans live on?', '["Mars","Earth","Venus","Jupiter"]'::jsonb, 'Earth', 'Humans live on planet Earth.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.'),
  ('general-knowledge', 'How many days are usually in one week?', '["5","6","7","8"]'::jsonb, '7', 'A week usually has seven days.', 'Easy', 'KEP v6.1.1 starter sample — verify before public launch.')
)
insert into public.questions
(subject_id, subject_name, question_text, options, correct_answer, explanation, difficulty, language, source_type, source_details, status)
select
  s.id,
  s.name,
  q.question_text,
  q.options,
  q.correct_answer,
  q.explanation,
  q.difficulty,
  'English',
  'KEP Starter Content',
  q.source_details,
  'published'::public.kep_status
from q
join public.subjects s on s.slug = q.slug
where not exists (
  select 1 from public.questions existing
  where lower(existing.question_text) = lower(q.question_text)
);

-- =========================
-- 3) Starter Library Resources
-- =========================
with r(slug, title, resource_type, description, source_details) as (
  values
  ('mathematics', 'Mathematics Starter Pack', 'Study Pack', 'Starter notes and practice plan for basic mathematics revision.', 'KEP v6.1.1 placeholder resource — replace with real verified file/link.'),
  ('physics', 'Physics Starter Pack', 'Study Pack', 'Starter notes and practice plan for basic physics revision.', 'KEP v6.1.1 placeholder resource — replace with real verified file/link.'),
  ('chemistry', 'Chemistry Starter Pack', 'Study Pack', 'Starter notes and practice plan for basic chemistry revision.', 'KEP v6.1.1 placeholder resource — replace with real verified file/link.'),
  ('biology', 'Biology Starter Pack', 'Study Pack', 'Starter notes and practice plan for basic biology revision.', 'KEP v6.1.1 placeholder resource — replace with real verified file/link.'),
  ('english', 'English Grammar Starter Pack', 'Study Pack', 'Starter grammar and vocabulary revision plan.', 'KEP v6.1.1 placeholder resource — replace with real verified file/link.')
)
insert into public.resources
(title, resource_type, subject_id, subject_name, language, grade, year, file_url, source_type, source_details, status)
select
  r.title,
  r.resource_type,
  s.id,
  s.name,
  'English',
  'Kankor Prep',
  '2026',
  '',
  'KEP Starter Content',
  r.description || ' ' || r.source_details,
  'published'::public.kep_status
from r
join public.subjects s on s.slug = r.slug
where not exists (
  select 1 from public.resources existing
  where lower(existing.title) = lower(r.title)
);

-- =========================
-- 4) Starter Mock Template
-- =========================
insert into public.exam_templates
(name, description, time_minutes, verification_status, distribution, source_note, status)
select
  'KEP Starter Mock — 20 Questions',
  'A small testing mock for controlled launch. This is not an official Kankor template.',
  20,
  'Practice template',
  '[
    {"subject": "Mathematics", "questions": 4},
    {"subject": "Physics", "questions": 4},
    {"subject": "Chemistry", "questions": 4},
    {"subject": "Biology", "questions": 4},
    {"subject": "English", "questions": 4}
  ]'::jsonb,
  'KEP starter testing template only. Verify official structure before public launch.',
  'published'::public.kep_status
where not exists (
  select 1 from public.exam_templates existing
  where lower(existing.name) = lower('KEP Starter Mock — 20 Questions')
);
