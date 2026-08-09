"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { WhatsAppTrigger } from "@/components/site/WhatsAppTrigger";
import { NAV, altLocalePath, localePath, t, type Lang } from "@/lib/i18n/common";

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname() || "/";
  const altPath = altLocalePath(pathname);
  const homeHref = lang === "en" ? "/en" : "/";
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu automatically whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "var(--voids-beige)",
        borderBottom: "1px solid var(--border-hairline)",
      }}
    >
      <div className="wrap" style={{ display: "flex", alignItems: "center", gap: 18, height: 70 }}>
        <Link href={homeHref} style={{ display: "flex", alignItems: "center", flex: "none" }}>
          <Logo variant="black" width={100} />
        </Link>

        <nav className="nav-desktop-only" style={{ gap: 2, marginLeft: 6, flexWrap: "wrap" }}>
          {NAV.map((n) => {
            const href = localePath(lang, n.path);
            const active = pathname === href;
            return (
              <Link key={n.id} href={href} style={navLinkStyle(active)}>
                {lang === "en" ? n.en : n.nl}
              </Link>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

        <div className="nav-desktop-only" style={{ alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid var(--border-hairline)",
              borderRadius: 999,
              overflow: "hidden",
              flex: "none",
            }}
          >
            <Link href={lang === "nl" ? pathname : altPath} style={langPillStyle(lang === "nl")}>
              NL
            </Link>
            <Link href={lang === "en" ? pathname : altPath} style={langPillStyle(lang === "en")}>
              EN
            </Link>
          </div>

          <Link href={localePath(lang, "/portal")} style={accountLinkStyle}>
            {t.accountLabel[lang]}
          </Link>

          <WhatsAppTrigger style={whatsTriggerStyle}>{t.whatsappCta[lang]}</WhatsAppTrigger>

          <div style={{ flex: "none", whiteSpace: "nowrap" }}>
            <Button variant="primary" size="sm" href={localePath(lang, "/pager")}>
              {t.careerPager[lang]}
            </Button>
          </div>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Sluit menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            flex: "none",
            marginLeft: "auto",
            background: "transparent",
            border: "1px solid var(--border-hairline)",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 20, lineHeight: 1 }}>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 20 }}>
            {NAV.map((n) => {
              const href = localePath(lang, n.path);
              const active = pathname === href;
              return (
                <Link key={n.id} href={href} style={{ ...navLinkStyle(active), padding: "13px 4px", fontSize: 16 }}>
                  {lang === "en" ? n.en : n.nl}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid var(--border-hairline)", paddingTop: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>Taal</span>
              <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border-hairline)", borderRadius: 999, overflow: "hidden" }}>
                <Link href={lang === "nl" ? pathname : altPath} style={langPillStyle(lang === "nl")}>
                  NL
                </Link>
                <Link href={lang === "en" ? pathname : altPath} style={langPillStyle(lang === "en")}>
                  EN
                </Link>
              </div>
            </div>

            <Link href={localePath(lang, "/portal")} style={{ ...accountLinkStyle, fontSize: 16 }}>
              {t.accountLabel[lang]}
            </Link>

            <WhatsAppTrigger style={{ ...whatsTriggerStyle, fontSize: 16 }}>{t.whatsappCta[lang]}</WhatsAppTrigger>

            <Button variant="primary" size="md" fullWidth href={localePath(lang, "/pager")}>
              {t.careerPager[lang]}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function navLinkStyle(active: boolean): React.CSSProperties {
  return {
    cursor: "pointer",
    fontSize: 13.5,
    fontWeight: active ? 600 : 500,
    color: active ? "var(--voids-purple)" : "var(--voids-ink-soft)",
    padding: "8px 11px",
    borderRadius: 6,
    background: active ? "var(--voids-purple-100)" : "transparent",
    whiteSpace: "nowrap",
  };
}

const accountLinkStyle: React.CSSProperties = {
  cursor: "pointer",
  fontSize: 13.5,
  fontWeight: 600,
  color: "var(--voids-ink-soft)",
  whiteSpace: "nowrap",
  flex: "none",
};

const whatsTriggerStyle: React.CSSProperties = {
  fontSize: 13.5,
  fontWeight: 600,
  color: "var(--voids-purple)",
  display: "flex",
  alignItems: "center",
  gap: 6,
  whiteSpace: "nowrap",
  flex: "none",
};

function langPillStyle(active: boolean): React.CSSProperties {
  return {
    cursor: "pointer",
    fontSize: 12,
    fontWeight: active ? 700 : 600,
    padding: "5px 11px",
    background: active ? "var(--voids-purple)" : "#fff",
    color: active ? "#fff" : "var(--voids-ink-muted)",
  };
}
