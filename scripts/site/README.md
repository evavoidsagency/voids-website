# Site pipeline

The marketing site is a set of **static HTML pages** in `public/site/` (Dutch) and `public/site/en/` (English),
styled by `public/site/kit.css` and wired by `public/site/kit.js` (header, footer, reveal effects, small widgets).
`next.config.ts` rewrites clean URLs to these files (`/talent` -> `public/site/talent.html`, `/en/talent` ->
`public/site/en/talent.html`, `/` -> `public/site/index.html`, `/en` -> `public/site/en/home.html`,
`/blog/<slug>` -> `public/site/blog/<slug>.html`). The forms and the jobboard talk to the API routes in `app/api/`.

The old React pages under `app/(nl)` and `app/en` are shadowed by those rewrites and are not served any more
(except `/portal`). They can be deleted once you are happy with the new site.

## Editing a page

1. **Dutch is the source.** Edit `public/site/<page>.html` (home is `public/site/index.html`).
2. **English is generated** from the Dutch page: `python3 scripts/site/run_tr.py`.
   Translations live in `pairs.json` (older strings) and `extra.json` (newer ones, add new pairs here:
   `"Dutch sentence": "English sentence"`). The script prints strings it could not translate; names, logos and
   a few attribute leftovers are expected, anything else needs a pair.
3. **Blog** comes from `lib/content/blog-posts.ts`: `node scripts/site/genblog.js nl` and `node scripts/site/genblog.js en`
   (writes `public/site/blog/*.html`, `public/site/en/blog/*.html`, the blog index and `blogmeta_*.json`).
4. **Finish with** `python3 scripts/site/finalize.py`: writes title, meta description, canonical, hreflang, Open Graph,
   JSON-LD and a content-hash version on `kit.css` / `kit.js` into every page. Titles and descriptions come from `meta.json`
   (pages) and `blogmeta_*.json` (blog). Never edit the `<!--seo-->` block by hand.

Order: edit NL page -> `run_tr.py` -> (`genblog.js` if blog changed) -> `finalize.py`.

## Environment variables

| Variable | Used for |
| --- | --- |
| `RESEND_API_KEY` | Contact form, vacancy request, job application, notification mails. Also the fallback for the talent pool sign-up. |
| `NOTION_TOKEN` | Jobboard vacancies (`/api/vacancies`) and the talent pool ATS (`/api/talent-signup`). Notion integration token; share the "VOIDS Vacatures" and "ATS" pages with that integration. |
| `NOTION_VACANCIES_DATA_SOURCE_ID`, `NOTION_ATS_DATA_SOURCE_ID` | Optional. Defaults are in the route files. |
| `NEXT_PUBLIC_SITE_URL` | Optional. Origin for absolute links; defaults to the request origin. |

Without `NOTION_TOKEN` the jobboard shows its empty state and the talent pool sign-up mails everything (with the CV attached)
to contact@voids.agency instead of writing to Notion.

## Notion

- Jobboard: HOME BASE > 09. Website & Jobboard > "VOIDS Vacatures". Status `Live` puts a vacancy online (cached about 5 minutes).
- ATS: 05. Operations > Talent > ATS > "ATS Kandidaten". Column "Career pager" tracks the manual career pager process.
