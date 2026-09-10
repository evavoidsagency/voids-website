import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<Lang, { eyebrow: string; title: string; ctaTitle: string; ctaText: string; ctaWhats: string; ctaMail: string }> = {
  nl: {
    eyebrow: "FAQ",
    title: "VEELGESTELDE VRAGEN.",
    ctaTitle: "STAAT JE VRAAG ER NIET BIJ?",
    ctaText: "Join de WhatsApp-community of mail ons direct. We reageren zo snel mogelijk.",
    ctaWhats: "💜 Join WhatsApp",
    ctaMail: "Mail ons",
  },
  en: {
    eyebrow: "FAQ",
    title: "FREQUENTLY ASKED QUESTIONS.",
    ctaTitle: "DIDN'T FIND YOUR ANSWER?",
    ctaText: "Join the WhatsApp community or email us directly. We'll get back to you as soon as possible.",
    ctaWhats: "💜 Join WhatsApp",
    ctaMail: "Email us",
  },
};

/** Updated for the new platform — the VOIDS Academy question is dropped (not launching soon). */
const QA: Record<Lang, { q: string; a: string; ul?: string[] }[]> = {
  nl: [
    {
      q: "Wat is VOIDS?",
      a: "VOIDS is een junior talent agency in Amsterdam. We verbinden hoogopgeleid junior talent, denk aan werkstudenten, stagiairs en starters, aan ambitieuze organisaties, voorbij het cv en met oog voor drijfveren en werkstijl.",
    },
    {
      q: "Welke diensten biedt VOIDS voor bedrijven?",
      a: "We bieden drie hoofddiensten:",
      ul: [
        "Werving & selectie: we nemen het hele wervingsproces uit handen, van briefing tot ondertekende match.",
        "Advies & employer branding: we denken mee over je junior-strategie en helpen een merk bouwen waar studenten voor kiezen.",
        "Vacature plaatsen in onze community: je vacature rechtstreeks onder de aandacht van onze groeiende pool aan ambitieuze studenten en starters.",
      ],
    },
    {
      q: "Hoe zorgt VOIDS voor een goede match tussen talent en bedrijf?",
      a: "Onze expertise zit in matchen op drijfveren, werkstijl en cultuurfit, niet alleen op cv. Vaardigheden zijn te leren waar talent aanwezig is, maar een match met de bedrijfscultuur is essentieel voor een succesvolle samenwerking.",
    },
    {
      q: "Hoe kan ik me aanmelden bij VOIDS?",
      a: "Maak gratis je career pager aan, join onze WhatsApp-community, of mail ons op contact@voids.agency om kansen of samenwerking te bespreken. We reageren zo snel mogelijk.",
    },
    {
      q: "Wat kost het om met VOIDS te werken?",
      a: "De investering verschilt per dienst en per rol. Tijdens een vrijblijvend kennismakingsgesprek geven we je een concreet voorstel op maat.",
    },
    {
      q: "Hoe snel kan ik kandidaten verwachten?",
      a: "Dat verschilt per rol, maar na de intake nemen we actief in en buiten onze community door om kandidaten te vinden. Richting week 3 ontvang je meestal een voorgeselecteerde shortlist.",
    },
    {
      q: "In welke regio's is VOIDS actief?",
      a: "We zijn gevestigd in Amsterdam. Het merendeel van de bedrijven en het talent in onze community zit in de Randstad, maar samenwerken op afstand is net zo goed mogelijk.",
    },
    {
      q: "Is VOIDS gratis voor studenten en starters?",
      a: "Ja, altijd. Een career pager aanmaken, lid worden van de talentpool en de WhatsApp-community kost je niets, wat er ook uit voortkomt.",
    },
  ],
  en: [
    {
      q: "What is VOIDS?",
      a: "VOIDS is a junior talent agency in Amsterdam. We connect highly-educated junior talent, think working students, interns and starters, with ambitious organisations, beyond the CV and with an eye for motivation and working style.",
    },
    {
      q: "What services does VOIDS offer for companies?",
      a: "We offer three main services:",
      ul: [
        "Recruitment & selection: we take the entire hiring process off your hands, from briefing to signed match.",
        "Advice & employer branding: we think along on your junior strategy and help build a brand students actually choose.",
        "Vacancy promotion in our community: your vacancy put directly in front of our growing pool of ambitious students and starters.",
      ],
    },
    {
      q: "How does VOIDS ensure a good match between talent and company?",
      a: "Our expertise lies in matching on motivation, working style and cultural fit, not just a CV. Skills can be taught where talent exists, but a match with the company culture is essential for a successful collaboration.",
    },
    {
      q: "How can I sign up with VOIDS?",
      a: "Build your free career pager, join our WhatsApp community, or email us at contact@voids.agency to discuss opportunities or collaboration. We'll get back to you as soon as possible.",
    },
    {
      q: "What does it cost to work with VOIDS?",
      a: "The investment differs per service and per role. During a free-form intro call, we give you a concrete proposal tailored to your situation.",
    },
    {
      q: "How fast can I expect candidates?",
      a: "That varies per role, but after the intake we actively search inside and outside our community to find candidates. By around week 3 you usually receive a pre-selected shortlist.",
    },
    {
      q: "Which regions is VOIDS active in?",
      a: "We're based in Amsterdam. Most of the companies and talent in our community are in the Randstad area, but working together remotely is just as possible.",
    },
    {
      q: "Is VOIDS free for students and starters?",
      a: "Yes, always. Building a career pager, joining the talent pool and the WhatsApp community cost you nothing, whatever comes of it.",
    },
  ],
};

export function FaqPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QA[lang].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.ul ? `${item.a} ${item.ul.map((li) => li.replace(/\.?$/, ".")).join(" ")}` : item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="wrap" style={{ padding: "48px 32px 56px" }}>
        <span className="voids-eyebrow" style={{ color: "var(--voids-purple)" }}>{c.eyebrow}</span>
        <h1 className="anton hero-h1" style={{ fontSize: 38, margin: "10px 0 26px" }}>{c.title}</h1>
        <FaqAccordion items={QA[lang]} />
      </section>
      <section style={{ background: "var(--voids-blue)" }}>
        <div className="wrap" style={{ padding: "48px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div>
            <h2 className="anton section-h2" style={{ fontSize: 26, color: "#fff", margin: "0 0 6px" }}>{c.ctaTitle}</h2>
            <p style={{ fontSize: 14.5, color: "var(--voids-blue-100)", margin: 0 }}>{c.ctaText}</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <WhatsAppButton variant="outline" size="md" onDark>{c.ctaWhats}</WhatsAppButton>
            <Button variant="outline" size="md" onDark href="mailto:contact@voids.agency">{c.ctaMail}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
