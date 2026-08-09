import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { NAV, SOCIALS, localePath, t, type Lang } from "@/lib/i18n/common";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{ background: "var(--voids-ink)", color: "#fff" }}>
      <div
        className="wrap g-collapse"
        style={{
          padding: "52px 32px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
          gap: 32,
        }}
      >
        <div>
          <Logo variant="white" width={110} />
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,.6)", margin: "16px 0 0", maxWidth: 260 }}>
            {t.footerTagline[lang]}
          </p>
        </div>

        <div>
          <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 12 }}>
            {t.footerMenu[lang]}
          </div>
          {NAV.map((n) => (
            <Link
              key={n.id}
              href={localePath(lang, n.path)}
              style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.8)", padding: "5px 0" }}
            >
              {lang === "en" ? n.en : n.nl}
            </Link>
          ))}
        </div>

        <div>
          <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 12 }}>
            {t.footerMore[lang]}
          </div>
          <Link href={localePath(lang, "/faq")} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.8)", padding: "5px 0" }}>
            {t.footerFaq[lang]}
          </Link>
          <Link href={localePath(lang, "/terms")} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.8)", padding: "5px 0" }}>
            {t.footerTerms[lang]}
          </Link>
          <Link href={localePath(lang, "/privacy")} style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.8)", padding: "5px 0" }}>
            {t.footerPrivacy[lang]}
          </Link>
        </div>

        <div>
          <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 12 }}>
            {t.footerStayUpdated[lang]}
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", margin: "0 0 12px" }}>{t.footerNewsletterSub[lang]}</p>
          <WhatsAppButton variant="secondary" size="sm">
            {t.whatsappCta[lang]}
          </WhatsAppButton>
          <div style={{ display: "flex", gap: 14, marginTop: 18, fontSize: 13 }}>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.7)" }}>
              LinkedIn
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.7)" }}>
              Instagram
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.7)" }}>
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div
          className="wrap"
          style={{
            padding: "18px 32px",
            fontSize: 12,
            color: "rgba(255,255,255,.4)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>{t.footerCopyright[lang]}</span>
          <span>info@voids.agency</span>
        </div>
      </div>
    </footer>
  );
}
