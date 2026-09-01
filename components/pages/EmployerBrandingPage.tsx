import { CalendlyButton } from "@/components/site/CalendlyButton";
import { Photo } from "@/components/ui/Photo";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    scopeTitle: string;
    scope: { title: string; text: string; accent: "purple" | "blue" }[];
    bandAlt: string;
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
    bandAlt: "VOIDS-team aan het werk",
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
    bandAlt: "The VOIDS team at work",
    contactTitle: "WANT TO SPAR?",
    contactText: "Book a free-form call about your junior strategy.",
    contactCta: "Book an intro call",
  },
};

export function EmployerBrandingPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "center", padding: "64px 32px 56px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 40, margin: "12px 0 12px", color: "#fff", whiteSpace: "pre-line" }}>{c.title}</h1>
            <p style={{ fontSize: 16, color: "var(--voids-purple-100)", margin: 0, maxWidth: 480 }}>{c.sub}</p>
          </div>
          <Photo src="/photography/employer-branding-band.jpg" alt={c.bandAlt} ratio="4 / 3" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "56px 32px 64px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 6px" }}>{c.scopeTitle}</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {c.scope.map((s, i) => (
              <div
                key={s.title}
                className="g-collapse"
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "26px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {i === 0 ? <CompassIcon /> : i === 1 ? <MegaphoneIcon /> : <SproutIcon />}
                  <div className="anton" style={{ fontSize: 18, color: s.accent === "blue" ? "var(--voids-blue)" : "var(--voids-purple)" }}>{s.title}</div>
                </div>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 640 }}>{s.text}</p>
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

function CompassIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle cx="15" cy="15" r="11" stroke="var(--voids-purple)" strokeWidth="2" />
      <path d="M19 11l-2.5 6.5L10 20l2.5-6.5L19 11Z" stroke="var(--voids-purple)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M4 12v6a2 2 0 0 0 2 2h1l2 6h3l-1.5-6H12l12 5V7L12 12H4Z" stroke="var(--voids-blue)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 12.5v5" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SproutIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M15 26V15" stroke="var(--voids-purple)" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 15C15 10 11 8 6 8c0 5 2.5 9 9 9Z" stroke="var(--voids-purple)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 12c0-4.5 3-6.5 9-6.5-.3 4.5-2.5 8-9 8" stroke="var(--voids-purple)" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
