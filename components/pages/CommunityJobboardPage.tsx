import Link from "next/link";
import { CalendlyButton } from "@/components/site/CalendlyButton";
import { CountUp } from "@/components/ui/CountUp";
import { Photo } from "@/components/ui/Photo";
import { PricingToggle } from "@/components/pages/PricingToggle";
import { localePath, type Lang } from "@/lib/i18n/common";

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
    pricingIntro: string;
    pricingSubTitle: string;
    pricingSubText: string;
    pricingAdTitle: string;
    pricingAdText: string;
    bandAlt: string;
    contactTitle: string;
    contactText: string;
    contactCta: string;
  }
> = {
  nl: {
    eyebrow: "Vacatures adverteren",
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
    pricingIntro: "Een vacature plaatsen kan al, via een kort intakegesprek. Twee manieren om dat te doen:",
    pricingSubTitle: "Abonnementsvorm",
    pricingSubText: "Plaats doorlopend vacatures tegen een vast, voordeliger tarief. Handig als je regelmatig werft en niet per plaatsing wilt afrekenen.",
    pricingAdTitle: "Losse plaatsing",
    pricingAdText: "Vaste prijs per plaatsing, bepaald door het bereik van de gekozen kanalen op het moment van plaatsen. Tijdelijk extra boosten kan tegen meerprijs.",
    bandAlt: "Team aan het werk op kantoor",
    contactTitle: "VACATURE PLAATSEN?",
    contactText: "Stuur ons je vacature, dan zetten we die voor je live.",
    contactCta: "Neem contact op",
  },
  en: {
    eyebrow: "Advertise vacancies",
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
    pricingIntro: "Posting a vacancy is already possible, via a short intake call. Two ways to do it:",
    pricingSubTitle: "Subscription",
    pricingSubText: "Post vacancies continuously at a fixed, better rate. Useful if you hire regularly and don't want to pay per placement.",
    pricingAdTitle: "Single placement",
    pricingAdText: "A fixed fee per placement, determined by the reach of the selected channels at the time of posting. Temporary boosting is available for an extra fee.",
    bandAlt: "The team at work in the office",
    contactTitle: "WANT TO POST A VACANCY?",
    contactText: "Send us your vacancy and we'll get it live for you.",
    contactCta: "Get in touch",
  },
};

export function CommunityJobboardPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const p = (path: string) => localePath(lang, path);

  return (
    <>
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "center", padding: "64px 32px 56px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 42, margin: "12px 0 12px", color: "#fff", whiteSpace: "pre-line" }}>{c.title}</h1>
            <p style={{ fontSize: 16, color: "var(--voids-purple-100)", margin: "0 0 26px", maxWidth: 480 }}>{c.sub}</p>
            <CalendlyButton label={c.contactCta} variant="secondary" size="lg" />
          </div>

          <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "var(--radius-lg)", padding: 26 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {c.heroStats.map((s, i) => (
                <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 12, borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,.14)", paddingTop: i === 0 ? 0 : 14 }}>
                  <span className="anton" style={{ fontSize: 24, color: "#fff", flex: "none", whiteSpace: "nowrap" }}><CountUp value={s.value} /></span>
                  <span style={{ fontSize: 13, color: "var(--voids-purple-100)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Photo src="/photography/community-jobboard-band-2.jpg" alt={c.bandAlt} ratio="2 / 1" radius="0" objectPosition="center 10%" sizes="100vw" />

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "56px 32px 64px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 20px" }}>{c.howTitle}</h2>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20, alignItems: "stretch" }}>
            {c.how.map((h, i) =>
              i === 1 ? (
                <Link key={h.title} href={p("/jobboard")} className={`card card--hoverable card--accent-${h.accent}`} style={{ padding: 24, display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit" }}>
                  <BoardIcon />
                  <div className="anton" style={{ fontSize: 18, margin: "12px 0 10px" }}>{h.title}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0, flex: 1 }}>{h.text}</p>
                </Link>
              ) : (
                <div key={h.title} className={`card card--accent-${h.accent}`} style={{ padding: 24, display: "flex", flexDirection: "column" }}>
                  <ChatIcon />
                  <div className="anton" style={{ fontSize: 18, margin: "12px 0 10px" }}>{h.title}</div>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0, flex: 1 }}>{h.text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "56px 32px 64px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 24, margin: "0 0 8px" }}>{c.pricingTitle}</h2>
          <p style={{ fontSize: 14.5, color: "var(--voids-ink-muted)", margin: "0 0 24px", maxWidth: 700 }}>{c.pricingIntro}</p>
          <PricingToggle
            leftLabel={c.pricingSubTitle}
            leftText={c.pricingSubText}
            rightLabel={c.pricingAdTitle}
            rightText={c.pricingAdText}
          />
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

function ChatIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M5 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H12l-5 5v-5H8a3 3 0 0 1-3-3V8Z" stroke="var(--voids-purple)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 11.5h10M10 15.5h6" stroke="var(--voids-purple)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BoardIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="4" y="9" width="22" height="16" rx="2" stroke="var(--voids-blue)" strokeWidth="2" />
      <path d="M11 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 15h22" stroke="var(--voids-blue)" strokeWidth="2" />
    </svg>
  );
}

