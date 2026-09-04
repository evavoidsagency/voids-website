import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { ContactForm } from "@/components/pages/ContactForm";
import { CalendlyButton } from "@/components/site/CalendlyButton";
import { SOCIALS, localePath, type Lang } from "@/lib/i18n/common";
import { TEAM } from "@/lib/content/team";
import { findTeamPhoto } from "@/lib/logos";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    strengthEyebrow: string;
    strengthTitle: string;
    strengthText: string;
    strengthPoints: string[];
    whatEyebrow: string;
    whatTitle: string;
    whatCards: { verb: string; title: string; text: string; path?: string; cta?: string }[];
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
    strengthEyebrow: "Onze kracht",
    strengthTitle: "WE KENNEN GEN Z VAN BINNENUIT.",
    strengthText:
      "We wachten niet tot cv's binnenkomen. Via structurele samenwerkingen met studieverenigingen en de plekken waar young talent samenkomt, bouwen we die kennis zelf op. Daardoor zien we verder dan een cv: we prikken door tot wie iemand écht is, en of dat de gedrevenheid en potentie oplevert waar we naar zoeken.",
    strengthPoints: [
      "Studieverenigingen als partner",
      "Aanwezig bij young talent events",
      "4.000+ studenten in de community",
    ],
    whatEyebrow: "Wat we doen",
    whatTitle: "HOE WE DAT WAARMAKEN.",
    whatCards: [
      {
        verb: "Talent vinden",
        title: "Werving & selectie",
        text: "We nemen de volledige werving uit handen: van intake tot shortlist tot ondertekende match, voor werkstudenten, stagiairs en starters.",
        path: "/companies/recruitment-selection",
        cta: "Meer over werving & selectie →",
      },
      {
        verb: "Studenten bereiken",
        title: "Community & jobboard",
        text: "Wil je zelf actief werven? Zet je vacature rechtstreeks onder de aandacht van 4.000+ studenten en starters in onze WhatsApp-community en op ons jobboard, naast onze werving & selectie-dienst.",
        path: "/companies/community-jobboard",
        cta: "Bekijk de opties →",
      },
      {
        verb: "Team versterken",
        title: "Advies & employer branding",
        text: "We denken mee over je hele junior-strategie: van recruitment en het behouden van jong talent tot employer branding die echt aanslaat bij studenten en starters.",
        path: "/companies/employer-branding",
        cta: "Meer over advies & branding →",
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
    strengthEyebrow: "Our edge",
    strengthTitle: "WE KNOW GEN Z FROM THE INSIDE.",
    strengthText:
      "We don't wait for CVs to land in an inbox. Through structural partnerships with study associations and the places where young talent actually gathers, we build that knowledge ourselves. That's how we see past a CV: we can tell who someone really is, and whether that adds up to the drive and potential we're looking for.",
    strengthPoints: [
      "Study associations as partners",
      "Present at young talent events",
      "4,000+ students in the community",
    ],
    whatEyebrow: "What we do",
    whatTitle: "WHAT WE ACTUALLY DELIVER.",
    whatCards: [
      {
        verb: "Find talent",
        title: "Recruitment & selection",
        text: "We take the full hiring process off your hands: from intake to shortlist to signed match, for working students, interns and starters.",
        path: "/companies/recruitment-selection",
        cta: "More on recruitment & selection →",
      },
      {
        verb: "Reach students",
        title: "Community & job board",
        text: "Want to recruit actively yourself? Put your vacancy directly in front of 4,000+ students and starters in our WhatsApp community and on our job board, alongside our recruitment & selection service.",
        path: "/companies/community-jobboard",
        cta: "See the options →",
      },
      {
        verb: "Strengthen your team",
        title: "Advice & employer branding",
        text: "We think along on your whole junior strategy: from recruitment and retention to employer branding that actually lands with students and starters.",
        path: "/companies/employer-branding",
        cta: "More on advice & branding →",
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
  const foundersPhoto = findTeamPhoto("together-8-crop");

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
          <Photo src={foundersPhoto} alt={c.foundersAlt} ratio="1600 / 1695" />
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

      <section style={{ background: "var(--voids-purple-100)" }}>
        <div className="wrap" style={{ padding: "48px 32px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.strengthEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 30, margin: "8px 0 14px", maxWidth: 760 }}>{c.strengthTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-soft)", margin: "0 0 22px", maxWidth: 700 }}>{c.strengthText}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {c.strengthPoints.map((pt) => (
              <span
                key={pt}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: "var(--voids-purple)",
                  background: "#fff",
                  borderRadius: 999,
                  padding: "10px 18px",
                  whiteSpace: "nowrap",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <CheckIcon />
                {pt}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "52px 32px" }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.whatEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 28, margin: "10px 0 22px" }}>{c.whatTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }}>
            {c.whatCards.map((card, i) => {
              const accent = i === 1 ? "blue" : "purple";
              const accentColor = accent === "blue" ? "var(--voids-blue)" : "var(--voids-purple)";
              return (
                <div
                  key={card.verb}
                  className={`card card--hoverable card--accent-${accent}`}
                  style={{ padding: 26, display: "flex", flexDirection: "column" }}
                >
                  <div className="anton" style={{ fontSize: 26, color: accentColor, marginBottom: 4 }}>{card.verb}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: ".02em", textTransform: "uppercase", color: "var(--voids-ink-muted)", marginBottom: 14 }}>{card.title}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0, flex: 1 }}>{card.text}</p>
                  {card.path && card.cta && (
                    <Link href={localePath(lang, card.path)} style={{ fontSize: 13, fontWeight: 600, color: accentColor, marginTop: 14 }}>
                      {card.cta}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "52px 32px", maxWidth: 748 }}>
          <h2 className="anton section-h2" style={{ fontSize: 28, margin: "0 0 22px" }}>{c.teamTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 340px))", gap: 4, maxWidth: 684 }}>
            {TEAM.map((m, i) => (
              <div
                key={m.name}
                className="card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  borderTopLeftRadius: i === 0 ? "var(--radius-lg)" : 0,
                  borderBottomLeftRadius: i === 0 ? "var(--radius-lg)" : 0,
                  borderTopRightRadius: i === 1 ? "var(--radius-lg)" : 0,
                  borderBottomRightRadius: i === 1 ? "var(--radius-lg)" : 0,
                  borderRight: i === 0 ? "none" : undefined,
                }}
              >
                <Photo src={m.photo} alt={m.name} ratio="4 / 5" radius="0" objectPosition={m.objectPosition} sizes="(max-width: 860px) 100vw, 340px" />
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ fontSize: 21, fontWeight: 600 }}>{m.name}</div>
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

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6.25" stroke="var(--voids-purple)" strokeWidth="1.4" />
      <path d="M4.3 7.1l1.9 1.9 3.5-3.9" stroke="var(--voids-purple)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
