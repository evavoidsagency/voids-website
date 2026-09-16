import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Photo } from "@/components/ui/Photo";
import { CountUp } from "@/components/ui/CountUp";
import { findLogoFile } from "@/lib/logos";
import { localePath, type Lang } from "@/lib/i18n/common";
import { TRUSTED, TESTIMONIALS } from "@/lib/content/home-content";

/** Only companies with a full worked-out case on the W&S page (lib/content/cases.ts)
    so the "new vacancy" bubbles on the final CTA point to a real, substantiated
    example rather than just any logo from the trusted-by row. This mirrors how
    the WhatsApp community actually works: a feed of new vacancies for everyone,
    not a personalised match. */
const VACANCY_BUBBLES: Record<Lang, { role: string; company: string }[]> = {
  nl: [
    { role: "Werkstudent Finance", company: "Joulz" },
    { role: "Werkstudent Marketing", company: "Enerzien" },
    { role: "Werkstudent Business Development", company: "HotelPlanner" },
    { role: "Founder's Associate", company: "The Longevity Store" },
  ],
  en: [
    { role: "Working student Finance", company: "Joulz" },
    { role: "Working student Marketing", company: "Enerzien" },
    { role: "Working student Business Development", company: "HotelPlanner" },
    { role: "Founder's Associate", company: "The Longevity Store" },
  ],
};

const COPY: Record<
  Lang,
  {
    heroTitle: string;
    heroSub: string;
    ctaCompanies: string;
    ctaTalent: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    trustedBy: string;
    doorTalentTitle: string;
    doorTalentText: string;
    doorTalentCta: string;
    doorCompaniesTitle: string;
    doorCompaniesTalentTypes: string;
    doorCompaniesText: string;
    doorCompaniesCta: string;
    testimonialsLabel: string;
    testimonialCompanyTag: string;
    testimonialTalentTag: string;
    missionLabel: string;
    missionTitle: string;
    missionText: string;
    missionCta: string;
    finalTitle: string;
    finalText: string;
    finalCta: string;
    vacancyBubbleLabel: string;
    vacancyBubbleAt: string;
    vacancyBubbleNow: string;
    heroAlt: string;
    missionAlt: string;
  }
> = {
  nl: {
    heroTitle: "AMBITIEUS TALENT.\nAMBITIEUZE BEDRIJVEN.\nÉÉN MATCH.",
    heroSub:
      "Wij verbinden hoogopgeleid jong talent aan ambitieuze organisaties, voorbij het cv, met oog voor drijfveren, werkstijl en ambitie.",
    ctaCompanies: "Voor bedrijven →",
    ctaTalent: "Voor talent",
    stat1Value: "4.000+",
    stat1Label: "in de community",
    stat2Value: "100%",
    stat2Label: "transparante voorwaarden & eerlijke beloning",
    stat3Value: "10%",
    stat3Label: "winst naar impact",
    trustedBy: "VERTROUWD DOOR",
    doorTalentTitle: "VOOR TALENT",
    doorTalentText:
      "Vind een rol via ons jobboard, sluit je aan bij de WhatsApp-community voor nieuwe kansen, of vertel ons wat je drijft en ontvang een gratis career pager op maat.",
    doorTalentCta: "Ontdek de talentkant →",
    doorCompaniesTitle: "VOOR BEDRIJVEN",
    doorCompaniesTalentTypes: "Werkstudenten, stagiairs, starters én trainees:",
    doorCompaniesText:
      "een voorgeselecteerde shortlist in plaats van een stapel cv’s, gematcht op cultuur en groeifase.",
    doorCompaniesCta: "Bekijk het aanbod →",
    testimonialsLabel: "Wat opdrachtgevers en talent zeggen",
    testimonialCompanyTag: "Opdrachtgever",
    testimonialTalentTag: "Talent",
    missionLabel: "Onze missie",
    missionTitle: "EERLIJK WERK, GELIJKE KANSEN.",
    missionText:
      "We bouwen aan een eerlijkere arbeidsmarkt voor starters, met transparante voorwaarden, eerlijke beloning en gelijke kansen ongeacht netwerk of achtergrond. Het is onze ambitie om daar vanaf medio 2027 ook 10% van onze winst aan terug te geven.",
    missionCta: "Onze impact →",
    finalTitle: "STOP MET ZOEKEN, START MET ONTVANGEN.",
    finalText:
      "Sluit je aan bij 4.000+ studenten en starters in onze community. Nieuwe vacatures krijg je direct via WhatsApp.",
    finalCta: "💜 Sluit je aan bij de WhatsApp-community",
    vacancyBubbleLabel: "Nieuwe vacature",
    vacancyBubbleAt: "bij",
    vacancyBubbleNow: "nu",
    heroAlt: "Twee collega's aan het werk op kantoor",
    missionAlt: "Het VOIDS-team op kantoor",
  },
  en: {
    heroTitle: "AMBITIOUS TALENT.\nAMBITIOUS COMPANIES.\nONE MATCH.",
    heroSub:
      "We connect highly-educated young talent with ambitious organisations, beyond the CV, with an eye for motivation, working style and ambition.",
    ctaCompanies: "For companies →",
    ctaTalent: "For talent",
    stat1Value: "4,000+",
    stat1Label: "in the community",
    stat2Value: "100%",
    stat2Label: "transparent terms & fair pay",
    stat3Value: "10%",
    stat3Label: "profit to impact",
    trustedBy: "TRUSTED BY",
    doorTalentTitle: "FOR TALENT",
    doorTalentText:
      "Find a role on our job board, join the WhatsApp community for new opportunities, or tell us what drives you and get a free, personalised career pager.",
    doorTalentCta: "Explore the talent side →",
    doorCompaniesTitle: "FOR COMPANIES",
    doorCompaniesTalentTypes: "Working students, interns, starters and trainees:",
    doorCompaniesText:
      "a pre-selected shortlist instead of a stack of CVs, matched on culture and growth stage.",
    doorCompaniesCta: "See what we offer →",
    testimonialsLabel: "What clients and talent say",
    testimonialCompanyTag: "Client",
    testimonialTalentTag: "Talent",
    missionLabel: "Our mission",
    missionTitle: "FAIR WORK, EQUAL CHANCES.",
    missionText:
      "We’re building a fairer job market for starters, with transparent terms, fair wages and equal chances regardless of network or background. It's our ambition to also give back 10% of our profit to that cause from mid-2027.",
    missionCta: "Our impact →",
    finalTitle: "STOP SEARCHING, START RECEIVING.",
    finalText:
      "Join 4,000+ students and starters in our community. New vacancies land straight in your WhatsApp.",
    finalCta: "💜 Join the WhatsApp community",
    vacancyBubbleLabel: "New vacancy",
    vacancyBubbleAt: "at",
    vacancyBubbleNow: "now",
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
            gridTemplateColumns: ".5fr 1.6fr",
            gap: 40,
            alignItems: "flex-start",
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
            <div className="flex-collapse" style={{ display: "flex", alignItems: "flex-start", gap: 28, marginTop: 40, flexWrap: "nowrap" }}>
              <div style={{ width: 100, flex: "none", textAlign: "center" }}>
                <div className="anton" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#fff", whiteSpace: "nowrap" }}><CountUp value={c.stat1Value} /></div>
                <div style={{ fontSize: 12.5, lineHeight: 1.45, color: "var(--voids-purple-100)", marginTop: 6 }}>{c.stat1Label}</div>
              </div>
              <div style={{ width: 220, flex: "none", textAlign: "center" }}>
                <div className="anton" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#fff", whiteSpace: "nowrap" }}><CountUp value={c.stat2Value} /></div>
                <div style={{ fontSize: 12.5, lineHeight: 1.45, color: "var(--voids-purple-100)", marginTop: 6 }}>{c.stat2Label}</div>
              </div>
              <div style={{ width: 110, flex: "none", textAlign: "center" }}>
                <div className="anton" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "#fff", whiteSpace: "nowrap" }}><CountUp value={c.stat3Value} /></div>
                <div style={{ fontSize: 12.5, lineHeight: 1.45, color: "var(--voids-purple-100)", marginTop: 6 }}>{c.stat3Label}</div>
              </div>
            </div>
          </div>
          <Photo src="/photography/home-hero-7.jpg" alt={c.heroAlt} ratio="2000 / 1344" priority />
        </div>
      </section>

      {/* TRUSTED BY */}
      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "48px 32px 0" }}>
          <div className="anton" style={{ fontSize: 13, letterSpacing: ".08em", textAlign: "center", color: "var(--voids-ink-muted)" }}>
            {c.trustedBy}
          </div>
        </div>
        <div className="logo-marquee-mask" style={{ marginTop: 26, paddingBottom: 56 }}>
          <div className="logo-marquee-track">
            {[...TRUSTED, ...TRUSTED].map(({ name, slug, url }, i) => {
              const logoUrl = findLogoFile(slug);
              const content = logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt={name} className="logo-marquee-img" />
              ) : (
                <span className="logo-marquee-fallback">{name}</span>
              );
              return url ? (
                <a key={`${name}-${i}`} href={url} target="_blank" rel="noopener noreferrer" title={name} className="logo-marquee-item">
                  {content}
                </a>
              ) : (
                <div key={`${name}-${i}`} title={name} className="logo-marquee-item">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TWO DOORS */}
      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <Link
            href={p("/talent")}
            className="card card--hoverable"
            style={{ display: "flex", flexDirection: "column", borderTop: "3px solid var(--voids-blue)", padding: 32, textDecoration: "none" }}
          >
            <div className="anton" style={{ fontSize: 28 }}>{c.doorTalentTitle}</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "12px 0 18px", flex: 1 }}>
              {c.doorTalentText}
            </p>
            <span className="door-cta" style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-blue)", display: "inline-block" }}>{c.doorTalentCta}</span>
          </Link>
          <Link
            href={p("/companies")}
            className="card card--hoverable"
            style={{ display: "flex", flexDirection: "column", borderTop: "3px solid var(--voids-purple)", padding: 32, textDecoration: "none" }}
          >
            <div className="anton" style={{ fontSize: 28 }}>{c.doorCompaniesTitle}</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "12px 0 18px", flex: 1 }}>
              {c.doorCompaniesTalentTypes} {c.doorCompaniesText}
            </p>
            <span className="door-cta" style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-purple)", display: "inline-block" }}>{c.doorCompaniesCta}</span>
          </Link>
        </div>
      </section>

      {/* MISSION / IMPACT TEASER */}
      <section style={{ background: "var(--voids-purple-100)" }}>
        <div className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 44, alignItems: "center" }}>
          <Photo src="/photography/home-mission.jpg" alt={c.missionAlt} ratio="1 / 1" />
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.missionLabel}</span>
            <h2 className="anton section-h2" style={{ fontSize: 40, margin: "10px 0 16px" }}>{c.missionTitle}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-soft)", maxWidth: 520, margin: "0 0 22px" }}>
              {c.missionText}
            </p>
            <Button variant="primary" size="md" href={p("/impact")}>
              {c.missionCta}
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — the two quotes are literally the two sides of a match
          (a company and a talent), so the cards borrow the blue/purple
          split already used for "voor talent" / "voor bedrijven" elsewhere
          on this page, with a staggered layout instead of a flat grid. */}
      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "68px 32px" }}>
          <div className="anton" style={{ fontSize: 15, letterSpacing: ".06em", color: "var(--voids-ink-muted)", marginBottom: 34 }}>
            {c.testimonialsLabel}
          </div>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
            {TESTIMONIALS[lang].map((t) => {
              const color = t.side === "company" ? "var(--voids-purple)" : "var(--voids-blue)";
              const tag = t.side === "company" ? c.testimonialCompanyTag : c.testimonialTalentTag;
              return (
                <div
                  key={t.name + t.quote}
                  className="testimonial-card"
                  style={{ position: "relative", background: "#fff", borderRadius: "var(--radius-lg)", padding: "30px 28px 26px", overflow: "hidden" }}
                >
                  <svg aria-hidden="true" className="testimonial-quote-mark" style={{ color }} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      d="M0 30.5C0 15.5 9.5 4.8 25 0l3.6 7.4C18.9 11 14 17.4 13.4 25.3c1.4-.7 3-1 4.8-1 6.6 0 11.4 4.7 11.4 11.4 0 6.8-5 12.3-12 12.3C7.9 48 0 40.8 0 30.5Zm34.4 0C34.4 15.5 43.9 4.8 59.4 0L63 7.4C53.3 11 48.4 17.4 47.8 25.3c1.4-.7 3-1 4.8-1 6.6 0 11.4 4.7 11.4 11.4 0 6.8-5 12.3-12 12.3-9.7 0-17.6-7.2-17.6-17.5Z"
                    />
                  </svg>
                  <span
                    className="anton"
                    style={{ position: "relative", display: "inline-block", fontSize: 11, letterSpacing: ".08em", color, background: `color-mix(in srgb, ${color} 12%, transparent)`, padding: "5px 10px", borderRadius: 999, marginBottom: 16 }}
                  >
                    {tag}
                  </span>
                  <p style={{ position: "relative", fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 500, lineHeight: 1.5, color: "var(--voids-ink)", margin: "0 0 20px" }}>
                    {t.quote}
                  </p>
                  <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 13 }}>
                    {t.photo ? (
                      <div style={{ width: 46, height: 46, borderRadius: "50%", flex: "none", overflow: "hidden", position: "relative", boxShadow: `0 0 0 2px #fff, 0 0 0 3.5px ${color}` }}>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA — a stack of "new vacancy" bubbles cycles behind the ask,
          showing the actual WhatsApp mechanic (a feed of new vacancies for
          everyone) instead of overpromising a personalised match. */}
      <section style={{ background: "var(--voids-blue)" }}>
        <div
          className="wrap g-collapse"
          style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 48, alignItems: "center" }}
        >
          <div style={{ color: "#fff" }}>
            <h2 className="anton" style={{ fontSize: 38, margin: "0 0 12px", color: "#fff" }}>{c.finalTitle}</h2>
            <p style={{ fontSize: 16, color: "var(--voids-blue-100)", maxWidth: 440, margin: "0 0 24px" }}>{c.finalText}</p>
            <WhatsAppButton variant="primary" size="lg">{c.finalCta}</WhatsAppButton>
          </div>
          <div className="vacancy-bubble-stack">
            {VACANCY_BUBBLES[lang].map((v, i) => (
              <div key={v.company} className="vacancy-bubble" style={{ animationDelay: `${i * 4}s` }}>
                <span className="vacancy-bubble-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#25D366" />
                    <path
                      fill="#fff"
                      d="M12 5.5c-3.6 0-6.5 2.9-6.5 6.5 0 1.15.3 2.24.87 3.2L5.5 18.5l3.42-.85c.93.5 1.98.77 3.08.77 3.6 0 6.5-2.9 6.5-6.5s-2.9-6.42-6.5-6.42zm3.8 9.18c-.16.45-.94.86-1.3.91-.33.05-.75.07-1.21-.08-.28-.09-.64-.2-1.1-.4-1.94-.84-3.2-2.8-3.3-2.93-.1-.13-.79-1.05-.79-2 0-.95.5-1.42.68-1.61.18-.19.39-.24.52-.24l.37.01c.12 0 .28-.02.43.33.16.37.54 1.28.59 1.37.05.1.08.21.02.34-.06.13-.09.21-.18.32-.09.11-.19.25-.27.33-.09.09-.18.19-.08.37.1.19.46.76.98 1.23.68.6 1.24.79 1.43.88.19.09.3.08.41-.05.11-.13.47-.55.6-.74.13-.19.25-.15.42-.09.17.06 1.08.51 1.27.6.19.09.31.14.36.21.05.08.05.44-.11.89z"
                    />
                  </svg>
                </span>
                <span className="vacancy-bubble-content">
                  <span className="vacancy-bubble-eyebrow">
                    {c.vacancyBubbleLabel}
                    <time>{c.vacancyBubbleNow}</time>
                  </span>
                  <span className="vacancy-bubble-text">
                    <strong>{v.role}</strong> {c.vacancyBubbleAt} <strong>{v.company}</strong>
                  </span>
                </span>
                <span className="vacancy-bubble-chevron" aria-hidden="true">›</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
