# Impact partners (community partners)

Het lijstje met partners staat in **`lib/content/partners.json`**. Daaruit worden het blok op de Impact-pagina
en het strookje op de homepage gemaakt, in het Nederlands en het Engels.

Dit zijn NIET de klanten ("Vertrouwd door") en NIET de werkgeverspartnerships (Bedrijven > Partnerships).

## Een partner toevoegen

1. Zet het logo in `public/logos/partners/`. Bestandsnaam = de `slug` van de partner, bijvoorbeeld `state-of-youth.svg`
   of `state-of-youth.png`. SVG heeft de voorkeur, anders PNG met transparante achtergrond en zonder lege rand.
2. Kopieer in `lib/content/partners.json` een bestaand blokje onder `partners` en pas het aan:
   - `slug` en `logo`: dezelfde naam als het logobestand (zonder .svg of .png)
   - `name`: de naam zoals die op de site komt
   - `category`: `jongerennetwerk`, `studentenorganisatie`, `vacatureplatform` of `stichting`
     (een nieuwe categorie voeg je toe onder `categories`, met een NL en een EN naam)
   - `website`: de website van de partner
   - `text.nl` en `text.en`: de zin voor de website
   - `approved`: laat dit op `false` staan
3. Voer uit (zie "Bijwerken" hieronder).

## Een partner live zetten

Alleen als Eva akkoord heeft **en** het logo is aangeleverd:

1. Zet bij die partner `"approved": true`.
2. Voer "Bijwerken" uit.
3. Controleer op de Impact-pagina en de homepage, en commit en push zoals altijd.

Er zijn twee sloten. Een partner verschijnt alleen als `approved` op `true` staat **en** het logobestand bestaat.
Staat hij op `true` maar mist het logo, dan toont het script een melding ("NOT SHOWN") en blijft hij weg.

Staan er 0 goedgekeurde partners, dan wordt er niets getoond: ook geen kop.

## Een partner weghalen

Zet `"approved": false` en voer "Bijwerken" uit. De partner verdwijnt van beide pagina's.
Wil je hem helemaal weg hebben, verwijder dan het blokje uit `partners.json` en het logobestand.

## Bijwerken

```bash
python3 scripts/site/partners.py
python3 scripts/site/finalize.py
```

Heb je ook een Nederlandse pagina bewerkt, dan is de volgorde: `run_tr.py`, dan `partners.py`, dan `finalize.py`.
Nooit de blokken tussen `<!--partners:...-->` met de hand bewerken: ze worden telkens opnieuw gemaakt.

Voor een voorbeeld zonder logo (alleen om de opmaak te bekijken) bestaat `python3 scripts/site/partners.py --placeholder`.
Gebruik dat nooit voor wat live gaat.

## Teksten en Engels

- De koppen, de intro en de linktekst staan bovenaan in `partners.json` onder `copy` (NL en EN).
- De Engelse teksten hebben `"status": "concept"` en staan in de pagina als commentaar "EN: concept". Ze zijn een
  voorstel en nog niet door Eva goedgekeurd. Pas ze aan in `partners.json` en voer "Bijwerken" uit.
- Gebruik alleen de afgesproken zinnen. Geen contactpersonen, e-mailadressen of afspraken over fees in dit bestand.

## Later: eigen pagina `/impact/partners`

Elke partner heeft een `category` met een volgorde (`categories.<naam>.order`). Daarmee is groeperen per categorie
straks één extra stap in `partners.py`. De pagina zelf is nog niet gebouwd (plan: bij ongeveer 8 tot 10 live partners).

## Later: koppelen aan Notion

Bron van waarheid is de Notion-database "Impact Partnerships Tracker". Nu wordt het bestand met de hand bijgehouden.
Een koppeling hoeft alleen `partners.json` te vullen. De velden komen zo overeen:

| Notion | partners.json |
| --- | --- |
| Organisatie | `name` (en `slug`) |
| Categorie | `category` |
| Website | `website` |
| Tekst voor website | `text.nl` |
| Logo | bestand in `public/logos/partners/` |
| Akkoord logo op site + Status "Live op website" | `approved` (alleen `true` als beide kloppen) |

Het kan op dezelfde manier als de jobboard (`/api/vacancies`, `NOTION_TOKEN`), met een script dat het bestand
bijwerkt vóór `partners.py`.

## Eigen initiatieven

Teach First Nederland / TeachNL is een eigen initiatief van Eva en Lucas, geen externe partner. Het staat dus niet
onder `partners`. Onder `initiatives` is plek gereserveerd voor later. De site toont daar niets van.
