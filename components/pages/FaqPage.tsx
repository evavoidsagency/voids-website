import { LegalPage } from "@/components/pages/LegalPage";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<Lang, { eyebrow: string; title: string }> = {
  nl: { eyebrow: "FAQ", title: "VEELGESTELDE VRAGEN." },
  en: { eyebrow: "FAQ", title: "FREQUENTLY ASKED QUESTIONS." },
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
      a: "We bieden twee hoofddiensten:",
      ul: [
        "Werving & selectie: we nemen het hele wervingsproces uit handen, van briefing tot ondertekende match.",
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
  ],
  en: [
    {
      q: "What is VOIDS?",
      a: "VOIDS is a junior talent agency in Amsterdam. We connect highly-educated junior talent, think working students, interns and starters, with ambitious organisations, beyond the CV and with an eye for motivation and working style.",
    },
    {
      q: "What services does VOIDS offer for companies?",
      a: "We offer two main services:",
      ul: [
        "Recruitment & selection: we take the entire hiring process off your hands, from briefing to signed match.",
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
      <LegalPage
        eyebrow={c.eyebrow}
        title={c.title}
        sections={QA[lang].map((item) => ({
          heading: item.q,
          blocks: item.ul ? [{ p: item.a }, { ul: item.ul }] : [{ p: item.a }],
        }))}
      />
    </>
  );
}
