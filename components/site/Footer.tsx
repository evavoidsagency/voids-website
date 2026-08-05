import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { NAV, SOCIALS, localePath, t, type Lang } from "@/lib/i18n/common";

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{ background: "var(--voids-ink)", color: "#fff" }}>
      <div
        className="wrap"
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
          <a href="https://www.voids.agency/faq" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.8)", padding: "5px 0" }}>
            {t.footerFaq[lang]}
          </a>
          <a href="https://www.voids.agency/privacy-policy" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,.8)", padding: "5px 0" }}>
            {t.footerPrivacy[lang]}
          </a>
        </div>

        <div>
          <div style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 12 }}>
            {t.footerStayUpdated[lang]}
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", margin: "0 0 12px" }}>{t.footerNewsletterSub[lang]}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              placeholder={t.footerEmailPlaceholder[lang]}
              style={{
                flex: 1,
                minWidth: 0,
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "var(--radius-md)",
                padding: "10px 12px",
                color: "#fff",
                fontSize: 13,
                fontFamily: "var(--font-sans)",
              }}
            />
            <WhatsAppButton variant="secondary" size="sm">
              {t.footerOn[lang]}
            </WhatsAppButton>
          </div>
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
