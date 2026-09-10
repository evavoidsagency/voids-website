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
    formatsTitle: string;
    formatsSub: string;
    formats: { title: string; text: string; icon: "consultancy" | "inhouse" | "training" | "events"; accent: "purple" | "blue" }[];
    bandAlt: string;
    formatsPhotoAlt: string;
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
    formatsTitle: "IN WELKE VORM",
    formatsSub: "Van eenmalig advies tot een vast aanspreekpunt voor je team, we passen ons aan op wat past bij jouw organisatie.",
    formats: [
      {
        title: "Consultancy trajecten",
        text: "Een doorlopend traject waarin we meedenken over junior-strategie, employer branding en talentbehoud, op maat van jouw organisatie.",
        icon: "consultancy",
        accent: "purple",
      },
      {
        title: "Inhouse dagen",
        text: "Op vaste dagen werkt een VOIDS-recruiter op locatie bij jouw team: live schakelen met hiring managers, sourcen en interviewen, zonder vertraging tussen twee kantoren.",
        icon: "inhouse",
        accent: "blue",
      },
      {
        title: "Trainingen & workshops",
        text: "Praktische sessies voor teams en leidinggevenden, bijvoorbeeld over onboarding en talentbehoud van jong talent.",
        icon: "training",
        accent: "purple",
      },
      {
        title: "Community events",
        text: "We organiseren ontmoetingen zoals talentdiners en lunches, waar bedrijven en jong talent elkaar informeel treffen.",
        icon: "events",
        accent: "blue",
      },
    ],
    bandAlt: "VOIDS-team aan het werk",
    formatsPhotoAlt: "VOIDS aan het werk op kantoor",
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
    formatsTitle: "IN WHAT FORM",
    formatsSub: "From one-off advice to a standing point of contact for your team, we adapt to what fits your organisation.",
    formats: [
      {
        title: "Consultancy",
        text: "An ongoing trajectory where we think along on junior strategy, employer branding and talent retention, tailored to your organisation.",
        icon: "consultancy",
        accent: "purple",
      },
      {
        title: "In-house days",
        text: "On set days, a VOIDS recruiter works on location with your team: syncing live with hiring managers, sourcing and interviewing, without the back-and-forth between two offices.",
        icon: "inhouse",
        accent: "blue",
      },
      {
        title: "Trainings & workshops",
        text: "Practical sessions for teams and managers, for example on onboarding and retaining junior talent.",
        icon: "training",
        accent: "purple",
      },
      {
        title: "Community events",
        text: "We organise meet-ups like talent dinners and lunches, where companies and junior talent meet informally.",
        icon: "events",
        accent: "blue",
      },
    ],
    bandAlt: "The VOIDS team at work",
    formatsPhotoAlt: "VOIDS at work in the office",
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
            <p style={{ fontSize: 16, color: "var(--voids-purple-100)", margin: "0 0 26px", maxWidth: 480 }}>{c.sub}</p>
            <CalendlyButton label={c.contactCta} variant="secondary" size="lg" />
          </div>
          <Photo src="/photography/employer-branding-band.jpg" alt={c.bandAlt} ratio="4 / 3" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "56px 32px 64px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 6px" }}>{c.scopeTitle}</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {c.scope.map((s, i) => {
              const color = s.accent === "blue" ? "var(--voids-blue)" : "var(--voids-purple)";
              const bg = s.accent === "blue" ? "var(--voids-blue-100)" : "var(--voids-purple-100)";
              return (
                <div
                  key={s.title}
                  className="g-collapse"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "280px 1fr",
                    gap: 24,
                    alignItems: "center",
                    padding: "28px 0 28px 20px",
                    borderTop: i === 0 ? "none" : "1px solid var(--border-hairline)",
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                      {i === 0 ? <CompassIcon /> : i === 1 ? <MegaphoneIcon /> : <SproutIcon />}
                    </div>
                    <div className="anton" style={{ fontSize: 18, color }}>{s.title}</div>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0, maxWidth: 800 }}>{s.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "56px 32px 64px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 6px" }}>{c.formatsTitle}</h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "0 0 30px", maxWidth: 800 }}>{c.formatsSub}</p>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: 40, alignItems: "center" }}>
            <Photo src="/photography/employer-branding-formats.jpg" alt={c.formatsPhotoAlt} ratio="4 / 5" />
            <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
              {c.formats.map((f) => {
                const color = f.accent === "blue" ? "var(--voids-blue)" : "var(--voids-purple)";
                const bg = f.accent === "blue" ? "var(--voids-blue-100)" : "var(--voids-purple-100)";
                return (
                  <div key={f.title} className={`card card--hoverable card--accent-${f.accent}`} style={{ padding: 20, background: "#fff" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                      <FormatIcon icon={f.icon} color={color} />
                    </div>
                    <div className="anton" style={{ fontSize: 16, margin: "0 0 6px", color }}>{f.title}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{f.text}</p>
                  </div>
                );
              })}
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

function FormatIcon({ icon, color = "var(--voids-purple)" }: { icon: "consultancy" | "inhouse" | "training" | "events"; color?: string }) {
  if (icon === "consultancy") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 11a8 8 0 1 1 3.2 6.4L3 18.5l1.1-3.3A7.96 7.96 0 0 1 3 11Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7.5 11h7M7.5 8h5M7.5 14h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "inhouse") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 20V9L11 3l7 6v11" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.5 20v-6h5v6" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "training") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="8" cy="6" r="2.6" stroke={color} strokeWidth="1.6" />
        <circle cx="16" cy="8" r="2.1" stroke={color} strokeWidth="1.6" />
        <path d="M2.5 19c0-3.6 2.6-6 5.5-6s5.5 2.4 5.5 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14.5 13.3c2.4.3 4 2.5 4 5.7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 3v6a3 3 0 0 0 3 3v9" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 3v6M8 3v6M11 3v6" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M17 3v8" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <ellipse cx="17" cy="4.6" rx="2.2" ry="1.6" stroke={color} strokeWidth="1.7" />
      <path d="M17 11v10" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
