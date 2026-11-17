#!/usr/bin/env python3
"""
Renders the impact partners into the site pages from lib/content/partners.json.

    python3 scripts/site/partners.py            # normal: only approved partners WITH a logo file
    python3 scripts/site/partners.py --placeholder   # dev only: approved partners without logo get a text placeholder
    python3 scripts/site/partners.py --data other.json   # use another data file (testing)

Pipeline order: run_tr.py -> partners.py -> finalize.py (see scripts/site/README.md and PARTNERS.md).

The pages contain marker pairs that this script fills (and empties again when there is nothing to show):
    <!--partners:impact--> ... <!--/partners:impact-->   (impact.html, en/impact.html)
    <!--partners:home-->   ... <!--/partners:home-->     (index.html, en/home.html)

Two locks keep partners offline:
  1. "approved" must be true in the data file;
  2. the logo file public/logos/partners/<logo>.svg|png must exist.
With 0 visible partners the markers stay empty, so no section and no heading is rendered.
"""
import hashlib, html, json, os, re, struct, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
SITE = os.path.join(ROOT, "public", "site")
LOGO_DIR = os.path.join(ROOT, "public", "logos", "partners")
DEFAULT_DATA = os.path.join(ROOT, "lib", "content", "partners.json")

PAGES = {
    "impact": {"nl": "impact.html", "en": "en/impact.html"},
    "home": {"nl": "index.html", "en": "en/home.html"},
}
IMPACT_PATH = {"nl": "/impact#partners", "en": "/en/impact#partners"}


def esc(s):
    return html.escape(s, quote=True)


def find_logo(slug):
    for ext in ("svg", "png"):
        if os.path.exists(os.path.join(LOGO_DIR, f"{slug}.{ext}")):
            return f"/logos/partners/{slug}.{ext}", os.path.join(LOGO_DIR, f"{slug}.{ext}")
    return None, None


def png_size(path):
    if not path.endswith(".png"):
        return None
    with open(path, "rb") as f:
        head = f.read(24)
    if head[:8] != b"\x89PNG\r\n\x1a\n":
        return None
    return struct.unpack(">II", head[16:24])


def initials(name):
    words = [w for w in re.split(r"[\s()]+", name) if w]
    return "".join(w[0] for w in words[:3]).upper()


def logo_html(p, lang, placeholder):
    url, path = find_logo(p["logo"])
    if url:
        size = png_size(path)
        dim = f' width="{size[0]}" height="{size[1]}"' if size else ""
        return f'<img src="{url}" alt="{esc(p["name"])}"{dim} loading="lazy" decoding="async">'
    if placeholder:
        return f'<span class="pt-ph"><i aria-hidden="true">{esc(initials(p["name"]))}</i>{esc(p["name"])}</span>'
    return None


def link_open(p):
    # opens in a new tab, noopener only: no nofollow, we want the backlinks
    return f'<a class="pt-logo" href="{esc(p["website"])}" target="_blank" rel="noopener">'


def pick_cols(n):
    """3 or 4 columns on desktop, whichever leaves the fullest last row (4 wins ties)."""
    if n <= 3:
        return max(n, 1)
    def fill(c):
        r = n % c
        return 1.0 if r == 0 else r / c
    return 4 if fill(4) >= fill(3) else 3


def impact_block(shown, lang, data, v):
    c = data["copy"]["impact"][lang]
    cats = data["categories"]
    note = ""
    n = len(shown)
    cols = pick_cols(n)
    rem = n % cols
    first_last = n - rem if rem else None  # index of the first card in an incomplete last row
    cards = []
    for i, (p, logo) in enumerate(shown):
        cat = cats.get(p["category"], {}).get(lang, "")
        extra = ""
        if first_last is not None and i == first_last:
            extra = f' pt-first" style="--gs:{1 + cols - rem}'  # centres the incomplete last row
        cards.append(
            f'<li class="pt-card{extra}" data-reveal>{link_open(p)}{logo}</a>'
            f'<div><p class="pt-cat">{esc(cat)}</p><h3>{esc(p["name"])}</h3></div>'
            f'<p class="pt-t">{esc(p["text"][lang])}</p></li>'
        )
    return (
        f'{note}<section class="k-sec k-white pt" id="partners">\n'
        f'  <link rel="stylesheet" href="/site/partners.css?v={v}">\n'
        f'  <div class="k-wrap">\n'
        f'    <div class="k-head" data-reveal><h2 class="k-h2" style="margin-top:0">{esc(c["heading"])}</h2><p class="k-lead">{esc(c["intro"])}</p></div>\n'
        f'    <ul class="pt-grid" style="--cols:{cols}">\n      ' + "\n      ".join(cards) + "\n    </ul>\n  </div>\n</section>"
    )


def home_block(shown, lang, data, v):
    c = data["copy"]["home"][lang]
    note = ""
    items = [f'<li>{link_open(p)}{logo}</a></li>' for p, logo in shown]
    return (
        f'{note}<section class="pt-strip pt" id="community-partners" aria-labelledby="pt-h">\n'
        f'  <link rel="stylesheet" href="/site/partners.css?v={v}">\n'
        f'  <div class="pt-in"><h2 id="pt-h">{esc(c["heading"])}</h2>\n'
        f'    <ul class="pt-row">' + "".join(items) + "</ul>\n"
        f'    <a class="pt-all" href="{IMPACT_PATH[lang]}">{esc(c["link"])} &rarr;</a></div>\n'
        f"</section>"
    )


def main(argv):
    placeholder = "--placeholder" in argv
    data_path = DEFAULT_DATA
    if "--data" in argv:
        data_path = os.path.abspath(argv[argv.index("--data") + 1])
    data = json.load(open(data_path, encoding="utf-8"))
    css = open(os.path.join(SITE, "partners.css"), "rb").read()
    v = hashlib.sha1(css).hexdigest()[:8]

    approved = [p for p in data["partners"] if p.get("approved") is True]
    for p in data["partners"]:
        if p.get("approved") is True and not find_logo(p["logo"])[0] and not placeholder:
            print(f"  NOT SHOWN: {p['name']} is approved but has no logo file in public/logos/partners/")
    print(f"{len(data['partners'])} partners, {len(approved)} approved")

    for kind, files in PAGES.items():
        for lang, rel in files.items():
            path = os.path.join(SITE, rel)
            src = open(path, encoding="utf-8").read()
            pat = re.compile(rf"<!--partners:{kind}-->.*?<!--/partners:{kind}-->", re.S)
            if not pat.search(src):
                print(f"  WARNING: no <!--partners:{kind}--> marker in {rel}")
                continue
            shown = []
            for p in approved:
                logo = logo_html(p, lang, placeholder)
                if logo:
                    shown.append((p, logo))
            if shown:
                body = (impact_block if kind == "impact" else home_block)(shown, lang, data, v)
                new = f"<!--partners:{kind}-->\n{body}\n<!--/partners:{kind}-->"
            else:
                new = f"<!--partners:{kind}--><!--/partners:{kind}-->"
            out = pat.sub(lambda m: new, src, count=1)
            if out != src:
                open(path, "w", encoding="utf-8").write(out)
            print(f"  {rel}: {len(shown)} shown")


if __name__ == "__main__":
    main(sys.argv[1:])
