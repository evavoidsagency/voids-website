import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CostCalculator } from "@/components/pages/CostCalculator";
import { Photo } from "@/components/ui/Photo";
import { CalendlyButton } from "@/components/site/CalendlyButton";
import { localePath, type Lang } from "@/lib/i18n/common";
import { ROLE_TYPES, WHY_WS } from "@/lib/content/companies-content";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    ctaIntro: string;
    ctaProcess: string;
    heroStats: { value: string; label: string }[];
    servicesEyebrow: string;
    servicesTitle: string;
    services: { title: string; text: string; cta: string; path: string }[];
    rolesEyebrow: string;
    rolesIntro: string;
    whyWsEyebrow: string;
    whyWsTitle: string;
    whyWsIntro: string;
    calcEyebrow: string;
    calcTitle: string;
    calcIntro: string;
    checklistTitle: string;
    checklistSub: string;
    internHeading: string;
    internBullets: string[];
    wsHeading: string;
    wsBullets: string[];
    prefPara: string[];
    employersEyebrow: string;
    employersTitle: string;
    employersP1: string;
    employersP2: string;
    employersAlt: string;
    finalTitle: string;
    finalCta: string;
  }
> = {
  nl: {
    eyebrow: "Voor bedrijven",
    title: "EEN SHORTLIST,\nGEEN CV-STAPEL.",
    sub: "Wij nemen het hele wervingsproces uit handen, van briefing tot getekende match, en leveren alleen kandidaten die een recruiter zelf grondig heeft beoordeeld. Jullie bekijken alleen nog 2-4 voorgeselecteerde kandidaten, gematcht op cultuur en groeifase, gemiddeld binnen 30 dagen.",
    ctaIntro: "Plan een kennismaking",
    ctaProcess: "Bekijk het proces",
    heroStats: [
      { value: "2-4", label: "voorgeselecteerde kandidaten per shortlist" },
      { value: "±30 dagen", label: "gemiddelde tijd tot shortlist" },
      { value: "6 stappen", label: "van intake tot ondertekende match" },
    ],
    servicesEyebrow: "Wat we doen",
    servicesTitle: "DRIE MANIEREN OM MET ONS TE WERKEN.",
    services: [
      {
        title: "Werving & selectie",
        text: "We nemen de volledige werving uit handen: van intake tot shortlist tot ondertekende match.",
        cta: "Bekijk het proces →",
        path: "/companies/recruitment-selection",
      },
      {
        title: "Community & jobboard",
        text: "Zet je vacature zelf rechtstreeks onder de aandacht van 4.000+ studenten en starters.",
        cta: "Bekijk de opties →",
        path: "/companies/community-jobboard",
      },
      {
        title: "Advies & employer branding",
        text: "We denken mee over je hele junior-strategie, van recruitment tot het behouden van jong talent.",
        cta: "Meer over advies & branding →",
        path: "/companies/employer-branding",
      },
    ],
    rolesEyebrow: "Soorten rollen",
    rolesIntro: "Onze werkstudenten en stagiairs versterken vooral de commerciële en groeigerichte kant van je organisatie. Een greep uit de rollen die we invullen:",
    whyWsEyebrow: "Onze voorkeur",
    whyWsTitle: "DE WERKSTUDENT IS ONZE EERSTE KEUZE.",
    whyWsIntro: "Werkstudentrollen invullen is niet zomaar één van de dingen die we doen: het is waar VOIDS voor staat en verreweg de meeste plaatsingen die we doen. Voor de meeste vragen is het ook simpelweg de beste oplossing, hieronder waarom, en wanneer een stagiair of starter juist beter past.",
    calcEyebrow: "Voorbeeldsom",
    calcTitle: "WERKSTUDENT, STAGIAIR OF STARTER?",
    calcIntro: "Indicatieve kosten voor de werkgever per maand, inclusief werkgeverslasten, geen nettosalaris. Schuif de balk en vergelijk.",
    checklistTitle: "STAGIAIR VS. WERKSTUDENT",
    checklistSub: "Toch niet elke rol is een werkstudentrol. Het kernverschil: een stagiair leert vooral een vak, een werkstudent draait structureel mee als volwaardig teamlid. Snelle checklist, wat past bij je vraag?",
    internHeading: "Kies een stagiair als…",
    internBullets: ["er een leerdoel/opdracht is", "je tijd hebt voor begeleiding", "het project 3–6 mnd duurt"],
    wsHeading: "Kies een werkstudent als…",
    wsBullets: ["je structureel handen nodig hebt", "iemand zelfstandig moet draaien", "je langer wilt samenwerken"],
    prefPara: [
      "We werven ook stagiairs, maar alleen tegen een stagevergoeding die minimaal gelijk is aan de norm die de Rijksoverheid zelf hanteert, ",
      "vanaf €800 bruto per maand op fulltime basis (naar rato bij minder uren)",
      ". Onder dat bedrag matchen we niet. Meer betalen juichen we juist toe.",
    ],
    employersEyebrow: "De lange termijn",
    employersTitle: "TALENT LEER JE EERDER KENNEN.",
    employersP1:
      "In plaats van pas na het afstuderen te concurreren om talent, leren jullie dat talent eerder kennen, begeleiden het en laten het groeien. Een duurzamere relatie, waarin je investeert in ontwikkeling in plaats van alleen capaciteit inkoopt.",
    employersP2:
      "Daarom kijken we verder dan het invullen van een vacature. We adviseren hoe een rol uitdagend, leerzaam en toekomstbestendig wordt. Een goede werkstudent is geen goedkope arbeidskracht, maar een toekomstige professional.",
    employersAlt: "Community van studenten en starters",
    finalTitle: "KLAAR OM TE SCHALEN?",
    finalCta: "Plan een kennismaking",
  },
  en: {
    eyebrow: "For companies",
    title: "A SHORTLIST,\nNOT A CV PILE.",
    sub: "We take the entire hiring process off your hands, from briefing to signed match, and only put forward candidates a recruiter has personally and thoroughly reviewed. You only review 2-4 pre-selected candidates, matched on culture and growth stage, on average within 30 days.",
    ctaIntro: "Book an intro call",
    ctaProcess: "See the process",
    heroStats: [
      { value: "2-4", label: "pre-selected candidates per shortlist" },
      { value: "±30 days", label: "average time to shortlist" },
      { value: "6 steps", label: "from intake to signed match" },
    ],
    servicesEyebrow: "What we do",
    servicesTitle: "THREE WAYS TO WORK WITH US.",
    services: [
      {
        title: "Recruitment & selection",
        text: "We take the full hiring process off your hands: from intake to shortlist to signed match.",
        cta: "See the process →",
        path: "/companies/recruitment-selection",
      },
      {
        title: "Community & job board",
        text: "Put your vacancy directly in front of 4,000+ students and starters yourself.",
        cta: "See the options →",
        path: "/companies/community-jobboard",
      },
      {
        title: "Advice & employer branding",
        text: "We think along on your whole junior strategy, from recruitment to retaining junior talent.",
        cta: "More on advice & branding →",
        path: "/companies/employer-branding",
      },
    ],
    rolesEyebrow: "Types of roles",
    rolesIntro: "Our working students and interns mainly strengthen the commercial and growth side of your organisation. A selection of the roles we fill:",
    whyWsEyebrow: "Our preference",
    whyWsTitle: "THE WORKING STUDENT IS OUR FIRST CHOICE.",
    whyWsIntro: "Filling working-student roles isn't just one of the things we do: it's what VOIDS stands for, and by far the majority of the placements we make. For most hiring needs it's simply the best fit too, here's why, and when an intern or starter fits better instead.",
    calcEyebrow: "Example calculation",
    calcTitle: "WORKING STUDENT, INTERN OR STARTER?",
    calcIntro: "Indicative cost to the employer per month, including employer contributions, not take-home pay. Slide the bar to compare.",
    checklistTitle: "INTERN VS. WORKING STUDENT",
    checklistSub: "Still, not every role is a working-student role. The core difference: an intern is mainly there to learn a trade, a working student runs structurally as a full team member. Quick checklist, what fits your situation?",
    internHeading: "Choose an intern if…",
    internBullets: ["there’s a clear learning goal or project", "you have time for guidance", "the project runs 3–6 months"],
    wsHeading: "Choose a working student if…",
    wsBullets: ["you need consistent extra capacity", "someone needs to run with it independently", "you want a longer collaboration"],
    prefPara: [
      "We also recruit interns, but only at an allowance that is at least equal to the standard the Dutch government itself applies, ",
      "from €800 gross per month on a full-time basis (pro-rata for fewer hours)",
      ". We don’t match below that. We welcome paying more.",
    ],
    employersEyebrow: "The long term",
    employersTitle: "YOU GET TO KNOW TALENT EARLIER.",
    employersP1:
      "Instead of competing for talent only after graduation, you get to know that talent earlier, guide it and let it grow. A more lasting relationship, where you invest in development instead of simply buying capacity.",
    employersP2:
      "That’s why we look beyond filling a vacancy. We advise on how to make a role challenging, worth learning from and future-proof. A good working student isn’t cheap labour, but a future professional.",
    employersAlt: "Community of students and starters",
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
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "center", padding: "64px 32px 70px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 50, margin: "14px 0 18px", color: "#fff", whiteSpace: "pre-line" }}>{c.title}</h1>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: "0 0 28px", maxWidth: 520 }}>{c.sub}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <CalendlyButton label={c.ctaIntro} variant="secondary" size="lg" />
              <Button variant="outline" size="lg" onDark href={p("/companies/recruitment-selection")}>{c.ctaProcess}</Button>
            </div>
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

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "52px 32px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.servicesEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 28, margin: "10px 0 22px" }}>{c.servicesTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20, maxWidth: 980 }}>
            {c.services.map((s, i) => {
              const accent = i === 1 ? "blue" : "purple";
              const accentColor = accent === "blue" ? "var(--voids-blue)" : "var(--voids-purple)";
              return (
                <div key={s.title} className={`card card--hoverable card--accent-${accent}`} style={{ padding: 24, display: "flex", flexDirection: "column" }}>
                  <div className="anton" style={{ fontSize: 18, marginBottom: 10, color: accentColor }}>{s.title}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0, flex: 1 }}>{s.text}</p>
                  <Link href={p(s.path)} style={{ fontSize: 13, fontWeight: 600, color: accentColor, marginTop: 14 }}>
                    {s.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "48px 32px 56px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.rolesEyebrow}</span>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "8px 0 18px", maxWidth: 640 }}>{c.rolesIntro}</p>
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", padding: "2px 2px 10px" }}>
            {ROLE_TYPES[lang].map((r) => (
              <span
                key={r}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--voids-purple)",
                  background: "var(--voids-purple-100)",
                  padding: "7px 14px",
                  borderRadius: 999,
                  flex: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {r}
              </span>
            ))}
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
      </section>

      <section style={{ background: "var(--voids-purple-100)" }}>
        <div className="wrap" style={{ padding: "56px 32px 64px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.whyWsEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 34, margin: "8px 0 14px", maxWidth: 860 }}>{c.whyWsTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-soft)", margin: "0 0 26px", maxWidth: 860 }}>{c.whyWsIntro}</p>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20, marginBottom: 32, maxWidth: 1040 }}>
            {WHY_WS[lang].map((w) => (
              <div key={w.title} className="card card--accent-purple" style={{ padding: 22 }}>
                {w.icon === "flex" ? <SwitchIcon /> : w.icon === "duration" ? <DurationIcon /> : <SparkIcon />}
                <div style={{ fontSize: 15, fontWeight: 600, margin: "10px 0 8px" }}>{w.title}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{w.text}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 28, maxWidth: 1040 }}>
            <h3 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 6px" }}>{c.checklistTitle}</h3>
            <p style={{ fontSize: 13, color: "var(--voids-ink-muted)", margin: "0 0 16px" }}>{c.checklistSub}</p>
            <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color: "var(--voids-purple)", marginBottom: 10 }}>
                  <CapIcon /> {c.internHeading}
                </div>
                {c.internBullets.map((b) => (
                  <div key={b} style={{ fontSize: 13, color: "var(--voids-ink-soft)", lineHeight: 1.5, marginBottom: 8 }}>✓ {b}</div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, color: "var(--voids-blue)", marginBottom: 10 }}>
                  <BriefcaseIcon /> {c.wsHeading}
                </div>
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
        </div>
      </section>

      <section className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
        <Photo src="/photography/impact-employers-crop.jpg" alt={c.employersAlt} ratio="1599 / 1585" />
        <div>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.employersEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 34, margin: "10px 0 14px" }}>{c.employersTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "0 0 16px" }}>{c.employersP1}</p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>{c.employersP2}</p>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "64px 32px" }}>
          <div style={{ maxWidth: 600, marginBottom: 26 }}>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.calcEyebrow}</span>
            <h2 className="anton section-h2" style={{ fontSize: 34, margin: "8px 0 8px" }}>{c.calcTitle}</h2>
            <p style={{ fontSize: 15, color: "var(--voids-ink-muted)", margin: 0 }}>{c.calcIntro}</p>
          </div>
          <CostCalculator lang={lang} />
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

function SwitchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M4 10h16l-4-4" stroke="var(--voids-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 18H8l4 4" stroke="var(--voids-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DurationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="15" r="10" stroke="var(--voids-purple)" strokeWidth="2" />
      <path d="M14 9v6l4 3" stroke="var(--voids-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 2h8" stroke="var(--voids-purple)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3v6M14 19v6M3 14h6M19 14h6M6.5 6.5l4.2 4.2M17.3 17.3l4.2 4.2M6.5 21.5l4.2-4.2M17.3 10.7l4.2-4.2" stroke="var(--voids-purple)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4L2 9l10 5 10-5-10-5Z" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="var(--voids-blue)" strokeWidth="1.6" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="var(--voids-blue)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 13h18" stroke="var(--voids-blue)" strokeWidth="1.6" />
    </svg>
  );
}
