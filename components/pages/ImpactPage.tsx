import { Photo } from "@/components/ui/Photo";
import type { Lang } from "@/lib/i18n/common";

const SDGS: Record<Lang, { num: string; title: string; text: string; color: string }[]> = {
  nl: [
    { num: "4", title: "Kwaliteitsonderwijs", text: "Werkervaring die telt tijdens de studie.", color: "#C5192D" },
    { num: "8", title: "Eerlijk werk & economische groei", text: "Fair wages en transparante voorwaarden.", color: "#A21942" },
    { num: "10", title: "Minder ongelijkheid", text: "Gelijke kansen, ongeacht netwerk of achtergrond.", color: "#DD1367" },
  ],
  en: [
    { num: "4", title: "Quality education", text: "Work experience that counts during your studies.", color: "#C5192D" },
    { num: "8", title: "Decent work & economic growth", text: "Fair wages and transparent terms.", color: "#A21942" },
    { num: "10", title: "Reduced inequalities", text: "Equal opportunity, regardless of network or background.", color: "#DD1367" },
  ],
};

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    intro: string;
    problemEyebrow: string;
    problemTitle: string;
    problemIntro: string;
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    problemClose: string;
    solutionEyebrow: string;
    solutionTitle: string;
    solutionText: string;
    stats: { value: string; text: string }[];
    sdgTitle: string;
    sdgSub: string;
    sdgFootnote: string;
    employersEyebrow: string;
    employersTitle: string;
    employersP1: string;
    employersP2: string;
    movementEyebrow: string;
    movementTitle: string;
    movementText: string;
  }
> = {
  nl: {
    eyebrow: "Impact",
    title: "RECRUITMENT IS HET MIDDEL, NIET HET DOEL.",
    intro:
      "VOIDS bestaat om de overgang van studie naar werk eerlijker te maken. De eerste baan bepaalt vaak de rest van een loopbaan, en die eerste stap is niet voor iedereen gelijk. Recruitment is ons middel; gelijke kansen zijn het doel.",
    problemEyebrow: "Het probleem",
    problemTitle: "WERKERVARING IS EEN VOORRECHT GEWORDEN.",
    problemIntro:
      "Relevante werkervaring is bijna een voorwaarde om na je studie aan een goede baan te komen. Maar juist die ervaring is niet voor iedereen even toegankelijk.",
    card1Title: "De stagevergoeding",
    card1Text:
      "Een stage betaalt meestal een vergoeding, maar vaak te weinig om echt van rond te komen. Voor wie geen buffer of steun heeft, is maandenlang stage lopen daardoor lastig vol te houden.",
    card2Title: "De bijbaan uit noodzaak",
    card2Text:
      "Horeca of retail om rond te komen. Levert inkomen op, maar draagt zelden bij aan een cv of aan professionele groei.",
    problemClose:
      "De één investeert zo in zijn toekomst, terwijl de ander noodgedwongen kiest voor werk dat vooral geld oplevert. Ongelijke kansen, nog vóór de eerste sollicitatie.",
    solutionEyebrow: "De oplossing",
    solutionTitle: "HET WERKSTUDENTSCHAP HEFT DE KEUZE OP.",
    solutionText:
      "Wij helpen organisaties betaalde werkstudentfuncties te creëren waarin studenten al tijdens hun studie aan echte vraagstukken werken, verantwoordelijkheid dragen en zich ontwikkelen. Inkomen én relevante ervaring, tegelijk. Kiezen hoeft niet meer.",
    stats: [
      { value: "10%", text: "van de winst naar gelijke-kansen-initiatieven, onze pledge" },
      { value: "100%", text: "transparante voorwaarden & fair wages voor elk talent" },
      { value: "4.000+", text: "studenten met gelijke toegang tot kansen" },
    ],
    sdgTitle: "WAAR WE AAN BIJDRAGEN",
    sdgSub: "Onze doelen sluiten aan op drie Sustainable Development Goals van de VN.",
    sdgFootnote: "De officiële SDG-pictogrammen van de VN kunnen hier later worden toegevoegd.",
    employersEyebrow: "Ook voor werkgevers",
    employersTitle: "TALENT LEER JE EERDER KENNEN.",
    employersP1:
      "In plaats van pas na het afstuderen te concurreren om schaarse starters, leren werkgevers talent eerder kennen, begeleiden het en laten het groeien. Een duurzamere relatie, waarin je investeert in ontwikkeling in plaats van alleen capaciteit inkoopt.",
    employersP2:
      "Daarom kijken we verder dan het invullen van een vacature. We adviseren hoe een rol uitdagend, leerzaam en toekomstbestendig wordt. Een goede werkstudent is geen goedkope arbeidskracht, maar een toekomstige professional.",
    movementEyebrow: "De beweging",
    movementTitle: "IN DUITSLAND IS DIT AL NORMAAL.",
    movementText:
      "Daar is het werkstudentschap een vanzelfsprekend onderdeel van het hoger onderwijs. Nederland kan dezelfde beweging maken: een arbeidsmarkt waarin leren en werken met elkaar verbonden zijn, en waarin talent wordt beoordeeld op potentie, niet op geld, netwerk of eerdere ervaring.",
  },
  en: {
    eyebrow: "Impact",
    title: "RECRUITMENT IS THE MEANS, NOT THE GOAL.",
    intro:
      "VOIDS exists to make the transition from study to work fairer. The first job often shapes the rest of a career, and that first step isn’t equal for everyone. Recruitment is our means; equal opportunity is the goal.",
    problemEyebrow: "The problem",
    problemTitle: "WORK EXPERIENCE HAS BECOME A PRIVILEGE.",
    problemIntro:
      "Relevant work experience is almost a requirement to land a good job after your studies. Yet that very experience isn’t equally accessible to everyone.",
    card1Title: "The internship allowance",
    card1Text:
      "An internship usually pays an allowance, but often too little to really live on. For anyone without savings or support, months of interning is hard to sustain.",
    card2Title: "The side job out of necessity",
    card2Text:
      "Hospitality or retail to make ends meet. It brings income, but rarely adds to a CV or professional growth.",
    problemClose:
      "So one student invests in their future while another is pushed into work that only pays the bills. Unequal chances, before the first application is even sent.",
    solutionEyebrow: "The solution",
    solutionTitle: "THE WORKING-STUDENT MODEL REMOVES THE TRADE-OFF.",
    solutionText:
      "We help organisations create paid working-student roles where students work on real challenges during their studies, take responsibility and develop. Income and relevant experience at the same time. No more trade-off.",
    stats: [
      { value: "10%", text: "of profit to equal-opportunity initiatives, our pledge" },
      { value: "100%", text: "transparent terms & fair wages for every talent" },
      { value: "4.000+", text: "students with equal access to opportunity" },
    ],
    sdgTitle: "WHAT WE CONTRIBUTE TO",
    sdgSub: "Our goals align with three UN Sustainable Development Goals.",
    sdgFootnote: "The official UN SDG pictograms can be added here later.",
    employersEyebrow: "For employers too",
    employersTitle: "YOU GET TO KNOW TALENT EARLIER.",
    employersP1:
      "Instead of competing for scarce starters only after graduation, employers get to know talent earlier, guide it and let it grow. A more lasting relationship, where you invest in development instead of simply buying capacity.",
    employersP2:
      "That’s why we look beyond filling a vacancy. We advise on how to make a role challenging, worth learning from and future-proof. A good working student isn’t cheap labour, but a future professional.",
    movementEyebrow: "The movement",
    movementTitle: "IN GERMANY THIS IS ALREADY NORMAL.",
    movementText:
      "There, working alongside your degree is a standard part of higher education. The Netherlands can make the same move: a labour market where learning and working are connected, and where talent is judged on potential, not on money, network or prior experience.",
  },
};

export function ImpactPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  return (
    <>
      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap" style={{ padding: "66px 32px 72px", maxWidth: 860 }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.eyebrow}</span>
          <h1 className="anton" style={{ fontSize: 56, margin: "14px 0 18px", color: "#fff" }}>{c.title}</h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--voids-purple-100)", margin: 0 }}>{c.intro}</p>
        </div>
      </section>

      <section className="wrap" style={{ padding: "60px 32px 40px", maxWidth: 900 }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.problemEyebrow}</span>
        <h2 className="anton" style={{ fontSize: 38, margin: "10px 0 14px" }}>{c.problemTitle}</h2>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "0 0 26px" }}>{c.problemIntro}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="card" style={{ padding: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{c.card1Title}</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0 }}>{c.card1Text}</p>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{c.card2Title}</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--voids-ink-muted)", margin: 0 }}>{c.card2Text}</p>
          </div>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.65, margin: "22px 0 0" }}>{c.problemClose}</p>
      </section>

      <section style={{ background: "var(--voids-purple)", color: "#fff" }}>
        <div className="wrap" style={{ padding: "56px 32px", maxWidth: 900 }}>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple-100)" }}>{c.solutionEyebrow}</span>
          <h2 className="anton" style={{ fontSize: 38, margin: "10px 0 14px", color: "#fff" }}>{c.solutionTitle}</h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--voids-purple-100)", margin: 0, maxWidth: 640 }}>{c.solutionText}</p>
        </div>
      </section>

      <Photo src="/photography/impact-band.jpg" alt="Werkstudenten aan het werk op kantoor" ratio="16 / 6" radius="0" sizes="100vw" />

      <section className="wrap" style={{ padding: "60px 32px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {c.stats.map((s, i) => (
          <div key={s.text} className="card" style={{ padding: 28, textAlign: "center" }}>
            <div className="anton" style={{ fontSize: 48, color: i === 1 ? "var(--voids-blue)" : "var(--voids-purple)" }}>{s.value}</div>
            <div style={{ fontSize: 14, color: "var(--voids-ink-muted)", marginTop: 8 }}>{s.text}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)", borderBottom: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "60px 32px" }}>
          <h2 className="anton" style={{ fontSize: 32, margin: "0 0 8px" }}>{c.sdgTitle}</h2>
          <p style={{ fontSize: 14, color: "var(--voids-ink-muted)", margin: "0 0 26px" }}>{c.sdgSub}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SDGS[lang].map((s) => (
              <div key={s.num} style={{ borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ background: s.color, color: "#fff", padding: "22px 22px 20px", aspectRatio: "1 / 1", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: 12, fontWeight: 800 }}>SDG {s.num}</div>
                  <div style={{ flex: 1 }} />
                  <div className="anton" style={{ fontSize: 64, lineHeight: 0.9, marginBottom: 6, color: "#fff" }}>{s.num}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.15, textTransform: "uppercase" }}>{s.title}</div>
                </div>
                <div style={{ background: "#fff", padding: "16px 18px" }}>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--voids-ink-muted)", margin: 0 }}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11.5, color: "var(--voids-ink-muted)", margin: "16px 0 0" }}>{c.sdgFootnote}</p>
        </div>
      </section>

      <section className="wrap" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
        <Photo src="/photography/impact-employers.jpg" alt="Community" ratio="4 / 3" />
        <div>
          <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.employersEyebrow}</span>
          <h2 className="anton" style={{ fontSize: 34, margin: "10px 0 14px" }}>{c.employersTitle}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: "0 0 16px" }}>{c.employersP1}</p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>{c.employersP2}</p>
        </div>
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid var(--border-hairline)" }}>
        <div className="wrap" style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }}>
          <div>
            <span className="voids-eyebrow" style={{ color: "var(--voids-blue)" }}>{c.movementEyebrow}</span>
            <h2 className="anton" style={{ fontSize: 34, margin: "10px 0 14px" }}>{c.movementTitle}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--voids-ink-muted)", margin: 0 }}>{c.movementText}</p>
          </div>
          <Photo src="/photography/impact-movement.jpg" alt="Aan het werk op kantoor" ratio="4 / 3" />
        </div>
      </section>
    </>
  );
}
