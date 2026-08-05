import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Photo } from "@/components/ui/Photo";
import { localePath, type Lang } from "@/lib/i18n/common";

const NICHES: Record<Lang, string[]> = {
  nl: ["Werkstudenten", "Stagiairs", "Starters", "Traineeships"],
  en: ["Working students", "Interns", "Starters", "Traineeships"],
};

const TRUSTED: [string, string, string][] = [
  ["Meute", "#F5B729", "#1A1A1A"],
  ["House of Inclusion", "#FFFFFF", "#1A1A1A"],
  ["Enerzien", "#0E3B36", "#FFFFFF"],
  ["Van Oort & Van Oort", "#FFFFFF", "#17A398"],
  ["#MasterJeCijfers", "#1F3350", "#FFFFFF"],
  ["The Cirqle", "#FFFFFF", "#1A1A1A"],
  ["Wallie", "#EE6C33", "#1A1A1A"],
  ["HotelPlanner", "#FFFFFF", "#1A1A1A"],
  ["M&G", "#0A0A0A", "#FFFFFF"],
  ["Go Delphi", "#FFFFFF", "#3A3A8C"],
  ["Hubby", "#F08A1E", "#FFFFFF"],
  ["Onestone", "#FFFFFF", "#17A398"],
  ["Stuwr", "#7A1E63", "#F5B729"],
  ["Check and Charge", "#FFFFFF", "#1A1A1A"],
  ["De Huismeesters", "#0E3B36", "#FFFFFF"],
  ["De Kiesmannen", "#3A3540", "#FFFFFF"],
  ["Dropp", "#FFFFFF", "#EE6C33"],
  ["Doing Goods", "#1F3350", "#FFFFFF"],
  ["Green Team", "#FFFFFF", "#4E7A5A"],
  ["Writify", "#EE5A34", "#FFFFFF"],
  ["The Longevity Store", "#FFFFFF", "#1A1A1A"],
  ["Booking.com", "#003580", "#FFFFFF"],
];

const TESTIMONIALS: Record<Lang, { quote: string; name: string; role: string }[]> = {
  nl: [
    {
      quote: "VOIDS leverde binnen twee weken kandidaten die precies op onze vraag pasten.",
      name: "Talent lead",
      role: "HealthTech scale-up, Amsterdam",
    },
    {
      quote: "VOIDS matchte mijn sterke punten met de juiste kans: een baan die ik anders nooit was tegengekomen.",
      name: "Anna Haasnoot",
      role: "Werkstudent bij een finance-kantoor",
    },
  ],
  en: [
    {
      quote: "VOIDS delivered candidates that fit our need exactly, within two weeks.",
      name: "Talent lead",
      role: "HealthTech scale-up, Amsterdam",
    },
    {
      quote: "VOIDS matched my strengths with the right opportunity: a job I’d never have found otherwise.",
      name: "Anna Haasnoot",
      role: "Working student at a finance firm",
    },
  ],
};

const COPY: Record<
  Lang,
  {
    heroTitle: string;
    heroSub: string;
    ctaCompanies: string;
    ctaTalent: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    nicheLabel: string;
    trustedBy: string;
    doorTalentTitle: string;
    doorTalentText: string;
    doorTalentCta: string;
    doorCompaniesTitle: string;
    doorCompaniesText: string;
    doorCompaniesCta: string;
    testimonialsLabel: string;
    missionLabel: string;
    missionTitle: string;
    missionText: string;
    missionCta: string;
    finalTitle: string;
    finalText: string;
    finalCta: string;
  }
> = {
  nl: {
    heroTitle: "JUNIOR TALENT MET SUBSTANTIE.",
    heroSub:
      "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties. We kijken verder dan een cv: naar drijfveren, werkstijl en ambitie. Kwaliteit boven kwantiteit.",
    ctaCompanies: "Voor bedrijven →",
    ctaTalent: "Voor talent",
    stat1Label: "in de community",
    stat2Label: "eerlijke voorwaarden & fair pay",
    stat3Label: "winst naar impact",
    nicheLabel: "Onze niche:",
    trustedBy: "TRUSTED BY",
    doorTalentTitle: "VOOR TALENT",
    doorTalentText:
      "Jij hoeft niet te jagen op vacaturesites. Vul in wat je drijft, krijg gratis je career pager en sta meteen op de radar bij ambitieuze organisaties.",
    doorTalentCta: "Ontdek de talentkant →",
    doorCompaniesTitle: "VOOR BEDRIJVEN",
    doorCompaniesText:
      "Een voorgeselecteerde shortlist in plaats van een stapel cv’s. Werkstudenten, stagiairs en starters, gematcht op cultuur en groeifase.",
    doorCompaniesCta: "Bekijk het aanbod →",
    testimonialsLabel: "Wat opdrachtgevers en talent zeggen",
    missionLabel: "Onze missie",
    missionTitle: "EERLIJK WERK, GELIJKE KANSEN.",
    missionText:
      "We bouwen aan een eerlijkere arbeidsmarkt voor starters: transparante voorwaarden, fair wages en gelijke kansen, ongeacht netwerk of achtergrond. 10% van onze winst gaat terug naar dat doel.",
    missionCta: "Onze impact →",
    finalTitle: "JOBS KOMEN NAAR JOU TOE.",
    finalText:
      "Sluit je aan bij 4.000+ studenten en starters in onze community. Passende kansen landen direct in je WhatsApp.",
    finalCta: "💜 Join de WhatsApp-community",
  },
  en: {
    heroTitle: "JUNIOR TALENT WITH SUBSTANCE.",
    heroSub:
      "We connect highly-educated talent with ambitious organisations. We look beyond the CV: at motivation, working style and ambition. Quality over quantity.",
    ctaCompanies: "For companies →",
    ctaTalent: "For talent",
    stat1Label: "in the community",
    stat2Label: "fair terms & fair pay",
    stat3Label: "of profit to impact",
    nicheLabel: "Our niche:",
    trustedBy: "TRUSTED BY",
    doorTalentTitle: "FOR TALENT",
    doorTalentText:
      "No more trawling job boards. Tell us what drives you, get your free career pager, and land on the radar of ambitious organisations straight away.",
    doorTalentCta: "Explore the talent side →",
    doorCompaniesTitle: "FOR COMPANIES",
    doorCompaniesText:
      "A pre-selected shortlist instead of a stack of CVs. Working students, interns and starters, matched on culture and growth stage.",
    doorCompaniesCta: "See what we offer →",
    testimonialsLabel: "What clients and talent say",
    missionLabel: "Our mission",
    missionTitle: "FAIR WORK, EQUAL CHANCES.",
    missionText:
      "We’re building a fairer job market for starters: transparent terms, fair wages and equal chances, whatever your network or background. We put 10% of our profit back into that mission.",
    missionCta: "Our impact →",
    finalTitle: "JOBS COME TO YOU.",
    finalText:
      "Join 4,000+ students and starters in our community. Matching opportunities land straight in your WhatsApp.",
    finalCta: "💜 Join the WhatsApp community",
  },
};

export function HomePage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const p = (path: string) => localePath(lang, path);

  return (
    <>
      {/* HERO */}
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 44,
            alignItems: "center",
            padding: "70px 32px 76px",
          }}
        >
          <div>
            <h1 className="anton" style={{ fontSize: 62, margin: "0 0 20px", color: "#fff" }}>
              {c.heroTitle}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-purple-100)", maxWidth: 520, margin: "0 0 30px" }}>
              {c.heroSub}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="secondary" size="lg" href={p("/companies")}>
                {c.ctaCompanies}
              </Button>
              <Button variant="outline" size="lg" onDark href={p("/talent")}>
                {c.ctaTalent}
              </Button>
            </div>
            <div style={{ display: "flex", gap: 34, marginTop: 40, flexWrap: "wrap" }}>
              <div>
                <div className="anton" style={{ fontSize: 34, color: "#fff" }}>4.000+</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-purple-100)" }}>{c.stat1Label}</div>
              </div>
              <div>
                <div className="anton" style={{ fontSize: 34, color: "#fff" }}>100%</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-purple-100)" }}>{c.stat2Label}</div>
              </div>
              <div>
                <div className="anton" style={{ fontSize: 34, color: "#fff" }}>10%</div>
                <div style={{ fontSize: 12.5, color: "var(--voids-purple-100)" }}>{c.stat3Label}</div>
              </div>
            </div>
          </div>
          <Photo src="/photography/home-hero.jpg" alt="Aan het werk op kantoor" ratio="4 / 5" priority />
        </div>
      </section>

      {/* NICHE STRIP */}
      <section
        className="wrap"
        style={{
          padding: "26px 32px",
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid var(--border-hairline)",
        }}
      >
        <span style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{c.nicheLabel}</span>
        {NICHES[lang].map((n) => (
          <span
            key={n}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--voids-purple)",
              background: "var(--voids-purple-100)",
              padding: "6px 13px",
              borderRadius: 6,
            }}
          >
            {n}
          </span>
        ))}
      </section>

      {/* TRUSTED BY */}
      <section style={{ borderBottom: "1px solid var(--border-hairline)", background: "var(--voids-beige)" }}>
        <div className="wrap" style={{ padding: "34px 32px" }}>
          <div className="anton" style={{ fontSize: 20, textAlign: "center", marginBottom: 22 }}>
            {c.trustedBy}
          </div>
          <div style={{ display: "flex", gap: 20, overflowX: "auto", padding: "4px 2px 10px" }}>
            {TRUSTED.map(([name, bg, fg]) => (
              <div
                key={name}
                style={{
                  width: 92,
                  height: 92,
                  borderRadius: "50%",
                  flex: "none",
                  background: bg,
                  color: fg,
                  border: bg === "#FFFFFF" ? "1px solid var(--border-hairline)" : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontSize: 11,
                  fontWeight: 700,
                  lineHeight: 1.15,
                  padding: 8,
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO DOORS */}
      <section className="wrap" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <Link
          href={p("/talent")}
          className="card"
          style={{ display: "block", borderTop: "3px solid var(--voids-blue)", padding: 32, textDecoration: "none" }}
        >
          <div className="anton" style={{ fontSize: 28 }}>{c.doorTalentTitle}</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "12px 0 18px" }}>
            {c.doorTalentText}
          </p>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-blue)" }}>{c.doorTalentCta}</span>
        </Link>
        <Link
          href={p("/companies")}
          className="card"
          style={{ display: "block", borderTop: "3px solid var(--voids-purple)", padding: 32, textDecoration: "none" }}
        >
          <div className="anton" style={{ fontSize: 28 }}>{c.doorCompaniesTitle}</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: "12px 0 18px" }}>
            {c.doorCompaniesText}
          </p>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-purple)" }}>{c.doorCompaniesCta}</span>
        </Link>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "60px 32px" }}>
          <div className="anton" style={{ fontSize: 15, letterSpacing: ".06em", color: "var(--voids-ink-muted)", marginBottom: 26 }}>
            {c.testimonialsLabel}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            {TESTIMONIALS[lang].map((t) => (
              <div key={t.name + t.quote} style={{ background: "var(--voids-beige)", border: "1px solid var(--border-hairline)", borderRadius: "var(--radius-md)", padding: 26 }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 500, lineHeight: 1.5, color: "var(--voids-ink)", margin: "0 0 18px" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", flex: "none", background: "var(--voids-line-soft)" }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--voids-ink)" }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "var(--voids-ink-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / IMPACT TEASER */}
      <section className="wrap" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 44, alignItems: "center" }}>
        <Photo src="/photography/home-mission.jpg" alt="Het VOIDS-team op kantoor" ratio="1 / 1" />
        <div>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.missionLabel}</span>
          <h2 className="anton" style={{ fontSize: 40, margin: "10px 0 16px" }}>{c.missionTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", maxWidth: 520, margin: "0 0 22px" }}>
            {c.missionText}
          </p>
          <Button variant="primary" size="md" href={p("/impact")}>
            {c.missionCta}
          </Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "var(--voids-blue)" }}>
        <div className="wrap" style={{ padding: "56px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton" style={{ fontSize: 38, margin: "0 0 12px", color: "#fff" }}>{c.finalTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--voids-blue-100)", maxWidth: 540, margin: "0 auto 24px" }}>{c.finalText}</p>
          <WhatsAppButton variant="primary" size="lg">{c.finalCta}</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
