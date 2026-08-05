# VOIDS platform

Next.js (App Router) + Supabase, deploy-ready on Vercel. Built from the
Claude Design source (`VOIDS Website (editable source).dc.html`) and
`VOIDS-Platform-Briefing.md`, which is the source of truth for the data
model, matching logic and build phasing.

## Status: Phase 1 — static marketing pages

Live content: Home, Talent, Companies, Impact, Cases, Blog, About — in
Dutch (default, unprefixed) and English (`/en/...`). `/jobboard`,
`/pricing`, `/pager` and `/portal` are placeholder pages: they're on
the site map and in the nav because the mockup and briefing put them
there, but their real functionality (Phases 2–5) isn't built yet.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Supabase project's URL + anon key
npm run dev
```

## Structure

- `app/(nl)/...` — Dutch routes, unprefixed (`/`, `/talent`, …). The
  `(nl)` route group adds no URL segment; it just scopes the NL
  `layout.tsx` (header/footer) to these pages.
- `app/en/...` — English routes, mirrored 1:1 (`/en`, `/en/talent`, …).
- `components/pages/*Page.tsx` — one component per page, taking a
  `lang: "nl" | "en"` prop and holding both languages' copy inline.
  Each locale route file just renders `<XPage lang="nl" />` /
  `<XPage lang="en" />`.
- `components/ui/` — Logo, Button, Badge, Card, Photo — ported from
  the VOIDS design system's `_ds_bundle.js` (Photo is this project's
  own addition, a `next/image` wrapper for the photography below).
- `components/site/` — Header, Footer, and the WhatsApp-community
  modal (global client-side context, opened from CTAs across pages).
- `lib/i18n/common.ts` — nav items, WhatsApp channel list, footer
  copy, and the `localePath`/`altLocalePath` helpers the header's
  language switch uses.
- `lib/supabase/` — browser + server Supabase clients. Not yet called
  from any page — Phase 1 has no database reads/writes.
- `supabase/schema.sql` — draft schema for the Phase 2+ data model
  (candidates, vacancies, companies, applications, vacancy_orders),
  matching briefing section 2. Not applied to any project yet.

## Photography

`public/photography/*.jpg` is real VOIDS photography from the
"Shoot 2 - Neshmeeya" set (resized to 2200px long edge, JPEG q76 via
`sips` — originals were 7–16MB each). Every page's photo slot renders
one of these through `components/ui/Photo.tsx`.

`public/team/eva.jpg` and `public/team/wieke.jpg` are the founder
portraits on `/about`, from the "Founder foto's" folder (VOIDS content
2026) — `Voids-48 kopie 2.jpg` and `Voids-87 kopie 2.jpg`, resized to
1600px long edge, JPEG q78. Crops (`objectPosition`) match the framing
from the original Claude Design mockup.

## Deploying

Push to a Git repo and import it in Vercel — no special configuration
needed. Add the `.env.example` variables as Vercel project env vars
before the first deploy that reads from Supabase (Phase 1 doesn't need
them yet, but Vercel will otherwise warn on unset `NEXT_PUBLIC_*` vars
once Phase 2+ code references them at runtime).
