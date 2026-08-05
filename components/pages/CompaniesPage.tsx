import { Button } from "@/components/ui/Button";
import { CostCalculator } from "@/components/pages/CostCalculator";
import { localePath, type Lang } from "@/lib/i18n/common";

const PROCESS: Record<Lang, { num: string; title: string; text: string; when: string }[]> = {
  nl: [
    { num: "01", title: "Intake & briefing", text: "Wij nemen jullie rol, cultuur en groeifase door. Jij levert de richting, wij de rest.", when: "Dag 1" },
    { num: "02", title: "Sourcing uit de community", text: "We matchen op persoonlijkheid en drijfveren binnen 4.000+ studenten, niet op cv-stapels.", when: "Dag 1-5" },
    { num: "03", title: "Voorselectie & check", text: "Een recruiter beoordeelt elke match handmatig. Alleen de sterkste gaan door.", when: "Dag 5-7" },
    { num: "04", title: "Shortlist i.p.v. cv-stapel", text: "Jullie zien 2-4 voorgeselecteerde kandidaten met onderbouwing.", when: "Dag 7" },
    { num: "05", title: "Gesprekken & match", text: "Wij plannen, jullie kiezen. Wij nemen het hele proces uit handen.", when: "Dag 7-14" },
    { num: "06", title: "Nazorg & retentie", text: "We blijven meten of de match werkt, 6 maanden lang.", when: "Doorlopend" },
  ],
  en: [
    { num: "01", title: "Intake & briefing", text: "We dig into your role, culture and growth stage. You set the direction, we do the rest.", when: "Day 1" },
    { num: "02", title: "Sourcing from the community", text: "We match on personality and motivation across 4,000+ students, not on stacks of CVs.", when: "Day 1-5" },
    { num: "03", title: "Pre-selection & review", text: "A recruiter reviews every match personally. Only the strongest make the cut.", when: "Day 5-7" },
    { num: "04", title: "Shortlist, not a CV pile", text: "You see 2-4 pre-selected candidates, with the reasoning behind each one.", when: "Day 7" },
    { num: "05", title: "Interviews & match", text: "We schedule, you choose. We take the whole process off your hands.", when: "Day 7-14" },
    { num: "06", title: "Aftercare & retention", text: "We keep checking that the match is working, for six months.", when: "Ongoing" },
  ],
};

const BENCHMARK: Record<Lang, { label: string; value: string; src: string }[]> = {
  nl: [
    { label: "Werkstudent · mediaan uurtarief", value: "€ 16–24", src: "Indicatie marktdata" },
    { label: "Beschikbaarheid juniors", value: "Hoog na tentamenperiodes", src: "" },
    { label: "Werkstudentmodel in Duitsland", value: "Al standaard", src: "" },
    { label: "Onze focus", value: "Betaalde werkstudentrollen", src: "" },
  ],
  en: [
    { label: "Working student · median hourly rate", value: "€ 16–24", src: "Market-data estimate" },
    { label: "Junior availability", value: "High after exam season", src: "" },
    { label: "Working-student model in Germany", value: "Already the norm", src: "" },
    { label: "Our focus", value: "Paid working-student roles", src: "" },
  ],
};

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    ctaIntro: string;
    ctaPricing: string;
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
  }
> = {
  nl: {
    eyebrow: "Voor bedrijven",
    title: "EEN SHORTLIST,\nGEEN CV-STAPEL.",
    sub: "Wij nemen het hele wervingsproces uit handen, van briefing tot getekende match. Jullie beoordelen 2-4 voorgeselecteerde kandidaten, gematcht op cultuur en groeifase. Vaak binnen enkele weken.",
    ctaIntro: "Plan een kennismaking",
    ctaPricing: "Bekijk tarieven",
    processTitle: "HET HELE PROCES, UIT HANDEN.",
    processSub: "Zes stappen. Wij doen het werk, jullie beslissen.",
    calcEyebrow: "Voorbeeldsom",
    calcTitle: "WERKSTUDENT, STAGIAIR OF STARTER?",
    calcIntro: "Indicatieve kosten voor de werkgever per maand, dus inclusief werkgeverslasten, geen nettosalaris. Verschuif en vergelijk.",
    benchmarkEyebrow: "Marktbenchmark · transparant",
    benchmarkTitle: "JUNIOR-MARKT IN ÉÉN OOGOPSLAG",
    benchmarkSub: "Op basis van arbeidsmarktdata, geen verkooppraatjes.",
    checklistTitle: "STAGIAIR VS. WERKSTUDENT",
    checklistSub: "Snelle checklist: wat past bij je vraag?",
    internHeading: "Kies een stagiair als…",
    internBullets: ["er een leerdoel/opdracht is", "je tijd hebt voor begeleiding", "het project 3–6 mnd duurt"],
    wsHeading: "Kies een werkstudent als…",
    wsBullets: ["je structureel handen nodig hebt", "iemand zelfstandig moet draaien", "je langer wilt samenwerken"],
    prefPara: [
      "Onze voorkeur ligt bij werkstudenten: betaald werk naast studie, met echte verantwoordelijkheid. We werven ook stagiairs, maar alleen tegen een stagevergoeding die minimaal gelijk is aan de norm die de Rijksoverheid zelf hanteert, ",
      "vanaf €800 bruto per maand op fulltime basis (naar rato bij minder uren)",
      ". Onder dat bedrag matchen we niet, meer betalen juichen we toe.",
    ],
    finalTitle: "KLAAR OM TE SCHALEN?",
    finalCta: "Plan een kennismaking",
  },
  en: {
    eyebrow: "For companies",
    title: "A SHORTLIST,\nNOT A CV PILE.",
    sub: "We take the entire hiring process off your hands, from briefing to signed match. You review 2-4 pre-selected candidates, matched on culture and growth stage. Often within a few weeks.",
    ctaIntro: "Book an intro call",
    ctaPricing: "View pricing",
    processTitle: "WE RUN THE WHOLE PROCESS.",
    processSub: "Six steps. We do the work, you decide.",
    calcEyebrow: "Example calculation",
    calcTitle: "WORKING STUDENT, INTERN OR STARTER?",
    calcIntro: "Indicative cost to the employer per month, including employer contributions, not take-home pay. Slide to compare.",
    benchmarkEyebrow: "Market benchmark · transparent",
    benchmarkTitle: "THE JUNIOR MARKET AT A GLANCE",
    benchmarkSub: "Based on labour-market data, no sales talk.",
    checklistTitle: "INTERN VS. WORKING STUDENT",
    checklistSub: "Quick checklist: what fits your situation?",
    internHeading: "Choose an intern if…",
    internBullets: ["there’s a clear learning goal or project", "you have time for guidance", "the project runs 3–6 months"],
    wsHeading: "Choose a working student if…",
    wsBullets: ["you need consistent extra capacity", "someone needs to run with it independently", "you want a longer collaboration"],
    prefPara: [
      "Our preference is working students: paid work alongside study, with real responsibility. We also recruit interns, but only at an allowance that is at least equal to the standard the Dutch government itself applies, ",
      "from €800 gross per month on a full-time basis (pro-rata for fewer hours)",
      ". We don’t match below that, and we welcome paying more.",
    ],
    finalTitle: "READY TO SCALE?",
    finalCta: "Book an intro call",
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
          <h1 className="anton" style={{ fontSize: 54, margin: "14px 0 18px", color: "#fff", whiteSpace: "pre-line" }}>{c.title}</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: "0 0 28px" }}>{c.sub}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="secondary" size="lg" href={p("/about")}>{c.ctaIntro}</Button>
            <Button variant="outline" size="lg" onDark href={p("/pricing")}>{c.ctaPricing}</Button>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "64px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 className="anton" style={{ fontSize: 36, margin: "0 0 8px" }}>{c.processTitle}</h2>
          <p style={{ fontSize: 15, color: "var(--voids-ink-muted)", margin: 0 }}>{c.processSub}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {PROCESS[lang].map((s) => (
            <div key={s.num} className="card card--accent-purple" style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="anton" style={{ fontSize: 30, color: "var(--voids-purple-200)" }}>{s.num}</span>
                <span className="badge badge--purple">{s.when}</span>
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
            <h2 className="anton" style={{ fontSize: 34, margin: "8px 0 8px" }}>{c.calcTitle}</h2>
            <p style={{ fontSize: 15, color: "var(--voids-ink-muted)", margin: 0 }}>{c.calcIntro}</p>
          </div>
          <CostCalculator lang={lang} />
        </div>
      </section>

      <section className="wrap" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: "var(--voids-ink)", color: "#fff", borderRadius: "var(--radius-md)", padding: 28 }}>
          <span style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>{c.benchmarkEyebrow}</span>
          <h3 className="anton" style={{ fontSize: 26, margin: "8px 0 6px", color: "#fff" }}>{c.benchmarkTitle}</h3>
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
          <h3 className="anton" style={{ fontSize: 26, margin: "0 0 6px" }}>{c.checklistTitle}</h3>
          <p style={{ fontSize: 13, color: "var(--voids-ink-muted)", margin: "0 0 16px" }}>{c.checklistSub}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
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
          <h2 className="anton" style={{ fontSize: 34, margin: "0 0 20px", color: "#fff" }}>{c.finalTitle}</h2>
          <Button variant="primary" size="lg" href={p("/about")}>{c.finalCta}</Button>
        </div>
      </section>
    </>
  );
}
