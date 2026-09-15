import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { findSdgIcon } from "@/lib/logos";
import { localePath, type Lang } from "@/lib/i18n/common";
import { SDGS } from "@/lib/content/sdgs";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    intro: string;
    problemEyebrow: string;
    problemTitle: string;
    problemHook: string;
    problemIntro: string;
    card1Badge: string;
    card1Title: string;
    card1Text: string;
    card1Answer: string;
    card2Badge: string;
    card2Title: string;
    card2Text: string;
    card2Answer: string;
    card3Badge: string;
    card3Title: string;
    card3Text: string;
    card3Answer: string;
    problemClose: string;
    problemCloseLabel: string;
    problemCloseCta: string;
    solutionEyebrow: string;
    solutionTitle: string;
    solutionText: string;
    stats: { value: string; text: string; color: "purple" | "blue" }[];
    ambitionEyebrow: string;
    ambitionText: string;
    workshopsEyebrow: string;
    workshopsTitle: string;
    workshopsText: string;
    workshopsTopics: string[];
    workshopsAlt: string;
    sdgTitle: string;
    sdgSub: string;
    movementEyebrow: string;
    movementTitle: string;
    movementText: string;
    bandAlt: string;
    movementAlt: string;
    finalTitle: string;
    finalText: string;
    finalTalentCta: string;
    finalCompaniesCta: string;
  }
> = {
  nl: {
    eyebrow: "Impact",
    title: "RECRUITMENT IS HET MIDDEL,\nNIET HET DOEL.",
    intro:
      "De eerste baan bepaalt vaak de rest van een loopbaan, en die eerste stap is niet voor iedereen gelijk. VOIDS bestaat om de overgang van studie naar werk eerlijker te maken. Recruitment is ons middel, gelijke kansen zijn het doel.",
    problemEyebrow: "Het probleem",
    problemTitle: "WERKERVARING IS EEN VOORRECHT GEWORDEN.",
    problemHook: "Talent zit overal. Toegang tot ervaring niet.",
    problemIntro:
      "Relevante werkervaring is in de praktijk een voorwaarde geworden voor een goede start op de arbeidsmarkt. Maar die ervaring opdoen is niet voor iedereen even makkelijk: waar de ene student de ruimte heeft voor een stage, moet de andere student een bijbaan nemen die weinig bijdraagt aan die ervaring.",
    card1Badge: "Toegang",
    card1Title: "Ongelijke toegang tot ervaring",
    card1Text:
      "Stages betalen vaak te weinig om van rond te komen. Studenten die dat gemis kunnen opvangen, met steun thuis of een buffer, hebben daarmee een voorsprong die niets met talent te maken heeft.",
    card1Answer: "Ons antwoord: een salaris waar je van rond kunt komen, zodat inkomen geen keuze meer hoeft te zijn.",
    card2Badge: "Startpositie",
    card2Title: "Een beperkter startpunt",
    card2Text:
      "Wie die ervaring misloopt, betreedt de arbeidsmarkt met minder vaardigheden, minder zelfvertrouwen over waar hij of zij goed in is, en zonder netwerk om op terug te vallen.",
    card2Answer: "Ons antwoord: echte verantwoordelijkheid en een netwerk van 4.000+ studenten en werkgevers, al tijdens de studie.",
    card3Badge: "Lange termijn",
    card3Title: "Een nadeel dat blijft doorwerken",
    card3Text:
      "Die achterstand stapelt zich op na het afstuderen, en is later niet zomaar recht te trekken met een eerlijker wervingsproces alleen.",
    card3Answer: "Ons antwoord: een voorsprong die je al opbouwt vóórdat de concurrentie begint.",
    problemClose:
      "En dit is niet alleen goed nieuws voor studenten: bedrijven die met werkstudenten werken, bouwen zelf een stabielere pijplijn aan junior talent op, tegen lagere kosten dan een fulltime starter.",
    problemCloseLabel: "Voor bedrijven",
    problemCloseCta: "Bekijk wat dit voor jouw bedrijf betekent →",
    solutionEyebrow: "De oplossing",
    solutionTitle: "HET WERKSTUDENTSCHAP HEFT DE KEUZE OP.",
    solutionText:
      "Wij helpen organisaties betaalde werkstudentfuncties te creëren waarin studenten al tijdens hun studie aan echte vraagstukken werken, verantwoordelijkheid dragen en zich ontwikkelen. Inkomen én relevante ervaring, tegelijk. Kiezen hoeft niet meer.",
    stats: [
      { value: "100%", text: "transparante voorwaarden & eerlijke beloning voor elk talent", color: "blue" },
      { value: "4.000+", text: "studenten met gelijke toegang tot kansen", color: "purple" },
    ],
    ambitionEyebrow: "Onze ambitie",
    ambitionText:
      "Onze ambitie: vanaf medio 2027 investeren we 10% van onze winst terug in gelijke-kansen-initiatieven voor studenten.",
    workshopsEyebrow: "Ook buiten recruitment",
    workshopsTitle: "SCHOOL BEREIDT JE NIET VOOR OP DE ARBEIDSMARKT.",
    workshopsText:
      "Niet iedereen weet vanzelf wat bij hem of haar past, en die keuze is lastiger als je er nooit op voorbereid bent. Daarom geven we ook workshops, lezingen en masterclasses op scholen en bij (studenten)organisaties, over de overgang van school naar werk.",
    workshopsTopics: [
      "Carrière-oriëntatie",
      "Je drijfveren ontdekken",
      "Solliciteren & je cv",
      "Personal branding & LinkedIn",
      "Werkstudentschap als opstap",
      "Netwerken zonder netwerk",
    ],
    workshopsAlt: "Studenten tijdens een workshop over solliciteren",
    sdgTitle: "WAAR WE AAN BIJDRAGEN",
    sdgSub: "Onze doelen sluiten aan op drie Sustainable Development Goals van de VN.",
    movementEyebrow: "De beweging",
    movementTitle: "IN DUITSLAND IS DIT AL NORMAAL.",
    movementText:
      "Daar is het werkstudentschap een vanzelfsprekend onderdeel van het hoger onderwijs. Nederland kan dezelfde beweging maken: een arbeidsmarkt waarin leren en werken met elkaar verbonden zijn, en waarin talent wordt beoordeeld op potentie, niet op geld, netwerk of eerdere ervaring.",
    bandAlt: "Werkstudenten aan het werk op kantoor",
    movementAlt: "Aan het werk op kantoor",
    finalTitle: "KLAAR OM HET VERSCHIL TE MAKEN?",
    finalText: "Of je nu talent bent op zoek naar een eerlijke start, of een bedrijf dat wil investeren in de volgende generatie: we horen graag van je.",
    finalTalentCta: "Voor talent →",
    finalCompaniesCta: "Voor bedrijven →",
  },
  en: {
    eyebrow: "Impact",
    title: "RECRUITMENT IS THE MEANS,\nNOT THE GOAL.",
    intro:
      "The first job often shapes the rest of a career, and that first step isn't equal for everyone. VOIDS exists to make the transition from study to work fairer. Recruitment is our means, equal opportunity is the goal.",
    problemEyebrow: "The problem",
    problemTitle: "WORK EXPERIENCE HAS BECOME A PRIVILEGE.",
    problemHook: "Talent is everywhere. Access to experience isn't.",
    problemIntro:
      "Relevant work experience has become a de facto requirement for a good start in the job market. But gaining that experience isn't equally easy for everyone: where one student has the room to take an internship, another has to take a side job that adds little to that experience.",
    card1Badge: "Access",
    card1Title: "Unequal access to experience",
    card1Text:
      "Internships often pay too little to live on. Students who can absorb that gap, with support at home or savings to fall back on, get a head start that has nothing to do with talent.",
    card1Answer: "Our answer: a salary you can actually live on, so income doesn't have to be the trade-off.",
    card2Badge: "Starting position",
    card2Title: "A narrower launchpad",
    card2Text:
      "Missing out on that experience means entering the job market with fewer skills, less confidence in what you're good at, and no network to fall back on.",
    card2Answer: "Our answer: real responsibility and a network of 4,000+ students and employers, while still studying.",
    card3Badge: "Long term",
    card3Title: "A disadvantage that compounds",
    card3Text:
      "That gap keeps compounding after graduation, and can't simply be undone later by a fairer hiring process alone.",
    card3Answer: "Our answer: a head start you build before the competition even begins.",
    problemClose:
      "And this isn't only good news for students: companies that work with working students build a more stable junior pipeline themselves, at a lower cost than a full-time starter.",
    problemCloseLabel: "For companies",
    problemCloseCta: "See what this means for your company →",
    solutionEyebrow: "The solution",
    solutionTitle: "THE WORKING-STUDENT MODEL REMOVES THE TRADE-OFF.",
    solutionText:
      "We help organisations create paid working-student roles where students work on real challenges during their studies, take responsibility and develop. Income and relevant experience at the same time. No more trade-off.",
    stats: [
      { value: "100%", text: "transparent terms & fair wages for every talent", color: "blue" },
      { value: "4,000+", text: "students with equal access to opportunity", color: "purple" },
    ],
    ambitionEyebrow: "Our ambition",
    ambitionText:
      "Our ambition: from mid-2027, we reinvest 10% of our profit into equal-opportunity initiatives for students.",
    workshopsEyebrow: "Beyond recruitment",
    workshopsTitle: "SCHOOL DOESN'T PREPARE YOU FOR THE JOB MARKET.",
    workshopsText:
      "Not everyone naturally knows what fits them, and that choice gets harder if you've never been prepared for it. That's why we also run workshops, talks and masterclasses at schools and (student) organisations, on the transition from school to work.",
    workshopsTopics: [
      "Career orientation",
      "Discovering your drivers",
      "Applying & your CV",
      "Personal branding & LinkedIn",
      "Working student roles as a stepping stone",
      "Networking without a network",
    ],
    workshopsAlt: "Students during a workshop about applying for jobs",
    sdgTitle: "WHAT WE CONTRIBUTE TO",
    sdgSub: "Our goals align with three UN Sustainable Development Goals.",
    movementEyebrow: "The movement",
    movementTitle: "IN GERMANY THIS IS ALREADY NORMAL.",
    movementText:
      "There, working alongside your degree is a standard part of higher education. The Netherlands can make the same move: a labour market where learning and working are connected, and where talent is judged on potential, not on money, network or prior experience.",
    bandAlt: "Working students at work in the office",
    movementAlt: "Working at the office",
    finalTitle: "READY TO MAKE A DIFFERENCE?",
    finalText: "Whether you're talent looking for a fair start, or a company that wants to invest in the next generation: we'd love to hear from you.",
    finalTalentCta: "For talent →",
    finalCompaniesCta: "For companies →",
  },
};

export function ImpactPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const p = (path: string) => localePath(lang, path);
  const lastSpace = c.title.lastIndexOf(" ");
  const titleLead = c.title.slice(0, lastSpace + 1);
  const titleLast = c.title.slice(lastSpace + 1);

  return (
    <>
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "start", padding: "66px 32px 72px" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
            <h1 className="anton hero-h1" style={{ fontSize: 52, margin: "14px 0 18px", color: "#fff", whiteSpace: "pre-line" }}>
              {titleLead}
              <span style={{ position: "relative", display: "inline-block" }}>
                {titleLast}
                <Squiggle />
              </span>
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: 0, maxWidth: 520 }}>{c.intro}</p>
          </div>

          <div style={{ marginTop: 38 }}>
            <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }}>
              {c.stats.map((s) => (
                <div key={s.text} className="card" style={{ padding: 22, textAlign: "center" }}>
                  <div className="anton" style={{ fontSize: 40, color: s.color === "blue" ? "var(--voids-blue)" : "var(--voids-purple)" }}><CountUp value={s.value} /></div>
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

      <section className="wrap" style={{ padding: "64px 32px 72px" }}>
        <Reveal>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.problemEyebrow}</span>
          <h2 className="anton section-h2" style={{ fontSize: 38, margin: "14px 0 20px", maxWidth: 1040 }}>{c.problemTitle}</h2>
          <p className="anton" style={{ fontSize: 21, lineHeight: 1.4, color: "var(--voids-ink)", textTransform: "none", margin: "0 0 16px", maxWidth: 900 }}>{c.problemHook}</p>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--voids-ink-muted)", margin: "0 0 44px", maxWidth: 900 }}>{c.problemIntro}</p>
        </Reveal>
        <div className="g-collapse problem-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24, alignItems: "stretch" }}>
          {[
            { icon: <StipendIcon />, badge: c.card1Badge, title: c.card1Title, text: c.card1Text, answer: c.card1Answer },
            { icon: <ShiftIcon />, badge: c.card2Badge, title: c.card2Title, text: c.card2Text, answer: c.card2Answer },
            { icon: <CompoundIcon />, badge: c.card3Badge, title: c.card3Title, text: c.card3Text, answer: c.card3Answer },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 140} className="problem-card" style={{ height: "100%" }}>
              <div className="card card--hoverable card--accent-blue" style={{ height: "100%", padding: 28, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {card.icon}
                  <span className="badge badge--purple">{card.badge}</span>
                </div>
                <div className="anton" style={{ fontSize: 18, margin: "18px 0 10px", color: "var(--voids-blue)" }}>{card.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0, flex: 1 }}>{card.text}</p>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--voids-purple)", fontWeight: 600, margin: "16px 0 0", paddingTop: 14, borderTop: "1px solid var(--voids-line)" }}>{card.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <Reveal>
          <div className="wrap g-collapse" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 44, alignItems: "stretch", padding: "64px 32px" }}>
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.solutionEyebrow}</span>
              <h2 className="anton section-h2" style={{ fontSize: 36, margin: "10px 0 14px", color: "#fff" }}>{c.solutionTitle}</h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--voids-purple-100)", margin: 0, maxWidth: 520 }}>{c.solutionText}</p>
              <div className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, maxWidth: 520, marginTop: "auto", background: "#fff", borderTop: "3px solid var(--voids-blue)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--voids-blue)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <BriefcaseIcon color="#fff" />
                  </div>
                  <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--voids-blue)" }}>{c.problemCloseLabel}</span>
                </div>
                <p className="anton" style={{ fontSize: 16, lineHeight: 1.4, textTransform: "none", color: "var(--voids-ink)", margin: 0 }}>
                  {c.problemClose}
                </p>
                <Button variant="primary" size="sm" href={p("/companies")}>{c.problemCloseCta}</Button>
              </div>
            </div>
            <Photo
              src="/photography/impact-band.jpg"
              alt={c.bandAlt}
              className="stretch-photo"
              style={{ aspectRatio: "auto", height: "100%" }}
              objectPosition="center 30%"
              zoom={1.12}
            />
          </div>
        </Reveal>
      </section>

      <section style={{ background: "#fff" }}>
        <Reveal>
          <div className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
            <Photo src="/photography/impact-workshops.jpg" alt={c.workshopsAlt} ratio="4 / 3" />
            <div>
              <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.workshopsEyebrow}</span>
              <h2 className="anton section-h2" style={{ fontSize: 32, margin: "10px 0 14px" }}>{c.workshopsTitle}</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--voids-ink-muted)", margin: "0 0 22px", maxWidth: 480 }}>{c.workshopsText}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {c.workshopsTopics.map((topic) => (
                  <span key={topic} className="badge badge--purple">{topic}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section style={{ background: "var(--voids-purple-100)" }}>
        <Reveal>
          <div className="wrap" style={{ padding: "60px 32px" }}>
            <h2 className="anton section-h2" style={{ fontSize: 32, margin: "0 0 8px" }}>{c.sdgTitle}</h2>
            <p style={{ fontSize: 14, color: "var(--voids-ink-muted)", margin: "0 0 26px" }}>{c.sdgSub}</p>
            <div className="g-collapse" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20, alignItems: "stretch" }}>
              {SDGS[lang].map((s) => {
                const icon = findSdgIcon(s.num);
                return (
                  <div key={s.num} style={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                    <div style={{ background: s.color, minHeight: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {icon ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={icon} alt={`SDG ${s.num}: ${s.title}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
        </Reveal>
      </section>

      <section style={{ background: "var(--voids-beige)" }}>
        <Reveal>
          <div className="wrap g-collapse" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
            <div>
              <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.movementEyebrow}</span>
              <h2 className="anton section-h2" style={{ fontSize: 34, margin: "10px 0 14px" }}>{c.movementTitle}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>{c.movementText}</p>
            </div>
            <Photo src="/photography/impact-employers.jpg" alt={c.movementAlt} ratio="4 / 3" />
          </div>
        </Reveal>
      </section>

      <section style={{ background: "var(--voids-purple)" }}>
        <div className="wrap" style={{ padding: "52px 32px", textAlign: "center", color: "#fff" }}>
          <h2 className="anton section-h2" style={{ fontSize: 34, margin: "0 0 12px", color: "#fff" }}>{c.finalTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--voids-purple-100)", maxWidth: 560, margin: "0 auto 24px" }}>{c.finalText}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="outline" size="lg" onDark href={p("/talent")}>{c.finalTalentCta}</Button>
            <Button variant="outline" size="lg" onDark href={p("/companies")}>{c.finalCompaniesCta}</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Squiggle() {
  return (
    <svg
      width="100%"
      height="16"
      viewBox="0 0 160 16"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ position: "absolute", left: 0, bottom: -16, width: "100%" }}
    >
      <path d="M2 9c26-11 52-11 78 0s52 11 78 0" stroke="var(--voids-blue)" strokeWidth="5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function BriefcaseIcon({ color = "var(--voids-blue)" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 13h18" stroke={color} strokeWidth="1.6" />
    </svg>
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

function CompoundIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path d="M4 26h5v-6H4v6ZM13 26h5v-12h-5v12ZM22 26h5v-18h-5v18Z" stroke="var(--voids-blue)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 16l7-7 5 4 8-9" stroke="var(--voids-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
