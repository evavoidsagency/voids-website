"use client";

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

        <nav style={{ display: "flex", gap: 2, marginLeft: 6, flexWrap: "wrap" }}>
          {NAV.map((n) => {
            const href = localePath(lang, n.path);
            const active = pathname === href;
            return (
              <Link
                key={n.id}
                href={href}
                style={{
                  cursor: "pointer",
                  fontSize: 13.5,
                  fontWeight: active ? 600 : 500,
                  color: active ? "var(--voids-purple)" : "var(--voids-ink-soft)",
                  padding: "8px 11px",
                  borderRadius: 6,
                  background: active ? "var(--voids-purple-100)" : "transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {lang === "en" ? n.en : n.nl}
              </Link>
            );
          })}
        </nav>

        <div style={{ flex: 1 }} />

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
          <Link
            href={lang === "nl" ? pathname : altPath}
            style={langPillStyle(lang === "nl")}
          >
            NL
          </Link>
          <Link
            href={lang === "en" ? pathname : altPath}
            style={langPillStyle(lang === "en")}
          >
            EN
          </Link>
        </div>

        <Link
          href={localePath(lang, "/portal")}
          style={{
            cursor: "pointer",
            fontSize: 13.5,
            fontWeight: 600,
            color: "var(--voids-ink-soft)",
            whiteSpace: "nowrap",
            flex: "none",
          }}
        >
          {t.accountLabel[lang]}
        </Link>

        <WhatsAppTrigger
          style={{
            fontSize: 13.5,
            fontWeight: 600,
            color: "var(--voids-purple)",
            display: "flex",
            alignItems: "center",
            gap: 6,
            whiteSpace: "nowrap",
            flex: "none",
          }}
        >
          {t.whatsappCta[lang]}
        </WhatsAppTrigger>

        <div style={{ flex: "none", whiteSpace: "nowrap" }}>
          <Button variant="primary" size="sm" href={localePath(lang, "/pager")}>
            {t.careerPager[lang]}
          </Button>
        </div>
      </div>
    </header>
  );
}

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
