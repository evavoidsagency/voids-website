import { Photo } from "@/components/ui/Photo";
import { ContactForm } from "@/components/pages/ContactForm";
import { CalendlyButton } from "@/components/site/CalendlyButton";
import { SOCIALS, type Lang } from "@/lib/i18n/common";
import { TEAM } from "@/lib/content/team";
import { findTeamPhoto } from "@/lib/logos";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    whatEyebrow: string;
    whatTitle: string;
    whatCards: { title: string; text: string }[];
    foundersAlt: string;
    foundersPending: string;
    teamTitle: string;
    coFounder: string;
    contactTitle: string;
    contactSub: string;
    bookCall: string;
    location: string;
  }
> = {
  nl: {
    eyebrow: "Over ons",
    title: "WE FILL THE VOIDS.",
    p1: "Overal op de arbeidsmarkt zitten gaten. Studenten met talent dat bedrijven niet zien. Bedrijven met kansen die studenten nooit voorbij zien komen. Die leegtes, die voids, vullen wij door de juiste mensen aan de juiste plek te verbinden.",
    p2: "We kijken verder dan een cv: naar drijfveren, werkstijl en ambitie. Persoonlijk, selectief en met een missie: een eerlijkere start voor iedereen.",
    whatEyebrow: "Wat we doen",
    whatTitle: "HOE WE DAT WAARMAKEN.",
    whatCards: [
      {
        title: "Werving & selectie",
        text: "We nemen de volledige werving uit handen: van intake tot shortlist tot ondertekende match, voor werkstudenten, stagiairs en starters.",
      },
      {
        title: "Community & jobboard",
        text: "4.000+ studenten en starters in onze WhatsApp-community, plus een jobboard waarmee je vacatures rechtstreeks onder hun aandacht brengt.",
      },
      {
        title: "Advies & employer branding",
        text: "We denken mee over je hele junior-strategie: van recruitment en het behouden van jong talent tot employer branding die echt aanslaat bij studenten en starters.",
      },
    ],
    foundersAlt: "Eva en Wieke, de oprichters van VOIDS",
    foundersPending: "Foto van Eva & Wieke volgt",
    teamTitle: "HET TEAM",
    coFounder: "Co-founder",
    contactTitle: "SNEL SCHAKELEN?",
    contactSub: "Plan direct een kennismaking of stuur een bericht.",
    bookCall: "Plan een kennismaking",
    location: "Amsterdam",
  },
  en: {
    eyebrow: "About us",
    title: "WE FILL THE VOIDS.",
    p1: "The job market is full of gaps. Students with talent companies never see. Companies with opportunities students never come across. Those empty spaces, those voids, we fill by connecting the right people to the right place.",
    p2: "We look beyond the CV: at motivation, working style and ambition. Personal, selective and on a mission to give everyone a fairer start.",
    whatEyebrow: "What we do",
    whatTitle: "WHAT WE ACTUALLY DELIVER.",
    whatCards: [
      {
        title: "Recruitment & selection",
        text: "We take the full hiring process off your hands: from intake to shortlist to signed match, for working students, interns and starters.",
      },
      {
        title: "Community & job board",
        text: "4,000+ students and starters in our WhatsApp community, plus a job board that puts your vacancies directly in front of them.",
      },
      {
        title: "Advice & employer branding",
        text: "We think along on your whole junior strategy: from recruitment and retention to employer branding that actually lands with students and starters.",
      },
    ],
    foundersAlt: "Eva and Wieke, the founders of VOIDS",
    foundersPending: "Photo of Eva & Wieke coming soon",
    teamTitle: "THE TEAM",
    coFounder: "Co-founder",
    contactTitle: "WANT TO MOVE FAST?",
    contactSub: "Book an intro call or drop us a message.",
    bookCall: "Book an intro call",
    location: "Amsterdam",
  },
};

export function AboutPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const foundersPhoto = findTeamPhoto("together-8");

  return (
    <>
      <section className="wrap g-collapse" style={{ padding: "64px 32px 44px", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 44, alignItems: "center" }}>
        <div>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.eyebrow}</span>
          <h1 className="anton hero-h1" style={{ fontSize: 50, margin: "12px 0 16px" }}>{c.title}</h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "0 0 14px" }}>{c.p1}</p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>{c.p2}</p>
        </div>
        {foundersPhoto ? (
          <Photo src={foundersPhoto} alt={c.foundersAlt} ratio="4 / 5" />
        ) : (
          <div
            style={{
              aspectRatio: "4 / 5",
              borderRadius: "var(--radius-lg)",
              border: "1px dashed var(--voids-line)",
              background: "var(--voids-beige)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{c.foundersPending}</span>
          </div>
        )}
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "52px 32px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.whatEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 28, margin: "10px 0 22px" }}>{c.whatTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20, maxWidth: 980 }}>
            {c.whatCards.map((card, i) => {
              const accent = i === 1 ? "blue" : "purple";
              return (
                <div
                  key={card.title}
                  className={`card card--hoverable card--accent-${accent}`}
                  style={{ padding: 24 }}
                >
                  <div className="anton" style={{ fontSize: 18, marginBottom: 10, color: accent === "blue" ? "var(--voids-blue)" : "var(--voids-purple)" }}>{card.title}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--voids-beige)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "52px 32px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 28, margin: "0 0 22px" }}>{c.teamTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 640 }}>
            {TEAM.map((m) => (
              <div key={m.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <Photo src={m.photo} alt={m.name} ratio="4 / 5" radius="0" objectPosition={m.objectPosition} sizes="(max-width: 860px) 100vw, 380px" />
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: 19, fontWeight: 600 }}>{m.name}</div>
                  <div style={{ fontSize: 13.5, color: "var(--voids-ink-muted)" }}>{c.coFounder}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="wrap g-collapse" style={{ padding: "56px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start", scrollMarginTop: 90 }}>
        <div>
          <h2 className="anton section-h2" style={{ fontSize: 34, margin: "0 0 12px" }}>{c.contactTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "0 0 22px" }}>{c.contactSub}</p>
          <div style={{ marginBottom: 22 }}>
            <CalendlyButton label={c.bookCall} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="mailto:contact@voids.agency" style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, color: "var(--voids-ink)", fontWeight: 400 }}>
              📧 contact@voids.agency
            </a>
            <div style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15, color: "var(--voids-ink-soft)" }}>📍 {c.location}</div>
            <div style={{ display: "flex", gap: 14, marginTop: 6 }}>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600 }}>LinkedIn</a>
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600 }}>Instagram</a>
              <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600 }}>TikTok</a>
            </div>
          </div>
        </div>
        <ContactForm lang={lang} />
      </section>
    </>
  );
}
