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
    "partnerships": "/companies/partnerships",
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
    for n in ("kit.css", "kit.js", "mobile.css"):
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


# ---------- header, menu and footer as static HTML (mirrors what kit.js used to inject) ----------
LABELS = {
    "nl": dict(talent="Talent", companies="Bedrijven", impact="Impact", about="Over ons", blog="Blog", jobboard="Jobs",
               s1="Werving & selectie", s2="Vacatures adverteren", s3="Partnerships", contact="Contact",
               pool="Word lid van de talentpool", tag="Wij verbinden hoogopgeleid talent aan ambitieuze organisaties.",
               menu="Menu", more="Meer", faq="FAQ", terms="Voorwaarden", privacy="Privacy", stay="Blijf op de hoogte",
               news="Vacaturemeldingen en community-updates via WhatsApp", vac="Vacatures van deze week",
               copy="© 2026 VOIDS.agency, Amsterdam", wa="WhatsApp"),
    "en": dict(talent="Talent", companies="Companies", impact="Impact", about="About", blog="Blog", jobboard="Jobs",
               s1="Recruitment & selection", s2="Advertise vacancies", s3="Partnerships", contact="Contact",
               pool="Join the talent pool", tag="We connect highly-educated talent with ambitious organisations.",
               menu="Menu", more="More", faq="FAQ", terms="Terms", privacy="Privacy", stay="Stay in the loop",
               news="Job alerts & community updates.", vac="This week's vacancies",
               copy="© 2026 VOIDS.agency, Amsterdam", wa="WhatsApp"),
}
WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/></svg>'
WA_URL = "https://linktr.ee/voidscommunity"
HOME_FILES = {"index.html", "en/home.html"}


def U(lang, name):
    base = "/en" if lang == "en" else ""
    return (base + "/" + name) if name else (base or "/")


def nav_items(lang):
    L = LABELS[lang]
    nav = [("talent", L["talent"], U(lang, "talent")), ("companies", L["companies"], U(lang, "companies")),
           ("impact", L["impact"], U(lang, "impact")), ("about", L["about"], U(lang, "about")),
           ("blog", L["blog"], U(lang, "blog")), ("jobboard", L["jobboard"], U(lang, "jobboard"))]
    serv = [(L["s1"], U(lang, "companies/recruitment-selection")), (L["s2"], U(lang, "companies/community-jobboard")),
            (L["s3"], U(lang, "companies/partnerships"))]
    return nav, serv


def mnav_html(lang, cur):
    L = LABELS[lang]
    nav, serv = nav_items(lang)
    rows = ""
    for key, label, url in nav:
        rows += f'<a class="k-mn{" on" if cur == key else ""}" href="{url}">{esc(label)}</a>'
        if key == "companies":
            rows += '<div class="k-mn-sub">' + "".join(f'<a href="{u}">{esc(t)}</a>' for t, u in serv) + "</div>"
    return (f'<div class="k-mnav" id="k-mnav"><nav aria-label="Menu">{rows}</nav><div class="k-mn-cta">'
            f'<a class="k-btn" href="{U(lang, "pager")}">{esc(L["pool"])}</a>'
            f'<a class="k-btn ghost" href="{U(lang, "about")}#contact">{esc(L["contact"])}</a>'
            f'<a class="k-mn-wa" href="{WA_URL}" target="_blank" rel="noopener">{WA_ICON}{esc(L["wa"])}</a></div></div>')


BURGER = ('<button class="k-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="k-mnav">'
          '<span class="k-bars" aria-hidden="true"><i></i><i></i></span></button>')


def header_html(lang, cur, other_url):
    L = LABELS[lang]
    nav, serv = nav_items(lang)
    links = ""
    for key, label, url in nav:
        if key == "companies":
            links += (f'<span class="k-dd"><a href="{url}" class="{"on" if cur == "companies" else ""}">{esc(label)} &#9662;</a>'
                      '<span class="k-dd-menu">' + "".join(f'<a href="{u}">{esc(t)}</a>' for t, u in serv) + "</span></span>")
        else:
            links += f'<a href="{url}" class="{"on" if cur == key else ""}">{esc(label)}</a>'
    pill = (f'<span class="k-lang"><a href="{other_url}">NL</a><b>EN</b></span>' if lang == "en"
            else f'<span class="k-lang"><b>NL</b><a href="{other_url}">EN</a></span>')
    return (f'<header class="k-header" id="kh"><a class="k-logo" href="{U(lang, "")}"><img src="/logo.svg" alt="VOIDS"></a>'
            f'<nav class="k-nav">{links}</nav><span class="k-sp"></span>{pill}'
            f'<a class="k-wa" href="{WA_URL}" target="_blank" rel="noopener">{WA_ICON}{esc(L["wa"])}</a>'
            f'<a class="k-hbtn" href="{U(lang, "about")}#contact">{esc(L["contact"])}</a>'
            f'<a class="k-hbtn p" href="{U(lang, "pager")}">{esc(L["pool"])}</a>{BURGER}{mnav_html(lang, cur)}</header>')


def footer_html(lang):
    L = LABELS[lang]
    nav, _ = nav_items(lang)
    menu = "".join(f'<a href="{u}">{esc(t)}</a>' for _, t, u in nav)
    return (f'<footer class="k-footer"><div class="k-wrap"><div><a class="k-logo" href="{U(lang, "")}" style="padding:0">'
            '<img src="/logo.svg" alt="VOIDS" style="height:24px;filter:brightness(0) invert(1)"></a>'
            f'<p>{esc(L["tag"])}</p></div><div><h4>{esc(L["menu"])}</h4>{menu}</div>'
            f'<div><h4>{esc(L["more"])}</h4><a href="{U(lang, "faq")}">{esc(L["faq"])}</a>'
            f'<a href="{U(lang, "terms")}">{esc(L["terms"])}</a><a href="{U(lang, "privacy")}">{esc(L["privacy"])}</a></div>'
            f'<div><h4>{esc(L["stay"])}</h4><a href="{WA_URL}" target="_blank" rel="noopener" style="padding:0">{esc(L["news"])}</a>'
            f'<a href="https://linktr.ee/voidsagency" target="_blank" rel="noopener" style="padding:0;margin-top:8px">{esc(L["vac"])} &rarr;</a>'
            '<div class="k-soc"><a href="https://www.linkedin.com/company/voidsagency" target="_blank" rel="noopener">LinkedIn</a>'
            '<a href="https://www.instagram.com/voids_agency/" target="_blank" rel="noopener">Instagram</a>'
            '<a href="https://www.tiktok.com/@voidstalentagency" target="_blank" rel="noopener">TikTok</a></div></div>'
            f'<div class="k-base"><span>{esc(L["copy"])}</span><span>contact@voids.agency</span></div></div></footer>')


BURGER_JS = ("<script>(function(){var h=document.getElementById('kh'),b=h&&h.querySelector('.k-burger');if(!b)return;"
             "function set(o){h.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');document.documentElement.classList.toggle('k-lock',o)}"
             "b.addEventListener('click',function(){set(!h.classList.contains('open'))});"
             "h.addEventListener('click',function(e){if(e.target.closest('.k-mnav a'))set(false)});"
             "document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});"
             "addEventListener('resize',function(){if(innerWidth>960)set(false)})})();</script>")


def apply_chrome(out, lang, nl_path, rel):
    """Static header + footer. Pages carry placeholders (or earlier generated blocks, marked with comments)."""
    cur = (re.search(r'<body[^>]*data-nav="([^"]*)"', out) or [None, ""])[1]
    other = url_for("nl" if lang == "en" else "en", nl_path)
    out = re.sub(r"<!--k-header-->.*?<!--/k-header-->", '<div id="k-header"></div>', out, flags=re.S)
    out = re.sub(r"<!--k-footer-->.*?<!--/k-footer-->", '<div id="k-footer"></div>', out, flags=re.S)
    out = out.replace('<div id="k-header"></div>', "<!--k-header-->" + header_html(lang, cur, other) + "<!--/k-header-->")
    out = out.replace('<div id="k-footer"></div>', "<!--k-footer-->" + footer_html(lang) + "<!--/k-footer-->")
    if rel in HOME_FILES:
        # the home page has its own header: add the burger and menu to it, and a footer (it had none)
        out = re.sub(r"<!--k-home-menu-->.*?<!--/k-home-menu-->", "", out, flags=re.S)
        out = re.sub(r"<!--k-footer-->.*?<!--/k-footer-->", "", out, flags=re.S)
        out = re.sub(r'<header(?: class="k-header" id="kh")?>', '<header class="k-header" id="kh">', out, count=1)
        out = out.replace("</header>", "<!--k-home-menu-->" + BURGER + mnav_html(lang, "") + "<!--/k-home-menu--></header>", 1)
        out = out.replace("</body>", "<!--k-footer-->" + footer_html(lang) + BURGER_JS + "<!--/k-footer-->\n</body>", 1)
        out = re.sub(r'<link rel="stylesheet" href="/site/chrome\.css[^"]*">\n?', "", out)
        out = out.replace("</head>", '<link rel="stylesheet" href="/site/chrome.css">\n</head>', 1)
    return out


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
        out = apply_chrome(out, lang, nl_path, os.path.relpath(f, SITE).replace(os.sep, '/'))
        block = seo_block(lang, nl_path, info, out)
        out, k = re.subn(r'(<meta name="viewport"[^>]*>)', lambda m: m.group(1) + "\n" + block, out, count=1)
        if not k:
            missing.append(os.path.relpath(f, ROOT) + " (no viewport meta)")
            continue
        out = re.sub(r'/site/kit\.(css|js)(\?v=[A-Za-z0-9]+)?', lambda m: f"/site/kit.{m.group(1)}?v={bid}", out)
        # mobile.css goes last in <head> so it wins over page-local styles
        out = re.sub(r'<link rel="stylesheet" href="/site/mobile\.css[^"]*">\n?', "", out)
        out = out.replace("</head>", f'<link rel="stylesheet" href="/site/mobile.css?v={bid}">\n</head>', 1)
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
