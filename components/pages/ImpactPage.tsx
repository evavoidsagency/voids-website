import { Photo } from "@/components/ui/Photo";
import { findSdgIcon } from "@/lib/logos";
import type { Lang } from "@/lib/i18n/common";
import { SDGS } from "@/lib/content/sdgs";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    intro: string;
    problemEyebrow: string;
    problemTitle: string;
    problemIntro: string;
    card1Badge: string;
    card1Title: string;
    card1Text: string;
    card2Badge: string;
    card2Title: string;
    card2Text: string;
    problemClose: string;
    solutionEyebrow: string;
    solutionTitle: string;
    solutionText: string;
    stats: { value: string; text: string; color: "purple" | "blue" }[];
    ambitionEyebrow: string;
    ambitionText: string;
    sdgTitle: string;
    sdgSub: string;
    movementEyebrow: string;
    movementTitle: string;
    movementText: string;
    bandAlt: string;
    movementAlt: string;
  }
> = {
  nl: {
    eyebrow: "Impact",
    title: "RECRUITMENT IS HET MIDDEL,\nNIET HET DOEL.",
    intro:
      "VOIDS bestaat om de overgang van studie naar werk eerlijker te maken. De eerste baan bepaalt vaak de rest van een loopbaan, en die eerste stap is niet voor iedereen gelijk. Recruitment is ons middel; gelijke kansen zijn het doel.",
    problemEyebrow: "Het probleem",
    problemTitle: "WERKERVARING IS EEN VOORRECHT GEWORDEN.",
    problemIntro:
      "Relevante werkervaring is bijna een voorwaarde voor een goede baan na je studie. Maar vaak moet je kiezen: ervaring opdoen via een stage, of geld verdienen met een bijbaan die vaak los staat van je studie, en je dus weinig richting geeft. Wie dat inkomen nodig heeft, kan voor die ervaring dan ook niet zomaar kiezen.",
    card1Badge: "Werkervaring",
    card1Title: "De stagevergoeding",
    card1Text:
      "Een stage betaalt meestal een vergoeding, maar vaak te weinig om echt van rond te komen. Voor wie geen buffer of steun heeft, is maandenlang stage lopen daardoor lastig vol te houden.",
    card2Badge: "Inkomen",
    card2Title: "De bijbaan uit noodzaak",
    card2Text:
      "Horeca of retail om de huur te kunnen betalen. Het levert inkomen op, maar geen inhoudelijke ervaring: het staat los van de studie en draagt zelden bij aan een cv of aan professionele groei.",
    problemClose:
      "De één kan zich die keuze veroorloven, de ander niet. Ongelijke kansen, nog vóór de eerste sollicitatie.",
    solutionEyebrow: "De oplossing",
    solutionTitle: "HET WERKSTUDENTSCHAP HEFT DE KEUZE OP.",
    solutionText:
      "Wij helpen organisaties betaalde werkstudentfuncties te creëren waarin studenten al tijdens hun studie aan echte vraagstukken werken, verantwoordelijkheid dragen en zich ontwikkelen. Inkomen én relevante ervaring, tegelijk. Kiezen hoeft niet meer.",
    stats: [
      { value: "100%", text: "transparante voorwaarden & fair wages voor elk talent", color: "blue" },
      { value: "4.000+", text: "studenten met gelijke toegang tot kansen", color: "purple" },
    ],
    ambitionEyebrow: "Onze ambitie",
    ambitionText:
      "Onze ambitie: vanaf medio 2027 investeren we 10% van onze winst terug in gelijke-kansen-initiatieven voor studenten.",
    sdgTitle: "WAAR WE AAN BIJDRAGEN",
    sdgSub: "Onze doelen sluiten aan op drie Sustainable Development Goals van de VN.",
    movementEyebrow: "De beweging",
    movementTitle: "IN DUITSLAND IS DIT AL NORMAAL.",
    movementText:
      "Daar is het werkstudentschap een vanzelfsprekend onderdeel van het hoger onderwijs. Nederland kan dezelfde beweging maken: een arbeidsmarkt waarin leren en werken met elkaar verbonden zijn, en waarin talent wordt beoordeeld op potentie, niet op geld, netwerk of eerdere ervaring.",
    bandAlt: "Werkstudenten aan het werk op kantoor",
    movementAlt: "Aan het werk op kantoor",
  },
  en: {
    eyebrow: "Impact",
    title: "RECRUITMENT IS THE MEANS,\nNOT THE GOAL.",
    intro:
      "VOIDS exists to make the transition from study to work fairer. The first job often shapes the rest of a career, and that first step isn’t equal for everyone. Recruitment is our means; equal opportunity is the goal.",
    problemEyebrow: "The problem",
    problemTitle: "WORK EXPERIENCE HAS BECOME A PRIVILEGE.",
    problemIntro:
      "Relevant work experience is almost a requirement for a good job after your studies. But often you have to choose: gain experience through an internship, or earn money with a side job that's usually unrelated to your studies, and gives you little sense of direction. Anyone who needs that income can't just choose the experience instead.",
    card1Badge: "Work experience",
    card1Title: "The internship allowance",
    card1Text:
      "An internship usually pays an allowance, but often too little to really live on. For anyone without savings or support, months of interning is hard to sustain.",
    card2Badge: "Income",
    card2Title: "The side job out of necessity",
    card2Text:
      "Hospitality or retail just to cover the rent. It brings in income, but no relevant experience: it has nothing to do with their studies and rarely adds to a CV or professional growth.",
    problemClose:
      "One person can afford to make that choice, another can’t. Unequal chances, before the first application is even sent.",
    solutionEyebrow: "The solution",
    solutionTitle: "THE WORKING-STUDENT MODEL REMOVES THE TRADE-OFF.",
    solutionText:
      "We help organisations create paid working-student roles where students work on real challenges during their studies, take responsibility and develop. Income and relevant experience at the same time. No more trade-off.",
    stats: [
      { value: "100%", text: "transparent terms & fair wages for every talent", color: "blue" },
      { value: "4.000+", text: "students with equal access to opportunity", color: "purple" },
    ],
    ambitionEyebrow: "Our ambition",
    ambitionText:
      "Our ambition: from mid-2027, we reinvest 10% of our profit into equal-opportunity initiatives for students.",
    sdgTitle: "WHAT WE CONTRIBUTE TO",
    sdgSub: "Our goals align with three UN Sustainable Development Goals.",
    movementEyebrow: "The movement",
    movementTitle: "IN GERMANY THIS IS ALREADY NORMAL.",
    movementText:
      "There, working alongside your degree is a standard part of higher education. The Netherlands can make the same move: a labour market where learning and working are connected, and where talent is judged on potential, not on money, network or prior experience.",
    bandAlt: "Working students at work in the office",
    movementAlt: "Working at the office",
  },
};

export function ImpactPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "start", padding: "66px 32px 72px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 52, margin: "14px 0 18px", color: "#fff", whiteSpace: "pre-line" }}>{c.title}</h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: 0, maxWidth: 520 }}>{c.intro}</p>
          </div>

          <div style={{ marginTop: 38 }}>
            <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }}>
              {c.stats.map((s) => (
                <div key={s.text} className="card" style={{ padding: 22, textAlign: "center" }}>
                  <div className="anton" style={{ fontSize: 40, color: s.color === "blue" ? "var(--voids-blue)" : "var(--voids-purple)" }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "var(--voids-ink-muted)", marginTop: 6 }}>{s.text}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", padding: "16px 20px" }}>
              <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)", marginBottom: 4, display: "block" }}>
                {c.ambitionEyebrow}
              </span>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: "#fff", margin: 0 }}>{c.ambitionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ padding: "16px 32px 40px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.problemEyebrow}</span>
        <h2 className="anton section-h2" style={{ fontSize: 38, margin: "10px 0 14px", maxWidth: 1040 }}>{c.problemTitle}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "0 0 26px", maxWidth: 820 }}>{c.problemIntro}</p>
        <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="card card--hoverable card--accent-blue" style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <StipendIcon />
              <span className="badge badge--purple">{c.card1Badge}</span>
            </div>
            <div className="anton" style={{ fontSize: 18, margin: "14px 0 10px", color: "var(--voids-blue)" }}>{c.card1Title}</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0 }}>{c.card1Text}</p>
          </div>
          <div className="card card--hoverable card--accent-blue" style={{ padding: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <ShiftIcon />
              <span className="badge badge--blue">{c.card2Badge}</span>
            </div>
            <div className="anton" style={{ fontSize: 18, margin: "14px 0 10px", color: "var(--voids-blue)" }}>{c.card2Title}</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0 }}>{c.card2Text}</p>
          </div>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "22px 0 0", maxWidth: 1040 }}>{c.problemClose}</p>
      </section>

      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "start", padding: "56px 32px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.solutionEyebrow}</span>
            <h2 className="anton section-h2" style={{ fontSize: 36, margin: "10px 0 14px", color: "#fff" }}>{c.solutionTitle}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--voids-purple-100)", margin: 0, maxWidth: 520 }}>{c.solutionText}</p>
          </div>
          <Photo src="/photography/impact-band.jpg" alt={c.bandAlt} ratio="4 / 5" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="wrap" style={{ padding: "60px 32px" }}>
          <h2 className="anton section-h2" style={{ fontSize: 32, margin: "0 0 8px" }}>{c.sdgTitle}</h2>
          <p style={{ fontSize: 14, color: "var(--voids-ink-muted)", margin: "0 0 26px" }}>{c.sdgSub}</p>
          <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20, alignItems: "stretch" }}>
            {SDGS[lang].map((s) => {
              const icon = findSdgIcon(s.num);
              return (
                <div key={s.num} style={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                  <div style={{ background: s.color, minHeight: 180, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
                    {icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={icon} alt={`SDG ${s.num}: ${s.title}`} style={{ width: 132, height: 132, borderRadius: 14, boxShadow: "0 6px 18px rgba(0,0,0,.18)" }} />
                    ) : (
                      <div className="anton" style={{ fontSize: 72, lineHeight: 0.9, color: "#fff" }}>{s.num}</div>
                    )}
                  </div>
                  <div style={{ background: "#fff", padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 6, textAlign: "center", alignItems: "center" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.25, color: s.color, overflowWrap: "anywhere" }}>{s.title}</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--voids-beige)" }}>
        <div className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.movementEyebrow}</span>
            <h2 className="anton section-h2" style={{ fontSize: 34, margin: "10px 0 14px" }}>{c.movementTitle}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>{c.movementText}</p>
          </div>
          <Photo src="/photography/impact-movement.jpg" alt={c.movementAlt} ratio="4 / 3" />
        </div>
      </section>
    </>
  );
}

function StipendIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <ellipse cx="14" cy="22" rx="10" ry="5" stroke="var(--voids-blue)" strokeWidth="2" />
      <path d="M4 22V16" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 22V16" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="14" cy="12" rx="10" ry="5" stroke="var(--voids-blue)" strokeWidth="2" />
      <path
        d="M12 9.3c-.9.3-1.5 1-1.5 1.9 0 1.1 1.1 2 2.5 2s2.5-.9 2.5-2c0-.9-.6-1.6-1.5-1.9M10.8 12h2.4M10.8 9.6h3.6"
        stroke="var(--voids-blue)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShiftIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path d="M9 9L12 4H22L25 9" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9H28L26.5 28C26.5 29 25.5 30 24.5 30H9.5C8.5 30 7.5 29 7.5 28L6 9Z" stroke="var(--voids-blue)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 14V17" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 14V17" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
