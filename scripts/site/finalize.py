#!/usr/bin/env python3
"""
Last step of the site pipeline. Run after editing a page or regenerating the EN pages / blog:

    python3 scripts/site/finalize.py

For every page in public/site/ (NL) and public/site/en/ (EN) this (re)writes the SEO block in <head>:
title, meta description, canonical, hreflang, Open Graph / Twitter, favicon, JSON-LD (organisation,
blog post, FAQ), and sets a content-hash cache-busting version on kit.css / kit.js.
Titles and descriptions come from scripts/site/meta.json (pages) and blogmeta_nl/en.json (blog,
written by genblog.js). The script is idempotent: running it twice changes nothing.
"""
import glob, hashlib, html, json, os, re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
SITE = os.path.join(ROOT, "public", "site")
HERE = os.path.dirname(os.path.abspath(__file__))
BASE = "https://voids.agency"
DEFAULT_IMAGE = "/photography/home-hero-8.jpg"

# file name -> clean path (NL); EN is the same path under /en
FILE_TO_PATH = {
    "recruitment-selection": "/companies/recruitment-selection",
    "community-jobboard": "/companies/community-jobboard",
    "employer-branding": "/companies/employer-branding",
}

meta = json.load(open(os.path.join(HERE, "meta.json"), encoding="utf-8"))
blog = {}
for lang in ("nl", "en"):
    f = os.path.join(HERE, f"blogmeta_{lang}.json")
    if os.path.exists(f):
        for b in json.load(open(f, encoding="utf-8")):
            blog.setdefault(b["slug"], {})[lang] = b

ORG = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VOIDS",
    "legalName": "VOIDS vof",
    "url": BASE,
    "logo": f"{BASE}/logo.svg",
    "description": "VOIDS is een junior talent agency in Amsterdam die hoogopgeleid junior talent verbindt aan ambitieuze bedrijven via werkstudentschappen, stages en starterrollen.",
    "founder": [{"@type": "Person", "name": "Eva van Raaij"}, {"@type": "Person", "name": "Wieke Sleutjes"}],
    "address": {"@type": "PostalAddress", "addressLocality": "Amsterdam", "addressCountry": "NL"},
    "email": "contact@voids.agency",
    "sameAs": [
        "https://www.linkedin.com/company/voidsagency",
        "https://www.instagram.com/voids_agency/",
        "https://www.tiktok.com/@voidstalentagency",
    ],
}


def build_id():
    h = hashlib.sha1()
    for n in ("kit.css", "kit.js"):
        h.update(open(os.path.join(SITE, n), "rb").read())
    return h.hexdigest()[:8]


def page_of(path):
    """public/site/... file -> (lang, nl_path)"""
    rel = os.path.relpath(path, SITE).replace(os.sep, "/")
    lang = "nl"
    if rel.startswith("en/"):
        lang, rel = "en", rel[3:]
    if rel in ("index.html", "home.html"):
        return lang, "/"
    name = rel[:-5]
    if name.startswith("blog/") or name == "blog":
        return lang, "/" + name
    return lang, FILE_TO_PATH.get(name, "/" + name)


def url_for(lang, nl_path):
    if lang == "nl":
        return nl_path
    return "/en" if nl_path == "/" else "/en" + nl_path


def esc(s):
    return html.escape(s, quote=True)


def lookup(lang, nl_path):
    if nl_path.startswith("/blog/"):
        b = blog.get(nl_path[len("/blog/"):], {}).get(lang)
        if not b:
            return None
        return {"title": b["title"], "description": b["description"], "image": b.get("photo") or DEFAULT_IMAGE, "post": b}
    m = meta.get(nl_path, {}).get(lang)
    if not m:
        return None
    return {"title": m["title"], "description": m["description"], "image": DEFAULT_IMAGE}


def faq_ld(src):
    qa = re.findall(r"<details[^>]*>\s*<summary>(.*?)</summary>\s*<div class=\"k-a\">(.*?)</div>\s*</details>", src, re.S)
    if not qa:
        return None
    strip = lambda t: html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", t))).strip()
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(a)}} for q, a in qa],
    }


def seo_block(lang, nl_path, info, src):
    title = info["title"] if "VOIDS" in info["title"] else f"{info['title']} | VOIDS"
    desc = info["description"]
    url = BASE + url_for(lang, nl_path).rstrip("/") if url_for(lang, nl_path) != "/" else BASE
    nl_url = BASE + url_for("nl", nl_path) if nl_path != "/" else BASE
    en_url = BASE + url_for("en", nl_path)
    img = BASE + info["image"]
    og_title = title
    lines = [
        "<!--seo-->",
        f"<title>{esc(title)}</title>",
        f'<meta name="description" content="{esc(desc)}">',
        f'<link rel="canonical" href="{url}">',
        f'<link rel="alternate" hreflang="nl" href="{nl_url}">',
        f'<link rel="alternate" hreflang="en" href="{en_url}">',
        f'<link rel="alternate" hreflang="x-default" href="{nl_url}">',
        f'<meta property="og:title" content="{esc(og_title)}">',
        f'<meta property="og:description" content="{esc(desc)}">',
        '<meta property="og:type" content="%s">' % ("article" if "post" in info else "website"),
        f'<meta property="og:url" content="{url}">',
        '<meta property="og:site_name" content="VOIDS">',
        f'<meta property="og:locale" content="{"en_US" if lang == "en" else "nl_NL"}">',
        f'<meta property="og:image" content="{img}">',
        '<meta name="twitter:card" content="summary_large_image">',
        f'<meta name="twitter:title" content="{esc(og_title)}">',
        f'<meta name="twitter:description" content="{esc(desc)}">',
        f'<meta name="twitter:image" content="{img}">',
        '<link rel="icon" href="/favicon.ico">',
        '<meta name="theme-color" content="#fffaec">',
        '<script type="application/ld+json">' + json.dumps(ORG, ensure_ascii=False) + "</script>",
    ]
    if "post" in info:
        b = info["post"]
        ld = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": b["title"],
            "description": b["description"],
            "image": img,
            "datePublished": b.get("published") or "2026-10-11",
            "dateModified": b.get("updated") or b.get("published") or "2026-10-11",
            "inLanguage": "en-US" if lang == "en" else "nl-NL",
            "mainEntityOfPage": {"@type": "WebPage", "@id": url},
            "author": {"@type": "Organization", "name": "VOIDS", "url": BASE},
            "publisher": {"@type": "Organization", "name": "VOIDS", "url": BASE},
        }
        if b.get("sources"):
            ld["citation"] = [{"@type": "CreativeWork", "name": s["title"], "url": s["url"], "publisher": {"@type": "Organization", "name": s["publisher"]}} for s in b["sources"]]
        lines.append('<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + "</script>")
    if nl_path == "/faq":
        f = faq_ld(src)
        if f:
            lines.append('<script type="application/ld+json">' + json.dumps(f, ensure_ascii=False) + "</script>")
    lines.append("<!--/seo-->")
    return "\n".join(lines)


def main():
    bid = build_id()
    files = [f for f in glob.glob(os.path.join(SITE, "**", "*.html"), recursive=True)]
    missing, n = [], 0
    for f in sorted(files):
        src = open(f, encoding="utf-8").read()
        lang, nl_path = page_of(f)
        info = lookup(lang, nl_path)
        if not info:
            missing.append(os.path.relpath(f, ROOT))
            continue
        out = re.sub(r"<!--seo-->.*?<!--/seo-->\n?", "", src, flags=re.S)
        out = re.sub(r"<title>.*?</title>\s*", "", out, count=1, flags=re.S)
        block = seo_block(lang, nl_path, info, out)
        out, k = re.subn(r'(<meta name="viewport"[^>]*>)', lambda m: m.group(1) + "\n" + block, out, count=1)
        if not k:
            missing.append(os.path.relpath(f, ROOT) + " (no viewport meta)")
            continue
        out = re.sub(r'/site/kit\.(css|js)(\?v=[A-Za-z0-9]+)?', lambda m: f"/site/kit.{m.group(1)}?v={bid}", out)
        if out != src:
            open(f, "w", encoding="utf-8").write(out)
            n += 1
    print(f"finalized {len(files) - len(missing)} pages ({n} changed), build id {bid}")
    if missing:
        print("NO METADATA FOR:")
        for m in missing:
            print("  ", m)


if __name__ == "__main__":
    main()
