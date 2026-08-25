import { Button } from "@/components/ui/Button";
import { CostCalculator } from "@/components/pages/CostCalculator";
import { Photo } from "@/components/ui/Photo";
import { CalendlyButton } from "@/components/site/CalendlyButton";
import { localePath, type Lang } from "@/lib/i18n/common";
import { PROCESS, ROLE_TYPES, WHY_WS, BENCHMARK } from "@/lib/content/companies-content";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    ctaIntro: string;
    ctaPricing: string;
    rolesEyebrow: string;
    rolesIntro: string;
    whyWsEyebrow: string;
    whyWsTitle: string;
    whyWsIntro: string;
    processTitle: string;
    processSub: string;
    calcEyebrow: string;
    calcTitle: string;
    calcIntro: string;
    benchmarkEyebrow: string;
    benchmarkTitle: string;
    benchmarkSub: string;
    checklistTitle: string;
    checklistSub: string;
    internHeading: string;
    internBullets: string[];
    wsHeading: string;
    wsBullets: string[];
    prefPara: string[];
    finalTitle: string;
    finalCta: string;
    photoAlt: string;
  }
> = {
  nl: {
    eyebrow: "Voor bedrijven",
    title: "EEN SHORTLIST,\nGEEN CV-STAPEL.",
    sub: "Wij nemen het hele wervingsproces uit handen, van briefing tot getekende match, en leveren alleen kandidaten die een recruiter zelf grondig heeft beoordeeld. Jullie bekijken alleen nog 2-4 voorgeselecteerde kandidaten, gematcht op cultuur en groeifase, gemiddeld binnen 30 dagen.",
    ctaIntro: "Plan een kennismaking",
    ctaPricing: "Bekijk tarieven",
    rolesEyebrow: "Soorten rollen",
    rolesIntro: "Onze werkstudenten en stagiairs versterken vooral de commerciële en groeigerichte kant van je organisatie. Een greep uit de rollen die we invullen:",
    whyWsEyebrow: "Onze hoofddienst",
    whyWsTitle: "WAAROM WIJ ALTIJD EERST NAAR EEN WERKSTUDENT KIJKEN.",
    whyWsIntro: "Werkstudenten invullen is niet zomaar één van de dingen die we doen: het is waar VOIDS voor staat en verreweg de meeste plaatsingen die we doen. Voor de meeste vragen is het ook simpelweg de beste oplossing, hieronder waarom.",
    processTitle: "HET HELE PROCES, UIT HANDEN.",
    processSub: "Zes stappen. Wij doen het werk, jullie beslissen.",
    calcEyebrow: "Voorbeeldsom",
    calcTitle: "WERKSTUDENT, STAGIAIR OF STARTER?",
    calcIntro: "Indicatieve kosten voor de werkgever per maand, inclusief werkgeverslasten, geen nettosalaris. Schuif de balk en vergelijk.",
    benchmarkEyebrow: "Marktbenchmark · transparant",
    benchmarkTitle: "JUNIOR-MARKT IN ÉÉN OOGOPSLAG",
    benchmarkSub: "Op basis van arbeidsmarktdata, geen verkooppraatjes.",
    checklistTitle: "STAGIAIR VS. WERKSTUDENT",
    checklistSub: "Het kernverschil: een stagiair leert vooral een vak, een werkstudent draait structureel mee als volwaardig teamlid. Snelle checklist, wat past bij je vraag?",
    internHeading: "Kies een stagiair als…",
    internBullets: ["er een leerdoel/opdracht is", "je tijd hebt voor begeleiding", "het project 3–6 mnd duurt"],
    wsHeading: "Kies een werkstudent als…",
    wsBullets: ["je structureel handen nodig hebt", "iemand zelfstandig moet draaien", "je langer wilt samenwerken"],
    prefPara: [
      "Onze voorkeur gaat uit naar werkstudenten: betaald werk naast de studie, met echte verantwoordelijkheid. We werven ook stagiairs, maar alleen tegen een stagevergoeding die minimaal gelijk is aan de norm die de Rijksoverheid zelf hanteert, ",
      "vanaf €800 bruto per maand op fulltime basis (naar rato bij minder uren)",
      ". Onder dat bedrag matchen we niet. Meer betalen juichen we juist toe.",
    ],
    finalTitle: "KLAAR OM TE SCHALEN?",
    finalCta: "Plan een kennismaking",
    photoAlt: "Werkstudent aan het werk op kantoor",
  },
  en: {
    eyebrow: "For companies",
    title: "A SHORTLIST,\nNOT A CV PILE.",
    sub: "We take the entire hiring process off your hands, from briefing to signed match, and only put forward candidates a recruiter has personally and thoroughly reviewed. You only review 2-4 pre-selected candidates, matched on culture and growth stage, on average within 30 days.",
    ctaIntro: "Book an intro call",
    ctaPricing: "View pricing",
    rolesEyebrow: "Types of roles",
    rolesIntro: "Our working students and interns mainly strengthen the commercial and growth side of your organisation. A selection of the roles we fill:",
    whyWsEyebrow: "Our core service",
    whyWsTitle: "WHY WE ALWAYS LOOK AT A WORKING STUDENT FIRST.",
    whyWsIntro: "Filling working-student roles isn't just one of the things we do: it's what VOIDS stands for, and by far the majority of the placements we make. For most hiring needs it's simply the best fit too, here's why.",
    processTitle: "WE RUN THE WHOLE PROCESS.",
    processSub: "Six steps. We do the work, you decide.",
    calcEyebrow: "Example calculation",
    calcTitle: "WORKING STUDENT, INTERN OR STARTER?",
    calcIntro: "Indicative cost to the employer per month, including employer contributions, not take-home pay. Slide the bar to compare.",
    benchmarkEyebrow: "Market benchmark · transparent",
    benchmarkTitle: "THE JUNIOR MARKET AT A GLANCE",
    benchmarkSub: "Based on labour-market data, no sales talk.",
    checklistTitle: "INTERN VS. WORKING STUDENT",
    checklistSub: "The core difference: an intern is mainly there to learn a trade, a working student runs structurally as a full team member. Quick checklist, what fits your situation?",
    internHeading: "Choose an intern if…",
    internBullets: ["there’s a clear learning goal or project", "you have time for guidance", "the project runs 3–6 months"],
    wsHeading: "Choose a working student if…",
    wsBullets: ["you need consistent extra capacity", "someone needs to run with it independently", "you want a longer collaboration"],
    prefPara: [
      "Our preference goes to working students: paid work alongside study, with real responsibility. We also recruit interns, but only at an allowance that is at least equal to the standard the Dutch government itself applies, ",
      "from €800 gross per month on a full-time basis (pro-rata for fewer hours)",
      ". We don’t match below that. We welcome paying more.",
    ],
    finalTitle: "READY TO SCALE?",
    finalCta: "Book an intro call",
    photoAlt: "A working student at work in the office",
  },
};

export function CompaniesPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const p = (path: string) => localePath(lang, path);

  return (
    <>
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap" style={{ padding: "64px 32px 70px", maxWidth: 820 }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
          <h1 className="anton hero-h1" style={{ fontSize: 54, margin: "14px 0 18px", color: "#fff", whiteSpace: "pre-line" }}>{c.title}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: "0 0 28px" }}>{c.sub}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <CalendlyButton label={c.ctaIntro} variant="secondary" size="lg" />
            <Button variant="outline" size="lg" onDark href={p("/pricing")}>{c.ctaPricing}</Button>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "48px 32px 56px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.rolesEyebrow}</span>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "8px 0 18px", maxWidth: 640 }}>{c.rolesIntro}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {ROLE_TYPES[lang].map((r, i) => {
            const isLast = i === ROLE_TYPES[lang].length - 1;
            return (
              <span
                key={r}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--voids-purple)",
                  background: isLast ? "transparent" : "var(--voids-purple-100)",
                  border: isLast ? "1px dashed var(--voids-purple-300)" : "none",
                  padding: "7px 14px",
                  borderRadius: 999,
                }}
              >
                {r}
              </span>
            );
          })}
        </div>
      </section>

      <section style={{ background: "var(--voids-purple-100)", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "56px 32px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.whyWsEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 34, margin: "8px 0 14px", maxWidth: 720 }}>{c.whyWsTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-soft)", margin: "0 0 26px", maxWidth: 640 }}>{c.whyWsIntro}</p>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
            {WHY_WS[lang].map((w) => (
              <div key={w.title} className="card card--accent-purple" style={{ padding: 22 }}>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{w.title}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap" style={{ padding: "0 32px" }}>
        <Photo src="/photography/blog-2.jpg" alt={c.photoAlt} ratio="16 / 6" sizes="(max-width: 1200px) 100vw, 1136px" />
      </div>

      <section className="wrap" style={{ padding: "64px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 className="anton section-h2" style={{ fontSize: 36, margin: "0 0 8px" }}>{c.processTitle}</h2>
          <p style={{ fontSize: 15, color: "var(--voids-ink-muted)", margin: 0 }}>{c.processSub}</p>
        </div>
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

      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "64px 32px" }}>
          <div style={{ maxWidth: 600, marginBottom: 26 }}>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.calcEyebrow}</span>
            <h2 className="anton section-h2" style={{ fontSize: 34, margin: "8px 0 8px" }}>{c.calcTitle}</h2>
            <p style={{ fontSize: 15, color: "var(--voids-ink-muted)", margin: 0 }}>{c.calcIntro}</p>
          </div>
          <CostCalculator lang={lang} />
        </div>
      </section>

      <section className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: "var(--voids-ink)", color: "#fff", borderRadius: "var(--radius-md)", padding: 28 }}>
          <span style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>{c.benchmarkEyebrow}</span>
          <h3 className="anton section-h2" style={{ fontSize: 26, margin: "8px 0 6px", color: "#fff" }}>{c.benchmarkTitle}</h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", margin: "0 0 18px" }}>{c.benchmarkSub}</p>
          {BENCHMARK[lang].map((b) => (
            <div key={b.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "11px 0", borderTop: "1px solid rgba(255,255,255,.12)" }}>
              <span style={{ fontSize: 13.5, color: "rgba(255,255,255,.85)" }}>
                {b.label}
                {b.src && <span style={{ display: "block", fontSize: 11, color: "rgba(255,255,255,.4)" }}>{b.src}</span>}
              </span>
              <span className="anton" style={{ fontSize: 22, color: "#fff" }}>{b.value}</span>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 28 }}>
          <h3 className="anton section-h2" style={{ fontSize: 26, margin: "0 0 6px" }}>{c.checklistTitle}</h3>
          <p style={{ fontSize: 13, color: "var(--voids-ink-muted)", margin: "0 0 16px" }}>{c.checklistSub}</p>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--voids-purple)", marginBottom: 10 }}>{c.internHeading}</div>
              {c.internBullets.map((b) => (
                <div key={b} style={{ fontSize: 13, color: "var(--voids-ink-soft)", lineHeight: 1.5, marginBottom: 8 }}>✓ {b}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--voids-blue)", marginBottom: 10 }}>{c.wsHeading}</div>
              {c.wsBullets.map((b) => (
                <div key={b} style={{ fontSize: 13, color: "var(--voids-ink-soft)", lineHeight: 1.5, marginBottom: 8 }}>✓ {b}</div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border-hairline)", marginTop: 20, paddingTop: 16 }}>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0 }}>
              {c.prefPara[0]}
              <strong style={{ color: "var(--voids-ink)" }}>{c.prefPara[1]}</strong>
              {c.prefPara[2]}
            </p>
          </div>
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
