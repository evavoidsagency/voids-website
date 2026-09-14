import Link from "next/link";
import type { ReactNode } from "react";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { CalendlyButton } from "@/components/site/CalendlyButton";
import { CountUp } from "@/components/ui/CountUp";
import { findLogoFile } from "@/lib/logos";
import { localePath, type Lang } from "@/lib/i18n/common";
import { PROCESS } from "@/lib/content/companies-content";
import { CLIENT_CASES } from "@/lib/content/cases";
import { TALENT_PROFILES } from "@/lib/content/talent-profiles";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    ctaIntro: string;
    heroStats: { value: string; label: string }[];
    processTitle: string;
    processSub: string;
    casesTitle: string;
    casesSub: string;
    profilesTitle: string;
    profilesSub: string;
    calcNote: string;
    calcCta: string;
    finalTitle: string;
    finalCta: string;
  }
> = {
  nl: {
    eyebrow: "Werving & selectie",
    title: "HET HELE PROCES, UIT HANDEN.",
    sub: "Wij zoeken in opdracht van jouw organisatie naar junior talent, van werkstudent tot stagiair en starter, om je openstaande rol in te vullen. Zes stappen, wij doen het werk, jullie beslissen.",
    ctaIntro: "Plan een kennismaking",
    heroStats: [
      { value: "2-4", label: "voorgeselecteerde kandidaten per shortlist" },
      { value: "~3 weken", label: "gemiddelde tijd tot shortlist" },
      { value: "4.000+", label: "studenten en starters in onze community" },
    ],
    processTitle: "HOE HET WERKT",
    processSub: "Zes stappen, wij doen het werk, jullie beslissen.",
    casesTitle: "MATCHES DIE WERKEN",
    casesSub: "Een kleine greep uit de vele bedrijven waar we mee hebben samengewerkt, van scale-up tot corporate.",
    profilesTitle: "HIGH ACHIEVERS, GESELECTEERD OP KWALITEIT EN CULTUUR.",
    profilesSub: "We sourcen voornamelijk hbo- en wo-studenten en young professionals: ambitieus, snel zelfstandig en gewend om te presteren naast hun studie. We matchen niet alleen op skills, maar vooral op cultuurfit, zodat wat we voorstellen ook echt past.",
    calcNote: "Benieuwd wat een werkstudent, stagiair of starter kost, en wanneer je voor welke kiest?",
    calcCta: "Bekijk de calculator en checklist →",
    finalTitle: "KLAAR OM TE SCHALEN?",
    finalCta: "Plan een kennismaking",
  },
  en: {
    eyebrow: "Recruitment & selection",
    title: "WE RUN THE WHOLE PROCESS.",
    sub: "On behalf of your organisation, we search for junior talent, from working students to interns and starters, to fill your open role. Six steps, we do the work, you decide.",
    ctaIntro: "Book an intro call",
    heroStats: [
      { value: "2-4", label: "pre-selected candidates per shortlist" },
      { value: "~3 weeks", label: "average time to shortlist" },
      { value: "4,000+", label: "students and starters in our community" },
    ],
    processTitle: "HOW IT WORKS",
    processSub: "Six steps, we do the work, you decide.",
    casesTitle: "MATCHES THAT WORK",
    casesSub: "A small selection from the many companies we've worked with, from scale-up to corporate.",
    profilesTitle: "HIGH ACHIEVERS, SELECTED ON QUALITY AND CULTURE.",
    profilesSub: "We mainly source university and university-of-applied-sciences students and young professionals: ambitious, quick to work independently, and used to performing alongside their studies. We match not just on skills but on culture fit, so what we put forward actually fits.",
    calcNote: "Curious what a working student, intern or starter costs, and when to choose which?",
    calcCta: "See the calculator and checklist →",
    finalTitle: "READY TO SCALE?",
    finalCta: "Book an intro call",
  },
};

export function WervingSelectiePage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "center", padding: "64px 32px 56px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 44, margin: "14px 0 16px", color: "#fff" }}>{c.title}</h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: "0 0 26px", maxWidth: 480 }}>{c.sub}</p>
            <CalendlyButton label={c.ctaIntro} variant="secondary" size="lg" />
          </div>

          <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "var(--radius-lg)", padding: 26 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {c.heroStats.map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 12, borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 14 }}>
                  <span className="anton" style={{ fontSize: 26, color: "#fff", flex: "none", whiteSpace: "nowrap" }}><CountUp value={s.value} /></span>
                  <span style={{ fontSize: 13, color: "var(--voids-purple-100)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "56px 32px 20px" }}>
        <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 20px" }}>{c.processTitle}</h2>
        <div className="g-collapse process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18, alignItems: "stretch" }}>
          {PROCESS[lang].map((s, i) => (
            <div key={s.num} className="card card--accent-purple process-card" style={{ padding: 22, height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <HandCircleNumber n={i + 1} />
                <span className="badge badge--purple" style={{ whiteSpace: "nowrap" }}>{s.when}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, margin: "14px 0 6px" }}>{s.title}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0, flex: 1 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "56px 32px 40px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 26, margin: "0 0 4px" }}>{c.casesTitle}</h2>
          <p style={{ fontSize: 14.5, color: "var(--voids-ink-muted)", margin: "0 0 24px", maxWidth: 780 }}>{c.casesSub}</p>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
            {CLIENT_CASES[lang].map((cs) => {
              const logoUrl = findLogoFile(cs.slug);
              return (
                <div key={cs.company} className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <Photo src={cs.photo} alt={cs.company} ratio="16 / 10" radius="0" sizes="(max-width: 800px) 100vw, 33vw" />
                  <div style={{ padding: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      {logoUrl ? (
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: "#fff", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", padding: 4 }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={logoUrl} alt={cs.company} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                        </div>
                      ) : (
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: cs.bg, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
                          {cs.logo}
                        </div>
                      )}
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>{cs.company}</div>
                        <div style={{ fontSize: 12, color: "var(--voids-ink-muted)" }}>{cs.sector}</div>
                      </div>
                    </div>
                    <div className="badge badge--purple" style={{ marginBottom: 10 }}>{cs.metric}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{cs.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="profielen" style={{ background: "var(--voids-beige)", scrollMarginTop: 90 }}>
        <div className="wrap" style={{ padding: "56px 32px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 26, margin: "0 0 4px", maxWidth: 760 }}>{c.profilesTitle}</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "0 0 24px", maxWidth: 1040 }}>{c.profilesSub}</p>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16, alignItems: "stretch" }}>
            {TALENT_PROFILES[lang].map((pr) => (
              <div key={pr.field} className="card card--hoverable" style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 14 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--voids-purple-100)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    {FIELD_ICONS[pr.field] ?? <SparkleIcon />}
                  </div>
                  <span className="badge badge--purple" style={{ whiteSpace: "nowrap" }}>{pr.field}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, margin: "0 0 4px" }}>{pr.edu}</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-ink-muted)", marginBottom: 12 }}>{pr.skills}</div>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--voids-ink-soft)", margin: 0, fontStyle: "italic" }}>{pr.traits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "48px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 15, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 700 }}>{c.calcNote}</p>
          <Button variant="outline" size="sm" href={localePath(lang, "/companies")}>{c.calcCta}</Button>
        </div>
      </section>

      <section style={{ background: "var(--voids-blue)" }}>
        <div className="wrap" style={{ padding: "52px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton section-h2" style={{ fontSize: 34, margin: "0 0 20px", color: "#fff" }}>{c.finalTitle}</h2>
          <CalendlyButton label={c.finalCta} variant="primary" size="lg" />
        </div>
      </section>
    </>
  );
}

function MarketingIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 10v4h4l6 4V6L7 10H3Z" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M17 9.5c1 .8 1 4.2 0 5M20 7c2 2 2 8 0 10" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 19v-6M12 19V7M17 19v-9" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LegalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v17M7 20h10" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 5 5 8l3.2 6.2a4 4 0 0 0 7.6 0L19 8l-7-3Z" stroke="var(--voids-purple)" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="8" height="8" rx="1.5" stroke="var(--voids-purple)" strokeWidth="1.6" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" stroke="var(--voids-purple)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BizDevIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21h18M5 21V10l5-4 5 4v11M13 21v-6h3v6" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 6l3-3 3 3M18 3v6" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BizSupportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="var(--voids-purple)" strokeWidth="1.6" />
      <path
        d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4"
        stroke="var(--voids-purple)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const FIELD_ICONS: Record<string, ReactNode> = {
  Marketing: <MarketingIcon />,
  Finance: <FinanceIcon />,
  Legal: <LegalIcon />,
  "Data & AI": <DataIcon />,
  "Business development": <BizDevIcon />,
  "Business support": <BizSupportIcon />,
};

/** A hand-drawn, marker-circled step number — one signature touch on the one section of the site that's a real numbered sequence. */
function HandCircleNumber({ n }: { n: number }) {
  return (
    <div style={{ position: "relative", width: 42, height: 42, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
      <svg width="42" height="42" viewBox="0 0 42 42" style={{ position: "absolute", inset: 0 }} aria-hidden="true">
        <path
          d="M21 4.5c9 -1.3 17 5.5 16.3 14.8 -0.6 8.6 -7.6 16.4 -17 15.9 -9.5 -0.5 -16 -8.7 -14.6 -17.4C 6.9 9.6 13.2 5.5 21 4.5Z"
          fill="none"
          stroke="var(--voids-purple)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="anton" style={{ fontSize: 17, position: "relative", color: "var(--voids-purple)" }}>{n}</span>
    </div>
  );
}
