import { CalendlyButton } from "@/components/site/CalendlyButton";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    sub: string;
    heroStats: { value: string; label: string }[];
    howTitle: string;
    how: { title: string; text: string; accent: "purple" | "blue" }[];
    pricingTitle: string;
    pricingText: string;
    contactTitle: string;
    contactText: string;
    contactCta: string;
  }
> = {
  nl: {
    eyebrow: "Community & jobboard",
    title: "ZET JE VACATURE VOOR\n4.000+ STUDENTEN EN STARTERS.",
    sub: "Naast onze werving & selectie-dienst kun je je vacature ook zelf onder de aandacht brengen: rechtstreeks in onze WhatsApp-community en op ons jobboard.",
    heroStats: [
      { value: "4.000+", label: "studenten en starters bereikt" },
      { value: "Wekelijks", label: "een nieuwe update naar de community" },
      { value: "2 kanalen", label: "WhatsApp-community en jobboard" },
    ],
    howTitle: "HOE HET WERKT",
    how: [
      {
        title: "WhatsApp-community",
        text: "Je vacature gaat wekelijks mee in de update naar 4.000+ studenten en starters die actief op zoek zijn, verdeeld over kanalen per vakgebied.",
        accent: "purple",
      },
      {
        title: "Jobboard",
        text: "Je rol staat tussen onze andere openstaande posities, zichtbaar voor iedereen die ons jobboard bezoekt op zoek naar een werkstudentenbaan, stage of starterfunctie.",
        accent: "blue",
      },
    ],
    pricingTitle: "WAT KOST HET",
    pricingText: "Een vacature plaatsen kan al, via een kort intakegesprek. Zelf plaatsen en direct online betalen volgt binnenkort.",
    contactTitle: "VACATURE PLAATSEN?",
    contactText: "Stuur ons je vacature, dan zetten we die voor je live.",
    contactCta: "Neem contact op",
  },
  en: {
    eyebrow: "Community & job board",
    title: "PUT YOUR VACANCY IN FRONT OF\n4,000+ STUDENTS AND STARTERS.",
    sub: "Alongside our recruitment & selection service, you can also put your vacancy in front of candidates yourself: directly in our WhatsApp community and on our job board.",
    heroStats: [
      { value: "4,000+", label: "students and starters reached" },
      { value: "Weekly", label: "a fresh update to the community" },
      { value: "2 channels", label: "WhatsApp community and job board" },
    ],
    howTitle: "HOW IT WORKS",
    how: [
      {
        title: "WhatsApp community",
        text: "Your vacancy goes out weekly to 4,000+ students and starters who are actively looking, spread across channels by field.",
        accent: "purple",
      },
      {
        title: "Job board",
        text: "Your role sits alongside our other open positions, visible to everyone who visits our job board looking for a working student role, internship or starter job.",
        accent: "blue",
      },
    ],
    pricingTitle: "WHAT IT COSTS",
    pricingText: "Posting a vacancy is already possible, via a short intake call. Self-service posting with online payment is coming soon.",
    contactTitle: "WANT TO POST A VACANCY?",
    contactText: "Send us your vacancy and we'll get it live for you.",
    contactCta: "Get in touch",
  },
};

export function CommunityJobboardPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "start", padding: "64px 32px 56px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 42, margin: "12px 0 12px", whiteSpace: "pre-line" }}>{c.title}</h1>
            <p style={{ fontSize: 16, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 480 }}>{c.sub}</p>
          </div>

          <div className="card" style={{ padding: 26 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {c.heroStats.map((s, i) => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 12, borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)", paddingTop: i === 0 ? 0 : 14 }}>
                  <span className="anton" style={{ fontSize: 24, color: "var(--voids-purple)", flex: "none", whiteSpace: "nowrap" }}>{s.value}</span>
                  <span style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "56px 32px 64px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 20px" }}>{c.howTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
            {c.how.map((h) => (
              <div key={h.title} className={`card card--accent-${h.accent}`} style={{ padding: 24 }}>
                <div className="anton" style={{ fontSize: 18, marginBottom: 10 }}>{h.title}</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{h.text}</p>
              </div>
            ))}
            <div className="card" style={{ padding: 24, background: "var(--voids-beige)" }}>
              <div className="anton" style={{ fontSize: 18, marginBottom: 10 }}>{c.pricingTitle}</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{c.pricingText}</p>
            </div>
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
