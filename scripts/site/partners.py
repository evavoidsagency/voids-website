#!/usr/bin/env python3
"""
Renders the community partners into the site pages from lib/content/partners.json.

    python3 scripts/site/partners.py            # normal: only approved partners WITH a logo file
    python3 scripts/site/partners.py --placeholder   # dev only: approved partners without logo get a text placeholder
    python3 scripts/site/partners.py --data other.json   # use another data file (testing)

Pipeline order: run_tr.py -> partners.py -> finalize.py (see scripts/site/README.md and PARTNERS.md).

The pages contain marker pairs that this script fills (and empties again when there is nothing to show):
    <!--partners:band-->   ... <!--/partners:band-->     (talent.html, en/talent.html)
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
    "band": {"nl": "talent.html", "en": "en/talent.html"},
    "home": {"nl": "index.html", "en": "en/home.html"},
}
BAND_PATH = {"nl": "/talent#partners", "en": "/en/talent#partners"}


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


def band_block(shown, lang, data, v):
    """Compact band on the Talent page, above the blog posts: small heading, one row of logos with the name."""
    c = data["copy"]["band"][lang]
    items = []
    for p, logo in shown:
        # the full sentence stays in the data (and as tooltip); it returns on the later /impact/partners page
        tip = f' title="{esc(p["text"][lang])}"'
        items.append(
            f'<li class="pt-mi">{link_open(p).replace(">", tip + ">", 1)}{logo}</a>'
            f'<p class="pt-n">{esc(p["name"])}</p></li>'
        )
    return (
        f'<section class="k-sec k-lav pt pt-band" id="partners">\n'
        f'  <link rel="stylesheet" href="/site/partners.css?v={v}">\n'
        f'  <div class="k-wrap">\n'
        f'    <div class="pt-bh"><h2 class="k-h2">{esc(c["heading"])}</h2><p>{esc(c["intro"])}</p></div>\n'
        f'    <ul class="pt-mini">' + "".join(items) + "</ul>\n  </div>\n</section>"
    )


def home_block(shown, lang, data, v):
    c = data["copy"]["home"][lang]
    note = ""
    items = [f'<li style="--i:{i}">{link_open(p)}{logo}</a></li>' for i, (p, logo) in enumerate(shown)]
    return (
        f'{note}<section class="pt-strip pt" id="community-partners" aria-labelledby="pt-h">\n'
        f'  <link rel="stylesheet" href="/site/partners.css?v={v}">\n'
        f'  <div class="pt-in"><h2 id="pt-h">{esc(c["heading"])}</h2>\n'
        f'    <ul class="pt-row">' + "".join(items) + "</ul>\n"
        f'    <a class="pt-all" href="{BAND_PATH[lang]}">{esc(c["link"])} &rarr;</a></div>\n'
        f"</section>\n"
        # entrance: logos rise in one by one when the strip scrolls into view (skipped for reduced motion)
        "<script>(function(){var s=document.getElementById('community-partners');"
        "if(!s||!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;"
        "s.classList.add('pt-pre');var io=new IntersectionObserver(function(e){if(e[0].isIntersecting){"
        "s.classList.remove('pt-pre');s.classList.add('pt-go');io.disconnect()}},{threshold:.3});io.observe(s)})();</script>"
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
                body = (band_block if kind == "band" else home_block)(shown, lang, data, v)
                new = f"<!--partners:{kind}-->\n{body}\n<!--/partners:{kind}-->"
            else:
                new = f"<!--partners:{kind}--><!--/partners:{kind}-->"
            out = pat.sub(lambda m: new, src, count=1)
            if out != src:
                open(path, "w", encoding="utf-8").write(out)
            print(f"  {rel}: {len(shown)} shown")


if __name__ == "__main__":
    main(sys.argv[1:])
