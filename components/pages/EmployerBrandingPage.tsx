import { CalendlyButton } from "@/components/site/CalendlyButton";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    scopeTitle: string;
    scope: { title: string; text: string; accent: "purple" | "blue" }[];
    contactTitle: string;
    contactText: string;
    contactCta: string;
  }
> = {
  nl: {
    eyebrow: "Advies & employer branding",
    title: "BOUW AAN EEN MERK\nWAAR STUDENTEN VOOR KIEZEN.",
    sub: "We denken mee over je hele junior-strategie: van hoe je nu al werft tot hoe je jong talent na de eerste maanden vasthoudt.",
    scopeTitle: "WAAR WE MEE HELPEN",
    scope: [
      {
        title: "Junior-strategie",
        text: "Advies over wanneer en hoe je junior capaciteit inzet: werkstudent, stagiair of starter, en hoe dat meegroeit met je team.",
        accent: "purple",
      },
      {
        title: "Employer branding",
        text: "Content en campagnes die studenten en starters daadwerkelijk aanspreken, gebaseerd op wat we dagelijks zien werken in onze eigen community.",
        accent: "blue",
      },
      {
        title: "Behoud van talent",
        text: "Sparring over onboarding en begeleiding, zodat junior talent aanblijft en doorgroeit in plaats van na een half jaar te vertrekken.",
        accent: "purple",
      },
    ],
    contactTitle: "EENS SPARREN?",
    contactText: "Plan een vrijblijvend gesprek over je junior-strategie.",
    contactCta: "Plan een kennismaking",
  },
  en: {
    eyebrow: "Advice & employer branding",
    title: "BUILD A BRAND STUDENTS ACTUALLY CHOOSE.",
    sub: "We think along on your whole junior strategy: from how you hire today to how you keep junior talent past the first few months.",
    scopeTitle: "WHERE WE HELP",
    scope: [
      {
        title: "Junior strategy",
        text: "Advice on when and how to bring in junior capacity, working student, intern or starter, and how that grows with your team.",
        accent: "purple",
      },
      {
        title: "Employer branding",
        text: "Content and campaigns that actually land with students and starters, based on what we see working every day in our own community.",
        accent: "blue",
      },
      {
        title: "Retention",
        text: "Sparring on onboarding and guidance, so junior talent stays and grows instead of leaving after six months.",
        accent: "purple",
      },
    ],
    contactTitle: "WANT TO SPAR?",
    contactText: "Book a free-form call about your junior strategy.",
    contactCta: "Book an intro call",
  },
};

export function EmployerBrandingPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section className="wrap" style={{ padding: "64px 32px 40px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.eyebrow}</span>
        <h1 className="anton hero-h1" style={{ fontSize: 44, margin: "12px 0 12px", maxWidth: 820, whiteSpace: "pre-line" }}>{c.title}</h1>
        <p style={{ fontSize: 16, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 620, textWrap: "balance" }}>{c.sub}</p>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "44px 32px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 20px" }}>{c.scopeTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20, maxWidth: 1040 }}>
            {c.scope.map((s) => (
              <div key={s.title} className={`card card--accent-${s.accent}`} style={{ padding: 22 }}>
                <div className="anton" style={{ fontSize: 17, marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--voids-purple)" }}>
        <div className="wrap" style={{ padding: "48px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div>
            <h2 className="anton section-h2" style={{ fontSize: 26, color: "#fff", margin: "0 0 6px" }}>{c.contactTitle}</h2>
            <p style={{ fontSize: 14.5, color: "var(--voids-purple-100)", margin: 0 }}>{c.contactText}</p>
          </div>
          <CalendlyButton label={c.contactCta} variant="secondary" size="md" />
        </div>
      </section>
    </>
  );
}
