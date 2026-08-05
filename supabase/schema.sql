-- VOIDS platform — draft data model, derived from
-- VOIDS-Platform-Briefing.md section 2. NOT applied to any Supabase
-- project yet: Phase 1 (this codebase) ships the static marketing
-- pages only and touches none of these tables. Land this once Phase 2
-- (career pager) starts writing real candidate rows.
--
-- Open questions flagged in the briefing (section 6) that affect this
-- schema and are still unresolved: match-score weighting, who enters
-- vacancies, whether talentpool/notify opt-ins live here or in the
-- existing sheet process, and the payment provider for self-service.

create extension if not exists "pgcrypto";

-- ============================================================
-- candidates — Why/How/What intake (career pager + jobboard apply)
-- ============================================================
create table if not exists candidates (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- basis
  naam text not null,
  email text not null unique,
  telefoon text,
  studie text,
  onderwijsinstelling text,
  uren_per_week int,
  startdatum text,

  -- Why
  energie_moment text,
  top3_waarden text[] check (array_length(top3_waarden, 1) <= 3),
  nieuwsgierigheid text,
  toekomstdoel text,

  -- How (6 forced-choice pairs, stored as chosen side per pair index)
  how_forced_choices jsonb,
  rolmodel text,
  wat_nodig_van_team text,
  dealbreaker text,

  -- What
  taken_met_energie text[],
  complimenten text,
  organisatietype_voorkeur text,
  taak_liever_niet text,
  extra_notities text,

  -- Career pager output (see section 3.2 of the briefing)
  career_pager_advies jsonb,

  talentpool_optin boolean not null default false,
  notify_optin boolean not null default false,

  -- optional portal account (Supabase Auth handles the credential;
  -- this just links the auth user to the intake record)
  auth_user_id uuid references auth.users (id)
);

-- ============================================================
-- companies
-- ============================================================
create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  naam text not null,
  logo_url text,
  sector text,
  contactpersoon text,
  factuuradres text
);

-- ============================================================
-- vacancies
-- ============================================================
create type vacancy_type as enum ('werkstudent', 'stage', 'starter', 'traineeship', 'bijbaan', 'international');
create type vacancy_werkvorm as enum ('kantoor', 'hybride', 'remote');
create type vacancy_status as enum ('open', 'gesloten');
create type vacancy_bron as enum ('intern', 'zelf_geplaatst');

create table if not exists vacancies (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  bedrijf_id uuid references companies (id) on delete set null,

  functietitel text not null,
  type vacancy_type not null,
  vakgebied text,
  stad text,
  werkvorm vacancy_werkvorm,
  uren_per_week text,
  niveau text,
  taal text,
  pay text,
  whatsapp_kanaal text,
  beschrijving text,
  is_nieuw boolean not null default true,
  is_featured boolean not null default false,
  status vacancy_status not null default 'open',
  bron vacancy_bron not null default 'intern'
);

-- ============================================================
-- applications
-- ============================================================
create type application_status as enum (
  'ontvangen', 'in_behandeling', 'op_shortlist', 'uitgenodigd_voor_gesprek', 'niet_doorgegaan'
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kandidaat_id uuid not null references candidates (id) on delete cascade,
  vacature_id uuid not null references vacancies (id) on delete cascade,
  gesolliciteerd_op timestamptz not null default now(),
  status application_status not null default 'ontvangen',
  -- see briefing section 3.3: combines the internal playbook (layer 1)
  -- with the career pager profile (layer 2) once weighting is decided
  match_percentage int check (match_percentage between 0 and 100),
  matched_criteria text[],
  unmatched_criteria text[],

  unique (kandidaat_id, vacature_id)
);

-- ============================================================
-- vacancy_orders — self-service job-board placement (Phase 5)
-- ============================================================
create type order_pakket as enum ('standaard', 'uitgelicht');
create type order_betaalstatus as enum ('open', 'betaald', 'mislukt');

create table if not exists vacancy_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  bedrijf_id uuid not null references companies (id) on delete cascade,
  vacature_id uuid references vacancies (id) on delete set null,
  pakket order_pakket not null,
  bedrag_cents int not null,
  betaalstatus order_betaalstatus not null default 'open',
  betaald_op timestamptz
);

-- ============================================================
-- Row Level Security — enable now, policies land with Phase 2 auth.
-- ============================================================
alter table candidates enable row level security;
alter table companies enable row level security;
alter table vacancies enable row level security;
alter table applications enable row level security;
alter table vacancy_orders enable row level security;
