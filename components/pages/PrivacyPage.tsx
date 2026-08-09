import { LegalPage, type LegalSection } from "@/components/pages/LegalPage";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<Lang, { eyebrow: string; title: string; intro?: string; footnote: string }> = {
  nl: {
    eyebrow: "Privacy",
    title: "PRIVACYBELEID.",
    intro: "Bij verschillen tussen de Nederlandse en Engelse versie is de Engelse versie leidend.",
    footnote: "Laatst bijgewerkt: maart 2026",
  },
  en: {
    eyebrow: "Privacy",
    title: "PRIVACY POLICY.",
    intro: "In case of any discrepancy between the Dutch and English version, the English version prevails.",
    footnote: "Last updated: March 2026",
  },
};

const SECTIONS: Record<Lang, LegalSection[]> = {
  nl: [
    {
      heading: "1. Wie we zijn",
      blocks: [
        {
          p: "VOIDS vof (“VOIDS”, “wij”, “we” of “ons”) verbindt studenten en starters op de arbeidsmarkt met bedrijven via stages, werkstudentschappen en junior functies.",
        },
        { p: "Als onderdeel van onze dienstverlening verwerken wij persoonsgegevens van kandidaten en andere personen die met ons in contact komen." },
        {
          p: "Heb je vragen over dit privacybeleid of over hoe wij met je persoonsgegevens omgaan, neem dan contact met ons op via info@voids.agency of via https://voids.agency.",
        },
        { p: "VOIDS treedt op als verwerkingsverantwoordelijke voor de persoonsgegevens die in dit privacybeleid worden beschreven." },
      ],
    },
    {
      heading: "2. Welke persoonsgegevens we verzamelen",
      blocks: [
        { p: "Wij kunnen de volgende persoonsgegevens verzamelen en verwerken wanneer je solliciteert op een kans, je aansluit bij onze talentpool, of op een andere manier met ons in contact komt:" },
        {
          ul: [
            "Naam",
            "E-mailadres",
            "Telefoonnummer",
            "CV",
            "LinkedIn-profiel of portfoliolinks",
            "Opleidings- en studiegegevens",
            "Werkervaring en vaardigheden",
            "Motivatie of sollicitatieberichten",
            "Overige informatie die je vrijwillig verstrekt",
          ],
        },
        {
          p: "Wij vragen kandidaten om alleen persoonsgegevens te verstrekken die relevant zijn voor wervingsdoeleinden en om gevoelige persoonsgegevens alleen te delen wanneer dat strikt noodzakelijk is.",
        },
        {
          p: "Ook kunnen wij openbaar beschikbare professionele informatie bekijken, zoals LinkedIn-profielen of portfolio’s, wanneer dit relevant is voor het beoordelen van de geschiktheid van een kandidaat voor een kans.",
        },
        { p: "Wij verzamelen uitsluitend persoonsgegevens die relevant zijn voor werving en talentmatching." },
      ],
    },
    {
      heading: "3. Hoe we je gegevens gebruiken",
      blocks: [
        { p: "Wij verwerken je persoonsgegevens voor de volgende doeleinden:" },
        {
          ul: [
            "Het matchen van jou met relevante vacatures, stages of werkstudentschappen",
            "Het delen van je profiel met potentiële werkgevers wanneer relevant voor een specifieke kans",
            "Communicatie met jou over kansen, sollicitaties en carrièremogelijkheden",
            "Het beheren van onze talentpool en ons kandidatennetwerk",
            "Het verbeteren van onze wervingsdiensten",
          ],
        },
        { p: "Wij verkopen je persoonsgegevens niet aan derden." },
      ],
    },
    {
      heading: "4. Grondslag voor verwerking",
      blocks: [
        { p: "Op grond van de Algemene Verordening Gegevensbescherming (AVG/GDPR) baseren wij de verwerking van je gegevens op de volgende grondslagen:" },
        {
          p: "Toestemming: wanneer je je gegevens via onze formulieren indient of je aansluit bij onze talentpool, geef je toestemming voor de verwerking van je persoonsgegevens voor wervingsdoeleinden.",
        },
        {
          p: "Gerechtvaardigd belang: wij kunnen persoonsgegevens verwerken op basis van ons gerechtvaardigd belang om kandidaten te verbinden aan relevante carrièrekansen en werkgevers te ondersteunen bij het vinden van geschikt talent.",
        },
      ],
    },
    {
      heading: "5. Het delen van je gegevens",
      blocks: [
        { p: "Wij kunnen je persoonsgegevens delen met:" },
        {
          ul: [
            "Bedrijven of organisaties met relevante vacatures",
            "Dienstverleners die ons helpen bij het beheren van onze website of communicatiesystemen (zoals e-mail of cloudopslag)",
          ],
        },
        { p: "Kandidaatinformatie wordt alleen gedeeld met potentiële werkgevers wanneer dit relevant is voor een specifieke kans of matchingsproces." },
        { p: "Van werkgevers die kandidaatinformatie ontvangen wordt verwacht dat zij deze informatie vertrouwelijk behandelen en uitsluitend gebruiken voor wervingsdoeleinden." },
      ],
    },
    {
      heading: "6. Hoe lang we je gegevens bewaren",
      blocks: [
        { p: "Wij bewaren persoonsgegevens niet langer dan noodzakelijk. In het algemeen geldt:" },
        {
          ul: [
            "Kandidaatprofielen worden tot 12 maanden bewaard, zodat we contact met je kunnen opnemen over toekomstige kansen.",
            "Als je via VOIDS bent geplaatst in een functie, kan bepaalde informatie langer worden bewaard wanneer dit noodzakelijk is voor administratieve of juridische doeleinden.",
            "Bepaalde administratieve of financiële gegevens kunnen langer worden bewaard wanneer dit wettelijk verplicht is.",
          ],
        },
        { p: "Je kunt op elk moment verzoeken om verwijdering van je gegevens (zie sectie 8)." },
      ],
    },
    {
      heading: "7. Hoe we je gegevens beschermen",
      blocks: [
        { p: "Wij nemen redelijke technische en organisatorische maatregelen om persoonsgegevens te beschermen, waaronder:" },
        { ul: ["Beveiligde e-mail- en cloudopslagsystemen", "Beperkte toegang tot kandidaatinformatie", "Gebruik van wachtwoordbeveiliging en beveiligde apparaten"] },
        { p: "Hoewel wij passende voorzorgsmaatregelen nemen, kan geen enkel systeem absolute veiligheid garanderen." },
      ],
    },
    {
      heading: "8. Jouw rechten",
      blocks: [
        { p: "Op grond van de AVG heb je het recht om:" },
        {
          ul: [
            "Inzage te vragen in de persoonsgegevens die wij van je bewaren",
            "Correctie te vragen van onjuiste gegevens",
            "Verwijdering van je gegevens te vragen",
            "Gegeven toestemming voor verwerking in te trekken",
            "Bezwaar te maken tegen bepaalde vormen van verwerking",
          ],
        },
        { p: "Wil je gebruikmaken van een van deze rechten, neem dan contact met ons op via info@voids.agency." },
        { p: "Wij reageren binnen de termijnen die de toepasselijke wetgeving inzake gegevensbescherming vereist." },
      ],
    },
    {
      heading: "9. Wijzigingen in dit beleid",
      blocks: [
        { p: "Wij kunnen dit privacybeleid van tijd tot tijd bijwerken om wijzigingen in onze diensten of wettelijke verplichtingen te weerspiegelen." },
        { p: "De meest recente versie is altijd beschikbaar op onze website." },
      ],
    },
  ],
  en: [
    {
      heading: "1. Who we are",
      blocks: [
        {
          p: "VOIDS vof (“VOIDS”, “we”, “us”, or “our”) connects students and early-career talent with companies through internships, working student roles, and junior positions.",
        },
        { p: "As part of our services, we process personal data of candidates and other individuals who interact with us." },
        {
          p: "If you have questions about this Privacy Policy or about how we handle your personal data, you can contact us at info@voids.agency or via https://voids.agency.",
        },
        { p: "VOIDS acts as the data controller for the personal data described in this Privacy Policy." },
      ],
    },
    {
      heading: "2. What personal data we collect",
      blocks: [
        { p: "We may collect and process the following personal data when you apply for opportunities, join our talent pool, or otherwise interact with us:" },
        {
          ul: [
            "Name",
            "Email address",
            "Phone number",
            "CV / resume",
            "LinkedIn profile or portfolio links",
            "Education and study information",
            "Work experience and skills",
            "Motivation or application messages",
            "Any other information you voluntarily provide",
          ],
        },
        {
          p: "We ask candidates to only provide personal data that is relevant to recruitment purposes and to avoid including sensitive personal information unless strictly necessary.",
        },
        {
          p: "We may also review publicly available professional information, such as LinkedIn profiles or portfolios, when it is relevant to assessing a candidate’s suitability for opportunities.",
        },
        { p: "We only collect personal data that is relevant to recruitment and talent matching purposes." },
      ],
    },
    {
      heading: "3. How we use your data",
      blocks: [
        { p: "We process your personal data for the following purposes:" },
        {
          ul: [
            "Matching you with relevant job opportunities, internships, or working student positions",
            "Sharing your profile with potential employers when relevant to a specific opportunity",
            "Communicating with you about opportunities, applications, and career possibilities",
            "Managing our talent pool and candidate network",
            "Improving our recruitment services",
          ],
        },
        { p: "We do not sell your personal data to third parties." },
      ],
    },
    {
      heading: "4. Legal basis for processing",
      blocks: [
        { p: "Under the General Data Protection Regulation (GDPR), we rely on the following legal bases to process your data:" },
        {
          p: "Consent: when you submit your information through our forms or join our talent pool, you consent to the processing of your personal data for recruitment purposes.",
        },
        {
          p: "Legitimate interest: we may process personal data as part of our legitimate interest in connecting candidates with relevant career opportunities and supporting employers in finding suitable talent.",
        },
      ],
    },
    {
      heading: "5. Sharing your data",
      blocks: [
        { p: "We may share your personal data with:" },
        {
          ul: [
            "Companies or organizations that have relevant job opportunities",
            "Service providers that help us operate our website or communication systems (such as email or cloud storage)",
          ],
        },
        { p: "Candidate information will only be shared with potential employers when relevant to a specific opportunity or matching process." },
        { p: "Employers receiving candidate information are expected to treat this information confidentially and only use it for recruitment purposes." },
      ],
    },
    {
      heading: "6. How long we keep your data",
      blocks: [
        { p: "We do not keep personal data longer than necessary. In general:" },
        {
          ul: [
            "Candidate profiles are stored for up to 12 months so we can contact you about future opportunities.",
            "If you are placed in a role through VOIDS, certain information may be retained longer where necessary for administrative or legal purposes.",
            "Certain administrative or financial records may be retained for longer where required by applicable law.",
          ],
        },
        { p: "You can request removal of your data at any time (see Section 8)." },
      ],
    },
    {
      heading: "7. How we protect your data",
      blocks: [
        { p: "We take reasonable technical and organizational measures to protect personal data, including:" },
        { ul: ["Secure email and cloud storage systems", "Restricted access to candidate information", "Use of password protection and secure devices"] },
        { p: "While we take appropriate precautions, no system can guarantee absolute security." },
      ],
    },
    {
      heading: "8. Your rights",
      blocks: [
        { p: "Under the GDPR, you have the right to:" },
        {
          ul: [
            "Request access to the personal data we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your data",
            "Withdraw consent to processing",
            "Object to certain types of processing",
          ],
        },
        { p: "If you would like to exercise any of these rights, you can contact us at info@voids.agency." },
        { p: "We will respond within the timeframes required by applicable data protection laws." },
      ],
    },
    {
      heading: "9. Changes to this policy",
      blocks: [
        { p: "We may update this Privacy Policy from time to time to reflect changes in our services or legal obligations." },
        { p: "The most recent version will always be available on our website." },
      ],
    },
  ],
};

export function PrivacyPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return <LegalPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} sections={SECTIONS[lang]} footnote={c.footnote} />;
}
