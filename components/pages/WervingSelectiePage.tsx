import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { CalendlyButton } from "@/components/site/CalendlyButton";
import { findLogoFile } from "@/lib/logos";
import { localePath, type Lang } from "@/lib/i18n/common";
import { PROCESS } from "@/lib/content/companies-content";
import { CLIENT_CASES, ROLES } from "@/lib/content/cases";

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
    rolesTitle: string;
    calcNote: string;
    calcCta: string;
    finalTitle: string;
    finalCta: string;
  }
> = {
  nl: {
    eyebrow: "Werving & selectie",
    title: "HET HELE PROCES, UIT HANDEN.",
    sub: "Zes stappen. Wij doen het werk, jullie beslissen. Van intake tot ondertekende match, voor werkstudenten, stagiairs en starters.",
    ctaIntro: "Plan een kennismaking",
    heroStats: [
      { value: "2-4", label: "voorgeselecteerde kandidaten per shortlist" },
      { value: "±30 dagen", label: "gemiddelde tijd tot shortlist" },
      { value: "4.000+", label: "studenten en starters in onze community" },
    ],
    processTitle: "HOE HET WERKT",
    processSub: "Zes stappen, wij doen het werk, jullie beslissen.",
    casesTitle: "MATCHES DIE WERKEN",
    casesSub: "Een kleine greep uit de vele bedrijven waar we mee hebben samengewerkt, van scale-up tot corporate.",
    rolesTitle: "VOORBEELDEN VAN ROLLEN DIE WE INVULDEN",
    calcNote: "Benieuwd wat een werkstudent, stagiair of starter kost, en wanneer je voor welke kiest?",
    calcCta: "Bekijk de calculator en checklist →",
    finalTitle: "KLAAR OM TE SCHALEN?",
    finalCta: "Plan een kennismaking",
  },
  en: {
    eyebrow: "Recruitment & selection",
    title: "WE RUN THE WHOLE PROCESS.",
    sub: "Six steps. We do the work, you decide. From intake to signed match, for working students, interns and starters.",
    ctaIntro: "Book an intro call",
    heroStats: [
      { value: "2-4", label: "pre-selected candidates per shortlist" },
      { value: "±30 days", label: "average time to shortlist" },
      { value: "4,000+", label: "students and starters in our community" },
    ],
    processTitle: "HOW IT WORKS",
    processSub: "Six steps, we do the work, you decide.",
    casesTitle: "MATCHES THAT WORK",
    casesSub: "A small selection from the many companies we've worked with, from scale-up to corporate.",
    rolesTitle: "EXAMPLES OF ROLES WE'VE FILLED",
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
                  <span className="anton" style={{ fontSize: 26, color: "#fff", flex: "none", whiteSpace: "nowrap" }}>{s.value}</span>
                  <span style={{ fontSize: 13, color: "var(--voids-purple-100)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "56px 32px 20px" }}>
        <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 20px" }}>{c.processTitle}</h2>
        <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18 }}>
          {PROCESS[lang].map((s) => (
            <div key={s.num} className="card card--accent-purple" style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                <span className="anton" style={{ fontSize: 30, color: "var(--voids-purple-200)" }}>{s.num}</span>
                <span className="badge badge--purple" style={{ whiteSpace: "nowrap" }}>{s.when}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, margin: "8px 0 6px" }}>{s.title}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "56px 32px 40px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 26, margin: "0 0 4px" }}>{c.casesTitle}</h2>
          <p style={{ fontSize: 14.5, color: "var(--voids-ink-muted)", margin: "0 0 24px", maxWidth: 620 }}>{c.casesSub}</p>
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

      <section className="wrap" style={{ padding: "48px 32px 20px" }}>
        <h2 className="anton section-h2" style={{ fontSize: 22, margin: "0 0 20px" }}>{c.rolesTitle}</h2>
        <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 }}>
          {ROLES[lang].map((r) => (
            <div key={r.role} style={{ background: "var(--voids-beige)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", padding: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{r.role}</div>
              <div style={{ fontSize: 12.5, color: "var(--voids-ink-muted)", margin: "4px 0 12px" }}>{r.company} · {r.uren}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {r.tags.map((t) => (
                  <span key={t} className="badge badge--blue">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "40px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <p style={{ fontSize: 15, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 460 }}>{c.calcNote}</p>
          <Link href={localePath(lang, "/companies")} style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-purple)" }}>
            {c.calcCta}
          </Link>
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
