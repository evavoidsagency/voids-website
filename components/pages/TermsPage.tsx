import { LegalPage, type LegalSection } from "@/components/pages/LegalPage";
import type { Lang } from "@/lib/i18n/common";

const COPY: Record<Lang, { eyebrow: string; title: string; intro?: string; footnote: string }> = {
  nl: {
    eyebrow: "Voorwaarden",
    title: "ALGEMENE VOORWAARDEN.",
    intro: "Bij verschillen tussen de Nederlandse en Engelse versie is de Engelse versie leidend.",
    footnote: "Laatst bijgewerkt: maart 2026",
  },
  en: {
    eyebrow: "Terms",
    title: "GENERAL TERMS AND CONDITIONS.",
    intro: "In case of any discrepancy between the Dutch and English version, the English version prevails.",
    footnote: "Last updated: March 2026",
  },
};

const SECTIONS: Record<Lang, LegalSection[]> = {
  nl: [
    {
      heading: "Artikel 1 – Definities en toepasselijkheid",
      blocks: [
        {
          p: "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, overeenkomsten en diensten die worden verricht onder de naam VOIDS vof (hierna: “VOIDS”), tenzij uitdrukkelijk schriftelijk anders is overeengekomen.",
        },
        { p: "Deze voorwaarden zijn van toepassing op alle diensten, waaronder in ieder geval:" },
        { ul: ["Werving en selectie", "Vacature-advertising", "Employer branding diensten", "Advisering op het gebied van talentstrategie", "Consultancy en aanverwante diensten"] },
        {
          p: "Op diensten voor werving en selectie zijn daarnaast de separate Recruitment & Selection Terms van VOIDS van toepassing. Bij strijdigheid prevaleren die voorwaarden met betrekking tot wervingsopdrachten.",
        },
        { p: "De toepasselijkheid van eventuele algemene voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen." },
        { p: "Bij strijdigheid tussen deze voorwaarden en een specifieke schriftelijke overeenkomst of offerte, prevaleert de specifieke schriftelijke overeenkomst." },
      ],
    },
    {
      heading: "Artikel 2 – Totstandkoming van de overeenkomst",
      blocks: [
        { p: "Een overeenkomst tussen VOIDS en de opdrachtgever komt tot stand zodra een door VOIDS uitgebrachte offerte of aanbieding schriftelijk of elektronisch door de opdrachtgever is aanvaard." },
        { p: "Mondelinge toezeggingen zijn pas bindend na schriftelijke bevestiging door VOIDS." },
      ],
    },
    {
      heading: "Artikel 3 – Aard van de dienstverlening",
      blocks: [
        { p: "VOIDS verricht haar diensten op basis van een inspanningsverplichting, tenzij uitdrukkelijk schriftelijk anders is overeengekomen." },
        { p: "VOIDS garandeert geen specifieke resultaten, aannameresultaten, bedrijfsprestaties of commercieel succes." },
        { p: "De opdrachtgever blijft volledig verantwoordelijk voor alle uiteindelijke beslissingen met betrekking tot aanname, de uitvoering van adviezen of het gebruik van opgeleverde diensten." },
      ],
    },
    {
      heading: "Artikel 4 – Tarieven en betaling",
      blocks: [
        { p: "Alle tarieven zijn exclusief btw en eventuele andere toepasselijke belastingen." },
        { p: "Facturen dienen binnen veertien (14) dagen na factuurdatum te worden voldaan, tenzij schriftelijk anders is overeengekomen." },
        { p: "Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim, zonder dat een ingebrekestelling is vereist, en is de opdrachtgever de wettelijke handelsrente verschuldigd, alsmede redelijke incassokosten." },
        { p: "De opdrachtgever is niet gerechtigd betaling op te schorten of bedragen te verrekenen." },
        { p: "Aanvullend werk of diensten die niet zijn opgenomen in de oorspronkelijke overeenkomst kunnen afzonderlijk in rekening worden gebracht." },
      ],
    },
    {
      heading: "Artikel 5 – Intellectuele eigendom",
      blocks: [
        {
          p: "Alle intellectuele eigendomsrechten met betrekking tot materialen, strategieën, concepten, raamwerken, documentatie, vacatureteksten, employer branding materialen, adviesrapporten of andere door VOIDS ontwikkelde diensten blijven het exclusieve eigendom van VOIDS, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.",
        },
        { p: "Aan de opdrachtgever wordt een niet-overdraagbaar, niet-exclusief gebruiksrecht verleend op de opgeleverde diensten, uitsluitend voor het overeengekomen doel en de overeengekomen reikwijdte." },
        { p: "Verveelvoudiging, wijziging, verspreiding of gebruik buiten de overeengekomen reikwijdte is niet toegestaan zonder voorafgaande schriftelijke toestemming van VOIDS." },
      ],
    },
    {
      heading: "Artikel 6 – Vertrouwelijkheid",
      blocks: [
        { p: "Beide partijen behandelen alle vertrouwelijke informatie die zij in het kader van de overeenkomst ontvangen strikt vertrouwelijk." },
        { p: "Kandidaatinformatie die door VOIDS wordt gedeeld, wordt vertrouwelijk behandeld en mag uitsluitend worden gebruikt voor het specifieke doel waarvoor deze is verstrekt." },
      ],
    },
    {
      heading: "Artikel 7 – Gegevensbescherming",
      blocks: [
        { p: "VOIDS verwerkt persoonsgegevens in overeenstemming met de toepasselijke wetgeving inzake gegevensbescherming, waaronder de Algemene Verordening Gegevensbescherming (AVG/GDPR)." },
        { p: "In het kader van wervingsdiensten treden zowel VOIDS als de opdrachtgever op als zelfstandige verwerkingsverantwoordelijken, tenzij uitdrukkelijk anders is overeengekomen." },
        { p: "De opdrachtgever mag kandidaatgegevens uitsluitend verwerken met het oog op de beoordeling van de kandidaat voor de betreffende functie, en mag deze gegevens niet bewaren of hergebruiken zonder rechtmatige grondslag." },
      ],
    },
    {
      heading: "Artikel 8 – Aansprakelijkheid",
      blocks: [
        { p: "VOIDS is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming in de nakoming van de overeenkomst." },
        { p: "VOIDS is nimmer aansprakelijk voor indirecte schade, waaronder in ieder geval winstderving, omzetderving, reputatieschade of gevolgschade." },
        { p: "VOIDS is niet aansprakelijk voor handelen, nalaten, functioneren of wangedrag van kandidaten die aan de opdrachtgever zijn voorgesteld." },
        { p: "De totale aansprakelijkheid van VOIDS is beperkt tot het factuurbedrag van de specifieke opdracht waaruit de vordering voortvloeit." },
      ],
    },
    {
      heading: "Artikel 9 – Overmacht",
      blocks: [
        { p: "VOIDS is niet aansprakelijk voor een tekortkoming of vertraging die het gevolg is van overmacht." },
        { p: "Onder overmacht wordt verstaan iedere omstandigheid die redelijkerwijs buiten de invloedssfeer van VOIDS ligt." },
        { p: "Indien de overmacht langer dan zestig (60) dagen voortduurt, is elke partij gerechtigd de overeenkomst te ontbinden, zonder recht op schadevergoeding." },
      ],
    },
    {
      heading: "Artikel 10 – Beëindiging",
      blocks: [
        { p: "Elke partij kan de overeenkomst schriftelijk opzeggen." },
        { p: "Bij beëindiging blijven reeds verrichte diensten en gemaakte kosten verschuldigd." },
        { p: "Bepalingen met betrekking tot aansprakelijkheid, intellectuele eigendom en vertrouwelijkheid blijven ook na beëindiging van kracht." },
      ],
    },
    {
      heading: "Artikel 11 – Non-circumventie",
      blocks: [
        { p: "De opdrachtgever zal VOIDS niet omzeilen ten aanzien van contacten, kandidaten of zakelijke relaties die door VOIDS zijn geïntroduceerd." },
        { p: "Specifieke afspraken met betrekking tot werving zijn geregeld in de separate Recruitment & Selection Terms van VOIDS." },
      ],
    },
    {
      heading: "Artikel 12 – Toepasselijk recht en geschillen",
      blocks: [
        { p: "Op alle overeenkomsten met VOIDS is uitsluitend Nederlands recht van toepassing." },
        { p: "Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar VOIDS is gevestigd." },
      ],
    },
  ],
  en: [
    {
      heading: "Article 1 – Definitions and Applicability",
      blocks: [
        {
          p: "These General Terms and Conditions apply to all offers, proposals, agreements and services provided under the name VOIDS vof (hereinafter: “VOIDS”), unless expressly agreed otherwise in writing.",
        },
        { p: "These Terms apply to all services, including but not limited to:" },
        { ul: ["Recruitment and selection", "Vacancy advertising", "Employer branding services", "Talent strategy advisory", "Consultancy and related services"] },
        {
          p: "Recruitment and selection services are additionally governed by VOIDS’ separate Recruitment & Selection Terms. In case of conflict, those terms shall prevail with respect to recruitment assignments.",
        },
        { p: "The applicability of any general terms and conditions of the client is expressly rejected." },
        { p: "In case of conflict between these Terms and a specific written agreement or proposal, the specific written agreement shall prevail." },
      ],
    },
    {
      heading: "Article 2 – Formation of the Agreement",
      blocks: [
        { p: "An agreement between VOIDS and the client is concluded once a proposal or offer issued by VOIDS is accepted in writing or electronically by the client." },
        { p: "Oral commitments are only binding after written confirmation by VOIDS." },
      ],
    },
    {
      heading: "Article 3 – Nature of Services",
      blocks: [
        { p: "VOIDS performs its services on the basis of a best-efforts obligation, unless explicitly agreed otherwise in writing." },
        { p: "VOIDS does not guarantee specific results, hiring outcomes, business performance, or commercial success." },
        { p: "The client remains fully responsible for all final decisions regarding hiring, implementation of advice, or use of deliverables." },
      ],
    },
    {
      heading: "Article 4 – Fees and Payment",
      blocks: [
        { p: "All fees are exclusive of VAT and any other applicable taxes." },
        { p: "Invoices must be paid within fourteen (14) days of the invoice date, unless otherwise agreed in writing." },
        { p: "In case of late payment, the client is automatically in default without notice and owes statutory commercial interest, as well as reasonable collection costs." },
        { p: "The client is not entitled to suspend payment or set off any amounts." },
        { p: "Additional work or services not included in the original agreement may be invoiced separately." },
      ],
    },
    {
      heading: "Article 5 – Intellectual Property",
      blocks: [
        {
          p: "All intellectual property rights relating to materials, strategies, concepts, frameworks, documentation, vacancy content, employer branding materials, advisory reports, or other deliverables developed by VOIDS remain the exclusive property of VOIDS, unless explicitly agreed otherwise in writing.",
        },
        { p: "The client is granted a non-transferable, non-exclusive right to use deliverables solely for the purpose and scope agreed upon." },
        { p: "Reproduction, modification, distribution, or use outside the agreed scope is not permitted without prior written consent of VOIDS." },
      ],
    },
    {
      heading: "Article 6 – Confidentiality",
      blocks: [
        { p: "Both parties shall treat all confidential information received in the context of the agreement as strictly confidential." },
        { p: "Candidate information shared by VOIDS shall be treated as confidential and may only be used for the specific purpose for which it was provided." },
      ],
    },
    {
      heading: "Article 7 – Data Protection",
      blocks: [
        { p: "VOIDS processes personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR)." },
        { p: "In the context of recruitment services, both VOIDS and the client act as independent data controllers unless explicitly agreed otherwise." },
        { p: "The client may only process candidate data for the purpose of evaluating the candidate for the relevant position and may not retain or reuse such data without lawful basis." },
      ],
    },
    {
      heading: "Article 8 – Liability",
      blocks: [
        { p: "VOIDS is only liable for direct damages that are the direct result of an attributable failure in the performance of the agreement." },
        { p: "VOIDS shall never be liable for indirect damages, including but not limited to loss of profit, loss of revenue, reputational damage, or consequential damages." },
        { p: "VOIDS is not liable for the acts, omissions, performance, or misconduct of candidates introduced to the client." },
        { p: "The total liability of VOIDS is limited to the amount invoiced for the specific assignment giving rise to the claim." },
      ],
    },
    {
      heading: "Article 9 – Force Majeure",
      blocks: [
        { p: "VOIDS shall not be liable for any failure or delay resulting from force majeure." },
        { p: "Force majeure includes any circumstance beyond the reasonable control of VOIDS." },
        { p: "In the event force majeure continues for more than sixty (60) days, either party may terminate the agreement without entitlement to compensation." },
      ],
    },
    {
      heading: "Article 10 – Termination",
      blocks: [
        { p: "Either party may terminate the agreement in writing." },
        { p: "Upon termination, services already performed and costs incurred remain payable." },
        { p: "Provisions relating to liability, intellectual property and confidentiality shall survive termination." },
      ],
    },
    {
      heading: "Article 11 – Non-Circumvention",
      blocks: [
        { p: "The client shall not circumvent VOIDS in relation to contacts, candidates, or business relations introduced by VOIDS." },
        { p: "Recruitment-specific arrangements are governed by VOIDS’ separate Recruitment & Selection Terms." },
      ],
    },
    {
      heading: "Article 12 – Governing Law and Disputes",
      blocks: [
        { p: "All agreements with VOIDS are governed exclusively by Dutch law." },
        { p: "Disputes shall be submitted to the competent court in the district where VOIDS has its registered office." },
      ],
    },
  ],
};

export function TermsPage({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  return <LegalPage eyebrow={c.eyebrow} title={c.title} intro={c.intro} sections={SECTIONS[lang]} footnote={c.footnote} />;
}
