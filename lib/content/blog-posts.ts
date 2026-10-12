import type { Lang } from "@/lib/i18n/common";

export type BlogAud = "bedrijf" | "talent" | "beide";

/** One content block: a subheading, a paragraph, or a bullet list. Rendered in order. */
export type BlogBlock = { h2?: string; p?: string; ul?: string[] };

export type BlogPost = {
  /** Shared across nl/en routes: /blog/{slug} and /en/blog/{slug}. */
  slug: string;
  aud: BlogAud;
  photo: string;
  tag: Record<Lang, string>;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  read: Record<Lang, string>;
  body: Record<Lang, BlogBlock[]>;
  /** True when the post states legal, labour-law, tax or benefits specifics — shows a "not legal advice" notice. */
  legalTopic?: boolean;
  /** ISO date (YYYY-MM-DD). Falls back to the launch date when absent. */
  published?: string;
  /** ISO date of the last substantive review. Shown as "Bijgewerkt" and used as dateModified. */
  updated?: string;
  /**
   * Numbered sources. In body text cite with "[1]", "[2]" … (rendered as superscript links to the list).
   * Prefer primary sources (law text, government, CBS, DUO, Belastingdienst, UWV, SER, peer-reviewed research).
   */
  sources?: BlogSource[];
  /** SEO overrides. metaTitle ≤ 60 chars, metaDescription ≤ 155 chars. */
  metaTitle?: Record<Lang, string>;
  metaDescription?: Record<Lang, string>;
  keywords?: Record<Lang, string[]>;
  /** Shows a transparency note: VOIDS has a commercial interest in this topic. */
  commercialInterest?: boolean;
};

/** One cited source. `accessed` is the date the claim was last verified against it. */
export type BlogSource = {
  /** Title of the document/page. */
  title: string;
  /** Publisher or author, e.g. "Rijksoverheid", "CBS", "Belastingdienst". */
  publisher: string;
  url: string;
  /** Publication year/date of the source if known (free text, e.g. "2025"). */
  year?: string;
  /** ISO date the source was checked. */
  accessed: string;
};

export const BLOG_POSTS: BlogPost[] = [
  // 1 ---------------------------------------------------------------------
  {
    slug: "wat-is-een-werkstudent",
    aud: "beide",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-4.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Wat is een werkstudent, en wat mag je verwachten?",
      en: "What is a working student, and what can you expect?",
    },
    excerpt: {
      nl: "Geen stagiair, geen bijbaantje: de werkstudent zit daartussenin, met een gewoon contract en gewone rechten. Wat dat betekent voor werk, salaris en uren.",
      en: "Not an intern, not a side job: the working student sits in between, with a real contract and real rights. What that means for the work, the pay and the hours.",
    },
    read: { nl: "4 min", en: "4 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Wat is een werkstudent? Contract, uren en salaris",
      en: "What is a working student? Contract, hours and pay",
    },
    metaDescription: {
      nl: "Wat is een werkstudent, welk contract hoort erbij en wat betekent dat voor minimumloon, uren en studie? Uitleg met bronnen, stand oktober 2026.",
      en: "What is a working student, which contract applies and what does that mean for minimum wage, hours and studies? Explained with sources, October 2026.",
    },
    keywords: {
      nl: [
        "wat is een werkstudent",
        "werkstudent contract",
        "werkstudent minimumloon",
        "werkstudent uren per week",
        "werkstudent of stagiair",
      ],
      en: [
        "what is a working student",
        "working student contract",
        "working student minimum wage",
        "working student hours per week",
        "working student or intern",
      ],
    },
    sources: [
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Ik heb een nulurencontract. Heb ik recht op vakantiedagen en vakantiegeld? (vakantie-uren: 4 keer de uren per week, vakantiegeld minimaal 8%)",
        publisher: "Rijksoverheid",
        url: "https://rijksoverheid.nl/onderwerpen/vakantiedagen-en-vakantiegeld/vraag-en-antwoord/nulurencontract-en-vakantiedagen-en-vakantiegeld",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 667, geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel667/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668 (aanzegplicht), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Heb ik recht op het minimumloon als ik stage loop?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vraag-en-antwoord/minimumloon-stage",
        accessed: "2026-10-11",
      },
      {
        title: "Kabinet wil stagevergoeding verplichten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/03/kabinet-wil-stagevergoeding-verplichten",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Stage-informatie voor stagiairs (stagevergoeding bij het Rijk)",
        publisher: "P-Direkt (Rijksoverheid)",
        url: "https://www.p-direkt.nl/informatie-rijkspersoneel-2020/mijn-werk/loopbaan-en-ontwikkeling/specifieke-doelgroepen/stage-informatie-voor-stagiairs",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een werkstudent heeft naast de studie een betaalde baan die past bij wat hij of zij later wil doen. Met een echte arbeidsovereenkomst, minder uren, meer ruimte rond tentamens en verder dezelfde rechten als ieder ander in het team. Het is geen vage tussenvorm en geen trucje om op loonkosten te besparen.",
        },
        {
          h2: "Wat staat er in een werkstudentcontract?",
          p: "In het Nederlandse arbeidsrecht bestaat “werkstudent” niet als aparte contractvorm. Je bent werknemer als er sprake is van werk onder gezag van de werkgever, loon en persoonlijke uitvoering [1]. In de praktijk gaat het meestal om een contract voor bepaalde tijd met een vast aantal uren per week. Daar horen minimaal het wettelijk minimumloon [2] en vakantiebijslag en vakantie-uren bij: minstens 8% vakantiegeld en per jaar vier keer het aantal uren dat je per week werkt [3]. Een tijdelijk contract eindigt op de afgesproken einddatum; tussentijds opzeggen kan alleen als dat schriftelijk is afgesproken [4]. Bij verlengen gelden de ketenregeling en de aanzegplicht [5][6]. Wat een werkstudentschap onderscheidt van een gewone parttime baan? De afspraak over ruimte rond tentamens en projectweken. Leg die vast op papier, dan hoef je er later niet over te onderhandelen.",
        },
        {
          h2: "Heeft een werkstudent recht op het minimumloon?",
          p: "Ja, net als ieder ander. Per 1 juli 2026 is dat € 14,99 bruto per uur vanaf 21 jaar; voor 15 tot en met 20 jaar gelden lagere minimumjeugdlonen per leeftijd [2]. Dat je nog studeert verandert niets aan wat een werkgever verplicht is te betalen. De bedragen veranderen per 1 januari en 1 juli, dus kijk altijd even in de actuele tabel.",
        },
        {
          h2: "Werkstudent, stagiair of bijbaan: wat is het verschil?",
          p: "Alle drie zijn “iets doen naast je studie”, maar het doel verschilt:",
          ul: [
            "Bijbaan: vooral geld verdienen, het werk hoeft niets met je studie te maken te hebben. Werkende ho-studenten werkten in het derde kwartaal van 2023 het vaakst als verkoopmedewerker in de detailhandel, in de horeca of als vakkenvuller [7].",
            "Stage: vooral leren, met leerdoelen en begeleiding. Een stagiair heeft geen recht op het minimumloon en een stagevergoeding is wettelijk niet verplicht [8]. Het kabinet wil dat wel veranderen [9].",
            "Werkstudentschap: een betaalde rol met een arbeidsovereenkomst, inhoudelijk relevant en een vast onderdeel van het team.",
          ],
        },
        {
          h2: "Hoeveel uur werkt een werkstudent per week?",
          p: "Daar bestaat geen wettelijke norm voor. Bij VOIDS werken werkstudenten doorgaans 4 tot 24 uur per week en starters 40 uur. Ter vergelijking: werkende ho-studenten (15 tot 27 jaar) hadden in het derde kwartaal van 2023 gemiddeld een gebruikelijke arbeidsduur van 18,7 uur per week [7]. In 2024 werkte bijna twee derde van de werkende onderwijsvolgende jongeren van 15 tot 27 jaar tot 20 uur per week en werkte 14% voltijds [10]. Hoe meer uren, hoe meer de rol op een fulltime functie gaat lijken, en dan hoort het salaris mee te bewegen.",
        },
        {
          h2: "Wat mag je verwachten als werkstudent?",
          ul: [
            "Werk waar je iets van leert, niet alleen administratie die niemand anders wil doen",
            "Een vast aanspreekpunt en begeleiding, ook als je maar twee dagen per week werkt",
            "Roosterruimte rond tentamens en projectweken, vooraf afgesproken en niet ad hoc geregeld",
            "Een salaris dat past bij het werk dat je doet, niet bij het feit dat je nog studeert",
            "Meer verantwoordelijkheid naarmate je langer meedraait",
          ],
        },
        {
          h2: "Wat levert een werkstudent een bedrijf op?",
          p: "Flexibele junior capaciteit voor werk dat structureel terugkomt maar geen volledige baan vult, en de kans om iemand te leren kennen voordat er een vast aanbod ligt. Voor een jong bedrijf is dat een kleinere stap dan meteen een fulltime starter aannemen. Voor een bedrijf dat verder is, is het een manier om een groep mensen op te bouwen die de organisatie al kent als ze afstuderen. De argumenten, grenzen en regels staan in ons artikel over waarom werken met werkstudenten.",
        },
        {
          h2: "Is een werkstudent een manier om op loonkosten te besparen?",
          p: "Nee. Een werkstudent kost minder dan een fulltime starter omdat er minder uren worden gewerkt, niet omdat het uurtarief lager zou horen te zijn. Betaal wat een vergelijkbare junior collega verdient, herrekend naar uren. Het wettelijk minimumloon is de ondergrens [2], geen richtlijn.",
        },
        {
          h2: "Waarom dit ons vertrekpunt is",
          p: "Bij VOIDS geven we zelf de voorkeur aan werkstudenten boven stagiairs. Je krijgt een echt salaris in plaats van een vergoeding, en een rol die lang genoeg duurt om er iets aan over te houden. Plaatsen we toch een stagiair, dan hanteren we minimaal het bedrag dat de Rijksoverheid zelf aan haar stagiairs betaalt: € 800 per maand bij een fulltime stage, sinds 1 januari 2026 [11]. Een wettelijk minimum bestaat nog niet [9]. Werk dat ertoe doet, verdient een salaris dat ertoe doet, ongeacht wat er op iemands cv staat.",
        },
      ],
      en: [
        {
          p: "A working student has a paid job alongside their studies that connects to what they want to do later. A real employment contract, fewer hours, more room around exams, and otherwise the same rights as anyone else on the team. It's not a vague in-between status, and it's not a trick to save on payroll.",
        },
        {
          h2: "What's in a working-student contract?",
          p: "In Dutch employment law, “working student” is not a separate type of contract. You're an employee when there's work under the employer's authority, pay, and personal performance of the work [1]. In practice that usually means a fixed-term contract with a set number of hours a week. It comes with at least the statutory minimum wage [2] and holiday pay and holiday hours: at least 8% holiday allowance and, per year, four times the hours you work in a week [3]. A fixed-term contract ends on the agreed end date; early termination is only possible if that was agreed in writing [4]. Extending it brings in the chain rule and the notice obligation [5][6]. What sets a working-student role apart from an ordinary part-time job? The agreement about room around exams and project weeks. Put it on paper and you won't have to negotiate it later.",
        },
        {
          h2: "Does a working student get the minimum wage?",
          p: "Yes, just like everyone else. As of 1 July 2026 that's € 14.99 gross per hour from age 21; ages 15 to 20 have lower youth minimum wages by age [2]. Still being enrolled changes nothing about what an employer has to pay. The amounts change on 1 January and 1 July, so check the current table.",
        },
        {
          h2: "Working student, intern or side job: what's the difference?",
          p: "All three mean “doing something alongside your studies”, but the purpose differs:",
          ul: [
            "Side job: mainly about earning money, the work doesn't need to relate to your studies. In the third quarter of 2023, working higher-education students most often worked as sales assistants in retail, in hospitality or as shelf stockers [7].",
            "Internship: mainly about learning, with learning goals and guidance. An intern has no right to the minimum wage and an internship allowance is not mandatory by law [8]. The government wants to change that [9].",
            "Working-student role: a paid position with an employment contract, relevant to your field and a permanent part of the team.",
          ],
        },
        {
          h2: "How many hours does a working student work a week?",
          p: "There's no legal norm. At VOIDS, working students typically work 4 to 24 hours a week and starters 40. For comparison: working higher-education students (aged 15 to 27) had an average usual working time of 18.7 hours a week in the third quarter of 2023 [7]. In 2024, almost two thirds of working young people in education aged 15 to 27 worked up to 20 hours a week and 14% worked full-time [10]. The more hours, the more the role starts to look like a full-time job, and then the pay should move with it.",
        },
        {
          h2: "What can you expect as a working student?",
          ul: [
            "Work that teaches you something, not just admin nobody else wants",
            "A clear point of contact and guidance, even if you're only in two days a week",
            "Schedule room around exams and project weeks, agreed in advance and not sorted out on the fly",
            "A salary that fits the work you do, not the fact that you're still studying",
            "More responsibility the longer you stay",
          ],
        },
        {
          h2: "What does a company get from a working student?",
          p: "Flexible junior capacity for work that recurs but doesn't fill a full job, and the chance to get to know someone before a permanent offer is on the table. For an early-stage company that's a smaller step than hiring a full-time starter right away. For a company further along, it's a way to build a group of people who already know the organisation when they graduate. The arguments, limits and rules are in our article on why work with working students.",
        },
        {
          h2: "Is a working student a way to save on payroll?",
          p: "No. A working student costs less than a full-time starter because they work fewer hours, not because the hourly rate should be lower. Pay what a comparable junior colleague earns, converted to hours. The statutory minimum wage is the floor [2], not a guideline.",
        },
        {
          h2: "Why this is our starting point",
          p: "At VOIDS we prefer working students over interns. You get a real salary instead of an allowance, and a role that lasts long enough to leave something behind. When we do place an intern, we hold to at least what the Dutch central government pays its own interns: € 800 a month for a full-time internship, since 1 January 2026 [11]. There is no statutory minimum yet [9]. Work that matters deserves pay that matters, whatever it says on someone's CV.",
        },
      ],
    },
  },
  // 2 ---------------------------------------------------------------------
  {
    slug: "werkstudent-stagiair-of-starter",
    aud: "bedrijf",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-6.jpg",
    tag: { nl: "Vergelijking", en: "Comparison" },
    title: {
      nl: "Werkstudent, stagiair of starter: wat past bij jouw bedrijf?",
      en: "Working student, intern or starter: what fits your company?",
    },
    excerpt: {
      nl: "Drie manieren om junior capaciteit binnen te halen, met heel verschillende risico's. Een praktisch afwegingskader, en hoe je er doorheen groeit.",
      en: "Three ways to bring in junior capacity, with very different risk profiles. A practical way to choose, and how to grow from one to the next.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudent, stagiair of starter: wat past bij jou?",
      en: "Working student, intern or starter: what fits?",
    },
    metaDescription: {
      nl: "Werkstudent, stagiair of starter? Wanneer kies je wat, wat betekent het voor kosten en risico en wat zeggen de regels? Afwegingskader met bronnen.",
      en: "Working student, intern or starter? When to choose which, what it means for cost and risk and what the rules say. A decision framework with sources.",
    },
    keywords: {
      nl: [
        "werkstudent of stagiair",
        "werkstudent of starter",
        "junior capaciteit inhuren",
        "stagiair structureel werk",
        "werkstudent kosten en risico",
      ],
      en: [
        "working student or intern",
        "working student or starter",
        "hiring junior capacity",
        "intern structural work",
        "working student cost and risk",
      ],
    },
    sources: [
      {
        title: "Heb ik recht op het minimumloon als ik stage loop?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vraag-en-antwoord/minimumloon-stage",
        accessed: "2026-10-11",
      },
      {
        title: "Checklist werken met een stagiair of stagiaire",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/een-stagiair-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Kabinet wil stagevergoeding verplichten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/03/kabinet-wil-stagevergoeding-verplichten",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Voor bedrijven: werkstudenten, cases en werkwijze",
        publisher: "VOIDS",
        url: "https://voids.agency/companies",
        accessed: "2026-10-11",
      },
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Wanneer eindigt mijn arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/wanneer-wordt-mijn-arbeidsovereenkomst-beeindigd",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "“We hebben iemand junior nodig” is geen volledige zin. Junior kan een stagiair zijn, een werkstudent of een starter met een vast contract vanaf dag één. Ieder lost een ander probleem op, en de verkeerde keuze kost je meer tijd dan ze oplevert.",
        },
        {
          h2: "Wanneer kies je voor een stagiair?",
          p: "Een stage is bedoeld om te leren, niet om structureel werk te dragen: de Rijksoverheid schrijft dat een stagiair geen gewone werknemer mag vervangen [1]. Kies dit voor een afgebakend project met een duidelijk begin en einde, zoals een marktonderzoek of een los te bouwen tool, en alleen als je tijd hebt om iemand serieus te begeleiden. Ondernemersplein noemt begeleiding, werk dat aansluit op de opleiding en afspraken in een stageovereenkomst als plichten van het stagebedrijf [2]. Een stagevergoeding is wettelijk niet verplicht, tenzij een cao dat bepaalt [2]. Het kabinet wil dat veranderen [3].",
        },
        {
          h2: "Wanneer kies je voor een werkstudent?",
          p: "Voor werk dat structureel terugkomt, te groot voor een stagiair en te klein voor een fulltime rol. Denk aan het beheren van een deelmarkt, een terugkerend deel van finance of contentproductie die elke week doorgaat. Een werkstudent heeft een arbeidsovereenkomst en dus recht op minstens het minimumloon [1]. Bij VOIDS werken werkstudenten doorgaans 4 tot 24 uur per week; de cases op onze website beschrijven een looptijd van zes maanden tot meer dan een jaar [4]. Werkende ho-studenten werkten in 2023 gemiddeld 18,7 uur per week [5].",
        },
        {
          h2: "Wanneer kies je voor een starter?",
          p: "Een starter is klaar met studeren en beschikbaar voor fulltime, structureel werk (bij VOIDS 40 uur). Dat past bij een rol die te groot is geworden voor parttime inzet, of als je iemand zoekt die meteen mede-eigenaar wordt van een resultaat. Het is ook de grootste stap: een fulltime contract, een hoger salaris en minder ruimte om het “gewoon even te proberen”.",
        },
        {
          h2: "Wat is het verschil in kosten en risico?",
          p: "Bij een stagiair is een vergoeding wettelijk niet verplicht [2], maar begeleiding kost tijd en het werk mag dat van een gewone werknemer niet vervangen [1]. Een werkstudent zit ertussenin: regulier salaris over minder uren, met een contract voor bepaalde tijd binnen de ketenregeling [6]. Een starter is meestal de grootste investering. Een contract voor onbepaalde tijd zeg je als werkgever niet zomaar op; bij bedrijfseconomische redenen of langdurige arbeidsongeschiktheid is bijvoorbeeld toestemming van het UWV nodig [7]. Hoe groter en structureler het werk, hoe eerder een starter past.",
        },
        {
          h2: "Een simpel afwegingskader",
          ul: [
            "Is het werk tijdelijk en afgebakend, met een leerdoel? Stagiair.",
            "Is het werk structureel en past het binnen 4 tot 24 uur per week? Werkstudent.",
            "Is het werk fulltime en te groot voor parttime inzet? Starter.",
            "Wil je iemand eerst leren kennen voordat je een vast aanbod doet? Werkstudent, met uitzicht op een starterscontract.",
          ],
        },
        {
          h2: "Kun je iemand laten doorgroeien van stagiair naar werkstudent naar starter?",
          p: "Ja, en het is een logische route. Een stage laat op kleine schaal zien of iemand past, een werkstudentschap laat zien of diegene ook structureel verantwoordelijkheid aankan, en een starterscontract is dan een stap met iemand die de organisatie al kent. Dat scheelt werving en inwerktijd. Let wel op de ketenregeling: na meer dan drie tijdelijke contracten, of als de contracten samen (tussenpozen van ten hoogste zes maanden inbegrepen) meer dan 36 maanden beslaan, geldt het laatste contract als contract voor onbepaalde tijd [6]. Klanten in de cases op onze website beschrijven doorstroom naar een vaste rol, bijvoorbeeld bij HotelPlanner [4].",
        },
        {
          h2: "In de praktijk lopen deze door elkaar",
          p: "Bij Mila Health draaiden drie werkstudenten Marketing ieder hun eigen markt (Nederland, Zweden, Duitsland) tijdens de internationale uitbreiding: te groot voor een stage, nog niet rijp voor drie fulltime starters. Bij Joulz namen werkstudenten Order-to-Cash en Purchase-to-Pay voor hun rekening, werk dat elke maand terugkomt. Bij Hubby gingen twee werkstudenten als founder's associate zelfs verder dan de gemiddelde werkstudentrol en dachten ze mee op strategisch niveau. Het patroon is steeds hetzelfde: kijk naar de aard van het werk, niet naar het laagste bedrag op papier.",
        },
      ],
      en: [
        {
          p: "“We need someone junior” isn't a complete sentence. Junior can be an intern, a working student or a starter on a permanent contract from day one. Each solves a different problem, and the wrong choice costs more time than it saves.",
        },
        {
          h2: "When should you choose an intern?",
          p: "An internship exists to teach, not to carry structural work: the Dutch government says an intern may not replace a regular employee [1]. Choose it for a bounded project with a clear start and end, like market research or a standalone tool, and only if you have time to guide someone properly. The government's business portal lists guidance, work that fits the study programme and agreements in an internship contract as the host company's duties [2]. An internship allowance is not mandatory by law unless a collective agreement says so [2]. The government wants to change that [3].",
        },
        {
          h2: "When should you choose a working student?",
          p: "For work that recurs structurally, too big for an intern and too small for a full-time role. Think of running a sub-market, a recurring part of finance or content production that goes on every week. A working student has an employment contract and so a right to at least the minimum wage [1]. At VOIDS, working students typically work 4 to 24 hours a week; the cases on our website describe a duration of six months to more than a year [4]. Working higher-education students averaged 18.7 hours a week in 2023 [5].",
        },
        {
          h2: "When should you choose a starter?",
          p: "A starter has finished studying and is available for full-time, structural work (at VOIDS, 40 hours). That fits a role that has outgrown part-time capacity, or when you want someone to own an outcome from day one. It's also the biggest step: a full-time contract, a higher salary and less room to “just try it out”.",
        },
        {
          h2: "What's the difference in cost and risk?",
          p: "For an intern an allowance is not mandatory by law [2], but guidance takes time and the work may not replace that of a regular employee [1]. A working student sits in the middle: regular pay over fewer hours, on a fixed-term contract within the chain rule [6]. A starter is usually the biggest investment. As an employer you can't simply terminate a permanent contract; for business-economic reasons or long-term incapacity for work, for example, UWV permission is needed [7]. The bigger and more structural the work, the sooner a starter fits.",
        },
        {
          h2: "A simple way to choose",
          ul: [
            "Is the work temporary and bounded, with a learning goal? Intern.",
            "Is the work structural and does it fit in 4 to 24 hours a week? Working student.",
            "Is the work full-time and too big for part-time capacity? Starter.",
            "Do you want to get to know someone before making a permanent offer? Working student, with a path to a starter contract.",
          ],
        },
        {
          h2: "Can someone grow from intern to working student to starter?",
          p: "Yes, and it's a logical route. An internship shows on a small scale whether someone fits, a working-student role shows whether they can also carry structural responsibility, and a starter contract is then a step with someone who already knows the organisation. That saves hiring and ramp-up time. Mind the chain rule, though: after more than three fixed-term contracts, or if the contracts together (gaps of at most six months included) cover more than 36 months, the last contract counts as permanent [6]. Clients in the cases on our website describe a move into a permanent role, for example at HotelPlanner [4].",
        },
        {
          h2: "In practice, these overlap",
          p: "At Mila Health, three working students in Marketing each owned their own market (the Netherlands, Sweden, Germany) during the international expansion: too big for an internship, not yet ripe for three full-time starters. At Joulz, working students took on order-to-cash and purchase-to-pay, work that comes back every month. At Hubby, two working students went further than the average working-student role: as founder's associates they thought along at a strategic level. The pattern is always the same: look at the nature of the work, not at the lowest number on paper.",
        },
      ],
    },
  },
  // 3 ---------------------------------------------------------------------
  {
    slug: "junior-instroom-die-blijft-plakken",
    aud: "bedrijf",
    commercialInterest: true,
    photo: "/photography/mariselle-11.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Zo bouw je een junior-instroom die blijft plakken",
      en: "How to build a junior pipeline that sticks",
    },
    excerpt: {
      nl: "Junior talent aannemen is makkelijk. Zorgen dat ze na zes maanden nog steeds zin hebben, is het echte werk. Vijf bouwstenen voor een instroom die blijft.",
      en: "Hiring junior talent is the easy part. Making sure they still want to be there after six months is the real work. Five building blocks for a pipeline that sticks.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Junior talent vasthouden: bouwstenen voor werkgevers",
      en: "Retaining junior talent: building blocks for employers",
    },
    metaDescription: {
      nl: "Junior talent aannemen is het makkelijke deel. Vijf bouwstenen om werkstudenten en starters te laten blijven en groeien, met CBS-cijfers.",
      en: "Hiring junior talent is the easy part. Five building blocks to keep working students and starters engaged and growing, with CBS data.",
    },
    keywords: {
      nl: [
        "junior talent vasthouden",
        "werkstudent behouden",
        "onboarding junior",
        "retentie junior medewerkers",
        "werkstudent eigenaarschap",
      ],
      en: [
        "retain junior talent",
        "keep working students",
        "junior onboarding",
        "junior employee retention",
        "working student ownership",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 667, geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel667/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Birds of a Feather: Homophily in Social Networks (McPherson, Smith-Lovin & Cook), Annual Review of Sociology 27, 415-444",
        publisher: "Annual Review of Sociology",
        url: "https://doi.org/10.1146/annurev.soc.27.1.415",
        year: "2001",
        accessed: "2026-10-11",
      },
      {
        title: "Community & jobboard",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/community-jobboard",
        accessed: "2026-10-11",
      },
      {
        title: "Voor bedrijven: werkstudenten, cases en werkwijze",
        publisher: "VOIDS",
        url: "https://voids.agency/companies",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Moet je elke zes maanden opnieuw op zoek naar “iemand junior”? Dan ligt het vaak niet aan de werving, maar aan wat er na de eerste werkdag gebeurt. Instroom regelen is één ding. Zorgen dat iemand blijft, groeit en zich eigenaar voelt van het werk, is een andere opgave.",
        },
        {
          h2: "Heb je een wervingsprobleem of een vasthoudprobleem?",
          p: "Herken je meerdere van deze signalen, dan zit het probleem niet in je vacaturetekst maar in wat daarna komt:",
          ul: [
            "Junior medewerkers vertrekken structureel binnen drie tot zes maanden",
            "Vertrekkers kunnen niet zeggen wat ze hier had gehouden, omdat niemand het ze vraagt",
            "Elke vertrekkende junior neemt kennis mee die nergens is vastgelegd",
            "Onboarding verschilt per persoon omdat er geen vast plan is",
          ],
        },
        {
          h2: "Geef eigenaarschap, niet losse taken",
          p: "Wie alleen losse taakjes krijgt, voelt zich tijdelijk personeel, ook met een contract voor een jaar. Geef daarom een afgebakend stuk van het bedrijf waar iemand echt over gaat: een markt, een klantsegment, een proces. Bij Hubby, een VOIDS-klant, draaiden werkstudenten mee als founder's associate: strategisch meedenken in plaats van uitvoeren op de zijlijn. Zo'n rol vraagt iets anders van iemand dan een takenlijst.",
        },
        {
          h2: "Investeer in de eerste maand, niet in de vacaturetekst",
          p: "Besteed niet weken aan de vacaturetekst en een middag aan onboarding. Draai dat om. Geef iemand in de eerste maand een duidelijk aanspreekpunt, realistische doelen en snelle feedback. Plan een wekelijks kwartiertje waarin je vraagt of de uren, het werk en de studiebalans nog kloppen: dat kost weinig en haalt een klein ongemak weg voordat het een opzegging wordt. Werknemers die zelf opzeggen moeten zich overigens aan de opzegtermijn houden, en bij een tijdelijk contract kan dat alleen als tussentijds opzeggen is afgesproken [1].",
        },
        {
          h2: "Betaal alsof het structureel werk is, want dat is het",
          p: "Een eerlijk uurtarief is geen extraatje maar de basis. Het wettelijk minimumloon is een ondergrens [2], geen richtlijn. Volgens de CBS Jeugdmonitor noemen jonge werknemers (15 tot 27 jaar) goede leidinggevenden, een goed salaris en werkzekerheid als de belangrijkste arbeidsvoorwaarden; bijna alle jonge werknemers vinden die drie (heel) belangrijk [3].",
        },
        {
          h2: "Bouw een tweede en derde rol voordat de eerste vertrekt",
          p: "Een instroom die blijft, komt niet uit één goede hire maar uit een doorlopende structuur. Is een werkstudent klaar om door te groeien, dan staat de volgende rol al klaar en idealiter ook al een nieuwe werkstudent die instroomt. Zo loopt kennis niet met één vertrek de deur uit, en heeft iemand die twee jaar expertise heeft opgebouwd een reden om te blijven in plaats van elders een starterscontract te zoeken.",
        },
        {
          h2: "Zoek breder dan je eigen netwerk",
          p: "Onderzoek laat zien dat persoonlijke netwerken homogeen zijn: mensen hebben vaker contact met mensen die op hen lijken, ook qua leeftijd, opleiding en achtergrond [4]. Wie alleen via via werft, spreekt dus vooral mensen die lijken op wie er al werkt. VOIDS heeft een eigen WhatsApp-community van 4.000+ studenten en starters [5]: zoveel mensen zitten er in de community, niet in de talentpool.",
        },
        {
          h2: "Hoe lang blijft een werkstudent, en hoe plan je dat?",
          p: "In de cases op de VOIDS-website lopen werkstudentrollen van zes maanden tot meer dan een jaar [6]. Plan een rol daarom met een inwerkperiode, een groeipad en vooraf een gesprek over wat er na het afstuderen gebeurt. Houd bij herhaald verlengen rekening met de ketenregeling [7].",
        },
      ],
      en: [
        {
          p: "Do you have to go looking for “someone junior” every six months? Then the cause is often not the hiring but what happens after day one. Bringing people in is one thing. Making sure they stay, grow and feel ownership of the work is another task.",
        },
        {
          h2: "Do you have a hiring problem or a retention problem?",
          p: "If you recognise several of these signals, the problem isn't your job ad but what comes after it:",
          ul: [
            "Junior hires consistently leave within three to six months",
            "Leavers can't say what would have kept them, because nobody asks",
            "Every departing junior takes knowledge that was never written down",
            "Onboarding looks different for each person because there's no fixed plan",
          ],
        },
        {
          h2: "Give ownership, not loose tasks",
          p: "If all you get is loose tasks, you feel like temporary staff, even on a one-year contract. So hand over a bounded piece of the company someone genuinely owns: a market, a customer segment, a process. At Hubby, a VOIDS client, working students worked as founder's associates: thinking along strategically instead of executing from the sidelines. A role like that asks something different of a person than a task list does.",
        },
        {
          h2: "Invest in the first month, not the job ad",
          p: "Don't spend weeks on the job ad and an afternoon on onboarding. Flip it. In the first month, give someone a clear point of contact, realistic goals and fast feedback. Plan a weekly fifteen-minute check-in on whether the hours, the work and the study balance still work: it costs little and takes out a small annoyance before it becomes a resignation. Note that employees who resign must observe the notice period, and in a fixed-term contract that's only possible if early termination was agreed [1].",
        },
        {
          h2: "Pay like it's structural work, because it is",
          p: "A fair hourly rate isn't a nice extra but the foundation. The statutory minimum wage is a floor [2], not a guideline. According to the CBS Youth Monitor, young employees (aged 15 to 27) name good managers, a good salary and job security as the most important working conditions; almost all young employees find those three (very) important [3].",
        },
        {
          h2: "Build the second and third role before the first one leaves",
          p: "A pipeline that sticks doesn't come from one good hire but from an ongoing structure. When a working student is ready to grow, the next role is already lined up and, ideally, a new working student is already coming in. That way knowledge doesn't walk out the door with one departure, and someone who has spent two years building expertise has a reason to stay instead of looking for a starter contract elsewhere.",
        },
        {
          h2: "Look beyond your own network",
          p: "Research shows personal networks are homogeneous: people have more contact with people who resemble them, including in age, education and background [4]. If you hire only through connections, you mostly meet people who look like those already on the team. VOIDS has its own WhatsApp community of 4,000+ students and starters [5]: that's the size of the community, not of the talent pool.",
        },
        {
          h2: "How long does a working student stay, and how do you plan for it?",
          p: "In the cases on the VOIDS website, working-student roles run from six months to more than a year [6]. So plan a role with a ramp-up period, a growth path and an early conversation about what happens after graduation. Keep the chain rule in mind when extending repeatedly [7].",
        },
      ],
    },
  },
  // 4 ---------------------------------------------------------------------
  {
    slug: "eerlijk-uurtarief-werkstudent",
    aud: "bedrijf",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-10.jpg",
    tag: { nl: "Fair pay", en: "Fair pay" },
    title: {
      nl: "Wat is een eerlijk uurtarief voor een werkstudent?",
      en: "What is a fair hourly rate for a working student?",
    },
    excerpt: {
      nl: "“Het is toch maar een student” is geen argument voor een laag uurtarief. Zo kom je wél tot een eerlijk bedrag, en wat onderbetalen je uiteindelijk kost.",
      en: "“They're just a student” is not an argument for a low hourly rate. How to land on a fair number, and what underpaying ends up costing you.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Eerlijk uurtarief werkstudent: zo bepaal je het",
      en: "Fair hourly rate for a working student: how to set it",
    },
    metaDescription: {
      nl: "Wat is een eerlijk uurtarief voor een werkstudent? Minimumloon per 1 juli 2026 als ondergrens, daarna het werk als maatstaf. Met bronnen.",
      en: "What is a fair hourly rate for a working student? The minimum wage as of 1 July 2026 as a floor, then the work as the yardstick. With sources.",
    },
    keywords: {
      nl: [
        "eerlijk uurtarief werkstudent",
        "werkstudent salaris",
        "minimumloon werkstudent",
        "uurtarief junior",
        "onderbetaling werkstudent",
      ],
      en: [
        "fair hourly rate working student",
        "working student salary",
        "minimum wage working student",
        "junior hourly rate",
        "underpaying working student",
      ],
    },
    sources: [
      {
        title: "Heb ik recht op het minimumloon als ik stage loop?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vraag-en-antwoord/minimumloon-stage",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Richtlijn (EU) 2023/970 ter versterking van het beginsel van gelijke beloning (artikel 5)",
        publisher: "EUR-Lex (Europese Unie)",
        url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32023L0970",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Meer openheid over loonkloof tussen mannen en vrouwen",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/05/21/meer-openheid-over-loonkloof-tussen-mannen-en-vrouwen",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Impact: onze missie en ambitie",
        publisher: "VOIDS",
        url: "https://voids.agency/impact",
        accessed: "2026-10-11",
      },
      {
        title: "Stage-informatie voor stagiairs (stagevergoeding bij het Rijk)",
        publisher: "P-Direkt (Rijksoverheid)",
        url: "https://www.p-direkt.nl/informatie-rijkspersoneel-2020/mijn-werk/loopbaan-en-ontwikkeling/specifieke-doelgroepen/stage-informatie-voor-stagiairs",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Kabinet wil stagevergoeding verplichten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/03/kabinet-wil-stagevergoeding-verplichten",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "De meestgehoorde reden om een werkstudent onder de marktwaarde te betalen: het is “toch maar” een student. Maar een werkstudent is geen stagiair die vooral komt leren. Het is iemand met een gewone arbeidsovereenkomst die gewoon werk doet, en dus recht heeft op minstens het wettelijk minimumloon [1]. Wat een eerlijk tarief daarboven is, is een afweging. Zo maak je die.",
        },
        {
          h2: "Wat is een eerlijk uurtarief voor een werkstudent?",
          p: "Een eerlijk uurtarief ligt op of boven wat een vergelijkbare junior collega met een fulltime contract verdient, herrekend naar uren. Het wettelijk minimumloon is de absolute ondergrens, geen streefwaarde. Doet een werkstudent hetzelfde werk als iemand anders in het team, dan hoort daar ongeveer hetzelfde uurtarief bij, of diegene nu 16 uur werkt of 40.",
        },
        {
          h2: "Begin bij het wettelijk minimumloon, niet erbij vandaan",
          p: "Het minimumuurloon is een ondergrens: per 1 juli 2026 € 14,99 bruto per uur vanaf 21 jaar, met lagere bedragen per leeftijd voor 15 tot en met 20 jaar [2]. Een tarief dat net boven het minimum blijft hangen omdat het “toch een werkstudent” is, is geen eerlijk tarief maar het wettelijk minimum met een ander label.",
        },
        {
          h2: "Kijk naar het werk, niet naar de titel op het cv",
          p: "Een werkstudent die zelfstandig een deel van een markt beheert, klantcontact voert of meedraait in finance, doet ander werk dan iemand die data invoert. Laat het tarief het niveau van verantwoordelijkheid volgen, niet de leeftijd of studiefase. De Europese loontransparantierichtlijn gaat ook uit van beloning op basis van objectieve, genderneutrale criteria [3]. Het Nederlandse wetsvoorstel daarvoor is op 21 mei 2026 ingediend en nog niet aangenomen [4].",
        },
        {
          h2: "Vergelijk met wat vergelijkbare rollen betalen",
          p: "Kijk naar vacatures voor vergelijkbare rollen in je sector en regio, en naar wat een junior collega met een vergelijkbaar takenpakket verdient. Zit je structureel onder het bedrag dat anderen bieden, dan weet je ook meteen waarom het zoeken en houden van mensen lastig is.",
        },
        {
          h2: "Moet het tarief meestijgen als de uren richting fulltime groeien?",
          p: "Ja. Gaat een werkstudentrol qua uren en verantwoordelijkheid op een fulltime functie lijken, dan beweegt het tarief mee, niet pas als er een officieel starterscontract wordt getekend. Een werkstudent die structureel 30 uur draait en het grootste deel van een proces zelfstandig runt, verdient een tarief dat bij die rol past, niet bij het label “werkstudent” op papier.",
        },
        {
          h2: "Reken door wat onderbetalen je kan kosten",
          p: "Een te laag tarief bespaart een paar euro per uur. Reken dan eens door wat het kost als iemand na vier maanden vertrekt: opnieuw werven, opnieuw inwerken, kennis die verdwijnt. Betalen onder het minimumloon is bovendien geen keuze [2].",
        },
        {
          h2: "Waarom VOIDS hier scherp op is",
          p: "Toegang tot relevante werkervaring hoort niet af te hangen van wie het zich kan veroorloven om voor weinig te werken [5]. Daarom geven we bij VOIDS de voorkeur aan werkstudentschappen boven stages. Plaatsen we toch een stage, dan is het minimum dat wij aanhouden het bedrag dat de Rijksoverheid zelf aan haar stagiairs betaalt: € 800 per maand bij een fulltime stage, sinds 1 januari 2026 [6]. Een wettelijk minimum bestaat nog niet [7].",
        },
      ],
      en: [
        {
          p: "The most common reason to pay a working student below market value: they're “just” a student. But a working student isn't an intern who comes mainly to learn. It's someone with a regular employment contract doing regular work, and so with a right to at least the statutory minimum wage [1]. What counts as fair above that is a judgement call. Here's how to make it.",
        },
        {
          h2: "What is a fair hourly rate for a working student?",
          p: "A fair hourly rate sits at or above what a comparable junior colleague on a full-time contract earns, converted to hours. The statutory minimum wage is the absolute floor, not a target. If a working student does the same work as someone else on the team, the hourly rate should be about the same, whether they work 16 hours a week or 40.",
        },
        {
          h2: "Start from the statutory minimum wage, not away from it",
          p: "The minimum hourly wage is a floor: as of 1 July 2026 € 14.99 gross per hour from age 21, with lower amounts by age for 15 to 20 [2]. A rate that hovers just above the minimum because “it's just a working student” isn't a fair rate but the legal minimum with a different label.",
        },
        {
          h2: "Look at the work, not the title on the CV",
          p: "A working student who independently runs part of a market, handles client contact or works in finance does different work than someone entering data. Let the rate follow the level of responsibility, not the person's age or study stage. The EU pay transparency directive also assumes pay based on objective, gender-neutral criteria [3]. The Dutch bill for it was submitted on 21 May 2026 and has not yet been adopted [4].",
        },
        {
          h2: "Compare with what similar roles pay",
          p: "Look at vacancies for comparable roles in your sector and region, and at what a junior colleague with a comparable workload earns. If you structurally sit below what others offer, you already know why finding and keeping people is hard.",
        },
        {
          h2: "Should the rate go up as hours grow toward full-time?",
          p: "Yes. When a working-student role starts to resemble a full-time position in hours and responsibility, the rate moves with it, not only when an official starter contract is signed. A working student who structurally works 30 hours and independently runs most of a process deserves a rate that fits that role, not the “working student” label on paper.",
        },
        {
          h2: "Work out what underpaying could cost you",
          p: "A rate that's too low saves a few euros an hour. Now work out what it costs when someone leaves after four months: recruiting again, onboarding again, knowledge walking out the door. And paying below the minimum wage isn't an option anyway [2].",
        },
        {
          h2: "Why VOIDS is strict about this",
          p: "Access to relevant work experience shouldn't depend on who can afford to work for little [5]. That's why we prefer working-student roles over internships. When we do place an internship, our minimum is what the Dutch central government itself pays its interns: € 800 a month for a full-time internship, since 1 January 2026 [6]. There is no statutory minimum yet [7].",
        },
      ],
    },
  },
  // 5 ---------------------------------------------------------------------
  {
    slug: "matchprofiel-dat-opvalt",
    aud: "talent",
    commercialInterest: true,
    photo: "/photography/mariselle-11.jpg",
    tag: { nl: "Carrière", en: "Career" },
    title: {
      nl: "Zo schrijf je een matchprofiel dat opvalt",
      en: "How to write a match profile that stands out",
    },
    excerpt: {
      nl: "Niet nog een motivatiebrief vol “ik ben leergierig en communicatief sterk”. Hoe je in een paar scherpe alinea's laat zien wie je echt bent.",
      en: "Not another cover letter full of “eager to learn and a strong communicator”. How to show who you really are in a few sharp paragraphs.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Zo schrijf je een matchprofiel dat opvalt",
      en: "How to write a match profile that stands out",
    },
    metaDescription: {
      nl: "Geen standaard motivatiebrief, maar een profiel dat laat zien wie je bent en hoe je werkt. Praktische tips voor een matchprofiel dat opvalt.",
      en: "Not a standard cover letter, but a profile that shows who you are and how you work. Practical tips for a match profile that stands out.",
    },
    keywords: {
      nl: [
        "matchprofiel schrijven",
        "motivatiebrief alternatief",
        "sollicitatie als student",
        "profiel talentpool",
        "specifiek solliciteren",
      ],
      en: [
        "write a match profile",
        "cover letter alternative",
        "applying as a student",
        "talent pool profile",
        "specific application",
      ],
    },
    sources: [
      {
        title: "Werving & selectie (incl. cases)",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/recruitment-selection",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Leergierig. Communicatief sterk. Werkt goed in teamverband. Het staat in bijna elk profiel, en het onderscheidt niemand, want het past op iedere kandidaat voor iedere rol. Een matchprofiel dat opvalt doet het tegenovergestelde: het is zo specifiek dat het alleen op jou past. Dat lukt met een paar concrete keuzes in plaats van meer bijvoeglijke naamwoorden.",
        },
        {
          h2: "Wat is een matchprofiel, en wat is het verschil met een motivatiebrief?",
          p: "Een motivatiebrief legt meestal uit waarom je een bedrijf goed vindt. Een matchprofiel legt uit wie je bent en hoe je werkt, zodat een recruiter of hiring manager kan beoordelen of dat past bij een rol, ook een rol die jij zelf nog niet kende. Je beantwoordt dus een andere vraag: niet “waarom wil ik hier werken”, maar “wat voor iemand ben ik, en in wat voor werk kom ik het best tot mijn recht”.",
        },
        {
          h2: "Begin bij waarom, niet bij wat",
          p: "Som niet op wat je allemaal gedaan hebt, maar leg uit waaróm je het deed. Koos je voor die studentenvereniging omdat je van organiseren houdt, of omdat je energie krijgt van mensen bij elkaar brengen? Dat “waarom” zegt iets over wat je zou willen doen in een rol die nog niet op je cv staat.",
        },
        {
          h2: "Gebruik concrete situaties, geen bijvoeglijke naamwoorden",
          p: "“Ik ben proactief” overtuigt niemand. “Toen de planning vastliep, heb ik zelf drie leveranciers gebeld en een alternatief geregeld voordat iemand het me vroeg” wel. Kies twee of drie momenten uit je studie, bijbaan of vereniging die laten zien hoe je werkt. Eén sterk voorbeeld met een begin, een keuze en een uitkomst zegt meer dan een alinea aan kwalificaties.",
        },
        {
          h2: "Wees specifiek over wat je zoekt, niet alleen over wat je kan",
          p: "Een profiel dat alleen over vaardigheden gaat, vertelt een bedrijf niet of de rol bij je past. Benoem dus ook waar je naartoe wilt: het type werk, het soort team, het tempo waarin je wilt groeien. Een goede match werkt twee kanten op. Een bedrijf dat weet wat jij zoekt, kan eerlijker beoordelen of het past, in plaats van je een rol aan te bieden die op papier klopt en in de praktijk niet.",
        },
        {
          h2: "Hoe lang moet een matchprofiel zijn?",
          p: "Kort genoeg om in één keer door te lezen, lang genoeg om specifiek te zijn. Meestal een paar korte alinea's, geen compleet cv in lopende tekst. Kies liever drie scherpe punten over jezelf dan tien vage.",
        },
        {
          h2: "Drie signalen dat je profiel te generiek is",
          ul: [
            "Je kunt dezelfde tekst naar drie totaal verschillende vacatures sturen zonder iets aan te passen",
            "Je gebruikt woorden als “leergierig” of “gedreven” zonder voorbeeld dat het aantoont",
            "Een vriend die je goed kent, herkent je niet in de tekst",
          ],
        },
        {
          h2: "Karakter wint het van kruisjes op een lijst",
          p: "VOIDS kijkt bij een match naar drijfveren, werkstijl en cultuur, niet alleen naar een lijst met vaardigheden [1]. Een matchprofiel dat je karakter, drijfveren en manier van werken laat zien, sluit daar precies bij aan. Schrijf het vandaag nog: begin met één echte situatie en één zin over wat je zoekt.",
        },
      ],
      en: [
        {
          p: "Eager to learn. A strong communicator. Works well in a team. It's in almost every profile, and it sets nobody apart, because it fits every candidate for every role. A match profile that stands out does the opposite: it's so specific that it only fits you. That comes from a few concrete choices, not from more adjectives.",
        },
        {
          h2: "What is a match profile, and how is it different from a cover letter?",
          p: "A cover letter usually explains why you like a company. A match profile explains who you are and how you work, so a recruiter or hiring manager can judge whether that fits a role, including one you didn't know existed. You're answering a different question: not “why do I want to work here”, but “what kind of person am I, and in what kind of work do I do best”.",
        },
        {
          h2: "Start with why, not what",
          p: "Don't list everything you've done; explain why you did it. Did you join that student association because you love organising, or because bringing people together gives you energy? That “why” says something about what you'd want to do in a role that isn't on your CV yet.",
        },
        {
          h2: "Use concrete moments, not adjectives",
          p: "“I'm proactive” convinces no one. “When the planning fell apart, I called three suppliers myself and arranged an alternative before anyone asked” does. Pick two or three moments from your studies, side job or association that show how you work. One strong example with a beginning, a choice and an outcome says more than a paragraph of qualifications.",
        },
        {
          h2: "Be specific about what you want, not just what you can do",
          p: "A profile that only covers skills doesn't tell a company whether the role fits you. So say where you're heading too: the type of work, the kind of team, the pace you want to grow at. A good match works both ways. A company that knows what you're after can judge the fit more honestly, instead of offering you a role that checks out on paper and not in practice.",
        },
        {
          h2: "How long should a match profile be?",
          p: "Short enough to read in one go, long enough to be specific. Usually a few short paragraphs, not a full CV written out as prose. Pick three sharp points about yourself over ten vague ones.",
        },
        {
          h2: "Three signs your profile is too generic",
          ul: [
            "You could send the same text to three completely different vacancies without changing a word",
            "You use words like “driven” or “eager to learn” without an example that proves it",
            "A friend who knows you well wouldn't recognise you in the text",
          ],
        },
        {
          h2: "Character beats checkboxes",
          p: "For a match, VOIDS looks at motivation, working style and culture, not just a list of skills [1]. A match profile that shows your character, motivations and way of working fits that approach exactly. Write it today: start with one real situation and one sentence about what you're looking for.",
        },
      ],
    },
  },
  // 6 ---------------------------------------------------------------------
  {
    slug: "betaald-werken-naast-je-studie",
    aud: "talent",
    commercialInterest: true,
    photo: "/photography/mariselle-10.jpg",
    tag: { nl: "Studie & werk", en: "Study & work" },
    title: {
      nl: "Betaald werken naast je studie: wat levert het op?",
      en: "Paid work alongside your studies: what does it bring?",
    },
    excerpt: {
      nl: "Meer dan geld op je rekening: wat relevant, betaald werk tijdens je studie voor je doet, en waarom dat niet voor iedereen even bereikbaar is.",
      en: "More than money in your account: what relevant, paid work during your studies does for you, and why it isn't equally within reach for everyone.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Betaald werken naast je studie: wat levert het op?",
      en: "Paid work alongside your studies: what does it bring?",
    },
    metaDescription: {
      nl: "Wat levert betaald, relevant werk naast je studie op, hoeveel uur werken studenten gemiddeld en voor wie is het bereikbaar? Met CBS- en SEO-onderzoek.",
      en: "What does paid, relevant work alongside your studies bring, how many hours do students work on average and who can access it? With CBS and SEO research.",
    },
    keywords: {
      nl: [
        "betaald werken naast studie",
        "bijbaan of relevante ervaring",
        "studenten werken uren per week",
        "werkstudent",
        "relevante werkervaring student",
      ],
      en: [
        "paid work alongside studies",
        "side job or relevant experience",
        "student working hours per week",
        "working student",
        "relevant work experience student",
      ],
    },
    sources: [
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2020",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2020/werk/",
        year: "2020",
        accessed: "2026-10-11",
      },
      {
        title: "Studie & Werk HO: de arbeidsmarktpositie van hbo- en wo-alumni (Bussink, Van der Ven & Klinker, in opdracht van EW Magazine)",
        publisher: "SEO Economisch Onderzoek",
        url: "https://www.seo.nl/wp-content/uploads/2023/07/2023-74-Studie-Werk-HO.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Bijverdienen",
        publisher: "DUO",
        url: "https://duo.nl/particulier/studiefinanciering/bijverdienen.jsp",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Stijgende lijn stagevergoedingen voor studenten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2025/03/12/stijgende-lijn-stagevergoedingen-voor-studenten",
        year: "2025",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Werken naast je studie doen veel studenten: in 2019 had 62% van de onderwijsvolgende jongeren van 15 tot 27 jaar betaald werk [1]. Maar niet elk werk levert hetzelfde op. Een bijbaan die niets met je opleiding te maken heeft, betaalt je huur. Betaald werk dat wél aansluit, levert naast salaris ook richting, ervaring en een sterker cv op.",
        },
        {
          h2: "Wat is het verschil tussen een bijbaan en relevante werkervaring?",
          p: "Een bijbaan betaalt de rekeningen met werk dat weinig met je studie te maken hoeft te hebben. Relevante werkervaring doet dat ook, maar bouwt daarnaast aan kennis, een netwerk en een cv die je vooruit helpen in het vakgebied waar je naartoe wilt. Het verschil zit dus niet in wat het betaalt, maar in wat het je oplevert voor na je studie.",
        },
        {
          h2: "Je ontdekt wat werk echt inhoudt",
          p: "Het snelst merk je of een sector bij je past door erin te werken. Een paar maanden meedraaien in marketing, finance of operations laat zien hoe de dagelijkse praktijk eruitziet. Je ontdekt ook waar je minder energie van krijgt, en dat is minstens zo bruikbaar als weten wat wel bij je past.",
        },
        {
          h2: "Wat zegt onderzoek over relevante ervaring en je cv?",
          p: "SEO Economisch Onderzoek (in opdracht van EW Magazine, 2023) vergeleek hbo- en wo-afgestudeerden. Wie tijdens de studie een bijbaan had, vond gemiddeld sneller een eerste substantiële baan. Een bijbaan in een relevante sector hing samen met een kortere zoektijd dan een bijbaan in een niet-relevante sector (in het onderzoek: horeca, detailhandel, evenementen, post en koeriersdiensten, landbouw en uitzendwerk). Ook het startsalaris lag gemiddeld hoger bij een relevante bijbaan [2].",
        },
        {
          h2: "Moet je kiezen tussen goed betaald werk en relevante ervaring?",
          p: "Nee. Relevante ervaring hoeft niet onbetaald of onderbetaald te zijn, en een werkstudent heeft in elk geval recht op minstens het minimumloon [3]. Bij VOIDS gaat het om betaalde werkstudentrollen van doorgaans 4 tot 24 uur per week.",
        },
        {
          h2: "Je leert plannen onder echte druk",
          p: "Werk combineren met tentamens en deadlines dwingt je om te plannen. Je leert het niet uit een boek: je leert het door een week te hebben waarin alles tegelijk valt, en daar doorheen te komen.",
        },
        {
          h2: "Hoeveel uur kun je naast je studie werken?",
          p: "Daar bestaat geen vaste norm voor. Wat studenten doen: werkende ho-studenten hadden in 2023 gemiddeld een gebruikelijke arbeidsduur van 18,7 uur per week [4], en in 2024 werkte bijna twee derde van de werkende onderwijsvolgende jongeren tot 20 uur per week [5]. Voor studiefinanciering geldt sinds 2020 geen bijverdiengrens meer [6]. Wat haalbaar is, verschilt per studie en per periode. Kies een baan die rekening houdt met tentamens en projectweken, en spreek dat vooraf af.",
        },
        {
          h2: "Waarom is dit niet voor iedereen even makkelijk?",
          p: "Niet elke student heeft dezelfde toegang tot relevante, betaalde werkervaring. Een stagevergoeding is wettelijk niet verplicht: in maart 2024 kreeg 42% van de mbo-studenten een stagevergoeding, naar schatting 75% van de hbo-studenten, en in het wo 65% van de studenten met een verplichte stage [7]. Wie een financieel vangnet heeft, kan het zich eerder permitteren om weinig of niets te verdienen. Daarom richt VOIDS zich op betaalde, relevante rollen.",
        },
      ],
      en: [
        {
          p: "Plenty of students work alongside their studies: in 2019, 62% of young people in education aged 15 to 27 had paid work [1]. But not all work brings the same thing. A side job unrelated to your degree pays your rent. Paid work that does connect to your field brings direction, experience and a stronger CV on top of a salary.",
        },
        {
          h2: "What's the difference between a side job and relevant work experience?",
          p: "A side job pays the bills with work that needn't have much to do with your studies. Relevant work experience does that too, but also builds knowledge, a network and a CV that move you forward in the field you're aiming for. So the difference isn't what it pays, but what it gives you for after your studies.",
        },
        {
          h2: "You find out what work actually looks like",
          p: "The fastest way to find out whether a sector suits you is to work in it. A few months inside marketing, finance or operations shows you what the daily reality looks like. You also find out what drains your energy, and that's at least as useful as knowing what fits.",
        },
        {
          h2: "What does research say about relevant experience and your CV?",
          p: "SEO Economic Research (commissioned by EW Magazine, 2023) compared graduates of universities of applied sciences and research universities. Those with a side job during their studies found a first substantial job faster on average. A side job in a relevant sector was associated with a shorter search than one in a non-relevant sector (in the study: hospitality, retail, events, postal and courier services, agriculture and temp work). The starting salary was also higher on average with a relevant side job [2].",
        },
        {
          h2: "Do you have to choose between good pay and relevant experience?",
          p: "No. Relevant experience doesn't have to be unpaid or underpaid, and a working student is in any case entitled to at least the minimum wage [3]. At VOIDS these are paid working-student roles of typically 4 to 24 hours a week.",
        },
        {
          h2: "You learn to plan under real pressure",
          p: "Combining work with exams and deadlines forces you to plan. You don't learn it from a book: you learn it by having a week where everything lands at once, and getting through it.",
        },
        {
          h2: "How many hours can you work alongside your studies?",
          p: "There's no fixed norm. What students actually do: working higher-education students averaged 18.7 usual working hours a week in 2023 [4], and in 2024 almost two thirds of working young people in education worked up to 20 hours a week [5]. Since 2020 there is no earnings limit for student finance [6]. What's feasible differs per degree and per period. Choose a job that takes exams and project weeks into account, and agree that in advance.",
        },
        {
          h2: "Why isn't this equally easy for everyone?",
          p: "Not every student has the same access to relevant, paid work experience. An internship allowance is not mandatory by law: in March 2024, 42% of secondary vocational students received one, an estimated 75% of students at universities of applied sciences and, in research universities, 65% of students with a compulsory internship [7]. Someone with a financial safety net can more easily afford to earn little or nothing. That's why VOIDS focuses on paid, relevant roles.",
        },
      ],
    },
  },
  // 7 ---------------------------------------------------------------------
  {
    slug: "van-studie-naar-eerste-baan",
    aud: "talent",
    commercialInterest: true,
    photo: "/photography/mariselle-9.jpg",
    tag: { nl: "Eerste stap", en: "First step" },
    title: {
      nl: "Van studie naar eerste baan in 5 stappen",
      en: "From study to first job in 5 steps",
    },
    excerpt: {
      nl: "De overstap van collegebank naar je eerste echte baan voelt groot. Vijf concrete stappen, in de volgorde waarin je ze het best zet.",
      en: "The jump from lecture hall to your first real job feels huge. Five concrete steps, in the order that works best.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Van studie naar eerste baan in 5 stappen",
      en: "From study to first job in 5 steps",
    },
    metaDescription: {
      nl: "Vijf stappen van studie naar eerste baan, met CBS- en SEO-onderzoek over de zoektijd van afgestudeerden en de rol van een relevante bijbaan.",
      en: "Five concrete steps from study to first job, with CBS and SEO research on how long graduates search and what a relevant side job has to do with it.",
    },
    keywords: {
      nl: [
        "van studie naar eerste baan",
        "eerste baan vinden na afstuderen",
        "werkervaring tijdens studie",
        "solliciteren als starter",
        "netwerk opbouwen student",
      ],
      en: [
        "from study to first job",
        "finding a first job after graduating",
        "work experience during studies",
        "applying as a starter",
        "building a network student",
      ],
    },
    sources: [
      {
        title: "Studie & Werk HO: de arbeidsmarktpositie van hbo- en wo-alumni (Bussink, Van der Ven & Klinker, in opdracht van EW Magazine)",
        publisher: "SEO Economisch Onderzoek",
        url: "https://www.seo.nl/wp-content/uploads/2023/07/2023-74-Studie-Werk-HO.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Voor bedrijven: werkstudenten, cases en werkwijze",
        publisher: "VOIDS",
        url: "https://voids.agency/companies",
        accessed: "2026-10-11",
      },
      {
        title: "Talent: community, jobboard en talentpool",
        publisher: "VOIDS",
        url: "https://voids.agency/talent",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "De overstap van studeren naar werken voelt vaak als een sprong in het diepe, zeker als je nog niet weet wat je wilt. Dat hoeft niet. Deel de overstap op in stukken, begin op tijd, liefst al tijdens je studie in plaats van in de laatste maand. Vijf stappen, in de volgorde waarin ze het meeste opleveren.",
        },
        {
          h2: "1. Zoek eerst uit wat je drijft, niet welke titel je wilt",
          p: "“Marketeer worden” is geen doel, het is een label. Kijk liever naar wat voor werk je energie geeft: mensen overtuigen, cijfers doorgronden, dingen bouwen, structuur aanbrengen in chaos. Die drijfveer past bij meer functies dan je denkt, en voorkomt dat je jezelf vastzet op één titel die misschien niet bij je past. Twee studenten met dezelfde graad komen vaak bij heel verschillende functies uit, juist omdat ze van een ander soort werk energie krijgen.",
        },
        {
          h2: "2. Doe relevante ervaring op vóór je afstudeert",
          p: "Wachten tot na je diploma om te ontdekken wat werk inhoudt, is een dure manier om erachter te komen dat een sector niet bij je past. Een werkstudentschap tijdens je studie geeft je die informatie eerder. Uit onderzoek van SEO Economisch Onderzoek blijkt dat afgestudeerden met een bijbaan, en vooral met een relevante bijbaan, gemiddeld sneller een eerste substantiële baan vonden [1]. En het kan doorstromen: klanten in de cases op onze website beschrijven dat een werkstudent doorgroeide naar een vaste rol, bijvoorbeeld bij HotelPlanner en The Longevity Store [2].",
        },
        {
          h2: "3. Bouw een netwerk voordat je het nodig hebt",
          p: "Een netwerk opbouwen op het moment dat je een baan nodig hebt, is laat. Praat tijdens je studie al met mensen die het werk doen waar jij nieuwsgierig naar bent, sluit je aan bij een community van andere studenten en starters, en vraag hoe hun werk er in de praktijk uitziet. Het hoeft geen formeel netwerkevent te zijn. VOIDS heeft een WhatsApp-community van 4.000+ studenten en starters waarin wekelijks vacatures worden gedeeld [3].",
        },
        {
          h2: "4. Schrijf sollicitaties die specifiek zijn, niet compleet",
          p: "Eén generieke motivatiebrief die je naar twintig vacatures stuurt, valt niet op. Een korte, specifieke reactie die laat zien dat je de rol en het bedrijf snapt, overtuigt meer dan een lange, algemene brief. Noem concreet waarom deze rol bij dit bedrijf, in plaats van een tekst die met een paar woorden aangepast naar elke andere vacature had gekund.",
        },
        {
          h2: "5. Laat je matchen op wie je bent, niet alleen op je cv",
          p: "De beste eerste baan is niet per se die met de hoogste titel of het bekendste bedrijf, maar die waarin je karakter en drijfveren passen bij het team en het werk. Een goede match kijkt daarom verder dan een cv: naar wat je drijft, hoe je werkt en waar je naartoe wilt groeien.",
        },
        {
          h2: "Hoe lang duurt het om je eerste relevante baan te vinden?",
          p: "Volgens SEO Economisch Onderzoek was de duur tot een substantiële baan voor hbo- en wo-afgestudeerden van het cohort 2020-2021 gedaald tot circa drie maanden; dat cohort profiteerde volgens de onderzoekers vooral van de krapte op de arbeidsmarkt [1]. Dat is een gemiddelde over alle opleidingen, geen voorspelling voor jou. Een werkstudentrol kan leiden tot een aanbod binnen hetzelfde bedrijf, maar niet vanzelf: spreek tijdig af hoe het daarna verder gaat. Begin dus niet na het diploma, maar nu.",
        },
      ],
      en: [
        {
          p: "The move from studying to working often feels like a leap into the deep end, especially when you don't know what you want yet. It doesn't have to. Break the move into pieces and start early, ideally during your studies rather than in the last month. Five steps, in the order that pays off most.",
        },
        {
          h2: "1. Figure out what drives you before what title you want",
          p: "“Becoming a marketer” isn't a goal, it's a label. Look instead at what kind of work gives you energy: convincing people, digging into numbers, building things, bringing structure to chaos. That drive fits more roles than you'd think, and stops you from locking yourself into one title that might not suit you. Two students with the same degree often end up in completely different roles, precisely because they draw energy from different kinds of work.",
        },
        {
          h2: "2. Get relevant experience before you graduate",
          p: "Waiting until after your degree to find out what work feels like is an expensive way to discover a sector isn't for you. A working-student role during your studies gives you that information sooner. Research by SEO Economic Research shows graduates with a side job, and especially a relevant one, found a first substantial job faster on average [1]. And it can lead somewhere: clients in the cases on our website describe a working student growing into a permanent role, for example at HotelPlanner and The Longevity Store [2].",
        },
        {
          h2: "3. Build a network before you need one",
          p: "Building a network the moment you need a job is late. While you're still studying, talk to people who do the work you're curious about, join a community of other students and starters, and ask what their work actually looks like. It doesn't have to be a formal networking event. VOIDS has a WhatsApp community of 4,000+ students and starters in which vacancies are shared weekly [3].",
        },
        {
          h2: "4. Write applications that are specific, not complete",
          p: "One generic cover letter sent to twenty vacancies doesn't stand out. A short, specific response that shows you understand the role and the company convinces more than a long, general letter. Say concretely why this role at this company, instead of a text that could have gone to any other vacancy with a few words swapped.",
        },
        {
          h2: "5. Get matched on who you are, not just your CV",
          p: "The best first job isn't necessarily the one with the biggest title or the best-known company, but the one where your character and drive fit the team and the work. A good match therefore looks beyond a CV: at what drives you, how you work and where you want to grow.",
        },
        {
          h2: "How long does it take to find your first relevant job?",
          p: "According to SEO Economic Research, the time to a substantial job for graduates of universities of applied sciences and research universities in the 2020-2021 cohort had fallen to about three months; the researchers say that cohort benefited mainly from the tight labour market [1]. That's an average across all degrees, not a prediction for you. A working-student role can lead to an offer at the same company, but not automatically: agree early on what happens afterwards. So don't start after the diploma. Start now.",
        },
      ],
    },
  },
  // 8 ---------------------------------------------------------------------
  {
    slug: "gen-z-matcht-op-karakter",
    aud: "beide",
    commercialInterest: true,
    photo: "/photography/mariselle-7.jpg",
    tag: { nl: "Gen Z", en: "Gen Z" },
    title: {
      nl: "Gen Z en karakter: waar letten jonge kandidaten op?",
      en: "Gen Z and character: what do young candidates look at?",
    },
    excerpt: {
      nl: "Een functietitel zegt weinig over de dagelijkse praktijk. Wat CBS-cijfers laten zien over wat jonge werknemers belangrijk vinden, en hoe VOIDS daarmee omgaat.",
      en: "A job title says little about daily reality. What CBS figures show about what young employees find important, and how VOIDS deals with it.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Gen Z en karakter: waar letten jonge kandidaten op?",
      en: "Gen Z and character: what do young candidates want?",
    },
    metaDescription: {
      nl: "Wat vinden jonge werknemers belangrijk in een baan? CBS-cijfers over salaris, leidinggevenden en werktijden, en hoe VOIDS matcht op karakter en werkstijl.",
      en: "What do young employees find important in a job? CBS figures on pay, managers and working hours, and why VOIDS matches on character and working style.",
    },
    keywords: {
      nl: [
        "Gen Z werk",
        "jonge werknemers arbeidsvoorwaarden",
        "matchen op karakter",
        "functietitel",
        "werkstijl solliciteren",
      ],
      en: [
        "Gen Z work",
        "young employees working conditions",
        "matching on character",
        "job title",
        "working style application",
      ],
    },
    sources: [
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Werving & selectie (incl. cases)",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/recruitment-selection",
        accessed: "2026-10-11",
      },
      {
        title: "Stijgende lijn stagevergoedingen voor studenten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2025/03/12/stijgende-lijn-stagevergoedingen-voor-studenten",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Afgestudeerden in het hoger onderwijs (inleiding verwijst naar SER-advies 2021)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/longread/rapportages/2024/afgestudeerden-in-het-hoger-onderwijs?onepage=true",
        year: "2024",
        accessed: "2026-10-11",
      },
      {
        title: "Studie & Werk HO: de arbeidsmarktpositie van hbo- en wo-alumni (Bussink, Van der Ven & Klinker, in opdracht van EW Magazine)",
        publisher: "SEO Economisch Onderzoek",
        url: "https://www.seo.nl/wp-content/uploads/2023/07/2023-74-Studie-Werk-HO.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "“Gen Z” is een etiket voor een grote en diverse groep, dus kijken we liever naar cijfers. Wat vonden jonge werknemers (15 tot 27 jaar) in 2024 belangrijk aan een baan? Bovenaan stonden goede leidinggevenden, een goed salaris en werkzekerheid; bijna alle jonge werknemers vonden die drie (heel) belangrijk [1]. Onderwijsvolgenden vonden het vaker dan anderen belangrijk dat ze zelf hun werktijden kunnen bepalen (84% tegenover 74%) en in deeltijd kunnen werken (81% tegenover 68%). Een vast contract vonden zij minder vaak belangrijk (75% tegenover 91%) [1].",
        },
        {
          h2: "Waarom vertellen functietitels zo weinig?",
          p: "“Marketing medewerker” kan bij het ene bedrijf content maken betekenen en bij het andere vooral spreadsheets bijhouden. Kandidaten willen daarom vooral weten hoe een team werkt, wat de eerste maand inhoudt en wie waarvoor verantwoordelijk is. Zet dat in je vacature, naast de titel.",
        },
        {
          h2: "Wat zegt een cv niet?",
          p: "Een cv laat zien wat iemand heeft gedaan, maar niet hoe iemand werkt onder druk, met onduidelijkheid of in een klein team. Daarom weegt VOIDS drijfveren en werkstijl mee naast ervaring en opleiding [2].",
        },
        {
          h2: "Dit werkt twee kanten op",
          p: "Matchen op karakter betekent niet alleen dat bedrijven verder kijken dan een cv, maar ook dat kandidaten kritischer kijken naar bedrijven. Past de cultuur? Is er ruimte om te groeien? Wordt er eerlijk betaald? Dat zijn terechte vragen, en een goed bedrijf heeft er een antwoord op.",
        },
        {
          h2: "Waarom minder leunen op cv-signalen eerlijker kan zijn",
          p: "Cv-signalen zoals een bekende stage hangen samen met toegang tot kansen, en die toegang is niet gelijk verdeeld. Een stagevergoeding is bijvoorbeeld wettelijk niet verplicht: in maart 2024 kreeg 42% van de mbo-studenten een stagevergoeding, naar schatting 75% van de hbo-studenten en 65% van de wo-studenten met een verplichte stage [3]. Het CBS wijst in een rapport over afgestudeerden op een SER-advies uit 2021, waarin studenten van wie de ouders niet hebben gestudeerd, studenten met een mbo-vooropleiding, met een niet-westerse migratieachtergrond en met een functiebeperking belemmeringen ervaren in of op weg naar het hoger onderwijs [4]. Wie minder leunt op signalen die toegang veronderstellen, geeft meer kandidaten een kans.",
        },
        {
          h2: "Betekent dit dat ervaring niet meer telt?",
          p: "Nee. Uit onderzoek van SEO Economisch Onderzoek blijkt dat afgestudeerden met een bijbaan in een relevante sector gemiddeld sneller een eerste substantiële baan vonden [5]. Ervaring blijft dus relevant. Bij een junior rol, waar veel nieuw is, kijken we er alleen ook naar hoe iemand met nieuwe situaties omgaat.",
        },
      ],
      en: [
        {
          p: "“Gen Z” is a label for a large and diverse group, so we'd rather look at numbers. What did young employees (aged 15 to 27) find important in a job in 2024? At the top: good managers, a good salary and job security; almost all young employees found those three (very) important [1]. Young people in education more often than others found it important to set their own working hours (84% versus 74%) and to work part-time (81% versus 68%). They less often found a permanent contract important (75% versus 91%) [1].",
        },
        {
          h2: "Why do job titles say so little?",
          p: "“Marketing employee” can mean creating content at one company and mostly maintaining spreadsheets at another. Candidates mainly want to know how a team works, what the first month involves and who is responsible for what. Put that in your vacancy, next to the title.",
        },
        {
          h2: "What does a CV not tell you?",
          p: "A CV shows what someone has done, but not how they work under pressure, with ambiguity or in a small team. That's why VOIDS weighs motivation and working style alongside experience and education [2].",
        },
        {
          h2: "This works both ways",
          p: "Matching on character doesn't only mean companies look past a CV; it also means candidates look more critically at companies. Does the culture fit? Is there room to grow? Is the pay fair? Those are fair questions, and a good company has an answer.",
        },
        {
          h2: "Why leaning less on CV signals can be fairer",
          p: "CV signals such as a well-known internship are associated with access to opportunities, and that access is not equally distributed. An internship allowance, for example, is not mandatory by law: in March 2024, 42% of secondary vocational students received one, an estimated 75% of students at universities of applied sciences and 65% of research-university students with a compulsory internship [3]. In a report on graduates, CBS refers to a 2021 SER advice in which students whose parents did not study, students with a secondary vocational background, with a non-Western migration background and with a functional impairment experience barriers in or on the way to higher education [4]. Leaning less on signals that presuppose access gives more candidates a chance.",
        },
        {
          h2: "Does this mean experience no longer counts?",
          p: "No. Research by SEO Economic Research found that graduates with a side job in a relevant sector found a first substantial job faster on average [5]. Experience stays relevant. In a junior role, where a lot is new, we simply also look at how someone handles new situations.",
        },
      ],
    },
  },
  // 9 ---------------------------------------------------------------------
  {
    slug: "werkstudentovereenkomst-wat-moet-erin",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/mariselle-4.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "De werkstudentovereenkomst: wat moet er (juridisch) in staan?",
      en: "The working-student contract: what actually needs to be in it",
    },
    excerpt: {
      nl: "Werkstudent is geen aparte contractvorm. Wat een goede overeenkomst wél regelt, met een checklist voordat je tekent.",
      en: "“Working student” isn't a separate contract type. What a good agreement does cover, with a checklist to use before you sign.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudentovereenkomst: wat moet erin staan?",
      en: "Working-student contract: what must it contain?",
    },
    metaDescription: {
      nl: "Werkstudent is geen aparte contractvorm. Wat de wet vraagt (proeftijd, einde, minimumloon) en een checklist voor je tekent. Met bronnen.",
      en: "Working student is not a separate contract type. What the law requires (probation, ending, minimum wage) and a checklist before you sign. With sources.",
    },
    keywords: {
      nl: [
        "werkstudentovereenkomst",
        "werkstudent contract checklist",
        "arbeidsovereenkomst bepaalde tijd",
        "proeftijd tijdelijk contract",
        "contract tekenen student",
      ],
      en: [
        "working student contract",
        "working student contract checklist",
        "fixed-term employment contract",
        "probation fixed-term contract",
        "signing a contract student",
      ],
    },
    sources: [
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
      {
        title: "Werkvergunning werkstudent",
        publisher: "UWV",
        url: "https://www.uwv.nl/nl/werkvergunning/werkstudent",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Ik heb een nulurencontract. Heb ik recht op vakantiedagen en vakantiegeld? (vakantie-uren: 4 keer de uren per week, vakantiegeld minimaal 8%)",
        publisher: "Rijksoverheid",
        url: "https://rijksoverheid.nl/onderwerpen/vakantiedagen-en-vakantiegeld/vraag-en-antwoord/nulurencontract-en-vakantiedagen-en-vakantiegeld",
        accessed: "2026-10-11",
      },
      {
        title: "Welke contracten zijn er voor oproepkrachten?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/welke-contracten-zijn-er-voor-oproepkrachten",
        accessed: "2026-10-11",
      },
      {
        title: "Meer zekerheid voor mensen met een flexcontract",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/08/meer-zekerheid-voor-mensen-met-een-flexcontract",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Reiskostenvergoeding betalen aan werknemers",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/reiskostenvergoeding-betalen-aan-werknemers/",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 652 (proeftijd), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling5/Artikel652/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 667, geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel667/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668 (aanzegplicht), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Wat staat er in een werkstudentcontract? Minder bijzonders dan je denkt, en juist daarom is het belangrijk om te weten welke vragen je moet stellen voordat je tekent of laat tekenen. Hieronder wat de bronnen zeggen over de arbeidsovereenkomst en wat daarin hoort te staan.",
        },
        {
          h2: "Er bestaat geen apart “werkstudentcontract”",
          p: "Het Nederlandse arbeidsrecht kent geen aparte contractvorm “werkstudent”, zoals een stageovereenkomst dat wel is. Een werkstudent is een werknemer als aan de kenmerken van een arbeidsovereenkomst is voldaan: werk onder gezag, loon en persoonlijke uitvoering [1]. Het woord komt wel voor in andere regelingen, bijvoorbeeld in de werkvergunningregels van UWV voor studenten van buiten de EER [2]. De basisrechten zijn die van elke werknemer, zoals het minimumloon [3] en vakantie: minstens 8% vakantiegeld en per jaar vier keer het aantal uren dat je per week werkt [4]. Meestal is het contract voor bepaalde tijd en met een vast aantal uren per week.",
        },
        {
          h2: "Is een werkstudent hetzelfde als een oproepkracht?",
          p: "Nee, dat hoeft niet. Bij een nulurencontract is geen aantal uren afgesproken en betaalt de werkgever alleen loon over de uren die je werkt; die afspraak geldt volgens de Rijksoverheid alleen voor de eerste 6 maanden. De werkgever moet je minstens 4 dagen van tevoren oproepen en je hebt bij elke oproep recht op minimaal 3 uur loon [5]. Per 1 januari 2028 worden oproepcontracten vervangen door een bandbreedtecontract, met een uitzondering voor bijbanen van onder meer scholieren en studenten [6]. Voor structureel werk past een vast aantal uren per week beter: je weet waar je op kunt rekenen, met ruimte om dat rond tentamens tijdelijk aan te passen.",
        },
        {
          h2: "Uren en flexibiliteit horen er expliciet in",
          p: "Het werk gaat samen met een studie, dus juist rond het aantal uren per week en de ruimte om dat rond tentamens aan te passen ontstaat de meeste onduidelijkheid. Een goede overeenkomst noemt een vast aantal uren of een bandbreedte, en legt vast hoe roosterwijzigingen rond bijvoorbeeld tentamenweken worden afgesproken, in plaats van het te laten hangen op “we zien wel”.",
        },
        {
          h2: "Salaris en vergoedingen, zwart op wit",
          p: "Het uurtarief en hoe en wanneer het wordt uitbetaald, horen in het contract te staan, net als bij elke andere arbeidsovereenkomst. Het salaris is minimaal het wettelijk minimumloon: per 1 juli 2026 € 14,99 bruto per uur vanaf 21 jaar [3]. Een reiskostenvergoeding is wettelijk niet verplicht, tenzij een cao, het contract of een regeling dat voorschrijft [7]. Vraag er dus naar en laat het vastleggen.",
        },
        {
          h2: "Duur, proeftijd en opzegtermijn",
          p: "Een proeftijd moet schriftelijk worden afgesproken en mag bij een tijdelijk contract van langer dan zes maanden maar korter dan twee jaar maximaal een maand duren; bij een contract van ten hoogste zes maanden mag geen proeftijd worden afgesproken [8]. Een tijdelijk contract eindigt op de einddatum; tussentijds opzeggen kan alleen als dat schriftelijk is afgesproken [9]. Bij een contract van zes maanden of langer moet de werkgever uiterlijk een maand voor het einde schriftelijk laten weten of het wordt voortgezet [10]. Na meer dan drie tijdelijke contracten, of als die contracten samen (tussenpozen van ten hoogste zes maanden inbegrepen) meer dan 36 maanden beslaan, geldt het laatste contract als voor onbepaalde tijd [11].",
        },
        {
          h2: "Checklist: wat hoort er minimaal in te staan?",
          ul: [
            "Een vast aantal uren per week of een duidelijke bandbreedte",
            "Hoe roosterwijzigingen rond tentamens en projectweken worden afgesproken",
            "Het uurtarief, de uitbetalingswijze en eventuele reiskostenvergoeding",
            "De duur van het contract, de proeftijd en de opzegtermijn of het tussentijds opzegbeding",
            "Wie het aanspreekpunt is bij vragen over uren, verlof of begeleiding",
            "Gegevens die de werkgever je schriftelijk moet meedelen binnen een week en een maand na indiensttreding, zoals functie, uren, salaris, vakantietoeslag en opzegtermijn [1]",
          ],
        },
        {
          h2: "Waarom dit ertoe doet, ook als het “maar” een bijbaan is",
          p: "Een goede overeenkomst beschermt niet alleen de werkstudent, maar voorkomt ook misverstanden voor het bedrijf. Duidelijke afspraken over uren, salaris en flexibiliteit zorgen dat beide kanten weten waar ze aan toe zijn. Loop de checklist dus door vóór je tekent, en vraag wat ontbreekt.",
        },
      ],
      en: [
        {
          p: "What's in a working-student contract? Less that's special than you'd think, which is exactly why it's worth knowing the questions to ask before you sign, or have someone sign. Below: what the sources say about the employment contract and what should be in it.",
        },
        {
          h2: "There's no separate “working-student contract”",
          p: "Dutch employment law has no separate contract type “working student”, unlike an internship agreement. A working student is an employee if the features of an employment contract are met: work under authority, pay and personal performance [1]. The word does appear in other schemes, for example in UWV's work permit rules for students from outside the EEA [2]. The basic rights are those of any employee, such as the minimum wage [3] and holiday: at least 8% holiday pay and, per year, four times the hours you work in a week [4]. The contract is usually fixed-term with a set number of hours a week.",
        },
        {
          h2: "Is a working student the same as an on-call worker?",
          p: "No, it doesn't have to be. With a zero-hours contract no hours are agreed and the employer only pays for the hours you work; according to the Dutch government that arrangement only applies to the first 6 months. The employer must call you in at least 4 days in advance and you're entitled to at least 3 hours' pay per call [5]. From 1 January 2028, on-call contracts are replaced by a bandwidth contract, with an exception for side jobs of, among others, pupils and students [6]. For structural work, a fixed number of hours a week fits better: you know what to expect, with room to adjust it temporarily around exams.",
        },
        {
          h2: "Hours and flexibility should be spelled out",
          p: "The work runs alongside a study programme, so the number of hours a week and the room to adjust them around exams is exactly where most confusion arises. A good agreement states a fixed number of hours or a range, and sets out how schedule changes around exam weeks get agreed, instead of leaving it at “we'll figure it out”.",
        },
        {
          h2: "Pay and allowances, in writing",
          p: "The hourly rate and how and when it's paid belong in the contract, just like in any other employment agreement. The salary is at least the statutory minimum wage: as of 1 July 2026 € 14.99 gross per hour from age 21 [3]. A travel allowance is not mandatory by law unless a collective agreement, the contract or a policy provides for it [7]. So ask about it and have it put in writing.",
        },
        {
          h2: "Duration, probation and notice period",
          p: "A probation period must be agreed in writing and, for a fixed-term contract of longer than six months but shorter than two years, may last at most one month; for a contract of at most six months no probation period may be agreed [8]. A fixed-term contract ends on the end date; early termination is only possible if that was agreed in writing [9]. For a contract of six months or longer, the employer must tell you in writing, at the latest one month before the end, whether it will be continued [10]. After more than three fixed-term contracts, or if those contracts together (gaps of at most six months included) cover more than 36 months, the last contract counts as permanent [11].",
        },
        {
          h2: "Checklist: what should be in it at a minimum?",
          ul: [
            "A fixed number of hours a week or a clear range",
            "How schedule changes around exams and project weeks get agreed",
            "The hourly rate, payment method and any travel allowance",
            "The contract duration, the probation period and the notice period or early termination clause",
            "Who your point of contact is for questions about hours, leave or guidance",
            "Details the employer must give you in writing within one week and one month of starting, such as job, hours, salary, holiday allowance and notice period [1]",
          ],
        },
        {
          h2: "Why it matters, even for a “side job”",
          p: "A good agreement doesn't only protect the working student; it also prevents misunderstandings for the company. Clear agreements on hours, pay and flexibility mean both sides know where they stand. So go through the checklist before you sign, and ask what's missing.",
        },
      ],
    },
  },
  // 10 ---------------------------------------------------------------------
  {
    slug: "werkstudent-duitsland-vs-nederland",
    aud: "bedrijf",
    legalTopic: true,
    photo: "/photography/mariselle-2.jpg",
    tag: { nl: "Internationaal", en: "International" },
    title: {
      nl: "Werkstudenten in Duitsland vs. Nederland: wat kunnen we leren?",
      en: "Working students in Germany vs. the Netherlands: what can we learn?",
    },
    excerpt: {
      nl: "In Duitsland heeft de Werkstudent een erkende status met een eigen regeling in de sociale verzekeringen. Wat dat inhoudt en wat Nederlandse werkgevers ervan kunnen meenemen.",
      en: "In Germany the Werkstudent has a recognised status with its own social-insurance arrangement. What that involves and what Dutch employers can take from it.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudent in Duitsland en Nederland vergeleken",
      en: "Working students in Germany and the Netherlands compared",
    },
    metaDescription: {
      nl: "Wat is het Duitse Werkstudentenprivileg, hoeveel studenten werken er in Duitsland en wat kunnen Nederlandse werkgevers ervan leren? Met Duitse bronnen.",
      en: "What is the German Werkstudentenprivileg, how many students work in Germany and what can Dutch employers learn from it? With German sources.",
    },
    keywords: {
      nl: [
        "Werkstudent Duitsland",
        "Werkstudentenprivileg",
        "20 uur per week student Duitsland",
        "werkstudent Nederland vergelijking",
        "studenten werken Duitsland",
      ],
      en: [
        "Werkstudent Germany",
        "Werkstudentenprivileg",
        "20 hours a week student Germany",
        "working student Netherlands comparison",
        "students working Germany",
      ],
    },
    sources: [
      {
        title: "Lexikon: Werkstudentenprivileg",
        publisher: "Deutsche Rentenversicherung",
        url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Experten/Arbeitgeber-und-Steuerberater/summa-summarum/Lexikon/W/werkstudentenprivileg",
        accessed: "2026-10-11",
      },
      {
        title: "Ergebnisse der „Studierendenbefragung in Deutschland“ (22. Sozialerhebung), Presseinformation BMBF/DZHW/DSW",
        publisher: "DZHW",
        url: "https://www.dzhw.eu/services/material/pressemitteilungen/2023_05_24_pm_sid.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Sozialgesetzbuch (SGB) Fünftes Buch (V), § 6 Versicherungsfreiheit",
        publisher: "Gesetze im Internet (Bundesministerium der Justiz)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__6.html",
        accessed: "2026-10-11",
      },
      {
        title: "Ik werk in loondienst",
        publisher: "Belastingdienst",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/ik-werk-in-loondienst",
        accessed: "2026-10-11",
      },
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Het woord “Werkstudent” komt uit het Duits. In Duitsland is werken naast de studie gebruikelijk en heeft de Werkstudent een erkende status met een eigen regeling in de sociale verzekeringen: het Werkstudentenprivileg [1]. In de studentenenquête van het DZHW (peiljaar 2021) ging 63% van de studenten in Duitsland naast het studeren aan het werk [2]. Wat houdt die status in, en wat kun je er in Nederland mee?",
        },
        {
          h2: "Wat houdt het Werkstudentenprivileg in?",
          p: "Volgens de Duitse wet (§ 6 lid 1 nr. 3 SGB V) zijn studenten van een hogeschool of universiteit die tijdens hun studie tegen loon werken, vrijgesteld van verplichte ziektekostenverzekering [3]. Volgens de Deutsche Rentenversicherung geldt de vrijstelling in de kranken-, pflege- en arbeitslosenversicherung als tijd en arbeidskracht van de student overwegend aan de studie worden besteed; daarvan wordt uitgegaan bij een werkweek van maximaal 20 uur, ongeacht het loon [1]. Bij meer dan 20 uur geldt de vrijstelling alleen als dat komt door werk in het weekend of 's avonds en 's nachts bij een contract van maximaal 26 weken. Werk dat alleen in de semestervakantie wordt gedaan is vrijgesteld [1].",
        },
        {
          h2: "Vaste uren, duidelijke verwachtingen",
          p: "De 20-uursgrens is in Duitsland een wettelijk relevante bovengrens voor de premievrijstelling, en geen vrijblijvende gewoonte [1]. Een afspraak over uren per week is daar dus vanzelfsprekend. In Nederland werkt een duidelijk afgesproken aantal uren, met een heldere afspraak over hoe dat samengaat met de studie, ook beter dan vage “kom maar wanneer het uitkomt”-afspraken.",
        },
        {
          h2: "Is het Duitse model anders geregeld dan het Nederlandse?",
          p: "Ja. Het Duitse Werkstudentenprivileg is een regeling in de Duitse sociale verzekeringen die studenten onder voorwaarden vrijstelt van bepaalde premies [3][1]. In Nederland kennen we op belastinggebied de studenten- en scholierenregeling, waarbij een werkgever geen of minder loonheffing inhoudt [4].",
        },
        {
          h2: "Wat je als Nederlandse werkgever kunt overnemen",
          ul: [
            "Behandel de rol als structureel, met een eigen plek in het team",
            "Spreek een vast aantal uren af in plaats van losse, wisselende inzet",
            "Bouw een doorgroeipad naar een fulltime rol, in plaats van het bij één rol te laten",
            "Betaal in lijn met het niveau van het werk, niet met de status “student”",
          ],
        },
        {
          h2: "En in Nederland?",
          p: "Werkende ho-studenten (15 tot 27 jaar) hadden in het derde kwartaal van 2023 gemiddeld een gebruikelijke arbeidsduur van 18,7 uur per week [5]. Dat is bijna een halve werkweek. Richt zo'n rol dan ook in als een echte rol.",
        },
      ],
      en: [
        {
          p: "The word “Werkstudent” comes from German. In Germany, working alongside your studies is common and the Werkstudent has a recognised status with its own arrangement in social insurance: the Werkstudentenprivileg [1]. In the DZHW student survey (reference year 2021), 63% of students in Germany worked alongside their studies [2]. What does that status involve, and what can you do with it in the Netherlands?",
        },
        {
          h2: "What does the Werkstudentenprivileg involve?",
          p: "Under German law (§ 6 para. 1 no. 3 SGB V), students at a university who work for pay during their studies are exempt from compulsory health insurance [3]. According to the Deutsche Rentenversicherung, the exemption in health, long-term care and unemployment insurance applies if the student's time and effort go predominantly to studying; that is assumed for a working week of at most 20 hours, regardless of pay [1]. With more than 20 hours the exemption only applies if that is due to work at weekends or in evenings and at night in a contract of at most 26 weeks. Work done only in the semester break is exempt [1].",
        },
        {
          h2: "Fixed hours, clear expectations",
          p: "The 20-hour limit in Germany is a legally relevant upper limit for the contribution exemption, not a casual habit [1]. An agreement on hours per week is therefore a given there. In the Netherlands too, a clearly agreed number of hours, with an explicit agreement on how it combines with studies, works better than vague “come in whenever it suits” arrangements.",
        },
        {
          h2: "Is the German model arranged differently from the Dutch one?",
          p: "Yes. The German Werkstudentenprivileg is an arrangement in German social insurance that exempts students from certain contributions under conditions [3][1]. In the Netherlands we have, in tax law, the student and pupil scheme, under which an employer withholds no or less payroll tax [4].",
        },
        {
          h2: "What you can borrow as a Dutch employer",
          ul: [
            "Treat the role as structural, with its own place on the team",
            "Agree a fixed number of hours instead of loose, shifting availability",
            "Build a growth path toward a full-time role instead of leaving it at one role",
            "Pay in line with the level of the work, not the status of “student”",
          ],
        },
        {
          h2: "And in the Netherlands?",
          p: "Working higher-education students (aged 15 to 27) had an average usual working time of 18.7 hours a week in the third quarter of 2023 [5]. That's almost half a working week. Set such a role up as a real role.",
        },
      ],
    },
  },
  // 11 ---------------------------------------------------------------------
  {
    slug: "werkstudent-onboarden-eerste-maand",
    aud: "bedrijf",
    legalTopic: true,
    photo: "/photography/mariselle-9.jpg",
    tag: { nl: "Onboarding", en: "Onboarding" },
    title: {
      nl: "Zo onboard je een werkstudent goed in de eerste maand",
      en: "How to onboard a working student well in the first month",
    },
    excerpt: {
      nl: "Een concreet onboardingplan, week voor week: wat je vooraf regelt, wie je aan iemands zijde zet en hoe je de eerste maand laat landen.",
      en: "A concrete onboarding plan, week by week: what to sort out beforehand, who to put at someone's side and how to make the first month land.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudent onboarden: de eerste maand in 4 stappen",
      en: "Onboarding a working student: the first month in 4 steps",
    },
    metaDescription: {
      nl: "Een onboardingplan voor de eerste maand van een werkstudent: toegang, buddy, eerste resultaat en feedback, plus wat je wettelijk regelt.",
      en: "An onboarding plan for a working student's first month: access, buddy, first result and feedback, plus what you must arrange legally.",
    },
    keywords: {
      nl: [
        "werkstudent onboarden",
        "onboarding eerste maand",
        "werkstudent begeleiden",
        "buddy werkstudent",
        "feedback werkstudent",
      ],
      en: [
        "onboard a working student",
        "onboarding first month",
        "guiding a working student",
        "buddy working student",
        "feedback working student",
      ],
    },
    sources: [
      {
        title: "ID-bewijs controleren en bewaren",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/wetten-en-regels/identiteitsbewijs-controleren-en-bewaren/",
        accessed: "2026-10-11",
      },
      {
        title: "Stappenplan personeel aannemen",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/stappenplan-personeel-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 652 (proeftijd), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling5/Artikel652/afdrukken",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Weken aan een vacaturetekst, een middag aan onboarding. Draai het om. Een goed onboardingplan hoeft niet ingewikkeld te zijn, maar het moet uit meer bestaan dan een account en een welkomstmail. Hier is een plan voor de eerste maand van een werkstudent.",
        },
        {
          h2: "Wat moet er sowieso in de eerste maand gebeuren?",
          p: "Vier dingen: toegang en middelen die op dag één klaarstaan, een buddy naast een manager, een eerste afgeronde taak binnen vier weken en een vast, wekelijks feedbackmoment. Mist er één, dan voelt een nieuwe werkstudent zich langer een buitenstaander dan nodig is.",
        },
        {
          h2: "Week 1: zorg dat de basis klaarstaat vóór de eerste werkdag",
          p: "Regel toegang, apparatuur en een duidelijke werkplek vooraf, zodat de eerste dag gaat over kennismaken en niet over IT-problemen. Regel ook de administratie: vóór de eerste werkdag controleer je de identiteit en heb je de gegevens voor de loonheffingen, een kopie van het identiteitsbewijs en de loonstaat in je administratie [1][2]. Deel binnen een week en binnen een maand na indiensttreding de verplichte gegevens schriftelijk mee, zoals functie, uren, salaris en opzegtermijn [3].",
        },
        {
          h2: "Week 1: geef een buddy, niet alleen een manager",
          p: "Een manager legt uit wat het werk inhoudt. Een buddy legt uit hoe het er in de praktijk aan toe gaat: waar de koffie staat, wie je waarvoor moet hebben, welke kanalen ertoe doen. Die informele laag maakt dat iemand zich sneller thuis voelt.",
        },
        {
          h2: "Week 2 tot 4: geef een eerste, afgebakend resultaat",
          p: "Laat een werkstudent niet wekenlang “meekijken”. Geef binnen de eerste maand een kleine, afgeronde taak waar diegene volledig verantwoordelijk voor is. Iets afmaken en zien dat het werkt, geeft meer energie dan een maand losse observaties.",
        },
        {
          h2: "Spreek een vast feedbackmoment af",
          p: "Een kort wekelijks gesprek van vijftien minuten voorkomt dat kleine onduidelijkheden uitgroeien tot frustratie. Vraag niet alleen hoe het werk gaat, maar ook of de uren en de balans met de studie kloppen: die combinatie speelt bij een werkstudent, en niet bij een fulltime medewerker.",
        },
        {
          h2: "Behandel de rol als structureel vanaf dag één",
          p: "Behandel een werkstudent niet als tijdelijke hulp die zich nog moet bewijzen. Geef de rol vanaf het begin eigen verantwoordelijkheden en een stem in overleggen.",
        },
        {
          h2: "Wat doe je als het na de eerste maand nog niet lekker loopt?",
          p: "Wacht niet tot de evaluatie na drie maanden om dat bespreekbaar te maken. Komen onduidelijkheden over taken, uren of verwachtingen in de wekelijkse gesprekken eerder boven tafel, dan is bijsturen nog een kleine aanpassing. Let op de proeftijd: bij een tijdelijk contract van langer dan zes maanden maar korter dan twee jaar mag die maximaal een maand duren, en bij een contract van ten hoogste zes maanden is er geen proeftijd [4].",
        },
      ],
      en: [
        {
          p: "Weeks on a job ad, an afternoon on onboarding. Flip it. A good onboarding plan doesn't have to be complicated, but it needs to be more than an account and a welcome email. Here's a plan for a working student's first month.",
        },
        {
          h2: "What needs to happen in the first month, at minimum?",
          p: "Four things: access and equipment ready on day one, a buddy alongside a manager, a first completed task within four weeks and a fixed weekly feedback moment. If one is missing, a new working student feels like an outsider for longer than necessary.",
        },
        {
          h2: "Week 1: have the basics ready before day one",
          p: "Sort out access, equipment and a clear workspace beforehand, so day one is about getting to know people and not about IT problems. Arrange the administration too: before the first working day you check identity and have the payroll-tax details, a copy of the identity document and the payroll record in your records [1][2]. Within one week and within one month of starting, give the mandatory details in writing, such as job, hours, salary and notice period [3].",
        },
        {
          h2: "Week 1: assign a buddy, not just a manager",
          p: "A manager explains what the work involves. A buddy explains how things work in practice: where the coffee is, who to go to for what, which channels matter. That informal layer helps someone feel at home faster.",
        },
        {
          h2: "Weeks 2 to 4: hand over a first, bounded result",
          p: "Don't let a working student “shadow” for weeks on end. Within the first month, give them a small, complete task they're fully responsible for. Finishing something and seeing it work gives more energy than a month of loose observation.",
        },
        {
          h2: "Set a fixed feedback moment",
          p: "A short weekly conversation of fifteen minutes stops small unclarities from growing into frustration. Ask not only how the work is going but also whether the hours and the balance with studies work: that combination matters for a working student and not for a full-time employee.",
        },
        {
          h2: "Treat the role as structural from day one",
          p: "Don't treat a working student as temporary help who still has to prove themselves. Give the role its own responsibilities and a voice in meetings from the start.",
        },
        {
          h2: "What if things still aren't clicking after the first month?",
          p: "Don't wait for a three-month review to bring it up. If unclarities about tasks, hours or expectations surface earlier in the weekly conversations, adjusting is still a small change. Mind the probation period: for a fixed-term contract of longer than six months but shorter than two years it may last at most one month, and for a contract of at most six months there is no probation period [4].",
        },
      ],
    },
  },
  // 12 ---------------------------------------------------------------------
  {
    slug: "red-flags-bij-een-jobaanbod",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/mariselle-7.jpg",
    tag: { nl: "Red flags", en: "Red flags" },
    title: {
      nl: "5 red flags die je als student serieus moet nemen bij een aanbod",
      en: "5 red flags students should take seriously in a job offer",
    },
    excerpt: {
      nl: "Niet elk aanbod dat “ervaring” en “groeikansen” belooft, houdt zich daar ook aan. Vijf signalen om op te letten voordat je tekent.",
      en: "Not every offer that promises “experience” and “growth” delivers on it. Five signals to watch for before you sign.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "5 red flags bij een jobaanbod als student",
      en: "5 red flags in a job offer for students",
    },
    metaDescription: {
      nl: "Vijf signalen voor je tekent: salaris, taken, contract, flexibiliteit en haast. Met wat de Rijksoverheid zegt over minimumloon en contract.",
      en: "Five signals before you sign: salary, tasks, contract, flexibility and pressure. With what the Dutch government says about minimum wage and contracts.",
    },
    keywords: {
      nl: [
        "red flags jobaanbod",
        "vacature controleren student",
        "werken zonder contract",
        "onderbetaling student",
        "aanbod beoordelen werkstudent",
      ],
      en: [
        "red flags job offer",
        "checking a vacancy student",
        "working without a contract",
        "underpayment student",
        "assessing a working student offer",
      ],
    },
    sources: [
      {
        title: "Heb ik recht op het minimumloon als ik stage loop?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vraag-en-antwoord/minimumloon-stage",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
      {
        title: "Welke contracten zijn er voor oproepkrachten?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/welke-contracten-zijn-er-voor-oproepkrachten",
        accessed: "2026-10-11",
      },
      {
        title: "Ik heb gereageerd op een vacature",
        publisher: "Fraudehelpdesk",
        url: "https://www.fraudehelpdesk.nl/fraude/ik-heb-gereageerd-op-een-vacature/",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Als student is het verleidelijk om een aanbod snel aan te nemen, zeker als het je eerste kans lijkt. Maar niet elk aanbod dat er op papier goed uitziet, is dat in de praktijk ook. Vijf signalen om serieus te nemen voordat je tekent, en wat je doet als je er eentje herkent. Over echte oplichting, zoals nepvacatures, schrijven we in een apart artikel.",
        },
        {
          h2: "1. “Ervaring” moet salaris vervangen",
          p: "Probeert een bedrijf een laag of geen salaris goed te praten met “je krijgt er zoveel ervaring voor terug”? Vraag door. Doet iemand gewoon werk, dan is er een arbeidsovereenkomst en dus recht op minstens het minimumloon; alleen bij een echte stage, waar leren centraal staat, is dat anders [1]. Per 1 juli 2026 is het minimumloon € 14,99 bruto per uur vanaf 21 jaar [2]. Ervaring en een eerlijk salaris sluiten elkaar niet uit.",
        },
        {
          h2: "2. De taken blijven vaag, ook als je doorvraagt",
          p: "“Je gaat ons helpen met van alles” klinkt flexibel, maar betekent vaak dat er geen doordachte rol is. Een werkgever moet binnen een week na indiensttreding onder meer je functie of soort werk schriftelijk meedelen [3]. Vraag concreet: wat ga ik in de eerste maand precies doen, en aan wie rapporteer ik?",
        },
        {
          h2: "3. Er ligt geen contract, of pas heel laat",
          p: "Een arbeidsovereenkomst mag ook mondeling, maar de werkgever moet binnen een week en binnen een maand na indiensttreding een aantal gegevens schriftelijk meedelen, zoals uren, salaris, duur en proeftijd. Werk je drie maanden lang elke week, of minimaal 20 uur per maand, voor dezelfde werkgever, dan mag je ervan uitgaan dat je een arbeidsovereenkomst hebt [3]. Beginnen zonder iets op papier is dus een risico dat je niet hoeft te nemen. Vraag vooraf om de basis: uren, salaris, duur.",
        },
        {
          h2: "4. Flexibiliteit werkt maar één kant op",
          p: "Flexibele uren rond tentamens zijn een voordeel van een werkstudentpositie. Maar als “flexibel” in de praktijk betekent dat jij opeens meer uren moet draaien wanneer het het bedrijf uitkomt, terwijl jouw kant van die flexibiliteit niet telt, is het eenrichtingsverkeer. Bij een oproepcontract moet een werkgever je minstens 4 kalenderdagen van tevoren oproepen; bij een latere oproep ben je niet verplicht te komen [4].",
        },
        {
          h2: "5. Je voelt druk om meteen te beslissen",
          p: "“We hebben vandaag nog een antwoord nodig” voor een rol van een jaar of langer is zelden een goed teken. Een bedrijf dat een goede match wil, geeft je ruimte om na te denken, vragen te stellen en eventueel een tweede gesprek te vragen. Let op: ook oplichters maken haast en doen ongevraagde aanbiedingen. De Fraudehelpdesk adviseert niet in te gaan op ongevraagde werkaanbiedingen en nooit te betalen voor werk waarvoor jij juist betaald moet worden [5].",
        },
        {
          h2: "Wat doe je als je zo'n signaal herkent?",
          p: "Onderteken niets voordat je antwoord hebt op de vraag die het signaal opriep: vraag concreet naar het salaris in plaats van “ervaring”, vraag om de basisafspraken op papier, of vraag om een dag bedenktijd. Reageert een bedrijf geïrriteerd of ontwijkend op een simpele, redelijke vraag, dan heb je daar je antwoord al. Twijfel je over je rechten, vraag dan advies bij een vakbond of het Juridisch Loket.",
        },
      ],
      en: [
        {
          p: "As a student it's tempting to accept an offer quickly, especially when it feels like your first real chance. But not every offer that looks good on paper holds up in practice. Five signals to take seriously before you sign, and what to do if you spot one. We cover outright fraud, like fake job ads, in a separate article.",
        },
        {
          h2: "1. “Experience” is meant to replace pay",
          p: "Does a company try to justify low or no pay with “think of the experience you'll get”? Ask further. If someone does ordinary work, there's an employment contract and so a right to at least the minimum wage; only in a genuine internship, where learning is central, is that different [1]. As of 1 July 2026 the minimum wage is € 14.99 gross per hour from age 21 [2]. Experience and a fair salary aren't mutually exclusive.",
        },
        {
          h2: "2. The tasks stay vague, even when you ask",
          p: "“You'll help us with all sorts of things” sounds flexible but often means there's no thought-out role. An employer must give you, among other things, your job or type of work in writing within one week of starting [3]. Ask something concrete: what exactly will I be doing in the first month, and who do I report to?",
        },
        {
          h2: "3. There's no contract, or it comes very late",
          p: "An employment contract can also be oral, but the employer must give certain details in writing within one week and within one month of starting, such as hours, salary, duration and probation. If you work every week for three months, or at least 20 hours a month, for the same employer, you may assume you have an employment contract [3]. Starting with nothing on paper is therefore a risk you don't need to take. Ask in advance for the basics: hours, salary, duration.",
        },
        {
          h2: "4. Flexibility only runs one way",
          p: "Flexible hours around exams are a benefit of a working-student role. But if “flexible” in practice means you're suddenly expected to work more hours whenever it suits the company, while your side of that flexibility doesn't count, that's one-way traffic. With an on-call contract an employer must call you in at least 4 calendar days in advance; if called later, you aren't obliged to come [4].",
        },
        {
          h2: "5. You feel pressured to decide right now",
          p: "“We need an answer today” for a role that runs a year or longer is rarely a good sign. A company that wants a good match gives you room to think, ask questions and, if needed, request a second conversation. Note that fraudsters also create urgency and make unsolicited offers. The Dutch Fraud Helpdesk advises not responding to unsolicited job offers and never paying for work for which you should be the one being paid [5].",
        },
        {
          h2: "What do you do if you spot one of these signals?",
          p: "Don't sign anything before you have an answer to the question the signal raised: ask specifically about pay instead of “experience”, ask for the basic agreements on paper, or ask for a day to think it over. If a company gets irritated or evasive about a simple, reasonable question, you have your answer. If you doubt your rights, ask a trade union or the Dutch Legal Aid Desk (Juridisch Loket) for advice.",
        },
      ],
    },
  },
  // 13 ---------------------------------------------------------------------
  {
    slug: "eerste-junior-hire-founders",
    aud: "bedrijf",
    commercialInterest: true,
    photo: "/photography/mariselle-1.jpg",
    tag: { nl: "Founders", en: "Founders" },
    title: {
      nl: "Je eerste junior hire: waarom founders te lang wachten",
      en: "Your first junior hire: why founders wait too long",
    },
    excerpt: {
      nl: "“Het is sneller als ik het zelf doe” klopt precies tot het moment dat het je grootste bottleneck wordt. Waarom je eerste junior hire eerder kan dan je denkt, en hoe je weet dat het zover is.",
      en: "“It's faster if I just do it myself” is true right up until it becomes your biggest bottleneck. Why your first junior hire can come sooner than you think, and how to know you're there.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Je eerste junior hire: waarom founders te lang wachten",
      en: "Your first junior hire: why founders wait too long",
    },
    metaDescription: {
      nl: "Wanneer is een startup klaar voor een eerste junior hire of werkstudent? Signalen, een afgebakende start en wat het kost, voor founders.",
      en: "When is a startup ready for a first junior hire or working student? Signals, a bounded start and what it costs, for founders.",
    },
    keywords: {
      nl: [
        "eerste junior hire",
        "founder werkstudent",
        "startup eerste medewerker",
        "taken delegeren founder",
        "werkstudent startup",
      ],
      en: [
        "first junior hire",
        "founder working student",
        "startup first employee",
        "founder delegating tasks",
        "working student startup",
      ],
    },
    sources: [
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Je kent het: een takenlijst die groter is dan de tijd om hem af te werken, en het gevoel dat het sneller is om iets zelf te doen dan het uit te leggen. Op korte termijn klopt dat. Maar op een gegeven moment, vaak als het bedrijf begint te groeien, wordt jijzelf de bottleneck.",
        },
        {
          h2: "Wanneer is een bedrijf klaar voor zijn eerste junior hire?",
          p: "Een praktische test: gelden minstens twee van deze drie, dan is het tijd om verder te kijken dan “ik doe het zelf wel even”:",
          ul: [
            "Je besteedt meer dan een paar uur per week aan werk dat geen strategisch inzicht vereist, zoals rapportages, planning of terugkerende content",
            "Er is minstens één taak die elke week terugkomt en die iemand anders met een korte uitleg kan overnemen",
            "Klanten, deals of besluiten wachten regelmatig omdat jij de bottleneck bent",
          ],
        },
        {
          h2: "“Sneller zelf doen” is een valkuil met houdbaarheidsdatum",
          p: "Op korte termijn is het waar: zelf iets doen kost minder tijd dan het uitleggen. Op de langere termijn blijft je tijd steken in werk dat een ander had kunnen overnemen, terwijl de uren die echt founder-uren waard zijn, zoals strategie, klanten en fondsenwerving, erbij inschieten.",
        },
        {
          h2: "De angst is meestal groter dan het risico",
          p: "Founders vragen zich bij een eerste junior hire vooral af of het te veel kost en of ze tijd hebben om iemand te begeleiden. Een werkstudent kan beide zorgen verkleinen. De totale loonkosten zijn lager dan bij een fulltime hire omdat je minder uren inkoopt, niet omdat het uurtarief lager is (het wettelijk minimumloon is per 1 juli 2026 € 14,99 bruto per uur vanaf 21 jaar [1]), en de rol kan meegroeien met de tijd die je hebt. Begeleiding kost wel tijd, en bij herhaald verlengen van een tijdelijk contract geldt de ketenregeling [2]. Je hebt niet meteen een volledig inwerktraject nodig: begin met één duidelijke taak en een kort wekelijks gesprek.",
        },
        {
          h2: "Wachten kost meer dan het lijkt",
          p: "Elke maand dat je uitvoerend werk blijft doen dat je kunt delegeren, is een maand minder tijd voor het werk dat het bedrijf laat groeien. Waar blijft die tijd nu? Bij de offerte die een week blijft liggen, het besluit dat op jou wacht, het team dat steeds even bij jou langs moet.",
        },
        {
          h2: "Begin klein en afgebakend, niet breed en vaag",
          p: "Geef je eerste junior hire niet “een beetje van alles”, maar één duidelijk stuk eigenaarschap: een deel van de klantcommunicatie, een terugkerend rapportageproces, contentproductie. Bij Hubby, een VOIDS-klant, draaiden werkstudenten mee als founder's associate op strategisch niveau. Dat laat zien hoe serieus en afgebakend de verantwoordelijkheid van een eerste hire kan zijn.",
        },
        {
          h2: "Wat als je nu echt geen tijd hebt om iemand te begeleiden?",
          p: "Dan kun je het je waarschijnlijk niet veel langer veroorloven om te wachten. Begeleiding van een eerste junior hire hoeft geen uren per dag te kosten: plan een kwartier per week en geef één heldere, afgebakende taak.",
        },
        {
          h2: "De echte vraag is niet of, maar wanneer",
          p: "Bijna elk groeiend bedrijf heeft op een dag junior capaciteit nodig; de vraag is wanneer. Besteed je meer dan een paar uur per week aan werk dat iemand anders had kunnen doen, dan is dat het moment om serieus te kijken. Of het budget er is en of je de begeleiding aankunt, bepaal je zelf: begin met één rol en één taak.",
        },
      ],
      en: [
        {
          p: "You know the feeling: a to-do list bigger than the time to clear it, and the sense that it's faster to do something yourself than to explain it. In the short term it's true. But at some point, often when the company starts to grow, you become the bottleneck.",
        },
        {
          h2: "When is a company ready for its first junior hire?",
          p: "A practical test: if at least two of these three apply, it's time to look past “I'll just do it myself”:",
          ul: [
            "You spend more than a few hours a week on work that doesn't need strategic judgment, like reporting, scheduling or recurring content",
            "There's at least one task that comes back every week and that someone else could take over with a short explanation",
            "Clients, deals or decisions regularly wait because you're the bottleneck",
          ],
        },
        {
          h2: "“Faster to do it myself” is a trap with an expiry date",
          p: "In the short term it's true: doing something yourself takes less time than explaining it. In the longer term your time keeps sinking into work someone else could have taken over, while the hours actually worth a founder's attention, like strategy, customers and fundraising, get squeezed out.",
        },
        {
          h2: "The fear is usually bigger than the risk",
          p: "Founders considering a first junior hire mainly wonder whether it costs too much and whether they have time to guide someone. A working student can reduce both worries. Total payroll cost is lower than for a full-time hire because you buy fewer hours, not because the hourly rate is lower (the statutory minimum wage is € 14.99 gross per hour from age 21 as of 1 July 2026 [1]), and the role can grow with the time you have. Guidance does take time, and the chain rule applies when you extend a fixed-term contract repeatedly [2]. You don't need a full onboarding programme straight away: start with one clear task and a short weekly check-in.",
        },
        {
          h2: "Waiting costs more than it seems",
          p: "Every month you keep doing execution work you could delegate is a month less time for the work that grows the company. Where does that time go now? Into the quote that sits for a week, the decision that waits on you, the team that keeps stopping by your desk.",
        },
        {
          h2: "Start small and bounded, not broad and vague",
          p: "Don't give your first junior hire “a bit of everything” but one clear piece of ownership: part of client communication, a recurring reporting process, content production. At Hubby, a VOIDS client, working students worked as founder's associates at a strategic level. It shows how serious and bounded a first hire's responsibility can be.",
        },
        {
          h2: "What if you really don't have time to guide anyone right now?",
          p: "Then you probably can't afford to wait much longer. Guiding a first junior hire doesn't have to take hours a day: plan fifteen minutes a week and hand over one clear, bounded task.",
        },
        {
          h2: "The real question isn't if, it's when",
          p: "Almost every growing company needs junior capacity one day; the question is when. If you spend more than a few hours a week on work someone else could do, that's the moment to look seriously. Whether the budget is there and whether you can handle the guidance is for you to decide: start with one role and one task.",
        },
      ],
    },
  },
  // 14 ---------------------------------------------------------------------
  {
    slug: "bijbaan-of-relevante-ervaring",
    aud: "talent",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-6.jpg",
    tag: { nl: "Arbeidsmarkt", en: "Labour market" },
    title: {
      nl: "Bijbaan of relevante werkervaring: wat telt zwaarder voor je cv?",
      en: "Side job or relevant work experience: what counts more for your CV?",
    },
    excerpt: {
      nl: "Veel studenten werken naast hun studie om rond te komen, niet om ervaring op te doen. Wat dat verschil betekent voor je start op de arbeidsmarkt, en hoe je het oplost.",
      en: "Many students work alongside their studies to get by, not to gain experience. What that difference means for your start on the labour market, and how to close the gap.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Bijbaan of relevante werkervaring: wat telt zwaarder?",
      en: "Side job or relevant work experience: what counts more?",
    },
    metaDescription: {
      nl: "Telt een bijbaan mee op je cv, en wat zegt onderzoek over relevante werkervaring? Met CBS- en SEO-cijfers, en hoe je betaald én relevant werk herkent.",
      en: "Does a side job count on your CV, and what does research say about relevant work experience? With CBS and SEO data, and how to spot paid and relevant work.",
    },
    keywords: {
      nl: [
        "bijbaan of relevante ervaring",
        "bijbaan cv",
        "relevante werkervaring student",
        "betaald en relevant werk",
        "werkstudent kiezen",
      ],
      en: [
        "side job or relevant experience",
        "side job on CV",
        "relevant work experience student",
        "paid and relevant work",
        "choosing a working student job",
      ],
    },
    sources: [
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Studie & Werk HO: de arbeidsmarktpositie van hbo- en wo-alumni (Bussink, Van der Ven & Klinker, in opdracht van EW Magazine)",
        publisher: "SEO Economisch Onderzoek",
        url: "https://www.seo.nl/wp-content/uploads/2023/07/2023-74-Studie-Werk-HO.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Stijgende lijn stagevergoedingen voor studenten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2025/03/12/stijgende-lijn-stagevergoedingen-voor-studenten",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Voor bedrijven: werkstudenten, cases en werkwijze",
        publisher: "VOIDS",
        url: "https://voids.agency/companies",
        accessed: "2026-10-11",
      },
      {
        title: "Impact: onze missie en ambitie",
        publisher: "VOIDS",
        url: "https://voids.agency/impact",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Veel studenten hebben een bijbaan, vaak in de detailhandel of horeca: werkende ho-studenten werkten in het derde kwartaal van 2023 het vaakst als verkoopmedewerker in de detailhandel (10%), in de horeca (8%) of als vakkenvuller (5%) [1]. Dat werk is niet minderwaardig. Het betaalt de rekeningen en leert je verantwoordelijkheid nemen. Maar bij je eerste sollicitatie naar een vakinhoudelijke baan weegt het anders dan ervaring die aansluit op je studie.",
        },
        {
          h2: "Telt een bijbaan nog wel mee op je cv?",
          p: "Ja, maar anders dan relevante ervaring. In een onderzoek van SEO Economisch Onderzoek (2023) hing een bijbaan tijdens de studie samen met een kortere zoektijd naar een eerste substantiële baan, en een bijbaan in een relevante sector met een nog kortere zoektijd dan een bijbaan in een niet-relevante sector (in het onderzoek: horeca, detailhandel, evenementen, post- en koeriersdiensten, landbouw en uitzendwerk) [2]. Een bijbaan laat zien dat je kunt werken en met klanten of collega's kunt omgaan. Relevante ervaring laat daarnaast zien dat je iets weet van het vakgebied.",
        },
        {
          h2: "Het probleem: relevante ervaring is niet voor iedereen even bereikbaar",
          p: "Relevante stages en werkstudentposities zijn niet altijd goed betaald. Een stagevergoeding is wettelijk niet verplicht; in maart 2024 kreeg 42% van de mbo-studenten een stagevergoeding en naar schatting 75% van de hbo-studenten, en in het wo 65% van de studenten met een verplichte stage [3]. Dat maakt onbetaalde of laagbetaalde ervaring minder toegankelijk voor studenten die ook huur en boodschappen moeten betalen. Wie een financieel vangnet heeft, kan het zich eerder veroorloven.",
        },
        {
          h2: "Betaald én relevant hoeft geen tegenstelling te zijn",
          p: "Dat je moet kiezen tussen geld verdienen en ervaring opdoen, is geen natuurwet. Een werkstudent heeft een arbeidsovereenkomst en dus recht op minstens het minimumloon [4]. In de cases die VOIDS op de website beschrijft, gaat het om betaalde werkstudentrollen [5].",
        },
        {
          h2: "Hoe herken je een rol die zowel betaalt als relevant is?",
          p: "Let op drie dingen: een salaris dat op of boven het wettelijk minimumloon ligt en niet wordt weggewuifd als “ervaring is de beloning”, taken die aantoonbaar te maken hebben met je studierichting of gewenste vakgebied, en een contract met vaste uren in plaats van losse oproepen. Ontbreekt er structureel één, dan zit je dichter bij een bijbaan dan bij een werkstudentrol, ongeacht hoe de vacaturetekst het noemt.",
        },
        {
          h2: "Wat je nu al kunt doen",
          ul: [
            "Zoek actief naar werkstudentrollen in plaats van alleen bijbaantjes, ook als je nog volop studeert",
            "Wees kritisch op de vergoeding: relevante ervaring hoeft niet onbetaald te zijn",
            "Heb je nu een bijbaan nodig om rond te komen? Prima, maar blijf zoeken naar iets relevanters zodra dat kan",
          ],
        },
        {
          h2: "Waarom dit de reden is dat VOIDS bestaat",
          p: "Het verschil tussen wie zich relevante ervaring kan veroorloven en wie niet, is de kern van waarom VOIDS bestaat. Toegang tot werk dat ertoe doet zou niet moeten afhangen van wie het kan betalen om er weinig voor terug te vragen [6].",
        },
      ],
      en: [
        {
          p: "Many students have a side job, often in retail or hospitality: working higher-education students in the third quarter of 2023 most often worked as sales assistants in retail (10%), in hospitality (8%) or as shelf stockers (5%) [1]. That work isn't lesser. It pays the bills and teaches you to take responsibility. But at your first application for a job in your field, it weighs differently from experience that connects to your studies.",
        },
        {
          h2: "Does a side job still count on your CV?",
          p: "Yes, but differently from relevant experience. In a study by SEO Economic Research (2023), a side job during studies was associated with a shorter search for a first substantial job, and a side job in a relevant sector with an even shorter search than one in a non-relevant sector (in the study: hospitality, retail, events, postal and courier services, agriculture and temp work) [2]. A side job shows you can work and deal with customers or colleagues. Relevant experience also shows you know something about the field.",
        },
        {
          h2: "The problem: relevant experience isn't equally accessible",
          p: "Relevant internships and working-student roles aren't always well paid. An internship allowance is not mandatory by law; in March 2024, 42% of secondary vocational students received one and an estimated 75% of students at universities of applied sciences, and in research universities 65% of students with a compulsory internship [3]. That makes unpaid or low-paid experience less accessible to students who also need to cover rent and groceries. Someone with a financial safety net can more easily afford it.",
        },
        {
          h2: "Paid and relevant don't have to be a trade-off",
          p: "That you must choose between earning money and gaining experience isn't a law of nature. A working student has an employment contract and so a right to at least the minimum wage [4]. The cases VOIDS describes on its website concern paid working-student roles [5].",
        },
        {
          h2: "How do you spot a role that's both paid and relevant?",
          p: "Watch for three things: a salary at or above the statutory minimum wage that isn't waved away with “experience is the reward”, tasks that clearly connect to your field of study or the work you're aiming for, and a contract with fixed hours rather than loose on-call shifts. If one is structurally missing, you're closer to a side job than a working-student role, whatever the vacancy calls it.",
        },
        {
          h2: "What you can do right now",
          ul: [
            "Actively look for working-student roles instead of only side jobs, even while you're deep in your studies",
            "Be critical about pay: relevant experience doesn't have to be unpaid",
            "Need a side job right now to get by? Fine, but keep looking for something more relevant as soon as you can",
          ],
        },
        {
          h2: "Why this is the reason VOIDS exists",
          p: "The gap between who can afford relevant experience and who can't is the core of why VOIDS exists. Access to work that matters shouldn't depend on who can afford to ask for little in return [6].",
        },
      ],
    },
  },
  // 15 ---------------------------------------------------------------------
  {
    slug: "proeftijd-werkstudentcontract",
    aud: "beide",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-8.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Proeftijd bij een werkstudentcontract: wat mag wel en wat niet?",
      en: "Probation period in a working-student contract: what's allowed and what isn't?",
    },
    excerpt: {
      nl: "Een proeftijd van drie maanden op een contract van vijf maanden mag gewoon niet. Wat de wet wél toestaat bij een werkstudentcontract, en waar je op moet letten voordat je tekent.",
      en: "A three-month probation on a five-month contract simply isn't allowed. What the law does permit in a working-student contract, and what to check before you sign.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Proeftijd bij een werkstudentcontract: wat mag?",
      en: "Probation in a working-student contract: what is allowed?",
    },
    metaDescription: {
      nl: "Hoeveel proeftijd mag in een tijdelijk contract? Wat artikel 7:652 BW toestaat, wat bij een ongeldige proeftijd en wat je checkt voor je tekent.",
      en: "How much probation is allowed in a fixed-term contract? What Article 7:652 of the Civil Code permits, what if invalid and what to check before you sign.",
    },
    keywords: {
      nl: [
        "proeftijd tijdelijk contract",
        "proeftijd werkstudent",
        "artikel 7:652 BW",
        "proeftijd een maand",
        "ontslag in proeftijd",
      ],
      en: [
        "probation fixed-term contract",
        "probation working student",
        "article 7:652 Dutch Civil Code",
        "one month probation",
        "dismissal during probation",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 652 (proeftijd), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling5/Artikel652/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Welke regels gelden er bij een proeftijd?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/regels-bij-proeftijd",
        accessed: "2026-10-11",
      },
      {
        title: "Algemene voorwaarden",
        publisher: "VOIDS",
        url: "https://voids.agency/terms",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een werkstudentcontract is een gewone arbeidsovereenkomst, dus de wettelijke regels voor een proeftijd uit artikel 7:652 BW gelden hier net zo goed als bij elk ander contract [1]. Je hebt dus niet minder rechten omdat je nog studeert.",
        },
        {
          h2: "Wat is een proeftijd precies?",
          p: "Een proeftijd is een kennismakingsperiode aan het begin van het contract. Tijdens de proeftijd kunnen werkgever en werknemer de overeenkomst direct opzeggen, zonder opzegtermijn en zonder dat er een redelijke grond voor ontslag hoeft te zijn; wie opzegt moet op verzoek van de ander wel schriftelijk de reden opgeven [2]. De proeftijd moet schriftelijk worden afgesproken en geldt voor beide partijen gelijk [1].",
        },
        {
          h2: "Hoeveel proeftijd is wettelijk toegestaan bij een werkstudentcontract?",
          p: "De lengte hangt af van de duur van het contract, niet van het feit dat het om een werkstudent gaat [1]. Bij een contract voor bepaalde tijd van ten hoogste zes maanden mag geen proeftijd worden afgesproken. Bij een contract langer dan zes maanden maar korter dan twee jaar is maximaal één maand toegestaan; bij twee jaar of langer maximaal twee maanden. Eindigt een tijdelijk contract niet op een kalenderdatum, dan is maximaal één maand toegestaan. Bij een contract voor onbepaalde tijd is maximaal twee maanden toegestaan [1]. Een opvolgend contract bij dezelfde werkgever mag geen proeftijd hebben, tenzij de nieuwe functie duidelijk andere vaardigheden of verantwoordelijkheden vraagt [1][2].",
        },
        {
          h2: "Wat als de proeftijd niet aan deze regels voldoet?",
          p: "Dan is het beding nietig: de wet bepaalt dat elk beding in strijd met artikel 7:652 nietig is [1]. Een te lange proeftijd geldt dus niet, en dan zijn de gewone regels voor beëindiging van toepassing. Een proeftijd van drie maanden op een contract van vijf maanden is niet “drie maanden die eigenlijk één maand hadden moeten zijn”, maar een proeftijd die helemaal niet mag. Twijfel je? Laat het toetsen door een jurist of het Juridisch Loket.",
        },
        {
          h2: "Wat gebeurt er met de proeftijd als je ziek wordt of tentamens hebt?",
          p: "Wordt je tijdens de proeftijd ziek, dan krijg je geen langere proeftijd, en ontslag in de proeftijd is ook mogelijk als je ziek bent [2]. Zeg je zelf op tijdens de proeftijd, dan heb je geen recht op WW [2]. Bespreek daarom vooraf hoe de eerste weken samenvallen met je studierooster, zodat je niet halverwege de proeftijd met een tentamenweek zit zonder afspraak.",
        },
        {
          h2: "Checklist voordat je tekent",
          ul: [
            "Klopt de lengte van de proeftijd met de duur van het contract volgens de wet?",
            "Staat de proeftijd expliciet en schriftelijk in het contract, en is hij niet alleen mondeling toegezegd?",
            "Is duidelijk vanaf welke datum de proeftijd ingaat?",
            "Heb je de studiebelasting in die eerste periode besproken?",
          ],
        },
        {
          h2: "Waarom dit ertoe doet, ook bij een parttime rol",
          p: "Een werkstudentcontract is geen lichtere versie van een arbeidsovereenkomst, en de regels voor de proeftijd zijn dat ook niet. Het contract sluit je met de werkgever; de aannamebeslissing blijft volgens onze algemene voorwaarden bij de werkgever [3].",
        },
      ],
      en: [
        {
          p: "A working-student contract is a regular employment contract, so the statutory rules on probation in Article 7:652 of the Dutch Civil Code apply exactly as they do to any other contract [1]. You don't have fewer rights because you're still studying.",
        },
        {
          h2: "What exactly is a probation period?",
          p: "A probation period is an introductory period at the start of the contract. During probation, employer and employee can end the agreement immediately, without a notice period and without a reasonable ground for dismissal; whoever gives notice must, at the other's request, state the reason in writing [2]. The probation period must be agreed in writing and applies equally to both parties [1].",
        },
        {
          h2: "How long can a probation period legally be in a working-student contract?",
          p: "The length depends on the duration of the contract, not on the fact that it's a working-student role [1]. For a fixed-term contract of at most six months, no probation period may be agreed. For a contract longer than six months but shorter than two years, a maximum of one month is allowed; for two years or longer, a maximum of two months. If a fixed-term contract does not end on a calendar date, a maximum of one month is allowed. For an indefinite contract, a maximum of two months is allowed [1]. A successor contract with the same employer may not have a probation period, unless the new role clearly requires different skills or responsibilities [1][2].",
        },
        {
          h2: "What happens if the probation period doesn't follow these rules?",
          p: "Then the clause is void: the law provides that any clause in breach of Article 7:652 is void [1]. A probation period that's too long doesn't apply, and the ordinary rules on ending the contract apply instead. A three-month probation on a five-month contract isn't “three months that should really have been one”, it's a probation period that isn't allowed at all. In doubt? Have it checked by a lawyer or the Dutch Legal Aid Desk (Juridisch Loket).",
        },
        {
          h2: "What happens to the probation period if you fall ill or have exams?",
          p: "If you fall ill during probation, you don't get a longer probation period, and dismissal during probation is also possible if you're sick [2]. If you resign yourself during probation, you have no right to unemployment benefit [2]. So discuss upfront how the first weeks line up with your exam schedule, so you're not halfway through probation in an exam week without an agreement.",
        },
        {
          h2: "Checklist before you sign",
          ul: [
            "Does the length of the probation period match the contract duration under the law?",
            "Is the probation period stated explicitly and in writing, not just promised verbally?",
            "Is it clear from which date the probation period starts?",
            "Have you discussed the study workload for that first stretch?",
          ],
        },
        {
          h2: "Why it matters, even for a part-time role",
          p: "A working-student contract isn't a lighter version of an employment contract, and neither are the rules on probation. You conclude the contract with the employer; under our general terms the hiring decision stays with the employer [3].",
        },
      ],
    },
  },
  // 16 ---------------------------------------------------------------------
  {
    slug: "ziek-als-werkstudent",
    aud: "talent",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-5.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Ziek als werkstudent: heb je recht op doorbetaling?",
      en: "Sick as a working student: are you still paid?",
    },
    excerpt: {
      nl: "Ja, ook als werkstudent word je doorbetaald als je ziek bent. Wat je mag verwachten, hoe dat verschilt van een oproepcontract en wat je doet rond tentamens.",
      en: "Yes, working students get paid when they're sick too. What to expect, how it differs from an on-call contract and what to do around exams.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Ziek als werkstudent: word je doorbetaald?",
      en: "Sick as a working student: are you still paid?",
    },
    metaDescription: {
      nl: "Word je als werkstudent doorbetaald bij ziekte? Minstens 70% van je loon, in het eerste ziektejaar met het minimumloon als ondergrens. Bron: Rijksoverheid.",
      en: "Are you paid when sick as a working student? At least 70% of your wage, with the minimum wage as a floor in year one of sickness. Per the Dutch government.",
    },
    keywords: {
      nl: [
        "ziek als werkstudent",
        "loondoorbetaling bij ziekte",
        "70% loon ziekte",
        "ziek tijdelijk contract",
        "werkstudent ziekmelden",
      ],
      en: [
        "sick as a working student",
        "continued pay during sickness",
        "70% wage sickness",
        "sick fixed-term contract",
        "working student reporting sick",
      ],
    },
    sources: [
      {
        title: "Loon (salaris) doorbetalen bij ziekte",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/wetten-en-regels/loon-doorbetalen-bij-ziekte/",
        accessed: "2026-10-11",
      },
      {
        title: "Hoeveel loon krijg ik doorbetaald als ik ziek ben?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/ziekteverzuim-van-het-werk/hoeveel-loon-krijg-ik-doorbetaald-als-ik-ziek-ben",
        accessed: "2026-10-11",
      },
      {
        title: "Welke contracten zijn er voor oproepkrachten?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/welke-contracten-zijn-er-voor-oproepkrachten",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Ziek zijn als werkstudent voelt soms als een grijs gebied, alsof het minder telt omdat je toch niet fulltime werkt. Dat is het niet. Een werkstudent is een werknemer, en de regels rond loondoorbetaling bij ziekte gelden voor werknemers met een vast of tijdelijk contract en voor oproepkrachten met een arbeidscontract [1].",
        },
        {
          h2: "Word je doorbetaald als je ziek bent als werkstudent?",
          p: "Ja. In het eerste ziektejaar ontvang je volgens de Rijksoverheid minstens 70% van je loon en minimaal het minimumloon; een cao of je arbeidsovereenkomst kan meer bieden [2]. In het tweede ziektejaar betaalt de werkgever minimaal 70%, zonder aanvulling tot het minimumloon [2]. De werkgever betaalt maximaal twee jaar (104 weken) door [1].",
        },
        {
          h2: "Geldt dit ook als je maar 16 uur per week werkt?",
          p: "Het aantal uren verandert niets aan het recht op doorbetaling, alleen aan het bedrag: het percentage geldt over het loon dat je zou hebben gekregen als je niet ziek was [1]. Een werkstudent die 16 uur per week werkt en ziek wordt, ontvangt dus 70% van het loon over die 16 uur, met de ondergrens van het minimumloon in het eerste ziektejaar [2].",
        },
        {
          h2: "Hoe verschilt dit van een oproepcontract?",
          p: "Bij een oproepkracht houd je volgens de Rijksoverheid soms recht op doorbetaling van loon, of krijg je een Ziektewetuitkering van UWV; dat hangt af van het soort oproepcontract [3]. Met een contract met een vast aantal uren per week is het eenvoudiger om vast te stellen waarover wordt doorbetaald.",
        },
        {
          h2: "Moet je je ook ziekmelden als je alleen een tentamen mist door griep?",
          p: "Ziekmelden doe je bij je werkgever; hoe en wanneer staat vaak in je contract of de verzuimregels van je werkgever. Een tentamen missen door ziekte is een zaak tussen jou en je universiteit of hogeschool, los van je werk. Meld je bij je werkgever ziek zoals je dat op een gewone werkdag zou doen, ook als het samenvalt met een tentamenweek.",
        },
        {
          h2: "Wat als je werkgever zegt dat ziekteverzuim “niet meetelt” bij een werkstudentcontract?",
          p: "Dat klopt niet: loondoorbetaling bij ziekte geldt voor werknemers met een tijdelijk contract en voor oproepkrachten met een arbeidscontract [1]. Kom je dit tegen, vraag dan naar de onderbouwing, of leg het naast je contract en de cao.",
        },
        {
          h2: "Waarom dit ons vertrekpunt is",
          p: "Een werkstudent heeft dezelfde rechten als iedere andere werknemer, ziekte inbegrepen. VOIDS wil dat kandidaten weten waar ze recht op hebben. Het loon wordt door de werkgever betaald.",
        },
      ],
      en: [
        {
          p: "Being sick as a working student can feel like a grey area, as if it matters less because you're not full-time anyway. It isn't. A working student is an employee, and the rules on continued pay during sickness apply to employees with a permanent or fixed-term contract and to on-call workers with an employment contract [1].",
        },
        {
          h2: "Do working students get paid when they're sick?",
          p: "Yes. In the first year of sickness you receive, according to the Dutch government, at least 70% of your wage and at least the minimum wage; a collective agreement or your employment contract may offer more [2]. In the second year the employer pays at least 70%, without topping up to the minimum wage [2]. The employer pays for a maximum of two years (104 weeks) [1].",
        },
        {
          h2: "Does it still apply if you only work 16 hours a week?",
          p: "The number of hours doesn't change the right to continued pay, only the amount: the percentage applies to the wage you would have received had you not been sick [1]. A working student on 16 hours a week who falls ill therefore receives 70% of the wage for those 16 hours, with the minimum-wage floor in the first year of sickness [2].",
        },
        {
          h2: "How does this differ from an on-call contract?",
          p: "For an on-call worker, according to the Dutch government, you sometimes keep the right to continued pay, or receive a Sickness Benefits Act benefit from UWV; that depends on the type of on-call contract [3]. With a fixed number of hours a week, it's simpler to establish what is paid.",
        },
        {
          h2: "Do you still need to report sick if you only miss an exam?",
          p: "You report sick to your employer; how and when is often set out in your contract or your employer's absence rules. Missing an exam because of illness is a matter between you and your university or college, separate from your work. Report sick to your employer the way you would on a normal working day, even if it coincides with an exam week.",
        },
        {
          h2: "What if your employer says sick leave “doesn't count” on a working-student contract?",
          p: "That's not right: continued pay during sickness applies to employees with a fixed-term contract and to on-call workers with an employment contract [1]. If you run into this, ask for the reasoning, or check it against your contract and the collective agreement.",
        },
        {
          h2: "Why this is our starting point",
          p: "A working student has the same rights as any other employee, sickness included. VOIDS wants candidates to know what they're entitled to. Wages are paid by the employer.",
        },
      ],
    },
  },
  // 17 ---------------------------------------------------------------------
  {
    slug: "vakantiedagen-opbouwen-als-werkstudent",
    aud: "talent",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-5.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Vakantiedagen opbouwen als werkstudent: hoe werkt dat?",
      en: "Accruing vacation days as a working student: how does it work?",
    },
    excerpt: {
      nl: "Ook bij 16 uur per week bouw je gewoon vakantiedagen op, naar rato van je uren. De rekensom uitgelegd, plus wat je doet als je werkgever ze niet bijhoudt.",
      en: "Even at 16 hours a week you accrue holiday days, in proportion to your hours. The maths explained, plus what to do if your employer isn't tracking them.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Vakantiedagen opbouwen als werkstudent: zo werkt het",
      en: "Accruing holiday days as a working student: how it works",
    },
    metaDescription: {
      nl: "Hoeveel vakantiedagen bouw je op als werkstudent? Vier keer je wekelijkse uren per jaar, minstens 8% vakantiegeld en wanneer dagen vervallen.",
      en: "How many holiday days do you accrue as a working student? Four times your weekly hours a year, at least 8% holiday pay and when days expire.",
    },
    keywords: {
      nl: [
        "vakantiedagen werkstudent",
        "vakantie-uren opbouwen",
        "vakantiegeld 8 procent",
        "vakantiedagen vervallen",
        "vakantiedagen parttime",
      ],
      en: [
        "holiday days working student",
        "accruing holiday hours",
        "holiday pay 8 percent",
        "holiday days expire",
        "holiday days part-time",
      ],
    },
    sources: [
      {
        title: "Ik heb een nulurencontract. Heb ik recht op vakantiedagen en vakantiegeld? (vakantie-uren: 4 keer de uren per week, vakantiegeld minimaal 8%)",
        publisher: "Rijksoverheid",
        url: "https://rijksoverheid.nl/onderwerpen/vakantiedagen-en-vakantiegeld/vraag-en-antwoord/nulurencontract-en-vakantiedagen-en-vakantiegeld",
        accessed: "2026-10-11",
      },
      {
        title: "Hoe kan ik mijn vakantiedagen opnemen?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/vakantiedagen-en-vakantiegeld/hoe-kan-ik-mijn-vakantiedagen-opnemen",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "“Ik werk maar parttime, dus vakantiedagen gelden niet echt voor mij.” Dat is een misverstand. Volgens de Rijksoverheid heb je per jaar recht op vier keer het aantal uren dat je per week werkt, en dat recht geldt voor alle werknemers [1]. Ook bij weinig uren bouw je dus gewoon vakantie-uren op, naar rato.",
        },
        {
          h2: "Bouw je als werkstudent vakantiedagen op?",
          p: "Ja. Iedere werknemer heeft per jaar recht op vakantie-uren ter grootte van vier keer het aantal uren dat je per week werkt [1]. Werk je 16 uur per week, dan is dat 64 uur per jaar, oftewel vier werkweken van 16 uur. Dat is een wettelijke ondergrens; een cao of je contract kan meer bieden. Daarnaast heb je recht op minstens 8% vakantiegeld over je brutoloon [1].",
        },
        {
          h2: "Hoe reken je dat om naar dagen?",
          p: "Vakantie-uren worden meestal omgerekend naar dagen op basis van je gemiddelde werkdag. Werk je twee dagen van 8 uur per week, dan komt 64 uur neer op acht vakantiedagen van 8 uur. Werk je verspreid over meer, kortere dagen, dan verandert het aantal dagen, maar niet het totale aantal uren waar je recht op hebt.",
        },
        {
          h2: "Wat als je in tentamentijd minder werkt?",
          p: "Je bouwt op over de uren die in je arbeidsovereenkomst staan [1]. Werk je in een tentamenperiode minder of neem je onbetaald verlof op, spreek dan met je werkgever af hoe dat doorwerkt in je opbouw, en leg het vast.",
        },
        {
          h2: "Vervallen vakantiedagen als je ze niet opneemt?",
          p: "Niet opgenomen wettelijke vakantiedagen vervallen een half jaar na het kalenderjaar waarin je ze hebt opgebouwd: dagen van 2026 vervallen dus op 1 juli 2027. Bij een cao of schriftelijke overeenkomst kan een ruimere termijn gelden. Je niet opgenomen dagen verjaren pas na vijf jaar als je ze niet op tijd kon opnemen, bijvoorbeeld door ziekte of omdat je werkgever dat onmogelijk maakte, en voor bovenwettelijke dagen [2]. Je moet ieder jaar je wettelijke vakantiedagen kunnen opnemen; de werkgever mag een aanvraag alleen weigeren bij zwaarwegende bedrijfsbelangen of een collectieve vakantie, en moet dan een ander moment toestaan [2].",
        },
        {
          h2: "Wat kun je doen als je werkgever geen overzicht bijhoudt?",
          p: "Vraag om een overzicht van je opgebouwde en opgenomen vakantie-uren. Heb je bij het einde van je dienstverband nog vakantie-uren over die je niet meer kunt opnemen, dan krijg je ze volgens de Rijksoverheid uitbetaald [2]. Vraag er vroeg naar in plaats van pas bij vertrek.",
        },
        {
          h2: "Waarom dit meetelt, ook als je maar één jaar blijft",
          p: "Vakantiedagen zijn geen extraatje dat je “verdient” als je lang genoeg blijft: de opbouw loopt vanaf je eerste werkdag mee [1]. Het contract sluit je met de werkgever, en die is verantwoordelijk voor de afspraken daarin.",
        },
      ],
      en: [
        {
          p: "“I only work part-time, so holiday days don't really apply to me.” That's a misconception. According to the Dutch government you're entitled, per year, to four times the number of hours you work per week, and this right applies to all employees [1]. Even on few hours you accrue holiday hours, proportionally.",
        },
        {
          h2: "Do working students accrue holiday days?",
          p: "Yes. Every employee is entitled, per year, to holiday hours equal to four times the hours worked per week [1]. If you work 16 hours a week, that's 64 hours a year, the equivalent of four 16-hour work weeks. That's a statutory floor; a collective agreement or your contract may offer more. On top of that you're entitled to at least 8% holiday pay on your gross wage [1].",
        },
        {
          h2: "How do you convert that into days?",
          p: "Holiday hours are usually converted into days based on your average working day. If you work two 8-hour days a week, 64 hours comes to eight 8-hour holiday days. If your hours are spread over more, shorter days, the number of days changes, but not the total hours you're entitled to.",
        },
        {
          h2: "What if you work fewer hours in exam time?",
          p: "You accrue on the hours stated in your employment contract [1]. If you work less in an exam period or take unpaid leave, agree with your employer how that carries through to your accrual, and put it in writing.",
        },
        {
          h2: "Do holiday days expire if you don't take them?",
          p: "Statutory holiday days you haven't taken expire half a year after the calendar year in which you built them up: days from 2026 expire on 1 July 2027. A collective agreement or written agreement may provide a longer period. Days you haven't taken only lapse after five years if you couldn't take them in time, for example because of illness or because your employer made it impossible, and for days above the statutory minimum [2]. You must be able to take your statutory holiday days every year; the employer may only refuse a request on serious business grounds or because of a collective holiday, and must then allow another time [2].",
        },
        {
          h2: "What can you do if your employer isn't tracking a balance?",
          p: "Ask for an overview of your accrued and taken holiday hours. If you still have holiday hours left at the end of your employment that you can no longer take, they are paid out to you, according to the Dutch government [2]. Ask early rather than only when you leave.",
        },
        {
          h2: "Why it matters, even if you only stay a year",
          p: "Holiday days aren't a perk you “earn” by staying long enough: accrual runs from your first working day [1]. You conclude the contract with the employer, who is responsible for the agreements in it.",
        },
      ],
    },
  },
  // 18 ---------------------------------------------------------------------
  {
    slug: "studiefinanciering-en-werken-combineren",
    aud: "talent",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-8.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Studiefinanciering en werken combineren: wat betekent dat voor belasting en toeslagen?",
      en: "Combining student finance with work: what does it mean for tax and benefits?",
    },
    excerpt: {
      nl: "Werken als werkstudent raakt je studiefinanciering niet, maar mogelijk wel je toeslagen. Wat je moet weten voordat het najaar je confronteert met een naheffing.",
      en: "Working as a working student doesn't touch your student finance, but it can affect your benefits. What to know before autumn hits you with a repayment.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Studiefinanciering en werken: belasting en toeslagen",
      en: "Student finance and working: tax and benefits",
    },
    metaDescription: {
      nl: "Raakt werken je studiefinanciering? Nee, DUO kent geen bijverdiengrens. Wat wel telt: loonheffing, teruggave en toeslagen. Zo geef je je inkomen goed door.",
      en: "Does working affect your student finance? No, DUO has no earnings ceiling. What does count: payroll tax, refunds and benefits, and how to report income.",
    },
    keywords: {
      nl: [
        "studiefinanciering bijverdienen",
        "werken en toeslagen student",
        "loonheffingskorting student",
        "belasting teruggeven student",
        "inkomen doorgeven toeslagen",
      ],
      en: [
        "student finance earning extra",
        "working and benefits student",
        "payroll tax credit student",
        "student tax refund",
        "reporting income benefits",
      ],
    },
    sources: [
      {
        title: "Bijverdienen",
        publisher: "DUO",
        url: "https://duo.nl/particulier/studiefinanciering/bijverdienen.jsp",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Ik werk in loondienst",
        publisher: "Belastingdienst",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/ik-werk-in-loondienst",
        accessed: "2026-10-11",
      },
      {
        title: "Het inkomen dat telt voor toeslagen is het ‘toetsingsinkomen’",
        publisher: "Dienst Toeslagen (Belastingdienst)",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/toeslagen/hoe_werken_toeslagen/kan_ik_toeslag_krijgen/inkomen/",
        accessed: "2026-10-11",
      },
      {
        title: "Hoe zorg ik dat jullie mijn toeslag met het juiste inkomen berekenen?",
        publisher: "Dienst Toeslagen (Belastingdienst)",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/hoe-zorg-ik-dat-jullie-mijn-toeslag-met-het-juiste-inkomen-berekenen",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Je gaat werken naast je studie en vraagt je af: wat gebeurt er met je studiefinanciering, je belasting en je toeslagen? Dit zijn de regels op hoofdlijnen, met de bron erbij. Dit is precies het soort regelgeving dat verandert, dus check de actuele stand bij DUO en de Belastingdienst.",
        },
        {
          h2: "Raakt bijverdienen je studiefinanciering zelf?",
          p: "Nee. DUO meldt dat je vanaf 2020 onbeperkt mag bijverdienen en dat er geen bijverdiengrens geldt [1].",
        },
        {
          h2: "Betaal je belasting over je loon als werkstudent?",
          p: "Ja. Als je werkt, houdt je werkgever meestal alvast belasting in op je loon: de loonheffing. Je kunt een korting krijgen met de loonheffingskorting of, als je een opleiding volgt, met de studenten- en scholierenregeling, waarbij de werkgever geen of minder loonheffing inhoudt [2]. Heb je te veel betaald, dan kun je volgens DUO meestal een deel terugkrijgen via de Belastingdienst [1]. In ons artikel over loonheffingskorting en de eerste baan lees je meer.",
        },
        {
          h2: "Raakt een hoger inkomen je zorgtoeslag of huurtoeslag?",
          p: "Ja, mogelijk. Je inkomen telt mee voor de hoogte van je toeslag. Voor toeslagen telt het toetsingsinkomen: heb je een belastingaangifte gedaan, dan is dat je verzamelinkomen, anders je belastbare loon; loon uit een bijbaan en bijverdiensten tellen mee [3]. Een hoger inkomen als werkstudent kan dus invloed hebben op je toeslagen. Hoeveel, hangt af van je situatie en de actuele toeslagregels; reken dat na bij de Belastingdienst.",
        },
        {
          h2: "Hoe voorkom je een vervelende naheffing achteraf?",
          p: "Geef je inkomen door als het verandert: ook als je al toeslag krijgt en je inkomen verandert, moet je dat doorgeven, anders krijg je een verkeerd bedrag. Maak een zo goed mogelijke schatting van je jaarinkomen en geef die door via Mijn toeslagen of de app. De Dienst Toeslagen raadt aan je inkomen liever te hoog dan te laag te schatten: zo loop je minder risico dat je achteraf moet terugbetalen, en blijkt je inkomen lager, dan krijg je alsnog waar je recht op hebt [4].",
        },
        {
          h2: "Wat kun je nu al doen?",
          ul: [
            "Check via Mijn Toeslagen of je inkomensschatting nog klopt zodra je weet wat je ongeveer gaat verdienen",
            "Bewaar je loonstroken, ook als je van baan wisselt tijdens je studie",
            "Twijfel je? Vraag het bij DUO of de Belastingdienst in plaats van te gokken",
          ],
        },
      ],
      en: [
        {
          p: "You're starting work alongside your studies and wondering: what happens to my student finance, my tax and my benefits? Here are the rules in outline, with the source. This is exactly the kind of regulation that changes, so check the current position with DUO and the Tax Administration.",
        },
        {
          h2: "Does earning extra income affect your student finance itself?",
          p: "No. DUO states that from 2020 you may earn without limit and that no earnings ceiling applies [1].",
        },
        {
          h2: "Do you pay tax on your wage as a working student?",
          p: "Yes. When you work, your employer usually withholds tax from your wage in advance: payroll tax. You can get a discount through the payroll tax credit or, if you're studying, through the student and pupil scheme, under which the employer withholds no or less payroll tax [2]. If you paid too much, according to DUO you can usually get part of it back through the Tax Administration [1]. Read more in our article on the payroll tax credit and your first job.",
        },
        {
          h2: "Does a higher income affect your healthcare or rent benefit?",
          p: "Possibly. Your income counts towards the amount of your benefit. For benefits the relevant income is the toetsingsinkomen: if you filed a tax return, that's your verzamelinkomen, otherwise your taxable wage; wages from a side job and other earnings count [3]. A higher income as a working student can therefore affect your benefits. How much depends on your situation and the current benefit rules; calculate it with the Tax Administration.",
        },
        {
          h2: "How do you avoid an unpleasant repayment later?",
          p: "Report your income when it changes: even if you already receive a benefit and your income changes, you must report it, otherwise you get the wrong amount. Make the best possible estimate of your annual income and report it via Mijn toeslagen or the app. The Benefits Office advises estimating your income too high rather than too low: that way you run less risk of having to repay afterwards, and if your income turns out lower, you still get what you're entitled to [4].",
        },
        {
          h2: "What can you do right now?",
          ul: [
            "Check via Mijn Toeslagen whether your income estimate still holds once you know roughly what you'll earn",
            "Keep your payslips, even if you switch jobs during your studies",
            "In doubt? Ask DUO or the Tax Administration instead of guessing",
          ],
        },
      ],
    },
  },
  // 19 ---------------------------------------------------------------------
  {
    slug: "zzp-of-werkstudent",
    aud: "beide",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-3.jpg",
    tag: { nl: "Vergelijking", en: "Comparison" },
    title: {
      nl: "ZZP of werkstudent: wat is het verschil, en wat past bij jou?",
      en: "Freelance or working student: what's the difference, and what fits you?",
    },
    excerpt: {
      nl: "Als zzp'er factureer je, als werkstudent krijg je salaris. Dat klinkt als een detail, maar het verandert wie het risico draagt en wie de zekerheid krijgt.",
      en: "As a freelancer you invoice, as a working student you get a payslip. That sounds like a detail, but it changes who carries the risk and who gets the security.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "ZZP of werkstudent: wat is het verschil?",
      en: "Freelance or working student: what is the difference?",
    },
    metaDescription: {
      nl: "Zzp'er of werkstudent? Wie draagt het risico, wanneer is een zzp-opdracht een baan en wat verandert er op 31 december 2026 bij een uurtarief onder € 38?",
      en: "Freelancer or working student? Who carries the risk, when is a freelance assignment really a job and what changes on 31 December 2026 for rates under € 38.",
    },
    keywords: {
      nl: [
        "zzp of werkstudent",
        "schijnzelfstandigheid student",
        "rechtsvermoeden arbeidsovereenkomst",
        "zzp student uurtarief",
        "loondienst of zzp",
      ],
      en: [
        "freelance or working student",
        "false self-employment student",
        "presumption of employment contract",
        "freelance student hourly rate",
        "employee or freelancer",
      ],
    },
    sources: [
      {
        title: "Ik heb een nulurencontract. Heb ik recht op vakantiedagen en vakantiegeld? (vakantie-uren: 4 keer de uren per week, vakantiegeld minimaal 8%)",
        publisher: "Rijksoverheid",
        url: "https://rijksoverheid.nl/onderwerpen/vakantiedagen-en-vakantiegeld/vraag-en-antwoord/nulurencontract-en-vakantiedagen-en-vakantiegeld",
        accessed: "2026-10-11",
      },
      {
        title: "Loon (salaris) doorbetalen bij ziekte",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/wetten-en-regels/loon-doorbetalen-bij-ziekte/",
        accessed: "2026-10-11",
      },
      {
        title: "U heeft personeelstekort of tijdelijk veel werk",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/inhuren/u-heeft-personeelstekort-of-te-veel-werk/",
        accessed: "2026-10-11",
      },
      {
        title: "Hoeveel loon krijg ik doorbetaald als ik ziek ben?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/ziekteverzuim-van-het-werk/hoeveel-loon-krijg-ik-doorbetaald-als-ik-ziek-ben",
        accessed: "2026-10-11",
      },
      {
        title: "Laag uurtarief van zzp'er kan leiden tot arbeidsovereenkomst",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/wetswijzigingen/laag-uurtarief-van-zzper-kan-leiden-tot-arbeidsovereenkomst/",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Sommige studenten en starters overwegen om als zzp'er te gaan werken in plaats van als werkstudent, vaak omdat het flexibeler klinkt. Het is een andere constructie, maar niet automatisch een betere. Het verschil zit in wie het risico draagt en wie welke zekerheid krijgt.",
        },
        {
          h2: "Wat is het kernverschil tussen zzp en werkstudent?",
          p: "Als werkstudent ben je in loondienst: je hebt een arbeidsovereenkomst, je werkgever houdt loonheffing in, en je hebt recht op onder meer vakantie-uren [1] en loondoorbetaling bij ziekte [2]. Een zzp'er komt niet in dienst: een opdrachtgever betaalt voor een zzp'er geen personeelskosten zoals loonheffingen, pensioenpremie en vakantiegeld [3]. Je stuurt als zzp'er facturen en regelt zelf je belastingaangifte.",
        },
        {
          h2: "Wie draagt het risico bij ziekte of een rustige periode?",
          p: "Bij een werkstudentcontract met een vast aantal uren draagt de werkgever een groot deel van dat risico: bij ziekte word je doorbetaald [4]. Als zzp'er heb je die aanspraken niet; die ontstaan pas als er in feite een arbeidsovereenkomst blijkt te zijn [5]. Geen opdrachten betekent als zzp'er geen inkomen, tenzij je dat zelf hebt verzekerd.",
        },
        {
          h2: "Is zzp-werk sneller geregeld dan een werkstudentcontract?",
          p: "Voor een kortlopende, afgebakende klus kan zzp prima passen. Voor structureel, terugkerend werk mis je de zekerheid van een vast salaris en de bescherming van een arbeidsovereenkomst, terwijl het werk net zo structureel is als bij een werkstudentrol.",
        },
        {
          h2: "Mag een bedrijf een werkstudentrol zomaar als zzp-opdracht aanbieden?",
          p: "Niet zonder meer. Of er een arbeidsovereenkomst is, hangt af van de kenmerken: werk onder gezag van de opdrachtgever, loon en persoonlijke uitvoering van het werk [6]. Daarnaast komt er een nieuwe regel: bij een uurtarief lager dan € 38 geldt straks een rechtsvermoeden van een arbeidsovereenkomst. Een zzp'er kan zich daarop beroepen; de opdrachtgever moet dan bewijzen dat er geen arbeidsovereenkomst is, en lukt dat niet, dan heeft de zzp'er aanspraak op rechten zoals loondoorbetaling bij ziekte en ontslagbescherming. Het bedrag is sinds 1 januari 2026 € 38 per uur (eerst € 36) en de wijziging gaat in op 31 december 2026 [5]. Vraag advies voordat je een zzp-constructie aangaat voor iets dat op een gewone baan lijkt.",
        },
        {
          h2: "Wanneer past zzp wel goed bij een student of starter?",
          ul: [
            "Bij losse, kortlopende opdrachten zonder vaste uren of vaste werktijden",
            "Als je bewust kiest voor de vrijheid om meerdere opdrachtgevers tegelijk te hebben",
            "Als je de administratieve kant, van facturen tot belastingaangifte, aankunt naast je studie",
          ],
        },
        {
          h2: "Waarom VOIDS de voorkeur geeft aan het werkstudentmodel",
          p: "Voor structureel, relevant werk naast een studie kiest VOIDS voor een werkstudentcontract boven een zzp-constructie. Je krijgt een vast salaris en opgebouwde rechten, en een rustige maand voor het bedrijf raakt je eigen inkomen niet direct.",
        },
      ],
      en: [
        {
          p: "Some students and starters consider working as a freelancer instead of as a working student, often because it sounds more flexible. It's a different setup, but not automatically a better one. The difference lies in who carries the risk and who gets which security.",
        },
        {
          h2: "What's the core difference between freelancing and being a working student?",
          p: "As a working student you're an employee: you have an employment contract, your employer withholds payroll tax, and you have rights to, among other things, holiday hours [1] and continued pay during sickness [2]. A freelancer isn't employed: a client doesn't pay staff costs such as payroll taxes, pension contributions and holiday pay for a freelancer [3]. As a freelancer you send invoices and handle your own tax return.",
        },
        {
          h2: "Who carries the risk during illness or a quiet period?",
          p: "Under a working-student contract with a fixed number of hours, the employer carries a large part of that risk: you get paid during sickness [4]. As a freelancer you don't have those entitlements; they only arise if there turns out to be an employment contract in fact [5]. As a freelancer, no assignments means no income, unless you've insured yourself for it.",
        },
        {
          h2: "Is freelance work quicker to arrange than a working-student contract?",
          p: "For a short, bounded piece of work, freelancing can fit well. For structural, recurring work you miss the security of a fixed salary and the protection of an employment contract, while the work is just as structural as in a working-student role.",
        },
        {
          h2: "Can a company just offer a working-student role as a freelance gig?",
          p: "Not without limits. Whether there's an employment contract depends on the features: work under the client's authority, pay and personal performance of the work [6]. In addition a new rule is coming: for an hourly rate below € 38, a presumption of an employment contract will apply. A freelancer can invoke it; the client must then prove there is no employment contract, and if that fails, the freelancer is entitled to rights such as continued pay during sickness and protection against dismissal. The amount has been € 38 per hour since 1 January 2026 (initially € 36) and the change takes effect on 31 December 2026 [5]. Get advice before entering a freelance setup for something that looks like a regular job.",
        },
        {
          h2: "When does freelancing fit a student or starter?",
          ul: [
            "For loose, short-term assignments without fixed hours or fixed working times",
            "When you deliberately want the freedom to work for multiple clients at once",
            "When you can handle the admin side, from invoices to tax filing, alongside your studies",
          ],
        },
        {
          h2: "Why VOIDS prefers the working-student model",
          p: "For structural, relevant work alongside a degree, VOIDS chooses a working-student contract over a freelance setup. You get a fixed salary and accrued rights, and a quiet month for the business doesn't directly hit your own income.",
        },
      ],
    },
  },
  // 20 ---------------------------------------------------------------------
  {
    slug: "nulurencontract-vs-werkstudentcontract",
    aud: "beide",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-4.jpg",
    tag: { nl: "Vergelijking", en: "Comparison" },
    title: {
      nl: "0-urencontract vs. werkstudentcontract: wat is het verschil?",
      en: "Zero-hours contract vs. working-student contract: what's the difference?",
    },
    excerpt: {
      nl: "Een 0-urencontract geeft geen zekerheid over inkomen of rooster. Een werkstudentcontract met vaste uren wel. Wat dat in de praktijk betekent, en wat er in 2028 verandert.",
      en: "A zero-hours contract gives no certainty over income or schedule. A working-student contract with fixed hours does. What that means in practice, and what changes in 2028.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "0-urencontract vs. werkstudentcontract: verschil",
      en: "Zero-hours vs. working-student contract: the difference",
    },
    metaDescription: {
      nl: "Wat is een 0-urencontract en welke rechten heb je (oproeptermijn 4 dagen, 3 uur loon, vaste uren na een jaar)? En wat verandert er in 2028? Met bronnen.",
      en: "What is a zero-hours contract and which rights apply (4 days' notice, 3 hours' pay, fixed hours after a year)? And what changes in 2028? With sources.",
    },
    keywords: {
      nl: [
        "0-urencontract",
        "nulurencontract rechten",
        "oproepkracht oproeptermijn",
        "bandbreedtecontract 2028",
        "nulurencontract student",
      ],
      en: [
        "zero-hours contract",
        "zero-hours contract rights",
        "on-call worker notice period",
        "bandwidth contract 2028",
        "zero-hours contract student",
      ],
    },
    sources: [
      {
        title: "Welke contracten zijn er voor oproepkrachten?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/welke-contracten-zijn-er-voor-oproepkrachten",
        accessed: "2026-10-11",
      },
      {
        title: "Meer zekerheid voor mensen met een flexcontract",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/08/meer-zekerheid-voor-mensen-met-een-flexcontract",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "In vacatureteksten worden de twee weleens door elkaar gebruikt, maar ze verschillen enorm in hoeveel zekerheid je krijgt over inkomen en rooster. Hieronder wat een 0-urencontract is, welke regels erbij horen en waarom een vast aantal uren voor de meeste werkstudenten beter werkt.",
        },
        {
          h2: "Wat is een 0-urencontract precies?",
          p: "Bij een nulurencontract is geen aantal uren afgesproken: je gaat aan het werk als je werkgever je oproept. De werkgever betaalt alleen loon over de uren die je werkt, maar die afspraak moet op papier staan en geldt volgens de Rijksoverheid alleen voor de eerste 6 maanden. Daarna heb je, als je bent opgeroepen maar niet kunt werken door een oorzaak die voor risico van de werkgever komt, of als je niet wordt opgeroepen, recht op doorbetaling van je loon; een cao kan die periode van 6 maanden onder voorwaarden verlengen. Bij elke oproep heb je recht op minimaal 3 uur loon [1]. Het is een contract voor bepaalde of onbepaalde tijd, zonder afspraak over het aantal uren [1].",
        },
        {
          h2: "Wat is dan het verschil met een werkstudentcontract?",
          p: "Een goed werkstudentcontract werkt met een vast aantal uren per week, of op zijn minst een duidelijke bandbreedte, in plaats van losse oproepen. Dan weet je vooraf wat je gaat verdienen en wanneer je wordt verwacht, met ruimte om dat rond tentamens in onderling overleg tijdelijk aan te passen.",
        },
        {
          h2: "Moet een werkgever je van tevoren informeren bij een oproepcontract?",
          p: "Ja. De werkgever moet je minstens 4 kalenderdagen van tevoren oproepen, schriftelijk of elektronisch; wordt je later opgeroepen, dan ben je niet verplicht te komen. Zegt de werkgever de oproep binnen die 4 dagen af of wijzigt hij de werktijden, dan heb je recht op loon over de uren waarop je was opgeroepen. In een cao kan de oproeptermijn worden verkort tot minimaal 1 dag [1]. Wat die regel niet oplost: je weet nog steeds pas kort van tevoren of en hoeveel je werkt.",
        },
        {
          h2: "Heb je na verloop van tijd recht op vaste uren bij een oproepcontract?",
          p: "Ja. Een werkgever mag je hooguit een jaar als oproepkracht laten werken. Blijf je daarna in dienst, dan heb je recht op een vast aantal uren, minimaal de uren per maand die je de afgelopen 12 maanden gemiddeld werkte; de werkgever moet dat aanbod binnen een maand na dat jaar doen. Je mag het aanbod weigeren, maar de werkgever moet het je daarna elke 12 maanden opnieuw doen [1]. Dat is een stok achter de deur, maar je overbrugt dus wel een jaar met onzekerheid.",
        },
        {
          h2: "Waarom past een 0-urencontract niet bij de meeste werkstudentrollen?",
          ul: [
            "Geen zekerheid over inkomen maakt het combineren met studiekosten en huur lastig",
            "Geen vast rooster maakt het moeilijk om werk structureel in te plannen rond colleges en tentamens",
            "Structureel terugkerend werk past beter bij een vast aantal uren dan bij losse oproepen",
          ],
        },
        {
          h2: "Waarom VOIDS werkt met vaste uren",
          p: "VOIDS bemiddelt werkstudentrollen met een vast aantal uren per week; doorgaans gaat het om 4 tot 24 uur. Onzekerheid over inkomen en rooster hoort niet bij een werkstudentpositie.",
        },
        {
          h2: "Wat verandert er per 1 januari 2028?",
          p: "De Eerste Kamer heeft op 7 juli 2026 ingestemd met de Wet meer zekerheid flexwerkers. Volgens de Rijksoverheid gaan de belangrijkste onderdelen per 1 januari 2028 in. Oproepcontracten worden dan vervangen door een bandbreedtecontract met een minimum en maximum aantal uren, waarbij het verschil ten hoogste 30% is; werknemers kunnen oproepen boven het maximum weigeren. Er is een uitzondering voor bijbanen van mensen met een andere hoofdactiviteit, zoals AOW'ers, scholieren en studenten [2]. Stand per 11 oktober 2026.",
        },
      ],
      en: [
        {
          p: "Job ads sometimes use the two loosely, but they differ enormously in how much certainty you get over income and schedule. Below: what a zero-hours contract is, which rules apply and why fixed hours work better for most working students.",
        },
        {
          h2: "What exactly is a zero-hours contract?",
          p: "With a zero-hours contract no number of hours is agreed: you go to work when your employer calls you in. The employer only pays wages for the hours you work, but that arrangement must be on paper and, according to the Dutch government, only applies to the first 6 months. After that, if you're called in but can't work due to a cause at the employer's risk, or if you're not called in, you're entitled to continued pay; a collective agreement can extend that 6-month period under conditions. For each call-in you're entitled to at least 3 hours' pay [1]. It's a fixed-term or permanent contract without an agreement on the number of hours [1].",
        },
        {
          h2: "So what's the difference with a working-student contract?",
          p: "A good working-student contract runs on a fixed number of hours a week, or at least a clear range, instead of loose call-ins. Then you know in advance what you'll earn and when you're expected, with room to adjust that temporarily around exams by mutual agreement.",
        },
        {
          h2: "Does an employer have to give notice before calling you in?",
          p: "Yes. The employer must call you in at least 4 calendar days in advance, in writing or electronically; if you're called later, you're not obliged to come. If the employer cancels the call-in within those 4 days or changes the working times, you're entitled to pay for the hours you were called in for. A collective agreement can shorten the notice period to at least 1 day [1]. What that rule doesn't fix: you still only know shortly in advance whether, and how much, you'll work.",
        },
        {
          h2: "Do you eventually get a right to fixed hours on an on-call contract?",
          p: "Yes. An employer may have you work as an on-call worker for at most one year. If you stay employed after that, you're entitled to a fixed number of hours, at least the hours per month you worked on average over the past 12 months; the employer must make that offer within a month after that year. You may refuse the offer, but the employer must then make it again every 12 months [1]. That's a useful backstop, but it does mean bridging a year of uncertainty.",
        },
        {
          h2: "Why doesn't a zero-hours contract suit most working-student roles?",
          ul: [
            "No income certainty makes it hard to combine with study costs and rent",
            "No fixed schedule makes it hard to plan work structurally around lectures and exams",
            "Structural, recurring work fits fixed hours better than loose call-ins",
          ],
        },
        {
          h2: "Why VOIDS works with fixed hours",
          p: "VOIDS places working-student roles with a fixed number of hours a week; typically 4 to 24 hours. Uncertainty over income and schedule isn't part of a working-student role.",
        },
        {
          h2: "What changes on 1 January 2028?",
          p: "On 7 July 2026 the Senate approved the Act on more security for flexible workers. According to the Dutch government the main provisions take effect on 1 January 2028. On-call contracts will then be replaced by a bandwidth contract with a minimum and maximum number of hours, where the difference is at most 30%; employees can refuse calls above the maximum. There is an exception for side jobs of people whose main activity is something else, such as people receiving state pension, pupils and students [2]. Position as of 11 October 2026.",
        },
      ],
    },
  },
  // 21 ---------------------------------------------------------------------
  {
    slug: "hoeveel-uur-mag-een-werkstudent-maximaal-werken",
    aud: "beide",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-6.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Hoeveel uur mag een werkstudent maximaal werken?",
      en: "How many hours can a working student legally work?",
    },
    excerpt: {
      nl: "De wet stelt een harde bovengrens aan werkuren, los van wat gebruikelijk is. Wat de Arbeidstijdenwet toestaat, en waarom “gebruikelijk” en “maximaal toegestaan” twee heel andere getallen zijn.",
      en: "The law sets a hard ceiling on working hours, separate from what's typical. What the Working Hours Act allows, and why “typical” and “legal maximum” are two very different numbers.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Hoeveel uur mag een werkstudent maximaal werken?",
      en: "How many hours may a working student work at most?",
    },
    metaDescription: {
      nl: "Wat is het wettelijke maximum aan werkuren (Arbeidstijdenwet) en hoeveel uur werken studenten in de praktijk? Met cijfers van het CBS en de Rijksoverheid.",
      en: "What is the legal maximum of working hours (Working Hours Act) and how many hours do students work in practice? With CBS and Dutch government figures.",
    },
    keywords: {
      nl: [
        "hoeveel uur mag een werkstudent werken",
        "Arbeidstijdenwet maximum",
        "60 uur per week",
        "studenten werken uren per week CBS",
        "werktijden student",
      ],
      en: [
        "how many hours may a working student work",
        "Working Hours Act maximum",
        "60 hours a week",
        "students working hours CBS",
        "working hours student",
      ],
    },
    sources: [
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Wat zijn de wettelijke regels voor mijn werktijden en rusttijden?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/werktijden/wettelijke-regels-werktijden-en-rusttijden",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in de Arbeidstijdenwet over mijn werktijden?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/werktijden/vraag-en-antwoord/wat-staat-er-in-de-arbeidstijdenwet-over-mijn-werktijden",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Tussen hoeveel uur studenten werken en hoeveel uur de wet toestaat, zit een enorm gat. Werkende ho-studenten hadden in het derde kwartaal van 2023 gemiddeld een gebruikelijke arbeidsduur van 18,7 uur per week [1], en in 2024 werkte bijna twee derde van de werkende onderwijsvolgende jongeren (15 tot 27 jaar) tot 20 uur per week [2]. Het wettelijke maximum ligt via de Arbeidstijdenwet aanzienlijk hoger.",
        },
        {
          h2: "Wat is het wettelijke maximum aantal werkuren per week?",
          p: "Volgens de Rijksoverheid mag je maximaal 12 uur per dienst en maximaal 60 uur per week werken. Over een periode van 4 weken mag je gemiddeld 55 uur per week werken, en over 16 weken gemiddeld maximaal 48 uur per week. Een cao of bedrijfsregeling kan afwijken, maar je mag nooit meer dan 60 uur per week werken [3]. De Arbeidstijdenwet geldt voor werknemers van 18 jaar en ouder en ook voor stagiairs, uitzendkrachten en gedetacheerden [4].",
        },
        {
          h2: "Gelden er strengere regels voor werknemers onder de 18?",
          p: "Ja. Voor jongeren onder de 18 gelden aparte regels, zodat zij genoeg rust krijgen en geen zwaar werk doen [4]. De meeste werkstudenten zijn 18 jaar of ouder; ben je jonger, lees dan de regels bij de Rijksoverheid.",
        },
        {
          h2: "Betekent dit dat een werkstudent 48 uur per week mag werken?",
          p: "Wettelijk kan er veel, maar daar is het werkstudentmodel niet voor bedoeld. Het wettelijke maximum is een bovengrens voor werknemers, geen richtlijn voor wat verstandig is naast een studie. In de praktijk liggen de uren van studenten veel lager: gemiddeld ongeveer 18,7 uur per week [1]. Kies uren die ruimte laten voor colleges, tentamens en studievoortgang.",
        },
        {
          h2: "Kan een cao afwijkende regels stellen?",
          p: "Ja. De Rijksoverheid meldt dat in een cao afwijkende regels kunnen staan, bijvoorbeeld over pauzes en oproepdiensten [4]. Check dus niet alleen de Arbeidstijdenwet, maar ook of er een cao van toepassing is op de sector waarin je werkt.",
        },
        {
          h2: "Wat gebeurt er als je structureel meer uren maakt dan afgesproken?",
          p: "Heb je meerdere banen, dan geldt de Arbeidstijdenwet voor al je werkzaamheden samen: je telt de werktijden bij elkaar op [4]. Structureel meer uren draaien dan in je contract staat, hoeft binnen die grenzen geen wettelijk probleem te zijn, maar het is wel een signaal dat je rol qua omvang is gegroeid. Dan is het tijd om te bespreken of je contract, salaris en studiebalans nog kloppen.",
        },
        {
          h2: "Hoe gaat VOIDS met uren om?",
          p: "Het wettelijk maximum is geen streefwaarde. Bij VOIDS werken werkstudenten doorgaans 4 tot 24 uur per week, en starters 40 uur. Per rol kijken we of de uren te combineren zijn met een studie.",
        },
      ],
      en: [
        {
          p: "There's a huge gap between how many hours students work and how many the law allows. Working higher-education students had an average usual working time of 18.7 hours a week in the third quarter of 2023 [1], and in 2024 almost two thirds of working young people in education (aged 15 to 27) worked up to 20 hours a week [2]. The statutory maximum under the Working Hours Act is considerably higher.",
        },
        {
          h2: "What's the legal maximum number of working hours per week?",
          p: "According to the Dutch government you may work at most 12 hours per shift and at most 60 hours per week. Over a period of 4 weeks you may work 55 hours a week on average, and over 16 weeks an average of at most 48 hours a week. A collective agreement or company policy may deviate, but you may never work more than 60 hours a week [3]. The Working Hours Act applies to employees aged 18 and over and also to interns, temp workers and seconded staff [4].",
        },
        {
          h2: "Do stricter rules apply to employees under 18?",
          p: "Yes. Separate rules apply to people under 18, so that they get enough rest and don't do heavy work [4]. Most working students are 18 or older; if you're younger, read the rules at the Dutch government's website.",
        },
        {
          h2: "Does that mean a working student may work 48 hours a week?",
          p: "Legally a lot is possible, but that's not what the working-student model is for. The statutory maximum is an upper limit for employees, not a guideline for what's sensible alongside a degree. In practice students' hours are far lower: on average about 18.7 hours a week [1]. Choose hours that leave room for lectures, exams and academic progress.",
        },
        {
          h2: "Can a collective agreement set different rules?",
          p: "Yes. The Dutch government notes that a collective agreement may contain deviating rules, for example on breaks and on-call duties [4]. So check not just the Working Hours Act but also whether a collective agreement applies to the sector you work in.",
        },
        {
          h2: "What happens if you're structurally working more hours than agreed?",
          p: "If you have several jobs, the Working Hours Act applies to all your work together: you add up the working times [4]. Consistently working more hours than your contract states needn't be a legal problem within those limits, but it is a signal that your role has grown in scope. Time to discuss whether your contract, pay and study balance still match.",
        },
        {
          h2: "How does VOIDS deal with hours?",
          p: "The legal maximum isn't a target. At VOIDS, working students typically work 4 to 24 hours a week, and starters 40. For each role we look at whether the hours can be combined with a degree.",
        },
      ],
    },
  },
  // 22 ---------------------------------------------------------------------
  {
    slug: "wat-verdient-een-werkstudent-gemiddeld",
    aud: "talent",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-11.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Wat verdient een werkstudent gemiddeld?",
      en: "What does a working student typically earn?",
    },
    excerpt: {
      nl: "Er bestaat geen wettelijk “werkstudentsalaris”, alleen een ondergrens: het minimumloon. Wat je tarief in de praktijk bepaalt, en hoe je checkt of jouw aanbod eerlijk is.",
      en: "There's no statutory “working-student salary”, only a floor: the minimum wage. What actually determines your rate, and how to check whether your offer is fair.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Wat verdient een werkstudent? Minimumloon en tarief",
      en: "What does a working student earn? Minimum wage and rate",
    },
    metaDescription: {
      nl: "Er is geen vast werkstudentsalaris, wel een ondergrens: € 14,99 per uur per 1 juli 2026 vanaf 21 jaar. Zo check je of een aanbod eerlijk is.",
      en: "There is no fixed working-student salary, only a floor: € 14.99 an hour as of 1 July 2026 from age 21. How to check whether an offer is fair.",
    },
    keywords: {
      nl: [
        "wat verdient een werkstudent",
        "werkstudent salaris",
        "minimumloon 2026",
        "uurtarief werkstudent",
        "eerlijk aanbod werkstudent",
      ],
      en: [
        "what does a working student earn",
        "working student salary",
        "minimum wage 2026",
        "working student hourly rate",
        "fair working student offer",
      ],
    },
    sources: [
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Wat verdient een werkstudent? Er bestaat geen wettelijk “werkstudentsalaris”. Wel is er een wettelijke ondergrens, en een aantal dingen die bepalen waar jouw tarief daarboven hoort uit te komen.",
        },
        {
          h2: "Is er een minimumbedrag dat een werkstudent moet verdienen?",
          p: "Ja: het wettelijk minimumloon. Per 1 juli 2026 is dat € 14,99 bruto per uur vanaf 21 jaar; voor 15 tot en met 20 jaar gelden lagere minimumjeugdlonen per leeftijd [1]. De Rijksoverheid stelt de bedragen per 1 januari en per 1 juli vast, dus check altijd de actuele tabel in plaats van een verouderd getal uit een oud artikel. In ons artikel over het minimumloon voor werkstudenten staan alle bedragen.",
        },
        {
          h2: "Waarom verschilt het uurtarief tussen werkstudentrollen?",
          p: "Het tarief hoort vooral het niveau van het werk te volgen, niet de leeftijd of studiefase van de werkstudent: wie zelfstandig een deel van een proces runt, verdient logischerwijs meer dan wie vooral ondersteunende taken doet. Sector en regio spelen ook mee.",
        },
        {
          h2: "Is een hoger aantal uren per week ook een hoger uurtarief?",
          p: "Niet per se. Het uurtarief hoort aan te sluiten bij het werk, niet bij het aantal uren dat je beschikbaar bent. Wel hoort het tarief mee te bewegen naarmate je uren richting fulltime groeien en je verantwoordelijkheid meegroeit.",
        },
        {
          h2: "Hoe check je of een aangeboden tarief eerlijk is?",
          ul: [
            "Vergelijk het met het wettelijk minimumloon: ligt het daar net boven, of duidelijk boven?",
            "Vraag wat een vergelijkbare junior collega met een fulltime contract per uur verdient",
            "Kijk naar de aard van het werk: zelfstandige verantwoordelijkheid vraagt om een hoger tarief dan puur ondersteunend werk",
            "Wees kritisch bij een tarief dat structureel op of net boven het minimumloon blijft hangen, ongeacht hoe het werk in de praktijk groeit",
          ],
        },
        {
          h2: "Waarom een “gemiddeld” salaris geen zinvolle maatstaf is",
          p: "Een landelijk gemiddelde zegt weinig over jouw situatie, omdat het sector, regio en type werk door elkaar husselt. Een gemiddelde over alle werkstudentrollen in Nederland zegt evenveel over jouw aanbod als het gemiddelde inkomen in Nederland over jouw eigen salaris: bijna niets, tenzij je precies weet wat er in dat gemiddelde zit.",
        },
        {
          h2: "Hoe kijkt VOIDS hiernaar?",
          p: "Wij kijken per rol naar wat eerlijk is gegeven het werk, niet naar een landelijk gemiddelde. Een eerlijk tarief volgt het werk, niet de status “student”. Het wettelijk minimumloon blijft de ondergrens [1].",
        },
      ],
      en: [
        {
          p: "What does a working student earn? There's no statutory “working-student salary”. There is a legal floor, and a handful of things that determine where your rate above it should land.",
        },
        {
          h2: "Is there a minimum amount a working student has to earn?",
          p: "Yes: the statutory minimum wage. As of 1 July 2026 that's € 14.99 gross per hour from age 21; for ages 15 to 20 lower youth minimum wages apply by age [1]. The Dutch government sets the amounts per 1 January and per 1 July, so always check the current table rather than an outdated number from an old article. Our article on the minimum wage for working students lists all amounts.",
        },
        {
          h2: "Why does the hourly rate vary between working-student roles?",
          p: "The rate should mostly follow the level of the work, not the age or study stage of the working student: someone independently running part of a process naturally earns more than someone mainly doing supporting tasks. Sector and region play a part too.",
        },
        {
          h2: "Does more hours per week also mean a higher hourly rate?",
          p: "Not necessarily. The hourly rate should track the work, not how many hours you happen to be available. But the rate should move with it as your hours grow toward full-time and your responsibilities grow alongside them.",
        },
        {
          h2: "How do you check whether an offered rate is fair?",
          ul: [
            "Compare it to the statutory minimum wage: is it just above it, or clearly above it?",
            "Ask what a comparable junior colleague on a full-time contract earns per hour",
            "Look at the nature of the work: independent responsibility warrants a higher rate than purely supporting tasks",
            "Be wary of a rate that stays at or just above minimum wage however the work grows in practice",
          ],
        },
        {
          h2: "Why a “national average” isn't a useful benchmark",
          p: "A nationwide average tells you little about your own situation, because it blends every sector, region and type of work. An average across every working-student role in the Netherlands tells you about as much about your own offer as the average income in the Netherlands tells you about your own salary: almost nothing, unless you know exactly what's baked into it.",
        },
        {
          h2: "How does VOIDS look at this?",
          p: "For each role we look at what's fair given the actual work, not at a national average. A fair rate follows the work, not the status of “student”. The statutory minimum wage remains the floor [1].",
        },
      ],
    },
  },
  // 23 ---------------------------------------------------------------------
  {
    slug: "werkstudent-worden-zonder-ervaring",
    aud: "talent",
    commercialInterest: true,
    photo: "/photography/mariselle-10.jpg",
    tag: { nl: "Gids", en: "Guide" },
    title: {
      nl: "Werkstudent worden zonder ervaring: kan dat?",
      en: "Becoming a working student with no experience: is it possible?",
    },
    excerpt: {
      nl: "Ja, veel werkstudentrollen zijn juist bedoeld als eerste stap. Wat bedrijven bedoelen met “ervaring” en hoe je zonder cv vol ervaring toch overtuigt.",
      en: "Yes, many working-student roles are meant as a first step. What companies mean by “experience”, and how to convince them without a CV full of it.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudent worden zonder ervaring: kan dat?",
      en: "Becoming a working student without experience: possible?",
    },
    metaDescription: {
      nl: "Kun je werkstudent worden zonder relevante ervaring? Wat bedrijven met “ervaring gewenst” bedoelen en hoe je toch overtuigt.",
      en: "Can you become a working student without relevant experience? What “experience preferred” means and how to convince anyway.",
    },
    keywords: {
      nl: [
        "werkstudent zonder ervaring",
        "eerste werkstudentpositie",
        "ervaring gewenst vacature",
        "solliciteren zonder ervaring",
        "studievereniging cv",
      ],
      en: [
        "working student without experience",
        "first working student job",
        "experience preferred vacancy",
        "applying without experience",
        "student association CV",
      ],
    },
    sources: [
      {
        title: "Talent: community, jobboard en talentpool",
        publisher: "VOIDS",
        url: "https://voids.agency/talent",
        accessed: "2026-10-11",
      },
      {
        title: "Werving & selectie (incl. cases)",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/recruitment-selection",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "“Minimaal 1 jaar relevante ervaring” in een vacature voor een werkstudent is een ontmoedigende zin voor iemand die nog studeert. Veel werkstudentrollen zijn bedoeld als eerste stap in een vakgebied, niet als vervolgstap na ervaring die je nog niet kunt hebben. Zo kom je er zonder cv vol ervaring toch tussen.",
        },
        {
          h2: "Kun je werkstudent worden zonder relevante werkervaring?",
          p: "Ja, en bij veel werkstudentrollen is dat ook de bedoeling. De VOIDS-talentpool is volgens onze website bedoeld voor studenten en starters die hun eerste relevante ervaring nog zoeken [1]. Bedrijven zoeken dan vooral iemand die snel leert en zelfstandig aan de slag kan, niet per se iemand die het werk al kent.",
        },
        {
          h2: "Wat bedoelen bedrijven met “ervaring gewenst”?",
          p: "Vaak minder specifiek dan het klinkt: geen letterlijke werkervaring in exact dezelfde functie, maar een signaal dat je al iets hebt gedaan dat laat zien hoe je werkt. Een studievereniging waarin je verantwoordelijkheid droeg, een project dat je van nul af aan opzette of een bijbaan waarin je zelfstandig problemen oploste, kan daarom net zo goed meetellen.",
        },
        {
          h2: "Wat kun je laten zien als je geen relevante stage of baan hebt gehad?",
          ul: [
            "Verantwoordelijkheden binnen een studievereniging, commissie of sportclub",
            "Een project dat je zelfstandig hebt opgezet, ook als het klein was",
            "Vrijwilligerswerk waarin je met mensen of deadlines te maken had",
            "Concrete situaties waarin je een probleem oploste, ook buiten een werkcontext",
          ],
        },
        {
          h2: "Hoe schrijf je een matchprofiel als je nog weinig te laten zien hebt?",
          p: "Focus op wie je bent en hoe je werkt, niet op een lijst functies die je nog niet hebt gehad. Twee of drie concrete situaties die laten zien hoe je omgaat met verantwoordelijkheid, tegenslag of een deadline, zeggen meer dan een cv vol lege regels.",
        },
        {
          h2: "Moet je elke vacature negeren die “ervaring” vraagt?",
          p: "Nee: solliciteer gewoon. Een vacaturetekst beschrijft vaak een ideaalbeeld en niet een harde eis. Laat in je sollicitatie zien wat je motiveert en hoe je werkt, en stel zelf de vraag welke ervaring er echt toe doet.",
        },
        {
          h2: "Waarom VOIDS niet alleen op cv-regels selecteert",
          p: "Bij VOIDS letten we op drijfveren en werkstijl, niet alleen op wie toevallig al een stage bij een bekend bedrijf heeft gehad [2]. Dus: geen cv vol ervaring? Maak je profiel scherp en meld je aan.",
        },
      ],
      en: [
        {
          p: "“At least 1 year of relevant experience” in a vacancy for a working student is a discouraging sentence when you're still studying. Many working-student roles are meant as a first step into a field, not as the step after experience you can't have yet. Here's how to get in without a CV full of it.",
        },
        {
          h2: "Can you become a working student with no relevant experience?",
          p: "Yes, and for many working-student roles that's the intention. According to our website, the VOIDS talent pool is meant for students and starters who are still looking for their first relevant experience [1]. Companies then mainly look for someone who learns fast and can work independently, not necessarily someone who already knows the job.",
        },
        {
          h2: "What do companies mean by “experience preferred”?",
          p: "Often less specific than it sounds: not literal work experience in the exact same role, but a signal that you've already done something that shows how you work. Responsibility in a student association, a project you built from scratch or a side job where you solved problems independently can count just as much.",
        },
        {
          h2: "What can you show if you haven't had a relevant internship or job?",
          ul: [
            "Responsibilities within a student association, committee or sports club",
            "A project you set up independently, even a small one",
            "Volunteer work that involved people or deadlines",
            "Concrete situations where you solved a problem, even outside a work context",
          ],
        },
        {
          h2: "How do you write a match profile if you don't have much to show yet?",
          p: "Focus on who you are and how you work, not on a list of roles you haven't had. Two or three concrete situations that show how you handle responsibility, setbacks or a deadline say more than a CV full of empty lines.",
        },
        {
          h2: "Should you skip every vacancy that asks for experience?",
          p: "No: apply anyway. A vacancy often describes an ideal and not a hard requirement. In your application, show what motivates you and how you work, and ask yourself which experience really matters.",
        },
        {
          h2: "Why VOIDS doesn't select on CV checkboxes alone",
          p: "At VOIDS we look at motivation and working style, not only at who happened to already have an internship at a well-known company [2]. So: no CV full of experience? Sharpen your profile and sign up.",
        },
      ],
    },
  },
  // 24 ---------------------------------------------------------------------
  {
    slug: "hoe-kies-je-een-sector-als-student",
    aud: "talent",
    commercialInterest: true,
    photo: "/photography/mariselle-11.jpg",
    tag: { nl: "Carrière", en: "Career" },
    title: {
      nl: "Hoe kies je een sector als je nog geen idee hebt wat je wilt?",
      en: "How do you pick a sector when you have no idea what you want?",
    },
    excerpt: {
      nl: "“Wat wil je later worden” is de verkeerde vraag. Een praktische manier om een richting te vinden zonder dat je die meteen voor altijd hoeft vast te leggen.",
      en: "“What do you want to become” is the wrong question. A practical way to find a direction without locking it in forever.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Sector kiezen als student zonder idee: zo begin je",
      en: "Choosing a sector as a student with no idea: where to start",
    },
    metaDescription: {
      nl: "“Wat wil je later worden” is een lastige vraag. Een praktische manier om een richting te vinden door te proberen, met een werkstudentrol als start.",
      en: "“What do you want to become” is a hard question. A practical way to find a direction by trying, with a working-student role as a low-threshold start.",
    },
    keywords: {
      nl: [
        "sector kiezen student",
        "wat wil ik later worden",
        "werkstudent sector verkennen",
        "drijfveren werk",
        "carrière oriëntatie student",
      ],
      en: [
        "choosing a sector student",
        "what do I want to become",
        "explore sector working student",
        "work motivations",
        "career orientation student",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 667, geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel667/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Talent: community, jobboard en talentpool",
        publisher: "VOIDS",
        url: "https://voids.agency/talent",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "“Wat wil je later worden” is een van de meest gestelde en minst nuttige vragen die een student kan krijgen. Het veronderstelt dat er één goed antwoord bestaat. In gesprekken met studenten merken wij dat veel mensen pas ontdekken wat bij ze past door het te proberen.",
        },
        {
          h2: "Moet je je sector kiezen voordat je gaat werken?",
          p: "Nee, en dat is waar de druk vandaan komt die veel studenten voelen. Je hoeft geen definitieve keuze te maken voordat je begint met werken: een werkstudentrol is een lagedrempelige manier om een sector te verkennen zonder je er meteen voor jaren aan te binden. Een tijdelijk contract eindigt op de afgesproken einddatum [1].",
        },
        {
          h2: "Waar begin je als je echt geen idee hebt?",
          p: "Begin niet bij sectoren, begin bij wat voor werk je energie geeft: cijfers doorgronden, mensen overtuigen, dingen bouwen, structuur aanbrengen in chaos, creatief bezig zijn. Die drijfveer past bij meerdere sectoren tegelijk. Iemand die energie krijgt van structuur aanbrengen, kan net zo goed gedijen in finance als in operations of projectmanagement.",
        },
        {
          h2: "Is uitproberen echt beter dan erover nadenken?",
          p: "Vaak wel. Een paar maanden in een sector werken vertelt je meer over of het bij je past dan weken aan onderzoek en gesprekken vooraf: je ontdekt hoe het tempo voelt, wat voor mensen er werken en welk deel van het werk je minder leuk vindt.",
        },
        {
          h2: "Wat als je erachter komt dat een sector toch niet bij je past?",
          p: "Dan heb je precies de informatie te pakken die je zocht. Een werkstudentrol van een jaar in een sector die niet past, levert nog steeds ervaring, vaardigheden en een netwerk op, en je weet het voordat je afstudeert.",
        },
        {
          h2: "Hoe maak je die verkenning concreet?",
          ul: [
            "Kies een werkstudentrol op basis van het soort werk, niet alleen de sectornaam",
            "Praat met mensen die het werk al doen, en vraag naar hun dagelijkse praktijk, niet alleen hun functietitel",
            "Geef jezelf toestemming om na een jaar van richting te veranderen als het niet blijkt te passen",
            "Let op patronen: welk soort taken geeft je energie, ongeacht in welke sector je die tegenkomt",
          ],
        },
        {
          h2: "Hoe VOIDS hiermee omgaat",
          p: "Een matchprofiel dat kijkt naar wie je bent en wat je drijft, in plaats van naar een sector die je toevallig al had genoemd, maakt deze verkenning makkelijker [2]. Je hoeft niet te weten wat je wilt worden om je aan te melden.",
        },
      ],
      en: [
        {
          p: "“What do you want to become” is one of the most commonly asked and least useful questions a student can get. It assumes there's one right answer. In conversations with students we notice that many people only discover what fits them by trying it.",
        },
        {
          h2: "Do you have to pick your sector before you start working?",
          p: "No, and that's where the pressure many students feel comes from. You don't have to make a final choice before you start working: a working-student role is a low-threshold way to explore a sector without committing to it for years right away. A fixed-term contract ends on the agreed end date [1].",
        },
        {
          h2: "Where do you start if you really have no idea?",
          p: "Don't start with sectors, start with what kind of work gives you energy: digging into numbers, convincing people, building things, bringing structure to chaos, working creatively. That drive fits several sectors at once. Someone who gets energy from bringing structure can thrive just as well in finance as in operations or project management.",
        },
        {
          h2: "Is trying it out really better than thinking it through?",
          p: "Often, yes. A few months working in a sector tell you more about whether it fits than weeks of research and conversations beforehand: you discover how the pace feels, what kind of people work there and which part of the work you enjoy less.",
        },
        {
          h2: "What if you find out a sector doesn't fit you after all?",
          p: "Then you've got exactly the information you were looking for. A year-long working-student role in a sector that doesn't fit still delivers experience, skills and a network, and you know it before you graduate.",
        },
        {
          h2: "How do you make that exploration concrete?",
          ul: [
            "Choose a working-student role based on the kind of work, not just the sector's name",
            "Talk to people already doing the work, and ask about their daily reality, not just their job title",
            "Give yourself permission to change direction after a year if it turns out not to fit",
            "Watch for patterns: what kind of tasks give you energy, whichever sector you find them in",
          ],
        },
        {
          h2: "How VOIDS deals with this",
          p: "A match profile that looks at who you are and what drives you, instead of a sector you happened to mention once, makes this exploration easier [2]. You don't need to know what you want to become to sign up.",
        },
      ],
    },
  },
  // 25 ---------------------------------------------------------------------
  {
    slug: "bedrijfscultuur-herkennen-in-een-sollicitatiegesprek",
    aud: "talent",
    commercialInterest: true,
    photo: "/photography/mariselle-10.jpg",
    tag: { nl: "Gids", en: "Guide" },
    title: {
      nl: "Hoe herken je bedrijfscultuur tijdens een sollicitatiegesprek?",
      en: "How do you spot company culture during a job interview?",
    },
    excerpt: {
      nl: "Een gesprek is geen eenrichtingsverkeer. Concrete signalen en concrete vragen om te zien of een cultuur echt is zoals de vacaturetekst belooft.",
      en: "An interview isn't one-way traffic. Concrete signals and concrete questions to see whether a culture is what the vacancy promises.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Bedrijfscultuur herkennen in een sollicitatiegesprek",
      en: "Spotting company culture in a job interview",
    },
    metaDescription: {
      nl: "Hoe herken je de cultuur van een bedrijf in een sollicitatiegesprek? Concrete signalen en vragen om te stellen voordat je tekent.",
      en: "How do you spot a company's culture during a job interview? Concrete signals and questions to ask before you sign.",
    },
    keywords: {
      nl: [
        "bedrijfscultuur herkennen",
        "vragen stellen sollicitatiegesprek",
        "cultuurfit",
        "werkstudent gesprek",
        "vacaturetekst cultuur",
      ],
      en: [
        "spot company culture",
        "questions to ask in an interview",
        "culture fit",
        "working student interview",
        "job posting culture",
      ],
    },
    sources: [
      {
        title: "Werving & selectie (incl. cases)",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/recruitment-selection",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een sollicitatiegesprek wordt vaak gezien als een test die jij moet doorstaan, terwijl het net zo goed een kans is om te testen of een bedrijf bij jou past. Bedrijfscultuur lees je niet af aan een vacaturetekst vol woorden als “informele sfeer” en “platte organisatie”; die zeggen weinig. Je herkent haar aan een paar concrete signalen tijdens het gesprek zelf.",
        },
        {
          h2: "Kun je bedrijfscultuur echt beoordelen in één gesprek van dertig minuten?",
          p: "Niet volledig, maar wel gedeeltelijk. Je krijgt geen compleet beeld, maar wel signalen: hoe mensen over collega's praten, hoe ze reageren op een kritische vraag, of het een gesprek is of een eenrichtingsverhoor. Die signalen geven meer informatie dan de marketingtaal op een website.",
        },
        {
          h2: "Op welke concrete signalen let je tijdens het gesprek?",
          ul: [
            "Praat de interviewer met plezier over het team, of vooral in algemene, gerepeteerde termen?",
            "Wordt er concreet verteld hoe een gewone werkdag of -week eruitziet, of blijft het bij abstracte woorden als “dynamisch”?",
            "Is er ruimte voor jouw vragen, of voelt het gesprek eenzijdig?",
            "Reageert de interviewer ontspannen op een kritische vraag, of ontwijkend?",
          ],
        },
        {
          h2: "Welke vragen stel je om voorbij de standaardantwoorden te komen?",
          p: "Vraag niet “hoe is de cultuur hier”, want dat levert bijna altijd een gerepeteerd antwoord op. Vraag iets concreets: “Wat deed de laatste werkstudent hier precies in de eerste maand?” of “Kun je een moment noemen waarop iets niet volgens plan liep, en hoe ging het team daarmee om?”. Concrete vragen dwingen concrete antwoorden af in plaats van marketingzinnen.",
        },
        {
          h2: "Wat betekent het als een bedrijf geen concreet antwoord kan geven?",
          p: "Een bedrijf dat een werkstudentrol serieus heeft doordacht, kan vertellen hoe de eerste maand eruitziet, wie het aanspreekpunt is en wat een normale werkweek inhoudt. Blijft het antwoord vaag, dan is de rol misschien nog niet goed uitgedacht. Vraag door voordat je tekent.",
        },
        {
          h2: "Hoe zwaar laat je het gesprek meewegen ten opzichte van reviews of via-via-informatie?",
          p: "Combineer ze. Een gesprek geeft je een directe indruk, reviews geven je een patroon over tijd, en iemand die er werkt of heeft gewerkt geeft je het eerlijkste beeld. Geen van de drie is compleet, maar samen geven ze een veel realistischer plaatje dan de vacaturetekst alleen.",
        },
        {
          h2: "Hoe VOIDS bedrijven leert kennen",
          p: "Bij VOIDS begint de werving met een intake waarin we de rol, de cultuur en de groeifase van het bedrijf doornemen [1]. Zo heeft een kandidaat vooraf een realistischer beeld.",
        },
      ],
      en: [
        {
          p: "A job interview is often seen as a test you have to pass, when it's just as much a chance to test whether a company fits you. You can't read company culture from a vacancy full of words like “informal atmosphere” and “flat organisation”; they say little. You spot it in a handful of concrete signals during the conversation itself.",
        },
        {
          h2: "Can you really judge company culture in one thirty-minute interview?",
          p: "Not completely, but partially. You won't get a full picture, but you'll get signals: how people talk about colleagues, how they react to a critical question, whether it's a conversation or a one-sided interrogation. Those signals give more information than the marketing language on a website.",
        },
        {
          h2: "What concrete signals should you look for during the interview?",
          ul: [
            "Does the interviewer talk about the team with genuine enthusiasm, or mostly in general, rehearsed terms?",
            "Do they describe what a normal working day or week looks like, or does it stay at abstract words like “dynamic”?",
            "Is there room for your questions, or does the conversation feel one-sided?",
            "Does the interviewer respond calmly to a critical question, or evasively?",
          ],
        },
        {
          h2: "What questions get you past the standard answers?",
          p: "Don't ask “what's the culture like here”, because that almost always gets a rehearsed answer. Ask something concrete: “What did the last working student here actually do in their first month?” or “Can you tell me about a time something didn't go to plan, and how the team handled it?”. Concrete questions force concrete answers instead of marketing lines.",
        },
        {
          h2: "What does it mean if a company can't give a concrete answer?",
          p: "A company that has really thought through a working-student role can tell you what the first month looks like, who the point of contact is and what a normal working week involves. If the answer stays vague, the role may not be properly thought through yet. Ask follow-up questions before you sign.",
        },
        {
          h2: "How much weight should an interview carry against reviews or word of mouth?",
          p: "Combine them. An interview gives you a direct impression, reviews give you a pattern over time, and someone who works or has worked there gives you the most honest picture. None of the three is complete, but together they paint a far more realistic picture than the vacancy alone.",
        },
        {
          h2: "How VOIDS gets to know companies",
          p: "At VOIDS, recruitment starts with an intake in which we go through the company's role, culture and growth stage [1]. That way a candidate has a more realistic picture beforehand.",
        },
      ],
    },
  },
  // 26 ---------------------------------------------------------------------
  {
    slug: "van-werkstudent-naar-vaste-baan",
    aud: "talent",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/mariselle-9.jpg",
    tag: { nl: "Carrière", en: "Career" },
    title: {
      nl: "Van werkstudent naar vaste baan: hoe pak je die overstap aan?",
      en: "From working student to permanent job: how do you make that jump?",
    },
    excerpt: {
      nl: "Veel werkstudenten stromen door bij hetzelfde bedrijf, maar dat gaat niet vanzelf. Wat je zelf kunt doen om van tijdelijke rol naar starterscontract te gaan, en wanneer je beter elders kijkt.",
      en: "Plenty of working students move into a permanent role at the same company, but it doesn't happen on its own. What you can do to go from a temporary role to a starter contract, and when to look elsewhere.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Van werkstudent naar vaste baan: zo pak je het aan",
      en: "From working student to permanent job: how to do it",
    },
    metaDescription: {
      nl: "Doorstromen naar een vaste baan gaat niet vanzelf. Wat je zelf kunt doen, wat ketenregeling en transitievergoeding betekenen en wanneer je elders kijkt.",
      en: "Moving from working student to permanent job isn't automatic. What you can do, what the chain rule and transition payment mean and when to look elsewhere.",
    },
    keywords: {
      nl: [
        "van werkstudent naar vaste baan",
        "doorstromen werkstudent",
        "starterscontract",
        "contract afloop werkstudent",
        "transitievergoeding tijdelijk contract",
      ],
      en: [
        "from working student to permanent job",
        "working student progression",
        "starter contract",
        "working student contract ends",
        "transition payment fixed-term contract",
      ],
    },
    sources: [
      {
        title: "Voor bedrijven: werkstudenten, cases en werkwijze",
        publisher: "VOIDS",
        url: "https://voids.agency/companies",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668 (aanzegplicht), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 673 (transitievergoeding), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel673/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Heb ik recht op een transitievergoeding als ik word ontslagen?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/ontslag/vraag-en-antwoord/heb-ik-recht-op-een-vergoeding-als-ik-word-ontslagen",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Afstuderen hoeft niet te betekenen dat je weer bij nul begint met solliciteren. In de cases op de VOIDS-website groeide bij HotelPlanner de eerste werkstudent door naar een vaste rol, en kreeg bij The Longevity Store één van de twee Founder's Associates binnen drie maanden een vast aanbod [1]. Dat gaat niet vanzelf, maar je kunt er zelf actief op sturen.",
        },
        {
          h2: "Stromen werkstudenten automatisch door naar een vaste baan?",
          p: "Nee. Maar je hebt wel een voorsprong: een bedrijf dat al maanden of jaren met je heeft gewerkt, weet hoe je werkt, wat je kan en of je bij het team past. Dat is informatie die een externe procedure in een paar gesprekken probeert te achterhalen. Een aanbod is het daarmee nog niet.",
        },
        {
          h2: "Wanneer breng je het gesprek over doorstroom ter sprake?",
          p: "Eerder dan je denkt, en niet pas in de laatste maand van je studie. Breng het zes tot negen maanden voor je afstudeert ter sprake, zodat een bedrijf tijd heeft om budget en een rol te plannen.",
        },
        {
          h2: "Wat kun je zelf doen om je kansen te vergroten?",
          ul: [
            "Vraag actief om meer verantwoordelijkheid naarmate je langer meedraait, in plaats van te wachten tot het je wordt aangeboden",
            "Maak je bijdrage zichtbaar: leg vast wat je hebt opgepakt en welk resultaat dat opleverde",
            "Wees duidelijk over je eigen tijdlijn, zodat een bedrijf niet wordt overvallen door je afstuderen",
            "Vraag concreet naar het traject: is doorstroom naar een vast contract iets wat dit bedrijf eerder heeft gedaan, en hoe zag dat eruit?",
          ],
        },
        {
          h2: "Wat als een bedrijf geen concreet aanbod doet?",
          p: "Vraag ernaar in plaats van te blijven wachten. Krijg je een duidelijk “nee”, of blijft het antwoord vaag? Dan is dat informatie: begin op tijd elders te kijken.",
        },
        {
          h2: "Is doorstromen bij hetzelfde bedrijf altijd de beste keuze?",
          p: "Niet per se. Doorstromen bespaart wervingstijd en onzekerheid, maar is alleen een goede keuze als de rol ook groeit in verantwoordelijkheid en salaris. Een “vast contract” dat verder identiek is aan je werkstudentrol, alleen met meer uren, is geen promotie. Het is dezelfde baan met een langere werkweek.",
        },
        {
          h2: "Wat zijn je rechten als je tijdelijke contract afloopt?",
          p: "Een tijdelijk contract eindigt op de einddatum. Bij een contract van zes maanden of langer moet je werkgever je uiterlijk een maand van tevoren schriftelijk laten weten of het wordt voortgezet [2]. Na meer dan drie tijdelijke contracten, of als die contracten samen (tussenpozen van ten hoogste zes maanden inbegrepen) meer dan 36 maanden beslaan, geldt het laatste contract als voor onbepaalde tijd [3]. Verlengt je werkgever je contract niet, dan kan er een transitievergoeding verschuldigd zijn: een derde maandloon per dienstjaar, tenzij je jonger dan 18 bent en gemiddeld ten hoogste twaalf uur per week werkte [4]. Weiger je zelf een verlenging, dan heb je alleen recht op een vergoeding bij ernstig verwijtbaar handelen van je werkgever [5].",
        },
      ],
      en: [
        {
          p: "Graduating doesn't have to mean starting the job search from zero. In the cases on the VOIDS website, at HotelPlanner the first working student grew into a permanent role, and at The Longevity Store one of the two Founder's Associates got a permanent offer within three months [1]. It doesn't happen on its own, but you can actively steer it.",
        },
        {
          h2: "Do working students automatically move into a permanent job?",
          p: "No. But you do have a head start: a company that has worked with you for months or years knows how you work, what you can do and whether you fit the team. That's information an external process tries to find out in a couple of interviews. It doesn't make an offer a given, though.",
        },
        {
          h2: "When do you raise the conversation about a permanent role?",
          p: "Earlier than you think, and not just in your last month of studying. Bring it up six to nine months before you graduate, so the company has time to plan budget and a role.",
        },
        {
          h2: "What can you do yourself to improve your odds?",
          ul: [
            "Actively ask for more responsibility the longer you're there, instead of waiting for it to be offered",
            "Make your contribution visible: keep track of what you took on and what it delivered",
            "Be clear about your own timeline, so the company isn't caught off guard by your graduation",
            "Ask directly about the process: has this company moved working students into permanent roles before, and what did that look like?",
          ],
        },
        {
          h2: "What if a company doesn't make a concrete offer?",
          p: "Ask instead of waiting it out. Do you get a clear “no”, or does the answer stay vague? Then that's information: start looking elsewhere in good time.",
        },
        {
          h2: "Is staying at the same company always the best choice?",
          p: "Not necessarily. Staying saves job-search time and uncertainty, but it's only a good choice if the role also grows in responsibility and pay. A “permanent contract” that's otherwise identical to your working-student role, just with more hours, isn't a promotion. It's the same job with a longer week.",
        },
        {
          h2: "What are your rights when your fixed-term contract ends?",
          p: "A fixed-term contract ends on the end date. For a contract of six months or longer your employer must tell you in writing, at the latest one month in advance, whether it will be continued [2]. After more than three fixed-term contracts, or if those contracts together (gaps of at most six months included) cover more than 36 months, the last contract counts as permanent [3]. If your employer doesn't extend your contract, a transition payment may be due: one third of the monthly wage per year of service, unless you're under 18 and worked on average at most twelve hours a week [4]. If you yourself refuse an extension, you only have a right to payment in case of seriously culpable conduct by your employer [5].",
        },
      ],
    },
  },
  // 27 ---------------------------------------------------------------------
  {
    slug: "kosten-werkstudent-vs-starter",
    aud: "bedrijf",
    commercialInterest: true,
    legalTopic: true,
    photo: "/photography/mariselle-7.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Wat kost een werkstudent vergeleken met een fulltime starter?",
      en: "What does a working student cost compared to a full-time starter?",
    },
    excerpt: {
      nl: "Minder salaris is niet het hele verhaal: ook werkgeverslasten en risico verschillen. Een eerlijke rekensom, inclusief wat een verkeerde keuze je uiteindelijk kost.",
      en: "Lower salary isn't the whole story: employer costs and risk differ too. A fair breakdown, including what the wrong choice ends up costing you.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Kosten werkstudent vs. fulltime starter vergeleken",
      en: "Working student vs. full-time starter: cost comparison",
    },
    metaDescription: {
      nl: "Wat kost een werkstudent vergeleken met een starter? Minimumloon, vakantiegeld, hoge of lage WW-premie en transitievergoeding in een eerlijke rekensom.",
      en: "What does a working student cost versus a starter? Minimum wage, holiday pay, high or low unemployment premium and transition payment, calculated honestly.",
    },
    keywords: {
      nl: [
        "kosten werkstudent",
        "werkstudent of starter kosten",
        "WW-premie tijdelijk contract",
        "werkgeverslasten parttime",
        "transitievergoeding kosten",
      ],
      en: [
        "cost of a working student",
        "working student or starter cost",
        "unemployment premium fixed-term contract",
        "employer costs part-time",
        "transition payment cost",
      ],
    },
    sources: [
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Stappenplan personeel aannemen",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/stappenplan-personeel-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Premiedifferentiatie WW: lage en hoge AWf-premie",
        publisher: "Belastingdienst",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/personeel-en-loon/content/premiedifferentiatie-ww-lage-en-hoge-ww-premie",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 667, geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel667/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Wanneer eindigt mijn arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/wanneer-wordt-mijn-arbeidsovereenkomst-beeindigd",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 673 (transitievergoeding), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel673/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668 (aanzegplicht), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 672 (opzegtermijnen), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel672/afdrukken",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een werkstudent kost een bedrijf in totaal minder dan een fulltime starter, omdat je minder uren inkoopt. Dat is niet het hele verhaal: ook werkgeverslasten, flexibiliteit en risico verschillen, en die bepalen of een werkstudent voor jouw situatie kostenefficiënt is. Controleer bedragen en percentages altijd bij de bron.",
        },
        {
          h2: "Wat is het directe kostenverschil tussen een werkstudent en een fulltime starter?",
          p: "Het grootste verschil zit in de uren. Een rekenvoorbeeld tegen het minimumloon van € 14,99 bruto per uur (per 1 juli 2026, vanaf 21 jaar [1]): 20 uur per week is € 299,80 bruto per week, 40 uur is € 599,60, exclusief vakantiegeld en werkgeverslasten. Het uurtarief hoeft dus niet lager te zijn; je koopt alleen minder tijd in.",
        },
        {
          h2: "Zijn de werkgeverslasten ook lager bij een werkstudent?",
          p: "Grotendeels naar rato, maar niet helemaal. Ondernemersplein noemt als verplichte kosten onder meer het minimumloon, minimaal 8% vakantiegeld en de loonheffingen: premies voor volksverzekeringen en werknemersverzekeringen en de inkomensafhankelijke bijdrage Zorgverzekeringswet; een pensioenregeling is alleen verplicht via een bedrijfstakpensioenfonds of cao [2]. De Belastingdienst noemt voor 2026 een lage AWf-premie (WW) van 2,74% en een hoge van 7,74%. De lage premie geldt voor een schriftelijk contract voor onbepaalde tijd dat geen oproepcontract is; een tijdelijk contract valt dus in de regel onder de hoge premie. Uitzondering: voor een werknemer jonger dan 21 die maximaal 48 uur per vier weken of 52 uur per maand wordt betaald, geldt altijd de lage premie [3]. Welke premie voor jou geldt, hangt af van de contractvorm en leeftijd; reken het na met je salarisadministratie.",
        },
        {
          h2: "Hoe verschilt het risico tussen de twee?",
          p: "Een tijdelijk contract eindigt op de einddatum [4], terwijl een werkgever een contract voor onbepaalde tijd niet zomaar kan opzeggen: bij bedrijfseconomische redenen of langdurige arbeidsongeschiktheid is bijvoorbeeld toestemming van het UWV nodig [5]. In dat opzicht is een werkstudentcontract flexibeler. Maar ook bij een tijdelijk contract kan bij niet-verlenging een transitievergoeding verschuldigd zijn: een derde maandloon per dienstjaar [6], en voor tijdelijke contracten gelden de ketenregeling en aanzegplicht [7][8]. De opzegtermijn voor de werkgever is volgens de wet één maand bij een dienstverband van korter dan vijf jaar [9].",
        },
        {
          h2: "Wanneer is een werkstudent minder kostenefficiënt dan het lijkt?",
          p: "Wie een werkstudent onderbetaalt ten opzichte van het niveau van het werk, bespaart op papier een paar euro per uur. Reken dan ook door wat het kost als iemand vertrekt: opnieuw werven en inwerken. Onder het minimumloon betalen mag bovendien niet [1].",
        },
        {
          h2: "Een simpele rekensom om zelf te maken",
          ul: [
            "Bereken het uurtarief los van het aantal uren: is het vergelijkbaar met wat een junior fulltime collega verdient?",
            "Tel loonheffingen en premies mee, inclusief het verschil tussen de lage en hoge AWf-premie voor jouw contractvorm",
            "Tel werving- en inwerktijd mee, niet alleen het salaris",
            "Reken een eventuele transitievergoeding bij niet-verlengen mee",
            "Kijk naar de aard van het werk: is het structureel genoeg om op termijn een starter te rechtvaardigen, of past het beter bij minder uren voor langere tijd?",
          ],
        },
        {
          h2: "Waarom dit meer is dan een kostenvraagstuk",
          p: "Een werkstudent is geen prijsargument tegenover een starter, maar een andere manier om hetzelfde soort werk te organiseren, met een ander risicoprofiel. Kies dus niet op prijs, en wees net zo kritisch op onderbetaling als op de verkeerde contractvorm voor het werk dat er ligt.",
        },
      ],
      en: [
        {
          p: "A working student costs a company less in total than a full-time starter, because you buy fewer hours. That isn't the whole story: employer costs, flexibility and risk differ too, and those decide whether a working student is cost-efficient for your situation. Always check amounts and percentages at the source.",
        },
        {
          h2: "What's the direct cost difference between a working student and a full-time starter?",
          p: "The biggest difference is in hours. An illustration at the minimum wage of € 14.99 gross per hour (as of 1 July 2026, from age 21 [1]): 20 hours a week is € 299.80 gross per week, 40 hours is € 599.60, excluding holiday pay and employer costs. The hourly rate needn't be lower; you just buy less time.",
        },
        {
          h2: "Are employer costs also lower for a working student?",
          p: "Largely proportionally, but not entirely. The government's business portal lists as mandatory costs, among others, the minimum wage, at least 8% holiday pay and the payroll taxes: contributions for national insurance and employee insurance schemes and the income-related contribution under the Health Insurance Act; a pension scheme is only mandatory via an industry pension fund or collective agreement [2]. For 2026 the Tax Administration lists a low AWf (unemployment) premium of 2.74% and a high one of 7.74%. The low premium applies to a written contract for an indefinite period that isn't an on-call contract; a fixed-term contract therefore generally falls under the high premium. Exception: for an employee younger than 21 who is paid at most 48 hours per four weeks or 52 hours per month, the low premium always applies [3]. Which premium applies to you depends on the contract type and age; check with your payroll administration.",
        },
        {
          h2: "How does the risk differ between the two?",
          p: "A fixed-term contract ends on the end date [4], whereas an employer can't simply terminate a permanent contract: for business-economic reasons or long-term incapacity for work, for example, UWV permission is needed [5]. In that respect a working-student contract is more flexible. But with a fixed-term contract too, a transition payment may be due on non-renewal: one third of the monthly wage per year of service [6], and the chain rule and notice obligation apply to fixed-term contracts [7][8]. The employer's notice period is, by law, one month for employment of less than five years [9].",
        },
        {
          h2: "When is a working student less cost-efficient than it looks?",
          p: "If you underpay a working student relative to the level of the work, you save a few euros an hour on paper. Now work out what it costs when someone leaves: recruiting and onboarding all over again. Paying below the minimum wage isn't allowed anyway [1].",
        },
        {
          h2: "A simple calculation to run yourself",
          ul: [
            "Work out the hourly rate separately from the number of hours: is it comparable to what a full-time junior colleague earns?",
            "Count payroll taxes and contributions, including the difference between the low and high AWf premium for your contract type",
            "Count recruiting and onboarding time, not just the salary",
            "Include any transition payment on non-renewal",
            "Look at the nature of the work: is it structural enough to justify a starter down the line, or does it fit better as fewer hours over a longer period?",
          ],
        },
        {
          h2: "Why this is more than a cost question",
          p: "A working student isn't a price argument against a starter but a different way of organising the same kind of work, with a different risk profile. So don't choose on price, and be just as critical of underpayment as of the wrong contract type for the work at hand.",
        },
      ],
    },
  },
  // 28 ---------------------------------------------------------------------
  {
    slug: "vacaturetekst-die-junior-talent-aanspreekt",
    aud: "bedrijf",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/mariselle-4.jpg",
    tag: { nl: "Gids", en: "Guide" },
    title: {
      nl: "Zo schrijf je een vacaturetekst die junior talent echt aanspreekt",
      en: "How to write a job posting that actually speaks to junior talent",
    },
    excerpt: {
      nl: "Een lijst eisen trekt geen goede kandidaten aan, het houdt ze buiten de deur. Wat wél werkt in een vacaturetekst voor werkstudenten en starters.",
      en: "A list of requirements doesn't draw good candidates in, it keeps them out. What does work in a vacancy for working students and starters.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Vacaturetekst voor junior talent: zo schrijf je hem",
      en: "Job posting for junior talent: how to write it",
    },
    metaDescription: {
      nl: "Een vacaturetekst die werkstudenten en starters aanspreekt: werk, salaris en uren concreet. Met de loontransparantierichtlijn en CBS-cijfers.",
      en: "A job posting that appeals to working students and starters: concrete work, pay and hours. With the pay transparency directive and CBS figures.",
    },
    keywords: {
      nl: [
        "vacaturetekst junior",
        "vacature werkstudent schrijven",
        "salaris in vacature",
        "vacature schrijven student",
        "junior vacaturetekst tips",
      ],
      en: [
        "junior job posting",
        "write working student vacancy",
        "salary in job ad",
        "write vacancy student",
        "junior job posting tips",
      ],
    },
    sources: [
      {
        title: "Richtlijn (EU) 2023/970 ter versterking van het beginsel van gelijke beloning (artikel 5)",
        publisher: "EUR-Lex (Europese Unie)",
        url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32023L0970",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Meer openheid over loonkloof tussen mannen en vrouwen",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/05/21/meer-openheid-over-loonkloof-tussen-mannen-en-vrouwen",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Veel vacatureteksten voor junior rollen lezen alsof ze voor een senior functie zijn geschreven: een lange lijst eisen, vage bedrijfsomschrijvingen en een functietitel die weinig zegt. Een tekst die laat zien wat het werk inhoudt en wie erachter zit, doet het beter bij iemand die net begint.",
        },
        {
          h2: "Waarom werkt een lange eisenlijst averechts bij junior vacatures?",
          p: "Bij een junior rol, waar per definitie nog weinig ervaring wordt verwacht, is een lange lijst eisen vooral een drempel, ook als die eisen eigenlijk “fijn om te hebben” waren. Schrap wat niet echt nodig is, en zet erbij wat iemand in de rol kan leren.",
        },
        {
          h2: "Wat moet er in plaats van een eisenlijst centraal staan?",
          p: "Beschrijf het werk zelf: wat doet iemand in een gewone week, met wie werkt diegene samen, en welke besluiten mag iemand na een paar maanden zelfstandig nemen. Dat is precies de informatie die een kandidaat nodig heeft om te beoordelen of de rol past, en precies de informatie die de meeste vacatureteksten overslaan.",
        },
        {
          h2: "Hoe specifiek moet een vacaturetekst zijn over salaris en uren?",
          p: "Zo specifiek mogelijk. Noem een concreet uurtarief of een duidelijke bandbreedte, en het aantal uren per week, in plaats van “marktconform”. De Europese loontransparantierichtlijn geeft sollicitanten het recht om vóór het gesprek informatie te krijgen over de aanvangsbeloning of de bandbreedte, bijvoorbeeld in een gepubliceerde vacature [1]; het Nederlandse wetsvoorstel is op 21 mei 2026 ingediend en moet nog worden aangenomen [2]. Het salaris kan niet onder het wettelijk minimumloon liggen [3].",
        },
        {
          h2: "Wat trekt junior talent aan, buiten salaris?",
          p: "Volgens het CBS noemden jonge werknemers (15 tot 27 jaar) in 2024 goede leidinggevenden, een goed salaris en werkzekerheid als belangrijkste arbeidsvoorwaarden; onderwijsvolgenden vonden vaker dan anderen de mogelijkheid om zelf werktijden te bepalen (84% tegenover 74%) en om in deeltijd te werken (81% tegenover 68%) belangrijk [4]. Wat je daarvan in je vacaturetekst kunt vertalen:",
          ul: [
            "Een duidelijk beeld van begeleiding: wie is het aanspreekpunt, en hoe ziet de eerste maand eruit",
            "Duidelijkheid over uren en flexibiliteit rond tentamens",
            "Concrete voorbeelden van wat een werkstudent in deze rol doet",
            "Ruimte voor groei binnen de rol, in plaats van een baan die er na een jaar nog precies zo uitziet",
            "Een toon die past bij hoe het team daadwerkelijk communiceert",
          ],
        },
        {
          h2: "Hoe lang moet een goede junior vacaturetekst zijn?",
          p: "Korter dan je denkt. Laat in een paar alinea's zien wat het werk inhoudt, wat het betaalt en wie erachter zit, in plaats van een pagina vol bedrijfswaarden en eisen. Zet de belangrijkste informatie bovenaan.",
        },
        {
          h2: "Hoe VOIDS bedrijven helpt bij deze tekst",
          p: "VOIDS helpt bedrijven vacatureteksten te schrijven die concreet en eerlijk zijn over werk, salaris en uren. Beschrijf daarbij de rol, de uren en de flexibiliteit rond colleges, en niet de kandidaat die je voor je ziet.",
        },
      ],
      en: [
        {
          p: "Many vacancies for junior roles read as if they were written for a senior position: a long list of requirements, vague company blurbs and a job title that says little. A text that shows what the work involves and who's behind it works better for someone just starting out.",
        },
        {
          h2: "Why does a long requirements list backfire on junior vacancies?",
          p: "In a junior role, where limited experience is expected by definition, a long list of requirements is mostly a hurdle, even when those requirements were “nice to have”. Cut what isn't really needed, and add what someone can learn in the role.",
        },
        {
          h2: "What should take the place of a requirements list?",
          p: "Describe the work itself: what does someone do in a typical week, who do they work with, and what decisions can they make independently after a few months. That's exactly the information a candidate needs to judge whether the role fits, and exactly the information most vacancies skip.",
        },
        {
          h2: "How specific should a vacancy be about pay and hours?",
          p: "As specific as possible. State a concrete hourly rate or a clear range, and the number of hours a week, instead of “competitive”. The EU pay transparency directive gives applicants the right to receive, before the interview, information about the starting pay or range, for example in a published job ad [1]; the Dutch bill was submitted on 21 May 2026 and still has to be adopted [2]. The salary can't be below the statutory minimum wage [3].",
        },
        {
          h2: "What attracts junior talent, beyond salary?",
          p: "According to CBS, in 2024 young employees (aged 15 to 27) named good managers, a good salary and job security as the most important working conditions; young people in education more often than others found it important to set their own working hours (84% versus 74%) and to work part-time (81% versus 68%) [4]. What you can translate from that into your vacancy:",
          ul: [
            "A clear picture of guidance: who the point of contact is, and what the first month looks like",
            "Clarity about hours and flexibility around exams",
            "Concrete examples of what a working student in this role does",
            "Room to grow within the role, instead of a job that looks exactly the same after a year",
            "A tone that matches how the team actually communicates",
          ],
        },
        {
          h2: "How long should a good junior vacancy be?",
          p: "Shorter than you think. Show in a few paragraphs what the work involves, what it pays and who's behind it, instead of a page full of company values and requirements. Put the most important information at the top.",
        },
        {
          h2: "How VOIDS helps companies with this text",
          p: "VOIDS helps companies write vacancies that are concrete and honest about work, pay and hours. Describe the role, the hours and the flexibility around lectures, and not the candidate you have in mind.",
        },
      ],
    },
  },
  // 29 ---------------------------------------------------------------------
  {
    slug: "werkstudenten-inzetten-tijdens-een-groeifase",
    aud: "bedrijf",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/mariselle-2.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Werkstudenten inzetten tijdens een groeifase: hoe pak je dat aan?",
      en: "Using working students during a growth phase: how do you approach it?",
    },
    excerpt: {
      nl: "Snelle groei vraagt om capaciteit die meebeweegt, niet om vaste hires voor werk waarvan je nog niet weet of het blijft. Waarom werkstudenten daar goed bij passen, en waar de grenzen liggen.",
      en: "Fast growth needs capacity that flexes, not permanent hires for work you don't yet know will stick around. Why working students fit well there, and where the limits are.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudenten inzetten tijdens een groeifase",
      en: "Using working students during a growth phase",
    },
    metaDescription: {
      nl: "Passen werkstudenten bij een scale-up in groeifase? Waar het werkt, de risico's (ketenregeling, kennisverlies) en wanneer je overstapt op starters.",
      en: "Do working students fit a scale-up in a growth phase? Where it works, the risks (chain rule, knowledge loss) and when to switch to starters.",
    },
    keywords: {
      nl: [
        "werkstudenten scale-up",
        "werkstudenten groeifase",
        "nieuwe markt werkstudent",
        "kennisoverdracht werkstudent",
        "van werkstudent naar starter",
      ],
      en: [
        "working students scale-up",
        "working students growth phase",
        "new market working student",
        "knowledge transfer working student",
        "from working student to starter",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 667, geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel667/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Voor bedrijven: werkstudenten, cases en werkwijze",
        publisher: "VOIDS",
        url: "https://voids.agency/companies",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een scale-up in groeifase heeft vaak meer werk dan mensen, maar niet altijd genoeg zekerheid over welke rollen structureel blijven om meteen fulltime te werven. Werkstudenten passen bij dat probleem: capaciteit die kan meebewegen met de groei, zonder dat je vooruit hoeft te lopen op beslissingen die je nog niet kunt maken.",
        },
        {
          h2: "Waarom passen werkstudenten bij een snel groeiend bedrijf?",
          p: "Groei betekent vaak dat werk sneller ontstaat dan de organisatiestructuur eromheen. Een werkstudent haal je relatief snel aan boord voor een nieuwe markt, een nieuw proces of een tijdelijke piek, met minder risico dan een fulltime aanname op een rol die over een half jaar misschien anders wordt ingericht. Een tijdelijk contract eindigt op de einddatum [1].",
        },
        {
          h2: "Kun je met werkstudenten een hele nieuwe markt of productlijn opzetten?",
          p: "Het kan. Bij Mila Health, een VOIDS-klant, draaiden drie werkstudenten Marketing ieder hun eigen markt tijdens de internationale uitbreiding naar Zweden en Duitsland: te groot voor een stage, nog niet bewezen genoeg voor drie fulltime starters ineens. Zo test je of een markt levensvatbaar is voordat je de grotere investering doet.",
        },
        {
          h2: "Wat is het risico van te veel leunen op werkstudenten tijdens groei?",
          p: "Het risico zit in structureel werk laten dragen door een rol die flexibel en tijdelijk is. Is een werkstudentrol na een jaar nog steeds cruciaal voor een proces, zonder plan voor wat daarna gebeurt, dan groeit het bedrijf sneller dan de organisatie eromheen. Houd ook de ketenregeling in de gaten: na meer dan drie tijdelijke contracten, of als die contracten samen (tussenpozen van ten hoogste zes maanden inbegrepen) meer dan 36 maanden beslaan, geldt het laatste contract als voor onbepaalde tijd [2]. En een werkstudent vertrekt uiterlijk bij het einde van de studie.",
        },
        {
          h2: "Hoe bouw je hier wél een stabiele structuur omheen?",
          ul: [
            "Plan vooraf een moment waarop je evalueert of een werkstudentrol moet doorgroeien naar een starterscontract",
            "Zorg voor overdracht van kennis, ook als een werkstudentrol tijdelijk is: leg processen vast, niet alleen in iemands hoofd",
            "Bouw een tweede werkstudent in voordat de eerste vertrekt, zodat kennis niet in één keer de deur uit gaat",
            "Betaal naar het niveau van het werk, niet naar het feit dat het tijdelijk aanvoelt: snelle groei is geen reden voor een lager tarief",
          ],
        },
        {
          h2: "Wanneer is het tijd om van werkstudenten naar starters over te stappen?",
          p: "Zodra het werk niet langer een experiment is, maar een bewezen, terugkerend onderdeel van het bedrijf. Dan wordt de flexibiliteit van een werkstudentrol minder waard dan de stabiliteit van een fulltime starter die het proces verder kan opschalen.",
        },
        {
          h2: "Hoe VOIDS scale-ups helpt",
          p: "Een deel van de klanten in de cases op onze website zijn bedrijven in een groeifase, zoals een internationale travel-tech scale-up [3]. Werkstudenten zijn bij groei relatief snel in te zetten en kostenefficiënt om mee te testen, mits je begeleiding en overdracht regelt.",
        },
      ],
      en: [
        {
          p: "A scale-up in a growth phase often has more work than people, but not always enough certainty about which roles will stick around to justify hiring full-time straight away. Working students fit that problem: capacity that can flex with growth, without having to lock in decisions you can't yet make.",
        },
        {
          h2: "Why do working students fit a fast-growing company?",
          p: "Growth often means work appears faster than the organisational structure around it. You can bring a working student on board relatively quickly for a new market, a new process or a temporary peak, with less risk than a full-time hire into a role that might look different again in six months. A fixed-term contract ends on the end date [1].",
        },
        {
          h2: "Can working students help you set up a whole new market or product line?",
          p: "It can be done. At Mila Health, a VOIDS client, three working students in Marketing each ran their own market during the international expansion into Sweden and Germany: too big for an internship, not proven enough yet for three full-time starters at once. That's how you test whether a market is viable before making the bigger investment.",
        },
        {
          h2: "What's the risk of leaning too heavily on working students during growth?",
          p: "The risk is letting structural work be carried by a role that is flexible and temporary. If a working-student role is still critical to a process a year in, with no plan for what happens next, the company is growing faster than the structure around it. Keep the chain rule in mind too: after more than three fixed-term contracts, or if those contracts together (gaps of at most six months included) cover more than 36 months, the last contract counts as permanent [2]. And a working student leaves at the latest when the studies end.",
        },
        {
          h2: "How do you build real stability around this?",
          ul: [
            "Plan a moment upfront to evaluate whether a working-student role should grow into a starter contract",
            "Make sure knowledge transfers, even for a temporary role: document processes, don't leave them only in someone's head",
            "Bring in a second working student before the first one leaves, so knowledge doesn't walk out the door all at once",
            "Pay for the level of the work, not for how temporary it feels: fast growth isn't a reason for a lower rate",
          ],
        },
        {
          h2: "When is it time to move from working students to starters?",
          p: "Once the work stops being an experiment and becomes a proven, recurring part of the business. Then the flexibility of a working-student role becomes worth less than the stability of a full-time starter who can scale the process further.",
        },
        {
          h2: "How VOIDS helps scale-ups",
          p: "Some of the clients in the cases on our website are companies in a growth phase, such as an international travel-tech scale-up [3]. During growth, working students can be deployed relatively fast and are cost-efficient to test with, provided you arrange guidance and handover.",
        },
      ],
    },
  },
  // 30 ---------------------------------------------------------------------
  {
    slug: "employer-branding-voor-gen-z",
    aud: "bedrijf",
    commercialInterest: true,
    photo: "/photography/mariselle-9.jpg",
    tag: { nl: "Gen Z", en: "Gen Z" },
    title: {
      nl: "Employer branding voor Gen Z: wat zeggen de cijfers?",
      en: "Employer branding for Gen Z: what do the figures say?",
    },
    excerpt: {
      nl: "Wat vinden jonge werknemers volgens het CBS belangrijk in een baan, en wat betekent dat voor je vacature en je verhaal als werkgever? Cijfers en wat je ermee doet.",
      en: "What do young employees find important in a job according to CBS, and what does that mean for your vacancy and your story as an employer? The figures, and what to do with them.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Employer branding voor Gen Z: wat zeggen de cijfers?",
      en: "Employer branding for Gen Z: what do the figures say?",
    },
    metaDescription: {
      nl: "Wat vinden jonge werknemers belangrijk in een baan en wat betekent dat voor je employer branding? CBS-cijfers over leidinggevenden, salaris en werktijden.",
      en: "What do young employees find important in a job and what does that mean for your employer branding? CBS figures on managers, pay and working hours.",
    },
    keywords: {
      nl: [
        "employer branding Gen Z",
        "jonge werknemers belangrijk baan",
        "salaristransparantie vacature",
        "employer branding werkstudenten",
        "arbeidsvoorwaarden jongeren",
      ],
      en: [
        "employer branding Gen Z",
        "young employees important job",
        "salary transparency vacancy",
        "employer branding working students",
        "working conditions young people",
      ],
    },
    sources: [
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Richtlijn (EU) 2023/970 ter versterking van het beginsel van gelijke beloning (artikel 5)",
        publisher: "EUR-Lex (Europese Unie)",
        url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32023L0970",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Meer openheid over loonkloof tussen mannen en vrouwen",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/05/21/meer-openheid-over-loonkloof-tussen-mannen-en-vrouwen",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "“Gen Z” is een etiket voor een grote, diverse groep, dus kijken we naar wat het CBS meet. Jonge werknemers (15 tot 27 jaar) noemden in 2024 goede leidinggevenden, een goed salaris en werkzekerheid als belangrijkste arbeidsvoorwaarden. Het minst belangrijk vonden ze de mogelijkheid om thuis te werken [1]. Wat betekent dat voor jouw vacature en jouw verhaal als werkgever?",
        },
        {
          h2: "Wat zeggen de cijfers over tevredenheid en verwachtingen?",
          p: "Volgens het CBS was in 2024 78% van de werknemers van 15 tot 27 jaar (zeer) tevreden met hun werk en was 89% tevreden met hun leidinggevende. Over hun salaris was 78% tevreden, minder dan over werkzekerheid (93%) [1]. Wie een goed salaris en goede begeleiding concreet laat zien in een vacature, sluit aan bij wat jonge werknemers belangrijk vinden.",
        },
        {
          h2: "Wat kun je in je vacature en je verhaal laten zien?",
          ul: [
            "Wat medewerkers zelf zeggen over het werk, niet alleen wat het bedrijfsaccount post",
            "Salaris en uren, direct in de vacature",
            "Concrete voorbeelden van hoe junior talent bij jou groeit",
            "Een duidelijke begeleiding en een duidelijk aanspreekpunt",
          ],
        },
        {
          h2: "Is salaristransparantie belangrijk?",
          p: "Het onderwerp leeft, ook in de wetgeving: de Europese loontransparantierichtlijn geeft sollicitanten het recht om vóór het gesprek informatie te krijgen over de aanvangsbeloning of de bandbreedte [2]. Het Nederlandse wetsvoorstel is op 21 mei 2026 ingediend en moet nog worden aangenomen [3]. Noem dus gewoon het salaris of een bandbreedte.",
        },
        {
          h2: "Hoe zet je huidige werkstudenten in voor employer branding?",
          p: "Laat een echte werkstudent vertellen hoe de eerste maand eruitzag. Dat is minder gepolijst dan een campagne. Laat mensen die het werk doen vertellen hoe het werk is, op een manier waar ze zelf achter staan.",
        },
        {
          h2: "Wat is de snelste manier om je employer brand te verbeteren zonder groot budget?",
          p: "Zorg dat de basis klopt voordat je aan campagnes begint: een eerlijke vacaturetekst met concreet salaris en concrete taken, een onboardingproces dat daadwerkelijk werkt en tevreden werkstudenten die dat ook durven te zeggen. Dat kost geen marketingbudget, alleen dat je intern op orde hebt wat je extern belooft.",
        },
        {
          h2: "Het begint bij hoe je junior talent behandelt",
          p: "De beste employer branding komt niet uit een campagne maar uit hoe een bedrijf junior talent daadwerkelijk behandelt. Begin daar.",
        },
      ],
      en: [
        {
          p: "“Gen Z” is a label for a large, diverse group, so we look at what CBS measures. In 2024, young employees (aged 15 to 27) named good managers, a good salary and job security as the most important working conditions. They found the possibility of working from home least important [1]. What does that mean for your vacancy and your story as an employer?",
        },
        {
          h2: "What do the figures say about satisfaction and expectations?",
          p: "According to CBS, in 2024 78% of employees aged 15 to 27 were (very) satisfied with their work and 89% were satisfied with their manager. 78% were satisfied with their salary, less than with job security (93%) [1]. If you show a good salary and good guidance concretely in a vacancy, you match what young employees find important.",
        },
        {
          h2: "What can you show in your vacancy and your story?",
          ul: [
            "What employees themselves say about the work, not just what the company account posts",
            "Salary and hours, right in the vacancy",
            "Concrete examples of how junior talent grows with you",
            "Clear guidance and a clear point of contact",
          ],
        },
        {
          h2: "Is pay transparency important?",
          p: "The topic is a live one, including in legislation: the EU pay transparency directive gives applicants the right to receive, before the interview, information about the starting pay or range [2]. The Dutch bill was submitted on 21 May 2026 and still has to be adopted [3]. So just state the salary or a range.",
        },
        {
          h2: "How do you put current working students to use for employer branding?",
          p: "Let a real working student describe what the first month looked like. It's less polished than a campaign. Let the people who do the work describe what it's like, in a way they stand behind themselves.",
        },
        {
          h2: "What's the fastest way to improve your employer brand without a big budget?",
          p: "Get the fundamentals right before you start campaigning: an honest vacancy with a concrete salary and concrete tasks, an onboarding process that actually works and satisfied working students who are willing to say so. That doesn't cost a marketing budget, just that what you promise externally holds up internally.",
        },
        {
          h2: "It starts with how you treat junior talent",
          p: "The best employer branding doesn't come from a campaign but from how a company actually treats junior talent. Start there.",
        },
      ],
    },
  },
  // 31 ---------------------------------------------------------------------
  {
    slug: "diversiteit-in-junior-recruitment",
    aud: "bedrijf",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/mariselle-7.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Diversiteit in junior recruitment: hoe voorkom je dat je steeds dezelfde kandidaten aantrekt?",
      en: "Diversity in junior recruitment: how do you stop attracting the same candidates every time?",
    },
    excerpt: {
      nl: "Werven via je eigen netwerk voelt efficiënt, maar persoonlijke netwerken zijn volgens onderzoek homogeen. Waar het scheefgroeit, en wat je concreet kunt veranderen.",
      en: "Hiring through your own network feels efficient, but personal networks are homogeneous according to research. Where it skews, and what you can change.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Diversiteit in junior recruitment: breder werven",
      en: "Diversity in junior recruitment: hiring more broadly",
    },
    metaDescription: {
      nl: "Hoe voorkom je dat je steeds dezelfde junior kandidaten aantrekt? Wat onderzoek zegt over netwerken en toegang tot kansen, en wat je kunt veranderen.",
      en: "How do you stop attracting the same junior candidates? What research says about networks and access to opportunities, and what you can change.",
    },
    keywords: {
      nl: [
        "diversiteit junior recruitment",
        "werven via eigen netwerk",
        "gelijke kansen werving",
        "inclusieve vacature",
        "werkstudent diversiteit",
      ],
      en: [
        "diversity junior recruitment",
        "hiring through own network",
        "equal opportunities hiring",
        "inclusive vacancy",
        "working student diversity",
      ],
    },
    sources: [
      {
        title: "Birds of a Feather: Homophily in Social Networks (McPherson, Smith-Lovin & Cook), Annual Review of Sociology 27, 415-444",
        publisher: "Annual Review of Sociology",
        url: "https://doi.org/10.1146/annurev.soc.27.1.415",
        year: "2001",
        accessed: "2026-10-11",
      },
      {
        title: "Stijgende lijn stagevergoedingen voor studenten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2025/03/12/stijgende-lijn-stagevergoedingen-voor-studenten",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Afgestudeerden in het hoger onderwijs (inleiding verwijst naar SER-advies 2021)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/longread/rapportages/2024/afgestudeerden-in-het-hoger-onderwijs?onepage=true",
        year: "2024",
        accessed: "2026-10-11",
      },
      {
        title: "Community & jobboard",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/community-jobboard",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "“We werven op kwaliteit, niet op diversiteit.” Een veelgehoorde zin die voorbijgaat aan hoe wervingskanalen zelf al een filter zijn. Werf je alleen via je eigen netwerk, dan selecteer je op wie toevallig al toegang had tot dat netwerk.",
        },
        {
          h2: "Waarom levert werven via je eigen netwerk minder diversiteit op?",
          p: "Persoonlijke netwerken zijn volgens onderzoek homogeen: mensen hebben vaker contact met mensen die op hen lijken. Een veelgeciteerd overzichtsartikel in de Annual Review of Sociology laat zien dat dat geldt voor veel sociaal-demografische kenmerken, met de sterkste scheidslijnen bij ras en etniciteit, gevolgd door leeftijd, religie, opleiding, beroep en geslacht [1]. Werf je structureel via via, dan bereik je dus vooral mensen die lijken op wie er al werkt. Dat zegt niets over goede of slechte bedoelingen.",
        },
        {
          h2: "Bevoordelen cv-eisen onbedoeld bepaalde kandidaten?",
          p: "Dat kan. Een voorkeur voor een bekende studievereniging of een prestigieuze stage bevoordeelt wie toegang had tot die kansen. Een stagevergoeding is bijvoorbeeld wettelijk niet verplicht: in maart 2024 kreeg 42% van de mbo-studenten een stagevergoeding, naar schatting 75% van de hbo-studenten en 65% van de wo-studenten met een verplichte stage [2]. Het CBS wijst op een SER-advies uit 2021 waarin studenten van wie de ouders niet hebben gestudeerd, met een mbo-vooropleiding, met een niet-westerse migratieachtergrond en met een functiebeperking belemmeringen ervaren in of op weg naar het hoger onderwijs [3]. Wie selecteert op signalen die toegang veronderstellen, selecteert dus deels op wie die toegang had.",
        },
        {
          h2: "Wat kun je concreet veranderen in je wervingsproces?",
          ul: [
            "Werf via een bredere community in plaats van uitsluitend via het eigen netwerk of via via",
            "Kijk naar drijfveren en werkstijl naast cv-signalen die toegang tot bepaalde kansen veronderstellen",
            "Formuleer vacature-eisen als “fijn om te hebben” in plaats van harde eisen waar niemand volledig aan voldoet",
            "Zorg voor meerdere beoordelaars bij een selectiegesprek, zodat één persoonlijke voorkeur niet de doorslag geeft",
          ],
        },
        {
          h2: "Waarom dit is waar VOIDS voor bestaat",
          p: "VOIDS werkt met een community van 4.000+ studenten en starters [4], bedoeld om bedrijven toegang te geven tot talent dat ze via hun eigen netwerk mogelijk niet bereiken. Kijken naar drijfveren en werkstijl naast cv-signalen is ons uitgangspunt. De omvang is die van de community, niet van een talentpool.",
        },
      ],
      en: [
        {
          p: "“We hire on quality, not on diversity.” A common line that overlooks how hiring channels are already a filter. If you only hire through your own network, you select for whoever happened to have access to that network.",
        },
        {
          h2: "Why does hiring through your own network produce less diversity?",
          p: "According to research, personal networks are homogeneous: people have more contact with people who resemble them. A widely cited review article in the Annual Review of Sociology shows this holds for many sociodemographic characteristics, with the strongest divides in race and ethnicity, followed by age, religion, education, occupation and gender [1]. Hire structurally through personal connections and you mostly reach people who resemble those already working with you. That says nothing about good or bad intentions.",
        },
        {
          h2: "Do CV requirements unintentionally favour certain candidates?",
          p: "They can. A preference for a well-known student association or a prestigious internship favours whoever had access to those opportunities. An internship allowance, for example, is not mandatory by law: in March 2024, 42% of secondary vocational students received one, an estimated 75% of students at universities of applied sciences and 65% of research-university students with a compulsory internship [2]. CBS points to a 2021 SER advice in which students whose parents did not study, with a secondary vocational background, with a non-Western migration background and with a functional impairment experience barriers in or on the way to higher education [3]. If you select on signals that presuppose access, you partly select on who had that access.",
        },
        {
          h2: "What can you concretely change in your hiring process?",
          ul: [
            "Hire through a broader community instead of exclusively through your own network or personal connections",
            "Look at motivation and working style alongside CV signals that assume access to particular opportunities",
            "Frame vacancy requirements as “nice to have” instead of hard requirements no candidate fully meets",
            "Use multiple assessors in a selection interview, so one person's preference doesn't decide the outcome",
          ],
        },
        {
          h2: "Why this is what VOIDS exists for",
          p: "VOIDS works with a community of 4,000+ students and starters [4], meant to give companies access to talent they may not reach through their own network. Looking at motivation and working style alongside CV signals is our starting point. The size is that of the community, not of a talent pool.",
        },
      ],
    },
  },
  // 32 ---------------------------------------------------------------------
  {
    slug: "wanneer-is-het-tijd-voor-een-tweede-werkstudent",
    aud: "bedrijf",
    commercialInterest: true,
    photo: "/photography/mariselle-1.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Wanneer is het tijd voor een tweede werkstudent?",
      en: "When is it time for a second working student?",
    },
    excerpt: {
      nl: "Eén werkstudent die overal “een beetje” bij helpt, is een risico, geen efficiëntie. Signalen dat het tijd is om uit te breiden, en hoe je dat zonder chaos aanpakt.",
      en: "One working student helping out with “a bit of everything” is a risk, not efficiency. Signals it's time to expand, and how to do it without chaos.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Wanneer is het tijd voor een tweede werkstudent?",
      en: "When is it time for a second working student?",
    },
    metaDescription: {
      nl: "Signalen dat één werkstudent te veel draagt en hoe je uitbreidt naar twee zonder chaos: overdracht, takenverdeling en budget.",
      en: "Signals that one working student carries too much and how to expand to two without chaos: handover, task split and budget.",
    },
    keywords: {
      nl: [
        "tweede werkstudent",
        "werkstudent team uitbreiden",
        "kennisoverdracht werkstudent",
        "werkstudent overbelast",
        "junior team opbouwen",
      ],
      en: [
        "second working student",
        "expand working student team",
        "knowledge handover working student",
        "overloaded working student",
        "building a junior team",
      ],
    },
    sources: [
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Werving & selectie (incl. cases)",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/recruitment-selection",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Eén werkstudent aannemen voelt als een veilige eerste stap. Maar laat die ene werkstudent niet te lang te veel dragen. Dit zijn de signalen dat het tijd is voor een tweede.",
        },
        {
          h2: "Wat zijn de duidelijkste signalen dat je een tweede werkstudent nodig hebt?",
          ul: [
            "Je huidige werkstudent kan niet meer met vakantie of ziek zijn zonder dat er iets structureels blijft liggen",
            "Kennis over een proces zit volledig in het hoofd van één persoon, zonder enige overdracht",
            "Je werkstudent draait structureel meer uren dan afgesproken om het werk af te krijgen",
            "Je overweegt serieus om zelf weer uitvoerend werk op te pakken dat je eerder had uitbesteed",
          ],
        },
        {
          h2: "Is één overbelaste werkstudent kostenefficiënter dan twee?",
          p: "Op papier misschien. Maar één persoon die structureel overbelast is, brengt risico's mee: uitval door ziekte of vertrek, en kennis die in één keer verdwijnt als diegene stopt. Twee werkstudenten kosten meer salaris, maar verdelen dat risico. Het wettelijk minimumloon is per 1 juli 2026 € 14,99 bruto per uur vanaf 21 jaar [1].",
        },
        {
          h2: "Moet een tweede werkstudent hetzelfde werk doen als de eerste?",
          p: "Niet per se, en vaak juist niet. Een tweede werkstudent kan het bestaande werk verdelen, maar ook een nieuw, aangrenzend stuk oppakken, zodat de eerste kan doorgroeien naar meer verantwoordelijkheid in plaats van hetzelfde takenpakket te blijven delen.",
        },
        {
          h2: "Hoe voorkom je chaos als je van één naar twee werkstudenten gaat?",
          p: "Leg vooraf vast wie waarvoor verantwoordelijk is, zodat er geen overlap of gaten ontstaan. Betrek je bestaande werkstudent bij het inwerken van de nieuwe collega: dat versterkt de overdracht van kennis en het geeft de eerste werkstudent een concreet signaal dat de rol serieus genoeg is om op te schalen.",
        },
        {
          h2: "Wat als het budget voor een tweede werkstudent er nog niet is?",
          p: "Reken dan eerst door wat de huidige situatie je kost aan risico en overbelasting. Vertrekt een werkstudent door structurele overbelasting, dan betaal je opnieuw voor werving en inwerktijd.",
        },
        {
          h2: "Hoe VOIDS meedenkt bij opschalen",
          p: "VOIDS denkt niet alleen mee over de eerste werkstudent, maar ook over hoe een junior team er over een jaar uitziet. Voor bedrijven die regelmatig werven biedt VOIDS een maandelijks tarief met vervanging inbegrepen zodra een werkstudent stopt [2].",
        },
      ],
      en: [
        {
          p: "Hiring one working student feels like a safe first step. But don't let that one working student carry too much for too long. These are the signals it's time for a second.",
        },
        {
          h2: "What are the clearest signals you need a second working student?",
          ul: [
            "Your current working student can't go on holiday or get sick without something structural falling behind",
            "Knowledge about a process lives entirely in one person's head, with no handover at all",
            "Your working student structurally works more hours than agreed just to get the work done",
            "You're seriously considering picking execution work back up yourself that you'd previously delegated",
          ],
        },
        {
          h2: "Is one overloaded working student more cost-efficient than two?",
          p: "On paper, maybe. But one person who's structurally overloaded brings risks: dropping out through illness or leaving, and knowledge that disappears all at once if they stop. Two working students cost more salary but spread that risk. The statutory minimum wage is € 14.99 gross per hour from age 21 as of 1 July 2026 [1].",
        },
        {
          h2: "Does a second working student need to do the same work as the first?",
          p: "Not necessarily, and often it shouldn't. A second working student can split the existing work, but can also pick up a new, adjacent piece, so the first can grow into more responsibility instead of continuing to share the same task list.",
        },
        {
          h2: "How do you avoid chaos when going from one working student to two?",
          p: "Set out upfront who's responsible for what, so there's no overlap or gaps. Involve your existing working student in onboarding the new one: that strengthens the knowledge handover and gives the first working student a concrete signal that the role is serious enough to scale.",
        },
        {
          h2: "What if the budget for a second working student isn't there yet?",
          p: "Work out first what the current situation costs you in risk and overload. If a working student leaves because of structural overload, you pay again for recruiting and onboarding time.",
        },
        {
          h2: "How VOIDS helps you think about scaling",
          p: "VOIDS thinks along not only about the first working student but also about what a junior team looks like a year from now. For companies that hire regularly, VOIDS offers a monthly fee with replacement included as soon as a working student stops [2].",
        },
      ],
    },
  },
  // 33 ---------------------------------------------------------------------
  {
    slug: "trends-nederlandse-arbeidsmarkt-starters",
    aud: "beide",
    commercialInterest: true,
    photo: "/photography/mariselle-6.jpg",
    tag: { nl: "Trends", en: "Trends" },
    title: {
      nl: "Trends op de Nederlandse arbeidsmarkt voor starters en Gen Z",
      en: "Trends in the Dutch labour market for starters and Gen Z",
    },
    excerpt: {
      nl: "Welke ontwikkelingen in de arbeidsmarkt voor starters zijn te onderbouwen met CBS-cijfers en wetgeving, en wat betekenen ze voor kandidaten en werkgevers?",
      en: "Which developments in the labour market for starters can be backed with CBS figures and legislation, and what do they mean for candidates and employers?",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Trends arbeidsmarkt starters: wat zeggen de cijfers?",
      en: "Labour market trends for starters: what do figures say?",
    },
    metaDescription: {
      nl: "Werkende jongeren, vacatures per werkloze, zoektijd van afgestudeerden en loontransparantie: wat CBS-cijfers en wetgeving zeggen over starters.",
      en: "Working young people, vacancies per unemployed person, graduates' search time and pay transparency: what CBS figures and legislation say about starters.",
    },
    keywords: {
      nl: [
        "arbeidsmarkt starters",
        "werkende jongeren CBS",
        "vacatures per werkloze",
        "loontransparantie starters",
        "werkervaring tijdens studie",
      ],
      en: [
        "labour market starters",
        "working young people CBS",
        "vacancies per unemployed",
        "pay transparency starters",
        "work experience during studies",
      ],
    },
    sources: [
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2020",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2020/werk/",
        year: "2020",
        accessed: "2026-10-11",
      },
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Studie & Werk HO: de arbeidsmarktpositie van hbo- en wo-alumni (Bussink, Van der Ven & Klinker, in opdracht van EW Magazine)",
        publisher: "SEO Economisch Onderzoek",
        url: "https://www.seo.nl/wp-content/uploads/2023/07/2023-74-Studie-Werk-HO.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Werkloosheid gedaald in tweede kwartaal 2026",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2026/31/werkloosheid-gedaald-in-tweede-kwartaal-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Richtlijn (EU) 2023/970 ter versterking van het beginsel van gelijke beloning (artikel 5)",
        publisher: "EUR-Lex (Europese Unie)",
        url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32023L0970",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Meer openheid over loonkloof tussen mannen en vrouwen",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/05/21/meer-openheid-over-loonkloof-tussen-mannen-en-vrouwen",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Over de arbeidsmarkt voor starters wordt veel beweerd. Hier alleen wat te onderbouwen is, met cijfers van het CBS, SEO Economisch Onderzoek en uit wetgeving.",
        },
        {
          h2: "Werken jongeren vaker naast hun studie dan vroeger?",
          p: "Het CBS meldt dat de nettoarbeidsparticipatie van jongeren van 15 tot 27 jaar steeg van 69,0% in 2014 naar 77,7% in 2024; bij 15- tot 19-jarigen van 55,9% naar 68,5% [1]. In 2019 had 62% van de onderwijsvolgende jongeren van 15 tot 27 jaar betaald werk [2]. Werkende ho-studenten hadden in 2023 gemiddeld een gebruikelijke arbeidsduur van 18,7 uur per week [3]. Uit onderzoek van SEO blijkt dat afgestudeerden met een relevante bijbaan gemiddeld sneller een eerste substantiële baan vonden [4].",
        },
        {
          h2: "Is de arbeidsmarkt krapper of ruimer geworden?",
          p: "Over de hele arbeidsmarkt: in het tweede kwartaal van 2026 waren er volgens voorlopige CBS-cijfers 95 vacatures per 100 werklozen (seizoensgecorrigeerd), tegen 101 een jaar eerder en 142 in het tweede kwartaal van 2022 [5]. De krapte is dus afgenomen, al gaat dit over alle werkenden en niet over starters specifiek. Volgens SEO was de duur tot een substantiële baan voor hbo- en wo-afgestudeerden van het cohort 2020-2021 gedaald tot circa drie maanden, mede door de krapte op de arbeidsmarkt [4]. De situatie verandert met de conjunctuur. Een vaste junior-instroom maakt een bedrijf minder afhankelijk van wervingsmomenten.",
        },
        {
          h2: "Welke rol speelt salaristransparantie?",
          p: "Een wettelijke: de Europese loontransparantierichtlijn geeft sollicitanten het recht om vóór het gesprek informatie te krijgen over de aanvangsbeloning of de bandbreedte, en verbiedt vragen naar iemands salarisgeschiedenis [6]. Het Nederlandse wetsvoorstel is op 21 mei 2026 ingediend en moet per 1 januari 2027 ingaan, maar moet nog door beide Kamers [7].",
        },
        {
          h2: "Wat betekenen deze ontwikkelingen voor werkgevers?",
          ul: [
            "Bouw aan een junior pijplijn vóór je die acuut nodig hebt, niet pas als een vacature dringend moet worden ingevuld",
            "Wees transparant over salaris en uren; de wetgeving gaat die kant op",
            "Zoek breder dan traditionele vacaturesites en het eigen netwerk",
            "Behandel een werkstudentrol als structureel onderdeel van de organisatie, niet als tijdelijke lapmiddel",
          ],
        },
        {
          h2: "Wat betekent dit voor kandidaten?",
          p: "Relevante ervaring tijdens je studie staat in de cijfers: wie een relevante bijbaan had, vond gemiddeld sneller een eerste baan. Begin dus vóór je afstudeert, en vraag in elke vacature naar salaris en uren.",
        },
      ],
      en: [
        {
          p: "A lot gets claimed about the labour market for starters. Here is only what can be backed up, with figures from CBS, SEO Economic Research and legislation.",
        },
        {
          h2: "Do young people work alongside their studies more often than before?",
          p: "CBS reports that the net labour participation of young people aged 15 to 27 rose from 69.0% in 2014 to 77.7% in 2024; for 15- to 19-year-olds from 55.9% to 68.5% [1]. In 2019, 62% of young people in education aged 15 to 27 had paid work [2]. Working higher-education students had an average usual working time of 18.7 hours a week in 2023 [3]. Research by SEO found that graduates with a relevant side job found a first substantial job faster on average [4].",
        },
        {
          h2: "Has the labour market become tighter or looser?",
          p: "For the labour market as a whole: in the second quarter of 2026 there were, according to preliminary CBS figures, 95 vacancies per 100 unemployed people (seasonally adjusted), against 101 a year earlier and 142 in the second quarter of 2022 [5]. The tightness has eased, though this concerns all workers and not starters specifically. According to SEO, the time to a substantial job for graduates of universities of applied sciences and research universities in the 2020-2021 cohort had fallen to about three months, partly due to the tight labour market [4]. The situation moves with the economic cycle. A steady junior inflow makes a company less dependent on hiring moments.",
        },
        {
          h2: "What role does pay transparency play?",
          p: "A legal one: the EU pay transparency directive gives applicants the right to receive, before the interview, information about the starting pay or range, and prohibits asking about someone's pay history [6]. The Dutch bill was submitted on 21 May 2026 and is due to take effect on 1 January 2027, but still has to pass both Chambers [7].",
        },
        {
          h2: "What do these developments mean for employers?",
          ul: [
            "Build a junior pipeline before you urgently need one, not only once a role has to be filled fast",
            "Be transparent about salary and hours; legislation is moving that way",
            "Look beyond traditional job boards and your own network",
            "Treat a working-student role as a structural part of the organisation, not a temporary patch",
          ],
        },
        {
          h2: "What does this mean for candidates?",
          p: "Relevant experience during your studies shows up in the figures: those with a relevant side job found a first job faster on average. So start before you graduate, and ask about salary and hours in every vacancy.",
        },
      ],
    },
  },
  // 34 ---------------------------------------------------------------------
  {
    slug: "remote-hybride-werken-als-werkstudent",
    aud: "beide",
    commercialInterest: true,
    photo: "/photography/mariselle-8.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Remote of hybride werken als werkstudent: wat is realistisch?",
      en: "Remote or hybrid work as a working student: what's realistic?",
    },
    excerpt: {
      nl: "Volledig remote klinkt flexibel. Wat realistisch is bij een werkstudentrol, voor kandidaten en voor bedrijven.",
      en: "Fully remote sounds flexible. What's realistic for a working-student role, for candidates and for companies.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-08-09",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Remote of hybride werken als werkstudent",
      en: "Remote or hybrid work as a working student",
    },
    metaDescription: {
      nl: "Wat is realistisch voor een werkstudent: remote, hybride of op kantoor? Wat onderzoek zegt over leren op afstand en wat jongeren belangrijk vinden (CBS).",
      en: "What is realistic for a working student: remote, hybrid or office? What research says about learning remotely and what young people find important (CBS).",
    },
    keywords: {
      nl: [
        "hybride werken werkstudent",
        "remote werken junior",
        "thuiswerken student",
        "feedback junior kantoor",
        "flexibele werktijden student",
      ],
      en: [
        "hybrid work working student",
        "remote work junior",
        "working from home student",
        "feedback junior office",
        "flexible hours student",
      ],
    },
    sources: [
      {
        title: "The Power of Proximity to Coworkers (Emanuel, Harrington & Pallais), NBER Working Paper 31880; gepubliceerd in The Quarterly Journal of Economics 141(3), 2026",
        publisher: "NBER",
        url: "https://www.nber.org/papers/w31880",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Werk: Jaarrapport Landelijke Jeugdmonitor 2025",
        publisher: "CBS",
        url: "https://longreads.cbs.nl/jeugdmonitor-2025/werk/",
        year: "2025",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Remote werken klinkt voor een werkstudent aantrekkelijk: geen reistijd, flexibel in te plannen rond colleges. Maar wat levert het op voor een junior rol? Onderzoek bij één Amerikaans bedrijf onder software-engineers laat zien dat wie dicht bij collega's zat, 18,3% meer feedback op code kreeg en betere codekwaliteit leverde, vooral bij jongere en minder ervaren medewerkers. Ervaren engineers schreven juist minder code als ze dicht bij collega's zaten [1].",
        },
        {
          h2: "Is volledig remote werken goed voor een werkstudent in een junior rol?",
          p: "Dat hangt af van de rol en de begeleiding. Junior rollen leunen sterk op informeel leren: meeluisteren met een collega die een klant belt, en kort iets vragen zonder een meeting te plannen. Op afstand moet je dat bewust organiseren.",
        },
        {
          h2: "Is hybride de betere middenweg?",
          p: "Voor veel werkstudentrollen wel. Een paar vaste dagen op kantoor geven toegang tot informele leermomenten, terwijl de overige dagen ruimte bieden om flexibel te plannen rond tentamens en projectweken.",
        },
        {
          h2: "Wanneer past volledig remote werken wél goed bij een werkstudentrol?",
          p: "Als het werk sterk zelfstandig van aard is en weinig continu overleg vraagt, zoals bepaalde vormen van dataverwerking of contentproductie, en als er toch een structureel moment is voor overleg en feedback, ook via videobellen. Het probleem is niet remote werken zelf, maar remote werken zonder structuur voor begeleiding.",
        },
        {
          h2: "Hoe voorkom je dat een werkstudent zich buitengesloten voelt bij hybride werken?",
          ul: [
            "Spreek vaste, gedeelde kantoordagen af in plaats van “kom maar wanneer het uitkomt”",
            "Zorg dat belangrijke besluiten en informele updates niet alleen op kantoor vallen zonder dat er iets wordt vastgelegd voor wie er niet is",
            "Plan een vast wekelijks moment voor feedback, ongeacht of dat op kantoor of via videobellen gebeurt",
            "Betrek een remote werkstudent net zo actief bij informele momenten als bij formele vergaderingen",
          ],
        },
        {
          h2: "Wat verwachten jonge werknemers zelf van flexibiliteit?",
          p: "Het CBS meldt dat jonge werknemers (15 tot 27 jaar) in 2024 de mogelijkheid om thuis te werken het minst belangrijk vonden van de gevraagde arbeidsvoorwaarden. Onderwijsvolgenden vonden het belangrijk om zelf hun werktijden te bepalen (84%) en in deeltijd te werken (81%); de mogelijkheid om thuis te werken noemde 41% van hen (heel) belangrijk [2]. Flexibiliteit in tijd scoort bij onderwijsvolgenden dus hoger dan thuiswerken.",
        },
        {
          h2: "Waarom bespreek je de werkvorm vooraf?",
          p: "Bespreek vooraf of je op kantoor, hybride of remote werkt. Een verkeerde verwachting hierover kan een match ondermijnen.",
        },
      ],
      en: [
        {
          p: "Remote work sounds appealing for a working student: no commute, easy to plan around lectures. But what does it offer a junior role? Research at one US company among software engineers shows that those who sat near colleagues received 18.3% more feedback on code and produced better code quality, especially younger and less experienced employees. Experienced engineers actually wrote less code when sitting near colleagues [1].",
        },
        {
          h2: "Is fully remote work good for a working student in a junior role?",
          p: "That depends on the role and the guidance. Junior roles lean heavily on informal learning: overhearing a colleague on a client call and asking a quick question without scheduling a meeting. Remotely, you have to organise that on purpose.",
        },
        {
          h2: "Is hybrid the better middle ground?",
          p: "For many working-student roles, yes. A few fixed days in the office give access to informal learning moments, while the other days leave room to plan flexibly around exams and project weeks.",
        },
        {
          h2: "When does fully remote work fit a working-student role well?",
          p: "When the work is strongly independent and doesn't need much continuous coordination, like certain kinds of data processing or content production, and when there's still a structural moment for check-ins and feedback, even over video call. The problem isn't remote work itself, it's remote work without structure for guidance.",
        },
        {
          h2: "How do you stop a working student from feeling left out under hybrid work?",
          ul: [
            "Agree on fixed, shared office days instead of “come in whenever it suits”",
            "Make sure important decisions and informal updates don't only happen in the office with nothing recorded for whoever wasn't there",
            "Schedule a fixed weekly feedback moment, whether it happens in the office or over video call",
            "Involve a remote working student just as actively in informal moments as in formal meetings",
          ],
        },
        {
          h2: "What do young employees themselves expect from flexibility?",
          p: "CBS reports that in 2024 young employees (aged 15 to 27) found the possibility of working from home the least important of the working conditions asked about. Young people in education found it important to set their own working hours (84%) and to work part-time (81%); 41% of them found the possibility of working from home (very) important [2]. So flexibility in time scores higher among young people in education than working from home.",
        },
        {
          h2: "Why discuss the way of working in advance?",
          p: "Discuss upfront whether you work in the office, hybrid or remote. A mismatched expectation here can undermine a match.",
        },
      ],
    },
  },
  // 35 ---------------------------------------------------------------------
  {
    slug: "waarom-werken-met-werkstudenten",
    aud: "bedrijf",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/hg-00.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Waarom werken met werkstudenten? De zakelijke afweging",
      en: "Why work with working students? The business case",
    },
    excerpt: {
      nl: "Een werkstudent past bij werk dat structureel terugkomt maar geen volledige baan vult. Wat het oplevert, waar het niet werkt en welke regels gelden, eerlijk op een rij.",
      en: "A working student suits work that recurs but doesn't fill a full job. What it delivers, where it doesn't work and which rules apply, laid out honestly.",
    },
    read: { nl: "4 min", en: "5 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Waarom werken met werkstudenten? Voordelen en grenzen",
      en: "Why hire working students? Benefits and limits",
    },
    metaDescription: {
      nl: "Wat levert een werkstudent een werkgever op, voor welk werk past het en waar niet? Een eerlijke afweging met bronnen en de belangrijkste contractregels.",
      en: "What does a working student offer an employer, which work suits it and which does not? An honest assessment with sources and the key contract rules.",
    },
    keywords: {
      nl: [
        "waarom werken met werkstudenten",
        "werkstudent aannemen voordelen",
        "werkstudent nadelen",
        "werkstudent of starter",
        "flexibele junior capaciteit",
        "werkstudent werkgever",
      ],
      en: [
        "why hire working students",
        "working student benefits employer",
        "working student drawbacks",
        "working student or graduate hire",
        "flexible junior capacity",
        "hiring working students Netherlands",
      ],
    },
    sources: [
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Heb ik recht op het minimumloon als ik stage loop?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vraag-en-antwoord/minimumloon-stage",
        accessed: "2026-10-11",
      },
      {
        title: "Hoger onderwijs; ingeschrevenen, onderwijssoort, opleidingsfase en -vorm (tabel 85423NED)",
        publisher: "CBS StatLine",
        url: "https://www.cbs.nl/nl-nl/cijfers/detail/85423NED",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Studie & Werk HO: de arbeidsmarktpositie van hbo- en wo-alumni (Bussink, Van der Ven & Klinker, in opdracht van EW Magazine)",
        publisher: "SEO Economisch Onderzoek",
        url: "https://www.seo.nl/wp-content/uploads/2023/07/2023-74-Studie-Werk-HO.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Werkloosheid gedaald in tweede kwartaal 2026",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2026/31/werkloosheid-gedaald-in-tweede-kwartaal-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Stappenplan personeel aannemen",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/stappenplan-personeel-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668 (aanzegplicht), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668/afdrukken",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een werkstudent past bij werk dat structureel terugkomt maar geen volledige baan vult. Je krijgt flexibele junior capaciteit voor een regulier salaris over minder uren, met meer continuïteit dan bij een stage. Het werkt minder goed voor taken die dagelijkse aanwezigheid, veel ervaring of veel eindverantwoordelijkheid vragen. Hieronder de argumenten, de grenzen en de regels op een rij.",
        },
        {
          h2: "Kort antwoord",
          ul: [
            "Past bij: terugkerend werk van enkele dagen per week, zoals een deelmarkt, een financieel proces of wekelijkse contentproductie",
            "Past minder bij: werk dat vaste dagelijkse dekking vraagt, of waar een tentamenperiode direct schade oplevert",
            "Kosten: een regulier loon, minimaal het wettelijk minimumloon, over minder uren. De totale investering is lager dan bij een fulltime starter; het uurtarief is dat niet",
            "Contract: een gewone arbeidsovereenkomst. Minimumloon, ketenregeling en aanzegplicht gelden",
          ],
        },
        {
          h2: "Wat levert een werkstudent een werkgever op?",
          ul: [
            "Flexibele omvang. Werkende studenten in het hoger onderwijs (15 tot 27 jaar) hadden in het derde kwartaal van 2023 gemiddeld een gebruikelijke arbeidsduur van 18,7 uur per week [1]. Bij VOIDS werken werkstudenten doorgaans 4 tot 24 uur per week.",
            "Structureel werk vraagt om een arbeidsovereenkomst. Een stagiair mag volgens de Rijksoverheid geen gewone werknemer vervangen: bij een stage staat leren centraal [2]. Voor werk dat blijvend gedaan moet worden, hoort dus een arbeidsovereenkomst, en dat is wat een werkstudent heeft.",
            "Een groot aanbod aan studenten. In studiejaar 2025/26 stonden naar voorlopige CBS-cijfers ruim 770.000 studenten ingeschreven in het hbo en wo [3].",
            "Aansluitend werk is anders dan een bijbaan. De drie meest voorkomende beroepen van werkende ho-studenten waren in het derde kwartaal van 2023 verkoopmedewerker in de detailhandel (10%), bediening in de horeca (8%) en vakkenvuller (5%) [1]. Afgestudeerden met een bijbaan in een relevante sector vonden volgens SEO Economisch Onderzoek gemiddeld sneller een eerste substantiële baan dan afgestudeerden zonder bijbaan [4].",
            "Arbeidsmarktcontext. In het tweede kwartaal van 2026 waren er volgens voorlopige CBS-cijfers 95 vacatures per 100 werklozen (seizoensgecorrigeerd), tegen 142 in het tweede kwartaal van 2022 [5]. De arbeidsmarkt is dus minder krap dan twee jaar geleden, maar niet ruim.",
            "Kennismaken zonder open einde. Met een tijdelijk contract leren werkgever en student elkaar kennen voordat je een vast contract aanbiedt. Klanten in de cases op onze website beschrijven doorstroom naar een vaste rol.",
          ],
        },
        {
          h2: "Waar werkt het niet?",
          ul: [
            "Werk dat vaste, volledige dekking vraagt, zoals een bezette telefoonbalie van negen tot vijf. Een werkstudent plant rond colleges en tentamens, en dat botst met starre roosters.",
            "Rollen met veel eindverantwoordelijkheid zonder begeleiding. Een werkstudent heeft vaak nog weinig praktijkervaring en heeft een aanspreekpunt nodig.",
            "Kennis die maar in één hoofd zit. Een werkstudent vertrekt uiterlijk als de studie is afgerond; plan overdracht en een opvolger in.",
            "Situaties waarin je vooral de laagste kosten zoekt. Het minimumloon is een ondergrens die voor elke werknemer geldt, en een rol met echte verantwoordelijkheid hoort in verhouding tot dat werk betaald te worden.",
          ],
        },
        {
          h2: "Wat kost het, en waarom gaat het niet om zo laag mogelijke kosten?",
          p: "Het wettelijk minimumloon is per 1 juli 2026 € 14,99 bruto per uur voor werknemers van 21 jaar en ouder; voor 15 tot en met 20 jaar gelden lagere minimumjeugdlonen per leeftijd [6]. Daarnaast betaal je vakantiebijslag (de Rijksoverheid noemt 8% vakantiegeld als verplichte loonkost) en draag je loonheffingen en premies af [7]. Een rekenvoorbeeld: 20 uur per week tegen € 14,99 is € 299,80 bruto per week, exclusief vakantiegeld en werkgeverslasten. Je totale investering is lager dan bij een fulltime starter omdat je minder uren inkoopt, niet omdat het uurtarief lager hoort te zijn. Controleer de bedragen altijd bij de Rijksoverheid: ze worden per 1 januari en per 1 juli vastgesteld.",
        },
        {
          h2: "Welke regels moet je kennen?",
          ul: [
            "Arbeidsrechtelijk is een werkstudent een werknemer als aan de kenmerken van een arbeidsovereenkomst is voldaan: werk onder gezag van de werkgever, loon en persoonlijke uitvoering van het werk [8]. Belangrijke afspraken moet je binnen een week en binnen een maand schriftelijk meedelen [8].",
            "Ketenregeling: na meer dan drie tijdelijke contracten, of als die contracten samen (tussenpozen van ten hoogste zes maanden inbegrepen) meer dan 36 maanden beslaan, geldt het laatste contract als aangegaan voor onbepaalde tijd (artikel 7:668a BW) [9]. Een cao kan hiervan afwijken.",
            "Aanzegplicht: bij een tijdelijk contract van zes maanden of langer moet je uiterlijk een maand voor het einde schriftelijk laten weten of je het voortzet en onder welke voorwaarden (artikel 7:668 BW) [10].",
          ],
        },
        {
          h2: "Wanneer past een stagiair of starter beter?",
          p: "Een stagiair past bij een afgebakend leerdoel met begeleiding; het werk mag het werk van een gewone werknemer niet vervangen [2]. Een starter past bij werk dat een volledige werkweek vult. Een werkstudent zit daartussen. In onze artikelen over werkstudent, stagiair of starter en over de kosten van een werkstudent tegenover een starter werken we die keuze verder uit.",
        },
        {
          h2: "Je volgende stap",
          p: "Welk werk komt bij jou elke week terug en vult geen volledige baan? Schrijf dat op, met uren en taken. Dan heb je de eerste werkstudentrol al te pakken.",
        },
      ],
      en: [
        {
          p: "A working student suits work that recurs but doesn't fill a full job. You get flexible junior capacity for a regular salary over fewer hours, with more continuity than an internship. It works less well for tasks that need daily presence, a lot of experience or a lot of final responsibility. Below: the arguments, the limits and the rules.",
        },
        {
          h2: "Short answer",
          ul: [
            "Suits: recurring work of a few days a week, such as a sub-market, a financial process or weekly content production",
            "Suits less: work that needs fixed daily cover, or where an exam period causes direct damage",
            "Cost: a regular salary, at least the statutory minimum wage, over fewer hours. The total investment is lower than for a full-time starter; the hourly rate is not",
            "Contract: an ordinary employment contract. Minimum wage, the chain rule and the notice obligation apply",
          ],
        },
        {
          h2: "What does a working student offer an employer?",
          ul: [
            "Flexible scale. Working students in higher education (aged 15 to 27) had an average usual working time of 18.7 hours a week in the third quarter of 2023 [1]. At VOIDS, working students typically work 4 to 24 hours a week.",
            "Structural work calls for an employment contract. According to the Dutch government, an intern may not replace a regular employee: in an internship, learning is central [2]. Work that has to be done on an ongoing basis therefore calls for an employment contract, which is what a working student has.",
            "A large pool of students. In the 2025/26 academic year, preliminary CBS figures show more than 770,000 students enrolled in universities of applied sciences and research universities [3].",
            "Fitting work is different from a side job. The three most common occupations of working higher-education students in the third quarter of 2023 were sales assistant in retail (10%), hospitality service (8%) and shelf stocker (5%) [1]. According to SEO Economic Research, graduates with a side job in a relevant sector found a first substantial job faster on average than graduates without a side job [4].",
            "Labour market context. In the second quarter of 2026 there were 95 vacancies per 100 unemployed people (seasonally adjusted, preliminary CBS figures), against 142 in the second quarter of 2022 [5]. So the labour market is less tight than two years ago, but not slack.",
            "Getting to know each other without an open end. A fixed-term contract lets employer and student get to know each other before you offer a permanent one. Clients in the cases on our website describe moves into a permanent role.",
          ],
        },
        {
          h2: "Where does it not work?",
          ul: [
            "Work that needs fixed, full cover, such as a staffed phone desk from nine to five. A working student plans around lectures and exams, which clashes with rigid rosters.",
            "Roles with a lot of final responsibility and no guidance. A working student often has little practical experience and needs a point of contact.",
            "Knowledge that sits in one head only. A working student leaves at the latest when the degree is finished; plan a handover and a successor.",
            "Situations where you mainly look for the lowest cost. The minimum wage is a floor that applies to every employee, and a role with real responsibility should be paid in proportion to the work.",
          ],
        },
        {
          h2: "What does it cost, and why isn't it about the lowest possible cost?",
          p: "As of 1 July 2026 the statutory minimum wage is € 14.99 gross per hour for employees aged 21 and over; for ages 15 to 20 lower youth minimum wages apply by age [6]. On top of that you pay holiday allowance (the Dutch government lists 8% holiday pay as a mandatory wage cost) and remit payroll taxes and contributions [7]. An illustration: 20 hours a week at € 14.99 is € 299.80 gross per week, excluding holiday pay and employer costs. Your total investment is lower than for a full-time starter because you buy fewer hours, not because the hourly rate should be lower. Always check the amounts with the Dutch government: they're set per 1 January and per 1 July.",
        },
        {
          h2: "Which rules should you know?",
          ul: [
            "In employment law a working student is an employee if the features of an employment contract are met: work under the employer's authority, pay and personal performance of the work [8]. You must give important terms in writing within one week and within one month [8].",
            "Chain rule: after more than three fixed-term contracts, or if those contracts together (gaps of at most six months included) cover more than 36 months, the last contract counts as entered into for an indefinite period (Article 7:668a of the Dutch Civil Code) [9]. A collective labour agreement can deviate from this.",
            "Notice obligation: for a fixed-term contract of six months or longer you must tell the employee in writing, at the latest one month before the end, whether you'll continue it and on what terms (Article 7:668 of the Dutch Civil Code) [10].",
          ],
        },
        {
          h2: "When is an intern or a starter a better fit?",
          p: "An intern suits a defined learning goal with guidance; the work may not replace the work of a regular employee [2]. A starter suits work that fills a full working week. A working student sits in between. In our articles on working student, intern or starter and on the cost of a working student compared with a starter, we work this choice out further.",
        },
        {
          h2: "Your next step",
          p: "Which work comes back every week at your company without filling a full job? Write it down, with hours and tasks. Then you already have your first working-student role.",
        },
      ],
    },
  },
  // 36 ---------------------------------------------------------------------
  {
    slug: "werkstudent-aannemen-checklist-werkgever",
    aud: "bedrijf",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/hg-01.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Werkstudent aannemen: dit moet je als werkgever regelen",
      en: "Hiring a working student: what employers must arrange",
    },
    excerpt: {
      nl: "Identiteitscheck, schriftelijke afspraken, minimumloon, loonheffingen en arbo: de stappen vóór de eerste werkdag, volgens Ondernemersplein en de Rijksoverheid.",
      en: "ID check, written terms, minimum wage, payroll taxes and health and safety: the steps before day one, as listed by the Dutch government and its business portal.",
    },
    read: { nl: "3 min", en: "4 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudent aannemen: checklist voor werkgevers",
      en: "Hiring a working student: employer checklist",
    },
    metaDescription: {
      nl: "Welke stappen moet een werkgever zetten voordat een werkstudent begint? Identiteitscheck, contract, loonheffingen, minimumloon en arbo in één checklist.",
      en: "Which steps must an employer take before a working student starts? ID check, contract, payroll taxes, minimum wage and health and safety in one checklist.",
    },
    keywords: {
      nl: [
        "werkstudent aannemen",
        "werkstudent in dienst nemen",
        "checklist personeel aannemen",
        "identiteitsbewijs werknemer kopie",
        "loonheffingsverklaring",
        "werkstudent werkgever verplichtingen",
      ],
      en: [
        "hiring a working student",
        "employing a student Netherlands",
        "employer checklist new employee",
        "copy of ID employee Netherlands",
        "payroll tax form employee",
        "employer obligations working student",
      ],
    },
    sources: [
      {
        title: "ID-bewijs controleren en bewaren",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/wetten-en-regels/identiteitsbewijs-controleren-en-bewaren/",
        accessed: "2026-10-11",
      },
      {
        title: "Stappenplan personeel aannemen",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/stappenplan-personeel-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
      {
        title: "Werkvergunning werkstudent",
        publisher: "UWV",
        url: "https://www.uwv.nl/nl/werkvergunning/werkstudent",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Ik werk in loondienst",
        publisher: "Belastingdienst",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/ik-werk-in-loondienst",
        accessed: "2026-10-11",
      },
      {
        title: "Algemene voorwaarden",
        publisher: "VOIDS",
        url: "https://voids.agency/terms",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Neem je een werkstudent aan, dan word je werkgever in de zin van de wet. Vóór de eerste werkdag controleer je de identiteit en het werkrecht, leg je de afspraken vast, betaal je minimaal het minimumloon met vakantiebijslag en regel je loonheffingen en arbozaken. Hieronder de stappen zoals Ondernemersplein en de Rijksoverheid ze noemen.",
        },
        {
          h2: "De checklist in het kort",
          ul: [
            "Controleer een origineel, geldig identiteitsbewijs en of de persoon in Nederland mag werken, vóór de eerste werkdag [1]",
            "Bewaar een leesbare kopie van het identiteitsbewijs in je administratie [1]",
            "Zorg dat de gegevens voor de loonheffingen, de kopie van het identiteitsbewijs en de loonstaat in je administratie staan voordat de werknemer begint [2]",
            "Leg de afspraken vast en deel de verplichte gegevens binnen een week en binnen een maand schriftelijk mee [3]",
            "Betaal minimaal het wettelijk minimumloon en vakantiebijslag [2]",
            "Voldoe aan de Arbowet: arbobeleid, een basiscontract met een arbodienstverlener en een risico-inventarisatie en -evaluatie (RI&E) [2]",
            "Draag loonheffingen en premies af en controleer of de werknemer een Nederlandse zorgverzekering heeft [2]",
            "Controleer of je een pensioenregeling moet aanbieden, bijvoorbeeld via een bedrijfstakpensioenfonds of een cao [2]",
          ],
        },
        {
          h2: "Hoe controleer je de identiteit?",
          p: "Ondernemersplein noemt dit de verificatieplicht. Je vraagt een origineel en geldig identiteitsbewijs, zoals een paspoort, een Nederlandse identiteitskaart, een identiteitskaart of paspoort uit een EER-land of een Nederlands vreemdelingendocument. Een rijbewijs of een kopie is geen geldig bewijs [1]. Daarna bewaar je een kopie in je administratie, minstens vijf jaar na het kalenderjaar waarin de werknemer uit dienst gaat. Je moet de werknemer vertellen waarvoor je de kopie gebruikt en hoe die gegevens kan afschermen die je niet nodig hebt [1]. Wat je vóór indiensttreding wel en niet mag vragen, staat in ons artikel over sollicitatiegesprekken.",
        },
        {
          h2: "Mag iedere student bij je werken?",
          p: "Mensen met de Nederlandse nationaliteit of de nationaliteit van een ander EER-land of Zwitserland mogen zonder werkvergunning werken [1]. Voor studenten van buiten de EER met een verblijfsvergunning voor studie heeft de werkgever een tewerkstellingsvergunning (TWV) nodig. Volgens UWV mag zo'n werkstudent maximaal 16 uur per week werken, of fulltime in de maanden juni, juli en augustus, tegen een marktconform loon [4]. Meer daarover lees je in ons artikel over werken als internationale student.",
        },
        {
          h2: "Wat moet je schriftelijk vastleggen?",
          p: "Een arbeidsovereenkomst mag schriftelijk of mondeling, maar schriftelijk is verstandig. Binnen een week na indiensttreding moet je onder meer de namen en woonplaatsen, de werkplek, de functie, de startdatum, de duur van een tijdelijk contract, het aantal uren, het salaris en eventueel de proeftijd schriftelijk meedelen. Binnen een maand volgen onder meer de vakantietoeslag, het aantal vakantiedagen, de opzegtermijn, een eventuele pensioenregeling en concurrentiebeding en de toepasselijke cao [3]. De Rijksoverheid wijst erop dat de informatieplicht is uitgebreid door de EU-richtlijn transparante en voorspelbare arbeidsvoorwaarden; lees de actuele lijst op de pagina van de Rijksoverheid [3].",
        },
        {
          h2: "Wat betaal je minimaal?",
          p: "Vanaf 21 jaar geldt het wettelijk minimumuurloon, voor 15 tot en met 20 jaar het minimumjeugdloon, en je betaalt vakantiebijslag [2]. Per 1 juli 2026 is het minimumuurloon vanaf 21 jaar € 14,99 bruto [5]. In ons artikel over het minimumloon voor werkstudenten staan alle bedragen per leeftijd.",
        },
        {
          h2: "Hoe zit het met loonheffingen?",
          p: "Een werknemer krijgt van je het formulier Model opgaaf gegevens voor de loonheffingen. De werknemer bepaalt daarmee onder meer of je de loonheffingskorting toepast, en kan voor studenten het formulier voor de studenten- en scholierenregeling gebruiken [6]. Welke voorwaarden en bedragen voor die regeling gelden, lees je bij de Belastingdienst. Als werkgever houd je loonheffing in en draag je premies af voor de werknemers- en volksverzekeringen [2].",
        },
        {
          h2: "Arbo en verzekeringen",
          p: "De werknemer moet veilig en gezond kunnen werken. Je hebt arbobeleid nodig, een basiscontract met een arbodienstverlener en vanaf één werknemer een RI&E, waarop de Nederlandse Arbeidsinspectie controleert en een boete kan opleggen [2]. Heeft de werknemer geen Nederlandse zorgverzekering, dan sluit het CAK er een af en houd jij de premie in op het loon [2].",
        },
        {
          h2: "Wat doet VOIDS, en wat niet?",
          p: "VOIDS levert via werving en selectie kandidaten. Volgens onze algemene voorwaarden blijft de opdrachtgever verantwoordelijk voor de uiteindelijke aannamebeslissing [7]. De werkgeversverplichtingen in dit artikel liggen dus bij de organisatie die de werkstudent in dienst neemt.",
        },
      ],
      en: [
        {
          p: "If you hire a working student, you become an employer in the legal sense. Before the first working day you check identity and right to work, put the terms in writing, pay at least the minimum wage plus holiday allowance, and arrange payroll taxes and health and safety. Below: the steps as listed by Ondernemersplein (the Dutch government's business portal) and the Dutch government.",
        },
        {
          h2: "The checklist in short",
          ul: [
            "Check an original, valid identity document and whether the person may work in the Netherlands, before the first working day [1]",
            "Keep a legible copy of the identity document in your records [1]",
            "Make sure the payroll-tax details, the copy of the identity document and the payroll record are in your administration before the employee starts [2]",
            "Put the terms in writing and give the mandatory information in writing within one week and within one month [3]",
            "Pay at least the statutory minimum wage and holiday allowance [2]",
            "Comply with the Working Conditions Act: a health and safety policy, a basic contract with an occupational health service and a risk inventory and evaluation (RI&E) [2]",
            "Remit payroll taxes and contributions and check that the employee has Dutch health insurance [2]",
            "Check whether you must offer a pension scheme, for example through an industry pension fund or a collective agreement [2]",
          ],
        },
        {
          h2: "How do you check identity?",
          p: "The business portal calls this the verification duty. You ask for an original, valid identity document, such as a passport, a Dutch identity card, an identity card or passport from an EEA country or a Dutch residence document. A driving licence or a copy is not valid proof [1]. You then keep a copy in your records for at least five years after the calendar year in which the employee leaves. You must tell the employee what you use the copy for and how they can black out data you don't need [1]. What you may and may not ask before someone is hired is covered in our article on job interviews.",
        },
        {
          h2: "Can any student work for you?",
          p: "People with Dutch nationality or the nationality of another EEA country or Switzerland may work without a work permit [1]. For students from outside the EEA with a residence permit for study, the employer needs an employment permit (TWV). According to UWV, such a working student may work at most 16 hours a week, or full-time in June, July and August, at a market-rate wage [4]. Read more in our article on working as an international student.",
        },
        {
          h2: "What must you put in writing?",
          p: "An employment contract may be written or oral, but written is wise. Within one week of the start date you must give in writing, among other things, the names and places of residence, the place of work, the job, the start date, the duration of a fixed-term contract, the hours, the salary and any probation period. Within one month follow, among other things, the holiday allowance, the number of holiday days, the notice period, any pension scheme and non-compete clause and the applicable collective agreement [3]. The Dutch government points out that the duty to inform has been extended by the EU directive on transparent and predictable working conditions; read the current list on the government page [3].",
        },
        {
          h2: "What do you pay at minimum?",
          p: "From age 21 the statutory minimum hourly wage applies, from 15 to 20 the youth minimum wage, and you pay holiday allowance [2]. As of 1 July 2026 the minimum hourly wage from age 21 is € 14.99 gross [5]. Our article on the minimum wage for working students lists all amounts by age.",
        },
        {
          h2: "What about payroll taxes?",
          p: "You give the employee the form Model opgaaf gegevens voor de loonheffingen. The employee uses it to state, among other things, whether you apply the payroll tax credit, and students can use the form for the student and pupil scheme [6]. The Tax Administration explains the conditions and amounts for that scheme. As an employer you withhold payroll tax and remit contributions for employee and national insurance schemes [2].",
        },
        {
          h2: "Health and safety and insurance",
          p: "The employee must be able to work safely and healthily. You need a health and safety policy, a basic contract with an occupational health service and, from one employee, an RI&E, which the Dutch Labour Authority checks and can fine you for [2]. If the employee has no Dutch health insurance, the CAK arranges one and you withhold the premium from the wage [2].",
        },
        {
          h2: "What does VOIDS do, and what doesn't it?",
          p: "VOIDS supplies candidates through recruitment and selection. Under our general terms the client remains responsible for the final hiring decision [7]. The employer obligations in this article therefore rest with the organisation that employs the working student.",
        },
      ],
    },
  },
  // 37 ---------------------------------------------------------------------
  {
    slug: "contract-werkstudent-verlengen-ketenregeling",
    aud: "bedrijf",
    legalTopic: true,
    photo: "/photography/hg-02.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Werkstudentcontract verlengen: ketenregeling en aanzegplicht",
      en: "Extending a working-student contract: chain rule and notice",
    },
    excerpt: {
      nl: "Hoe vaak mag je een tijdelijk contract verlengen, wanneer moet je dat aanzeggen en wanneer is er een transitievergoeding? De regels, met de wetstekst als bron.",
      en: "How often may you extend a fixed-term contract, when must you give notice and when is a transition payment due? The rules, with the statute as source.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Tijdelijk contract verlengen: ketenregeling uitgelegd",
      en: "Extending a fixed-term contract: the chain rule",
    },
    metaDescription: {
      nl: "Hoe vaak mag je een tijdelijk contract verlengen? Ketenregeling, aanzegplicht en transitievergoeding voor werkgevers, met bronnen en wijzigingen in 2028.",
      en: "How often may you extend a fixed-term contract? Chain rule, notice obligation and transition payment for employers, with sources and 2028 changes.",
    },
    keywords: {
      nl: [
        "tijdelijk contract verlengen",
        "ketenregeling",
        "ketenbepaling tijdelijk contract",
        "aanzegplicht tijdelijk contract",
        "transitievergoeding tijdelijk contract",
        "werkstudentcontract verlengen",
      ],
      en: [
        "extend fixed-term contract Netherlands",
        "chain rule fixed-term contracts",
        "notice obligation fixed-term contract",
        "transition payment fixed-term contract",
        "extend working student contract",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668a (ketenregeling), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Wanneer gaat mijn tijdelijke contract over in een vast contract?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wanneer-verandert-mijn-tijdelijke-arbeidscontract-in-een-vast-contract",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 668 (aanzegplicht), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel668/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Wat is een aanzegtermijn?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-is-een-aanzegtermijn",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 673 (transitievergoeding), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel673/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Heb ik recht op een transitievergoeding als ik word ontslagen?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/ontslag/vraag-en-antwoord/heb-ik-recht-op-een-vergoeding-als-ik-word-ontslagen",
        accessed: "2026-10-11",
      },
      {
        title: "Meer zekerheid voor mensen met een flexcontract",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/08/meer-zekerheid-voor-mensen-met-een-flexcontract",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een tijdelijk contract met een werkstudent mag je verlengen, maar niet onbeperkt. Volgens artikel 7:668a BW geldt het laatste contract als aangegaan voor onbepaalde tijd als je meer dan drie tijdelijke contracten sluit, of als die contracten samen (tussenpozen van ten hoogste zes maanden inbegrepen) meer dan 36 maanden beslaan [1][2]. Bij een contract van zes maanden of langer moet je bovendien uiterlijk een maand voor het einde schriftelijk laten weten of je het voortzet [3][4].",
        },
        {
          h2: "Hoe werkt de ketenregeling?",
          p: "De wet kijkt naar opvolgende contracten tussen dezelfde partijen. Liggen er tussen de contracten ten hoogste zes maanden, dan loopt de keten door. Pas bij een langere pauze begint de teller opnieuw [1]. Zou een nieuw contract het vierde worden, of komt de totale periode boven de 36 maanden uit, dan geldt het laatste contract als een contract voor onbepaalde tijd, ook als er op papier een einddatum staat [1]. Dit geldt ook voor opeenvolgende werkgevers die ten aanzien van het werk redelijkerwijs elkaars opvolger zijn [1].",
          ul: [
            "Een cao kan afwijken: de Rijksoverheid meldt dat afspraken in de cao voorgaan [2]",
            "Uitzonderingen volgens de Rijksoverheid: een leerwerkovereenkomst voor de beroepsbegeleidende leerweg (bbl), en werknemers jonger dan 18 jaar die gemiddeld maximaal 12 uur per week werken [2]",
            "Voor een werkstudent van 18 jaar of ouder geldt de uitzondering voor jongeren dus niet, ook niet bij weinig uren",
          ],
        },
        {
          h2: "Wat is de aanzegplicht?",
          p: "Bij een tijdelijk contract van zes maanden of langer moet de werkgever uiterlijk een maand voor het einde schriftelijk laten weten of het contract wordt voortgezet en, zo ja, onder welke voorwaarden (artikel 7:668 BW) [3]. De plicht geldt niet bij een contract korter dan zes maanden of bij een einddatum die niet op een kalenderdatum is gesteld [3][4]. Laat je de aanzegging achterwege, dan ben je een vergoeding verschuldigd van het loon over één maand; kom je te laat, dan een evenredige vergoeding [3][4]. Loopt de arbeidsrelatie na de einddatum door zonder dat je tijdig hebt aangezegd (of bij een contract korter dan zes maanden zonder tegenspraak), dan wordt het contract volgens lid 4 geacht voor dezelfde tijd, maximaal één jaar, op de vroegere voorwaarden te zijn voortgezet [3].",
        },
        {
          h2: "Is er een transitievergoeding als je het contract niet verlengt?",
          p: "In veel gevallen wel. Volgens artikel 7:673 BW is de werkgever een transitievergoeding verschuldigd als een tijdelijk contract van rechtswege eindigt op initiatief van de werkgever en niet wordt voortgezet, tenzij er een opvolgend contract is dat binnen zes maanden ingaat en tussentijds opzegbaar is [5]. De vergoeding is voor elk dienstjaar een derde van het maandloon, naar evenredigheid voor kortere perioden [5]. Er is geen vergoeding als het contract eindigt voordat de werknemer 18 wordt en hij gemiddeld ten hoogste twaalf uur per week werkte [5]. Weigert de werknemer zelf een verlenging, dan bestaat alleen recht op vergoeding bij ernstig verwijtbaar handelen van de werkgever [6]. Voor de hoogte van de vergoeding verwijst de Rijksoverheid naar een rekenhulp van het ministerie van Sociale Zaken en Werkgelegenheid [6].",
        },
        {
          h2: "Wat verandert er per 1 januari 2028?",
          p: "De Eerste Kamer heeft op 7 juli 2026 ingestemd met de Wet meer zekerheid flexwerkers. Volgens de Rijksoverheid gaan de belangrijkste onderdelen per 1 januari 2028 in. Na drie tijdelijke contracten mag dan drie jaar lang geen tijdelijk contract meer worden afgesloten. Oproepcontracten worden vervangen door een bandbreedtecontract, met een uitzondering voor bijbanen van onder meer scholieren en studenten [7]. Stand per 11 oktober 2026.",
        },
        {
          h2: "Wat kun je praktisch doen?",
          ul: [
            "Noteer bij elk contract de einddatum en een aanzegdatum een maand eerder",
            "Beslis op tijd of je een volgend tijdelijk contract aanbiedt, een vast contract of afscheid neemt, en houd het aantal contracten en de totale looptijd bij",
            "Controleer of een cao van toepassing is die afwijkt van de wet",
            "Leg elke aanzegging schriftelijk vast en bewaar een bewijs van verzending",
            "Laat je bij twijfel adviseren door een arbeidsjurist of een brancheorganisatie",
          ],
        },
      ],
      en: [
        {
          p: "You may extend a fixed-term contract with a working student, but not indefinitely. Under Article 7:668a of the Dutch Civil Code the last contract counts as permanent if you conclude more than three fixed-term contracts, or if those contracts together (gaps of at most six months included) cover more than 36 months [1][2]. For a contract of six months or longer you must also tell the employee in writing, at the latest one month before the end, whether you'll continue it [3][4].",
        },
        {
          h2: "How does the chain rule work?",
          p: "The law looks at successive contracts between the same parties. If the gaps between contracts are at most six months, the chain continues. Only a longer gap restarts the count [1]. If a new contract would be the fourth, or if the total period exceeds 36 months, the last contract counts as permanent, even if an end date is written on paper [1]. This also applies to successive employers who, as regards the work, can reasonably be regarded as each other's successor [1].",
          ul: [
            "A collective agreement can deviate: the Dutch government states that agreements in the collective agreement take precedence [2]",
            "Exceptions according to the Dutch government: an apprenticeship agreement for the work-based learning route (bbl), and employees under 18 who work on average no more than 12 hours a week [2]",
            "The exception for young people therefore doesn't apply to a working student aged 18 or over, even when working few hours",
          ],
        },
        {
          h2: "What is the notice obligation?",
          p: "For a fixed-term contract of six months or longer, the employer must tell the employee in writing, at the latest one month before the end, whether the contract will be continued and, if so, on what terms (Article 7:668) [3]. The duty doesn't apply to a contract shorter than six months or to an end date that isn't set as a calendar date [3][4]. If you fail to give notice at all, you owe compensation equal to one month's wages; if you're late, a proportionate amount [3][4]. If the employment continues after the end date without timely notice (or, for a contract shorter than six months, without objection), paragraph 4 provides that the contract is deemed continued for the same period, up to one year, on the former terms [3].",
        },
        {
          h2: "Is a transition payment due if you don't extend the contract?",
          p: "In many cases, yes. Under Article 7:673 the employer owes a transition payment if a fixed-term contract ends by operation of law on the employer's initiative and isn't continued, unless there's a follow-up contract that starts within six months and can be terminated early [5]. The payment is one third of the monthly wage for each year of service, pro rata for shorter periods [5]. No payment is due if the contract ends before the employee turns 18 and the employee worked on average at most twelve hours a week [5]. If the employee refuses an extension, there's only a right to payment in case of seriously culpable conduct by the employer [6]. For the amount, the Dutch government refers to a calculator by the Ministry of Social Affairs and Employment [6].",
        },
        {
          h2: "What changes on 1 January 2028?",
          p: "On 7 July 2026 the Senate approved the Act on more security for flexible workers. According to the Dutch government, the main provisions take effect on 1 January 2028. After three fixed-term contracts, no fixed-term contract may then be concluded for three years. On-call contracts are replaced by a bandwidth contract, with an exception for side jobs of, among others, pupils and students [7]. Position as of 11 October 2026.",
        },
        {
          h2: "What can you do in practice?",
          ul: [
            "Note the end date of each contract and a notice date one month earlier",
            "Decide in good time whether to offer another fixed-term contract, a permanent one or to part ways, and keep track of the number of contracts and the total duration",
            "Check whether a collective agreement applies that deviates from the law",
            "Put every notice in writing and keep proof of sending",
            "If in doubt, get advice from an employment lawyer or an employers' association",
          ],
        },
      ],
    },
  },
  // 38 ---------------------------------------------------------------------
  {
    slug: "minimumloon-werkstudent-2026",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/hg-03.jpg",
    tag: { nl: "Fair pay", en: "Fair pay" },
    title: {
      nl: "Minimumloon werkstudent 2026: bedragen per leeftijd",
      en: "Minimum wage for working students in 2026: amounts by age",
    },
    excerpt: {
      nl: "Een werkstudent heeft recht op minstens het wettelijk minimumloon. De bedragen per 1 juli 2026 per leeftijd, hoe je het per week uitrekent en wat er in 2027 verandert voor jongeren.",
      en: "A working student is entitled to at least the statutory minimum wage. The amounts per 1 July 2026 by age, how to work out a weekly figure and what changes for young people in 2027.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Minimumloon werkstudent 2026: bedragen per 1 juli",
      en: "Minimum wage working student 2026: amounts by age",
    },
    metaDescription: {
      nl: "Wat is het minimumloon voor een werkstudent per 1 juli 2026? Bedragen per leeftijd, hoe je het per week berekent en wat er in 2027 verandert voor jongeren.",
      en: "What is the minimum wage for a working student as of 1 July 2026? Amounts by age, how to calculate it per week and what changes for young people in 2027.",
    },
    keywords: {
      nl: [
        "minimumloon werkstudent",
        "minimumloon 2026",
        "minimumuurloon 1 juli 2026",
        "minimumjeugdloon",
        "werkstudent salaris minimaal",
        "minimumloon per week berekenen",
      ],
      en: [
        "minimum wage working student",
        "minimum wage Netherlands 2026",
        "minimum hourly wage 1 July 2026",
        "youth minimum wage Netherlands",
        "minimum wage per week calculation",
      ],
    },
    sources: [
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Stappenplan personeel aannemen",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/stappenplan-personeel-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Hoger minimumjeugdloon vanaf 2027",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/04/17/hoger-minimumjeugdloon-vanaf-2027",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Heb ik recht op het minimumloon als ik stage loop?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vraag-en-antwoord/minimumloon-stage",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Ja, een werkstudent heeft recht op minstens het wettelijk minimumloon, net als iedere andere werknemer. Per 1 juli 2026 is dat € 14,99 bruto per uur vanaf 21 jaar; voor 15 tot en met 20 jaar gelden lagere minimumjeugdlonen per leeftijd [1]. De Rijksoverheid stelt de bedragen per 1 januari en per 1 juli vast, dus controleer altijd de actuele tabel voordat je een salaris afspreekt of beoordeelt.",
        },
        {
          h2: "Wat is het minimumuurloon per 1 juli 2026?",
          p: "Dit zijn de brutobedragen per uur volgens de Rijksoverheid, geldend per 1 juli 2026 [1]:",
          ul: [
            "21 jaar en ouder: € 14,99",
            "20 jaar: € 11,99",
            "19 jaar: € 8,99",
            "18 jaar: € 7,50",
            "17 jaar: € 5,92",
            "16 jaar: € 5,17",
            "15 jaar: € 4,50",
          ],
        },
        {
          p: "Per 1 januari 2026 was het bedrag voor 21 jaar en ouder € 14,71 [1]. Het minimumloon geldt voor alle werknemers vanaf 15 jaar [1].",
        },
        {
          h2: "Geldt het minimumloon ook bij weinig uren per week?",
          p: "Ja. Sinds 2024 bestaat het minimumloon alleen als uurloon; er zijn geen vaste minimum maand-, week- en daglonen meer. Het loon per week of maand hangt af van het aantal uren dat telt als arbeidsduur, en daarin tellen volgens de Rijksoverheid ook de uren mee waarop verlof is opgenomen en de uren waarop iemand ziek was met recht op doorbetaling [1]. Een rekenvoorbeeld: 16 uur per week tegen € 14,99 is € 239,84 bruto per week; 24 uur is € 359,76. Dat is exclusief vakantiebijslag.",
        },
        {
          h2: "Komt daar vakantiegeld bovenop?",
          p: "Naast het minimumloon moet een werkgever vakantiebijslag betalen; Ondernemersplein noemt 8% vakantiegeld als verplichte loonkost [2]. Controleer in je contract of het vakantiegeld apart is vermeld of is verwerkt in het uurloon, en vraag het zo nodig na.",
        },
        {
          h2: "Wat verandert er in 2027 voor jongeren?",
          p: "Volgens een bericht van de Rijksoverheid van 17 april 2026 gaat het minimumjeugdloon voor 16 tot en met 20 jaar per 1 januari 2027 omhoog. De percentages van het minimumloon worden dan 87,5% voor 20 jaar (nu 80%), 75% voor 19 jaar (nu 60%), 62,5% voor 18 jaar (nu 50%), 50% voor 17 jaar (nu 39,5%) en 40% voor 16 jaar (nu 34,5%); voor 15 jaar blijft het 30% [3]. De euro-bedragen volgen uit het minimumloon van dat moment.",
        },
        {
          h2: "Is het minimumloon ook een eerlijk salaris?",
          p: "Dat is een andere vraag. Het minimumloon is een wettelijke ondergrens. Een werkstudent met eigen verantwoordelijkheid hoort in verhouding tot het werk betaald te worden, niet alleen volgens het minimum. In ons artikel over een eerlijk uurtarief voor werkstudenten werken we dat uit.",
        },
        {
          h2: "En voor stagiairs?",
          p: "Een stagiair heeft geen recht op het minimumloon, omdat bij een stage het leren centraal staat. Doet iemand in feite gewoon werk, dan is er sprake van een arbeidsovereenkomst en heeft diegene recht op minimaal het minimumloon. De Nederlandse Arbeidsinspectie controleert of een stagiair gewoon werk doet en kan een boete geven bij stagemisbruik [4]. Meer daarover lees je in ons artikel over de stagevergoeding.",
        },
        {
          h2: "Hoe controleer je of je het goed krijgt?",
          ul: [
            "Bepaal je leeftijd op het moment van het werk en zoek het bijbehorende uurbedrag op in de actuele tabel van de Rijksoverheid",
            "Deel je maandsalaris door het aantal uren waarover het wordt betaald (inclusief opgenomen verlof en doorbetaalde ziekte-uren)",
            "Vermoed je onderbetaling, bespreek het dan eerst met je werkgever. Je kunt het ook melden bij de Nederlandse Arbeidsinspectie [4]",
          ],
        },
      ],
      en: [
        {
          p: "Yes, a working student is entitled to at least the statutory minimum wage, like any other employee. As of 1 July 2026 that's € 14.99 gross per hour from age 21; for ages 15 to 20 lower youth minimum wages apply by age [1]. The Dutch government sets the amounts per 1 January and per 1 July, so always check the current table before agreeing or assessing a salary.",
        },
        {
          h2: "What is the minimum hourly wage as of 1 July 2026?",
          p: "These are the gross hourly amounts according to the Dutch government, valid as of 1 July 2026 [1]:",
          ul: [
            "Age 21 and over: € 14.99",
            "Age 20: € 11.99",
            "Age 19: € 8.99",
            "Age 18: € 7.50",
            "Age 17: € 5.92",
            "Age 16: € 5.17",
            "Age 15: € 4.50",
          ],
        },
        {
          p: "As of 1 January 2026 the amount for age 21 and over was € 14.71 [1]. The minimum wage applies to all employees from age 15 [1].",
        },
        {
          h2: "Does the minimum wage also apply to few hours a week?",
          p: "Yes. Since 2024 the minimum wage exists only as an hourly wage; there are no fixed minimum monthly, weekly or daily wages any more. The wage per week or month depends on the hours that count as working time, and according to the Dutch government that includes hours of leave taken and hours of sick leave with entitlement to continued pay [1]. An illustration: 16 hours a week at € 14.99 is € 239.84 gross per week; 24 hours is € 359.76. That excludes holiday allowance.",
        },
        {
          h2: "Is holiday pay on top?",
          p: "Besides the minimum wage, an employer must pay holiday allowance; the business portal lists 8% holiday pay as a mandatory wage cost [2]. Check in your contract whether holiday pay is stated separately or built into the hourly wage, and ask if necessary.",
        },
        {
          h2: "What changes in 2027 for young people?",
          p: "According to a Dutch government announcement of 17 April 2026, the youth minimum wage for ages 16 to 20 goes up on 1 January 2027. The percentages of the minimum wage then become 87.5% at 20 (now 80%), 75% at 19 (now 60%), 62.5% at 18 (now 50%), 50% at 17 (now 39.5%) and 40% at 16 (now 34.5%); at 15 it stays at 30% [3]. The euro amounts follow from the minimum wage at that time.",
        },
        {
          h2: "Is the minimum wage also a fair salary?",
          p: "That's a different question. The minimum wage is a statutory floor. A working student with their own responsibilities should be paid in proportion to the work, not just at the minimum. We expand on this in our article on a fair hourly rate for working students.",
        },
        {
          h2: "And for interns?",
          p: "An intern has no right to the minimum wage, because in an internship learning is central. If someone in fact does ordinary work, there's an employment contract and they're entitled to at least the minimum wage. The Dutch Labour Authority checks whether an intern does ordinary work and can fine internship abuse [4]. Read more in our article on the internship allowance.",
        },
        {
          h2: "How do you check you're paid correctly?",
          ul: [
            "Determine your age at the time of the work and look up the matching hourly amount in the current table of the Dutch government",
            "Divide your monthly pay by the number of hours it's paid for (including leave taken and paid sick hours)",
            "If you suspect underpayment, first discuss it with your employer. You can also report it to the Dutch Labour Authority [4]",
          ],
        },
      ],
    },
  },
  // 39 ---------------------------------------------------------------------
  {
    slug: "stagevergoeding-wat-geldt-er-wettelijk",
    aud: "beide",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/hg-04.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Stagevergoeding: is die verplicht? De regels in 2026",
      en: "Internship allowance: is it mandatory? The rules in 2026",
    },
    excerpt: {
      nl: "Een stagevergoeding is nu niet wettelijk verplicht, maar dat gaat veranderen. Wat nu geldt, hoe vaak studenten een vergoeding krijgen en wanneer een stage eigenlijk een baan is.",
      en: "An internship allowance isn't mandatory by law yet, but that's set to change. What applies now, how often students receive one and when an internship is really a job.",
    },
    read: { nl: "3 min", en: "4 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Stagevergoeding verplicht? Regels en plannen 2026",
      en: "Internship allowance mandatory? Rules and plans 2026",
    },
    metaDescription: {
      nl: "Is een stagevergoeding verplicht? Wat nu geldt, hoe vaak studenten een vergoeding krijgen en wat het kabinet wil veranderen. Stand oktober 2026.",
      en: "Is an internship allowance mandatory? What applies now, how often students get one and what the government wants to change. Status October 2026.",
    },
    keywords: {
      nl: [
        "stagevergoeding verplicht",
        "stagevergoeding 2026",
        "stagiair minimumloon",
        "stageovereenkomst",
        "stage of werkstudent",
        "stagemisbruik",
      ],
      en: [
        "internship allowance mandatory Netherlands",
        "internship pay Netherlands 2026",
        "intern minimum wage Netherlands",
        "internship agreement",
        "intern or working student",
      ],
    },
    sources: [
      {
        title: "Heb ik recht op het minimumloon als ik stage loop?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/vraag-en-antwoord/minimumloon-stage",
        accessed: "2026-10-11",
      },
      {
        title: "Checklist werken met een stagiair of stagiaire",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/een-stagiair-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Kabinet wil stagevergoeding verplichten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/07/03/kabinet-wil-stagevergoeding-verplichten",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Stagevergoeding",
        publisher: "Nederlandse Arbeidsinspectie",
        url: "https://www.nlarbeidsinspectie.nl/onderwerpen/wet-minimumloon-en-minimumvakantiebijslag/stagevergoeding",
        accessed: "2026-10-11",
      },
      {
        title: "Stijgende lijn stagevergoedingen voor studenten",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2025/03/12/stijgende-lijn-stagevergoedingen-voor-studenten",
        year: "2025",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Nee, een stagevergoeding is op dit moment niet wettelijk verplicht, en er is geen wettelijk minimum of maximum [1][2]. Wel kan een cao een vergoeding voorschrijven, en veel opleidingen eisen er een [2]. Het kabinet kondigde op 3 juli 2026 aan dat het recht op een stagevergoeding in de wet komt voor stages in het mbo, hbo en wo, zonder minimumbedrag [3]. Doet iemand in feite gewoon werk, dan is het geen stage maar een arbeidsovereenkomst met recht op minstens het minimumloon [1]. Stand per 11 oktober 2026.",
        },
        {
          h2: "Wat geldt er nu?",
          ul: [
            "Een stagiair heeft geen recht op het wettelijk minimumloon en de werkgever hoeft geen stagevergoeding te betalen. De werkgever bepaalt zelf of en hoeveel [1][4]",
            "Bij een stage staat leren centraal: er is een leerplan met leerdoelen en begeleiding. De stagiair mag volgens de Rijksoverheid geen gewone werknemer vervangen [1][4]",
            "Is het doel van de stage niet leren maar werken, dan heeft de stagiair recht op het minimumloon. De Nederlandse Arbeidsinspectie kan onderzoek doen en een boete opleggen bij stagemisbruik [1][4]",
            "Afspraken met een stagiair horen in een stageovereenkomst; biedt een werkgever een arbeidsovereenkomst aan, dan komt de stagiair in dienst met de rechten en plichten van een werknemer [2]",
          ],
        },
        {
          h2: "Hoe vaak krijgen studenten een vergoeding?",
          p: "De Rijksoverheid meldde in maart 2025 de volgende cijfers: 42% van de mbo-studenten kreeg op de peildatum in maart 2024 een stagevergoeding; in het hbo ontving naar schatting 75% een vergoeding; in het wo was dat 65% van de studenten met een verplichte stage en 91% van de studenten met een facultatieve stage [5]. In 2024 waren in bijna 17% van de onderzochte cao's afspraken over een stagevergoeding gemaakt (10% in 2023). Waar een bedrag werd genoemd, lag dat tussen € 150 en € 750 per maand, met € 400 als meest voorkomend bedrag [5]. Dit zijn cijfers over 2024.",
        },
        {
          h2: "Wat wil het kabinet veranderen?",
          p: "Volgens de Rijksoverheid van 3 juli 2026 krijgen studenten in het mbo, hbo en wo die stagelopen als onderdeel van hun opleiding het recht op een stagevergoeding. Korte stages en stages in het buitenland worden uitgezonderd. Er komt geen minimumbedrag in de wet; sectoren en stagebedrijven maken zelf afspraken, maar het kabinet wil de mogelijkheid vastleggen om later alsnog een minimumbedrag te bepalen. In het hbo en wo wordt ook een stageovereenkomst verplicht. Het wetsvoorstel gaat naar verwachting begin 2027 in internetconsultatie [3]. Het is dus nog niet van kracht en kan nog veranderen.",
        },
        {
          h2: "Stage of werkstudentpositie: wat is het verschil voor jou?",
          p: "Een stage is bedoeld om te leren en wordt vastgelegd in een stageovereenkomst. Een werkstudent heeft een arbeidsovereenkomst en daarmee recht op minimaal het minimumloon [1]; zie ons artikel over het minimumloon voor werkstudenten voor de bedragen per 1 juli 2026. Voor structureel werk dat bij een bedrijf blijft terugkomen is een stage volgens de Rijksoverheid niet de bedoelde vorm, omdat een stagiair geen gewone werknemer mag vervangen [1]. VOIDS geeft bij structureel werk de voorkeur aan een werkstudentschap boven een stage.",
        },
        {
          h2: "Wat kun je als student doen?",
          ul: [
            "Vraag vóór de start om een stageovereenkomst met leerdoelen, begeleiders, de hoogte van de vergoeding en de uren",
            "Kijk of een cao in de sector een stagevergoeding voorschrijft en of je opleiding een vergoeding eist",
            "Merk je dat je vooral gewoon werk doet zonder leerdoelen of begeleiding? Dan kan er sprake zijn van een arbeidsovereenkomst; je kunt dit melden bij de Nederlandse Arbeidsinspectie [1]",
          ],
        },
        {
          h2: "Wat kun je als werkgever doen?",
          ul: [
            "Bepaal of het werk een leerdoel heeft of structureel is; in het tweede geval past een arbeidsovereenkomst [1][2]",
            "Leg afspraken vast in een stageovereenkomst en bepaal de hoogte van de vergoeding. Ondernemersplein noemt als factoren onder meer het opleidingsniveau, de werkervaring en het studiejaar [2]",
            "Houd rekening met het kabinetsvoornemen: een vergoeding wordt naar verwachting een wettelijk recht [3]",
          ],
        },
      ],
      en: [
        {
          p: "No, an internship allowance isn't mandatory by law at the moment, and there's no statutory minimum or maximum [1][2]. A collective agreement can prescribe an allowance, though, and many study programmes require one [2]. On 3 July 2026 the Dutch government announced that the right to an internship allowance will be written into law for internships in secondary vocational education, universities of applied sciences and research universities, without a minimum amount [3]. If someone in fact does ordinary work, it isn't an internship but an employment contract with a right to at least the minimum wage [1]. Position as of 11 October 2026.",
        },
        {
          h2: "What applies now?",
          ul: [
            "An intern has no right to the statutory minimum wage and the employer doesn't have to pay an internship allowance. The employer decides whether to pay one and how much [1][4]",
            "In an internship learning is central: there's a learning plan with learning goals and guidance. According to the Dutch government, the intern may not replace a regular employee [1][4]",
            "If the aim of the placement isn't learning but working, the intern is entitled to the minimum wage. The Dutch Labour Authority can investigate and impose a fine for internship abuse [1][4]",
            "Agreements with an intern belong in an internship agreement; if an employer offers an employment contract, the intern becomes an employee with the rights and duties of an employee [2]",
          ],
        },
        {
          h2: "How often do students receive an allowance?",
          p: "In March 2025 the Dutch government reported the following figures: 42% of secondary vocational students received an internship allowance on the reference date in March 2024; in universities of applied sciences an estimated 75% received one; in research universities it was 65% of students with a compulsory internship and 91% of students with an optional internship [5]. In 2024, almost 17% of the collective agreements examined contained agreements on an internship allowance (10% in 2023). Where an amount was stated, it ranged from € 150 to € 750 a month, with € 400 the most common [5]. These are 2024 figures.",
        },
        {
          h2: "What does the government want to change?",
          p: "According to the Dutch government on 3 July 2026, students in secondary vocational education, universities of applied sciences and research universities who do an internship as part of their programme will get a right to an internship allowance. Short internships and internships abroad are excluded. No minimum amount will be written into the law; sectors and host companies make their own agreements, but the government wants to keep open the option of setting a minimum amount later. In universities of applied sciences and research universities an internship agreement also becomes mandatory. The bill is expected to go to internet consultation in early 2027 [3]. It isn't in force yet and may still change.",
        },
        {
          h2: "Internship or working-student role: what's the difference for you?",
          p: "An internship is meant for learning and is set out in an internship agreement. A working student has an employment contract and so a right to at least the minimum wage [1]; see our article on the minimum wage for working students for the amounts as of 1 July 2026. For work that keeps recurring at a company, an internship isn't the intended form according to the Dutch government, because an intern may not replace a regular employee [1]. For structural work, VOIDS prefers a working-student role over an internship.",
        },
        {
          h2: "What can you do as a student?",
          ul: [
            "Before you start, ask for an internship agreement with learning goals, supervisors, the amount of the allowance and the hours",
            "Check whether a collective agreement in the sector prescribes an allowance and whether your study programme requires one",
            "If you notice you mainly do ordinary work without learning goals or guidance, there may be an employment contract; you can report this to the Dutch Labour Authority [1]",
          ],
        },
        {
          h2: "What can you do as an employer?",
          ul: [
            "Decide whether the work has a learning goal or is structural; in the second case an employment contract fits [1][2]",
            "Put agreements in an internship agreement and decide on the allowance. The government's business portal lists factors such as the level of education, work experience and study year [2]",
            "Take the government's intention into account: an allowance is expected to become a statutory right [3]",
          ],
        },
      ],
    },
  },
  // 40 ---------------------------------------------------------------------
  {
    slug: "sollicitatiegesprek-welke-vragen-mag-een-werkgever-stellen",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/hg-06.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Sollicitatiegesprek: welke vragen mag een werkgever stellen?",
      en: "Job interview: which questions may an employer ask?",
    },
    excerpt: {
      nl: "Gezondheid, kinderwens, BSN, een kopie van je ID of je vorige salaris: wat een werkgever in de sollicitatiefase wel en niet mag vragen, volgens de Autoriteit Persoonsgegevens en de Rijksoverheid.",
      en: "Health, plans for children, your citizen service number, a copy of your ID or your previous salary: what an employer may and may not ask during recruitment, according to the Dutch data protection authority and the government.",
    },
    read: { nl: "3 min", en: "4 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Sollicitatiegesprek: welke vragen zijn niet toegestaan?",
      en: "Job interview: which questions are not allowed?",
    },
    metaDescription: {
      nl: "Welke vragen mag een werkgever niet stellen bij een sollicitatie? Gezondheid, kinderwens, BSN, kopie ID en vorig salaris volgens AP en Rijksoverheid.",
      en: "Which questions may an employer not ask in an application? Health, plans for children, BSN, ID copy and previous pay, per the AP and the government.",
    },
    keywords: {
      nl: [
        "sollicitatiegesprek verboden vragen",
        "wat mag een werkgever vragen bij sollicitatie",
        "vragen naar gezondheid sollicitatie",
        "kopie ID sollicitatie",
        "sollicitatie gegevens bewaren",
        "vorig salaris vragen",
      ],
      en: [
        "job interview illegal questions Netherlands",
        "what can an employer ask in an interview",
        "health questions job interview",
        "copy of ID job application",
        "application data retention",
        "asking previous salary",
      ],
    },
    sources: [
      {
        title: "Stappenplan personeel aannemen",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/stappenplan-personeel-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Job applications (quick answers for applicants)",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/job-applications",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Personal data of applicants",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/job-applications/personal-data-of-applicants",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Meer openheid over loonkloof tussen mannen en vrouwen",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/05/21/meer-openheid-over-loonkloof-tussen-mannen-en-vrouwen",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Personal data during screening",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/screening/personal-data-during-screening",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Screening",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/werk-uitkering/screening",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Richtlijn (EU) 2023/970 ter versterking van het beginsel van gelijke beloning (artikel 5)",
        publisher: "EUR-Lex (Europese Unie)",
        url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32023L0970",
        year: "2023",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een werkgever mag tijdens een sollicitatiegesprek niet vragen naar je gezondheid of ziekteverzuim in het verleden, en niet naar privézaken zoals je gezin of kinderwens [1][2]. In de sollicitatiefase mag een werkgever ook geen kopie van je identiteitsbewijs en geen burgerservicenummer (BSN) vragen [3]. Vragen naar je vorige salaris zijn nog niet wettelijk verboden, maar een wetsvoorstel wil dat veranderen [4].",
        },
        {
          h2: "Wat mag een werkgever niet vragen?",
          ul: [
            "Gezondheid. Een werkgever mag niet vragen of je een ziekte of beperking hebt, en ook niet naar je ziekteverzuim in het verleden. Je hoeft alleen iets te vertellen als het direct van belang is voor de functie, bijvoorbeeld omdat je belangrijke onderdelen ervan niet kunt uitvoeren [2].",
            "Zwangerschap en kinderwens. Je bent niet verplicht te vertellen dat je zwanger bent of wilt worden. Wordt je ernaar gevraagd, dan hoef je de vraag niet naar waarheid te beantwoorden. Een werkgever mag je niet afwijzen omdat je zwanger bent of wilt worden [2]. Ondernemersplein noemt vragen over gezin of kinderwens ook als vragen die niet gesteld mogen worden [1].",
            "Strafrechtelijk verleden. Een werkgever mag hier niet naar vragen, tenzij het een functie betreft waarvoor dat van belang is; meestal volstaat een verklaring omtrent het gedrag (VOG) [3].",
            "BSN. Dat mag een werkgever pas vragen als je in dienst komt; een uitzondering geldt om na te gaan of je tot de doelgroep van de banenafspraak behoort [3].",
            "Een kopie van je identiteitsbewijs. Een werkgever mag je identiteit controleren door je het origineel te laten zien, maar mag in de sollicitatiefase geen kopie, scan of foto maken. Bij indiensttreding is de werkgever wettelijk verplicht een kopie te bewaren [3].",
          ],
        },
        {
          h2: "Wat mag wel?",
          p: "Een werkgever mag vragen naar wat relevant is voor de functie: opleiding, ervaring, motivatie en beschikbaarheid, bijvoorbeeld het aantal uren per week dat je kunt werken naast je studie. Een screening is toegestaan, maar alleen op gegevens die nodig zijn voor de risico's van de functie [5]. De werkgever moet je vooraf laten weten dat er een screening plaatsvindt, waarom, welke gegevens worden onderzocht en waarom die relevant zijn, en je achteraf informeren over de uitkomst. Toestemming is volgens de Autoriteit Persoonsgegevens geen geldige grondslag voor screening, omdat een sollicitant afhankelijk is van de werkgever [6].",
        },
        {
          h2: "Hoe lang mag een werkgever je gegevens bewaren?",
          p: "Word je niet aangenomen, dan is het gebruikelijk dat de werkgever je gegevens uiterlijk vier weken na het einde van de sollicitatieprocedure verwijdert. Je kunt toestemming geven om ze langer te bewaren, bijvoorbeeld voor een latere vacature; een redelijke termijn daarvoor is maximaal een jaar na afloop van de procedure [2][3]. Je hebt ook recht op inzage, correctie en in sommige gevallen verwijdering van je gegevens [2].",
        },
        {
          h2: "En vragen naar je vorige salaris?",
          p: "De Europese richtlijn loontransparantie bepaalt dat werkgevers sollicitanten niet mogen vragen naar hun beloning in huidige of eerdere arbeidsverhoudingen (artikel 5) [7]. De uiterste datum voor omzetting in nationaal recht was 7 juni 2026 [7]. Het Nederlandse wetsvoorstel is op 21 mei 2026 ingediend bij de Tweede Kamer, bevat een verbod om in gesprekken over arbeidsvoorwaarden te vragen naar het laatstverdiende salaris, moet nog door beide Kamers worden goedgekeurd en moet volgens de Rijksoverheid per 1 januari 2027 in werking treden [4]. Stand per 11 oktober 2026; in ons artikel over loontransparantie lees je meer.",
        },
        {
          h2: "Wat kun je als sollicitant doen?",
          ul: [
            "Antwoord op wat voor de functie relevant is en vraag zo nodig waarom een vraag wordt gesteld",
            "Vraag hoe lang je gegevens worden bewaard en wat er met je cv gebeurt als je niet wordt aangenomen",
            "Ga eerst met vragen of klachten naar de organisatie zelf; komt je er samen niet uit, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens [2]",
          ],
        },
        {
          h2: "Wat kun je als werkgever doen?",
          ul: [
            "Stel dezelfde basisvragen aan alle kandidaten en baseer ze op de functie",
            "Vraag naar beschikbaarheid in uren en dagen, niet naar privéomstandigheden",
            "Maak geen kopie van het identiteitsbewijs vóór indiensttreding en vraag niet om het BSN [3]",
            "Verwijder gegevens van afgewezen kandidaten tijdig, of vraag toestemming om ze langer te bewaren [2][3]",
          ],
        },
      ],
      en: [
        {
          p: "During a job interview an employer may not ask about your health or past sickness absence, nor about private matters such as your family or plans to have children [1][2]. In the application stage an employer also may not ask for a copy of your identity document or your citizen service number (BSN) [3]. Asking about your previous salary isn't yet prohibited by law, but a bill aims to change that [4].",
        },
        {
          h2: "What may an employer not ask?",
          ul: [
            "Health. An employer may not ask whether you have an illness or disability, nor about your past sickness absence. You only have to say something if it's directly relevant to the role, for example because you can't perform important parts of it [2].",
            "Pregnancy and plans for children. You aren't obliged to say that you are or want to become pregnant. If you're asked, you don't have to answer truthfully. An employer may not reject you because you're pregnant or want to become pregnant [2]. The government's business portal also lists questions about family or plans for children as questions that may not be asked [1].",
            "Criminal record. An employer may not ask about it unless the role makes it relevant; usually a certificate of conduct (VOG) is enough [3].",
            "BSN. An employer may only ask for it once you start working there; an exception applies to check whether you belong to the target group of the job agreement for people with an occupational disability [3].",
            "A copy of your identity document. An employer may check your identity by having you show the original, but may not make a copy, scan or photo in the application stage. On hiring, the employer is legally obliged to keep a copy [3].",
          ],
        },
        {
          h2: "What is allowed?",
          p: "An employer may ask about what is relevant to the role: education, experience, motivation and availability, for example the number of hours a week you can work next to your studies. Screening is allowed, but only on data needed for the risks of the role [5]. The employer must tell you in advance that a screening takes place, why, which data are examined and why they're relevant, and inform you of the outcome afterwards. According to the Dutch data protection authority, consent isn't a valid basis for screening, because an applicant depends on the employer [6].",
        },
        {
          h2: "How long may an employer keep your data?",
          p: "If you aren't hired, it's customary for the employer to delete your data no later than four weeks after the end of the application procedure. You can give consent for longer retention, for example for a later vacancy; a reasonable period for that is a maximum of one year after the procedure ends [2][3]. You also have the right to access, correct and, in some cases, delete your data [2].",
        },
        {
          h2: "And questions about your previous salary?",
          p: "The EU pay transparency directive provides that employers may not ask applicants about their pay in current or previous employment (Article 5) [7]. The deadline for transposition into national law was 7 June 2026 [7]. The Dutch bill was submitted to the House of Representatives on 21 May 2026, contains a ban on asking about the last salary earned in talks about employment conditions, still has to be approved by both Chambers and, according to the Dutch government, is intended to take effect on 1 January 2027 [4]. Position as of 11 October 2026; read more in our article on pay transparency.",
        },
        {
          h2: "What can you do as an applicant?",
          ul: [
            "Answer what's relevant to the role and, if needed, ask why a question is being asked",
            "Ask how long your data will be kept and what happens to your CV if you aren't hired",
            "Take questions or complaints to the organisation first; if you can't resolve it together, you can file a complaint with the Dutch data protection authority [2]",
          ],
        },
        {
          h2: "What can you do as an employer?",
          ul: [
            "Ask the same basic questions of all candidates and base them on the role",
            "Ask about availability in hours and days, not about private circumstances",
            "Don't make a copy of the identity document before hiring and don't ask for the BSN [3]",
            "Delete the data of rejected candidates in good time, or ask consent to keep them longer [2][3]",
          ],
        },
      ],
    },
  },
  // 41 ---------------------------------------------------------------------
  {
    slug: "salaris-in-vacature-loontransparantie-richtlijn",
    aud: "bedrijf",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/hg-07.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Salaris in je vacature: wat de loontransparantiewet vraagt",
      en: "Salary in your job ad: what pay transparency law requires",
    },
    excerpt: {
      nl: "De Europese loontransparantierichtlijn geeft sollicitanten recht op informatie over de beloning vóór het gesprek. Wat zegt de richtlijn, wat is de stand in Nederland en wat kun je nu al doen?",
      en: "The EU pay transparency directive gives applicants the right to information about pay before the interview. What does the directive say, where does the Netherlands stand and what can you do now?",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Loontransparantie: salaris in je vacature vermelden?",
      en: "Pay transparency: stating salary in your job ad?",
    },
    metaDescription: {
      nl: "Wat vraagt de Europese loontransparantierichtlijn van werkgevers bij vacatures, wat is de stand in Nederland (oktober 2026) en wat kun je nu al doen?",
      en: "What does the EU pay transparency directive ask of employers in job ads, where does the Netherlands stand (October 2026) and what can you do now?",
    },
    keywords: {
      nl: [
        "loontransparantie vacature",
        "salaris in vacature",
        "richtlijn loontransparantie Nederland",
        "wet loontransparantie 2027",
        "salarisbandbreedte vacature",
        "vragen naar salarisgeschiedenis",
      ],
      en: [
        "pay transparency job ad Netherlands",
        "salary in job advert",
        "EU pay transparency directive Netherlands",
        "pay transparency act 2027",
        "salary range job advert",
        "salary history question",
      ],
    },
    sources: [
      {
        title: "Richtlijn (EU) 2023/970 ter versterking van het beginsel van gelijke beloning (artikel 5)",
        publisher: "EUR-Lex (Europese Unie)",
        url: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32023L0970",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Meer openheid over loonkloof tussen mannen en vrouwen",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/actueel/nieuws/2026/05/21/meer-openheid-over-loonkloof-tussen-mannen-en-vrouwen",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Salaris in je vacature wordt de norm. De Europese richtlijn loontransparantie (EU) 2023/970 geeft sollicitanten het recht om vóór het gesprek informatie te krijgen over de aanvangsbeloning of de bandbreedte voor de functie, bijvoorbeeld in een gepubliceerde vacature, en verbiedt vragen naar iemands salarisgeschiedenis [1]. Nederland had de richtlijn uiterlijk 7 juni 2026 moeten omzetten [1]. Het wetsvoorstel is op 21 mei 2026 ingediend bij de Tweede Kamer en moet per 1 januari 2027 ingaan, maar heeft nog geen goedkeuring van beide Kamers [2].",
        },
        {
          h2: "Wat zegt de richtlijn over sollicitanten?",
          p: "Artikel 5 van de richtlijn heeft drie onderdelen [1]:",
          ul: [
            "Sollicitanten hebben het recht om van de toekomstige werkgever informatie te krijgen over de aanvangsbeloning of de bandbreedte daarvan, gebaseerd op objectieve, genderneutrale criteria, en waar van toepassing over de relevante bepalingen van de cao. De informatie moet zo worden verstrekt dat geïnformeerde en transparante onderhandelingen over de beloning mogelijk zijn, bijvoorbeeld in een gepubliceerde vacature.",
            "Werkgevers mogen sollicitanten niet vragen naar hun beloning in huidige of eerdere arbeidsverhoudingen.",
            "Werkgevers zorgen ervoor dat vacatures en functiebenamingen genderneutraal zijn en dat wervingsprocedures niet-discriminerend verlopen.",
          ],
        },
        {
          h2: "Wat is de stand in Nederland op 11 oktober 2026?",
          p: "Volgens de Rijksoverheid diende het kabinet op 21 mei 2026 een wetsvoorstel in bij de Tweede Kamer dat de richtlijn omzet. Het voorstel bevat onder meer een verbod om in gesprekken over arbeidsvoorwaarden te vragen naar het laatstverdiende salaris en de verplichting om een objectief systeem te hebben voor het waarderen en indelen van functies. Organisaties met meer dan 100 werknemers gaan regelmatig rapporteren over loonverschillen: werkgevers met ten minste 150 werknemers voor het eerst uiterlijk 7 juni 2028 over 2027, werkgevers met 100 tot 150 werknemers in 2031 over 2030. Het is de bedoeling dat het wetsvoorstel op 1 januari 2027 in werking treedt; het moet daarvoor nog door de Tweede en Eerste Kamer [2]. De omzettingstermijn van de richtlijn is dus verstreken terwijl de behandeling nog loopt [1][2].",
        },
        {
          h2: "Waarom noem je nu al een bandbreedte?",
          p: "Het is nog geen wettelijke plicht, zolang de wet niet is aangenomen. Maar een vacature met een uurtarief of bandbreedte voorkomt dat je in gesprekken pas laat ontdekt dat verwachtingen niet aansluiten, en het dwingt je om vooraf na te denken over een objectieve beloning voor de rol. Een bandbreedte brengt ook een verplichting mee: je moet de functie en de beloning kunnen onderbouwen.",
        },
        {
          h2: "Wat betekent dit voor juniorfuncties en werkstudenten?",
          ul: [
            "De ondergrens blijft het wettelijk minimumloon: per 1 juli 2026 € 14,99 per uur vanaf 21 jaar en lagere bedragen per leeftijd voor 15 tot en met 20 jaar [3]. Een bandbreedte kan daar niet onder liggen.",
            "Het verbod om naar salarisgeschiedenis te vragen raakt vooral sollicitanten met eerdere banen; een student met weinig ervaring heeft die vaak niet. Een bandbreedte op basis van de functie in plaats van het verleden past daarbij.",
            "Vacatures en functiebenamingen moeten volgens de richtlijn genderneutraal zijn [1].",
          ],
        },
        {
          h2: "Praktische stappen",
          ul: [
            "Bepaal per functie een uurtarief of bandbreedte op basis van objectieve criteria zoals taken, verantwoordelijkheid en vereiste vaardigheden",
            "Noem in de vacature het uurtarief of de bandbreedte en het aantal uren per week",
            "Vraag sollicitanten niet naar hun huidige of eerdere salaris",
            "Gebruik genderneutrale functiebenamingen",
            "Volg de behandeling van het wetsvoorstel en raadpleeg bij twijfel een arbeidsjurist",
          ],
        },
      ],
      en: [
        {
          p: "Salary in your job ad is becoming the norm. The EU pay transparency directive (EU) 2023/970 gives applicants the right to receive, before the interview, information about the starting pay or range for the role, for example in a published job ad, and prohibits asking about someone's pay history [1]. The Netherlands should have transposed the directive by 7 June 2026 [1]. The bill was submitted to the House of Representatives on 21 May 2026 and is due to take effect on 1 January 2027, but hasn't yet been approved by both Chambers [2].",
        },
        {
          h2: "What does the directive say about applicants?",
          p: "Article 5 of the directive has three parts [1]:",
          ul: [
            "Applicants have the right to receive from the prospective employer information about the starting pay or its range, based on objective, gender-neutral criteria, and where applicable about the relevant provisions of the collective agreement. The information must be provided in a way that allows informed and transparent negotiation on pay, for example in a published job ad.",
            "Employers may not ask applicants about their pay in current or previous employment.",
            "Employers ensure that job ads and job titles are gender-neutral and that recruitment procedures are non-discriminatory.",
          ],
        },
        {
          h2: "Where does the Netherlands stand on 11 October 2026?",
          p: "According to the Dutch government, the cabinet submitted a bill transposing the directive to the House of Representatives on 21 May 2026. The bill includes, among other things, a ban on asking about the last salary earned in talks on employment conditions and an obligation to have an objective system for valuing and classifying jobs. Organisations with more than 100 employees will report regularly on pay differences: employers with at least 150 employees for the first time by 7 June 2028 about 2027, employers with 100 to 150 employees in 2031 about 2030. The bill is intended to take effect on 1 January 2027; it still has to pass the House of Representatives and the Senate [2]. The transposition deadline of the directive has therefore passed while the parliamentary process is ongoing [1][2].",
        },
        {
          h2: "Why state a range now?",
          p: "It's not a legal duty as long as the law hasn't been adopted. But a job ad with an hourly rate or range prevents you from discovering late in the process that expectations don't match, and forces you to think in advance about objective pay for the role. A range also carries an obligation: you must be able to justify the role and the pay.",
        },
        {
          h2: "What does this mean for junior roles and working students?",
          ul: [
            "The floor remains the statutory minimum wage: as of 1 July 2026 € 14.99 per hour from age 21 and lower amounts by age for 15 to 20 [3]. A range can't fall below that.",
            "The ban on asking about pay history mainly affects applicants with earlier jobs; a student with little experience often has none. A range based on the role rather than the past fits that.",
            "According to the directive, job ads and job titles must be gender-neutral [1].",
          ],
        },
        {
          h2: "Practical steps",
          ul: [
            "Set an hourly rate or range per role based on objective criteria such as tasks, responsibility and required skills",
            "State the hourly rate or range and the hours per week in the job ad",
            "Don't ask applicants about their current or previous salary",
            "Use gender-neutral job titles",
            "Follow the progress of the bill and consult an employment lawyer if in doubt",
          ],
        },
      ],
    },
  },
  // 42 ---------------------------------------------------------------------
  {
    slug: "waar-vind-je-een-werkstudent",
    aud: "bedrijf",
    commercialInterest: true,
    photo: "/photography/hg-08.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Waar vind je een werkstudent? Kanalen voor werkgevers",
      en: "Where to find a working student: channels for employers",
    },
    excerpt: {
      nl: "Opleidingen, vacatureplatforms, communities, je eigen netwerk of een bureau: waar vind je een werkstudent, en wat regel je daarbij? Een nuchtere vergelijking, inclusief wat VOIDS zelf biedt.",
      en: "Study programmes, job platforms, communities, your own network or an agency: where do you find a working student, and what do you arrange along the way? A sober comparison, including what VOIDS itself offers.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudent vinden: kanalen voor werkgevers vergeleken",
      en: "Finding a working student: channels compared",
    },
    metaDescription: {
      nl: "Waar vind je als werkgever een werkstudent? Opleidingen, vacatureplatforms, communities en bureaus vergeleken, met aandachtspunten voor je vacature.",
      en: "Where does an employer find a working student? Study programmes, job platforms, communities and agencies compared, plus tips for your job ad.",
    },
    keywords: {
      nl: [
        "werkstudent vinden",
        "werkstudent zoeken",
        "vacature werkstudent plaatsen",
        "studenten werven",
        "werkstudent werven kanalen",
        "werkstudent vacature",
      ],
      en: [
        "find a working student",
        "recruit working students",
        "post a working student vacancy",
        "recruit students Netherlands",
        "working student recruitment channels",
      ],
    },
    sources: [
      {
        title: "Hoger onderwijs; ingeschrevenen, onderwijssoort, opleidingsfase en -vorm (tabel 85423NED)",
        publisher: "CBS StatLine",
        url: "https://www.cbs.nl/nl-nl/cijfers/detail/85423NED",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Checklist werken met een stagiair of stagiaire",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/een-stagiair-aannemen/",
        accessed: "2026-10-11",
      },
      {
        title: "Community & jobboard",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/community-jobboard",
        accessed: "2026-10-11",
      },
      {
        title: "Werving & selectie (incl. cases)",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/recruitment-selection",
        accessed: "2026-10-11",
      },
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Werkvergunning werkstudent",
        publisher: "UWV",
        url: "https://www.uwv.nl/nl/werkvergunning/werkstudent",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een werkstudent vind je via de kanalen waar studenten al zijn: het carrière- of stagebureau van hogescholen en universiteiten, vacatureplatforms, studieverenigingen en communities, je eigen netwerk en wervingsbureaus. Geen enkel kanaal is altijd het beste; het hangt af van de rol, je tijd en hoeveel je zelf wilt doen. In 2025/26 stonden ruim 770.000 studenten ingeschreven in het hbo en wo (voorlopig CBS-cijfer) [1], dus aan kandidaten ontbreekt het niet.",
        },
        {
          h2: "Welke kanalen zijn er?",
          ul: [
            "Opleidingen. Ondernemersplein noemt voor stages op hbo- en wo-niveau vacatureplatforms, het eigen stagebureau van opleidingen en het delen van de vacature op social media [2]. Voor werkstudentvacatures zijn dezelfde kanalen een logisch startpunt.",
            "Vacatureplatforms en social media. Je bereikt veel mensen, maar je moet zelf reacties beoordelen en gesprekken plannen.",
            "Communities en studieverenigingen. Een directe route naar studenten die actief zoeken. VOIDS bereikt ruim 4.000 studenten en starters via een WhatsApp-community en een jobboard; dat is de omvang van de community, niet van een talentpool [3].",
            "Je eigen netwerk. Snel en vertrouwd, maar het bereik beperkt zich tot mensen die je netwerk al kent.",
            "Werving en selectie door een bureau. Het bureau zoekt, selecteert en draagt voor; jij kiest en sluit het contract. Bij VOIDS ontvang je na de intake een voorgeselecteerde shortlist [4]. Zie ons artikel over werving en selectie, uitzenden of zelf werven voor de verschillen.",
          ],
        },
        {
          h2: "Hoe maak je je vacature vindbaar en aantrekkelijk?",
          p: "Werkende hbo- en wo-studenten werkten in het derde kwartaal van 2023 het vaakst als verkoopmedewerker in de detailhandel (10%), in de horeca (8%) of als vakkenvuller (5%) [5]. Een rol die aansluit bij een studie, met concrete taken, een duidelijk aantal uren per week, een uurtarief of bandbreedte en ruimte rond tentamens, onderscheidt zich daarvan. Schrijf over de rol, niet over de kandidaat.",
        },
        {
          h2: "Waar let je op voordat iemand begint?",
          ul: [
            "Controleer vóór de eerste werkdag de identiteit en het werkrecht. Studenten van buiten de EER met een verblijfsvergunning voor studie mogen volgens UWV maximaal 16 uur per week werken, of fulltime in juni, juli en augustus, en daarvoor heeft de werkgever een tewerkstellingsvergunning nodig [6].",
            "Leg afspraken schriftelijk vast; in ons artikel over werkstudent aannemen staat de checklist.",
            "Plan de begeleiding en een vast aanspreekpunt in de eerste maand in; zie ons artikel over onboarding.",
          ],
        },
        {
          h2: "Wat biedt VOIDS?",
          p: "VOIDS biedt twee vormen: werving en selectie, en het plaatsen van je vacature in onze community en op ons jobboard. Voor vacatureplaatsing geldt volgens de website een vaste prijs per plaatsing, bepaald door het bereik van de gekozen kanalen, of een doorlopende variant tegen een vast tarief [3]. Concrete bedragen ontvang je op aanvraag.",
        },
      ],
      en: [
        {
          p: "You find a working student through the channels where students already are: the career or internship office of universities of applied sciences and research universities, job platforms, study associations and communities, your own network and recruitment agencies. No channel is always best; it depends on the role, your time and how much you want to do yourself. In 2025/26 more than 770,000 students were enrolled in higher education (preliminary CBS figure) [1], so there's no shortage of candidates.",
        },
        {
          h2: "Which channels are there?",
          ul: [
            "Study programmes. For internships at university and applied-sciences level, the government's business portal mentions job platforms, the programme's own internship office and sharing the vacancy on social media [2]. For working-student vacancies the same channels are a logical starting point.",
            "Job platforms and social media. You reach many people, but you have to assess responses and schedule interviews yourself.",
            "Communities and study associations. A direct route to students who are actively looking. VOIDS reaches more than 4,000 students and starters through a WhatsApp community and a job board; that's the size of the community, not of a talent pool [3].",
            "Your own network. Fast and familiar, but the reach is limited to people your network already knows.",
            "Recruitment and selection by an agency. The agency searches, selects and presents; you choose and sign the contract. At VOIDS you receive a pre-selected shortlist after the intake [4]. See our article on recruitment and selection, temp agencies or hiring yourself for the differences.",
          ],
        },
        {
          h2: "How do you make your vacancy findable and attractive?",
          p: "Working higher-education students in the third quarter of 2023 most often worked as sales assistants in retail (10%), in hospitality (8%) or as shelf stockers (5%) [5]. A role that fits a degree programme, with concrete tasks, a clear number of hours a week, an hourly rate or range and room around exams, stands out from that. Write about the role, not about the candidate.",
        },
        {
          h2: "What should you watch before someone starts?",
          ul: [
            "Check identity and right to work before the first working day. According to UWV, students from outside the EEA with a residence permit for study may work at most 16 hours a week, or full-time in June, July and August, and the employer needs an employment permit for that [6].",
            "Put the terms in writing; our article on hiring a working student contains the checklist.",
            "Plan guidance and a fixed point of contact for the first month; see our article on onboarding.",
          ],
        },
        {
          h2: "What does VOIDS offer?",
          p: "VOIDS offers two forms: recruitment and selection, and placing your vacancy in our community and on our job board. According to the website, vacancy posting has a fixed price per placement, determined by the reach of the chosen channels, or an ongoing variant at a fixed rate [3]. You receive specific amounts on request.",
        },
      ],
    },
  },
  // 43 ---------------------------------------------------------------------
  {
    slug: "werving-selectie-uitzendbureau-of-zelf-werven",
    aud: "bedrijf",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/hg-09.jpg",
    tag: { nl: "Vergelijking", en: "Comparison" },
    title: {
      nl: "Werving en selectie, uitzendbureau of zelf werven?",
      en: "Recruitment agency, temp agency or hiring yourself?",
    },
    excerpt: {
      nl: "Bij werving en selectie sluit je zelf het contract; bij uitzenden blijft de medewerker in dienst van het bureau. Wat dat juridisch en praktisch betekent, en wat past bij een werkstudent.",
      en: "With recruitment you sign the contract yourself; with a temp agency the worker stays employed by the agency. What that means legally and in practice, and what fits a working student.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werving en selectie of uitzendbureau: het verschil",
      en: "Recruitment or temp agency: what is the difference?",
    },
    metaDescription: {
      nl: "Wat is het verschil tussen arbeidsbemiddeling, uitzenden, detacheren en zelf werven? Wie is werkgever, welke regels gelden en wat past bij een werkstudent?",
      en: "Recruitment, temp work, secondment or hiring yourself: who is the employer, which rules apply and what suits a working student? Explained.",
    },
    keywords: {
      nl: [
        "werving en selectie of uitzendbureau",
        "arbeidsbemiddeling uitleg",
        "uitzenden detacheren verschil",
        "recruitmentbureau werkstudent",
        "Waadi",
        "zelf werven of bureau",
      ],
      en: [
        "recruitment agency or temp agency",
        "employment mediation explained",
        "temp work secondment difference",
        "recruitment agency working student",
        "Waadi Netherlands",
        "hire yourself or use an agency",
      ],
    },
    sources: [
      {
        title: "Inhuren en uitlenen van arbeidskrachten (Wet allocatie arbeidskrachten door intermediairs)",
        publisher: "Nederlandse Arbeidsinspectie",
        url: "https://www.nlarbeidsinspectie.nl/onderwerpen/wet-allocatie-arbeidskrachten-door-intermediairs/inhuren-en-uitlenen-van-arbeidskrachten",
        accessed: "2026-10-11",
      },
      {
        title: "U heeft personeelstekort of tijdelijk veel werk",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/inhuren/u-heeft-personeelstekort-of-te-veel-werk/",
        accessed: "2026-10-11",
      },
      {
        title: "Gelijke behandeling (ter beschikking gestelde arbeidskrachten)",
        publisher: "Nederlandse Arbeidsinspectie",
        url: "https://www.nlarbeidsinspectie.nl/onderwerpen/gelijke-behandeling",
        accessed: "2026-10-11",
      },
      {
        title: "ID-bewijs controleren en bewaren",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/wetten-en-regels/identiteitsbewijs-controleren-en-bewaren/",
        accessed: "2026-10-11",
      },
      {
        title: "Werving & selectie (incl. cases)",
        publisher: "VOIDS",
        url: "https://voids.agency/companies/recruitment-selection",
        accessed: "2026-10-11",
      },
      {
        title: "Algemene voorwaarden",
        publisher: "VOIDS",
        url: "https://voids.agency/terms",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Bij arbeidsbemiddeling, zoals werving en selectie, brengt een bureau jou en een kandidaat bij elkaar en sluit jij zelf de arbeidsovereenkomst. Bij uitzenden of het ter beschikking stellen van een arbeidskracht blijft de medewerker in dienst van het bureau, dat de persoon tegen een vergoeding aan jou beschikbaar stelt om onder jouw toezicht en leiding te werken [1]. Zelf werven kost vooral tijd. Welke vorm past, hangt af van wat je nodig hebt: een eigen medewerker of tijdelijke capaciteit zonder eigen dienstverband.",
        },
        {
          h2: "Wat is het juridische verschil?",
          p: "De Nederlandse Arbeidsinspectie legt het zo uit [1]:",
          ul: [
            "Arbeidsbemiddeling: de intermediair brengt werkgever en arbeidskracht met elkaar in contact om een arbeidsovereenkomst tussen die twee tot stand te brengen. Jij bent de werkgever.",
            "Uitzenden of ter beschikking stellen: er wordt geen arbeidsovereenkomst gesloten tussen jou als inlener en de arbeidskracht. De arbeidskracht is in dienst van het bureau en wordt ook door het bureau betaald.",
          ],
        },
        {
          p: "Zowel inhuren als uitzenden en bemiddelen valt onder de Wet allocatie arbeidskrachten door intermediairs (Waadi) [1]. Huur je tijdelijk personeel in via detachering, uitzending of payrolling, dan is de medewerker niet bij jou in dienst, gelden er andere regels (bijvoorbeeld voor de opzegtermijn) en moet je controleren of het bedrijf waar je inhuurt is ingeschreven in het Handelsregister van de KVK (de Waadi-check); je kunt een boete krijgen als dat niet zo is [2]. Een uitzendkracht heeft recht op dezelfde arbeidsvoorwaarden, zoals loon en overige vergoedingen, als een werknemer in dienst van de inlener met een gelijke of gelijkwaardige functie [3].",
        },
        {
          p: "Er is ook een praktisch verschil: heb je de medewerker zelf in dienst, dan moet je een kopie van het identiteitsbewijs bewaren; bij ingehuurd personeel mag je geen kopie bewaren (behalve bij personeel van buiten de EER of Zwitserland), maar moet je het identiteitsbewijs wel controleren [4].",
        },
        {
          h2: "Wat zijn de opties naast elkaar?",
          ul: [
            "Zelf werven: je kiest je eigen kanalen en doet selectie en gesprekken zelf. Je betaalt geen bureau, maar investeert eigen tijd. Jij sluit het contract.",
            "Werving en selectie: een bureau zoekt en selecteert, jij kiest en sluit het contract. Vraag vooraf naar de kosten, wat er gebeurt als de match niet blijkt te werken en hoe het bureau met kandidaatgegevens omgaat.",
            "Uitzenden, detacheren of payrollen: de medewerker is in dienst van het bureau en je betaalt een tarief. Dit past bij tijdelijke capaciteit zonder eigen dienstverband [2].",
            "Zzp: je moet schijnzelfstandigheid voorkomen [2]. Voor structureel werk onder jouw leiding past dit meestal niet; zie ons artikel over zzp of werkstudent.",
          ],
        },
        {
          h2: "Wat past bij een werkstudent?",
          p: "In de regel wil je een werkstudent zelf in dienst nemen, met een eigen arbeidsovereenkomst die rekening houdt met de studie. Dan passen zelf werven of werving en selectie, niet uitzenden. Uitzenden van studenten bestaat ook; het hangt af van of je een medewerker wilt binden of alleen tijdelijke capaciteit zoekt.",
        },
        {
          h2: "Hoe werkt het bij VOIDS?",
          p: "Volgens onze website nemen wij na een intake het wervingsproces uit handen en kies jij uit een voorgeselecteerde shortlist. Er zijn twee tariefvormen: één tarief alleen bij een succesvolle plaatsing, of een vast bedrag per maand met vervanging inbegrepen zodra een werkstudent stopt [5]. Volgens onze algemene voorwaarden werkt VOIDS op basis van een inspanningsverplichting en blijft de opdrachtgever verantwoordelijk voor de aannamebeslissing; bij werving treden VOIDS en de opdrachtgever beide op als zelfstandig verwerkingsverantwoordelijke voor kandidaatgegevens [6]. Lees de voorwaarden van elk bureau voordat je tekent.",
        },
      ],
      en: [
        {
          p: "With employment mediation, such as recruitment and selection, an agency brings you and a candidate together and you sign the employment contract yourself. With temp work or making a worker available, the worker stays employed by the agency, which makes the person available to you for a fee to work under your supervision and direction [1]. Hiring yourself mainly costs time. Which form fits depends on what you need: your own employee or temporary capacity without your own employment relationship.",
        },
        {
          h2: "What is the legal difference?",
          p: "The Dutch Labour Authority explains it like this [1]:",
          ul: [
            "Employment mediation: the intermediary puts employer and worker in touch to bring about an employment contract between the two. You are the employer.",
            "Temp work or making available: no employment contract is concluded between you as the hirer and the worker. The worker is employed by the agency and is also paid by the agency.",
          ],
        },
        {
          p: "Hiring, temp work and mediation all fall under the Act on the allocation of workers by intermediaries (Waadi) [1]. If you hire temporary staff through secondment, temp work or payrolling, the worker isn't employed by you, different rules apply (for example on notice periods) and you must check that the company you hire from is registered in the KVK Trade Register (the Waadi check); you can be fined if it isn't [2]. A temp worker is entitled to the same working conditions, such as pay and other allowances, as an employee of the hirer in an equal or equivalent job [3].",
        },
        {
          p: "There's also a practical difference: if you employ the worker yourself, you must keep a copy of the identity document; for hired-in staff you may not keep a copy (except for staff from outside the EEA or Switzerland), but you must check the identity document [4].",
        },
        {
          h2: "What are the options side by side?",
          ul: [
            "Hiring yourself: you choose your own channels and do selection and interviews yourself. You pay no agency but invest your own time. You sign the contract.",
            "Recruitment and selection: an agency searches and selects, you choose and sign the contract. Ask in advance about costs, what happens if the match turns out not to work and how the agency handles candidate data.",
            "Temp work, secondment or payrolling: the worker is employed by the agency and you pay a rate. This suits temporary capacity without your own employment relationship [2].",
            "Freelance: you must avoid false self-employment [2]. For structural work under your direction this usually doesn't fit; see our article on freelance or working student.",
          ],
        },
        {
          h2: "What suits a working student?",
          p: "As a rule you'll want to employ a working student yourself, with your own employment contract that takes the studies into account. Then hiring yourself or recruitment and selection fit, not temp work. Temp work for students exists too; it depends on whether you want to retain an employee or only need temporary capacity.",
        },
        {
          h2: "How does it work at VOIDS?",
          p: "According to our website, after an intake we take the recruitment process off your hands and you choose from a pre-selected shortlist. There are two fee structures: one fee only on a successful placement, or a fixed monthly amount with replacement included as soon as a working student stops [5]. Under our general terms VOIDS works on a best-efforts basis and the client remains responsible for the hiring decision; in recruitment, VOIDS and the client each act as independent controllers of candidate data [6]. Read the terms of any agency before you sign.",
        },
      ],
    },
  },
  // 44 ---------------------------------------------------------------------
  {
    slug: "aansprakelijkheid-werkstudent-fout-schade",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/hg-10.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Wie betaalt de schade als een werkstudent een fout maakt?",
      en: "Who pays if a working student makes a mistake at work?",
    },
    excerpt: {
      nl: "Een werknemer is meestal niet aansprakelijk voor schade die bij het werk ontstaat, tenzij het opzet of bewuste roekeloosheid was. Wat artikel 7:661 BW zegt en wat een rechter daarmee doet.",
      en: "An employee is usually not liable for damage caused at work, unless it was intent or conscious recklessness. What Article 7:661 of the Civil Code says and what a court does with it.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Schade door een fout op het werk: wie is aansprakelijk?",
      en: "Damage from a mistake at work: who is liable?",
    },
    metaDescription: {
      nl: "Wie betaalt de schade als een werkstudent een fout maakt? Artikel 7:661 BW uitgelegd: opzet, bewuste roekeloosheid en wat het voor beide kanten betekent.",
      en: "Who pays if a working student makes a mistake? Article 7:661 of the Civil Code explained: intent, conscious recklessness and what it means for both sides.",
    },
    keywords: {
      nl: [
        "aansprakelijkheid werknemer schade",
        "artikel 7:661 BW",
        "bewuste roekeloosheid werknemer",
        "schade veroorzaakt op werk",
        "werkstudent fout aansprakelijk",
        "werkgever aansprakelijkheid schade",
      ],
      en: [
        "employee liability damage Netherlands",
        "article 7:661 Dutch Civil Code",
        "conscious recklessness employee",
        "damage caused at work",
        "working student mistake liability",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 661 (schade door de werknemer), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling7/Artikel661/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Gerechtshof 's-Hertogenbosch, 23 februari 2016, ECLI:NL:GHSHE:2016:636 (toepassing artikel 7:661 BW)",
        publisher: "Rechtspraak.nl",
        url: "https://uitspraken.rechtspraak.nl/details?id=ECLI%3ANL%3AGHSHE%3A2016%3A636",
        year: "2016",
        accessed: "2026-10-11",
      },
      {
        title: "Checklist werken met een stagiair of stagiaire",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/personeel/aannemen/een-stagiair-aannemen/",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Wie betaalt de schade als een werkstudent een fout maakt? Meestal de werkgever, niet de werknemer. Volgens artikel 7:661 BW is een werknemer die bij de uitvoering van de overeenkomst schade toebrengt aan de werkgever, of aan een derde jegens wie de werkgever tot vergoeding is gehouden, daarvoor niet aansprakelijk tegenover de werkgever, tenzij de schade het gevolg is van zijn opzet of bewuste roekeloosheid [1]. Dat geldt ook voor een werkstudent met een arbeidsovereenkomst.",
        },
        {
          h2: "Wat zegt de wet precies?",
          p: "Lid 1 bepaalt dat de werknemer niet aansprakelijk is, tenzij de schade een gevolg is van opzet of bewuste roekeloosheid; uit de omstandigheden van het geval kan, mede gelet op de aard van de overeenkomst, anders voortvloeien. Lid 2 bepaalt dat afwijken van lid 1 ten nadele van de werknemer alleen mogelijk is bij schriftelijke overeenkomst en slechts voor zover de werknemer daarvoor verzekerd is [1]. Een zin in een contract of huisreglement dat een werkstudent altijd voor schade opdraait, houdt dus niet zomaar stand.",
        },
        {
          h2: "Wat is bewuste roekeloosheid?",
          p: "Het gaat om meer dan een onzorgvuldige of onjuiste handeling. In een zaak uit 2016 over een ongeval met een te hoge bedrijfsauto oordeelde het Gerechtshof 's-Hertogenbosch dat de werknemer onjuist had gehandeld, maar dat niet vaststond dat hij zich vlak voor het ongeval bewust was van het risico. Dat was onvoldoende voor bewuste roekeloosheid, en de vordering van de werkgever werd afgewezen [2]. Het hof wees erop dat artikel 7:661 BW ertoe strekt dat de werknemer als sociaaleconomisch zwakkere partij niet de schade van een onzorgvuldige taakuitoefening hoeft te dragen, en dat de werkgever behoudens opzet of bewuste roekeloosheid de lusten en lasten van de werkzaamheden draagt. Het hof nam onder meer mee dat de werknemer nog betrekkelijk weinig ervaring had met het rijden in de verhoogde bedrijfsauto [2]. Elk geval wordt apart beoordeeld.",
        },
        {
          h2: "Wat betekent dit voor een werkstudent?",
          ul: [
            "Een fout in een rapport, een verkeerd verstuurde e-mail of een kapotte laptop is in de regel geen opzet of bewuste roekeloosheid. De werkgever kan de schade dan niet op jou verhalen.",
            "Wordt je gevraagd een document te tekenen waarin je aansprakelijkheid accepteert, lees dan lid 2: afwijken kan alleen schriftelijk en voor zover je voor die schade verzekerd bent [1]. Vraag bij twijfel na wat er is verzekerd.",
            "Meld een fout zo snel mogelijk: dat beperkt de schade.",
          ],
        },
        {
          h2: "Wat betekent dit voor een werkgever?",
          ul: [
            "Reken erop dat je zelf de schade draagt van normale fouten van een werkstudent, ook als een klant schade lijdt waarvoor jij tot vergoeding bent gehouden",
            "Controleer je bedrijfsaansprakelijkheidsverzekering. Ondernemersplein noemt dat een werkgever verantwoordelijk is voor schade die een stagiair veroorzaakt of oploopt, en adviseert de verzekering te controleren of af te sluiten [3]",
            "Beperk het risico met begeleiding, werkafspraken en vier-ogenprincipes voor werk met financiële of juridische gevolgen",
            "Wil je afwijken van de hoofdregel, dan kan dat alleen schriftelijk en voor zover de werknemer verzekerd is [1]",
          ],
        },
      ],
      en: [
        {
          p: "Who pays if a working student makes a mistake? Usually the employer, not the employee. Under Article 7:661 of the Dutch Civil Code, an employee who causes damage to the employer while performing the contract, or to a third party to whom the employer must pay compensation, isn't liable to the employer for it, unless the damage results from the employee's intent or conscious recklessness [1]. That also applies to a working student with an employment contract.",
        },
        {
          h2: "What does the law say exactly?",
          p: "Paragraph 1 provides that the employee isn't liable unless the damage results from intent or conscious recklessness; the circumstances of the case, given the nature of the contract, may lead to a different outcome. Paragraph 2 provides that deviating from paragraph 1 to the employee's detriment is only possible by written agreement and only to the extent that the employee is insured for it [1]. A sentence in a contract or house rules saying that a working student always pays for damage therefore doesn't simply stand.",
        },
        {
          h2: "What is conscious recklessness?",
          p: "It takes more than a careless or incorrect act. In a 2016 case about an accident with a company van that was too high, the Court of Appeal of 's-Hertogenbosch ruled that the employee had acted incorrectly, but that it wasn't established that he was aware of the risk just before the accident. That wasn't enough for conscious recklessness, and the employer's claim was rejected [2]. The court pointed out that Article 7:661 aims to ensure that the employee, as the socio-economically weaker party, doesn't have to bear the damage of careless performance of duties, and that, barring intent or conscious recklessness, the employer bears the benefits and burdens of the work. The court also took into account, among other things, that the employee had relatively little experience driving the raised company van [2]. Each case is assessed separately.",
        },
        {
          h2: "What does this mean for a working student?",
          ul: [
            "A mistake in a report, an email sent to the wrong person or a broken laptop is, as a rule, not intent or conscious recklessness. The employer then can't recover the damage from you.",
            "If you're asked to sign a document accepting liability, read paragraph 2: deviating is only possible in writing and to the extent that you're insured for that damage [1]. If in doubt, ask what is insured.",
            "Report a mistake as soon as possible: it limits the damage.",
          ],
        },
        {
          h2: "What does this mean for an employer?",
          ul: [
            "Expect to bear the damage from a working student's ordinary mistakes yourself, including when a customer suffers damage for which you're liable to pay compensation",
            "Check your business liability insurance. The government's business portal says an employer is responsible for damage an intern causes or suffers, and advises checking or taking out the insurance [3]",
            "Limit the risk with guidance, working agreements and four-eyes checks for work with financial or legal consequences",
            "If you want to deviate from the main rule, that's only possible in writing and to the extent that the employee is insured [1]",
          ],
        },
      ],
    },
  },
  // 45 ---------------------------------------------------------------------
  {
    slug: "reiskostenvergoeding-werkstudent",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/hg-11.jpg",
    tag: { nl: "Fair pay", en: "Fair pay" },
    title: {
      nl: "Reiskostenvergoeding voor werkstudenten: wat is verplicht?",
      en: "Travel allowance for working students: what is mandatory?",
    },
    excerpt: {
      nl: "Een werkgever hoeft reiskosten niet te vergoeden, tenzij het in een cao, je contract of een regeling staat. Wat is belastingvrij, en wat verandert er met je studentenreisproduct?",
      en: "An employer doesn't have to reimburse travel costs unless a collective agreement, your contract or a policy says so. What's tax-free, and what does your student travel product change?",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Reiskostenvergoeding werkstudent: moet dat? Regels 2026",
      en: "Travel allowance working student: rules 2026",
    },
    metaDescription: {
      nl: "Moet een werkgever reiskosten vergoeden? Wat is verplicht, wat is in 2026 belastingvrij per kilometer en wat betekent je studentenreisproduct?",
      en: "Must an employer reimburse travel costs? What is mandatory, what is tax-free per kilometre in 2026 and what does your student travel product mean?",
    },
    keywords: {
      nl: [
        "reiskostenvergoeding werkstudent",
        "reiskostenvergoeding verplicht",
        "onbelaste kilometervergoeding 2026",
        "studentenreisproduct werken",
        "reiskosten bijbaan",
        "reiskostenvergoeding cao",
      ],
      en: [
        "travel allowance working student",
        "travel allowance mandatory Netherlands",
        "tax-free mileage allowance 2026",
        "student travel product and work",
        "commuting costs student job",
      ],
    },
    sources: [
      {
        title: "Reiskostenvergoeding betalen aan werknemers",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/reiskostenvergoeding-betalen-aan-werknemers/",
        accessed: "2026-10-11",
      },
      {
        title: "Verhoging onbelaste kilometervergoeding: hoe verwerkt u dit in de loonaangifte?",
        publisher: "Belastingdienst",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/berichten/nieuws/verhoging-onbelaste-kilometervergoeding-hoe-verwerkt-u-dit-in-de-loonaangifte",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Wat is het studentenreisproduct",
        publisher: "DUO",
        url: "https://duo.nl/particulier/ov-en-reizen/",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Bijverdienen",
        publisher: "DUO",
        url: "https://duo.nl/particulier/studiefinanciering/bijverdienen.jsp",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Nee, een werkgever is niet wettelijk verplicht reiskosten te vergoeden, tenzij een cao, het arbeidscontract of een bedrijfsregeling dat voorschrijft [1]. Betaalt een werkgever wel een vergoeding, dan is die in 2026 tot € 0,25 per kilometer belastingvrij; alles daarboven telt als loon [1][2]. Controleer dus je contract en de cao, en vraag vóór je tekent wat er wordt vergoed.",
        },
        {
          h2: "Wat zeggen de regels?",
          ul: [
            "Geen wettelijke plicht. Ondernemersplein schrijft dat een reiskostenvergoeding vrijwillig is, tenzij het in een cao, het arbeidscontract of een bedrijfsregeling staat; dan moet de werkgever betalen [1].",
            "Belastingvrij bedrag. De onbelaste vergoeding is verhoogd van € 0,23 naar € 0,25 per kilometer, met terugwerkende kracht per 1 januari 2026. Alles boven € 0,25 per kilometer ziet de Belastingdienst als loon [1]. De verhoging is door een beleidsbesluit al toegestaan en maakt deel uit van het Belastingplan 2027 [2].",
            "Openbaar vervoer. Een werkgever kan € 0,25 per afgelegde kilometer vergoeden, of de totale reiskosten belastingvrij vergoeden, zoals een treinkaartje [1].",
            "Minimumafstand. Een minimum aantal kilometers voor een vergoeding kan worden vastgelegd in de arbeidsovereenkomst of cao [1].",
          ],
        },
        {
          h2: "Wat als je een studentenreisproduct hebt?",
          p: "Met het studentenreisproduct reis je vrij of met korting met trein, tram, bus en metro in Nederland. Je krijgt het bij een voltijdopleiding aan mbo, hbo of universiteit die recht geeft op studiefinanciering [3]. DUO meldt dat je sinds 2020 onbeperkt mag bijverdienen, zonder bijverdiengrens [4]. Of een werkgever naast je studentenreisproduct nog reiskosten vergoedt, hangt af van de afspraken in je contract, een cao of een regeling [1]. Vraag het dus.",
        },
        {
          h2: "Wat kun je als werkstudent doen?",
          ul: [
            "Vraag in het gesprek of er een reiskostenvergoeding is en laat het schriftelijk vastleggen",
            "Vraag of de vergoeding per kilometer of op basis van de werkelijke reiskosten wordt berekend",
            "Check of de vergoeding in je salaris is verwerkt of er los bovenop komt",
          ],
        },
        {
          h2: "Wat kun je als werkgever doen?",
          ul: [
            "Bepaal in een regeling of in het contract of en hoe je reiskosten vergoedt, en vanaf hoeveel kilometer",
            "Houd je aan de actuele belastingvrije grens; per kilometer is dat € 0,25 in 2026 [1][2]. Bedragen kunnen wijzigen, dus controleer de actuele regels bij de Belastingdienst",
            "Behandel werkstudenten bij reiskosten gelijk aan collega's in een vergelijkbare functie",
          ],
        },
      ],
      en: [
        {
          p: "No, an employer isn't required by law to reimburse travel costs, unless a collective agreement, the employment contract or a company policy prescribes it [1]. If an employer does pay an allowance, it's tax-free up to € 0.25 per kilometre in 2026; anything above that counts as wages [1][2]. So check your contract and the collective agreement, and ask before you sign what's reimbursed.",
        },
        {
          h2: "What do the rules say?",
          ul: [
            "No statutory duty. The government's business portal states that a travel allowance is voluntary, unless a collective agreement, the employment contract or a company policy provides for it; then the employer must pay [1].",
            "Tax-free amount. The tax-free allowance has been raised from € 0.23 to € 0.25 per kilometre, retroactively from 1 January 2026. The Tax Administration treats anything above € 0.25 per kilometre as wages [1]. The increase has already been permitted by a policy decision and forms part of the 2027 Tax Plan [2].",
            "Public transport. An employer can reimburse € 0.25 per kilometre travelled, or reimburse the total travel costs tax-free, such as a train ticket [1].",
            "Minimum distance. A minimum number of kilometres for an allowance can be set in the employment contract or collective agreement [1].",
          ],
        },
        {
          h2: "What if you have a student travel product?",
          p: "With the student travel product you travel free or at a discount by train, tram, bus and metro in the Netherlands. You get it with a full-time programme at secondary vocational level, a university of applied sciences or a research university that entitles you to student finance [3]. DUO states that since 2020 you may earn without limit, with no earnings ceiling [4]. Whether an employer still reimburses travel costs on top of your student travel product depends on the agreements in your contract, a collective agreement or a policy [1]. So ask.",
        },
        {
          h2: "What can you do as a working student?",
          ul: [
            "Ask in the interview whether there's a travel allowance and have it put in writing",
            "Ask whether the allowance is calculated per kilometre or on the basis of actual travel costs",
            "Check whether the allowance is built into your salary or comes on top of it",
          ],
        },
        {
          h2: "What can you do as an employer?",
          ul: [
            "Decide in a policy or in the contract whether and how you reimburse travel costs, and from how many kilometres",
            "Stick to the current tax-free limit; per kilometre that's € 0.25 in 2026 [1][2]. Amounts can change, so check the current rules with the Tax Administration",
            "Treat working students the same as colleagues in a comparable role when it comes to travel costs",
          ],
        },
      ],
    },
  },
  // 46 ---------------------------------------------------------------------
  {
    slug: "hoe-vind-je-een-werkstudentpositie",
    aud: "talent",
    commercialInterest: true,
    photo: "/photography/hg-12.jpg",
    tag: { nl: "Gids", en: "Guide" },
    title: {
      nl: "Hoe vind je een werkstudentpositie? Stappen en kanalen",
      en: "How to find a working-student job: steps and channels",
    },
    excerpt: {
      nl: "Waar zoek je, wat vraag je vóór je tekent en hoe herken je een betrouwbare vacature? Een praktische route naar een betaalde baan die bij je studie past, met bronnen.",
      en: "Where do you look, what do you ask before signing and how do you recognise a reliable vacancy? A practical route to a paid job that fits your studies, with sources.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Werkstudentpositie vinden: stappen, kanalen en tips",
      en: "Finding a working-student job: steps, channels, tips",
    },
    metaDescription: {
      nl: "Hoe vind je een werkstudentpositie die bij je studie past? Waar je zoekt, wat je vooraf vraagt over uren en salaris en hoe je nepvacatures herkent.",
      en: "How do you find a working-student job that fits your studies? Where to look, what to ask in advance about hours and pay and how to spot fake job ads.",
    },
    keywords: {
      nl: [
        "werkstudentpositie vinden",
        "werkstudent vacature",
        "werkstudent worden",
        "betaalde baan naast studie",
        "relevante bijbaan zoeken",
        "werkstudent community",
      ],
      en: [
        "find a working student job",
        "working student vacancy",
        "become a working student",
        "paid job alongside studies",
        "relevant student job Netherlands",
      ],
    },
    sources: [
      {
        title: "Scholieren voortgezet onderwijs werkten derde kwartaal 11 uur per week (met tabellen gebruikelijke arbeidsduur en top 3 beroepen)",
        publisher: "CBS",
        url: "https://www.cbs.nl/nl-nl/nieuws/2023/49/scholieren-voortgezet-onderwijs-werkten-derde-kwartaal-11-uur-per-week",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Studie & Werk HO: de arbeidsmarktpositie van hbo- en wo-alumni (Bussink, Van der Ven & Klinker, in opdracht van EW Magazine)",
        publisher: "SEO Economisch Onderzoek",
        url: "https://www.seo.nl/wp-content/uploads/2023/07/2023-74-Studie-Werk-HO.pdf",
        year: "2023",
        accessed: "2026-10-11",
      },
      {
        title: "Talent: community, jobboard en talentpool",
        publisher: "VOIDS",
        url: "https://voids.agency/talent",
        accessed: "2026-10-11",
      },
      {
        title: "Bedragen minimumloon 2026",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Bijverdienen",
        publisher: "DUO",
        url: "https://duo.nl/particulier/studiefinanciering/bijverdienen.jsp",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Ik heb gereageerd op een vacature",
        publisher: "Fraudehelpdesk",
        url: "https://www.fraudehelpdesk.nl/fraude/ik-heb-gereageerd-op-een-vacature/",
        accessed: "2026-10-11",
      },
      {
        title: "Personal data of applicants",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/job-applications/personal-data-of-applicants",
        year: "2025",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Je vindt een werkstudentpositie door gericht te zoeken naar rollen die bij je studie of ambities passen, via je opleiding, vacatureplatforms, communities en bedrijven zelf, en door je sollicitatie te baseren op wat je al hebt gedaan. Werkende ho-studenten werkten in het derde kwartaal van 2023 het vaakst als verkoopmedewerker in de detailhandel, in de horeca of als vakkenvuller [1], dus een baan in je vakgebied is niet vanzelfsprekend. Uit onderzoek van SEO Economisch Onderzoek blijkt dat afgestudeerden met een bijbaan in een relevante sector gemiddeld sneller een eerste substantiële baan vonden [2].",
        },
        {
          h2: "Stap voor stap",
          ul: [
            "Bepaal wat je zoekt: het soort werk, het aantal uren en je beschikbaarheid in tentamenperiodes. Werkende ho-studenten hadden in 2023 gemiddeld een gebruikelijke arbeidsduur van ongeveer 18,7 uur per week [1]; dat is een gemiddelde, geen norm.",
            "Zoek in meerdere kanalen tegelijk: het carrièrebureau van je opleiding, vacatureplatforms, je studievereniging en communities. VOIDS heeft een WhatsApp-community met wekelijks passende vacatures, een jobboard om zelf te solliciteren en een talentpool waarin we je proactief matchen [3].",
            "Maak je sollicitatie specifiek: wat je hebt gedaan, hoe je werkt en wat je zoekt. Hoe je dat aanpakt, lees je in ons artikel over een matchprofiel dat opvalt.",
            "Stel vóór je tekent vragen over uren, salaris, contract, begeleiding en flexibiliteit rond tentamens.",
            "Controleer of de vacature betrouwbaar is.",
          ],
        },
        {
          h2: "Wat vraag je vooraf over salaris en uren?",
          p: "Per 1 juli 2026 is het wettelijk minimumloon € 14,99 bruto per uur vanaf 21 jaar, met lagere bedragen per leeftijd voor 15 tot en met 20 jaar [4]. Je werkgever mag dus niet onder die ondergrens zitten; zie ons artikel over het minimumloon voor werkstudenten. Vraag naar het uurtarief, het aantal uren per week, de duur van het contract, de proeftijd en wat er rond tentamens is afgesproken, en vraag om dit schriftelijk.",
        },
        {
          h2: "Kun je naast je studie zoveel werken als je wilt?",
          p: "DUO meldt dat je sinds 2020 onbeperkt mag bijverdienen zonder dat er een bijverdiengrens geldt voor je studiefinanciering [5]. Hoeveel uur haalbaar is naast je studie verschilt per persoon en per periode; daar bestaat geen vaste norm voor. Ben je een internationale student van buiten de EER, dan gelden aparte regels, zie ons artikel daarover. Over belasting en toeslagen lees je meer in ons artikel over studiefinanciering en werken.",
        },
        {
          h2: "Hoe herken je een betrouwbare vacature?",
          p: "De Fraudehelpdesk waarschuwt voor nepvacatures, vaak voor thuiswerk, waarbij je ongevraagd wordt benaderd, moet overstappen naar WhatsApp en eerst geld moet overmaken om taken te kunnen doen. Reageer niet op ongevraagde werkaanbiedingen en betaal niet voor werk waarvoor jij juist betaald moet worden [6]. Daarnaast mag een werkgever volgens de Autoriteit Persoonsgegevens in de sollicitatiefase geen kopie van je identiteitsbewijs en geen burgerservicenummer vragen; dat mag pas als je in dienst komt [7]. Meer over het herkennen van nepvacatures staat in ons artikel daarover.",
        },
        {
          h2: "Wat biedt VOIDS studenten?",
          p: "Volgens onze website is meedoen voor jou altijd gratis: bedrijven betalen voor plaatsingen, niet de studenten en starters in onze community. We delen je profiel alleen met een werkgever als er een concrete match is [3].",
        },
      ],
      en: [
        {
          p: "You find a working-student role by searching specifically for roles that fit your studies or ambitions, through your programme, job platforms, communities and companies themselves, and by basing your application on what you've already done. Working higher-education students in the third quarter of 2023 most often worked as sales assistants in retail, in hospitality or as shelf stockers [1], so a job in your field isn't a given. Research by SEO Economic Research found that graduates with a side job in a relevant sector found a first substantial job faster on average [2].",
        },
        {
          h2: "Step by step",
          ul: [
            "Decide what you're looking for: the type of work, the number of hours and your availability in exam periods. In 2023 working higher-education students had an average usual working time of about 18.7 hours a week [1]; that's an average, not a norm.",
            "Search several channels at once: your programme's career office, job platforms, your study association and communities. VOIDS has a WhatsApp community with suitable vacancies every week, a job board where you can apply yourself and a talent pool in which we match you proactively [3].",
            "Make your application specific: what you've done, how you work and what you're looking for. How to go about that is in our article on a match profile that stands out.",
            "Before you sign, ask about hours, pay, contract, guidance and flexibility around exams.",
            "Check whether the vacancy is reliable.",
          ],
        },
        {
          h2: "What do you ask in advance about pay and hours?",
          p: "As of 1 July 2026 the statutory minimum wage is € 14.99 gross per hour from age 21, with lower amounts by age for 15 to 20 [4]. Your employer may therefore not go below that floor; see our article on the minimum wage for working students. Ask about the hourly rate, the hours per week, the length of the contract, the probation period and what has been agreed around exams, and ask for it in writing.",
        },
        {
          h2: "Can you work as much as you like next to your studies?",
          p: "DUO states that since 2020 you may earn without limit, with no earnings ceiling affecting your student finance [5]. How many hours are feasible next to your studies differs per person and per period; there's no fixed norm. If you're an international student from outside the EEA, separate rules apply, see our article on that. Read more about tax and benefits in our article on student finance and working.",
        },
        {
          h2: "How do you recognise a reliable vacancy?",
          p: "The Dutch Fraud Helpdesk warns about fake job ads, often for work from home, in which you're approached unasked, have to move to WhatsApp and must first transfer money to be able to do tasks. Don't respond to unsolicited job offers and don't pay for work for which you should be the one being paid [6]. In addition, according to the Dutch data protection authority, an employer may not ask for a copy of your identity document or your citizen service number during the application stage; that's only allowed once you start working there [7]. More on recognising fake job ads is in our article on that.",
        },
        {
          h2: "What does VOIDS offer students?",
          p: "According to our website, taking part is always free for you: companies pay for placements, not the students and starters in our community. We only share your profile with an employer if there's a concrete match [3].",
        },
      ],
    },
  },
  // 47 ---------------------------------------------------------------------
  {
    slug: "internationale-student-werken-nederland",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/hg-13.jpg",
    tag: { nl: "Internationaal", en: "International" },
    title: {
      nl: "Internationale student: mag je werken in Nederland?",
      en: "International student: may you work in the Netherlands?",
    },
    excerpt: {
      nl: "Uit de EER werk je zonder vergunning. Van buiten de EER heeft je werkgever een tewerkstellingsvergunning nodig en gelden urengrenzen. De regels volgens UWV en de Rijksoverheid.",
      en: "From the EEA you work without a permit. From outside the EEA your employer needs an employment permit and hour limits apply. The rules according to UWV and the Dutch government.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Internationale student werken in Nederland: de regels",
      en: "International students working in the Netherlands: rules",
    },
    metaDescription: {
      nl: "Mag een internationale student werken in Nederland? EER-studenten zonder vergunning, studenten van buiten de EER met een TWV en urenlimiet. De regels.",
      en: "May an international student work in the Netherlands? EEA students without a permit, students from outside the EEA with a TWV and an hours limit.",
    },
    keywords: {
      nl: [
        "internationale student werken Nederland",
        "tewerkstellingsvergunning student",
        "werkvergunning student 16 uur",
        "student buiten EER werken",
        "zoekjaar hoogopgeleiden",
        "TWV werkstudent",
      ],
      en: [
        "international student work Netherlands",
        "work permit student Netherlands",
        "16 hours per week student",
        "non-EEA student working",
        "orientation year highly educated",
        "TWV working student",
      ],
    },
    sources: [
      {
        title: "Vergunningen buitenlandse werknemers",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/buitenlandse-werknemers/vergunningen-buitenlandse-werknemers",
        accessed: "2026-10-11",
      },
      {
        title: "Werkvergunning werkstudent",
        publisher: "UWV",
        url: "https://www.uwv.nl/nl/werkvergunning/werkstudent",
        accessed: "2026-10-11",
      },
      {
        title: "Voorwaarden tewerkstellingsvergunning",
        publisher: "UWV",
        url: "https://www.uwv.nl/nl/werkvergunning/twv-voorwaarden",
        accessed: "2026-10-11",
      },
      {
        title: "Residence permit for orientation year for highly educated persons",
        publisher: "IND",
        url: "https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Mag je als internationale student werken in Nederland? Dat hangt af van je nationaliteit. Studenten met de Nederlandse nationaliteit of de nationaliteit van een ander EER-land of Zwitserland mogen zonder werkvergunning werken [1]. Studenten van buiten de EER met een verblijfsvergunning voor studie mogen volgens UWV bij een werkgever werken die een tewerkstellingsvergunning (TWV) voor hen heeft: maximaal 16 uur per week, of fulltime in de maanden juni, juli en augustus [2].",
        },
        {
          h2: "Wat geldt als je uit de EER of Zwitserland komt?",
          p: "Dan heb je geen werkvergunning nodig [1]. Dat geldt ook voor studenten met de Nederlandse nationaliteit.",
        },
        {
          h2: "Wat geldt als je van buiten de EER komt?",
          p: "UWV noemt voor een werkstudent de volgende voorwaarden [2]:",
          ul: [
            "Je hebt een geldige verblijfsvergunning voor het volgen van een studie.",
            "Je werkt maximaal 16 uur per week, of fulltime in de maanden juni, juli en augustus.",
            "Het loon is marktconform, dus normaal voor het werk dat je gaat doen.",
            "De TWV voor een werkstudent is maximaal één jaar geldig. UWV omschrijft het als een bijbaan naast een studie in Nederland.",
          ],
        },
        {
          p: "UWV formuleert de uren met ‘of’: 16 uur per week, of fulltime in juni, juli en augustus [2]. Werk je al tijdens het studiejaar? Vraag bij UWV of de IND hoe de uren in jouw situatie tellen.",
        },
        {
          h2: "Wie vraagt de vergunning aan?",
          p: "De werkgever. UWV schrijft dat de werkgever een TWV aanvraagt als de werknemer al in Nederland is en een verblijfsvergunning heeft [3]. Je kunt dus niet zelf een vergunning regelen; je moet het aan je werkgever vragen. Laat een werkgever je werken zonder werkvergunning, dan is dat volgens UWV illegale arbeid [3]. Wacht dus met beginnen tot de vergunning er is.",
        },
        {
          h2: "Wat kun je na je studie?",
          p: "Na een studie in Nederland kun je onder voorwaarden een verblijfsvergunning voor het zoekjaar hoogopgeleiden aanvragen. Volgens de IND geldt die één jaar en kan hij niet worden verlengd; je werkgever heeft voor jou dan geen TWV nodig. Een van de manieren om in aanmerking te komen is een Nederlandse studie die je in de drie jaar vóór de aanvraag hebt afgerond; er gelden ook andere voorwaarden. Lees ze op de pagina van de IND [4].",
        },
        {
          h2: "Wat kun je zelf doen?",
          ul: [
            "Controleer wat er op je verblijfsdocument over arbeid staat",
            "Vraag een werkgever vóór de eerste werkdag of er een TWV is aangevraagd en of die is goedgekeurd",
            "Houd je aan de uren die UWV noemt; werken zonder geldige werkvergunning is voor een werkgever illegale arbeid [3]",
            "Vraag bij twijfel advies aan de IND, UWV of de internationale afdeling van je opleiding",
          ],
        },
      ],
      en: [
        {
          p: "May you work in the Netherlands as an international student? It depends on your nationality. Students with Dutch nationality or the nationality of another EEA country or Switzerland may work without a work permit [1]. According to UWV, students from outside the EEA with a residence permit for study may work for an employer who has an employment permit (TWV) for them: at most 16 hours a week, or full-time in June, July and August [2].",
        },
        {
          h2: "What applies if you come from the EEA or Switzerland?",
          p: "Then you don't need a work permit [1]. That also applies to students with Dutch nationality.",
        },
        {
          h2: "What applies if you come from outside the EEA?",
          p: "UWV lists the following conditions for a working student [2]:",
          ul: [
            "You hold a valid residence permit for following a study programme.",
            "You work at most 16 hours a week, or full-time in June, July and August.",
            "The wage is market-rate, meaning normal for the work you'll do.",
            "The TWV for a working student is valid for at most one year. UWV describes it as a side job next to a study in the Netherlands.",
          ],
        },
        {
          p: "UWV phrases the hours with ‘or’: 16 hours a week, or full-time in June, July and August [2]. Already working during the academic year? Ask UWV or the IND how the hours count in your situation.",
        },
        {
          h2: "Who applies for the permit?",
          p: "The employer. UWV writes that the employer applies for a TWV if the employee is already in the Netherlands and has a residence permit [3]. You can't arrange a permit yourself; you have to ask your employer. If an employer lets you work without a work permit, that's illegal labour according to UWV [3]. So wait to start until the permit is in place.",
        },
        {
          h2: "What can you do after your studies?",
          p: "After a degree in the Netherlands you can, under conditions, apply for a residence permit for the orientation year for highly educated persons. According to the IND it's valid for one year and can't be extended; your employer doesn't need a TWV for you. One way to qualify is a Dutch study programme that you completed in the three years before the application; other conditions also apply. Read them on the IND page [4].",
        },
        {
          h2: "What can you do yourself?",
          ul: [
            "Check what your residence document says about work",
            "Ask an employer before the first working day whether a TWV has been applied for and approved",
            "Stay within the hours stated by UWV; working without a valid work permit is illegal labour for an employer [3]",
            "If in doubt, ask the IND, UWV or your programme's international office for advice",
          ],
        },
      ],
    },
  },
  // 48 ---------------------------------------------------------------------
  {
    slug: "tentamenweek-vrij-van-werk-werkstudent",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/hg-14.jpg",
    tag: { nl: "Studie & werk", en: "Study & work" },
    title: {
      nl: "Tentamenweek: heb je als werkstudent recht op vrij?",
      en: "Exam week: are working students entitled to time off?",
    },
    excerpt: {
      nl: "Een algemeen wettelijk recht op tentamenverlof noemt de Rijksoverheid niet. Wat kun je wel doen: studieverlof, vakantiedagen, minder uren of een afspraak in je contract?",
      en: "The Dutch government doesn't mention a general statutory right to exam leave. What can you do: study leave, holiday days, fewer hours or an agreement in your contract?",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Tentamenweek vrij van werk? Je opties als werkstudent",
      en: "Time off work for exams? Your options as a working student",
    },
    metaDescription: {
      nl: "Recht op vrij voor tentamens als werkstudent? Studieverlof, vakantiedagen, minder uren en afspraken in je contract: wat de Rijksoverheid zegt.",
      en: "Entitled to time off for exams as a working student? Study leave, holiday days, fewer hours and contract agreements: what the government says.",
    },
    keywords: {
      nl: [
        "tentamenverlof werkstudent",
        "vrij voor tentamen werk",
        "studieverlof",
        "vakantiedagen opnemen tentamens",
        "werken en tentamens combineren",
        "wet flexibel werken uren",
      ],
      en: [
        "exam leave working student",
        "time off work for exams Netherlands",
        "study leave Netherlands",
        "holiday days for exams",
        "combine work and exams",
        "flexible working act hours",
      ],
    },
    sources: [
      {
        title: "Hoe kan ik leren naast mijn werk?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/leven-lang-ontwikkelen/vraag-en-antwoord/hoe-kan-ik-leren-naast-mijn-werk",
        accessed: "2026-10-11",
      },
      {
        title: "Hoe kan ik mijn vakantiedagen opnemen?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/vakantiedagen-en-vakantiegeld/hoe-kan-ik-mijn-vakantiedagen-opnemen",
        accessed: "2026-10-11",
      },
      {
        title: "Wanneer mag ik meer of minder uren werken?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/wanneer-mag-ik-meer-of-minder-uren-werken",
        accessed: "2026-10-11",
      },
      {
        title: "Ik heb een nulurencontract. Heb ik recht op vakantiedagen en vakantiegeld? (vakantie-uren: 4 keer de uren per week, vakantiegeld minimaal 8%)",
        publisher: "Rijksoverheid",
        url: "https://rijksoverheid.nl/onderwerpen/vakantiedagen-en-vakantiegeld/vraag-en-antwoord/nulurencontract-en-vakantiedagen-en-vakantiegeld",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Heb je als werkstudent recht op vrij in je tentamenweek? Niet automatisch. De Rijksoverheid schrijft over leren naast je werk dat je misschien studieverlof kunt krijgen, en dat in een cao afspraken kunnen staan over een bijdrage in de kosten of een vergoeding [1]; een algemeen wettelijk recht op verlof voor tentamens noemt zij niet. De meest gebruikelijke route is vakantiedagen opnemen: je werkgever mag alleen bezwaar maken bij zwaarwegende bedrijfsbelangen of een collectieve vakantie [2]. Het verstandigst is om de afspraak over tentamenperiodes vooraf in je contract of een schriftelijke afspraak vast te leggen.",
        },
        {
          h2: "Wat zijn je opties?",
          ul: [
            "Studieverlof of een afspraak in de cao. De Rijksoverheid adviseert een opleiding met je werkgever te bespreken en schrijft dat je misschien studieverlof of een bijdrage in de kosten kunt krijgen; geldt er een cao, dan kunnen daarin afspraken staan over een bijdrage in de kosten of een vergoeding [1]. Kijk dus in je contract en de cao.",
            "Vakantiedagen opnemen. De werkgever moet je aanvraag in principe goedkeuren. Hij mag alleen bezwaar maken bij zwaarwegende bedrijfsbelangen of een collectieve vakantie, moet dat binnen twee weken schriftelijk doen en moet toestaan dat je op een ander moment vakantie opneemt [2]. Je moet ieder jaar je wettelijke vakantiedagen kunnen opnemen [2], maar niet per se op de dag die jij wilt.",
            "Tijdelijk minder uren. Op grond van de Wet flexibel werken mag je in overleg een (tijdelijk) andere arbeidsduur vragen, maar daarvoor moet je bij een bedrijf met minimaal 10 medewerkers werken, minimaal 26 weken in dienst zijn en je verzoek schriftelijk uiterlijk twee maanden voor de gewenste ingangsdatum doen [3]. Voor een tentamenweek die over drie weken begint, werkt dat dus niet.",
            "Een afspraak met je werkgever. Je kunt in overleg minder uren, ruilafspraken of onbetaald verlof afspreken; dat is een afspraak en geen recht.",
          ],
        },
        {
          h2: "Hoeveel vakantiedagen bouw je op?",
          p: "Je hebt per jaar recht op vakantie-uren ter grootte van vier keer het aantal uren dat je per week werkt; dit geldt voor alle werknemers [4]. Werk je 16 uur per week, dan is dat 64 uur per jaar. Voor een lange tentamenperiode kan dat te weinig zijn; reken dus op afspraken over minder uren of ruilen van uren. Niet opgenomen wettelijke vakantiedagen vervallen een half jaar na het kalenderjaar waarin je ze hebt opgebouwd [2].",
        },
        {
          h2: "Hoe pak je het slim aan?",
          ul: [
            "Bespreek tentamenperioden bij je sollicitatie, niet pas als ze eraan komen",
            "Geef je tentamenrooster zo vroeg mogelijk door en vraag om een afspraak voor de weken ervoor en erna",
            "Leg afspraken schriftelijk vast: hoeveel uur, in welke weken en of het om vakantiedagen, onbetaald verlof of ruiluren gaat",
            "Vraag of je werkgever zijn flexibiliteit ook vastlegt voor herkansingen",
          ],
        },
        {
          h2: "Wat kun je als werkgever doen?",
          p: "Wil je dat werkstudenten slagen in hun studie én in hun baan, maak dan vooraf tentamenafspraken: een rooster met minder uren in tentamenperioden, of een afspraak over vakantiedagen en ruiluren. Wat wel wettelijk geldt: een verlofaanvraag voor vakantiedagen moet je in principe goedkeuren en een bezwaar moet je binnen twee weken schriftelijk indienen [2].",
        },
      ],
      en: [
        {
          p: "Are working students entitled to time off in exam week? Not automatically. In its guidance on studying alongside work, the Dutch government writes that you may be able to get study leave, and that a collective agreement may contain arrangements on a contribution to the costs or an allowance [1]; it doesn't mention a general statutory right to leave for exams. The most common route is taking holiday days: your employer may only object on serious business grounds or because of a collective holiday [2]. The wisest course is to record the arrangement for exam periods in advance in your contract or a written agreement.",
        },
        {
          h2: "What are your options?",
          ul: [
            "Study leave or an arrangement in the collective agreement. The Dutch government advises discussing a programme with your employer and writes that you may be able to get study leave or a contribution to the costs; if a collective agreement applies, it may contain arrangements on a contribution to the costs or an allowance [1]. So check your contract and the collective agreement.",
            "Taking holiday days. The employer must in principle approve your request. It may only object on serious business grounds or because of a collective holiday, must do so in writing within two weeks and must allow you to take leave at another time [2]. You must be able to take your statutory holiday days every year [2], but not necessarily on the day you want.",
            "Temporarily fewer hours. Under the Flexible Working Act you may ask, in consultation, for a (temporarily) different working time, but you must work for a company with at least 10 employees, have been employed at least 26 weeks and make your request in writing at the latest two months before the desired start date [3]. For an exam week that starts in three weeks, that doesn't work.",
            "An agreement with your employer. You can agree fewer hours, swapped hours or unpaid leave in consultation; that's an agreement and not a right.",
          ],
        },
        {
          h2: "How many holiday days do you build up?",
          p: "Each year you're entitled to holiday hours equal to four times the number of hours you work per week; this applies to all employees [4]. If you work 16 hours a week, that's 64 hours a year. For a long exam period that may not be enough; so count on agreements about fewer hours or swapping hours. Statutory holiday days you haven't taken expire six months after the calendar year in which you built them up [2].",
        },
        {
          h2: "How do you approach it smartly?",
          ul: [
            "Discuss exam periods at your job interview, not only when they're coming up",
            "Pass on your exam timetable as early as possible and ask for an arrangement for the weeks before and after",
            "Put agreements in writing: how many hours, in which weeks and whether it concerns holiday days, unpaid leave or swapped hours",
            "Ask whether your employer will also record flexibility for resits",
          ],
        },
        {
          h2: "What can you do as an employer?",
          p: "If you want working students to succeed in both their studies and their job, make exam arrangements in advance: a roster with fewer hours in exam periods, or an agreement on holiday days and swapped hours. What does apply by law: you must in principle approve a request for holiday days and any objection must be made in writing within two weeks [2].",
        },
      ],
    },
  },
  // 49 ---------------------------------------------------------------------
  {
    slug: "werkstudentcontract-opzeggen-tussentijds",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/hg-15.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Werkstudentcontract opzeggen: mag dat en hoe?",
      en: "Ending a working-student contract early: can you, and how?",
    },
    excerpt: {
      nl: "Een tijdelijk contract kun je alleen tussentijds opzeggen als dat is afgesproken. Hoe zit het met proeftijd, opzegtermijn, WW en je vakantie-uren als je zelf wilt stoppen?",
      en: "A fixed-term contract can only be ended early if that has been agreed. What about probation, notice period, unemployment benefit and your holiday hours if you want to stop yourself?",
    },
    read: { nl: "3 min", en: "4 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Tijdelijk contract opzeggen: mag dat en hoe?",
      en: "Ending a fixed-term contract early: rules and notice",
    },
    metaDescription: {
      nl: "Mag je een werkstudentcontract tussentijds opzeggen? Tijdelijk of vast contract, proeftijd, opzegtermijn, WW en vakantie-uren volgens de Rijksoverheid.",
      en: "May you end a working-student contract early? Fixed-term or permanent contract, probation, notice period, benefit and holiday hours, per the government.",
    },
    keywords: {
      nl: [
        "tijdelijk contract opzeggen",
        "werkstudentcontract opzeggen",
        "tussentijds opzeggen",
        "opzegtermijn werknemer",
        "ontslag nemen proeftijd",
        "contract beëindigen werkstudent",
      ],
      en: [
        "end fixed-term contract early",
        "resign working student contract",
        "early termination clause Netherlands",
        "notice period employee Netherlands",
        "resign during probation",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 667, geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel667/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Ik wil ontslag nemen. Wat is mijn opzegtermijn?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/ontslag/vraag-en-antwoord/ontslag-nemen-opzegtermijn-werknemer",
        accessed: "2026-10-11",
      },
      {
        title: "Welke regels gelden er bij een proeftijd?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/regels-bij-proeftijd",
        accessed: "2026-10-11",
      },
      {
        title: "Wanneer eindigt mijn arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/arbeidsovereenkomst-en-cao/wanneer-wordt-mijn-arbeidsovereenkomst-beeindigd",
        accessed: "2026-10-11",
      },
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 672 (opzegtermijnen), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling9/Artikel672/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Heb ik recht op een transitievergoeding als ik word ontslagen?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/ontslag/vraag-en-antwoord/heb-ik-recht-op-een-vergoeding-als-ik-word-ontslagen",
        accessed: "2026-10-11",
      },
      {
        title: "Hoe kan ik mijn vakantiedagen opnemen?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/vakantiedagen-en-vakantiegeld/hoe-kan-ik-mijn-vakantiedagen-opnemen",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Mag je je werkstudentcontract tussentijds opzeggen? Dat hangt af van het soort contract. Een tijdelijk contract eindigt op de afgesproken einddatum en kun je alleen tussentijds opzeggen als dat schriftelijk voor beide partijen is afgesproken (artikel 7:667 BW) [1][2]. Een contract voor onbepaalde tijd kun je als werknemer opzeggen met een opzegtermijn van één maand [2]. In de proeftijd kunnen werkgever en werknemer het contract direct opzeggen [3]. Kijk ook in je eigen contract en de cao.",
        },
        {
          h2: "Kun je een tijdelijk contract tussentijds opzeggen?",
          p: "Een arbeidsovereenkomst voor bepaalde tijd eindigt van rechtswege wanneer de tijd is verstreken. Tussentijds opzeggen kan alleen als voor beide partijen dat recht schriftelijk is overeengekomen [1]. De Rijksoverheid schrijft dat je met je werkgever mag afspreken dat je je contract eerder kunt opzeggen, en dat het contract anders op de einddatum eindigt [2]. Staat er niets over tussentijds opzeggen in je contract of cao, dan kun je dus niet zomaar eenzijdig stoppen. Wel kun je met je werkgever in overleg het contract beëindigen, bijvoorbeeld met een beëindigingsovereenkomst. Lees zo'n overeenkomst goed: de Rijksoverheid waarschuwt dat je dan mogelijk geen WW-uitkering krijgt en dat je moet letten op de opzegtermijn [4].",
        },
        {
          h2: "Wat is de opzegtermijn als je zelf opzegt?",
          p: "Bij een contract voor onbepaalde tijd is de opzegtermijn voor de werknemer één maand, zonder andere afspraak. Dat is een kalendermaand: wil je per 1 april weg, dan moet je uiterlijk op 1 maart opzeggen. Je kunt een langere opzegtermijn afspreken, maar niet langer dan zes maanden [2]. Volgens artikel 7:672 BW is de termijn voor de werknemer één maand en geschiedt opzegging tegen het einde van de maand, tenzij schriftelijk iets anders is afgesproken [5]. Heb je een tussentijds opzegbeding in een tijdelijk contract, kijk dan eerst wat daarover is afgesproken of in de cao staat.",
        },
        {
          h2: "En in de proeftijd?",
          p: "Tijdens de proeftijd kunnen zowel jij als je werkgever het contract direct opzeggen, zonder opzegtermijn en zonder dat er een reden hoeft te zijn. De proeftijd moet schriftelijk zijn vastgelegd en is nooit langer dan twee maanden. Wie opzegt moet op verzoek van de ander schriftelijk de reden opgeven. Zeg je zelf op tijdens de proeftijd, dan heb je geen recht op een WW-uitkering; je kunt eventueel wel een beroep doen op bijstand van je gemeente [3].",
        },
        {
          h2: "Kan het contract ook op andere manieren eindigen?",
          p: "Ja. De Rijksoverheid noemt onder meer een einde van rechtswege op de einddatum, ontslag met wederzijds goedvinden, opzegging en een ontbindende voorwaarde. Bij een ontbindende voorwaarde eindigt het contract als een afgesproken gebeurtenis plaatsvindt; als voorbeeld noemt de Rijksoverheid dat je op een bepaalde datum een diploma niet hebt behaald [4]. Kijk dus of zo'n voorwaarde in je contract staat.",
        },
        {
          h2: "Wat zijn de gevolgen als je zelf stopt?",
          ul: [
            "WW. Neem je zelf ontslag, dan heb je tijdens de proeftijd geen recht op WW [3]; ook bij een beëindiging met wederzijds goedvinden kan de uitkering worden geweigerd [4].",
            "Transitievergoeding. Zeg je zelf op of weiger je een verlenging, dan heb je alleen recht op een transitievergoeding bij ernstig verwijtbaar handelen van de werkgever [6].",
            "Vakantie-uren. Heb je bij een overstap nog vakantie-uren over die je niet meer kunt opnemen, dan krijg je ze uitbetaald [7].",
          ],
        },
        {
          h2: "Wat als de werkgever het contract wil beëindigen?",
          p: "Bij een tijdelijk contract geldt voor de werkgever hetzelfde als voor jou: alleen tussentijds opzeggen als dat is afgesproken, anders eindigt het contract op de einddatum. Bij een contract voor onbepaalde tijd moet een werkgever toestemming vragen aan het UWV voordat hij opzegt om bedrijfseconomische redenen of bij langdurige arbeidsongeschiktheid [4]; voor andere redenen gelden andere procedures. Over verlengen en de ketenregeling schrijven we in een ander artikel.",
        },
        {
          h2: "Praktische stappen",
          ul: [
            "Lees je contract en de cao: staat er een tussentijds opzegbeding, een proeftijd of een ontbindende voorwaarde in?",
            "Zeg schriftelijk op en bewaar een bewijs van verzending",
            "Vraag om een overzicht van je opgebouwde vakantie-uren en een afrekening",
            "Teken geen beëindigingsovereenkomst die je niet snapt; vraag eerst advies, bijvoorbeeld bij het Juridisch Loket",
          ],
        },
      ],
      en: [
        {
          p: "May you end your working-student contract early? It depends on the type of contract. A fixed-term contract ends on the agreed end date and can only be terminated early if both parties have agreed that in writing (Article 7:667 of the Dutch Civil Code) [1][2]. As an employee you can end a permanent contract with a notice period of one month [2]. During probation, employer and employee can end the contract immediately [3]. Also check your own contract and the collective agreement.",
        },
        {
          h2: "Can you end a fixed-term contract early?",
          p: "A fixed-term employment contract ends by operation of law when the term expires. Early termination is only possible if that right has been agreed in writing for both parties [1]. The Dutch government writes that you may agree with your employer that you can end your contract earlier, and that otherwise the contract ends on the end date [2]. If nothing about early termination is in your contract or collective agreement, you can't simply stop unilaterally. You can, however, agree with your employer to end the contract, for example with a termination agreement. Read such an agreement carefully: the Dutch government warns that you may then not receive unemployment benefit and that you must pay attention to the notice period [4].",
        },
        {
          h2: "What is the notice period if you resign yourself?",
          p: "For a permanent contract the notice period for the employee is one month, absent another agreement. That's a calendar month: if you want to leave on 1 April, you must give notice by 1 March at the latest. You can agree a longer notice period, but not longer than six months [2]. Under Article 7:672 of the Civil Code the period for the employee is one month and notice is given to the end of the month, unless agreed otherwise in writing [5]. If you have an early termination clause in a fixed-term contract, first check what has been agreed about it or what the collective agreement says.",
        },
        {
          h2: "And during probation?",
          p: "During probation both you and your employer can end the contract immediately, without a notice period and without a reason being required. The probation period must be recorded in writing and is never longer than two months. Whoever gives notice must state the reason in writing on request of the other. If you resign yourself during probation, you have no right to unemployment benefit; you may be able to claim welfare from your municipality [3].",
        },
        {
          h2: "Can a contract also end in other ways?",
          p: "Yes. The Dutch government lists, among others, ending by operation of law on the end date, termination by mutual consent, notice and a condition subsequent. With a condition subsequent the contract ends if an agreed event occurs; as an example the government mentions that you haven't obtained a diploma by a certain date [4]. So check whether such a condition is in your contract.",
        },
        {
          h2: "What are the consequences if you stop yourself?",
          ul: [
            "Unemployment benefit. If you resign yourself, you have no right to unemployment benefit during probation [3]; with termination by mutual consent, the benefit can also be refused [4].",
            "Transition payment. If you resign or refuse an extension, you only have a right to a transition payment in case of seriously culpable conduct by the employer [6].",
            "Holiday hours. If you have holiday hours left that you can no longer take when moving on, they're paid out to you [7].",
          ],
        },
        {
          h2: "What if the employer wants to end the contract?",
          p: "For a fixed-term contract the same applies to the employer as to you: only early termination if that was agreed, otherwise the contract ends on the end date. For a permanent contract an employer must ask UWV for permission before giving notice for business-economic reasons or in case of long-term incapacity for work [4]; other procedures apply for other reasons. We write about extension and the chain rule in another article.",
        },
        {
          h2: "Practical steps",
          ul: [
            "Read your contract and the collective agreement: does it contain an early termination clause, a probation period or a condition subsequent?",
            "Give notice in writing and keep proof of sending",
            "Ask for an overview of your accrued holiday hours and a final settlement",
            "Don't sign a termination agreement you don't understand; ask for advice first, for example from the Dutch Legal Aid Desk (Juridisch Loket)",
          ],
        },
      ],
    },
  },
  // 50 ---------------------------------------------------------------------
  {
    slug: "twee-bijbanen-tegelijk-nevenwerkzaamheden",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/hg-16.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Twee bijbanen tegelijk: mag dat en wat moet je regelen?",
      en: "Two jobs at once: is it allowed and what must you arrange?",
    },
    excerpt: {
      nl: "Een werkgever mag je niet zomaar verbieden om ook voor anderen te werken. Maar je loonheffingskorting kan maar één keer worden toegepast en de Arbeidstijdenwet telt al je uren op.",
      en: "An employer may not simply forbid you from also working for others. But your payroll tax credit can only be applied once and the Working Time Act adds up all your hours.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Twee bijbanen tegelijk: wat mag en wat moet je regelen",
      en: "Two jobs at once: what is allowed and what to arrange",
    },
    metaDescription: {
      nl: "Mag je meerdere banen tegelijk hebben? Wat artikel 7:653a BW zegt, hoe de loonheffingskorting werkt en hoe je werkuren worden opgeteld.",
      en: "May you have several jobs at once? What Article 7:653a of the Civil Code says, how the payroll tax credit works and how working hours are added up.",
    },
    keywords: {
      nl: [
        "twee bijbanen tegelijk",
        "nevenwerkzaamheden werknemer",
        "artikel 7:653a BW",
        "loonheffingskorting meerdere banen",
        "Arbeidstijdenwet meerdere banen",
        "bijbaan naast bijbaan",
      ],
      en: [
        "two jobs at once Netherlands",
        "side jobs employee rights",
        "article 7:653a Dutch Civil Code",
        "payroll tax credit multiple jobs",
        "working time act multiple jobs",
      ],
    },
    sources: [
      {
        title: "Burgerlijk Wetboek Boek 7, artikel 653a (nevenwerkzaamheden), geldend per 1 juli 2026",
        publisher: "wetten.overheid.nl",
        url: "https://wetten.overheid.nl/BWBR0005290/2026-07-01/0/Boek7/Titeldeel10/Afdeling5/Artikel653a/afdrukken",
        accessed: "2026-10-11",
      },
      {
        title: "Ik werk in loondienst",
        publisher: "Belastingdienst",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/ik-werk-in-loondienst",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in de Arbeidstijdenwet over mijn werktijden?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/werktijden/vraag-en-antwoord/wat-staat-er-in-de-arbeidstijdenwet-over-mijn-werktijden",
        accessed: "2026-10-11",
      },
      {
        title: "Wat zijn de wettelijke regels voor mijn werktijden en rusttijden?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/vraag-en-antwoord/werktijden/wettelijke-regels-werktijden-en-rusttijden",
        accessed: "2026-10-11",
      },
      {
        title: "Bijverdienen",
        publisher: "DUO",
        url: "https://duo.nl/particulier/studiefinanciering/bijverdienen.jsp",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Mag je twee banen tegelijk hebben? In principe wel. Een beding in je contract waarmee de werkgever verbiedt of beperkt dat je buiten werktijd voor anderen werkt, is volgens artikel 7:653a BW nietig, tenzij het kan worden gerechtvaardigd door een objectieve reden [1]. Voor belasting mag je de loonheffingskorting maar bij één werkgever laten toepassen [2], en de Arbeidstijdenwet geldt voor al je banen samen [3].",
        },
        {
          h2: "Wat zegt artikel 7:653a BW?",
          p: "Lid 1 bepaalt dat een beding waarbij de werkgever verbiedt of beperkt dat je voor anderen arbeid verricht buiten de tijdstippen waarop je voor die werkgever moet werken, nietig is, tenzij dat beding kan worden gerechtvaardigd door een objectieve reden. Lid 2 verbiedt de werkgever je te benadelen omdat je je op dit artikel beroept, daarbij bijstand hebt verleend of een klacht hebt ingediend [1]. Wat een objectieve reden is, hangt af van het geval. Per 1 januari 2028 wordt dit artikel gewijzigd [1].",
        },
        {
          h2: "Wat moet je regelen voor de belasting?",
          p: "Heb je tegelijkertijd verschillende banen, dan laat je volgens de Belastingdienst de loonheffingskorting maar bij één werkgever toepassen [2]. Je geeft dat door op het formulier Model opgaaf gegevens voor de loonheffingen dat je bij elke nieuwe werkgever invult. Volg je een opleiding, dan kun je je werkgever vragen de studenten- en scholierenregeling toe te passen [2]. Lees in ons artikel over loonheffingskorting en de eerste baan hoe dat werkt.",
        },
        {
          h2: "Hoeveel uur mag je in totaal werken?",
          p: "Heb je meerdere banen, dan geldt de Arbeidstijdenwet volgens de Rijksoverheid op al je werkzaamheden: je telt de werktijden bij elkaar op om na te gaan wat je werktijden en rusttijden moeten zijn [3]. De wet noemt voor werknemers van 18 jaar en ouder onder meer maximaal 12 uur per dienst en maximaal 60 uur per week, gemiddeld 55 uur over vier weken en gemiddeld 48 uur over zestien weken, en na een werkdag minimaal 11 aaneengesloten uren rust [4]. Voor jongeren onder de 18 gelden aparte, strengere regels [3]. Dat zijn wettelijke bovengrenzen, geen aanbevelingen voor wat verstandig is naast een studie. Ben je een internationale student van buiten de EER, dan gelden aparte urengrenzen; zie ons artikel daarover.",
        },
        {
          h2: "Raakt een tweede baan je studiefinanciering?",
          p: "DUO meldt dat je sinds 2020 onbeperkt mag bijverdienen zonder bijverdiengrens [5]. Over mogelijke gevolgen voor toeslagen en belasting lees je meer in ons artikel over studiefinanciering en werken; controleer die bij de Belastingdienst.",
        },
        {
          h2: "Wat kun je praktisch doen?",
          ul: [
            "Lees in je contracten of er een nevenwerkzaamhedenbeding staat en wat het precies bepaalt",
            "Is er een verbod of beperking, vraag dan om de reden schriftelijk en toets die aan artikel 7:653a BW; vraag bij twijfel advies",
            "Kies bij welke werkgever je de loonheffingskorting laat toepassen en vul dat bij de andere werkgever(s) op het formulier ook zo in",
            "Houd je totale werkuren per week bij, inclusief je studie, zodat je binnen wat haalbaar is blijft",
            "Leg afspraken over roosters en tentamenperiodes bij beide werkgevers vast",
          ],
        },
      ],
      en: [
        {
          p: "May you have two jobs at once? In principle, yes. A clause in your contract by which the employer forbids or restricts you from working for others outside working hours is void under Article 7:653a of the Dutch Civil Code, unless it can be justified by an objective reason [1]. For tax, you may only have the payroll tax credit applied by one employer [2], and the Working Time Act applies to all your jobs together [3].",
        },
        {
          h2: "What does Article 7:653a say?",
          p: "Paragraph 1 provides that a clause by which the employer forbids or restricts you from performing work for others outside the times at which you must work for that employer is void, unless that clause can be justified by an objective reason. Paragraph 2 prohibits the employer from disadvantaging you because you invoke this article, have assisted others in doing so or have filed a complaint [1]. What counts as an objective reason depends on the case. This article will be amended as of 1 January 2028 [1].",
        },
        {
          h2: "What do you need to arrange for tax?",
          p: "If you have several jobs at the same time, according to the Tax Administration you have the payroll tax credit applied by one employer only [2]. You state this on the form Model opgaaf gegevens voor de loonheffingen that you fill in for each new employer. If you're studying, you can ask your employer to apply the student and pupil scheme [2]. Read how this works in our article on the payroll tax credit and your first job.",
        },
        {
          h2: "How many hours may you work in total?",
          p: "If you have several jobs, according to the Dutch government the Working Time Act applies to all your work: you add up the working times to work out what your working and rest times must be [3]. For employees aged 18 and over, the law sets, among other things, a maximum of 12 hours per shift and 60 hours per week, an average of 55 hours over four weeks and an average of 48 hours over sixteen weeks, and at least 11 consecutive hours of rest after a working day [4]. Separate, stricter rules apply to people under 18 [3]. These are statutory upper limits, not recommendations for what's sensible alongside a study. If you're an international student from outside the EEA, separate hour limits apply; see our article on that.",
        },
        {
          h2: "Does a second job affect your student finance?",
          p: "DUO states that since 2020 you may earn without limit, with no earnings ceiling [5]. You can read about possible consequences for benefits and tax in our article on student finance and working; check them with the Tax Administration.",
        },
        {
          h2: "What can you do in practice?",
          ul: [
            "Check your contracts for a side-job clause and what exactly it says",
            "If there's a ban or restriction, ask for the reason in writing and test it against Article 7:653a; ask for advice if in doubt",
            "Choose with which employer you have the payroll tax credit applied and fill in the form that way with the other employer(s) too",
            "Keep track of your total working hours per week, including your studies, so that you stay within what's feasible",
            "Record agreements on rosters and exam periods with both employers",
          ],
        },
      ],
    },
  },
  // 51 ---------------------------------------------------------------------
  {
    slug: "nepvacature-herkennen-signalen",
    aud: "talent",
    photo: "/photography/hg-17.jpg",
    tag: { nl: "Red flags", en: "Red flags" },
    title: {
      nl: "Nepvacature herkennen: signalen en wat je kunt doen",
      en: "Spotting a fake job ad: warning signs and what to do",
    },
    excerpt: {
      nl: "Ongevraagd werkaanbod, een gesprek via WhatsApp en geld vooraf overmaken: de signalen van vacaturefraude volgens de Fraudehelpdesk, en wat je doet als je al hebt betaald.",
      en: "An unsolicited job offer, a chat on WhatsApp and money transferred up front: the signs of job-ad fraud according to the Dutch Fraud Helpdesk, and what to do if you've already paid.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Nepvacature herkennen: signalen en wat te doen",
      en: "Fake job ad: warning signs and what to do",
    },
    metaDescription: {
      nl: "Hoe herken je een nepvacature? De signalen volgens de Fraudehelpdesk, wat een echte werkgever wel en niet vraagt en wat je doet als je betaald hebt.",
      en: "How do you spot a fake job ad? The signs per the Fraud Helpdesk, what a real employer does and does not ask and what to do if you have paid.",
    },
    keywords: {
      nl: [
        "nepvacature herkennen",
        "vacaturefraude",
        "nepbaan WhatsApp",
        "oplichting thuiswerk reviews",
        "Fraudehelpdesk vacature",
        "betrouwbare vacature herkennen",
      ],
      en: [
        "fake job ad",
        "job scam Netherlands",
        "WhatsApp job scam",
        "work from home review scam",
        "Fraud Helpdesk vacancy",
        "recognise reliable vacancy",
      ],
    },
    sources: [
      {
        title: "Ik heb gereageerd op een vacature",
        publisher: "Fraudehelpdesk",
        url: "https://www.fraudehelpdesk.nl/fraude/ik-heb-gereageerd-op-een-vacature/",
        accessed: "2026-10-11",
      },
      {
        title: "Gereageerd op vacature: waarom moet ik voorschot betalen? (waarschuwing werkaanbod via telefoon en WhatsApp)",
        publisher: "Fraudehelpdesk",
        url: "https://www.fraudehelpdesk.nl/fraude-abc/gereageerd-op-vacature-waarom-moet-voorschot-betalen/",
        accessed: "2026-10-11",
      },
      {
        title: "Personal data of applicants",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/job-applications/personal-data-of-applicants",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
      {
        title: "Verklein je risico: check het uittreksel Handelsregister",
        publisher: "KVK",
        url: "https://www.kvk.nl/over-het-handelsregister/check-via-uittreksel/",
        year: "2026",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een nepvacature herken je aan een werkaanbod waar je niet om hebt gevraagd, een gesprek dat naar WhatsApp verhuist, een belofte van veel geld voor weinig werk zonder opleiding, en het verzoek om eerst geld over te maken [1][2]. Betaal niet voor werk waarvoor jij juist betaald moet worden [1]. Heb je al gegevens gedeeld of betaald, neem dan contact op met de Fraudehelpdesk; heb je een kopie van je identiteitsbewijs gestuurd, meld dat dan ook bij het Centraal Meldpunt Identiteitsfraude [1].",
        },
        {
          h2: "Hoe werkt vacaturefraude?",
          p: "De Fraudehelpdesk beschrijft een veelvoorkomend patroon: oplichters bellen of appen met een werkaanbod, vaak voor thuiswerk, zoals het schrijven van reviews of handelen in crypto. Ze doen zich voor als uitzendbureau, als Indeed of als HR-afdeling van een bedrijf. Wil je meer informatie, dan moet je het nummer toevoegen aan je contacten en via WhatsApp verder praten. Om taken te kunnen uitvoeren moet je eerst een bedrag storten, dat je met winst terug zou krijgen. In het begin wordt soms echt iets uitgekeerd, maar daarna hoor je dat je te weinig taken hebt gedaan en moet je bijbetalen om een boete te voorkomen. Uiteindelijk betaal je wel, maar krijg je niets terug [1][2].",
        },
        {
          h2: "Welke signalen zijn er?",
          ul: [
            "Je krijgt een werkaanbod waar je zelf niet om hebt gevraagd [2]",
            "Het werk kan vanuit huis, kost weinig tijd en levert veel geld op, zonder dat een opleiding nodig is [2]",
            "Je moet een onbekend nummer opslaan en verder praten via WhatsApp [2]",
            "Je moet eerst geld overmaken, of later bijbetalen om een boete te voorkomen of een tegoed uitbetaald te krijgen [1][2]",
            "Je wordt gevraagd een kopie van je identiteitsbewijs te sturen [1]",
          ],
        },
        {
          h2: "Wat is normaal bij een echte werkgever?",
          ul: [
            "Een werkgever mag volgens de Autoriteit Persoonsgegevens in de sollicitatiefase geen kopie, scan of foto van je identiteitsbewijs vragen en ook geen burgerservicenummer; wel mag hij je originele document laten zien om je identiteit te controleren [3]. Dat mag pas als je in dienst komt.",
            "Een werkgever moet je binnen een week na indiensttreding een aantal gegevens schriftelijk meedelen, zoals het salaris, het aantal uren en de functie [4].",
            "Jij betaalt niet om te mogen werken; de werkgever betaalt jou loon.",
          ],
        },
        {
          h2: "Hoe check je een bedrijf?",
          p: "Alle bedrijven en organisaties in Nederland staan in het Handelsregister van de KVK, en basisinformatie zoals het KVK-nummer en de handelsnaam kun je gratis opzoeken [5]. Dat je een bedrijf vindt, bewijst niet dat de vacature echt is: oplichters doen zich ook voor als bestaande bedrijven [2]. Neem daarom zelf contact op via het telefoonnummer of de website die je kent, niet via de gegevens uit het bericht.",
        },
        {
          h2: "Wat doe je als je erin bent getrapt?",
          ul: [
            "Stop het contact en betaal niets meer",
            "Heb je betaald of persoonlijke gegevens doorgegeven? Neem contact op met de Fraudehelpdesk voor persoonlijk advies [1]",
            "Heb je een kopie van je identiteitsbewijs gestuurd? Meld dit ook bij het Centraal Meldpunt Identiteitsfraude [1]",
            "Meld de poging bij de Fraudehelpdesk, zodat anderen gewaarschuwd kunnen worden [1]",
          ],
        },
        {
          h2: "Meer over vacatures die niet kloppen",
          p: "Niet elke vacature die tegenvalt is fraude. Over vacatures waarbij het salaris, de taken of het contract niet kloppen, schrijven we in ons artikel over red flags bij een jobaanbod.",
        },
      ],
      en: [
        {
          p: "You recognise a fake job ad by a job offer you didn't ask for, a conversation that moves to WhatsApp, a promise of a lot of money for little work without training, and a request to transfer money first [1][2]. Don't pay for work for which you should be the one being paid [1]. If you've already shared data or paid, contact the Fraud Helpdesk; if you sent a copy of your identity document, also report that to the Central Reporting Point for Identity Fraud [1].",
        },
        {
          h2: "How does job-ad fraud work?",
          p: "The Fraud Helpdesk describes a common pattern: fraudsters call or message with a job offer, often for working from home, such as writing reviews or trading crypto. They pose as a temp agency, as Indeed or as a company's HR department. If you want more information, you have to add the number to your contacts and continue on WhatsApp. To carry out tasks you first have to deposit an amount, which you're supposedly to get back with profit. At first something is sometimes really paid out, but then you hear that you've done too few tasks and have to pay extra to avoid a penalty. In the end you pay but get nothing back [1][2].",
        },
        {
          h2: "What are the warning signs?",
          ul: [
            "You receive a job offer you didn't ask for [2]",
            "The work can be done from home, takes little time and earns a lot of money, without any training being needed [2]",
            "You have to save an unknown number and continue on WhatsApp [2]",
            "You have to transfer money first, or pay extra later to avoid a penalty or to get a balance paid out [1][2]",
            "You're asked to send a copy of your identity document [1]",
          ],
        },
        {
          h2: "What's normal with a real employer?",
          ul: [
            "According to the Dutch data protection authority, an employer may not ask for a copy, scan or photo of your identity document in the application stage, nor for your citizen service number; it may, however, ask to see your original document to check your identity [3]. That's only allowed once you start working there.",
            "An employer must give you certain details in writing within one week of starting, such as the salary, the hours and the job [4].",
            "You don't pay to be allowed to work; the employer pays you wages.",
          ],
        },
        {
          h2: "How do you check a company?",
          p: "All companies and organisations in the Netherlands are in the KVK Trade Register, and basic information such as the KVK number and trade name can be looked up for free [5]. Finding a company doesn't prove the vacancy is real: fraudsters also pose as existing companies [2]. So make contact yourself via a phone number or website that you know, not via the details in the message.",
        },
        {
          h2: "What do you do if you've been caught out?",
          ul: [
            "Stop the contact and pay nothing more",
            "Have you paid or passed on personal data? Contact the Fraud Helpdesk for personal advice [1]",
            "Did you send a copy of your identity document? Also report this to the Central Reporting Point for Identity Fraud [1]",
            "Report the attempt to the Fraud Helpdesk so that others can be warned [1]",
          ],
        },
        {
          h2: "More on vacancies that don't add up",
          p: "Not every disappointing vacancy is fraud. For vacancies where the salary, tasks or contract don't add up, see our article on red flags in a job offer.",
        },
      ],
    },
  },
  // 52 ---------------------------------------------------------------------
  {
    slug: "recruitmentbureau-talentpool-kosten-en-gegevens",
    aud: "talent",
    legalTopic: true,
    commercialInterest: true,
    photo: "/photography/hg-18.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Recruitmentbureau of talentpool: kosten en je gegevens",
      en: "Recruitment agency or talent pool: cost and your data",
    },
    excerpt: {
      nl: "Wat kost solliciteren via een bureau of talentpool, hoe lang mag een bureau je gegevens bewaren en welke rechten heb je? Met de regels van de Autoriteit Persoonsgegevens en wat VOIDS zelf doet.",
      en: "What does applying through an agency or talent pool cost, how long may an agency keep your data and which rights do you have? With the data protection authority's rules and what VOIDS itself does.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Talentpool of recruitmentbureau: kosten en privacy",
      en: "Talent pool or recruitment agency: cost and privacy",
    },
    metaDescription: {
      nl: "Wat kost solliciteren via een recruitmentbureau of talentpool, hoe lang bewaart een bureau je gegevens en welke rechten heb je? Regels en VOIDS-beleid.",
      en: "What does applying via a recruitment agency or talent pool cost, how long is your data kept and which rights do you have? Rules and VOIDS policy.",
    },
    keywords: {
      nl: [
        "talentpool",
        "recruitmentbureau kosten kandidaat",
        "gegevens verwijderen recruitmentbureau",
        "AVG sollicitant rechten",
        "bewaartermijn sollicitatiegegevens",
        "solliciteren via bureau",
      ],
      en: [
        "talent pool",
        "recruitment agency cost for candidates",
        "delete data recruitment agency",
        "GDPR applicant rights",
        "retention period application data",
        "apply through an agency",
      ],
    },
    sources: [
      {
        title: "Ik heb gereageerd op een vacature",
        publisher: "Fraudehelpdesk",
        url: "https://www.fraudehelpdesk.nl/fraude/ik-heb-gereageerd-op-een-vacature/",
        accessed: "2026-10-11",
      },
      {
        title: "Talent: community, jobboard en talentpool",
        publisher: "VOIDS",
        url: "https://voids.agency/talent",
        accessed: "2026-10-11",
      },
      {
        title: "Job applications (quick answers for applicants)",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/job-applications",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Privacybeleid",
        publisher: "VOIDS",
        url: "https://voids.agency/privacy",
        accessed: "2026-10-11",
      },
      {
        title: "Boete voor recruitmentbedrijf om negeren verwijderverzoeken",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/nl/actueel/boete-voor-recruitmentbedrijf-om-negeren-verwijderverzoeken",
        year: "2024",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Een partij die geld van je vraagt om aan werk te komen, is volgens de Fraudehelpdesk een waarschuwingssignaal [1]. Bij VOIDS is meedoen voor studenten en starters volgens onze website altijd gratis, omdat bedrijven betalen voor plaatsingen [2]. Je hebt als kandidaat privacyrechten: inzage, correctie en in sommige gevallen verwijdering van je gegevens [3]. De Autoriteit Persoonsgegevens (AP) noemt vier weken na afloop van een sollicitatieprocedure als gebruikelijke bewaartermijn bij afwijzing, en maximaal een jaar met toestemming als redelijk [3].",
        },
        {
          h2: "Wat is een talentpool?",
          p: "Een talentpool is een verzameling kandidaten die een bureau proactief aan werkgevers voorstelt, ook voor rollen die nog niet openbaar zijn. Volgens de VOIDS-website krijg je als lid persoonlijke matches, offmarket-kansen en uitnodigingen voor events; we stellen je voor aan een werkgever als er een concrete match is, niet breed [2]. Let op het verschil met de community: 4.000+ is het aantal studenten en starters in onze community, niet het aantal mensen in de talentpool.",
        },
        {
          h2: "Wat kost het jou?",
          p: "Volgens de Fraudehelpdesk moet je niet betalen voor werk waarvoor jij juist betaald moet worden [1]. Dat is geen wettelijke regel maar een waarschuwing voor oplichting; zie ons artikel over nepvacatures. Bij VOIDS kost meedoen niets en betalen de bedrijven waar we mensen plaatsen [2].",
        },
        {
          h2: "Hoe lang mag een bureau je gegevens bewaren?",
          p: "Voor sollicitaties geeft de AP een richtlijn. Word je niet aangenomen, dan is het gebruikelijk dat gegevens uiterlijk vier weken na het einde van de procedure worden verwijderd. Je kunt toestemming geven om ze langer te bewaren, bijvoorbeeld voor een latere vacature; een redelijke termijn is dan maximaal één jaar na afloop van de procedure [3]. VOIDS schrijft in het privacybeleid dat kandidaatprofielen tot 12 maanden worden bewaard, zodat we contact kunnen opnemen over toekomstige kansen, en dat je met toestemming deelneemt aan de talentpool [4].",
        },
        {
          h2: "Welke rechten heb je?",
          ul: [
            "Inzage: je mag weten welke gegevens een organisatie van je heeft [3]",
            "Correctie: je kunt vragen onjuiste of ontbrekende gegevens aan te passen of aan te vullen [3]",
            "Verwijdering: in sommige gevallen kun je vragen je gegevens te wissen [3]. De AP legde in 2020 een boete van € 6.000 op aan een recruitmentbedrijf dat de gegevens van drie mensen niet had verwijderd nadat zij daarom hadden gevraagd; de boete werd in 2024 openbaar gemaakt [5]",
            "Klacht: ga eerst naar de organisatie zelf; komt je er niet uit, dan kun je een klacht indienen bij de AP [3]",
          ],
        },
        {
          h2: "Met wie deelt een bureau je gegevens?",
          p: "VOIDS schrijft in het privacybeleid dat kandidaatinformatie alleen wordt gedeeld met potentiële werkgevers wanneer dat relevant is voor een specifieke kans, dat werkgevers de informatie vertrouwelijk moeten behandelen en alleen voor werving mogen gebruiken, en dat ook dienstverleners voor onze website en communicatiesystemen toegang kunnen hebben [4]. Op de talentpagina staat dat je profiel niet breed wordt gedeeld en dat je op elk moment kunt vragen je gegevens aan te passen of te verwijderen [2]. Je kunt dat vragen via contact@voids.agency.",
        },
        {
          h2: "Waar let je op bij elk bureau?",
          ul: [
            "Lees het privacybeleid: welke gegevens worden bewaard, hoe lang en met wie worden ze gedeeld?",
            "Vraag of je profiel alleen met jouw toestemming per vacature wordt voorgedragen",
            "Controleer dat je nergens geld hoeft te betalen en geen kopie van je ID hoeft op te sturen voordat er een arbeidsovereenkomst is",
            "Bewaar een bewijs van je verzoek tot verwijdering en vraag een bevestiging",
          ],
        },
      ],
      en: [
        {
          p: "A party that asks you for money to get work is, according to the Fraud Helpdesk, a warning sign [1]. At VOIDS, taking part is always free for students and starters according to our website, because companies pay for placements [2]. As a candidate you have privacy rights: access, correction and in some cases deletion of your data [3]. The Dutch data protection authority (AP) names four weeks after the end of an application procedure as the usual retention period on rejection, and a maximum of one year with consent as reasonable [3].",
        },
        {
          h2: "What is a talent pool?",
          p: "A talent pool is a collection of candidates that an agency proactively proposes to employers, including for roles that aren't yet public. According to the VOIDS website, as a member you get personal matches, off-market opportunities and invitations to events; we put you forward to an employer if there's a concrete match, not broadly [2]. Note the difference with the community: 4,000+ is the number of students and starters in our community, not the number of people in the talent pool.",
        },
        {
          h2: "What does it cost you?",
          p: "According to the Fraud Helpdesk you shouldn't pay for work for which you should be the one being paid [1]. That's not a statutory rule but a warning against fraud; see our article on fake job ads. At VOIDS taking part costs nothing and the companies where we place people pay [2].",
        },
        {
          h2: "How long may an agency keep your data?",
          p: "For applications the AP gives a guideline. If you aren't hired, it's customary for data to be deleted no later than four weeks after the end of the procedure. You can give consent for longer retention, for example for a later vacancy; a reasonable period is then a maximum of one year after the end of the procedure [3]. VOIDS states in its privacy policy that candidate profiles are kept for up to 12 months so that we can contact you about future opportunities, and that you take part in the talent pool with consent [4].",
        },
        {
          h2: "Which rights do you have?",
          ul: [
            "Access: you may know which data an organisation holds about you [3]",
            "Correction: you can ask for incorrect or missing data to be adjusted or completed [3]",
            "Deletion: in some cases you can ask for your data to be erased [3]. In 2020 the AP imposed a fine of € 6,000 on a recruitment company that hadn't deleted the data of three people after they asked; the fine was made public in 2024 [5]",
            "Complaint: go to the organisation first; if you can't resolve it, you can file a complaint with the AP [3]",
          ],
        },
        {
          h2: "With whom does an agency share your data?",
          p: "VOIDS states in its privacy policy that candidate information is only shared with potential employers when relevant for a specific opportunity, that employers must treat the information as confidential and may only use it for recruitment, and that service providers for our website and communication systems may also have access [4]. The talent page states that your profile isn't shared broadly and that you can ask at any time for your data to be changed or deleted [2]. You can ask via contact@voids.agency.",
        },
        {
          h2: "What do you look out for with any agency?",
          ul: [
            "Read the privacy policy: which data are kept, for how long and with whom are they shared?",
            "Ask whether your profile is only put forward per vacancy with your consent",
            "Check that you don't have to pay anywhere and don't have to send a copy of your ID before there's an employment contract",
            "Keep proof of your deletion request and ask for confirmation",
          ],
        },
      ],
    },
  },
  // 53 ---------------------------------------------------------------------
  {
    slug: "loonheffingskorting-student-eerste-baan",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/hg-19.jpg",
    tag: { nl: "Eerste stap", en: "First step" },
    title: {
      nl: "Eerste baan als student: loonheffingskorting en belasting",
      en: "First job as a student: payroll tax credit and tax",
    },
    excerpt: {
      nl: "Wat moet je regelen voor je eerste werkdag: het loonheffingenformulier, de loonheffingskorting, de studenten- en scholierenregeling en je identiteitsbewijs. Volgens de Belastingdienst en DUO.",
      en: "What to arrange before your first working day: the payroll tax form, the payroll tax credit, the student and pupil scheme and your identity document. According to the Tax Administration and DUO.",
    },
    read: { nl: "3 min", en: "3 min" },
    published: "2026-10-11",
    updated: "2026-10-11",
    metaTitle: {
      nl: "Eerste baan als student: loonheffingskorting regelen",
      en: "First student job: arranging the payroll tax credit",
    },
    metaDescription: {
      nl: "Wat regel je bij je eerste baan als student? Loonheffingsformulier, loonheffingskorting, studenten- en scholierenregeling, ID en belasting terugvragen.",
      en: "What do you arrange for your first student job? Payroll tax form, payroll tax credit, student and pupil scheme, ID and reclaiming tax.",
    },
    keywords: {
      nl: [
        "loonheffingskorting student",
        "studenten- en scholierenregeling",
        "eerste baan regelen",
        "belasting terugvragen student",
        "model opgaaf gegevens loonheffingen",
        "bijbaan belasting",
      ],
      en: [
        "payroll tax credit student",
        "student and pupil scheme Netherlands",
        "arranging first job",
        "reclaim tax student",
        "payroll tax form first job",
        "tax on side job",
      ],
    },
    sources: [
      {
        title: "Ik werk in loondienst",
        publisher: "Belastingdienst",
        url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/jongeren/content/ik-werk-in-loondienst",
        accessed: "2026-10-11",
      },
      {
        title: "ID-bewijs controleren en bewaren",
        publisher: "Ondernemersplein (Rijksoverheid)",
        url: "https://ondernemersplein.overheid.nl/wetten-en-regels/identiteitsbewijs-controleren-en-bewaren/",
        accessed: "2026-10-11",
      },
      {
        title: "Personal data of applicants",
        publisher: "Autoriteit Persoonsgegevens",
        url: "https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/job-applications/personal-data-of-applicants",
        year: "2025",
        accessed: "2026-10-11",
      },
      {
        title: "Bijverdienen",
        publisher: "DUO",
        url: "https://duo.nl/particulier/studiefinanciering/bijverdienen.jsp",
        year: "2026",
        accessed: "2026-10-11",
      },
      {
        title: "Wat staat er in een arbeidsovereenkomst?",
        publisher: "Rijksoverheid",
        url: "https://www.rijksoverheid.nl/onderwerpen/arbeidsovereenkomst-en-cao/vraag-en-antwoord/wat-staat-er-in-een-arbeidsovereenkomst",
        accessed: "2026-10-11",
      },
    ],
    body: {
      nl: [
        {
          p: "Bij je eerste baan krijg je van je werkgever het formulier Model opgaaf gegevens voor de loonheffingen. Daarmee bepaal je onder meer of je werkgever de loonheffingskorting toepast; heb je tegelijk meerdere banen, dan laat je die bij één werkgever toepassen [1]. Volg je een opleiding, dan kun je je werkgever vragen de studenten- en scholierenregeling toe te passen, waarbij hij geen of minder loonheffing inhoudt [1]. Je werkgever controleert je identiteit en bewaart een kopie van je identiteitsbewijs [2]. Voorwaarden en bedragen wijzigen; controleer ze op belastingdienst.nl.",
        },
        {
          h2: "Wat is loonheffing en wat is loonheffingskorting?",
          p: "Als je werkt, houdt je werkgever meestal alvast belasting in op je loon: de loonheffing. Je kunt daar een korting op krijgen, de loonheffingskorting, waardoor je over een deel van je inkomen geen belasting betaalt. In het formulier geef je aan of je werkgever die korting moet toepassen; dan krijg je meer loon uitbetaald [1].",
        },
        {
          h2: "Wat is de studenten- en scholierenregeling?",
          p: "Volg je een opleiding, dan kun je je werkgever vragen de studenten- en scholierenregeling toe te passen. De werkgever houdt dan geen of minder loonheffing in op je loon, zodat je meer loon uitbetaald krijgt. Je gebruikt daarvoor het formulier Model opgaaf gegevens voor de loonheffingen (studenten- en scholierenregeling) [1]. Voor deze regeling gelden voorwaarden en bedragen; die lees je bij de Belastingdienst.",
        },
        {
          h2: "Wat moet je zelf aanleveren?",
          ul: [
            "Een origineel, geldig identiteitsbewijs. De werkgever controleert dat vóór je begint en bewaart een kopie in de administratie; hij moet je vertellen waarvoor hij de kopie gebruikt en hoe je gegevens kunt afschermen die niet nodig zijn [2]. De Belastingdienst adviseert je werkgever altijd een kopie te laten maken [1].",
            "Je burgerservicenummer (BSN). Een werkgever mag daar pas om vragen als je in dienst komt, niet tijdens de sollicitatie [3].",
            "Het ingevulde formulier voor de loonheffingen, met je keuze over loonheffingskorting of de studenten- en scholierenregeling [1].",
          ],
        },
        {
          h2: "Krijg je belasting terug, en raakt werken je studiefinanciering?",
          p: "Als je werkt, houdt je werkgever vaak belasting in op je loon; daarvan kun je volgens DUO meestal een deel terugkrijgen via de Belastingdienst [4]. DUO meldt ook dat je sinds 2020 onbeperkt mag bijverdienen, zonder bijverdiengrens [4]. Over toeslagen en de aangifte schrijven we in ons artikel over studiefinanciering en werken.",
        },
        {
          h2: "Wat moet je werkgever je meedelen?",
          p: "Binnen een week na indiensttreding moet je werkgever je onder meer de functie, de startdatum, het aantal uren, het salaris en een eventuele proeftijd schriftelijk meedelen; binnen een maand volgen onder meer de vakantietoeslag, het aantal vakantiedagen en de opzegtermijn [5]. Controleer dat de gegevens kloppen met wat is afgesproken.",
        },
        {
          h2: "Checklist voor je eerste werkdag",
          ul: [
            "Neem je originele identiteitsbewijs mee",
            "Vul het formulier voor de loonheffingen in en kies bewust bij welke werkgever de loonheffingskorting wordt toegepast",
            "Vraag of de studenten- en scholierenregeling voor jou geldt en lees de voorwaarden bij de Belastingdienst",
            "Vraag om je afspraken schriftelijk, inclusief uren, uurloon en afspraken rond tentamens",
          ],
        },
      ],
      en: [
        {
          p: "For your first job your employer gives you the form Model opgaaf gegevens voor de loonheffingen. With it you determine, among other things, whether your employer applies the payroll tax credit; if you have several jobs at once, you have it applied by one employer [1]. If you're studying, you can ask your employer to apply the student and pupil scheme, under which it withholds no or less payroll tax [1]. Your employer checks your identity and keeps a copy of your identity document [2]. Conditions and amounts change; check them at belastingdienst.nl.",
        },
        {
          h2: "What is payroll tax and what is the payroll tax credit?",
          p: "When you work, your employer usually withholds tax from your wages in advance: payroll tax. You can get a discount on it, the payroll tax credit, so that you pay no tax on part of your income. In the form you indicate whether your employer should apply that credit; you then receive more wages [1].",
        },
        {
          h2: "What is the student and pupil scheme?",
          p: "If you're studying, you can ask your employer to apply the student and pupil scheme. The employer then withholds no or less payroll tax from your wages, so that you receive more pay. You use the form Model opgaaf gegevens voor de loonheffingen (studenten- en scholierenregeling) for this [1]. Conditions and amounts apply to this scheme; you can read them at the Tax Administration.",
        },
        {
          h2: "What do you have to provide yourself?",
          ul: [
            "An original, valid identity document. The employer checks it before you start and keeps a copy in the records; it must tell you what it uses the copy for and how you can black out data that aren't needed [2]. The Tax Administration advises always letting your employer make a copy [1].",
            "Your citizen service number (BSN). An employer may only ask for it once you start working there, not during the application [3].",
            "The completed payroll tax form, with your choice on the payroll tax credit or the student and pupil scheme [1].",
          ],
        },
        {
          h2: "Do you get tax back, and does working affect your student finance?",
          p: "When you work, your employer often withholds tax from your wages; according to DUO you can usually get part of it back through the Tax Administration [4]. DUO also states that since 2020 you may earn without limit, with no earnings ceiling [4]. We write about benefits and the tax return in our article on student finance and working.",
        },
        {
          h2: "What must your employer tell you?",
          p: "Within one week of starting, your employer must tell you in writing, among other things, the job, the start date, the hours, the salary and any probation period; within one month follow, among other things, the holiday allowance, the number of holiday days and the notice period [5]. Check that the details match what was agreed.",
        },
        {
          h2: "Checklist for your first working day",
          ul: [
            "Bring your original identity document",
            "Fill in the payroll tax form and choose deliberately with which employer the payroll tax credit is applied",
            "Ask whether the student and pupil scheme applies to you and read the conditions at the Tax Administration",
            "Ask for your agreements in writing, including hours, hourly wage and arrangements around exams",
          ],
        },
      ],
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

/** Same-audience posts first (falls back to any other post) so post pages can link to related reading. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  const rest = BLOG_POSTS.filter((post) => post.slug !== slug);
  if (!current) return rest.slice(0, limit);
  const sameAud = rest.filter((post) => post.aud === current.aud || post.aud === "beide" || current.aud === "beide");
  const ordered = [...sameAud, ...rest.filter((post) => !sameAud.includes(post))];
  return ordered.slice(0, limit);
}
