# Archief: "Advies & employer branding" pagina

Gearchiveerd op 2026-10-13, voordat de derde dienst werd vervangen door Partnerships.
Niet gepubliceerd (staat buiten `public/`). Terugzetten:

1. Kopieer `employer-branding.nl.html` naar `public/site/employer-branding.html` en `employer-branding.en.html` naar `public/site/en/employer-branding.html`.
2. Zet in `scripts/site/finalize.py` en `next.config.ts` de route `/companies/employer-branding` weer terug en voeg 'employer-branding' toe aan `scripts/site/run_tr.py`.
3. Draai `python3 scripts/site/run_tr.py && python3 scripts/site/finalize.py`.

De HTML bevat nog de oude header/footer en CSS (eb-*, ebp-*), dus de pagina blijft zelfstandig leesbaar.
