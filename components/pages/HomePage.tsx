import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Photo } from "@/components/ui/Photo";
import { findLogoFile } from "@/lib/logos";
import { localePath, type Lang } from "@/lib/i18n/common";
import { NICHES, TRUSTED, TESTIMONIALS } from "@/lib/content/home-content";

const COPY: Record<
  Lang,
  {
    heroTitle: string;
    heroSub: string;
    ctaCompanies: string;
    ctaTalent: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    nicheLabel: string;
    trustedBy: string;
    doorTalentTitle: string;
    doorTalentText: string;
    doorTalentCta: string;
    doorCompaniesTitle: string;
    doorCompaniesText: string;
    doorCompaniesCta: string;
    testimonialsLabel: string;
    missionLabel: string;
    missionTitle: string;
    missionText: string;
    missionCta: string;
    finalTitle: string;
    finalText: string;
    finalCta: string;
    heroAlt: string;
    missionAlt: string;
  }
> = {
  nl: {
    heroTitle: "AMBITIEUS TALENT.\nAMBITIEUZE BEDRIJVEN.\nÉÉN MATCH.",
    heroSub:
      "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties, voorbij het cv, met oog voor drijfveren, werkstijl en ambitie.",
    ctaCompanies: "Voor bedrijven →",
    ctaTalent: "Voor talent",
    stat1Label: "in de community",
    stat2Label: "eerlijke voorwaarden & fair pay",
    stat3Label: "winst naar impact",
    nicheLabel: "Onze niche:",
    trustedBy: "VERTROUWD DOOR",
    doorTalentTitle: "VOOR TALENT",
    doorTalentText:
      "Vind een rol via ons jobboard, sluit je aan bij de WhatsApp-community voor nieuwe kansen, of vertel ons wat je drijft en ontvang een gratis career pager op maat.",
    doorTalentCta: "Ontdek de talentkant →",
    doorCompaniesTitle: "VOOR BEDRIJVEN",
    doorCompaniesText:
      "Een voorgeselecteerde shortlist in plaats van een stapel cv’s: werkstudenten, stagiairs en starters, gematcht op cultuur en groeifase.",
    doorCompaniesCta: "Bekijk het aanbod →",
    testimonialsLabel: "Wat opdrachtgevers en talent zeggen",
    missionLabel: "Onze missie",
    missionTitle: "EERLIJK WERK, GELIJKE KANSEN.",
    missionText:
      "We bouwen aan een eerlijkere arbeidsmarkt voor starters, met transparante voorwaarden, fair wages en gelijke kansen ongeacht netwerk of achtergrond. Het is onze ambitie om daar vanaf medio 2027 ook 10% van onze winst aan terug te geven.",
    missionCta: "Onze impact →",
    finalTitle: "STOP MET ZOEKEN, START MET ONTVANGEN.",
    finalText:
      "Sluit je aan bij 4.000+ studenten en starters in onze community. Passende kansen krijg je direct via WhatsApp.",
    finalCta: "💜 Join de WhatsApp-community",
    heroAlt: "Twee collega's aan het werk op kantoor",
    missionAlt: "Het VOIDS-team op kantoor",
  },
  en: {
    heroTitle: "AMBITIOUS TALENT.\nAMBITIOUS COMPANIES.\nONE MATCH.",
    heroSub:
      "We connect highly-educated talent with ambitious organisations, beyond the CV, with an eye for motivation, working style and ambition.",
    ctaCompanies: "For companies →",
    ctaTalent: "For talent",
    stat1Label: "in the community",
    stat2Label: "fair terms & fair pay",
    stat3Label: "profit to impact",
    nicheLabel: "Our niche:",
    trustedBy: "TRUSTED BY",
    doorTalentTitle: "FOR TALENT",
    doorTalentText:
      "Find a role on our job board, join the WhatsApp community for new opportunities, or tell us what drives you and get a free, personalised career pager.",
    doorTalentCta: "Explore the talent side →",
    doorCompaniesTitle: "FOR COMPANIES",
    doorCompaniesText:
      "A pre-selected shortlist instead of a stack of CVs: working students, interns and starters, matched on culture and growth stage.",
    doorCompaniesCta: "See what we offer →",
    testimonialsLabel: "What clients and talent say",
    missionLabel: "Our mission",
    missionTitle: "FAIR WORK, EQUAL CHANCES.",
    missionText:
      "We’re building a fairer job market for starters, with transparent terms, fair wages and equal chances regardless of network or background. It's our ambition to also give back 10% of our profit to that cause from mid-2027.",
    missionCta: "Our impact →",
    finalTitle: "STOP SEARCHING, START RECEIVING.",
    finalText:
      "Join 4,000+ students and starters in our community. Matching opportunities come straight to your WhatsApp.",
    finalCta: "💜 Join the WhatsApp community",
    heroAlt: "Two colleagues working together in the office",
    missionAlt: "The VOIDS team at the office",
  },
};

export function HomePage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const p = (path: string) => localePath(lang, path);

  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div
          className="wrap g-collapse"
          style={{
            display: "grid",
            gridTemplateColumns: ".95fr 1.15fr",
            gap: 44,
            alignItems: "center",
            padding: "70px 32px 76px",
          }}
        >
          <div>
            <h1 className="anton hero-h1" style={{ fontSize: 44, lineHeight: 1.12, margin: "0 0 20px", color: "#fff", whiteSpace: "pre-line" }}>
              {c.heroTitle}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-purple-100)", maxWidth: 520, margin: "0 0 30px" }}>
              {c.heroSub}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="secondary" size="lg" href={p("/companies")}>
                {c.ctaCompanies}
              </Button>
              <Button variant="outline" size="lg" onDark href={p("/talent")}>
                {c.ctaTalent}
              </Button>
            </div>
            <div style={{ display: "flex", gap: 22, marginTop: 40, flexWrap: "nowrap" }}>
              <div>
                <div className="anton" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#fff", whiteSpace: "nowrap" }}>4.000+</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-purple-100)" }}>{c.stat1Label}</div>
              </div>
              <div>
                <div className="anton" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#fff", whiteSpace: "nowrap" }}>100%</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-purple-100)" }}>{c.stat2Label}</div>
              </div>
              <div>
                <div className="anton" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#fff", whiteSpace: "nowrap" }}>10%</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-purple-100)" }}>{c.stat3Label}</div>
              </div>
            </div>
          </div>
          <Photo src="/photography/home-hero-5.jpg" alt={c.heroAlt} ratio="3 / 2" priority />
        </div>
      </section>

      {/* NICHE STRIP */}
      <section
        className="wrap"
        style={{
          padding: "26px 32px",
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{c.nicheLabel}</span>
        {NICHES[lang].map((n) => (
          <span
            key={n}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--voids-purple)",
              background: "var(--voids-purple-100)",
              padding: "6px 13px",
              borderRadius: 6,
            }}
          >
            {n}
          </span>
        ))}
      </section>

      {/* TRUSTED BY */}
      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "34px 32px" }}>
          <div className="anton" style={{ fontSize: 20, textAlign: "center", marginBottom: 22 }}>
            {c.trustedBy}
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", gap: 14, overflowX: "auto", padding: "4px 2px 10px" }}>
              {TRUSTED.map(({ name, slug, url }) => {
                const logoUrl = findLogoFile(slug);
                const tileStyle: CSSProperties = {
                  width: 140,
                  height: 72,
                  borderRadius: "var(--radius-md)",
                  flex: "none",
                  background: "#fff",
                  border: logoUrl ? "1px solid var(--border-hairline)" : "1px dashed var(--voids-line)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                };
                const content = logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={logoUrl} alt={name} width={116} height={48} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                ) : (
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--voids-ink-muted)", textAlign: "center", lineHeight: 1.3 }}>
                    {name}
                  </span>
                );
                return url ? (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" title={name} style={tileStyle}>
                    {content}
                  </a>
                ) : (
                  <div key={name} title={name} style={tileStyle}>
                    {content}
                  </div>
                );
              })}
            </div>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 10,
                width: 56,
                background: "linear-gradient(to right, transparent, var(--voids-beige))",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </section>

      {/* TWO DOORS */}
      <section className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <Link
          href={p("/talent")}
          className="card"
          style={{ display: "flex", flexDirection: "column", borderTop: "3px solid var(--voids-blue)", padding: 32, textDecoration: "none" }}
        >
          <div className="anton" style={{ fontSize: 28 }}>{c.doorTalentTitle}</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "12px 0 18px", flex: 1 }}>
            {c.doorTalentText}
          </p>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-blue)" }}>{c.doorTalentCta}</span>
        </Link>
        <Link
          href={p("/companies")}
          className="card"
          style={{ display: "flex", flexDirection: "column", borderTop: "3px solid var(--voids-purple)", padding: 32, textDecoration: "none" }}
        >
          <div className="anton" style={{ fontSize: 28 }}>{c.doorCompaniesTitle}</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "12px 0 18px", flex: 1 }}>
            {c.doorCompaniesText}
          </p>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-purple)" }}>{c.doorCompaniesCta}</span>
        </Link>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "60px 32px" }}>
          <div className="anton" style={{ fontSize: 15, letterSpacing: ".06em", color: "var(--voids-ink-muted)", marginBottom: 26 }}>
            {c.testimonialsLabel}
          </div>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            {TESTIMONIALS[lang].map((t) => (
              <div key={t.name + t.quote} style={{ background: "var(--voids-beige)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", padding: 26 }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 500, lineHeight: 1.5, color: "var(--voids-ink)", margin: "0 0 18px" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                  {t.photo ? (
                    <div style={{ width: 46, height: 46, borderRadius: "50%", flex: "none", overflow: "hidden", position: "relative" }}>
                      <Photo src={t.photo} alt={t.name} ratio="1 / 1" radius="0" sizes="46px" />
                    </div>
                  ) : (
                    <div style={{ width: 46, height: 46, borderRadius: "50%", flex: "none", background: "var(--voids-line-soft)" }} />
                  )}
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-ink)" }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / IMPACT TEASER */}
      <section className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 44, alignItems: "center" }}>
        <Photo src="/photography/home-mission.jpg" alt={c.missionAlt} ratio="1 / 1" />
        <div>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.missionLabel}</span>
          <h2 className="anton section-h2" style={{ fontSize: 40, margin: "10px 0 16px" }}>{c.missionTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", maxWidth: 520, margin: "0 0 22px" }}>
            {c.missionText}
          </p>
          <Button variant="primary" size="md" href={p("/impact")}>
            {c.missionCta}
          </Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "var(--voids-blue)" }}>
        <div className="wrap" style={{ padding: "56px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton" style={{ fontSize: 38, margin: "0 0 12px", color: "#fff" }}>{c.finalTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--voids-blue-100)", maxWidth: 540, margin: "0 auto 24px" }}>{c.finalText}</p>
          <WhatsAppButton variant="primary" size="lg">{c.finalCta}</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
