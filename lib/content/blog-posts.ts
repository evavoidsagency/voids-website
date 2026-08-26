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
};

export const BLOG_POSTS: BlogPost[] = [
  // 1 ---------------------------------------------------------------------
  {
    slug: "wat-is-een-werkstudent",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/mariselle-6.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Wat is een werkstudent, en wat mag je verwachten?",
      en: "What is a working student, and what can you expect?",
    },
    excerpt: {
      nl: "Geen stagiair, geen bijbaantje: de werkstudent zit ergens daartussenin, met een gewoon contract en gewone rechten. Wat het werk, het salaris en de uren in de praktijk betekenen.",
      en: "Not an intern, not a side job: the working student sits in between, with a real contract and real rights. What the work, the pay and the hours actually look like in practice.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Een werkstudent is iemand die naast de studie een structurele, betaalde baan heeft die aansluit bij wat diegene later wil doen: een echte arbeidsovereenkomst, met minder uren en meer ruimte rond tentamens, maar verder met dezelfde rechten en verantwoordelijkheden als iedere andere werknemer. Het is geen vage tussenvorm zonder regels, en al helemaal geen manier om goedkoop aan hulp te komen. Wie het zo inzet, mist precies waar de rol voor bedoeld is.",
        },
        {
          h2: "Wat staat er in een werkstudentcontract?",
          p: "Er bestaat geen aparte juridische status “werkstudent” met eigen regels, zoals een stage-overeenkomst die wel heeft. Een werkstudent werkt op basis van een gewone arbeidsovereenkomst, meestal voor bepaalde tijd en voor een vast aantal uren per week. Dat betekent een normaal salaris volgens het wettelijk minimumloon of hoger, vakantiegeld, opgebouwde vakantiedagen en dezelfde ontslagbescherming als iedere andere werknemer met een tijdelijk contract. Het enige dat een werkstudentrol onderscheidt van een reguliere parttime baan is de afspraak over flexibiliteit rond tentamens en projectweken, en vooral dat die afspraak ook echt op papier staat, in plaats van mondeling toegezegd en later vergeten.",
        },
        {
          h2: "Heeft een werkstudent recht op het minimumloon?",
          p: "Ja. Een werkstudent heeft dezelfde aanspraak op het wettelijk minimumloon als iedere andere werknemer van 21 jaar of ouder, en op het jeugdminimumloon als je jonger bent. Er is geen studentenkorting op je rechtspositie: het feit dat je nog studeert verandert niets aan wat een werkgever verplicht is te betalen.",
        },
        {
          h2: "Werkstudent, stagiair of bijbaan: wat is het verschil?",
          p: "Alle drie klinken als “iets doen naast je studie”, maar ze verschillen in doel, duur en beloning:",
          ul: [
            "Bijbaan: vooral geld verdienen, het werk hoeft niets met je studie te maken te hebben, meestal flexibel maar los van je vakgebied.",
            "Stage: vooral leren, meestal een paar maanden, met een stagevergoeding die doorgaans lager ligt dan een salaris.",
            "Werkstudentbaan: een volwaardige, betaalde rol, vaak een jaar of langer, inhoudelijk relevant en behandeld als vast onderdeel van het team.",
          ],
        },
        {
          h2: "Hoeveel uur werkt een werkstudent gemiddeld per week?",
          p: "De meeste werkstudentcontracten liggen tussen de 16 en 24 uur per week, met ruimte om dat rond tentamens en projectweken tijdelijk te verlagen. In Duitsland, waar het werkstudentmodel al veel langer een gevestigde manier van werken is, ligt dat aantal vaak rond de 20 uur, met een heldere afspraak vooraf over hoe dat samengaat met de studie. Hoe hoger het aantal uren, hoe meer een rol op een fulltime functie begint te lijken, en hoe belangrijker het wordt dat het salaris daar ook naar meebeweegt.",
        },
        {
          h2: "Wat mag je verwachten als werkstudent?",
          ul: [
            "Een taak die je iets leert, niet alleen administratief werk dat niemand anders wil doen",
            "Een vast aanspreekpunt en begeleiding, ook al werk je maar twee dagen per week",
            "Roosterruimte rond tentamens en projectweken, vooraf afgesproken, niet ad hoc geregeld",
            "Een salaris dat past bij het werk dat je doet, niet bij het feit dat je toevallig nog studeert",
            "Uitzicht op meer verantwoordelijkheid naarmate je langer meedraait, in plaats van een rol die er na een jaar nog precies zo uitziet als in de eerste maand",
          ],
        },
        {
          h2: "Wat levert een werkstudent een bedrijf op?",
          p: "Bedrijven krijgen iemand die langer blijft dan een stagiair, sneller inwerkt dan een nieuwe starter en vaak frisser tegen problemen aankijkt omdat diegene nog niet gewend is aan “zo doen we dat hier altijd”. Het is ook een manier om iemand te leren kennen vóórdat er een fulltime aanbod op tafel ligt, zonder dat iemand zich meteen vastlegt. Voor een jong bedrijf is dat een lager risico dan meteen een fulltime starter aannemen. Voor een bedrijf dat al verder is, is het een manier om een pijplijn te bouwen van mensen die de organisatie al kennen tegen de tijd dat ze afstuderen.",
        },
        {
          h2: "Is een werkstudent gewoon goedkope arbeidskracht onder een andere naam?",
          p: "Nee, niet als de rol goed is ingericht. Een werkstudent kost een bedrijf minder dan een fulltime starter omdat er minder uren worden gewerkt, niet omdat het uurtarief lager hoort te zijn. Zodra een bedrijf de rol gebruikt om structureel werk te laten doen tegen een tarief onder wat een vergelijkbare junior collega verdient, is het geen werkstudentschap meer, maar onderbetaling met een vriendelijker label.",
        },
        {
          h2: "Waarom dit VOIDS' vertrekpunt is",
          p: "Bij VOIDS geven we zelf de voorkeur aan werkstudenten boven stagiairs, juist omdat het een eerlijkere en stabielere vorm van werkervaring oplevert: een echt salaris in plaats van een vergoeding, en een rol die lang genoeg duurt om er daadwerkelijk iets aan over te houden. Plaatsen we toch een stagiair, dan hanteren we minimaal de door de overheid aanbevolen stagevergoeding-norm: €800 bruto per maand fulltime. Werk dat ertoe doet, verdient een salaris dat ertoe doet, ongeacht wat er op iemands cv staat.",
        },
      ],
      en: [
        {
          p: "A working student is someone who, alongside their studies, holds a structural, paid role connected to what they eventually want to do: a real employment contract, with fewer hours and more room around exam weeks, but otherwise the same rights and responsibilities as any other employee. It's not some vague in-between arrangement without rules, and it's definitely not a way to get cheap help. Treat it that way and you've missed the point of the role entirely.",
        },
        {
          h2: "What's actually in a working-student contract?",
          p: "There's no separate legal status called \"working student\" with its own rules, the way an internship agreement has. A working student is employed under a regular employment contract, usually fixed-term and for a set number of hours per week. That means a normal salary at or above the statutory minimum wage, holiday pay, accrued leave, and the same protection against dismissal as any other employee on a temporary contract. The one thing that sets a working-student role apart from an ordinary part-time job is the agreement on flexibility around exams and project weeks, and specifically that the agreement is actually written down, not promised verbally and then forgotten.",
        },
        {
          h2: "Does a working student get the minimum wage?",
          p: "Yes. A working student has the same right to the statutory minimum wage as any employee aged 21 or over, and to the youth minimum wage if you're younger. There's no student discount on your legal rights: still being enrolled in a degree changes nothing about what an employer is required to pay.",
        },
        {
          h2: "Working student, intern or side job: what's the difference?",
          p: "All three sound like \"doing something alongside your studies,\" but they differ in purpose, duration and pay:",
          ul: [
            "Side job: mainly about earning money, the work doesn't need to relate to your studies at all, usually flexible but outside your field.",
            "Internship: mainly about learning, usually a few months, with an internship allowance that's typically lower than a salary.",
            "Working-student role: a genuine, paid position, often a year or longer, relevant to your field and treated as a permanent part of the team.",
          ],
        },
        {
          h2: "How many hours does a working student typically work?",
          p: "Most working-student contracts run between 16 and 24 hours a week, with room to temporarily scale that down around exams and project weeks. In Germany, where the working-student model has been standard practice for far longer, that number often sits around 20 hours, with a clear upfront agreement on how that combines with studying. The more hours involved, the closer a role starts to resemble a full-time job, and the more the salary needs to move with it.",
        },
        {
          h2: "What can you expect as a working student?",
          ul: [
            "A task that actually teaches you something, not just admin work no one else wants",
            "A clear point of contact and guidance, even if you're only in two days a week",
            "Schedule flexibility around exams and project weeks, agreed in advance, not sorted out on the fly",
            "A salary that matches the work you do, not the fact that you happen to still be studying",
            "More responsibility as you stay longer, instead of a role that looks exactly the same after a year as it did in the first month",
          ],
        },
        {
          h2: "What does a company get out of hiring a working student?",
          p: "Companies get someone who sticks around longer than an intern, ramps up faster than a new starter, and often looks at problems with fresh eyes precisely because they're not yet used to \"that's just how we do it here.\" It's also a way to get to know someone before any full-time offer is on the table, without either side locking in right away. For an early-stage company, that's a lower-risk way to test whether a role is even needed before hiring a full-time starter. For a company further along, it's a way to build a pipeline of people who already know the organisation by the time they graduate.",
        },
        {
          h2: "Is a working student just cheap labour with a friendlier name?",
          p: "No, not if the role is set up properly. A working student costs a company less than a full-time starter because fewer hours are worked, not because the hourly rate is supposed to be lower. The moment a company uses the role to get structural work done at a rate below what a comparable junior would earn, it stops being a working-student arrangement and becomes underpayment with a nicer label.",
        },
        {
          h2: "Why this is VOIDS' starting point",
          p: "At VOIDS we prefer working students over interns ourselves, because it's a fairer and more stable form of work experience: a real salary instead of an allowance, and a role that lasts long enough to actually amount to something. When we do place an intern, we hold to at least the Dutch government's own internship-allowance norm: €800 gross per month full-time. Work that matters deserves a salary that matters, no matter what someone's CV says.",
        },
      ],
    },
  },

  // 2 ---------------------------------------------------------------------
  {
    slug: "werkstudent-stagiair-of-starter",
    aud: "bedrijf",
    legalTopic: true,
    photo: "/photography/mariselle-5.jpg",
    tag: { nl: "Vergelijking", en: "Comparison" },
    title: {
      nl: "Werkstudent, stagiair of starter: wat past bij jouw bedrijf?",
      en: "Working student, intern or starter: what fits your company?",
    },
    excerpt: {
      nl: "Drie manieren om junior capaciteit binnen te halen, drie heel verschillende risicoprofielen. Een praktisch afwegingskader per situatie, inclusief hoe je ertussen doorgroeit.",
      en: "Three ways to bring in junior capacity, three very different risk profiles. A practical framework for choosing the right one, and how to grow between them.",
    },
    read: { nl: "7 min", en: "7 min" },
    body: {
      nl: [
        {
          p: "“We hebben iemand junior nodig” is geen volledige zin. Junior kan een stagiair zijn voor drie maanden, een werkstudent voor anderhalf jaar, of een starter met een vast contract vanaf dag één. Elk van de drie lost een ander probleem op, en de verkeerde keuze kost je meer tijd dan het bespaart: een stagiair op structureel werk vertrekt precies wanneer die net productief wordt, een starter op een klein, afgebakend project is overkill, en een werkstudent zonder groeipad loopt na een jaar gewoon weg.",
        },
        {
          h2: "Wanneer kies je voor een stagiair?",
          p: "Een stage is bedoeld om te leren, niet om structureel werk te dragen. Kies hiervoor als je een afgebakend project hebt met een duidelijk begin en einde, zoals een marktonderzoek of een los te bouwen tool, en als je de tijd hebt om iemand serieus te begeleiden. Een stagiair die je erbij zet zonder begeleiding levert geen goed werk op en geen goede ervaring: dat is voor niemand winst. Reken op een paar maanden, een stagevergoeding in plaats van een salaris, en een resultaat dat op de plank kan blijven liggen als het project eindigt.",
        },
        {
          h2: "Wanneer kies je voor een werkstudent?",
          p: "Een werkstudent past bij structureel terugkerend werk dat te groot is voor een stagiair maar nog niet groot genoeg is voor een fulltime rol. Denk aan het beheren van een deelmarkt, een terugkerend deel van finance, of contentproductie die iedere week doorgaat. Je krijgt geen tijdelijke hulp, maar iemand die na een paar maanden zelfstandig meedraait en voor een jaar of langer blijft, meestal op basis van 16 tot 24 uur per week met ruimte rond tentamens.",
        },
        {
          h2: "Wanneer kies je voor een starter?",
          p: "Een starter is klaar met studeren en beschikbaar voor fulltime, structureel werk. Dit past bij een rol die te groot is geworden voor part-time inzet, of wanneer je iemand nodig hebt die meteen mee-eigenaar wordt van een resultaat. Het risico is hoger: een fulltime contract, een hoger salaris, minder ruimte om “het gewoon even te proberen” zonder dat er verwachtingen ontstaan.",
        },
        {
          h2: "Wat is het verschil in kosten en risico tussen de drie?",
          p: "Een stagiair kost het minst en committeert je het kortst, maar levert ook het minst op als het werk langer dan een paar maanden duurt: je begeleidt iemand net op tijd om diegene te zien vertrekken. Een werkstudent zit ertussenin: een regulier salaris, maar over minder uren en met een contract dat makkelijker meebeweegt met wat je daadwerkelijk nodig hebt. Een starter is de grootste investering, met een fulltime salaris, volledige werknemersverplichtingen en een opzegtermijn die verkeerde keuzes duurder maakt om terug te draaien. Hoe groter en structureler het werk, hoe meer die hogere investering zich terugverdient.",
        },
        {
          h2: "Een simpel afwegingskader",
          ul: [
            "Is het werk tijdelijk en afgebakend? Stagiair.",
            "Is het werk structureel maar past het binnen 16 tot 24 uur per week? Werkstudent.",
            "Is het werk fulltime en te groot voor part-time inzet? Starter.",
            "Wil je iemand eerst leren kennen voordat je een vast aanbod doet? Werkstudent, met uitzicht op een starterscontract.",
          ],
        },
        {
          h2: "Kun je iemand laten doorgroeien van stagiair naar werkstudent naar starter?",
          p: "Ja, en dat is vaak de slimste route. Een stage laat zien of iemand past bij het bedrijf op kleine schaal, een werkstudentschap laat zien of diegene ook structureel verantwoordelijkheid aankan, en een starterscontract is dan geen gok meer maar de logische volgende stap met iemand die de organisatie al kent. Dat scheelt niet alleen wervingstijd, het scheelt ook de inwerkperiode die bij een externe hire vrijwel altijd langer duurt dan gepland.",
        },
        {
          h2: "In de praktijk lopen deze door elkaar",
          p: "Bij Mila Health draaiden drie werkstudenten Marketing ieder hun eigen markt (Nederland, Zweden, Duitsland) tijdens de internationale uitbreiding: te groot voor een stage, nog niet rijp voor drie fulltime starters. Bij Joulz vulden werkstudenten Order-to-Cash en Purchase-to-Pay structureel terugkerend financieel werk in. Bij Hubby gingen twee werkstudenten zelfs verder dan de gemiddelde werkstudentrol: als founder's associate dachten ze mee op strategisch niveau, een verantwoordelijkheid die dichter bij een starter ligt dan bij een klassieke werkstudentklus. Het patroon is steeds hetzelfde: kijk naar de aard van het werk, niet naar wat toevallig het goedkoopst klinkt.",
        },
      ],
      en: [
        {
          p: "\"We need someone junior\" isn't a complete sentence. Junior can mean an intern for three months, a working student for a year and a half, or a starter with a permanent contract from day one. Each of the three solves a different problem, and picking the wrong one costs you more time than it saves: an intern on structural work leaves right as they become productive, a starter on a small, bounded project is overkill, and a working student with no path forward simply walks after a year.",
        },
        {
          h2: "When should you choose an intern?",
          p: "An internship exists to teach, not to carry structural work. Choose this when you have a bounded project with a clear start and end, like a piece of market research or a standalone tool to build, and when you actually have the time to guide someone properly. An intern you bolt on without guidance won't produce good work or a good experience: nobody wins there. Expect a few months, an internship allowance instead of a salary, and a deliverable that can sit on the shelf once the project ends.",
        },
        {
          h2: "When should you choose a working student?",
          p: "A working student fits recurring, structural work that's too big for an intern but not yet big enough for a full-time role. Think of running a sub-market, a recurring finance process, or content production that continues every single week. You're not getting temporary help, you're getting someone who's running independently after a few months and stays for a year or more, usually on 16 to 24 hours a week with room around exams.",
        },
        {
          h2: "When should you choose a starter?",
          p: "A starter has finished studying and is available for full-time, structural work. This fits a role that has outgrown part-time capacity, or when you need someone to take full ownership of an outcome from the start. The risk is higher too: a full-time contract, a higher salary, less room to \"just try it out\" without expectations forming on both sides.",
        },
        {
          h2: "What's the difference in cost and risk between the three?",
          p: "An intern costs the least and commits you the shortest, but also delivers the least if the work runs longer than a few months: you finish guiding someone right as they leave. A working student sits in the middle: a regular salary, but over fewer hours, with a contract that flexes more easily with what you actually need. A starter is the biggest investment, with a full-time salary, full employer obligations, and a notice period that makes a wrong call more expensive to reverse. The bigger and more structural the work, the faster that higher investment pays for itself.",
        },
        {
          h2: "A simple framework",
          ul: [
            "Is the work temporary and bounded? Intern.",
            "Is the work structural but fits within 16 to 24 hours a week? Working student.",
            "Is the work full-time and too big for part-time capacity? Starter.",
            "Do you want to get to know someone before making a permanent offer? Working student, with a path to a starter contract.",
          ],
        },
        {
          h2: "Can someone grow from intern to working student to starter?",
          p: "Yes, and it's often the smartest route. An internship shows whether someone fits the company on a small scale, a working-student role shows whether they can also handle structural responsibility, and a starter contract stops being a gamble and becomes the logical next step with someone who already knows the organisation. That saves not just hiring time, it saves the ramp-up period that almost always runs longer than planned with an external hire.",
        },
        {
          h2: "In practice, these overlap",
          p: "At Mila Health, three working students in Marketing each owned their own market (the Netherlands, Sweden, Germany) during the international expansion: too big for an internship, not yet ready for three full-time starters. At Joulz, working students filled recurring order-to-cash and purchase-to-pay finance work. At Hubby, two working students went further than the average working-student role: as founder's associates, they thought along at a strategic level, a level of responsibility closer to a starter than a classic working-student task. The pattern is always the same: look at the nature of the work, not at whatever happens to sound cheapest.",
        },
      ],
    },
  },

  // 3 ---------------------------------------------------------------------
  {
    slug: "junior-instroom-die-blijft-plakken",
    aud: "bedrijf",
    photo: "/photography/blog-5.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Zo bouw je een junior-instroom die blijft plakken",
      en: "How to build a junior pipeline that sticks",
    },
    excerpt: {
      nl: "Junior talent aannemen is makkelijk. Zorgen dat ze na zes maanden nog steeds zin hebben, is het echte werk. Vijf bouwstenen voor een instroom die blijft plakken.",
      en: "Hiring junior talent is the easy part. Making sure they still want to be there after six months is the real work. Five building blocks for a pipeline that sticks.",
    },
    read: { nl: "8 min", en: "8 min" },
    body: {
      nl: [
        {
          p: "Bedrijven die iedere zes maanden opnieuw op zoek moeten naar “iemand junior” hebben meestal geen wervingsprobleem. Ze hebben een vasthoudprobleem. Instroom regelen is relatief eenvoudig; ervoor zorgen dat iemand blijft, groeit en zich eigenaar voelt van het werk is waar de meeste organisaties op verliezen, en dat kost uiteindelijk meer tijd dan het wervingsproces zelf.",
        },
        {
          h2: "Heb je een wervingsprobleem of een vasthoudprobleem?",
          p: "Het onderscheid is eenvoudig te maken aan een paar signalen. Herken je er meerdere, dan zit het probleem niet in je vacaturetekst maar in wat er na de eerste werkdag gebeurt:",
          ul: [
            "Junior medewerkers vertrekken structureel binnen drie tot zes maanden, niet om uiteenlopende, persoonlijke redenen",
            "Nieuwe hires krijgen bij vertrek geen duidelijk antwoord op “wat had je hier gehouden”",
            "Elke vertrekkende junior neemt kennis mee die nergens is vastgelegd",
            "Het onboardingproces verschilt per persoon omdat er geen vast plan is",
          ],
        },
        {
          h2: "Geef eigenaarschap, niet losse taken",
          p: "Junior talent dat alleen losse taakjes krijgt, blijft zich als tijdelijk personeel voelen, ook als het contract voor een jaar is. Geef in plaats daarvan een afgebakend stukje van het bedrijf waar iemand echt over gaat: een markt, een klantsegment, een proces. Bij Hubby draaiden werkstudenten mee als founder's associate op strategisch niveau in plaats van uitvoerend op de zijlijn, en dat verschil, van uitvoerder naar mede-eigenaar van een resultaat, is precies waarom mensen blijven.",
        },
        {
          h2: "Investeer in de eerste maand, niet in de vacaturetekst",
          p: "De meeste bedrijven besteden weken aan het schrijven van een vacaturetekst en een middag aan de onboarding. Draai dat om. Een goede eerste maand, met een duidelijk aanspreekpunt, realistische doelen en snelle feedback, bepaalt of iemand na drie maanden nog gemotiveerd is of stilletjes al aan het afhaken is. Een wekelijks kwartiertje waarin je vraagt of de uren, het werk en de studiebalans nog kloppen, kost bijna niets en voorkomt dat een klein ongemak uitgroeit tot een opzegging.",
        },
        {
          h2: "Betaal alsof het structureel werk is, want dat is het",
          p: "Niets ondermijnt betrokkenheid sneller dan het gevoel dat je onderbetaald wordt omdat je toevallig nog studeert. Een eerlijk uurtarief is geen extraatje, het is de basis waarop de rest van je retentiestrategie rust: je kunt de beste begeleiding en het leukste team hebben, maar dat weegt niet op tegen het gevoel dat je werk minder waard is omdat je student bent.",
        },
        {
          h2: "Bouw een tweede en derde rol voordat de eerste vertrekt",
          p: "Een instroom die blijft plakken ontstaat niet uit één goede hire, maar uit een doorlopende structuur: als een werkstudent klaar is om door te groeien, moet er al een volgende rol klaarstaan, en idealiter al een nieuwe werkstudent die instroomt. Dat voorkomt dat kennis met één vertrek de deur uit loopt, en het geeft iemand die net twee jaar heeft opgebouwd een reden om te blijven in plaats van elders een starterscontract te zoeken.",
        },
        {
          h2: "Zoek breder dan je eigen netwerk",
          p: "Wie alleen via via werft, blijft vissen in dezelfde vijver en mist het grootste deel van geschikt talent, en precies dat beperkt ook hoe divers je uiteindelijke team wordt. Een bredere community, met studenten van verschillende opleidingen en achtergronden, levert niet alleen meer kandidaten op maar ook een frissere blik op je product of dienst. Netwerken als VOIDS' eigen WhatsApp-community, met meer dan 4.000 studenten en starters, bestaan precies om dat probleem op te lossen: toegang tot talent dat je via je eigen netwerk nooit had gevonden.",
        },
        {
          h2: "Hoe lang blijft een werkstudent gemiddeld, en wat betekent dat voor je planning?",
          p: "Een werkstudentrol die goed is opgezet duurt vaak een jaar of langer, soms tot en met afstuderen en de overstap naar een starterscontract. Reken daarom niet op een tijdelijke oplossing van een paar maanden: plan een werkstudentrol zoals je een kortlopende vaste hire zou plannen, met een inwerkperiode, een groeipad en een moment waarop je vooraf al nadenkt over wat er na afstuderen gebeurt.",
        },
      ],
      en: [
        {
          p: "Companies that have to go looking for \"someone junior\" every six months usually don't have a hiring problem. They have a retention problem. Bringing people in is relatively easy; making sure they stay, grow, and feel ownership over the work is where most organisations lose the thread, and that ultimately costs more time than the hiring process itself.",
        },
        {
          h2: "Do you have a hiring problem or a retention problem?",
          p: "The distinction is easy to spot from a handful of signals. If you recognise several of these, the problem isn't your job ad, it's what happens after day one:",
          ul: [
            "Junior hires consistently leave within three to six months, not for varied, personal reasons",
            "Departing hires can't give you a clear answer to \"what would have kept you here\"",
            "Every departing junior takes knowledge with them that was never written down anywhere",
            "Onboarding looks different for every person because there's no fixed plan",
          ],
        },
        {
          h2: "Start with ownership, not tasks",
          p: "Junior talent that only gets handed loose tasks keeps feeling like temporary staff, even on a one-year contract. Instead, hand over a bounded piece of the company someone genuinely owns: a market, a customer segment, a process. At Hubby, working students operated as founder's associates at a strategic level rather than execution on the sidelines, and that shift, from task-doer to co-owner of an outcome, is exactly why people stay.",
        },
        {
          h2: "Invest in the first month, not the job ad",
          p: "Most companies spend weeks writing a job posting and an afternoon on onboarding. Flip that. A strong first month, with a clear point of contact, realistic goals and fast feedback, decides whether someone is still motivated after three months or quietly checking out already. A weekly fifteen-minute check-in on whether the hours, the work and the study balance still work costs almost nothing and stops a small annoyance from turning into a resignation.",
        },
        {
          h2: "Pay like it's structural work, because it is",
          p: "Nothing undermines engagement faster than feeling underpaid because you happen to still be studying. A fair hourly rate isn't a nice extra, it's the foundation the rest of your retention strategy rests on: you can have the best guidance and the friendliest team, and none of it outweighs the feeling that your work is worth less because you're a student.",
        },
        {
          h2: "Build the second and third role before the first one leaves",
          p: "A pipeline that sticks doesn't come from one good hire, it comes from an ongoing structure: when a working student is ready to grow into something bigger, the next role should already be lined up, and ideally a new working student already coming in behind them. That's what stops knowledge from walking out the door with a single departure, and it gives someone who's just spent two years building expertise a reason to stay instead of chasing a starter contract elsewhere.",
        },
        {
          h2: "Look beyond your own network",
          p: "If you only hire through personal connections, you keep fishing in the same small pond and miss most of the suitable talent out there, and that same limit shapes how diverse your eventual team becomes. A broader community, spanning different degrees and backgrounds, doesn't just bring more candidates, it brings a fresher perspective on your product or service too. Networks like VOIDS' own WhatsApp community, with more than 4,000 students and starters, exist precisely to solve that problem: access to talent you'd never find through your own network alone.",
        },
        {
          h2: "How long does a working student typically stay, and what does that mean for your planning?",
          p: "A working-student role that's set up well often runs a year or longer, sometimes through to graduation and the move into a starter contract. Don't plan for a temporary fix lasting a few months: plan a working-student role the way you'd plan a short-term permanent hire, with a proper ramp-up, a growth path, and an early conversation about what happens after graduation.",
        },
      ],
    },
  },

  // 4 ---------------------------------------------------------------------
  {
    slug: "eerlijk-uurtarief-werkstudent",
    aud: "bedrijf",
    legalTopic: true,
    photo: "/photography/mariselle-2.jpg",
    tag: { nl: "Fair pay", en: "Fair pay" },
    title: {
      nl: "Wat is een eerlijk uurtarief voor een werkstudent?",
      en: "What is a fair hourly rate for a working student?",
    },
    excerpt: {
      nl: "“Het is toch maar een student” is geen argument voor een laag uurtarief. Hoe je wél tot een eerlijk bedrag komt, en wat onderbetalen je uiteindelijk kost.",
      en: "\"They're just a student\" is not an argument for a low hourly rate. How to actually land on a fair number, and what underpaying costs you in the end.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "De meest gehoorde reden om een werkstudent onder de marktwaarde te betalen is dat het “toch maar” een student is. Maar een werkstudent is geen stagiair die vooral komt leren: het is iemand die een gewone arbeidsovereenkomst heeft, gewoon werk doet, en gewoon recht heeft op een salaris dat daarbij past. Een eerlijk uurtarief is niet het minimumloon plus een beetje, het is een tarief dat het niveau van het werk volgt.",
        },
        {
          h2: "Wat is dan precies een eerlijk uurtarief voor een werkstudent?",
          p: "Een eerlijk uurtarief ligt op of boven het niveau van een vergelijkbare junior collega met een fulltime contract, herrekend naar uren, met het wettelijk minimumloon als absolute ondergrens en niet als streefwaarde. Doet een werkstudent hetzelfde werk als iemand anders in het team, dan hoort daar in grote lijnen ook hetzelfde uurtarief bij, ongeacht of diegene 16 uur werkt of 40.",
        },
        {
          h2: "Begin bij het wettelijk minimumloon, niet erbij vandaan",
          p: "Het wettelijk minimumuurloon is een ondergrens, geen richtlijn. Als een werkstudent hetzelfde werk doet als een junior collega met een fulltime contract, zou het uurtarief in dezelfde orde van grootte moeten liggen, ook al zijn het minder uren per week. Een tarief dat net boven het minimum zweeft omdat “het toch een werkstudent is”, is geen eerlijk tarief, het is het wettelijk minimum met een andere naam erop.",
        },
        {
          h2: "Kijk naar het werk, niet naar de titel op het cv",
          p: "Een werkstudent die zelfstandig een deel van een markt beheert, klantcontact voert of meedraait in finance doet ander werk dan iemand die alleen data invoert. Het tarief moet het niveau van verantwoordelijkheid volgen, niet de leeftijd of studiefase van de persoon die het werk doet. Twee werkstudenten in hetzelfde team met een vergelijkbaar takenpakket verdienen ook een vergelijkbaar tarief, punt.",
        },
        {
          h2: "Vergelijk met wat vergelijkbare rollen elders betalen",
          p: "Voor de meeste steden en sectoren is er een redelijke bandbreedte te vinden voor werkstudentrollen op vergelijkbaar niveau. Een tarief dat structureel onder die bandbreedte zit, is geen scherpe deal, het is een teken dat je binnenkort weer op zoek moet naar iemand nieuw, met alle wervings- en inwerktijd die daarbij komt kijken.",
        },
        {
          h2: "Moet het tarief meestijgen als de uren richting fulltime groeien?",
          p: "Ja. Zodra een werkstudentrol qua uren en verantwoordelijkheid begint te lijken op een fulltime functie, hoort het tarief daarin mee te bewegen, niet pas op het moment dat er een officieel starterscontract wordt getekend. Een werkstudent die structureel 30 uur draait en het grootste deel van een proces zelfstandig runt, verdient een tarief dat bij die rol past, niet bij het label “werkstudent” op papier.",
        },
        {
          h2: "Reken door wat onderbetalen je écht kost",
          p: "Een te laag tarief bespaart op papier een paar euro per uur, maar kost in de praktijk meer: hogere uitstroom, meer tijd kwijt aan opnieuw werven en inwerken, en een werkstudent die zich niet volledig inzet omdat het gevoel van eerlijke waardering ontbreekt. Fair betalen is geen kostenpost, het is de goedkoopste manier om iemand te houden, zeker als je de tijd meerekent die elke nieuwe wervingsronde kost.",
        },
        {
          h2: "Waarom VOIDS hier scherp op is",
          p: "Toegang tot relevante werkervaring hoort niet afhankelijk te zijn van wie het zich kan veroorloven om voor weinig te werken. Daarom geven we bij VOIDS zelf de voorkeur aan werkstudentschappen boven stages, en houden we bij geplaatste stages minimaal de aanbevolen stagevergoeding-norm van de overheid van €800 bruto per maand fulltime aan als ondergrens.",
        },
      ],
      en: [
        {
          p: "The most common reason to pay a working student below market value is that they're \"just\" a student. But a working student isn't an intern who's mainly there to learn: it's someone with a regular employment contract, doing regular work, with the same right to a salary that matches it. A fair hourly rate isn't minimum wage plus a bit, it's a rate that tracks the level of the work.",
        },
        {
          h2: "So what actually counts as a fair hourly rate for a working student?",
          p: "A fair hourly rate sits at or above what a comparable junior colleague on a full-time contract earns, recalculated to an hourly basis, with the statutory minimum wage as an absolute floor rather than a target. If a working student does the same work as someone else on the team, they should broadly earn the same hourly rate, whether they work 16 hours a week or 40.",
        },
        {
          h2: "Start from the statutory minimum wage, not away from it",
          p: "The statutory minimum hourly wage is a floor, not a target. If a working student is doing the same work as a junior colleague on a full-time contract, the hourly rate should be in the same range, even with fewer hours per week. A rate that hovers just above the minimum because \"it's just a working student\" isn't a fair rate, it's the legal minimum with a different label on it.",
        },
        {
          h2: "Look at the work, not the title on the CV",
          p: "A working student who independently runs part of a market, handles client contact, or operates inside finance is doing different work than someone who's just entering data. The rate should track the level of responsibility, not the age or study stage of the person doing the work. Two working students on the same team with a comparable workload should earn a comparable rate, full stop.",
        },
        {
          h2: "Compare against what similar roles pay elsewhere",
          p: "For most cities and sectors, there's a reasonable range to be found for working-student roles at a comparable level. A rate that sits structurally below that range isn't a smart deal, it's a sign you'll be hiring again soon, with all the recruiting and onboarding time that comes with it.",
        },
        {
          h2: "Should the rate go up as hours grow toward full-time?",
          p: "Yes. The moment a working-student role starts to resemble a full-time position in hours and responsibility, the rate should move with it, not wait until an official starter contract gets signed. A working student running 30 hours a week and independently owning most of a process deserves a rate that fits that role, not the \"working student\" label on paper.",
        },
        {
          h2: "Work out what underpaying actually costs you",
          p: "A low rate saves a few euros an hour on paper, but costs more in practice: higher turnover, more time spent rehiring and re-onboarding, and a working student who doesn't fully commit because the sense of fair recognition isn't there. Paying fairly isn't a cost, it's the cheapest way to keep someone, especially once you factor in the time every new hiring round takes.",
        },
        {
          h2: "Why VOIDS is strict about this",
          p: "Access to relevant work experience shouldn't depend on who can afford to work for too little. That's why we prefer working-student roles over internships ourselves, and why, for internships we do place, we hold to at least the government's own internship-allowance norm of €800 gross per month full-time as a floor.",
        },
      ],
    },
  },

  // 5 ---------------------------------------------------------------------
  {
    slug: "matchprofiel-dat-opvalt",
    aud: "talent",
    photo: "/photography/blog-6.jpg",
    tag: { nl: "Carrière", en: "Career" },
    title: {
      nl: "Zo schrijf je een matchprofiel dat opvalt",
      en: "How to write a match profile that stands out",
    },
    excerpt: {
      nl: "Niet nog een motivatiebrief vol “ik ben leergierig en communicatief sterk”. Hoe je een profiel schrijft dat laat zien wie je echt bent, in een paar scherpe alinea's.",
      en: "Not another cover letter full of \"eager to learn and a strong communicator.\" How to write a profile that actually shows who you are, in a few sharp paragraphs.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Bijna iedereen schrijft hetzelfde motivatieprofiel: leergierig, communicatief sterk, werkt goed in teamverband. Het is niet fout, maar het zegt ook niets, want het past op iedere kandidaat voor iedere rol. Een matchprofiel dat opvalt, doet het tegenovergestelde: het is zo specifiek dat het alleen op jou past, en dat lukt met een paar concrete keuzes in plaats van meer bijvoeglijke naamwoorden.",
        },
        {
          h2: "Wat is een matchprofiel eigenlijk, en hoe verschilt het van een motivatiebrief?",
          p: "Een motivatiebrief legt meestal uit waarom je een bedrijf goed vindt. Een matchprofiel legt uit wie je bent en hoe je werkt, zodat een recruiter of hiring manager kan beoordelen of dat aansluit bij een rol, ook een rol die je zelf nog niet kende. Het verschil zit in de vraag die je beantwoordt: geen “waarom wil ik hier werken”, maar “wat voor iemand ben ik, en in wat voor werk kom ik het best tot mijn recht”.",
        },
        {
          h2: "Begin bij waarom, niet bij wat",
          p: "In plaats van op te sommen wat je allemaal gedaan hebt, leg uit waaróm je die dingen deed. Koos je voor die studentenvereniging omdat je van organiseren houdt, of omdat je merkte dat je energie krijgt van mensen bij elkaar brengen? Dat “waarom” is precies wat een recruiter of hiring manager wil weten, want dat voorspelt hoe je je gedraagt in een rol die nog niet bestaat op je cv.",
        },
        {
          h2: "Gebruik concrete situaties, geen bijvoeglijke naamwoorden",
          p: "“Ik ben proactief” overtuigt niemand. “Toen de planning vastliep, heb ik zelf drie leveranciers gebeld en een alternatief geregeld voordat iemand het me vroeg” wel. Kies twee of drie concrete momenten uit je studie, bijbaan of vereniging die laten zien hoe je werkt, in plaats van tien woorden die dat beweren. Eén sterk voorbeeld met een begin, een keuze en een uitkomst zegt meer dan een hele alinea aan kwalificaties.",
        },
        {
          h2: "Wees specifiek over wat je zoekt, niet alleen wat je kan",
          p: "Een profiel dat alleen gaat over vaardigheden, vertelt een bedrijf niet of de rol bij je past. Benoem ook waar je naartoe wilt: het type werk, het soort team, het tempo waarin je wilt groeien. Dat maakt een match kansrijker, want een goede match werkt twee kanten op: een bedrijf dat weet wat jij zoekt, kan ook eerlijker inschatten of het past, in plaats van je een rol aan te bieden die op papier klopt maar in de praktijk niet.",
        },
        {
          h2: "Hoe lang moet een matchprofiel zijn?",
          p: "Kort genoeg om in één keer door te lezen, lang genoeg om specifiek te zijn: meestal een paar korte alinea's, geen compleet cv in lopende tekst. Kies liever drie scherpe punten over jezelf dan tien vage. Wie alles wil zeggen, zegt uiteindelijk niets dat blijft hangen, en een recruiter die door tientallen profielen scrolt, onthoudt precies degene die in twee zinnen duidelijk maakt wie je bent.",
        },
        {
          h2: "Drie signalen dat je profiel te generiek is",
          ul: [
            "Je zou dezelfde tekst kunnen versturen naar drie totaal verschillende vacatures zonder iets aan te passen",
            "Je gebruikt woorden als “leergierig” of “gedreven” zonder een voorbeeld dat dat aantoont",
            "Een vriend die je goed kent, zou jou niet herkennen in de tekst",
          ],
        },
        {
          h2: "Karakter wint het van kruisjes op een lijst",
          p: "Steeds meer bedrijven kijken verder dan een rijtje vaardigheden en willen weten wie er precies achter het cv zit. Een matchprofiel dat je karakter, drijfveren en manier van werken laat zien, is precies waar dat soort selectie op let, en dat is ook waarom VOIDS bij elke match verder kijkt dan een lijst met kruisjes.",
        },
      ],
      en: [
        {
          p: "Almost everyone writes the same motivation profile: eager to learn, a strong communicator, works well in a team. It's not wrong, but it doesn't say anything either, because it fits every candidate for every role. A match profile that stands out does the opposite: it's specific enough that it only fits you, and that comes from a few concrete choices, not more adjectives.",
        },
        {
          h2: "What is a match profile, and how does it differ from a cover letter?",
          p: "A cover letter usually explains why you like a company. A match profile explains who you are and how you work, so a recruiter or hiring manager can judge whether that fits a role, including one you didn't even know existed. The difference is in the question you're answering: not \"why do I want to work here,\" but \"what kind of person am I, and in what kind of work do I actually thrive.\"",
        },
        {
          h2: "Start with why, not what",
          p: "Instead of listing everything you've done, explain why you did it. Did you join that student association because you love organising things, or because you noticed you get energy from bringing people together? That \"why\" is exactly what a recruiter or hiring manager wants to know, because it predicts how you'll behave in a role that isn't on your CV yet.",
        },
        {
          h2: "Use concrete moments, not adjectives",
          p: "\"I'm proactive\" convinces no one. \"When the planning fell apart, I called three suppliers myself and arranged an alternative before anyone asked\" does. Pick two or three concrete moments from your studies, side job, or association that show how you work, instead of ten words that just claim it. One strong example with a beginning, a choice and an outcome says more than a whole paragraph of qualifications.",
        },
        {
          h2: "Be specific about what you want, not just what you can do",
          p: "A profile that only covers skills doesn't tell a company whether the role actually fits you. Name what you're moving toward too: the type of work, the kind of team, the pace you want to grow at. That makes a match more likely, because a good match works in both directions: a company that knows what you're after can judge the fit more honestly, instead of offering you a role that checks out on paper but doesn't in practice.",
        },
        {
          h2: "How long should a match profile actually be?",
          p: "Short enough to read in one sitting, long enough to be specific: usually a few short paragraphs, not a full CV written out in prose. Pick three sharp points about yourself over ten vague ones. Whoever tries to say everything usually ends up saying nothing that sticks, and a recruiter scrolling through dozens of profiles remembers exactly the one that makes clear who you are in two sentences.",
        },
        {
          h2: "Three signs your profile is too generic",
          ul: [
            "You could send the same text to three completely different job postings without changing a word",
            "You use words like \"driven\" or \"eager to learn\" without a single example backing them up",
            "A friend who knows you well wouldn't recognise you in the text",
          ],
        },
        {
          h2: "Character beats checkboxes",
          p: "More and more companies look past a list of skills and want to know who's actually behind the CV. A match profile that shows your character, motivations and way of working is exactly what that kind of selection pays attention to, and it's why VOIDS looks past a checklist on every match too.",
        },
      ],
    },
  },

  // 6 ---------------------------------------------------------------------
  {
    slug: "betaald-werken-naast-je-studie",
    aud: "talent",
    photo: "/photography/blog-8.jpg",
    tag: { nl: "Studie & werk", en: "Study & work" },
    title: {
      nl: "Betaald werken naast je studie: wat levert het op?",
      en: "Paid work alongside your studies: what does it bring?",
    },
    excerpt: {
      nl: "Meer dan alleen geld op je rekening: wat relevant, betaald werk tijdens je studie daadwerkelijk voor je doet, en waarom dat niet voor iedereen even bereikbaar is.",
      en: "More than just money in your account: what relevant, paid work during your studies actually does for you, and why it isn't equally within reach for everyone.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Bijna iedere student werkt ergens naast de studie, maar niet elk werk levert hetzelfde op. Een bijbaan die niets met je opleiding te maken heeft, betaalt je huur. Betaald werk dat wél aansluit, betaalt je huur én je toekomst: het levert richting, ervaring en een cv op, naast het salaris dat je toch al nodig hebt.",
        },
        {
          h2: "Wat is het verschil tussen een bijbaan en relevante werkervaring?",
          p: "Een bijbaan betaalt de rekeningen met werk dat weinig tot niets met je studie te maken hoeft te hebben. Relevante werkervaring doet hetzelfde, maar bouwt daarnaast aan kennis, een netwerk en een cv die je vooruit helpen in het vakgebied waar je naartoe wilt. Het onderscheid zit dus niet in hoeveel het betaalt, maar in of het werk je ook iets oplevert voor na je studie.",
        },
        {
          h2: "Je ontdekt wat werk echt inhoudt",
          p: "Colleges leggen theorie uit, maar niets vertelt je zo snel of een sector bij je past als er daadwerkelijk in werken. Een paar maanden meedraaien in marketing, finance of operations laat zien wat de dagelijkse praktijk is, iets waar geen enkel vak je op voorbereidt. Je ontdekt ook waar je juist niet gelukkig van wordt, en die informatie is minstens zo waardevol als weten wat wel bij je past.",
        },
        {
          h2: "Je bouwt een cv dat overtuigt, niet alleen vult",
          p: "Een cv vol vage bijbaantjes overtuigt niemand. Een cv met relevante werkervaring, ook al is het parttime, laat zien dat je al weet hoe het is om verantwoordelijkheid te dragen in een echte werkomgeving. Dat scheelt enorm bij je eerste sollicitatie na afstuderen, want je concurreert dan niet meer alleen op cijfers, maar op bewezen werkervaring.",
        },
        {
          h2: "Moet je kiezen tussen goed betaald werk en relevante ervaring?",
          p: "Nee, dat hoeft geen keuze te zijn, ook al voelt het vaak zo. Relevante werkervaring hoeft niet onbetaald of onderbetaald te zijn om waardevol te zijn. Sterker nog: als het goed betaald wordt, hoef je niet te kiezen tussen rondkomen en ervaring opdoen. Dat zou geen luxe moeten zijn, maar de norm, en steeds meer werkstudentrollen laten zien dat het ook echt kan.",
        },
        {
          h2: "Je leert plannen onder echte druk",
          p: "Werk combineren met tentamens en deadlines dwingt je om te plannen op een manier die de meeste studieboeken niet aanleren. Die vaardigheid, prioriteren onder tijdsdruk, is precies wat werkgevers later zoeken in een starter, en het is iets wat je alleen leert door het te doen, niet door erover te lezen.",
        },
        {
          h2: "Hoeveel uur kun je naast je studie werken zonder dat het ten koste gaat?",
          p: "Dat verschilt per studie en per periode, maar 16 tot 20 uur per week is voor de meeste voltijdstudenten haalbaar zonder dat het structureel ten koste gaat van studievoortgang, mits de werkgever meebeweegt rond tentamens en projectweken. Meer uren kan, maar vraagt dan wel om een baan die daadwerkelijk rekening houdt met je rooster, in plaats van een baan waarbij je zelf steeds moet passen en meten.",
        },
        {
          h2: "Waarom dit niet voor iedereen even makkelijk is",
          p: "Niet elke student heeft dezelfde toegang tot relevante, betaalde werkervaring. Wie een financieel vangnet heeft, kan het zich veroorloven een onbetaalde stage aan te nemen; wie dat niet heeft, neemt vaak genoegen met een bijbaan die niets oplevert voor de studie. Dat verschil is precies waarom VOIDS zich richt op betaalde, relevante rollen, en waarom we vanaf medio 2027 van plan zijn 10% van onze winst te herinvesteren in initiatieven die gelijke kansen voor studenten vergroten: werkervaring die telt, zou niet afhankelijk moeten zijn van wie het zich kan veroorloven.",
        },
      ],
      en: [
        {
          p: "Almost every student works alongside their studies, but not all work brings the same thing. A side job unrelated to your degree pays your rent. Paid work that actually connects to your field pays your rent and your future: it builds direction, experience and a CV, on top of the salary you needed anyway.",
        },
        {
          h2: "What's the difference between a side job and relevant work experience?",
          p: "A side job covers your bills with work that doesn't need to relate to your studies at all. Relevant work experience does the same, but also builds knowledge, a network and a CV that move you forward in the field you're aiming for. The distinction isn't how much it pays, it's whether the work also sets you up for what comes after your studies.",
        },
        {
          h2: "You find out what work actually looks like",
          p: "Lectures explain theory, but nothing tells you whether a sector suits you as fast as actually working in it. A few months inside marketing, finance or operations shows you the daily reality, something no course can prepare you for. You also find out what you don't enjoy, and that information is just as valuable as knowing what does fit.",
        },
        {
          h2: "You build a CV that convinces, not just fills space",
          p: "A CV full of vague side jobs convinces no one. A CV with relevant work experience, even part-time, shows you already know what it's like to carry responsibility in a real work environment. That makes a real difference at your first application after graduating, because you're no longer competing on grades alone but on proven work experience.",
        },
        {
          h2: "Do you have to choose between good pay and relevant experience?",
          p: "No, it doesn't have to be a trade-off, even though it often feels that way. Relevant work experience doesn't need to be unpaid or underpaid to be valuable. In fact, if it's paid properly, you don't have to choose between making ends meet and gaining experience. That shouldn't be a luxury, it should be the standard, and more and more working-student roles are proving it's actually possible.",
        },
        {
          h2: "You learn to plan under real pressure",
          p: "Combining work with exams and deadlines forces you to plan in a way most textbooks never teach. That skill, prioritising under time pressure, is exactly what employers later look for in a starter, and it's something you only learn by doing it, not by reading about it.",
        },
        {
          h2: "How many hours can you work alongside full-time studies without it costing you?",
          p: "That varies by degree and by period, but 16 to 20 hours a week is manageable for most full-time students without structurally hurting academic progress, as long as the employer flexes around exams and project weeks. More is possible, but it then needs a job that genuinely accommodates your schedule, rather than one where you're constantly the one adjusting.",
        },
        {
          h2: "Why this isn't equally easy for everyone",
          p: "Not every student has the same access to relevant, paid work experience. Someone with a financial safety net can afford to take an unpaid internship; someone without one often settles for a side job that does nothing for their studies. That gap is exactly why VOIDS focuses on paid, relevant roles, and why, starting mid-2027, we plan to reinvest 10% of our profit into initiatives that widen equal opportunity for students: work experience that counts shouldn't depend on who can afford it.",
        },
      ],
    },
  },

  // 7 ---------------------------------------------------------------------
  {
    slug: "van-studie-naar-eerste-baan",
    aud: "talent",
    photo: "/photography/mariselle-9.jpg",
    tag: { nl: "Eerste stap", en: "First step" },
    title: {
      nl: "Van studie naar eerste baan in 5 stappen",
      en: "From study to first job in 5 steps",
    },
    excerpt: {
      nl: "De overstap van collegebanken naar je eerste echte baan voelt groot. Vijf concrete stappen, en de volgorde waarin je ze het best zet, om die overstap kleiner te maken.",
      en: "The jump from lecture halls to your first real job feels huge. Five concrete steps, and the order to take them in, to make that jump smaller.",
    },
    read: { nl: "7 min", en: "7 min" },
    body: {
      nl: [
        {
          p: "De overstap van studeren naar werken voelt vaak als een sprong in het diepe, vooral als je niet precies weet wat je wilt. Het goede nieuws: die overstap hoeft geen sprong te zijn als je hem in stukken opdeelt en op tijd begint, het liefst al tijdens je studie in plaats van pas in de laatste maand. Vijf stappen die daadwerkelijk helpen, in de volgorde waarin ze het meeste opleveren.",
        },
        {
          h2: "1. Zoek eerst uit wat je drijft, niet welke titel je wilt",
          p: "“Marketeer worden” is geen doel, het is een label. Kijk in plaats daarvan naar wat voor werk je energie geeft: mensen overtuigen, cijfers doorgronden, dingen bouwen, structuur aanbrengen in chaos. Die drijfveer vertaalt zich naar meer functies dan je denkt, en voorkomt dat je jezelf vastzet op één titel die misschien niet eens bij je past. Twee studenten met dezelfde graad kunnen bij compleet verschillende functies uitkomen, precies omdat ze van een ander soort werk energie krijgen.",
        },
        {
          h2: "2. Doe relevante ervaring op vóór je afstudeert",
          p: "Wachten tot na je diploma om te ontdekken wat werk inhoudt, is de duurste manier om erachter te komen dat een sector niet bij je past. Een werkstudentbaan tijdens je studie geeft je die informatie eerder, en levert meteen relevante ervaring op voor je eerste sollicitatie. Het scheelt ook een sollicitatieronde: veel bedrijven bieden een werkstudent die goed heeft gefunctioneerd bij afstuderen gewoon een starterscontract aan, zonder dat er nog een externe procedure aan te pas komt.",
        },
        {
          h2: "3. Bouw een netwerk voordat je het nodig hebt",
          p: "Een netwerk opbouwen op het moment dat je een baan nodig hebt, is te laat. Praat tijdens je studie al met mensen die het werk doen waar jij nieuwsgierig naar bent, sluit je aan bij een community van andere studenten en starters, en vraag gewoon hoe hun werk er in de praktijk uitziet. Dat hoeft geen formeel netwerkevent te zijn: een community van duizenden studenten en starters die onderling vacatures en ervaringen delen, doet vaak meer dan tien koude LinkedIn-berichten.",
        },
        {
          h2: "4. Schrijf sollicitaties die specifiek zijn, niet compleet",
          p: "Eén generieke motivatiebrief die je naar twintig vacatures stuurt, overtuigt niemand. Een korte, specifieke reactie die laat zien dat je de rol en het bedrijf snapt, wint het altijd van een langere, algemene brief. Noem concreet waarom deze rol bij dit bedrijf, in plaats van een tekst die met een paar woorden aangepast naar elke andere vacature had gekund.",
        },
        {
          h2: "5. Laat je matchen op basis van wie je bent, niet alleen op je cv",
          p: "De beste eerste baan is niet per se de baan met de hoogste titel of het bekendste bedrijf, het is de baan waarin je karakter en drijfveren passen bij het team en het werk. Dat is precies waarom een goede match meer kijkt dan een cv: naar wat je drijft, hoe je werkt, en waar je naartoe wilt groeien.",
        },
        {
          h2: "Hoe lang duurt het gemiddeld om je eerste relevante baan te vinden?",
          p: "Dat verschilt sterk per sector en per hoeveel tijd je erin steekt, maar wie tijdens de studie al relevante ervaring opbouwt via een werkstudentbaan, hoeft na afstuderen vaak helemaal niet meer actief te zoeken: de overstap naar een vast contract gebeurt dan binnen het bedrijf waar diegene al zit. Wie pas na het diploma begint te zoeken, start bij nul en concurreert meteen met iedereen die dat traject al eerder is gestart.",
        },
      ],
      en: [
        {
          p: "The move from studying to working often feels like jumping into the deep end, especially if you don't know exactly what you want yet. The good news: it doesn't have to be a jump if you break it into pieces and start early, ideally during your studies rather than in the final month. Five steps that actually help, in the order that pays off the most.",
        },
        {
          h2: "1. Figure out what drives you before what title you want",
          p: "\"Becoming a marketer\" isn't a goal, it's a label. Look instead at what kind of work gives you energy: convincing people, digging into numbers, building things, bringing structure to chaos. That drive translates to more roles than you'd think, and stops you from locking yourself into one title that might not even suit you. Two students with the same degree can end up in completely different roles, precisely because they draw energy from a different kind of work.",
        },
        {
          h2: "2. Get relevant experience before you graduate",
          p: "Waiting until after your degree to find out what work actually feels like is the most expensive way to discover a sector isn't for you. A working-student role during your studies gives you that information earlier, and gets you relevant experience for your first job application at the same time. It can also skip an entire application round: plenty of companies simply offer a working student who's performed well a starter contract at graduation, no external process required.",
        },
        {
          h2: "3. Build a network before you need one",
          p: "Building a network the moment you need a job is too late. Talk to people already doing the work you're curious about while you're still studying, join a community of other students and starters, and simply ask what their work actually looks like day to day. It doesn't need to be a formal networking event: a community of thousands of students and starters swapping openings and experiences often does more than ten cold LinkedIn messages.",
        },
        {
          h2: "4. Write applications that are specific, not complete",
          p: "One generic cover letter sent to twenty job postings convinces no one. A short, specific response that shows you understand the role and the company beats a longer, general letter every time. Say concretely why this role at this company, instead of a text that could have gone to any other posting with a couple of words swapped.",
        },
        {
          h2: "5. Get matched on who you are, not just your CV",
          p: "The best first job isn't necessarily the one with the fanciest title or the best-known company, it's the one where your character and drive fit the team and the work. That's exactly why a good match looks beyond a CV: at what drives you, how you work, and where you want to grow.",
        },
        {
          h2: "How long does it typically take to land your first relevant job?",
          p: "That varies a lot by sector and by how much time you put in, but someone who builds relevant experience during their studies through a working-student role often doesn't need to search at all after graduating: the move to a permanent contract happens inside the company they're already at. Someone who only starts looking after graduating starts from zero, competing straight away with everyone who began that process earlier.",
        },
      ],
    },
  },

  // 8 ---------------------------------------------------------------------
  {
    slug: "gen-z-matcht-op-karakter",
    aud: "beide",
    photo: "/photography/blog-7.jpg",
    tag: { nl: "Gen Z", en: "Gen Z" },
    title: {
      nl: "Waarom Gen Z op karakter matcht, niet op functietitel",
      en: "Why Gen Z matches on character, not job title",
    },
    excerpt: {
      nl: "Een indrukwekkende functietitel zegt steeds minder over of een baan echt past. Waarom karakter en drijfveren de betere voorspeller zijn, voor kandidaten én bedrijven.",
      en: "An impressive job title says less and less about whether a job actually fits. Why character and motivation are the better predictor, for candidates and companies alike.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Vorige generaties kozen een baan vaak op naam en titel: een groot bedrijf, een indrukwekkende functie, een duidelijke carrièreladder. Gen Z stelt een andere vraag: past dit werk, dit team en deze manier van werken bij wie ik ben? Dat is geen verwenning, het is een logische reactie op een arbeidsmarkt die minder voorspelbaar is dan die van hun ouders, met minder vaste carrièrepaden en meer bedrijven die zelf nog aan het uitvinden zijn hoe hun functies eruitzien.",
        },
        {
          h2: "Waarom vertellen functietitels steeds minder?",
          p: "“Marketing medewerker” bij het ene bedrijf betekent iets compleet anders dan bij het andere: bij de één content maken, bij de ander vooral spreadsheets bijhouden. Nu functies zo verschillen per bedrijf, zegt een titel weinig over de dagelijkse praktijk, en logischerwijs gaan kandidaten op zoek naar iets dat dat wél voorspelt: hoe een team werkt, wat de eerste maand behelst, wie er verantwoordelijk is voor wat.",
        },
        {
          h2: "Is karakter echt een betere voorspeller dan een cv?",
          p: "Ja, zeker bij junior rollen. Een cv laat zien wat iemand heeft gedaan, niet hoe iemand werkt onder druk, met onduidelijkheid, of in een klein team zonder vaste processen. Juist bij junior rollen, waar ervaring nog beperkt is, is karakter, hoe iemand met problemen omgaat, wat iemand energie geeft, wat iemand drijft, een betere voorspeller van succes dan een lijstje eerdere functies. Twee kandidaten met bijna identieke cv's kunnen totaal verschillend functioneren in dezelfde rol, en dat verschil zit zelden in wat er op papier staat.",
        },
        {
          h2: "Dit werkt twee kanten op",
          p: "Matchen op karakter betekent niet alleen dat bedrijven verder kijken dan een cv. Het betekent ook dat kandidaten kritischer kijken naar bedrijven: past de cultuur, is er ruimte om te groeien, wordt er eerlijk betaald. Beide kanten stellen scherpere vragen, en dat levert uiteindelijk matches op die langer standhouden, simpelweg omdat er minder verrassingen zijn in de eerste maanden.",
        },
        {
          h2: "Waarom selecteren op karakter ook eerlijker is",
          p: "Selecteren op cv-signalen zoals een bekende stage of een prestigieuze studievereniging bevoordeelt onbedoeld wie toegang had tot die kansen, en dat is niet gelijk verdeeld: niet iedereen kon zich een onbetaalde stage bij een bekend bedrijf veroorloven, of had het netwerk om bij een selecte vereniging te komen. Selecteren op karakter en drijfveren geeft iedereen een eerlijkere uitgangspositie, ongeacht welke stage wel of niet op iemands cv staat.",
        },
        {
          h2: "Betekent dit dat ervaring niet meer telt?",
          p: "Nee, ervaring blijft relevant, maar het is niet meer het enige of het belangrijkste signaal. Ervaring laat zien wat iemand al kan, karakter laat zien hoe iemand met nieuwe situaties omgaat, en bij een junior rol, waar per definitie veel nieuw is, weegt dat tweede net zo zwaar als het eerste.",
        },
        {
          h2: "Hoe dat er in de praktijk uitziet",
          p: "Bij VOIDS betekent dit dat elke match begint met de vraag wat iemand drijft en hoe iemand werkt, niet met een lijst kruisjes op een functieomschrijving. Dat is geen trucje om jong talent te paaien, het is simpelweg een betere manier om te voorspellen of een match daadwerkelijk gaat werken, voor de kandidaat en voor het bedrijf.",
        },
      ],
      en: [
        {
          p: "Previous generations often picked a job by name and title: a big company, an impressive function, a clear career ladder. Gen Z asks a different question: does this work, this team and this way of working actually fit who I am? That's not entitlement, it's a logical response to a labour market that's less predictable than their parents' was, with fewer fixed career paths and more companies still figuring out what their own roles even look like.",
        },
        {
          h2: "Why do job titles say less and less?",
          p: "\"Marketing employee\" means something completely different at one company than another: creating content at one, mostly maintaining spreadsheets at the other. Now that roles vary so much between companies, a title says little about the daily reality, and it makes sense candidates go looking for something that actually predicts it: how a team works, what the first month looks like, who's responsible for what.",
        },
        {
          h2: "Is character really a better predictor than a CV?",
          p: "Yes, especially for junior roles. A CV shows what someone has done, not how someone works under pressure, with ambiguity, or in a small team without fixed processes. Especially in junior roles, where experience is still limited, character, how someone handles problems, what gives someone energy, what drives them, is a better predictor of success than a list of previous titles. Two candidates with near-identical CVs can perform completely differently in the same role, and that difference rarely shows up on paper.",
        },
        {
          h2: "This works both ways",
          p: "Matching on character doesn't just mean companies look past a CV. It also means candidates look more critically at companies: does the culture fit, is there room to grow, is the pay fair. Both sides ask sharper questions, and that ultimately produces matches that hold up longer, simply because there are fewer surprises in the first few months.",
        },
        {
          h2: "Why selecting on character is fairer too",
          p: "Selecting on CV signals like a well-known internship or a prestigious student association unintentionally favours whoever had access to those opportunities, and that access isn't equally distributed: not everyone could afford an unpaid internship at a well-known company, or had the network to get into a selective association. Selecting on character and motivation gives everyone a fairer starting position, regardless of which internship does or doesn't appear on someone's CV.",
        },
        {
          h2: "Does this mean experience doesn't count anymore?",
          p: "No, experience still matters, it's just no longer the only or the most important signal. Experience shows what someone can already do, character shows how someone handles new situations, and in a junior role, where by definition a lot is new, that second part carries just as much weight as the first.",
        },
        {
          h2: "What that looks like in practice",
          p: "At VOIDS, this means every match starts with the question of what drives someone and how they work, not a checklist against a job description. It's not a trick to flatter young talent, it's simply a better way to predict whether a match will actually work, for the candidate and for the company.",
        },
      ],
    },
  },

  // 9 -----------------------------------------------------------------
  {
    slug: "werkstudentovereenkomst-wat-moet-erin",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/mariselle-3.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "De werkstudentovereenkomst: wat moet er (juridisch) in staan?",
      en: "The working-student contract: what actually needs to be in it",
    },
    excerpt: {
      nl: "Werkstudent is geen aparte contractvorm. Wat een goede overeenkomst dan wél zou moeten regelen, met een checklist die je zo kunt gebruiken voordat je tekent.",
      en: "\"Working student\" isn't a separate contract type. What a good agreement should actually cover, with a checklist you can use before you sign anything.",
    },
    read: { nl: "7 min", en: "7 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen juridisch advies. Check bij twijfel altijd de actuele regels of een jurist of accountant. Wat we wél kunnen delen: waar een werkstudentovereenkomst in de praktijk over zou moeten gaan, zodat je weet welke vragen je moet stellen voordat je tekent of laat tekenen.",
        },
        {
          h2: "Er bestaat geen apart “werkstudentcontract”",
          p: "In Nederland is “werkstudent” geen juridische status met eigen regels, zoals een stage-overeenkomst dat wel is. Een werkstudent werkt op basis van een gewone arbeidsovereenkomst, meestal voor bepaalde tijd en voor een vast aantal uren per week. Dat betekent: dezelfde basisrechten als iedere werknemer, inclusief minimumloon, vakantiegeld en vakantiedagen. Het woord “werkstudent” staat dus niet in de wet, het beschrijft alleen hoe het werk wordt ingericht rond een studie.",
        },
        {
          h2: "Is een werkstudent hetzelfde als een oproepkracht?",
          p: "Nee, dat hoeft niet, en voor de meeste werkstudentrollen is het ook niet wenselijk. Een oproepcontract, zoals een nulurencontract of min-max-contract, betekent dat je alleen werkt en betaald krijgt als je wordt opgeroepen, met weinig zekerheid over inkomen of rooster. Een goede werkstudentovereenkomst werkt juist met een vast aantal uren per week, zodat je van tevoren weet waar je op kunt rekenen, met ruimte om dat rond tentamens tijdelijk aan te passen in plaats van structurele onzekerheid.",
        },
        {
          h2: "Uren en flexibiliteit horen expliciet benoemd te worden",
          p: "Omdat het werk samen moet gaan met een studie, is het aantal uren per week en de ruimte om dat rond tentamens aan te passen precies waar de meeste onduidelijkheid ontstaat. Een goede overeenkomst noemt een vast aantal uren of een bandbreedte, en legt vast hoe roosterwijzigingen rond bijvoorbeeld tentamenweken worden afgesproken, in plaats van dat te laten hangen op “we zien wel”.",
        },
        {
          h2: "Salaris en vergoedingen, zwart op wit",
          p: "Het uurtarief, hoe en wanneer het wordt uitbetaald, en of er reiskostenvergoeding is, horen gewoon in het contract te staan, net als bij iedere andere arbeidsovereenkomst. Een werkstudent heeft dezelfde aanspraak op het wettelijk minimumloon als elke andere werknemer: studeren is geen reden om daaronder te zitten.",
        },
        {
          h2: "Duur, proeftijd en opzegtermijn",
          p: "De meeste werkstudentcontracten zijn voor bepaalde tijd, vaak met de mogelijkheid tot verlenging. Net als bij ieder tijdelijk contract is het zinvol om vooraf helder te hebben wat de proeftijd is, wat de opzegtermijn is, en wat er gebeurt als het contract afloopt terwijl beide partijen door willen.",
        },
        {
          h2: "Checklist: wat hoort er minimaal in te staan?",
          ul: [
            "Een vast aantal uren per week of een duidelijke bandbreedte",
            "Hoe roosterwijzigingen rond tentamens en projectweken worden afgesproken",
            "Het uurtarief, de uitbetalingswijze en eventuele reiskostenvergoeding",
            "De duur van het contract, de proeftijd en de opzegtermijn",
            "Wie het aanspreekpunt is bij vragen over uren, verlof of begeleiding",
          ],
        },
        {
          h2: "Waarom dit ertoe doet, ook als het “maar” bijwerk is",
          p: "Een goede overeenkomst is niet alleen bescherming voor de werkstudent, het voorkomt ook misverstanden voor het bedrijf. Duidelijke afspraken over uren, salaris en flexibiliteit zorgen ervoor dat beide kanten weten waar ze aan toe zijn, en dat is precies de basis waarop een langdurige, goede samenwerking wordt gebouwd.",
        },
      ],
      en: [
        {
          p: "This article is general information, not legal advice. If in doubt, always check the current rules or consult a lawyer or accountant. What we can share is what a working-student agreement should generally cover in practice, so you know which questions to ask before signing or having someone sign.",
        },
        {
          h2: "There's no separate \"working-student contract\"",
          p: "In the Netherlands, \"working student\" isn't a legal status with its own rules, unlike an internship agreement. A working student is employed under a regular employment contract, usually fixed-term and for a set number of hours per week. That means the same basic rights as any employee, including minimum wage, holiday pay and paid leave. The word \"working student\" doesn't appear in the law itself, it just describes how the work is structured around a study programme.",
        },
        {
          h2: "Is a working student the same as a zero-hours worker?",
          p: "No, and for most working-student roles it shouldn't be. A zero-hours or on-call contract means you only work and get paid when called in, with little certainty about income or schedule. A good working-student agreement instead uses a fixed number of hours per week, so you know what to expect, with room to adjust that temporarily around exams rather than living with ongoing uncertainty.",
        },
        {
          h2: "Hours and flexibility should be spelled out explicitly",
          p: "Because the work has to run alongside a study programme, the number of hours per week and the room to adjust that around exams is exactly where most confusion arises. A good agreement states a fixed number of hours or a range, and sets out how schedule changes around, say, exam weeks get agreed on, instead of leaving it at \"we'll figure it out.\"",
        },
        {
          h2: "Pay and allowances, in writing",
          p: "The hourly rate, how and when it's paid, and whether there's a travel allowance belong in the contract, just like in any other employment agreement. A working student has the same right to the statutory minimum wage as any other employee: studying is not a reason to fall below it.",
        },
        {
          h2: "Duration, probation and notice period",
          p: "Most working-student contracts are fixed-term, often with the option to extend. As with any temporary contract, it's worth being clear upfront about the probation period, the notice period, and what happens if the contract ends while both sides want to continue.",
        },
        {
          h2: "Checklist: what should it cover at a minimum?",
          ul: [
            "A fixed number of hours per week, or a clear range",
            "How schedule changes around exams and project weeks get agreed",
            "The hourly rate, payment method, and any travel allowance",
            "The contract duration, probation period, and notice period",
            "Who the point of contact is for questions about hours, leave, or guidance",
          ],
        },
        {
          h2: "Why this matters, even for \"just\" a side role",
          p: "A good agreement isn't only protection for the working student, it also prevents misunderstandings for the company. Clear agreements on hours, pay and flexibility mean both sides know where they stand, and that's exactly the foundation a long, good working relationship is built on.",
        },
      ],
    },
  },

  // 10 ----------------------------------------------------------------
  {
    slug: "werkstudent-duitsland-vs-nederland",
    aud: "bedrijf",
    legalTopic: true,
    photo: "/photography/mariselle-8.jpg",
    tag: { nl: "Internationaal", en: "International" },
    title: {
      nl: "Werkstudenten in Duitsland vs. Nederland: wat kunnen we leren?",
      en: "Working students in Germany vs. the Netherlands: what can we learn?",
    },
    excerpt: {
      nl: "In Duitsland is de “Werkstudent” allang normaal, met vaste uren en een echte plek in het team. Wat Nederlandse bedrijven van dat model kunnen overnemen.",
      en: "In Germany, the \"Werkstudent\" has been standard practice for years, with fixed hours and a real seat on the team. What Dutch companies can borrow from that model.",
    },
    read: { nl: "7 min", en: "7 min" },
    body: {
      nl: [
        {
          p: "Het woord “Werkstudent” komt niet toevallig uit het Duits. In Duitsland is het al lang een gevestigde, serieuze manier van werken naast de studie, met een duidelijke plek in bedrijven en op de arbeidsmarkt, terwijl Nederlandse bedrijven vaak nog zoeken naar hoe ze junior talent structureel moeten inzetten. Nederland haalt dat model steeds meer in, maar er valt nog het nodige te leren van hoe het er in Duitsland al standaard uitziet.",
        },
        {
          h2: "In Duitsland is het een volwaardige rol, geen tussenstation",
          p: "Een Werkstudent in Duitsland wordt in veel bedrijven behandeld als een structureel onderdeel van het team, met eigen verantwoordelijkheden en een duidelijke plek in het organogram, niet als een tijdelijke aanvulling die “er ook nog even bij” komt. Die mentaliteit, junior talent als volwaardig teamlid in plaats van goedkope hulp, is precies waar Nederlandse bedrijven vaak nog winst kunnen behalen.",
        },
        {
          h2: "Vaste uren, duidelijke verwachtingen",
          p: "Het Duitse model werkt vaak met een helder aantal uren per week, meestal rond de 20, met een duidelijke afspraak over hoe dat samengaat met de studie. Dat voorkomt de vage “kom maar wanneer het uitkomt”-afspraken die in Nederland nog te vaak de norm zijn en die op termijn tot onduidelijkheid en frustratie leiden.",
        },
        {
          h2: "Is het Duitse model juridisch anders geregeld dan het Nederlandse?",
          p: "Niet fundamenteel. Ook in Duitsland is “Werkstudent” geen apart soort arbeidscontract, maar een manier van werken binnen de bestaande arbeidswetgeving, vergelijkbaar met hoe het in Nederland is geregeld. Het verschil zit niet in de wet, het zit in de gewoonte: in Duitsland is het volstrekt normaal dat een Werkstudent een vaste, serieuze rol heeft, terwijl datzelfde in Nederland nog te vaak als uitzondering wordt behandeld in plaats van als standaard.",
        },
        {
          h2: "Het wordt gezien als een serieuze wervingsstrategie, niet als bijzaak",
          p: "Duitse bedrijven, van grote corporates tot scale-ups, bouwen actief aan een pijplijn van Werkstudenten die na hun studie kunnen doorstromen naar een vaste rol. Het is geen toevallige manier om aan goedkope hulp te komen, het is een doordachte manier om junior talent vroeg te binden, vaak jaren voordat een concurrent dezelfde persoon via een reguliere vacature zou tegenkomen.",
        },
        {
          h2: "Wat Nederlandse bedrijven kunnen overnemen",
          ul: [
            "Behandel de rol als structureel, met een eigen budget en een eigen plek in het team",
            "Spreek een vast aantal uren af in plaats van losse, wisselende inzet",
            "Bouw een doorgroeipad naar een fulltime rol, in plaats van het bij één rol te laten",
            "Betaal in lijn met het niveau van het werk, niet met de status “student”",
          ],
        },
        {
          h2: "Nederland haalt in, en dat is goed nieuws",
          p: "Steeds meer Nederlandse bedrijven, van scale-ups tot gevestigde organisaties, zien werkstudenten niet meer als goedkope noodoplossing maar als een serieuze manier om junior capaciteit op te bouwen. Het Duitse model laat zien waar dat naartoe kan groeien als je het structureel aanpakt in plaats van ad hoc: niet als tijdelijke lapmiddel, maar als vast onderdeel van hoe je een team laat groeien.",
        },
      ],
      en: [
        {
          p: "The word \"Werkstudent\" comes from German for a reason. In Germany, it's long been an established, serious way of working alongside studies, with a clear place in companies and in the labour market, while Dutch companies are often still figuring out how to use junior talent structurally at all. The Netherlands is increasingly catching up, but there's still plenty to learn from how it already works as standard practice in Germany.",
        },
        {
          h2: "In Germany, it's a full seat on the team, not a stopgap",
          p: "A Werkstudent in Germany is treated at many companies as a structural part of the team, with their own responsibilities and a clear place in the org chart, not as a temporary add-on that's \"thrown in as well.\" That mindset, junior talent as a full team member rather than cheap help, is exactly where Dutch companies often still have room to improve.",
        },
        {
          h2: "Fixed hours, clear expectations",
          p: "The German model usually runs on a clear number of hours per week, typically around 20, with an explicit agreement on how that combines with studies. That avoids the vague \"come in whenever it suits\" arrangements that are still too common in the Netherlands, and that eventually lead to confusion and frustration.",
        },
        {
          h2: "Is the German model legally different from the Dutch one?",
          p: "Not fundamentally. In Germany too, \"Werkstudent\" isn't a separate type of employment contract, it's a way of working within existing labour law, broadly similar to how it's structured in the Netherlands. The difference isn't in the law, it's in the habit: in Germany it's completely normal for a Werkstudent to hold a fixed, serious role, while in the Netherlands that same thing is still too often treated as an exception rather than the standard.",
        },
        {
          h2: "It's treated as a real hiring strategy, not an afterthought",
          p: "German companies, from large corporates to scale-ups, actively build a pipeline of Werkstudenten who can move into permanent roles after graduating. It's not an incidental way to get cheap help, it's a deliberate way to bind junior talent early, often years before a competitor would meet the same person through a regular job posting.",
        },
        {
          h2: "What Dutch companies can borrow",
          ul: [
            "Treat the role as structural, with its own budget and its own place on the team",
            "Agree a fixed number of hours instead of loose, shifting availability",
            "Build a growth path toward a full-time role, instead of leaving it at one role",
            "Pay in line with the level of the work, not the status of \"student\"",
          ],
        },
        {
          h2: "The Netherlands is catching up, and that's good news",
          p: "More and more Dutch companies, from scale-ups to established organisations, no longer see working students as a cheap stopgap but as a serious way to build junior capacity. The German model shows where that can grow toward if you approach it structurally instead of ad hoc: not as a temporary patch, but as a permanent part of how you grow a team.",
        },
      ],
    },
  },

  // 11 ----------------------------------------------------------------
  {
    slug: "werkstudent-onboarden-eerste-maand",
    aud: "bedrijf",
    photo: "/photography/blog-2.jpg",
    tag: { nl: "Onboarding", en: "Onboarding" },
    title: {
      nl: "Zo onboard je een werkstudent goed in de eerste maand",
      en: "How to onboard a working student well in the first month",
    },
    excerpt: {
      nl: "De eerste maand bepaalt of iemand na drie maanden nog gemotiveerd is. Een concreet onboardingplan, week voor week, inclusief wat er meestal misgaat.",
      en: "The first month decides whether someone is still motivated after three. A concrete onboarding plan, week by week, including what usually goes wrong.",
    },
    read: { nl: "7 min", en: "7 min" },
    body: {
      nl: [
        {
          p: "Veel bedrijven besteden meer tijd aan het schrijven van de vacaturetekst dan aan de eerste maand van iemands onboarding. Dat is precies verkeerd om: de eerste maand bepaalt grotendeels of een werkstudent na drie maanden nog gemotiveerd is, of stilletjes al aan het afhaken is. Een goed onboardingplan hoeft niet ingewikkeld te zijn, het moet vooral bestaan uit meer dan een account en een welkomstmail.",
        },
        {
          h2: "Wat hoort er sowieso in de eerste maand te gebeuren?",
          p: "Kort samengevat: toegang en middelen die al klaarstaan op dag één, een buddy naast een manager, een eerste afgeronde taak binnen vier weken, en een vast, wekelijks feedbackmoment. Mist een van deze vier, dan is de kans groot dat een werkstudent zich langer een buitenstaander voelt dan nodig is.",
        },
        {
          h2: "Week 1: zorg dat de basis klaarstaat vóór de eerste werkdag",
          p: "Niets voelt onprofessioneler dan een eerste werkdag waarop niemand weet welk account moet worden aangemaakt of welke tool moet worden geïnstalleerd. Regel toegang, apparatuur en een duidelijk werkplekje vooraf, zodat de eerste dag gaat over kennismaken en niet over IT-problemen.",
        },
        {
          h2: "Week 1: geef een buddy, niet alleen een manager",
          p: "Een manager legt uit wat het werk inhoudt, een buddy legt uit hoe het er in de praktijk aan toe gaat: waar de koffie staat, wie je waarvoor moet hebben, welke Slack-kanalen ertoe doen. Die informele laag mist vaak, en juist die zorgt ervoor dat iemand zich sneller thuis voelt.",
        },
        {
          h2: "Week 2 tot 4: geef een eerste, afgebakend resultaat",
          p: "Laat een werkstudent niet wekenlang “meekijken”. Geef binnen de eerste maand een kleine, afgeronde taak waar diegene volledig verantwoordelijk voor is, ook al is het klein. Iets afronden en zien dat het werkt, doet meer voor motivatie dan een maand aan losse observaties.",
        },
        {
          h2: "Spreek een vast feedbackmoment af, niet toevallig af en toe",
          p: "Een kort, wekelijks gesprek van vijftien minuten in de eerste maand voorkomt dat kleine onduidelijkheden uitgroeien tot frustratie. Vraag niet alleen hoe het werk gaat, maar ook of de uren en de balans met de studie kloppen: dat is precies waar het bij een werkstudent vaker misgaat dan bij een gewone starter.",
        },
        {
          h2: "Behandel de rol als structureel vanaf dag één",
          p: "De grootste fout in onboarding is een werkstudent behandelen als tijdelijke hulp die zich nog moet bewijzen. Behandel de rol vanaf het begin als een volwaardig onderdeel van het team, met eigen verantwoordelijkheden en een stem in overleggen. Dat verschil in toon is precies wat bepaalt of iemand na een jaar nog steeds met plezier werkt.",
        },
        {
          h2: "Wat doe je als het na de eerste maand nog niet lekker loopt?",
          p: "Wacht niet tot de evaluatie na drie maanden om dat bespreekbaar te maken. Als de wekelijkse gesprekken in de eerste maand hun werk doen, komt onduidelijkheid over taken, uren of verwachtingen al veel eerder naar boven, en is bijsturen dan nog een kleine aanpassing in plaats van een gesprek over vertrek.",
        },
      ],
      en: [
        {
          p: "Many companies spend more time writing the job posting than on someone's first month of onboarding. That's exactly backwards: the first month largely decides whether a working student is still motivated after three months, or already quietly checking out. A good onboarding plan doesn't need to be complicated, it mainly needs to be more than an account and a welcome email.",
        },
        {
          h2: "What needs to happen in the first month, in short?",
          p: "In short: access and equipment ready on day one, a buddy alongside a manager, a first completed task within four weeks, and a fixed weekly feedback moment. Miss any one of these four and a working student is likely to feel like an outsider for longer than necessary.",
        },
        {
          h2: "Week 1: have the basics ready before day one",
          p: "Nothing feels less professional than a first day where nobody knows which account needs creating or which tool needs installing. Sort out access, equipment and a clear workspace beforehand, so day one is about getting to know people, not fighting IT issues.",
        },
        {
          h2: "Week 1: assign a buddy, not just a manager",
          p: "A manager explains what the work involves, a buddy explains how things actually work in practice: where the coffee is, who to go to for what, which Slack channels matter. That informal layer is often missing, and it's exactly what helps someone feel at home faster.",
        },
        {
          h2: "Weeks 2 to 4: hand over a first, bounded result",
          p: "Don't let a working student \"shadow\" for weeks on end. Within the first month, give them a small, complete task they're fully responsible for, even if it's minor. Finishing something and seeing it work does more for motivation than a month of loose observation.",
        },
        {
          h2: "Set a regular feedback moment, not just occasional check-ins",
          p: "A short, weekly fifteen-minute conversation in the first month stops small misunderstandings from turning into frustration. Ask not just how the work is going, but also whether the hours and the balance with studies are working out: that's exactly where things go wrong more often with a working student than with a regular starter.",
        },
        {
          h2: "Treat the role as structural from day one",
          p: "The biggest onboarding mistake is treating a working student as temporary help who still has to prove themselves. Treat the role from the start as a full part of the team, with real responsibilities and a voice in meetings. That difference in tone is exactly what decides whether someone still enjoys the work a year in.",
        },
        {
          h2: "What do you do if things still aren't clicking after the first month?",
          p: "Don't wait for a three-month review to bring it up. If the weekly conversations in the first month are doing their job, confusion about tasks, hours or expectations surfaces much earlier, and course-correcting is still a small adjustment rather than a conversation about someone leaving.",
        },
      ],
    },
  },

  // 12 ----------------------------------------------------------------
  {
    slug: "red-flags-bij-een-jobaanbod",
    aud: "talent",
    photo: "/photography/mariselle-4.jpg",
    tag: { nl: "Red flags", en: "Red flags" },
    title: {
      nl: "5 red flags die je als student serieus moet nemen bij een aanbod",
      en: "5 red flags students should take seriously in a job offer",
    },
    excerpt: {
      nl: "Niet elk aanbod dat “ervaring” en “groeikansen” belooft, houdt zich daar ook aan. Vijf signalen om op te letten voordat je tekent, en wat je dan het beste kunt doen.",
      en: "Not every offer that promises \"experience\" and \"growth\" actually delivers on it. Five signals to watch for before you sign, and what to do if you spot one.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Als student is het verleidelijk om een aanbod snel aan te nemen, zeker als het je eerste kans lijkt. Maar niet elk aanbod dat er goed uitziet op papier, is dat ook in de praktijk. Vijf signalen die het waard zijn om serieus te nemen voordat je tekent, plus wat je kunt doen als je er eentje herkent.",
        },
        {
          h2: "1. “Ervaring” wordt als vervanging voor salaris genoemd",
          p: "Als een bedrijf een laag of geen salaris probeert goed te praten met “je krijgt er zoveel ervaring voor terug”, is dat een teken dat ze weten dat het aanbod op zichzelf niet overtuigt. Ervaring en een eerlijk salaris sluiten elkaar niet uit: een goed bedrijf biedt allebei.",
        },
        {
          h2: "2. De taken blijven vaag, ook als je doorvraagt",
          p: "“Je gaat ons helpen met van alles” klinkt flexibel, maar betekent in de praktijk vaak dat er geen doordachte rol is en dat je waarschijnlijk klusjes gaat doen die niemand anders wil. Vraag concreet: wat ga ik in de eerste maand precies doen, en aan wie rapporteer ik?",
        },
        {
          h2: "3. Er ligt geen contract, of pas heel laat",
          p: "Beginnen met werken zonder getekend contract, “dat regelen we nog wel”, is een risico dat je niet hoeft te nemen. Een serieus bedrijf heeft de basis, uren, salaris, duur, op orde voordat je begint, niet ergens in de eerste maand.",
        },
        {
          h2: "4. Flexibiliteit blijkt alleen één kant op te werken",
          p: "Flexibele uren rond tentamens is een groot voordeel van een werkstudentbaan. Maar als “flexibel” in de praktijk betekent dat je opeens meer uren moet draaien wanneer het het bedrijf uitkomt, zonder dat jouw kant van diezelfde flexibiliteit ooit wordt gehonoreerd, is dat geen flexibiliteit, dat is eenrichtingsverkeer.",
        },
        {
          h2: "5. Je voelt druk om meteen te beslissen",
          p: "“We hebben vandaag nog een antwoord nodig” bij een rol van een jaar of langer is zelden een goed teken. Een bedrijf dat een goede match wil, geeft je de ruimte om na te denken, vragen te stellen en eventueel een tweede gesprek te vragen. Haast is vaker een signaal dat ze weten dat het aanbod bij nader inzien minder aantrekkelijk wordt.",
        },
        {
          h2: "Wat doe je als je een van deze signalen herkent?",
          p: "Onderteken niets voordat je antwoord hebt op de vraag die het signaal opriep: vraag concreet naar het salaris in plaats van “ervaring”, vraag naar een geschreven contract, of vraag om een dag bedenktijd. Een serieus bedrijf reageert daar rustig op. Een bedrijf dat geïrriteerd of ontwijkend reageert op een simpele, redelijke vraag, heeft daarmee eigenlijk al antwoord gegeven.",
        },
      ],
      en: [
        {
          p: "As a student, it's tempting to accept an offer quickly, especially when it feels like your first real chance. But not every offer that looks good on paper holds up in practice. Five signals worth taking seriously before you sign, plus what to do if you spot one.",
        },
        {
          h2: "1. \"Experience\" is offered instead of a salary",
          p: "If a company tries to justify a low or non-existent salary with \"but think of the experience you'll get,\" that's a sign they know the offer doesn't hold up on its own. Experience and a fair salary aren't mutually exclusive: a good company offers both.",
        },
        {
          h2: "2. The tasks stay vague, even when you ask",
          p: "\"You'll help us with all sorts of things\" sounds flexible, but in practice often means there's no real role and you'll likely end up doing odd jobs nobody else wants. Ask something concrete: what exactly will I be doing in the first month, and who do I report to?",
        },
        {
          h2: "3. There's no contract, or it comes very late",
          p: "Starting work without a signed contract, \"we'll sort that out later,\" is a risk you don't need to take. A serious company has the basics, hours, salary, duration, in place before you start, not sometime during the first month.",
        },
        {
          h2: "4. Flexibility turns out to only run one way",
          p: "Flexible hours around exams are a real benefit of a working-student job. But if \"flexible\" in practice means you're suddenly expected to work more hours whenever it suits the company, without your side of that same flexibility ever being honoured, that's not flexibility, that's one-way traffic.",
        },
        {
          h2: "5. You feel pressured to decide immediately",
          p: "\"We need an answer today\" for a role that runs a year or longer is rarely a good sign. A company that wants a good match gives you room to think, ask questions, and request a second conversation if needed. Urgency is more often a signal they know the offer looks less attractive on reflection.",
        },
        {
          h2: "What should you do if you spot one of these signals?",
          p: "Don't sign anything before you've got an answer to the question the signal raised: ask specifically about salary instead of \"experience,\" ask for a written contract, or ask for a day to think it over. A serious company responds calmly to that. A company that gets irritated or evasive over a simple, reasonable question has effectively already answered it.",
        },
      ],
    },
  },

  // 13 ----------------------------------------------------------------
  {
    slug: "eerste-junior-hire-founders",
    aud: "bedrijf",
    photo: "/photography/blog-3.jpg",
    tag: { nl: "Founders", en: "Founders" },
    title: {
      nl: "Je eerste junior hire: waarom founders te lang wachten",
      en: "Your first junior hire: why founders wait too long",
    },
    excerpt: {
      nl: "“Het is sneller als ik het zelf doe” klopt precies tot het moment dat het je grootste bottleneck wordt. Waarom die eerste junior hire eerder moet dan je denkt, en hoe je weet dat het zover is.",
      en: "\"It's faster if I just do it myself\" is true right up until it becomes your biggest bottleneck. Why that first junior hire should come sooner than you think, and how to know you're there.",
    },
    read: { nl: "7 min", en: "7 min" },
    body: {
      nl: [
        {
          p: "Bijna elke founder herkent het: een takenlijst die groter is dan de tijd om hem af te werken, en het gevoel dat het sneller is om iets zelf te doen dan om het uit te leggen aan iemand anders. Dat gevoel klopt, tot het moment dat het je grootste bottleneck wordt, meestal precies op het moment dat het bedrijf begint te groeien.",
        },
        {
          h2: "Wanneer is een bedrijf klaar voor zijn eerste junior hire?",
          p: "Als minstens twee van deze drie gelden, is het tijd om verder te kijken dan “ik doe het zelf wel even”:",
          ul: [
            "Je besteedt meer dan een paar uur per week aan werk dat geen strategisch inzicht vereist, zoals rapportages, planning of terugkerende content",
            "Er is minstens één taak die iedere week terugkomt en die iemand anders met een korte uitleg zou kunnen overnemen",
            "Klanten, deals of besluiten wachten regelmatig omdat de founder de bottleneck is",
          ],
        },
        {
          h2: "“Sneller zelf doen” is een valkuil met houdbaarheidsdatum",
          p: "Op korte termijn is het waar: zelf iets doen kost minder tijd dan het uitleggen. Op de langere termijn betekent het dat een founder tijd blijft steken in werk dat een ander had kunnen overnemen, terwijl de tijd die daadwerkelijk founder-tijd waard is, zoals strategie, klanten en fondsenwerving, erbij inschiet.",
        },
        {
          h2: "De angst is meestal groter dan het risico",
          p: "De twee grootste angsten bij een eerste junior hire zijn kosten en tijd: kost het te veel, en heb ik wel tijd om iemand te begeleiden? Een werkstudent verlaagt beide risico's: lagere kosten dan een fulltime hire, en een rol die groeit met de tijd die je hebt, in plaats van meteen volledig ingezet te worden. Je hoeft ook niet meteen een volledig ingericht inwerktraject te hebben: één duidelijke taak en een wekelijks kort gesprek is genoeg om mee te beginnen.",
        },
        {
          h2: "Wachten kost meer dan het lijkt",
          p: "Elke maand dat een founder zelf uitvoerend werk blijft doen dat eigenlijk gedelegeerd kan worden, is een maand minder tijd voor het werk dat het bedrijf daadwerkelijk laat groeien. Dat is geen abstract verlies, het is direct meetbaar in gemiste deals, trage besluitvorming en een team dat op de founder blijft wachten voor beslissingen die iemand anders had kunnen nemen.",
        },
        {
          h2: "Begin klein en afgebakend, niet breed en vaag",
          p: "De beste eerste junior hire krijgt niet “een beetje van alles”, maar één duidelijk stuk eigenaarschap: een deel van de klantcommunicatie, een terugkerend rapportageproces, contentproductie. Bij Hubby draaiden werkstudenten mee als founder's associate op strategisch niveau, precies het soort afgebakende, serieuze verantwoordelijkheid die een eerste hire kan dragen zonder dat een founder alles moet blijven controleren.",
        },
        {
          h2: "Wat als je nu echt geen tijd hebt om iemand te begeleiden?",
          p: "Dat is precies het signaal dat je het je niet langer kunt veroorloven om te wachten. Begeleiding van een eerste junior hire hoeft geen uren per dag te kosten: een kwartier per week en een heldere, afgebakende taak is vaak al genoeg om iemand zelfstandig te laten werken binnen een maand. Geen tijd hebben om te begeleiden is meestal een symptoom van dezelfde overbelasting die de hire juist zou moeten oplossen.",
        },
        {
          h2: "De echte vraag is niet of, maar wanneer",
          p: "De vraag is zelden of een bedrijf junior capaciteit nodig heeft, maar wanneer het te lang duurt om die vraag te stellen. Als een founder meer dan een paar uur per week besteedt aan werk dat iemand anders had kunnen doen, is dat niet een teken dat het bedrijf nog te klein is voor een hire, het is een teken dat de hire al te laat is.",
        },
      ],
      en: [
        {
          p: "Almost every founder recognises it: a to-do list bigger than the time available to clear it, and the feeling that it's faster to just do something yourself than to explain it to someone else. That feeling is true, right up until it becomes your biggest bottleneck, usually right when the company starts to grow.",
        },
        {
          h2: "When is a company ready for its first junior hire?",
          p: "If at least two of these three apply, it's time to look past \"I'll just do it myself\":",
          ul: [
            "You spend more than a few hours a week on work that doesn't require strategic judgment, like reporting, scheduling or recurring content",
            "There's at least one task that comes back every week and that someone else could take over with a short explanation",
            "Customers, deals or decisions regularly wait because the founder is the bottleneck",
          ],
        },
        {
          h2: "\"Faster to do it myself\" is a trap with an expiry date",
          p: "In the short term it's true: doing something yourself takes less time than explaining it. In the longer term it means a founder keeps sinking time into work someone else could have taken over, while the time that's actually worth a founder's attention, like strategy, customers and fundraising, gets squeezed out.",
        },
        {
          h2: "The fear is usually bigger than the risk",
          p: "The two biggest fears around a first junior hire are cost and time: will it be too expensive, and do I even have time to guide someone? A working student lowers both risks: lower cost than a full-time hire, and a role that grows with the time you have, instead of needing to be fully utilised from day one. You don't need a fully built-out onboarding programme either: one clear task and a short weekly check-in is enough to start with.",
        },
        {
          h2: "Waiting costs more than it seems to",
          p: "Every month a founder keeps doing execution work that could actually be delegated is a month less time for the work that actually grows the company. That's not an abstract loss, it shows up directly in missed deals, slow decisions, and a team that keeps waiting on the founder for calls someone else could have made.",
        },
        {
          h2: "Start small and bounded, not broad and vague",
          p: "The best first junior hire doesn't get \"a bit of everything,\" they get one clear piece of ownership: part of client communication, a recurring reporting process, content production. At Hubby, working students operated as founder's associates at a strategic level, exactly the kind of bounded, serious responsibility a first hire can carry without a founder needing to control every detail.",
        },
        {
          h2: "What if you genuinely don't have time to guide anyone right now?",
          p: "That's exactly the signal that you can no longer afford to wait. Guiding a first junior hire doesn't need to take hours a day: fifteen minutes a week and one clear, bounded task is often enough to get someone working independently within a month. Not having time to guide someone is usually a symptom of the same overload the hire is meant to fix.",
        },
        {
          h2: "The real question isn't if, it's when",
          p: "The question is rarely whether a company needs junior capacity, it's how long you've waited to ask it. If a founder is spending more than a few hours a week on work someone else could do, that's not a sign the company is still too small for a hire, it's a sign the hire is already overdue.",
        },
      ],
    },
  },

  // 14 ----------------------------------------------------------------
  {
    slug: "bijbaan-of-relevante-ervaring",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/mariselle-7.jpg",
    tag: { nl: "Arbeidsmarkt", en: "Labour market" },
    title: {
      nl: "Bijbaan of relevante werkervaring: wat telt zwaarder voor je cv?",
      en: "Side job or relevant work experience: what counts more for your CV?",
    },
    excerpt: {
      nl: "Veel studenten werken naast hun studie om rond te komen, niet om ervaring op te doen. Wat dat verschil betekent voor je start op de arbeidsmarkt, en hoe je het oplost.",
      en: "Many students work alongside their studies to get by, not to gain experience. What that difference means for your start on the labour market, and how to close the gap.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Veel studenten hebben een bijbaan, in de horeca, de detailhandel, of ergens anders waar de uren flexibel zijn. Dat werk is niet minderwaardig, het betaalt de rekeningen en leert je verantwoordelijkheid nemen. Maar op het moment dat je gaat solliciteren naar je eerste baan, telt het anders mee dan werkervaring die inhoudelijk aansluit op je studie.",
        },
        {
          h2: "Telt een bijbaan nog wel mee op je cv?",
          p: "Ja, maar anders dan relevante ervaring. Een bijbaan laat zien dat je kunt werken, op tijd komt en met klanten of collega's kunt omgaan, en dat is niet niets. Wat het niet laat zien, is of je iets weet van het vakgebied waar je wilt starten. Voor een sollicitatie naar een eerste vakinhoudelijke baan telt relevante ervaring daarom zwaarder, ook als een bijbaan qua uren of inzet net zo veeleisend was.",
        },
        {
          h2: "Waarom bedrijven naar relevante ervaring kijken",
          p: "Een werkgever die een starter aanneemt, wil weten of iemand al eens heeft meegemaakt hoe het werkveld eruitziet: hoe een team samenwerkt, hoe deadlines lopen, hoe je met feedback omgaat in een professionele context. Een bijbaan laat zien dat je kunt werken; relevante ervaring laat zien dat je al iets weet van het vak waar je in wilt starten.",
        },
        {
          h2: "Het probleem: relevante ervaring is niet voor iedereen even bereikbaar",
          p: "Relevante stages en werkstudentbanen zijn niet altijd goed betaald, en dat maakt ze minder toegankelijk voor studenten die ook gewoon huur en boodschappen moeten betalen. Wie een financieel vangnet heeft, kan het zich veroorloven om voor weinig relevante ervaring op te doen; wie dat niet heeft, kiest vaak noodgedwongen voor een bijbaan die wel betaalt maar niets toevoegt aan het cv. Dat is geen kwestie van motivatie, het is een kwestie van wie het zich kan veroorloven om een tijd lang minder te verdienen.",
        },
        {
          h2: "Betaald én relevant hoeft geen tegenstelling te zijn",
          p: "Het idee dat je moet kiezen tussen geld verdienen en ervaring opdoen, is geen natuurwet, het is een gevolg van hoe stages en werkstudentbanen vaak worden geprijsd. Een werkstudentbaan die eerlijk betaalt, lost precies dit probleem op: je verdient genoeg om van te leven én je bouwt aan een cv dat ertoe doet.",
        },
        {
          h2: "Hoe herken je een rol die zowel betaalt als relevant is?",
          p: "Let op drie dingen: een salaris dat op of boven het wettelijk minimumloon ligt en niet wordt weggewuifd als “ervaring is de beloning”, taken die aantoonbaar te maken hebben met je studierichting of gewenste vakgebied, en een contract met vaste uren in plaats van losse oproepen. Ontbreekt een van de drie structureel, dan is het waarschijnlijk toch dichter bij een bijbaan dan bij een werkstudentrol, ongeacht hoe de vacaturetekst het noemt.",
        },
        {
          h2: "Wat je nu al kunt doen",
          ul: [
            "Zoek actief naar werkstudentrollen in plaats van alleen bijbaantjes, ook als je nog volop studeert",
            "Wees kritisch op vergoeding: relevante ervaring hoeft niet onbetaald te zijn",
            "Als een bijbaan nu even nodig is om rond te komen, is dat geen probleem, maar blijf zoeken naar iets relevanters zodra dat kan",
          ],
        },
        {
          h2: "Waarom dit VOIDS' bestaansreden is",
          p: "Dit verschil, tussen wie zich relevante ervaring kan veroorloven en wie niet, is precies waarom VOIDS bestaat. Toegang tot werk dat ertoe doet zou niet moeten afhangen van wie het kan betalen om er weinig voor terug te vragen.",
        },
      ],
      en: [
        {
          p: "Many students have a side job, in hospitality, retail, or somewhere else with flexible hours. That work isn't lesser, it pays the bills and teaches you to take responsibility. But the moment you start applying for your first job, it doesn't count the same as work experience that connects to your field of study.",
        },
        {
          h2: "Does a side job still count on your CV?",
          p: "Yes, just differently from relevant experience. A side job shows you can work, show up on time, and deal with customers or colleagues, and that's not nothing. What it doesn't show is whether you know anything about the field you want to start in. For an application to your first role in that field, relevant experience carries more weight, even if a side job was just as demanding in hours or effort.",
        },
        {
          h2: "Why companies look for relevant experience",
          p: "An employer hiring a starter wants to know whether someone has already experienced what the field actually looks like: how a team works together, how deadlines run, how you handle feedback in a professional context. A side job shows you can work; relevant experience shows you already know something about the field you want to start in.",
        },
        {
          h2: "The problem: relevant experience isn't equally accessible to everyone",
          p: "Relevant internships and working-student jobs aren't always well paid, which makes them less accessible to students who also need to cover rent and groceries. Someone with a financial safety net can afford to gain relevant experience for little pay; someone without one often ends up choosing a side job that pays but adds nothing to their CV. That's not a question of motivation, it's a question of who can afford to earn less for a while.",
        },
        {
          h2: "Paid and relevant don't have to be a trade-off",
          p: "The idea that you have to choose between earning money and gaining experience isn't a law of nature, it's a consequence of how internships and working-student jobs are often priced. A working-student role that pays fairly solves exactly this problem: you earn enough to live on and build a CV that actually matters.",
        },
        {
          h2: "How do you spot a role that's both paid and relevant?",
          p: "Watch for three things: a salary at or above the statutory minimum wage that isn't waved away with \"experience is the reward,\" tasks that clearly connect to your field of study or the work you're aiming for, and a contract with fixed hours rather than loose on-call shifts. If one of the three is structurally missing, it's probably closer to a side job than a working-student role, whatever the posting calls it.",
        },
        {
          h2: "What you can do right now",
          ul: [
            "Actively look for working-student roles instead of only side jobs, even while you're still deep in your studies",
            "Be critical about pay: relevant experience doesn't have to mean unpaid",
            "If a side job is what you need right now to get by, that's fine, but keep looking for something more relevant as soon as you can",
          ],
        },
        {
          h2: "Why this is VOIDS' reason for existing",
          p: "This gap, between who can afford relevant experience and who can't, is exactly why VOIDS exists. Access to work that matters shouldn't depend on who can afford to ask for little in return.",
        },
      ],
    },
  },

  // 15 ----------------------------------------------------------------
  {
    slug: "proeftijd-werkstudentcontract",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/mariselle-10.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Proeftijd bij een werkstudentcontract: wat mag wel en wat niet?",
      en: "Probation period in a working-student contract: what's allowed and what isn't?",
    },
    excerpt: {
      nl: "Een proeftijd van drie maanden op een contract van vijf maanden mag gewoon niet. Wat de wet wél toestaat bij een werkstudentcontract, en waar je op moet letten voordat je tekent.",
      en: "A three-month probation on a five-month contract simply isn't allowed. What the law actually permits in a working-student contract, and what to check before you sign.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen juridisch advies. Check bij twijfel altijd de actuele regels of een jurist. Een werkstudentcontract is een gewone arbeidsovereenkomst, dus de wettelijke regels voor een proeftijd gelden hier net zo goed als bij elk ander contract, ook al wordt dat in de praktijk regelmatig over het hoofd gezien.",
        },
        {
          h2: "Wat is een proeftijd precies?",
          p: "Een proeftijd is de periode aan het begin van een contract waarin zowel werkgever als werknemer het contract per direct kunnen beëindigen, zonder opzegtermijn en zonder reden op te hoeven geven. Het doel is over en weer te toetsen of de samenwerking bevalt, niet om iemand langdurig in onzekerheid te laten.",
        },
        {
          h2: "Hoeveel proeftijd is wettelijk toegestaan bij een werkstudentcontract?",
          p: "De lengte hangt af van de duur van het contract, niet van het feit dat het om een werkstudent gaat. Bij een contract van zes maanden of korter mag helemaal geen proeftijd worden afgesproken. Bij een contract langer dan zes maanden tot twee jaar is maximaal één maand proeftijd toegestaan. Bij een contract van twee jaar of langer, of voor onbepaalde tijd, mag de proeftijd oplopen tot maximaal twee maanden.",
        },
        {
          h2: "Wat als de proeftijd niet aan deze regels voldoet?",
          p: "Dan is de hele proeftijdbepaling nietig, niet alleen het deel dat te lang is. Dat betekent dat er vanaf dag één geen proeftijd geldt en de gewone opzegtermijnen en ontslagregels van toepassing zijn, ook als dat niet zo in het contract staat. Een proeftijd van drie maanden op een contract van vijf maanden is dus niet “drie maanden die eigenlijk één maand hadden moeten zijn”, het is helemaal geen geldige proeftijd.",
        },
        {
          h2: "Loopt de proeftijd door als je door tentamens weinig uren maakt?",
          p: "In de regel loopt een proeftijd door vanaf de afgesproken startdatum in kalenderdagen, ook als je in die periode door tentamens minder uren werkt. Dat is precies waarom het slim is om vooraf te bespreken hoe de eerste weken samenvallen met je studierooster, zodat de proeftijd niet toevallig samenvalt met je drukste tentamenweken.",
        },
        {
          h2: "Checklist voordat je tekent",
          ul: [
            "Klopt de lengte van de proeftijd met de duur van het contract volgens de wet?",
            "Staat de proeftijd expliciet en schriftelijk in het contract, niet alleen mondeling toegezegd?",
            "Is duidelijk vanaf welke datum de proeftijd ingaat?",
            "Is er ruimte besproken voor de studiebelasting in die eerste periode?",
          ],
        },
        {
          h2: "Waarom dit ertoe doet, ook bij een parttime rol",
          p: "Een werkstudentcontract is geen lichtere versie van een arbeidsovereenkomst, dus de bescherming die erbij hoort is dat ook niet. Bij VOIDS zorgen we dat contracten kloppen voordat iemand tekent, precies omdat een eerlijke start net zo belangrijk is als een eerlijk salaris.",
        },
      ],
      en: [
        {
          p: "This article is general information, not legal advice. If in doubt, always check the current rules or consult a lawyer. A working-student contract is a regular employment contract, so the statutory rules on probation periods apply exactly as they would to any other contract, even though that gets overlooked in practice fairly often.",
        },
        {
          h2: "What exactly is a probation period?",
          p: "A probation period is the window at the start of a contract during which either the employer or the employee can end it immediately, without notice and without giving a reason. The point is for both sides to test whether the working relationship fits, not to leave someone in prolonged uncertainty.",
        },
        {
          h2: "How long can a probation period legally be in a working-student contract?",
          p: "The length depends on the duration of the contract, not on the fact that it's a working-student role. For a contract of six months or less, no probation period is allowed at all. For a contract longer than six months up to two years, a maximum of one month is allowed. For a contract of two years or longer, or an indefinite contract, the probation period can run up to a maximum of two months.",
        },
        {
          h2: "What happens if the probation period doesn't follow these rules?",
          p: "Then the entire probation clause is void, not just the part that's too long. That means no probation period applies from day one, and the normal notice periods and dismissal rules kick in instead, whatever the contract says. A three-month probation on a five-month contract isn't \"three months that should really have been one,\" it's not a valid probation period at all.",
        },
        {
          h2: "Does the probation period keep running if exams cut your hours?",
          p: "As a rule, a probation period runs in calendar days from the agreed start date, even if you work fewer hours during that stretch because of exams. That's exactly why it's worth discussing upfront how the first few weeks line up with your exam schedule, so the probation period doesn't happen to fall during your busiest exam weeks.",
        },
        {
          h2: "Checklist before you sign",
          ul: [
            "Does the length of the probation period match the contract duration under the law?",
            "Is the probation period stated explicitly and in writing, not just promised verbally?",
            "Is it clear from which date the probation period starts?",
            "Has the study workload for that first stretch actually been discussed?",
          ],
        },
        {
          h2: "Why this matters, even for a part-time role",
          p: "A working-student contract isn't a lighter version of an employment contract, so the protections that come with it aren't either. At VOIDS we make sure contracts are correct before anyone signs, precisely because a fair start matters just as much as fair pay.",
        },
      ],
    },
  },

  // 16 ----------------------------------------------------------------
  {
    slug: "ziek-als-werkstudent",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/mariselle-1.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Ziek als werkstudent: heb je recht op doorbetaling?",
      en: "Sick as a working student: are you still paid?",
    },
    excerpt: {
      nl: "Ja, ook als werkstudent word je doorbetaald als je ziek bent. Wat je precies mag verwachten, hoe dat verschilt van een bijbaan, en wat je moet melden bij tentamens.",
      en: "Yes, working students get paid sick leave too. What you can actually expect, how it differs from a side job, and what to do around exams.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen juridisch advies. Ziek zijn als werkstudent voelt soms als een grijs gebied, alsof het minder telt omdat je toch al niet fulltime werkt. Dat is het niet: een werkstudentcontract is een gewone arbeidsovereenkomst, en de regels rond loondoorbetaling bij ziekte gelden onverkort.",
        },
        {
          h2: "Word je doorbetaald als je ziek bent als werkstudent?",
          p: "Ja. Een werkgever is wettelijk verplicht om bij ziekte minimaal 70% van je loon door te betalen, met als ondergrens het wettelijk minimumloon in het eerste ziektejaar als 70% daaronder zou uitkomen. Dat geldt voor iedere werknemer met een arbeidsovereenkomst, en een werkstudentcontract is daar één van, ongeacht het aantal uren dat je werkt.",
        },
        {
          h2: "Geldt dit ook als je maar 16 uur per week werkt?",
          p: "Ja, het aantal uren verandert niets aan het recht op doorbetaling, alleen aan het bedrag: je krijgt een percentage van het loon dat bij jouw uren hoort, niet van een fulltime salaris. Een werkstudent die 16 uur per week werkt en ziek wordt, ontvangt dus 70% van het loon over die 16 uur, met dezelfde ondergrens van het minimumloon.",
        },
        {
          h2: "Hoe verschilt dit van een bijbaan of een oproepcontract?",
          p: "Bij een oproepcontract zonder vaste uren kan het lastiger zijn om vast te stellen waarover moet worden doorbetaald, juist omdat er geen vast aantal uren is afgesproken. Een werkstudentcontract met een vast of duidelijk afgebakend aantal uren per week voorkomt die onduidelijkheid: er is een helder bedrag om vanuit te rekenen, in plaats van een schatting achteraf.",
        },
        {
          h2: "Moet je je ook ziekmelden als je alleen tentamens mist door griep?",
          p: "Ja, ziekmelden werkt hetzelfde als bij ieder ander werk: bij je werkgever, niet bij je opleiding. Een tentamen missen door ziekte is een zaak tussen jou en je universiteit of hogeschool, los van je werk. Meld je dus gewoon ziek zoals je dat op een gewone werkdag zou doen, ook als de reden toevallig samenvalt met een tentamenweek.",
        },
        {
          h2: "Wat als je werkgever zegt dat ziekteverzuim “niet meetelt” bij een werkstudentcontract?",
          p: "Dat klopt niet, en het is precies het soort onderscheid dat een werkstudentrol niet apart maakt van een gewone parttime baan. Kom je dit tegen, vraag dan gewoon naar de onderbouwing, of leg het naast de tekst van je contract: de wettelijke regels rond loondoorbetaling bij ziekte staan los van de vraag of je nog studeert.",
        },
        {
          h2: "Waarom dit VOIDS' vertrekpunt is",
          p: "Een werkstudent heeft dezelfde rechten als iedere andere werknemer, ziekte inbegrepen. Bij VOIDS zorgen we dat kandidaten weten waar ze recht op hebben, zodat “het is toch maar een werkstudent” nooit een excuus wordt om iemand minder te bieden dan waar diegene recht op heeft.",
        },
      ],
      en: [
        {
          p: "This article is general information, not legal advice. Being sick as a working student can feel like a grey area, as if it matters less because you're not working full-time anyway. It isn't: a working-student contract is a regular employment contract, and the rules on paid sick leave apply in full.",
        },
        {
          h2: "Do working students still get paid when they're sick?",
          p: "Yes. Employers are legally required to continue paying at least 70% of your wage during illness, with the statutory minimum wage as a floor during the first year of sickness if 70% would fall below it. That applies to any employee with an employment contract, and a working-student contract is one, regardless of how many hours you work.",
        },
        {
          h2: "Does this still apply if you only work 16 hours a week?",
          p: "Yes, the number of hours doesn't affect the right to continued pay, only the amount: you get a percentage of the wage tied to your hours, not of a full-time salary. A working student on 16 hours a week who falls ill receives 70% of the wage for those 16 hours, with the same minimum-wage floor.",
        },
        {
          h2: "How does this differ from a side job or an on-call contract?",
          p: "With an on-call contract that has no fixed hours, it can be harder to establish what continued pay should be based on, precisely because no set number of hours was agreed. A working-student contract with a fixed or clearly bounded number of hours per week avoids that ambiguity: there's a clear figure to calculate from, instead of an estimate after the fact.",
        },
        {
          h2: "Do you still need to report sick if you're only missing an exam?",
          p: "Yes, reporting sick works the same as for any other job: to your employer, not your university. Missing an exam because of illness is a matter between you and your university or college, separate from your work. Report sick the way you would on a normal working day, even if the timing happens to fall in an exam week.",
        },
        {
          h2: "What if your employer says sick leave \"doesn't really count\" on a working-student contract?",
          p: "That's not correct, and it's exactly the kind of distinction that shouldn't set a working-student role apart from an ordinary part-time job. If you run into this, just ask for the reasoning, or check it against your contract: the statutory rules on paid sick leave don't depend on whether you're still studying.",
        },
        {
          h2: "Why this is VOIDS' starting point",
          p: "A working student has the same rights as any other employee, sickness included. At VOIDS we make sure candidates know what they're entitled to, so \"they're just a working student\" never becomes an excuse to offer someone less than they're owed.",
        },
      ],
    },
  },

  // 17 ----------------------------------------------------------------
  {
    slug: "vakantiedagen-opbouwen-als-werkstudent",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/blog-1.jpg",
    tag: { nl: "Juridisch", en: "Legal" },
    title: {
      nl: "Vakantiedagen opbouwen als werkstudent: hoe werkt dat?",
      en: "Accruing vacation days as a working student: how does it work?",
    },
    excerpt: {
      nl: "Ook bij 16 uur per week bouw je gewoon vakantiedagen op, naar rato van je uren. De rekensom uitgelegd, plus wat je kunt doen als je werkgever ze niet bijhoudt.",
      en: "Even at 16 hours a week, you accrue vacation days, in proportion to your hours. The math explained, plus what to do if your employer isn't tracking them.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen juridisch advies. “Ik werk maar parttime, dus vakantiedagen zijn niet echt van toepassing” is een misverstand dat bij werkstudenten vaker voorkomt dan je zou denken. Ook bij minder uren bouw je gewoon vakantiedagen op, alleen naar rato.",
        },
        {
          h2: "Bouw je als werkstudent vakantiedagen op?",
          p: "Ja. Iedere werknemer met een arbeidsovereenkomst bouwt wettelijk minimaal vakantiedagen op ter grootte van vier keer het aantal uren dat je per week werkt, per jaar. Werk je 16 uur per week, dan bouw je dus minimaal 64 uur aan vakantie op per jaar, oftewel vier werkweken van 16 uur. Dat is een wettelijke ondergrens: veel werkgevers bieden er iets bovenop.",
        },
        {
          h2: "Hoe reken je dat om naar dagen?",
          p: "Vakantie-uren worden meestal omgerekend naar dagen op basis van je gemiddelde werkdag. Werk je bijvoorbeeld twee dagen van 8 uur per week, dan komt 64 uur neer op acht vakantiedagen van 8 uur. Werk je verspreid over meer, kortere dagen, dan verandert het aantal dagen, maar niet het totale aantal uren waar je recht op hebt.",
        },
        {
          h2: "Bouw je ook vakantiedagen op tijdens een periode dat je minder werkt door tentamens?",
          p: "Ja, zolang je contract doorloopt en je gewoon in dienst bent, bouw je op basis van je afgesproken uren op, ook als je in de praktijk een week minder werkt door een tentamenperiode die vooraf is afgesproken. Alleen bij onbetaald verlof kan de opbouw stilvallen, en dat hoort dan expliciet met je werkgever besproken te zijn.",
        },
        {
          h2: "Vervallen vakantiedagen als je ze niet opneemt?",
          p: "Wettelijke vakantiedagen vervallen doorgaans zes maanden na het einde van het jaar waarin ze zijn opgebouwd, tenzij je redelijkerwijs niet in staat was om ze op te nemen. Bovenwettelijke dagen, als je werkgever die extra aanbiedt, hebben vaak een langere houdbaarheid, meestal vijf jaar. Check je contract of personeelshandboek voor de precieze regeling bij jouw werkgever.",
        },
        {
          h2: "Wat kun je doen als je werkgever geen overzicht bijhoudt?",
          p: "Vraag er gewoon naar. De meeste bedrijven houden vakantie-uren bij in een systeem waar je zelf inzicht in hebt, en als dat niet zo is, mag je vragen om een overzicht. Een werkgever die dit niet bijhoudt, is niet automatisch in overtreding, maar het maakt het voor jou wel lastiger om te zien waar je recht op hebt, dus het loont om er vroeg naar te vragen in plaats van pas bij vertrek.",
        },
        {
          h2: "Waarom dit meetelt, ook als je maar één jaar blijft",
          p: "Vakantiedagen zijn geen extraatje dat je “verdient” als je lang genoeg blijft, het is een basisrecht vanaf je eerste werkdag. Bij VOIDS letten we erop dat contracten dit gewoon correct regelen, precies omdat een werkstudentbaan een volwaardige baan is en geen verkorte versie van werknemersrechten.",
        },
      ],
      en: [
        {
          p: "This article is general information, not legal advice. \"I only work part-time, so vacation days don't really apply to me\" is a misconception that comes up among working students more often than you'd expect. Even on fewer hours, you accrue vacation days, just proportionally.",
        },
        {
          h2: "Do working students accrue vacation days?",
          p: "Yes. Every employee with an employment contract accrues, at minimum, vacation time equal to four times their weekly working hours, per year. If you work 16 hours a week, you accrue at least 64 hours of leave a year, the equivalent of four 16-hour work weeks. That's a statutory floor: many employers offer a bit more.",
        },
        {
          h2: "How does that convert into days?",
          p: "Vacation hours are usually converted into days based on your average working day. If you work, say, two 8-hour days a week, 64 hours works out to eight 8-hour vacation days. If you're spread over more, shorter days, the number of days changes, but the total hours you're entitled to don't.",
        },
        {
          h2: "Do you still accrue leave during a period where exams cut your hours?",
          p: "Yes, as long as your contract runs and you remain employed, you accrue leave based on your agreed hours, even if you work fewer hours in practice during a pre-agreed exam period. Accrual can pause during unpaid leave, and that should be explicitly discussed with your employer if it applies.",
        },
        {
          h2: "Do vacation days expire if you don't use them?",
          p: "Statutory vacation days generally expire six months after the end of the year in which they were accrued, unless you were reasonably unable to take them. Any extra days your employer offers on top of the legal minimum usually last longer, often five years. Check your contract or staff handbook for the exact policy at your employer.",
        },
        {
          h2: "What can you do if your employer isn't tracking a balance?",
          p: "Just ask. Most companies track vacation hours in a system you can see yourself, and if they don't, you can ask for an overview. An employer not tracking this isn't automatically breaking the rules, but it does make it harder for you to see what you're owed, so it's worth asking early rather than only when you leave.",
        },
        {
          h2: "Why this matters, even if you only stay a year",
          p: "Vacation days aren't a perk you \"earn\" by sticking around long enough, they're a basic right from your first day of work. At VOIDS we make sure contracts get this right, precisely because a working-student role is a full role, not a shortened version of employee rights.",
        },
      ],
    },
  },

  // 18 ----------------------------------------------------------------
  {
    slug: "studiefinanciering-en-werken-combineren",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/blog-4.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Studiefinanciering en werken combineren: wat betekent dat voor belasting en toeslagen?",
      en: "Combining student finance with work: what does it mean for tax and benefits?",
    },
    excerpt: {
      nl: "Werken als werkstudent raakt niet je studiefinanciering zelf, maar wel mogelijk je toeslagen. Wat je moet weten voordat het najaar je ineens confronteert met een naheffing.",
      en: "Working as a working student doesn't touch your student finance itself, but it can affect your benefits. What to know before autumn hits you with an unexpected repayment.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen fiscaal of juridisch advies. Check bij twijfel altijd de actuele regels via DUO, de Belastingdienst of een adviseur, want dit is precies het soort regelgeving dat kan wijzigen. Wat we wél op hoofdlijnen kunnen delen: waar werken als werkstudent wel en niet invloed op heeft.",
        },
        {
          h2: "Raakt bijverdienen je studiefinanciering zelf?",
          p: "Onder het huidige stelsel van studiefinanciering geldt er geen algemene bijverdiengrens meer die je basisbeurs of lening beïnvloedt: je mag in principe verdienen wat je verdient, zonder dat dit je studiefinanciering zelf raakt. De regels rond studiefinanciering zijn de afgelopen jaren wel veranderd, dus check bij twijfel altijd de actuele situatie bij DUO, zeker als je nog onder een ouder stelsel met een prestatiebeurs valt.",
        },
        {
          h2: "Betaal je belasting over je loon als werkstudent?",
          p: "Ja, gewoon zoals iedere werknemer: je werkgever houdt loonheffing in op je salaris, op basis van de gebruikelijke belastingschijven. Verdien je in totaal weinig over het jaar, dan kan het zijn dat je via de jaarlijkse aangifte inkomstenbelasting een deel terugkrijgt, maar dat is iets voor achteraf, niet iets dat je loonstrookje nu al aanpast.",
        },
        {
          h2: "Raakt een hoger inkomen je zorgtoeslag of huurtoeslag?",
          p: "Toeslagen zoals zorgtoeslag en huurtoeslag zijn inkomensafhankelijk, dus een structureel hoger inkomen als werkstudent kan de hoogte daarvan beïnvloeden, en bij een flinke stijging zelfs het recht erop. Dat is geen straf op werken, het is simpelweg hoe het toeslagensysteem is ingericht: het compenseert minder naarmate je zelf meer verdient.",
        },
        {
          h2: "Hoe voorkom je een vervelende naheffing achteraf?",
          p: "Toeslagen worden op basis van een geschat jaarinkomen uitgekeerd, en als je gaandeweg het jaar meer gaat verdienen als werkstudent, loont het om je inkomensschatting bij te werken via de Belastingdienst zodra dat duidelijk wordt. Doe je dat niet, dan loop je het risico dat je aan het eind van het jaar moet terugbetalen, in plaats van dat gedurende het jaar geleidelijk te verrekenen.",
        },
        {
          h2: "Wat kun je nu al doen?",
          ul: [
            "Check via Mijn Toeslagen of je inkomensschatting nog klopt zodra je weet wat je ongeveer gaat verdienen",
            "Bewaar je loonstroken, ook als je van baan wisselt tijdens je studie",
            "Vraag bij twijfel gewoon na bij DUO of de Belastingdienst in plaats van te gokken",
          ],
        },
        {
          h2: "Waarom dit VOIDS aangaat",
          p: "Onduidelijkheid over toeslagen en belasting is precies het soort drempel die bijdraagt aan het idee dat betaald werken naast je studie ingewikkelder is dan het is. Bij VOIDS proberen we die drempel te verlagen door hier open over te zijn, zodat een eerlijk salaris ook daadwerkelijk aanvoelt als vooruitgang, niet als een risico.",
        },
      ],
      en: [
        {
          p: "This article is general information, not tax or legal advice. If in doubt, always check the current rules via DUO, the Dutch Tax Authority, or an advisor, since this is exactly the kind of regulation that changes. What we can share at a general level: what working as a working student does and doesn't affect.",
        },
        {
          h2: "Does earning extra income affect your student finance itself?",
          p: "Under the current student finance system, there's no longer a general earnings cap that affects your basic grant or loan: in principle you can earn what you earn without it touching your student finance itself. The rules around student finance have changed a few times in recent years, so if in doubt, always check the current situation with DUO, especially if you still fall under an older performance-based grant system.",
        },
        {
          h2: "Do you pay tax on your wage as a working student?",
          p: "Yes, just like any employee: your employer withholds payroll tax from your salary based on the standard tax brackets. If your total income for the year is low, you may get some of that back through your annual income tax return, but that's something settled afterward, not something your payslip adjusts for now.",
        },
        {
          h2: "Does a higher income affect your healthcare or rent benefit?",
          p: "Benefits like healthcare allowance and rent allowance are income-dependent, so a structurally higher income as a working student can affect how much you receive, and with a significant jump, even your eligibility. That's not a penalty on working, it's simply how the benefits system is designed: it compensates less as your own income rises.",
        },
        {
          h2: "How do you avoid an unpleasant repayment later?",
          p: "Benefits are paid out based on an estimated annual income, and if you end up earning more as the year goes on, it's worth updating your income estimate with the Tax Authority as soon as that becomes clear. Skip that, and you risk having to repay a lump sum at year end instead of it being adjusted gradually along the way.",
        },
        {
          h2: "What can you do right now?",
          ul: [
            "Check via Mijn Toeslagen whether your income estimate still holds once you know roughly what you'll earn",
            "Keep your payslips, even if you switch jobs during your studies",
            "If in doubt, just ask DUO or the Tax Authority instead of guessing",
          ],
        },
        {
          h2: "Why this is relevant to VOIDS",
          p: "Confusion about benefits and tax is exactly the kind of barrier that feeds the idea that paid work alongside your studies is more complicated than it is. At VOIDS we try to lower that barrier by being upfront about it, so a fair salary actually feels like progress, not a risk.",
        },
      ],
    },
  },

  // 19 ----------------------------------------------------------------
  {
    slug: "zzp-of-werkstudent",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/mariselle-6.jpg",
    tag: { nl: "Vergelijking", en: "Comparison" },
    title: {
      nl: "ZZP of werkstudent: wat is het verschil, en wat past bij jou?",
      en: "Freelance or working student: what's the difference, and what fits you?",
    },
    excerpt: {
      nl: "Als zzp'er factureer je, als werkstudent krijg je salaris. Dat klinkt als een detail, maar het verandert wie het risico draagt, wie de zekerheid krijgt, en wat bij welke situatie past.",
      en: "As a freelancer you invoice, as a working student you get a payslip. That sounds like a detail, but it changes who carries the risk, who gets the security, and what fits which situation.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Sommige studenten en starters overwegen om als zzp'er te gaan werken in plaats van als werkstudent, vaak omdat het flexibeler klinkt. Het is inderdaad een andere constructie, maar niet automatisch een betere: het verschil zit in wie het risico draagt en wie welke zekerheid krijgt, en dat verschil is groter dan het op het eerste gezicht lijkt.",
        },
        {
          h2: "Wat is het kernverschil tussen zzp en werkstudent?",
          p: "Als werkstudent ben je in loondienst: je hebt een arbeidsovereenkomst, je werkgever houdt loonheffing in, en je bouwt rechten op zoals vakantiedagen en loondoorbetaling bij ziekte. Als zzp'er ben je zelfstandig ondernemer: je stuurt facturen, regelt zelf je belastingaangifte, en hebt geen werkgever die verantwoordelijk is voor zaken als ziekte of pensioen.",
        },
        {
          h2: "Wie draagt het risico bij ziekte of een rustige periode?",
          p: "Bij een werkstudentcontract draagt de werkgever dat risico: bij ziekte word je doorbetaald, en een slappe periode voor het bedrijf verandert niets aan je afgesproken uren en salaris binnen de looptijd van je contract. Als zzp'er draag je dat risico zelf: geen opdrachten betekent geen inkomen, en ziekte betekent in de regel geen doorbetaling, tenzij je dat zelf hebt verzekerd.",
        },
        {
          h2: "Is zzp-werk sneller geregeld dan een werkstudentcontract?",
          p: "Soms wel, en dat is precies waarom het aantrekkelijk kan lijken voor een kortlopende, afgebakende klus. Voor structureel, terugkerend werk is dat voordeel echter kleiner dan het lijkt: je mist de zekerheid van een vast salaris en de bescherming die bij een arbeidsovereenkomst hoort, terwijl het werk zelf net zo structureel is als bij een werkstudentrol.",
        },
        {
          h2: "Mag een bedrijf een werkstudentrol zomaar als zzp-opdracht aanbieden?",
          p: "Niet zonder meer. Als het werk in de praktijk structureel is, op vaste tijden plaatsvindt en onder gezag van de opdrachtgever wordt uitgevoerd, dan lijkt dat meer op een arbeidsovereenkomst dan op een zelfstandige opdracht, ongeacht wat er op papier staat. Dit is een grijs gebied waar de regels de laatste jaren zijn aangescherpt, dus check bij twijfel de actuele regelgeving of vraag advies voordat je een zzp-constructie aangaat voor iets dat eigenlijk op een gewone baan lijkt.",
        },
        {
          h2: "Wanneer past zzp dan wel goed bij een student of starter?",
          ul: [
            "Bij losse, kortlopende opdrachten zonder vaste uren of vaste werktijden",
            "Als je bewust kiest voor de vrijheid om meerdere opdrachtgevers tegelijk te hebben",
            "Als je de administratieve kant, van facturen tot belastingaangifte, aankunt naast je studie",
          ],
        },
        {
          h2: "Waarom VOIDS de voorkeur geeft aan het werkstudentmodel",
          p: "Voor structureel, relevant werk naast een studie geeft VOIDS de voorkeur aan een werkstudentcontract boven een zzp-constructie, precies omdat het de zekerheid biedt die bij deze levensfase past: een vast salaris, opgebouwde rechten, en geen risico dat een rustige maand voor het bedrijf meteen je eigen inkomen raakt.",
        },
      ],
      en: [
        {
          p: "Some students and starters consider working as a freelancer instead of a working student, often because it sounds more flexible. It is a different setup, but not automatically a better one: the difference lies in who carries the risk and who gets which security, and that difference is bigger than it looks at first glance.",
        },
        {
          h2: "What's the core difference between freelancing and being a working student?",
          p: "As a working student, you're an employee: you have an employment contract, your employer withholds payroll tax, and you build up rights like vacation days and paid sick leave. As a freelancer, you're self-employed: you send invoices, handle your own tax filing, and have no employer responsible for things like illness or pension.",
        },
        {
          h2: "Who carries the risk during illness or a quiet period?",
          p: "Under a working-student contract, the employer carries that risk: you get paid during illness, and a slow patch for the business doesn't change your agreed hours or pay within the term of your contract. As a freelancer, you carry that risk yourself: no assignments means no income, and illness generally means no continued pay unless you've insured yourself for it.",
        },
        {
          h2: "Is freelance work quicker to arrange than a working-student contract?",
          p: "Sometimes, and that's exactly why it can look appealing for a short, bounded piece of work. For structural, recurring work, though, that advantage is smaller than it looks: you miss the security of a fixed salary and the protections that come with an employment contract, while the work itself is just as structural as a working-student role.",
        },
        {
          h2: "Can a company just offer a working-student role as a freelance gig instead?",
          p: "Not without limits. If the work is structural in practice, happens on fixed hours, and is carried out under the client's direction, it looks more like an employment relationship than an independent assignment, whatever the paperwork says. This is a grey area where the rules have tightened in recent years, so check the current regulations or get advice if in doubt before entering a freelance setup for something that really looks like a regular job.",
        },
        {
          h2: "So when does freelancing genuinely fit a student or starter?",
          ul: [
            "For loose, short-term assignments without fixed hours or fixed working times",
            "When you deliberately want the freedom to work for multiple clients at once",
            "When you can handle the admin side, from invoices to tax filing, alongside your studies",
          ],
        },
        {
          h2: "Why VOIDS prefers the working-student model",
          p: "For structural, relevant work alongside a degree, VOIDS prefers a working-student contract over a freelance setup, precisely because it offers the security that fits this stage of life: a fixed salary, accrued rights, and no risk that a quiet month for the business hits your own income directly.",
        },
      ],
    },
  },

  // 20 ----------------------------------------------------------------
  {
    slug: "nulurencontract-vs-werkstudentcontract",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/mariselle-5.jpg",
    tag: { nl: "Vergelijking", en: "Comparison" },
    title: {
      nl: "0-urencontract vs. werkstudentcontract: wat is het verschil?",
      en: "Zero-hours contract vs. working-student contract: what's the difference?",
    },
    excerpt: {
      nl: "Een 0-urencontract geeft geen enkele zekerheid over inkomen of rooster. Een werkstudentcontract wel. Wat dat in de praktijk betekent, en waarom het verschil groter is dan het klinkt.",
      en: "A zero-hours contract offers no certainty at all over income or schedule. A working-student contract does. What that means in practice, and why the gap is bigger than it sounds.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen juridisch advies. Beide contractvormen worden weleens door elkaar gebruikt in vacatureteksten, maar een 0-urencontract en een werkstudentcontract zijn fundamenteel verschillend, met name in hoeveel zekerheid je krijgt over inkomen en rooster.",
        },
        {
          h2: "Wat is een 0-urencontract precies?",
          p: "Een 0-urencontract, ook wel oproepovereenkomst genoemd, betekent dat er geen vast aantal uren is afgesproken: je werkt en wordt betaald alleen als je wordt opgeroepen. Er is geen garantie op een minimum aantal uren per week of per maand, wat het voor jou lastig maakt om te plannen, zowel financieel als rond je studie.",
        },
        {
          h2: "Wat is dan het verschil met een werkstudentcontract?",
          p: "Een goed werkstudentcontract werkt met een vast aantal uren per week, of op zijn minst een duidelijke bandbreedte, in plaats van losse oproepen. Dat betekent dat je vooraf weet wat je gaat verdienen en wanneer je wordt verwacht, met ruimte om dat rond tentamens tijdelijk aan te passen in onderling overleg, niet doordat je simpelweg niet wordt opgeroepen.",
        },
        {
          h2: "Moet een werkgever je van tevoren informeren bij een oproepcontract?",
          p: "Ja, bij een oproepovereenkomst geldt een wettelijke oproeptermijn: je moet in de regel minstens vier dagen van tevoren worden opgeroepen. Wordt een oproep binnen die termijn ingetrokken of gewijzigd, dan behoud je meestal recht op loon over de oorspronkelijk afgesproken uren. Die bescherming bestaat, maar lost niet het achterliggende probleem op: je weet nog steeds pas kort van tevoren of en hoeveel je werkt.",
        },
        {
          h2: "Heb je na verloop van tijd recht op vaste uren bij een oproepcontract?",
          p: "Ja, na twaalf maanden op een oproepcontract is een werkgever wettelijk verplicht om een contract met een vast aantal uren aan te bieden, gebaseerd op het gemiddelde dat je in dat jaar hebt gewerkt. Dat is een goede stok achter de deur, maar betekent ook dat je een vol jaar met onzekerheid overbrugt voordat die zekerheid er is.",
        },
        {
          h2: "Waarom is een 0-urencontract voor de meeste werkstudentrollen ongeschikt?",
          ul: [
            "Geen zekerheid over inkomen maakt het combineren met studiekosten en huur onnodig lastig",
            "Geen vast rooster maakt het moeilijk om werk structureel in te plannen rond colleges en tentamens",
            "Structureel terugkerend werk past sowieso beter bij een vast aantal uren dan bij losse oproepen",
          ],
        },
        {
          h2: "Waarom VOIDS werkt met vaste uren",
          p: "Bij VOIDS matchen we op werkstudentrollen met een vast aantal uren per week, juist omdat onzekerheid over inkomen en rooster niet hoort bij wat een werkstudentbaan zou moeten zijn: een stabiele, betaalde basis naast je studie, geen wachten op de telefoon.",
        },
      ],
      en: [
        {
          p: "This article is general information, not legal advice. The two contract types sometimes get used loosely in job postings, but a zero-hours contract and a working-student contract are fundamentally different, especially in how much certainty they give you over income and schedule.",
        },
        {
          h2: "What exactly is a zero-hours contract?",
          p: "A zero-hours contract, also called an on-call agreement, means no fixed number of hours has been agreed: you only work and get paid when you're called in. There's no guarantee of a minimum number of hours per week or month, which makes it hard to plan around, both financially and alongside your studies.",
        },
        {
          h2: "So what's the difference with a working-student contract?",
          p: "A good working-student contract runs on a fixed number of hours per week, or at least a clear range, instead of loose call-ins. That means you know in advance what you'll earn and when you're expected in, with room to adjust that temporarily around exams by mutual agreement, not simply because you weren't called in.",
        },
        {
          h2: "Does an employer have to give notice before calling you in?",
          p: "Yes, an on-call agreement carries a statutory notice period: as a rule, you must be called in at least four days in advance. If a call-in is cancelled or changed within that window, you generally keep the right to pay for the originally agreed hours. That protection exists, but it doesn't fix the underlying problem: you still only know shortly in advance whether, and how much, you'll be working.",
        },
        {
          h2: "Do you eventually get a right to fixed hours on an on-call contract?",
          p: "Yes, after twelve months on an on-call contract, an employer is legally required to offer a contract with a fixed number of hours, based on the average you worked over that year. That's a useful backstop, but it also means bridging a full year of uncertainty before that security kicks in.",
        },
        {
          h2: "Why is a zero-hours contract unsuited to most working-student roles?",
          ul: [
            "No income certainty makes it unnecessarily hard to combine with study costs and rent",
            "No fixed schedule makes it difficult to plan work structurally around lectures and exams",
            "Structural, recurring work simply fits fixed hours better than loose call-ins",
          ],
        },
        {
          h2: "Why VOIDS works with fixed hours",
          p: "At VOIDS we match candidates into working-student roles with a fixed number of hours per week, precisely because uncertainty over income and schedule isn't what a working-student job should be: a stable, paid foundation alongside your studies, not waiting by the phone.",
        },
      ],
    },
  },

  // 21 ----------------------------------------------------------------
  {
    slug: "hoeveel-uur-mag-een-werkstudent-maximaal-werken",
    aud: "beide",
    legalTopic: true,
    photo: "/photography/blog-5.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Hoeveel uur mag een werkstudent maximaal werken?",
      en: "How many hours can a working student legally work?",
    },
    excerpt: {
      nl: "De wet stelt een harde bovengrens aan werkuren, los van wat gebruikelijk is. Wat de Arbeidstijdenwet toestaat, en waarom “gebruikelijk” en “maximaal toegestaan” twee heel andere getallen zijn.",
      en: "The law sets a hard ceiling on working hours, separate from what's typical. What the Working Hours Act allows, and why \"typical\" and \"legally maximum\" are two very different numbers.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen juridisch advies. Er is een verschil tussen hoeveel uur een werkstudent gebruikelijk werkt en hoeveel uur wettelijk maximaal is toegestaan: het eerste ligt meestal tussen de 16 en 24 uur per week, het tweede ligt via de Arbeidstijdenwet aanzienlijk hoger.",
        },
        {
          h2: "Wat is het wettelijke maximum aantal werkuren per week?",
          p: "Voor werknemers van 18 jaar en ouder geldt volgens de Arbeidstijdenwet een maximum van 60 uur in een enkele week, gemiddeld maximaal 55 uur per week over een periode van vier weken, en gemiddeld maximaal 48 uur per week over een periode van zestien weken. Daarnaast geldt een maximum van 12 uur per dienst.",
        },
        {
          h2: "Gelden er strengere regels voor werknemers onder de 18?",
          p: "Ja, voor minderjarige werknemers gelden strengere grenzen, met kortere maximale diensten en minder uren per week dan voor volwassenen. De meeste werkstudenten zijn 18 jaar of ouder, maar begin je jonger, dan is het goed om te weten dat er dan andere regels gelden.",
        },
        {
          h2: "Betekent dit dat een werkstudent 48 uur per week mag werken?",
          p: "Wettelijk gezien wel, maar dat is niet waar het werkstudentmodel voor bedoeld is. Het wettelijke maximum is een absolute bovengrens die geldt voor alle werknemers, niet een richtlijn voor wat verstandig is naast een studie. In de praktijk ligt het gebruikelijke aantal uren voor een werkstudent veel lager, meestal tussen de 16 en 24 uur per week, precies om ruimte te houden voor colleges, tentamens en studievoortgang.",
        },
        {
          h2: "Kan een cao strengere regels stellen dan de wet?",
          p: "Ja, veel sectoren hebben een cao met eigen afspraken over maximale werktijden, rusttijden en overwerk, die vaak strenger zijn dan het wettelijke minimum. Check dus niet alleen de Arbeidstijdenwet, maar ook of er een cao van toepassing is op de sector waarin je werkt.",
        },
        {
          h2: "Wat gebeurt er als je structureel meer uren maakt dan afgesproken?",
          p: "Structureel meer uren draaien dan in je contract staat, is geen automatisch wettelijk probleem zolang het binnen de grenzen van de Arbeidstijdenwet blijft, maar het is wel een signaal dat je rol qua omvang is gegroeid. Dat is precies het moment om het gesprek aan te gaan over of je contract, salaris en studiebalans nog kloppen bij wat je feitelijk doet.",
        },
        {
          h2: "Waarom VOIDS altijd binnen de gebruikelijke bandbreedte matcht",
          p: "Het wettelijk maximum is geen streefwaarde. Bij VOIDS matchen we werkstudenten binnen de 16 tot 24 uur die daadwerkelijk te combineren zijn met een studie, precies omdat het doel van een werkstudentbaan is dat beide, werk en studie, goed naast elkaar kunnen bestaan.",
        },
      ],
      en: [
        {
          p: "This article is general information, not legal advice. There's a difference between how many hours a working student typically works and how many hours are legally allowed: the former usually sits between 16 and 24 hours a week, the latter, under the Working Hours Act, is considerably higher.",
        },
        {
          h2: "What's the legal maximum number of working hours per week?",
          p: "For employees aged 18 and over, the Working Hours Act (Arbeidstijdenwet) sets a maximum of 60 hours in any single week, an average of at most 55 hours a week over any four-week period, and an average of at most 48 hours a week over any sixteen-week period. There's also a maximum of 12 hours per shift.",
        },
        {
          h2: "Do stricter rules apply to employees under 18?",
          p: "Yes, stricter limits apply to minors, with shorter maximum shifts and fewer hours per week than for adults. Most working students are 18 or older, but if you're starting younger, it's worth knowing different rules apply.",
        },
        {
          h2: "Does that mean a working student is allowed to work 48 hours a week?",
          p: "Legally, yes, but that's not what the working-student model is for. The statutory maximum is an absolute ceiling that applies to all employees, not a guideline for what's sensible alongside a degree. In practice, the typical number of hours for a working student is far lower, usually between 16 and 24 a week, precisely to leave room for lectures, exams and academic progress.",
        },
        {
          h2: "Can a collective labour agreement set stricter rules than the law?",
          p: "Yes, many sectors have a collective labour agreement (cao) with its own terms on maximum working hours, rest periods and overtime, often stricter than the statutory minimum. So check not just the Working Hours Act, but also whether a cao applies to the sector you're working in.",
        },
        {
          h2: "What happens if you're structurally working more hours than agreed?",
          p: "Consistently working more hours than your contract states isn't automatically a legal problem as long as it stays within the limits of the Working Hours Act, but it is a signal that your role has grown in scope. That's exactly the moment to raise whether your contract, pay and study balance still match what you're actually doing.",
        },
        {
          h2: "Why VOIDS always matches within the typical range",
          p: "The legal maximum isn't a target. At VOIDS we match working students into roles within the 16 to 24 hours that genuinely combine with a degree, precisely because the whole point of a working-student job is that work and studying can coexist well.",
        },
      ],
    },
  },

  // 22 ----------------------------------------------------------------
  {
    slug: "wat-verdient-een-werkstudent-gemiddeld",
    aud: "talent",
    legalTopic: true,
    photo: "/photography/mariselle-2.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Wat verdient een werkstudent gemiddeld?",
      en: "What does a working student typically earn?",
    },
    excerpt: {
      nl: "Er bestaat geen wettelijk “werkstudentsalaris”, alleen een ondergrens: het minimumloon. Wat je tarief in de praktijk bepaalt, en hoe je checkt of jouw aanbod eerlijk is.",
      en: "There's no legal \"working-student salary,\" only a floor: the minimum wage. What actually determines your rate in practice, and how to check whether your offer is fair.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Er is geen vast bedrag dat “het gemiddelde werkstudentsalaris” heet, en elke vacaturetekst die zo'n getal met veel zekerheid noemt, moet je met een korrel zout nemen. Wat er wél is: een wettelijke ondergrens, en een aantal factoren die bepalen waar jouw tarief boven die ondergrens zou moeten uitkomen.",
        },
        {
          h2: "Is er een minimumbedrag dat een werkstudent moet verdienen?",
          p: "Ja: het wettelijk minimumloon, van toepassing op iedereen van 21 jaar of ouder, met het jeugdminimumloon voor wie jonger is. Dat bedrag wordt twee keer per jaar aangepast door de overheid, per 1 januari en per 1 juli, dus check voor een actueel bedrag altijd de site van de Rijksoverheid in plaats van een verouderd getal uit een oud artikel.",
        },
        {
          h2: "Waarom verschilt het uurtarief zo sterk tussen werkstudentrollen?",
          p: "Het tarief hangt vooral af van het niveau van het werk, niet van de leeftijd of studiefase van de werkstudent. Een werkstudent die zelfstandig een deel van een proces runt, verdient logischerwijs meer dan iemand die vooral ondersteunende taken doet, net zoals dat bij fulltime functies werkt. Sector en regio spelen ook mee: een rol in finance of tech betaalt doorgaans anders dan een rol in horeca of retail.",
        },
        {
          h2: "Is een hoger aantal uren per week ook een hoger uurtarief?",
          p: "Niet per se, en dat hoort het ook niet te zijn: het uurtarief zou moeten aansluiten bij het werk, niet bij het aantal uren dat je toevallig beschikbaar bent. Wel geldt: naarmate je uren richting fulltime groeien en je rol qua verantwoordelijkheid meegroeit, hoort het tarief daarin mee te bewegen.",
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
          p: "Een landelijk gemiddelde zegt weinig over jouw situatie, omdat het sector, regio en type werk door elkaar husselt. Een gemiddelde over alle werkstudentrollen in Nederland zegt evenveel over jouw aanbod als het gemiddelde inkomen in Nederland zegt over jouw eigen salaris: bijna niets, tenzij je precies weet wat er in dat gemiddelde zit.",
        },
        {
          h2: "Waarom VOIDS hier geen genoegen mee neemt",
          p: "Bij VOIDS kijken we per rol naar wat eerlijk is gegeven het werk, niet naar een landelijk gemiddelde dat toevallig laag genoeg uitkomt om als excuus te dienen. Een eerlijk tarief is een tarief dat het werk volgt, niet de status “student”.",
        },
      ],
      en: [
        {
          p: "There's no fixed figure called \"the average working-student salary,\" and any job posting that states one with a lot of confidence should be taken with a grain of salt. What does exist: a statutory floor, and a handful of factors that determine where your rate should sit above that floor.",
        },
        {
          h2: "Is there a minimum amount a working student has to earn?",
          p: "Yes: the statutory minimum wage, which applies to everyone aged 21 and over, with the youth minimum wage for those younger. That figure is updated twice a year by the government, on 1 January and 1 July, so always check the government's own site for the current amount rather than an outdated number from an old article.",
        },
        {
          h2: "Why does the hourly rate vary so much between working-student roles?",
          p: "The rate mostly depends on the level of the work, not on the age or study stage of the working student. Someone independently running part of a process naturally earns more than someone mainly doing supporting tasks, the same way it works in full-time roles. Sector and region play a part too: a role in finance or tech typically pays differently than one in hospitality or retail.",
        },
        {
          h2: "Does more hours per week also mean a higher hourly rate?",
          p: "Not necessarily, and it shouldn't be: the hourly rate should track the work, not how many hours you happen to be available. That said, as your hours grow toward full-time and your responsibilities grow alongside them, the rate should move with it.",
        },
        {
          h2: "How do you check whether an offered rate is fair?",
          ul: [
            "Compare it to the statutory minimum wage: is it just above it, or clearly above it?",
            "Ask what a comparable junior colleague on a full-time contract earns per hour",
            "Look at the nature of the work: independent responsibility warrants a higher rate than purely supporting tasks",
            "Be wary of a rate that stays at or just above minimum wage regardless of how the work grows in practice",
          ],
        },
        {
          h2: "Why a \"national average\" isn't a useful benchmark",
          p: "A nationwide average tells you little about your own situation, because it blends together every sector, region and type of work. An average across every working-student role in the Netherlands tells you about as much about your own offer as the average income in the Netherlands tells you about your own salary: almost nothing, unless you know exactly what's baked into that average.",
        },
        {
          h2: "Why VOIDS doesn't settle for this",
          p: "At VOIDS we look at what's fair per role given the actual work, not at a national average that happens to be low enough to serve as an excuse. A fair rate is one that follows the work, not the status of \"student.\"",
        },
      ],
    },
  },

  // 23 ----------------------------------------------------------------
  {
    slug: "werkstudent-worden-zonder-ervaring",
    aud: "talent",
    photo: "/photography/blog-6.jpg",
    tag: { nl: "Gids", en: "Guide" },
    title: {
      nl: "Werkstudent worden zonder ervaring: kan dat?",
      en: "Becoming a working student with no experience: is it possible?",
    },
    excerpt: {
      nl: "Ja, de meeste werkstudentrollen zijn juist bedoeld als eerste stap. Wat bedrijven écht zoeken als ze “ervaring” vragen, en hoe je zonder cv-regels toch overtuigt.",
      en: "Yes, most working-student roles are specifically designed as a first step. What companies actually mean by \"experience,\" and how to convince them without a CV full of it.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "“Minimaal 1 jaar relevante ervaring” in een vacature voor een werkstudentrol is een van de meest ontmoedigende zinnen die je als student kunt tegenkomen, en gelukkig ook een van de meest misleidende. De meeste werkstudentrollen zijn juist bedoeld als eerste stap in een vakgebied, niet als vervolgstap na ervaring die je nog niet kunt hebben.",
        },
        {
          h2: "Kun je werkstudent worden zonder relevante werkervaring?",
          p: "Ja, en dat is bij de meeste werkstudentrollen ook de bedoeling. Een werkstudentrol is er juist om iemand de eerste relevante ervaring in een vakgebied te laten opdoen, niet om al ervaren mensen tijdelijk parttime in te huren. Wat bedrijven eigenlijk zoeken, is iemand die snel leert en zelfstandig aan de slag kan, niet per se iemand die het werk al kent.",
        },
        {
          h2: "Wat bedoelen bedrijven dan echt met “ervaring gewenst”?",
          p: "Vaak minder specifiek dan het klinkt: geen letterlijke werkervaring in exact dezelfde functie, maar een signaal dat iemand al iets heeft gedaan dat laat zien hoe diegene werkt. Een studievereniging waarin je verantwoordelijkheid droeg, een project waarin je iets van nul af aan opzette, of een bijbaan waarin je zelfstandig problemen oploste, telt vaak net zo goed mee als een stage in exact dezelfde sector.",
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
          p: "Focus op wie je bent en hoe je werkt, niet op een lijst functies die je nog niet hebt gehad. Twee of drie concrete situaties die laten zien hoe je omgaat met verantwoordelijkheid, tegenslag of een deadline, zeggen meer dan een cv vol lege regels die je erbij hebt verzonnen om het compleet te laten lijken.",
        },
        {
          h2: "Moet je dan maar elke werkstudentvacature negeren die “ervaring” vraagt?",
          p: "Nee, solliciteer gewoon. Veel vacatureteksten zijn geschreven met een ideaalbeeld in het achterhoofd, niet met een harde eis. Vooral bij kleinere bedrijven en scale-ups weegt een goede match op karakter en motivatie vaak zwaarder dan een exacte match op ervaringseisen die toch bedoeld waren als richtlijn, niet als drempel.",
        },
        {
          h2: "Waarom VOIDS niet op cv-regels selecteert",
          p: "Bij VOIDS matchen we op karakter en drijfveren, niet op wie toevallig al een stage bij een bekend bedrijf heeft gehad. Dat is niet alleen eerlijker, het is ook een betere voorspeller van of iemand in een rol gaat gedijen, juist omdat de meeste werkstudenten nog aan het begin van hun werkzame leven staan.",
        },
      ],
      en: [
        {
          p: "\"At least 1 year of relevant experience\" in a job posting for a working-student role is one of the most discouraging sentences a student can come across, and thankfully also one of the most misleading. Most working-student roles exist specifically as a first step into a field, not as the step after experience you couldn't possibly have yet.",
        },
        {
          h2: "Can you become a working student with no relevant experience?",
          p: "Yes, and for most working-student roles, that's exactly the point. A working-student role exists to give someone their first relevant experience in a field, not to temporarily hire already-experienced people part-time. What companies are really looking for is someone who learns fast and can work independently, not necessarily someone who already knows the job.",
        },
        {
          h2: "What do companies actually mean by \"experience preferred\"?",
          p: "Often less specific than it sounds: not literal work experience in the exact same role, but a signal that someone has already done something that shows how they work. Responsibility within a student association, a project you built from scratch, or a side job where you solved problems independently often counts just as much as an internship in the exact same sector.",
        },
        {
          h2: "What can you show if you haven't had a relevant internship or job?",
          ul: [
            "Responsibilities within a student association, committee, or sports club",
            "A project you set up independently, even a small one",
            "Volunteer work that involved people or deadlines",
            "Concrete situations where you solved a problem, even outside a work context",
          ],
        },
        {
          h2: "How do you write a match profile if you don't have much to show yet?",
          p: "Focus on who you are and how you work, not a list of roles you haven't had yet. Two or three concrete situations that show how you handle responsibility, setbacks or a deadline say more than a CV padded with vague lines just to make it look complete.",
        },
        {
          h2: "So should you just skip every working-student posting that asks for experience?",
          p: "No, apply anyway. Many job postings are written with an ideal candidate in mind, not a hard requirement. Especially at smaller companies and scale-ups, a strong match on character and motivation often outweighs an exact match on experience requirements that were meant as a guideline, not a gate.",
        },
        {
          h2: "Why VOIDS doesn't select on CV checkboxes",
          p: "At VOIDS we match on character and motivation, not on who happened to already have an internship at a well-known company. That's not just fairer, it's also a better predictor of whether someone will thrive in a role, precisely because most working students are still at the very start of their working life.",
        },
      ],
    },
  },

  // 24 ----------------------------------------------------------------
  {
    slug: "hoe-kies-je-een-sector-als-student",
    aud: "talent",
    photo: "/photography/blog-8.jpg",
    tag: { nl: "Carrière", en: "Career" },
    title: {
      nl: "Hoe kies je een sector als je nog geen idee hebt wat je wilt?",
      en: "How do you pick a sector when you have no idea what you want?",
    },
    excerpt: {
      nl: "“Wat wil je later worden” is de verkeerde vraag. Een praktische manier om een richting te vinden zonder dat je die richting meteen voor altijd hoeft vast te leggen.",
      en: "\"What do you want to become\" is the wrong question. A practical way to find a direction without having to lock it in forever.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "“Wat wil je later worden” is een van de meest gestelde en minst nuttige vragen die een student kan krijgen. Het veronderstelt dat er één goed antwoord bestaat, terwijl de meeste mensen pas ontdekken wat bij ze past door het te proberen, niet door erover na te denken op de bank.",
        },
        {
          h2: "Moet je je sector kiezen voordat je gaat werken?",
          p: "Nee, en dat is precies waar de druk vandaan komt die de meeste studenten voelen. Je hoeft geen definitieve keuze te maken voordat je begint met werken: een werkstudentrol is juist een lagedrempelige manier om een sector te verkennen zonder je er meteen voor jaren aan te binden.",
        },
        {
          h2: "Waar begin je als je echt geen idee hebt?",
          p: "Begin niet bij sectoren, begin bij wat voor werk je energie geeft: cijfers doorgronden, mensen overtuigen, dingen bouwen, structuur aanbrengen in chaos, creatief bezig zijn. Die drijfveer vertaalt zich naar meerdere sectoren tegelijk. Iemand die energie krijgt van structuur aanbrengen, kan net zo goed gedijen in finance als in operations of projectmanagement.",
        },
        {
          h2: "Is uitproberen echt beter dan erover nadenken?",
          p: "Ja, in de meeste gevallen wel. Een paar maanden daadwerkelijk in een sector werken vertelt je meer over of het bij je past dan weken aan onderzoek en gesprekken vooraf. Je ontdekt dingen die je van tevoren niet had kunnen weten: hoe het tempo aanvoelt, wat voor mensen er werken, welk deel van het werk je juist niet leuk vindt.",
        },
        {
          h2: "Wat als je erachter komt dat een sector toch niet bij je past?",
          p: "Dat is geen verspilde tijd, dat is precies de informatie die je zocht. Een werkstudentrol van een jaar in een sector die uiteindelijk niet past, levert nog steeds relevante werkervaring, vaardigheden en een netwerk op, en scheelt je de veel duurdere fout om daar pas na afstuderen en een fulltime contract achter te komen.",
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
          h2: "Waarom dit precies is waar VOIDS bij helpt",
          p: "Een matchprofiel dat kijkt naar wie je bent en wat je drijft, in plaats van naar een sector die je toevallig al had genoemd, is precies bedoeld om deze verkenning makkelijker te maken. Je hoeft niet te weten wat je wilt worden, je hoeft alleen te weten wat voor werk je energie geeft, en de rest volgt.",
        },
      ],
      en: [
        {
          p: "\"What do you want to become\" is one of the most commonly asked and least useful questions a student can get. It assumes there's one right answer, when most people only discover what fits them by trying it, not by thinking about it on the couch.",
        },
        {
          h2: "Do you have to pick your sector before you start working?",
          p: "No, and that's exactly where most of the pressure students feel comes from. You don't have to make a final choice before you start working: a working-student role is a low-stakes way to explore a sector without committing to it for years right away.",
        },
        {
          h2: "Where do you start if you genuinely have no idea?",
          p: "Don't start with sectors, start with what kind of work gives you energy: digging into numbers, convincing people, building things, bringing structure to chaos, working creatively. That drive translates across multiple sectors at once. Someone who gets energy from bringing structure can thrive just as well in finance as in operations or project management.",
        },
        {
          h2: "Is actually trying it out really better than thinking it through?",
          p: "Yes, in most cases. A few months actually working in a sector tells you more about whether it fits than weeks of research and conversations beforehand. You discover things you couldn't have known in advance: how the pace feels, what kind of people work there, which part of the work you actually dislike.",
        },
        {
          h2: "What if you find out a sector doesn't fit you after all?",
          p: "That's not wasted time, that's exactly the information you were looking for. A year-long working-student role in a sector that turns out not to fit still delivers relevant experience, skills, and a network, and it saves you the far more expensive mistake of finding that out only after graduating into a full-time contract.",
        },
        {
          h2: "How do you make that exploration concrete?",
          ul: [
            "Choose a working-student role based on the kind of work, not just the sector's name",
            "Talk to people already doing the work, and ask about their daily reality, not just their job title",
            "Give yourself permission to change direction after a year if it turns out not to fit",
            "Watch for patterns: what kind of tasks give you energy, regardless of which sector you find them in",
          ],
        },
        {
          h2: "Why this is exactly what VOIDS helps with",
          p: "A match profile that looks at who you are and what drives you, instead of a sector you happened to mention once, exists precisely to make this exploration easier. You don't need to know what you want to become, you just need to know what kind of work gives you energy, and the rest follows.",
        },
      ],
    },
  },

  // 25 ----------------------------------------------------------------
  {
    slug: "bedrijfscultuur-herkennen-in-een-sollicitatiegesprek",
    aud: "talent",
    photo: "/photography/mariselle-9.jpg",
    tag: { nl: "Gids", en: "Guide" },
    title: {
      nl: "Hoe herken je bedrijfscultuur tijdens een sollicitatiegesprek?",
      en: "How do you spot company culture during a job interview?",
    },
    excerpt: {
      nl: "Een gesprek is geen eenrichtingsverkeer. Concrete signalen, en concrete vragen om te stellen, om te zien of een cultuur echt is zoals de vacaturetekst belooft.",
      en: "An interview isn't one-way traffic. Concrete signals to look for, and concrete questions to ask, to see whether a culture is really what the job posting promises.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Een sollicitatiegesprek wordt vaak gezien als een test die jij moet doorstaan, terwijl het net zo goed een kans is om zelf te testen of een bedrijf bij jou past. Bedrijfscultuur laat zich niet aflezen aan een vacaturetekst vol woorden als “informele sfeer” en “platte organisatie”, die zeggen namelijk vrijwel niets. Wel te herkennen aan een paar concrete signalen tijdens het gesprek zelf.",
        },
        {
          h2: "Kun je bedrijfscultuur echt beoordelen in één gesprek van dertig minuten?",
          p: "Volledig niet, maar gedeeltelijk zeker wel. Je krijgt geen compleet beeld, maar wel signalen: hoe mensen over collega's praten, hoe ze reageren op een kritische vraag, of het gesprek een gesprek is of een eenrichtingsverhoor. Die signalen zijn niet doorslaggevend, maar wel betrouwbaarder dan de marketingtaal op de website.",
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
          p: "Vraag niet “hoe is de cultuur hier”, want dat levert bijna altijd een gerepeteerd antwoord op. Vraag in plaats daarvan naar iets concreets: “Wat deed de laatste werkstudent hier precies in de eerste maand?”, of “Kun je een moment noemen waarop iets niet volgens plan liep, en hoe ging het team daarmee om?”. Concrete vragen dwingen concrete antwoorden af, in plaats van marketingzinnen.",
        },
        {
          h2: "Wat betekent het als een bedrijf geen concreet antwoord kan geven?",
          p: "Dat is zelf al een signaal. Een bedrijf dat een werkstudentrol serieus heeft nagedacht, kan zo vertellen hoe de eerste maand eruitziet, wie het aanspreekpunt is en wat een normale werkweek behelst. Blijft het antwoord vaag, dan is de kans groter dat de rol zelf ook nog niet goed is uitgedacht, ongeacht hoe leuk de vacaturetekst klinkt.",
        },
        {
          h2: "Hoe zwaar moet je een sollicitatiegesprek laten meewegen ten opzichte van reviews of via via informatie?",
          p: "Combineer het liever dan dat je op één bron vertrouwt. Een gesprek geeft je een directe indruk, reviews geven je een patroon over tijd, en iemand die er al werkt of heeft gewerkt geeft je het meest eerlijke beeld. Geen van de drie is compleet op zichzelf, maar samen geven ze een veel realistischer plaatje dan de vacaturetekst alleen.",
        },
        {
          h2: "Waarom VOIDS matcht op meer dan een vacaturetekst",
          p: "Bij VOIDS kennen we de bedrijven waarmee we werken, niet alleen via hun vacaturetekst maar via het daadwerkelijke contact met teams en oprichters. Dat betekent dat je bij een match via VOIDS al een realistischer beeld hebt van een cultuur voordat het gesprek zelfs maar begint.",
        },
      ],
      en: [
        {
          p: "A job interview is often seen as a test you have to pass, when it's just as much a chance to test whether a company fits you. Company culture doesn't show up in a job posting full of words like \"informal atmosphere\" and \"flat organisation,\" which say almost nothing on their own. It does show up in a handful of concrete signals during the conversation itself.",
        },
        {
          h2: "Can you really judge company culture in one thirty-minute interview?",
          p: "Not completely, but partially, yes. You won't get a full picture, but you will get signals: how people talk about colleagues, how they react to a critical question, whether the conversation actually goes both ways or turns into a one-sided interrogation. Those signals aren't conclusive, but they're more reliable than the marketing language on the website.",
        },
        {
          h2: "What concrete signals should you look for during the interview?",
          ul: [
            "Does the interviewer talk about the team with genuine enthusiasm, or mostly in general, rehearsed terms?",
            "Do they describe what a normal working day or week actually looks like, or does it stay at abstract words like \"dynamic\"?",
            "Is there room for your questions, or does the conversation feel one-sided?",
            "Does the interviewer respond calmly to a critical question, or does it feel evasive?",
          ],
        },
        {
          h2: "What questions get you past the standard answers?",
          p: "Don't ask \"what's the culture like here,\" because that almost always gets you a rehearsed answer. Ask something concrete instead: \"What did the last working student here actually do in their first month?\" or \"Can you tell me about a time something didn't go to plan, and how the team handled it?\" Concrete questions force concrete answers, instead of marketing lines.",
        },
        {
          h2: "What does it mean if a company can't give a concrete answer?",
          p: "That's a signal in itself. A company that's genuinely thought through a working-student role can tell you what the first month looks like, who the point of contact is, and what a normal working week involves. If the answer stays vague, there's a good chance the role itself hasn't been properly thought through either, however good the job posting sounds.",
        },
        {
          h2: "How much weight should an interview carry against reviews or word of mouth?",
          p: "Combine them rather than trusting one source alone. An interview gives you a direct impression, reviews give you a pattern over time, and someone who already works or has worked there gives you the most honest picture. None of the three is complete on its own, but together they paint a far more realistic picture than the job posting alone.",
        },
        {
          h2: "Why VOIDS matches on more than a job posting",
          p: "At VOIDS we know the companies we work with, not just through their job posting but through direct contact with teams and founders. That means that with a match through VOIDS, you already have a more realistic picture of a culture before the interview even starts.",
        },
      ],
    },
  },

  // 26 ----------------------------------------------------------------
  {
    slug: "van-werkstudent-naar-vaste-baan",
    aud: "talent",
    photo: "/photography/blog-7.jpg",
    tag: { nl: "Carrière", en: "Career" },
    title: {
      nl: "Van werkstudent naar vaste baan: hoe pak je die overstap aan?",
      en: "From working student to permanent job: how do you make that jump?",
    },
    excerpt: {
      nl: "Veel werkstudenten stromen door bij hetzelfde bedrijf, maar dat gaat niet vanzelf. Wat je zelf kunt doen om van tijdelijke rol naar starterscontract te gaan, en wanneer je beter ergens anders kunt kijken.",
      en: "Plenty of working students move into a permanent role at the same company, but it doesn't happen automatically. What you can do to move from a temporary role to a starter contract, and when you're better off looking elsewhere.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Een van de grootste voordelen van een werkstudentrol is dat afstuderen niet per se betekent dat je weer bij nul begint met solliciteren. Veel bedrijven bieden een werkstudent die goed heeft gefunctioneerd gewoon een starterscontract aan. Dat gebeurt alleen niet automatisch: het is iets waar je zelf actief op kunt sturen.",
        },
        {
          h2: "Stromen werkstudenten automatisch door naar een vaste baan?",
          p: "Nee, niet automatisch, maar wel vaak, en zeker vaker dan bij een reguliere externe sollicitatie. Een bedrijf dat al maanden of jaren met je heeft gewerkt, hoeft geen inschattingsrisico meer te nemen: ze weten al hoe je werkt, wat je kan en of je bij het team past. Die informatie is precies wat een externe sollicitatieprocedure probeert te achterhalen in een paar gesprekken.",
        },
        {
          h2: "Wanneer breng je het gesprek over doorstroom het beste ter sprake?",
          p: "Eerder dan je zou denken, en zeker niet pas in de laatste maand van je studie. Breng het gesprek zes tot negen maanden voor je afstudeert al ter sprake, zodat een bedrijf de tijd heeft om budget en een rol te plannen, in plaats van dat je pas vlak voor je diploma vraagt of er iets vasts mogelijk is.",
        },
        {
          h2: "Wat kun je zelf doen om je kansen te vergroten?",
          ul: [
            "Vraag actief om meer verantwoordelijkheid naarmate je langer meedraait, in plaats van te wachten tot het je wordt aangeboden",
            "Maak je bijdrage zichtbaar: leg vast wat je hebt opgepakt en welk resultaat dat heeft opgeleverd",
            "Wees duidelijk over je eigen tijdlijn, zodat een bedrijf niet wordt overvallen door je afstuderen",
            "Vraag concreet naar het traject: is doorstroom naar een vast contract iets wat dit bedrijf eerder heeft gedaan, en hoe zag dat eruit?",
          ],
        },
        {
          h2: "Wat als een bedrijf geen concreet aanbod doet?",
          p: "Vraag er dan gewoon naar in plaats van te blijven wachten. Sommige bedrijven denken pas na over een vast contract als iemand er expliciet naar vraagt, simpelweg omdat het er nog niet was ingepland. Krijg je een duidelijk “nee” of blijft het antwoord vaag, dan is dat waardevolle informatie: begin op tijd elders te kijken, in plaats van te wachten tot je studie al is afgerond.",
        },
        {
          h2: "Is doorstromen bij hetzelfde bedrijf altijd de beste keuze?",
          p: "Niet per se. Doorstromen bespaart wervingstijd en onzekerheid, maar is alleen een goede keuze als de rol ook daadwerkelijk groeit in verantwoordelijkheid en salaris. Een “vast contract” dat verder identiek is aan je werkstudentrol, alleen met meer uren, is geen promotie, het is dezelfde baan met een langere werkweek.",
        },
        {
          h2: "Waarom VOIDS deze overstap ook na je studie blijft volgen",
          p: "Bij VOIDS eindigt een match niet zodra je bent geplaatst: we blijven contact houden, ook richting het einde van je studie, precies om dit soort gesprekken op tijd te kunnen voeren in plaats van pas wanneer het al te laat is.",
        },
      ],
      en: [
        {
          p: "One of the biggest advantages of a working-student role is that graduating doesn't necessarily mean starting the job search from zero. Plenty of companies simply offer a working student who's performed well a starter contract. It just doesn't happen automatically: it's something you can actively steer.",
        },
        {
          h2: "Do working students automatically move into a permanent job?",
          p: "No, not automatically, but often, and certainly more often than through a regular external application. A company that's already worked with you for months or years no longer has to take a guess: they already know how you work, what you can do, and whether you fit the team. That's exactly the information an external hiring process is trying to figure out in a couple of interviews.",
        },
        {
          h2: "When's the best time to raise the conversation about moving to a permanent role?",
          p: "Earlier than you'd think, and definitely not just in your final month of studying. Bring it up six to nine months before graduating, so the company has time to plan budget and a role, rather than you asking whether something permanent is possible right before you get your diploma.",
        },
        {
          h2: "What can you do yourself to improve your odds?",
          ul: [
            "Actively ask for more responsibility the longer you're there, instead of waiting for it to be offered",
            "Make your contribution visible: keep track of what you've taken on and what it delivered",
            "Be clear about your own timeline, so the company isn't caught off guard by your graduation",
            "Ask directly about the process: has this company moved working students into permanent roles before, and what did that look like?",
          ],
        },
        {
          h2: "What if a company doesn't make a concrete offer?",
          p: "Just ask directly instead of waiting it out. Some companies only think about a permanent contract once someone explicitly asks, simply because it wasn't already on their radar. If you get a clear \"no\" or the answer stays vague, that's valuable information: start looking elsewhere in good time, rather than waiting until your degree is already finished.",
        },
        {
          h2: "Is staying at the same company always the best choice?",
          p: "Not necessarily. Staying saves you job-search time and uncertainty, but it's only a good choice if the role genuinely grows in responsibility and pay too. A \"permanent contract\" that's otherwise identical to your working-student role, just with more hours, isn't a promotion, it's the same job with a longer week.",
        },
        {
          h2: "Why VOIDS keeps tracking this transition even after your studies",
          p: "At VOIDS, a match doesn't end once you're placed: we stay in touch, including as your studies wind down, precisely so these conversations can happen on time instead of when it's already too late.",
        },
      ],
    },
  },

  // 27 ----------------------------------------------------------------
  {
    slug: "kosten-werkstudent-vs-starter",
    aud: "bedrijf",
    legalTopic: true,
    photo: "/photography/mariselle-3.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Wat kost een werkstudent vergeleken met een fulltime starter?",
      en: "What does a working student cost compared to a full-time starter?",
    },
    excerpt: {
      nl: "Minder salaris is niet het hele verhaal: ook werkgeverslasten en risico verschillen. Een eerlijke rekensom, inclusief wat een verkeerde keuze je uiteindelijk kost.",
      en: "Lower salary isn't the whole story: employer costs and risk differ too. A fair breakdown, including what the wrong choice ends up costing you.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "“Een werkstudent is goedkoper dan een starter” klopt, maar zegt niet het hele verhaal. Het verschil zit niet alleen in het salaris, maar ook in werkgeverslasten, flexibiliteit en risico, en juist die factoren bepalen of een werkstudent voor jouw situatie daadwerkelijk de goedkopere optie is, of alleen op papier.",
        },
        {
          h2: "Wat is het directe kostenverschil tussen een werkstudent en een fulltime starter?",
          p: "Het grootste verschil zit in de uren: een werkstudent op 20 uur per week kost bij een vergelijkbaar uurtarief ongeveer de helft van een fulltime starter op 40 uur, simpelweg omdat er de helft van de uren wordt gewerkt. Dat is geen korting op het uurtarief, het is minder ingekochte tijd.",
        },
        {
          h2: "Zijn de werkgeverslasten ook lager bij een werkstudent?",
          p: "Grotendeels naar rato ja, want de meeste werkgeverslasten, zoals pensioenpremies en sociale lasten, schalen mee met het salaris en dus met de gewerkte uren. Er zijn geen aparte, lagere tarieven specifiek voor werkstudenten: het is dezelfde rekensom als bij iedere parttime werknemer.",
        },
        {
          h2: "Hoe verschilt het risico tussen de twee?",
          p: "Een werkstudentcontract is doorgaans korter en flexibeler dan een starterscontract, wat het risico bij een verkeerde match kleiner maakt: je zit korter vast en de investering per persoon is lager. Een starter kost meer om aan te nemen én om weer te laten gaan als het niet werkt, met een langere opzegtermijn en vaak hogere verwachtingen van beide kanten.",
        },
        {
          h2: "Wanneer is een werkstudent eigenlijk duurder dan het lijkt?",
          p: "Als je een werkstudent onderbetaalt ten opzichte van het niveau van het werk. Een te laag tarief bespaart op papier een paar euro per uur, maar leidt tot hogere uitstroom, en dat kost je opnieuw wervings- en inwerktijd, vaak vaker dan bij een fulltime starter die minder snel weer weggaat. Reken die verborgen kosten mee voordat je concludeert dat een werkstudent per definitie de goedkopere keuze is.",
        },
        {
          h2: "Een simpele rekensom om zelf te maken",
          ul: [
            "Bereken het uurtarief los van het aantal uren: is het vergelijkbaar met wat een junior fulltime collega verdient?",
            "Tel werving- en inwerktijd mee, niet alleen het salaris zelf",
            "Reken uitstroomrisico mee: hoeveel kost het je als je twee keer per jaar opnieuw moet werven in plaats van één keer per jaar of minder",
            "Kijk naar de aard van het werk: is het structureel genoeg om op termijn een starter te rechtvaardigen, of past het beter bij minder uren voor langere tijd",
          ],
        },
        {
          h2: "Waarom dit meer is dan een kostenvraagstuk voor VOIDS",
          p: "Een werkstudent is geen goedkoop alternatief voor een starter, het is een andere manier om hetzelfde soort werk te organiseren, met een ander risicoprofiel. Bij VOIDS helpen we bedrijven die keuze goed maken, en waarschuwen we net zo hard tegen onderbetaling als tegen de verkeerde contractvorm voor het werk dat er ligt.",
        },
      ],
      en: [
        {
          p: "\"A working student is cheaper than a starter\" is true, but it's not the whole story. The difference isn't just salary, it's also employer costs, flexibility and risk, and those factors are exactly what determine whether a working student is actually the cheaper option for your situation, or only on paper.",
        },
        {
          h2: "What's the direct cost difference between a working student and a full-time starter?",
          p: "The biggest difference is in hours: a working student on 20 hours a week costs roughly half of a full-time starter on 40 hours at a comparable hourly rate, simply because half the hours are being bought. That's not a discount on the rate, it's less time purchased.",
        },
        {
          h2: "Are employer costs also lower for a working student?",
          p: "Largely proportionally, yes, because most employer costs, like pension contributions and social charges, scale with salary and therefore with hours worked. There are no separate, lower rates specifically for working students: it's the same math as for any part-time employee.",
        },
        {
          h2: "How does the risk differ between the two?",
          p: "A working-student contract is generally shorter and more flexible than a starter contract, which lowers the risk of a bad match: you're committed for less time and the investment per person is smaller. A starter costs more to hire and more to let go if it doesn't work out, with a longer notice period and often higher expectations on both sides.",
        },
        {
          h2: "When does a working student actually end up costing more than it looks?",
          p: "When you underpay a working student relative to the level of the work. A low rate saves a few euros an hour on paper, but drives higher turnover, and that costs you recruiting and onboarding time again, often more frequently than with a full-time starter who's less likely to leave quickly. Factor in that hidden cost before concluding a working student is automatically the cheaper choice.",
        },
        {
          h2: "A simple calculation to run yourself",
          ul: [
            "Work out the hourly rate separately from the number of hours: is it comparable to what a full-time junior colleague earns?",
            "Count recruiting and onboarding time, not just the salary itself",
            "Factor in turnover risk: what does it cost you to rehire twice a year instead of once a year or less",
            "Look at the nature of the work: is it structural enough to justify a starter down the line, or does it fit better as fewer hours over a longer period",
          ],
        },
        {
          h2: "Why this is more than a cost question for VOIDS",
          p: "A working student isn't a cheap substitute for a starter, it's a different way of organising the same kind of work, with a different risk profile. At VOIDS we help companies make that choice well, and we push back just as hard on underpayment as on the wrong contract type for the work at hand.",
        },
      ],
    },
  },

  // 28 ----------------------------------------------------------------
  {
    slug: "vacaturetekst-die-junior-talent-aanspreekt",
    aud: "bedrijf",
    photo: "/photography/mariselle-8.jpg",
    tag: { nl: "Gids", en: "Guide" },
    title: {
      nl: "Zo schrijf je een vacaturetekst die junior talent echt aanspreekt",
      en: "How to write a job posting that actually speaks to junior talent",
    },
    excerpt: {
      nl: "Een lijst eisen trekt geen goede kandidaten aan, het schrikt ze af. Wat wél werkt in een vacaturetekst voor werkstudenten en starters, met concrete voorbeelden.",
      en: "A list of requirements doesn't attract good candidates, it scares them off. What actually works in a job posting for working students and starters, with concrete examples.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "De meeste vacatureteksten voor junior rollen zijn geschreven alsof ze voor een senior functie zijn: een lange lijst eisen, vage bedrijfsomschrijvingen en een functietitel die weinig zegt. Junior talent, en zeker Gen Z, leest daar snel overheen. Wat wel werkt, is een tekst die laat zien wat het werk daadwerkelijk inhoudt en wie erachter zit.",
        },
        {
          h2: "Waarom werkt een lange eisenlijst averechts bij junior vacatures?",
          p: "Onderzoek naar sollicitatiegedrag laat consistent zien dat kandidaten, en vrouwen relatief vaker dan mannen, afhaken als ze niet aan alle genoemde eisen voldoen, ook als die eisen eigenlijk “fijn om te hebben” waren in plaats van een harde grens. Bij een junior rol, waar per definitie nog weinig ervaring wordt verwacht, is een lange lijst eisen dus vooral een filter die de verkeerde mensen wegjaagt.",
        },
        {
          h2: "Wat moet er in plaats van een eisenlijst centraal staan?",
          p: "Beschrijf het werk zelf: wat doet iemand in een gewone week, met wie werkt diegene samen, en wat voor besluiten mag iemand na een paar maanden zelfstandig nemen. Dat is precies de informatie die een kandidaat nodig heeft om te beoordelen of de rol past, en het is ook precies de informatie die de meeste vacatureteksten overslaan.",
        },
        {
          h2: "Hoe specifiek moet een vacaturetekst zijn over salaris en uren?",
          p: "Zo specifiek mogelijk. Een tekst die salaris en uren vaag laat, wekt de indruk dat er iets te verbergen valt, en junior kandidaten die al gewend zijn aan onduidelijke bijbanen prikken daar snel doorheen. Noem een concreet uurtarief of een duidelijke bandbreedte, en het aantal uren per week, in plaats van “marktconform” zonder verdere toelichting.",
        },
        {
          h2: "Wat trekt junior talent daadwerkelijk aan, buiten salaris?",
          ul: [
            "Concrete voorbeelden van wat een werkstudent in deze rol eerder heeft gedaan",
            "Een duidelijk beeld van begeleiding: wie is het aanspreekpunt, en hoe ziet de eerste maand eruit",
            "Ruimte voor groei binnen de rol, in plaats van een baan die er na een jaar nog precies zo uitziet",
            "Een toon die past bij hoe het team daadwerkelijk communiceert, niet bij hoe een vacaturetekst “hoort” te klinken",
          ],
        },
        {
          h2: "Hoe lang moet een goede junior vacaturetekst zijn?",
          p: "Korter dan de meeste bedrijven denken. Een tekst die in een paar alinea's laat zien wat het werk inhoudt, wat het betaalt en wie erachter zit, overtuigt sneller dan een pagina vol bedrijfswaarden en eisen. Kandidaten scannen een vacature in seconden voordat ze besluiten door te lezen, dus de belangrijkste informatie hoort bovenaan.",
        },
        {
          h2: "Waarom VOIDS bedrijven helpt bij deze tekst",
          p: "Een goede vacaturetekst is het eerste signaal van hoe een bedrijf junior talent behandelt. Bij VOIDS helpen we bedrijven die tekst zo te schrijven dat die past bij hoe Gen Z daadwerkelijk zoekt: op concreetheid en eerlijkheid, niet op een indrukwekkende lijst eisen.",
        },
      ],
      en: [
        {
          p: "Most job postings for junior roles are written as if they were for a senior position: a long list of requirements, vague company blurbs, and a job title that says little. Junior talent, and Gen Z especially, skims right past that. What actually works is a posting that shows what the work really involves and who's behind it.",
        },
        {
          h2: "Why does a long requirements list backfire on junior postings?",
          p: "Research on application behaviour consistently shows candidates, and women more often than men, drop out if they don't meet every listed requirement, even when those requirements were meant as \"nice to have\" rather than a hard line. In a junior role, where limited experience is expected by definition, a long list of requirements mostly filters out the wrong people.",
        },
        {
          h2: "What should take the place of a requirements list?",
          p: "Describe the work itself: what does someone do in a typical week, who do they work with, and what decisions can they make independently after a few months. That's exactly the information a candidate needs to judge whether the role fits, and it's exactly the information most job postings skip.",
        },
        {
          h2: "How specific should a posting be about salary and hours?",
          p: "As specific as possible. A posting that leaves salary and hours vague gives the impression there's something to hide, and junior candidates who are already used to unclear side jobs pick up on that fast. State a concrete hourly rate or a clear range, and the number of hours per week, instead of \"competitive\" with no further detail.",
        },
        {
          h2: "What actually attracts junior talent, beyond salary?",
          ul: [
            "Concrete examples of what a working student in this role has done before",
            "A clear picture of guidance: who the point of contact is, and what the first month looks like",
            "Room to grow within the role, instead of a job that looks exactly the same after a year",
            "A tone that matches how the team actually communicates, not how a job posting is \"supposed\" to sound",
          ],
        },
        {
          h2: "How long should a good junior job posting be?",
          p: "Shorter than most companies think. A posting that shows in a few paragraphs what the work involves, what it pays, and who's behind it convinces faster than a page full of company values and requirements. Candidates scan a posting in seconds before deciding to keep reading, so the most important information belongs at the top.",
        },
        {
          h2: "Why VOIDS helps companies with this text",
          p: "A good job posting is the first signal of how a company treats junior talent. At VOIDS we help companies write postings that match how Gen Z actually searches: on concreteness and honesty, not on an impressive list of requirements.",
        },
      ],
    },
  },

  // 29 ----------------------------------------------------------------
  {
    slug: "werkstudenten-inzetten-tijdens-een-groeifase",
    aud: "bedrijf",
    photo: "/photography/blog-2.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Werkstudenten inzetten tijdens een groeifase: hoe pak je dat aan?",
      en: "Using working students during a growth phase: how do you approach it?",
    },
    excerpt: {
      nl: "Snelle groei vraagt om capaciteit die meebeweegt, niet om vaste hires voor werk waarvan je nog niet weet of het blijft bestaan. Waarom werkstudenten daar goed bij passen, en waar de grenzen liggen.",
      en: "Fast growth needs capacity that flexes, not permanent hires for work you don't yet know will stick around. Why working students fit well there, and where the limits are.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Een scale-up in groeifase heeft vaak meer werk dan mensen, maar niet altijd genoeg zekerheid over welke rollen structureel blijven bestaan om meteen fulltime te werven. Werkstudenten passen goed bij precies dat probleem: capaciteit die meebeweegt met de groei, zonder dat je vooruit hoeft te lopen op beslissingen die je nog niet kunt maken.",
        },
        {
          h2: "Waarom passen werkstudenten goed bij een snel groeiend bedrijf?",
          p: "Groei betekent vaak dat werk sneller ontstaat dan de organisatiestructuur eromheen. Een werkstudent kun je relatief snel aan boord krijgen op een nieuwe markt, een nieuw proces of een tijdelijke piek, zonder het risico van een fulltime aanname op een rol die over een half jaar misschien weer anders wordt ingericht.",
        },
        {
          h2: "Kun je met werkstudenten een hele nieuwe markt of productlijn opzetten?",
          p: "Ja, en dat gebeurt in de praktijk vaker dan je zou denken. Bij Mila Health draaiden drie werkstudenten Marketing ieder hun eigen markt tijdens de internationale uitbreiding naar Zweden en Duitsland: te groot voor een stage, nog niet bewezen genoeg voor drie fulltime starters ineens. Zo test je of een markt levensvatbaar is voordat je de grotere investering doet.",
        },
        {
          h2: "Wat is het risico van te veel leunen op werkstudenten tijdens groei?",
          p: "Het risico zit in structureel werk laten dragen door een rol die bedoeld is om flexibel en tijdelijk te zijn. Als een werkstudentrol na een jaar nog steeds cruciaal is voor een proces zonder dat er een plan ligt voor wat daarna gebeurt, dan groeit het bedrijf sneller dan de organisatie eromheen, en dat is een probleem dat je beter voor bent dan achteraf oplost.",
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
          p: "Zodra het werk niet langer een experiment is, maar een bewezen, terugkerend onderdeel van het bedrijf. Dat is het moment waarop de flexibiliteit van een werkstudentrol minder waard wordt dan de stabiliteit van een fulltime starter die het proces verder kan opschalen.",
        },
        {
          h2: "Waarom VOIDS scale-ups helpt met dit soort inzet",
          p: "Bij VOIDS werken we vaak met bedrijven in een groeifase, precies omdat werkstudenten daar zo goed bij passen: snel op te schalen, betaalbaar te testen, en met de juiste begeleiding een serieuze bijdrage in plaats van tijdelijke noodhulp.",
        },
      ],
      en: [
        {
          p: "A scale-up in a growth phase often has more work than people, but not always enough certainty about which roles will stick around structurally to justify hiring full-time right away. Working students fit exactly that problem well: capacity that flexes with growth, without having to lock in decisions you can't yet make.",
        },
        {
          h2: "Why do working students fit well at a fast-growing company?",
          p: "Growth often means work appears faster than the organisational structure around it. You can bring a working student on board relatively quickly for a new market, a new process, or a temporary peak, without the risk of a full-time hire into a role that might look different again in six months.",
        },
        {
          h2: "Can working students help you set up a whole new market or product line?",
          p: "Yes, and it happens more often in practice than you'd think. At Mila Health, three working students in Marketing each ran their own market during the international expansion into Sweden and Germany: too big for an internship, not proven enough yet for three full-time starters at once. That's how you test whether a market is viable before making the bigger investment.",
        },
        {
          h2: "What's the risk of leaning too heavily on working students during growth?",
          p: "The risk is letting structural work be carried by a role that's meant to be flexible and temporary. If a working-student role is still critical to a process a year in, with no plan for what happens next, the company is growing faster than the structure around it, and that's a problem better prevented than fixed after the fact.",
        },
        {
          h2: "How do you build real stability around this?",
          ul: [
            "Plan a moment upfront to evaluate whether a working-student role should grow into a starter contract",
            "Ensure knowledge transfer, even for a temporary working-student role: document processes, don't just leave them in someone's head",
            "Bring in a second working student before the first one leaves, so knowledge doesn't walk out the door all at once",
            "Pay for the level of the work, not for how temporary it feels: fast growth isn't a reason for a lower rate",
          ],
        },
        {
          h2: "When is it time to move from working students to starters?",
          p: "Once the work stops being an experiment and becomes a proven, recurring part of the business. That's the point where the flexibility of a working-student role becomes worth less than the stability of a full-time starter who can scale the process further.",
        },
        {
          h2: "Why VOIDS helps scale-ups with this kind of hiring",
          p: "At VOIDS we often work with companies in a growth phase, precisely because working students fit so well there: quick to scale up, affordable to test with, and with the right guidance a real contribution rather than a temporary patch.",
        },
      ],
    },
  },

  // 30 ----------------------------------------------------------------
  {
    slug: "employer-branding-voor-gen-z",
    aud: "bedrijf",
    photo: "/photography/mariselle-4.jpg",
    tag: { nl: "Gen Z", en: "Gen Z" },
    title: {
      nl: "Employer branding voor Gen Z: waar let deze generatie op?",
      en: "Employer branding for Gen Z: what does this generation actually look for?",
    },
    excerpt: {
      nl: "Een mooie “about us”-pagina overtuigt niemand meer. Wat Gen Z daadwerkelijk checkt voordat ze solliciteren, en hoe je dat als bedrijf zichtbaar maakt.",
      en: "A polished \"about us\" page doesn't convince anyone anymore. What Gen Z actually checks before applying, and how to make that visible as a company.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Employer branding voor eerdere generaties draaide vaak om imago: een mooie website, een indrukwekkend logo, een cultuurvideo met stockfoto-achtige beelden. Gen Z checkt anders: minder op wat een bedrijf over zichzelf zegt, meer op wat er te verifiëren valt via reviews, social media en mensen die er al werken.",
        },
        {
          h2: "Waarom werkt traditionele employer branding minder goed bij Gen Z?",
          p: "Gen Z is opgegroeid met marketing die overal doorheen kijkt, en herkent gepolijste bedrijfscommunicatie sneller dan voorgaande generaties. Een “about us”-pagina vol mooie woorden overtuigt niet meer als die niet te staven valt met iets concreets: een review, een post van een medewerker, een eerlijk antwoord in een gesprek.",
        },
        {
          h2: "Wat checkt Gen Z voordat ze solliciteren?",
          ul: [
            "Reviews op platforms zoals Glassdoor, ook al zijn die niet altijd representatief",
            "Wat medewerkers zelf posten op LinkedIn of Instagram, niet alleen wat het bedrijfsaccount post",
            "Of salaris en uren transparant worden gecommuniceerd in de vacature zelf",
            "Of er concrete voorbeelden zijn van hoe junior talent hier daadwerkelijk groeit",
          ],
        },
        {
          h2: "Is salaristransparantie echt zo belangrijk voor deze generatie?",
          p: "Ja, en het is een van de duidelijkste signalen. Een vacature die salaris of een bandbreedte vaag laat, wekt bij Gen Z eerder wantrouwen dan nieuwsgierigheid. Transparantie over geld wordt niet gezien als onbeleefd, het wordt gezien als een teken van een bedrijf dat niets te verbergen heeft.",
        },
        {
          h2: "Werkt het om huidige werkstudenten in te zetten voor employer branding?",
          p: "Beter dan een gepolijste campagne. Een kandidaat gelooft een echte werkstudent die vertelt hoe de eerste maand eruitzag eerder dan een marketingvideo, simpelweg omdat het minder gefilterd aanvoelt. Laat mensen die het werk al doen vertellen hoe het werk daadwerkelijk is, in plaats van dat een marketingafdeling het voor hen invult.",
        },
        {
          h2: "Wat is de snelste manier om je employer brand te verbeteren zonder groot budget?",
          p: "Zorg dat de basis klopt voordat je aan campagnes begint: een eerlijke vacaturetekst met concreet salaris en concrete taken, een onboardingproces dat daadwerkelijk werkt, en tevreden werkstudenten die dat ook durven te zeggen. Dat kost geen marketingbudget, het kost alleen dat je intern op orde hebt wat je extern belooft.",
        },
        {
          h2: "Waarom VOIDS employer branding koppelt aan echte ervaring",
          p: "Bij VOIDS geloven we dat de beste employer branding niet uit een campagne komt, maar uit hoe een bedrijf junior talent daadwerkelijk behandelt. Daarom kijken we bij elke match ook naar wat eerdere werkstudenten van een bedrijf vinden, niet alleen naar wat er in de vacature staat.",
        },
      ],
      en: [
        {
          p: "Employer branding for earlier generations was often about image: a polished website, an impressive logo, a culture video full of stock-photo-style shots. Gen Z checks differently: less on what a company says about itself, more on what can be verified through reviews, social media, and people who already work there.",
        },
        {
          h2: "Why does traditional employer branding work less well on Gen Z?",
          p: "Gen Z grew up with marketing that sees straight through it, and spots polished corporate messaging faster than previous generations did. An \"about us\" page full of nice words no longer convinces if it can't be backed up by something concrete: a review, an employee's post, an honest answer in an interview.",
        },
        {
          h2: "What does Gen Z check before applying?",
          ul: [
            "Reviews on platforms like Glassdoor, even if they're not always fully representative",
            "What employees themselves post on LinkedIn or Instagram, not just what the company account posts",
            "Whether salary and hours are communicated transparently in the job posting itself",
            "Whether there are concrete examples of junior talent actually growing there",
          ],
        },
        {
          h2: "Is pay transparency really that important to this generation?",
          p: "Yes, and it's one of the clearest signals. A posting that leaves salary or a range vague breeds suspicion with Gen Z rather than curiosity. Transparency about money isn't seen as impolite, it's seen as a sign of a company that has nothing to hide.",
        },
        {
          h2: "Does it work to put current working students front and centre for employer branding?",
          p: "Better than a polished campaign. A candidate is more likely to believe a real working student describing what their first month looked like than a marketing video, simply because it feels less filtered. Let people already doing the work describe what it's actually like, instead of a marketing department filling that in for them.",
        },
        {
          h2: "What's the fastest way to improve your employer brand without a big budget?",
          p: "Get the fundamentals right before you start campaigning: an honest job posting with a concrete salary and concrete tasks, an onboarding process that actually works, and satisfied working students who are willing to say so. That doesn't cost a marketing budget, it just requires that what you promise externally actually holds up internally.",
        },
        {
          h2: "Why VOIDS ties employer branding to real experience",
          p: "At VOIDS we believe the best employer branding doesn't come from a campaign, it comes from how a company actually treats junior talent. That's why, for every match, we also look at what previous working students think of a company, not just what the posting says.",
        },
      ],
    },
  },

  // 31 ----------------------------------------------------------------
  {
    slug: "diversiteit-in-junior-recruitment",
    aud: "bedrijf",
    photo: "/photography/blog-3.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Diversiteit in junior recruitment: hoe voorkom je dat je steeds dezelfde kandidaten aantrekt?",
      en: "Diversity in junior recruitment: how do you stop attracting the same candidates every time?",
    },
    excerpt: {
      nl: "Werven via je eigen netwerk voelt efficiënt, maar levert vrijwel altijd hetzelfde soort kandidaat op. Waar het scheefgroeit, en wat je concreet kunt veranderen.",
      en: "Hiring through your own network feels efficient, but almost always produces the same kind of candidate. Where it skews, and what you can concretely change.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "“We werven op kwaliteit, niet op diversiteit” is een veelgehoorde zin die voorbijgaat aan hoe wervingskanalen zelf al een filter zijn. Als je alleen via je eigen netwerk werft, selecteer je niet op kwaliteit, je selecteert op wie toevallig al toegang had tot dat netwerk, en dat is niet gelijk verdeeld.",
        },
        {
          h2: "Waarom levert werven via je eigen netwerk minder diversiteit op?",
          p: "Netwerken zijn van nature homogeen: mensen kennen vooral mensen die op henzelf lijken, qua opleiding, achtergrond en sociale kringen. Werf je structureel via via, dan blijf je vissen in dezelfde vijver, ook als je dat niet bewust doet. Dat is geen kwestie van goede of slechte intenties, het is simpelweg hoe netwerken werken.",
        },
        {
          h2: "Bevoordelen cv-eisen onbedoeld bepaalde kandidaten?",
          p: "Ja, vaker dan bedrijven zich realiseren. Een voorkeur voor een bekende studievereniging of een prestigieuze stage bevoordeelt wie toegang had tot die kansen, en die toegang hangt vaak samen met financiële achtergrond: niet iedereen kon zich een onbetaalde stage bij een bekend bedrijf veroorloven. Selecteren op zulke signalen selecteert dus indirect ook op achtergrond, ook zonder dat het de bedoeling is.",
        },
        {
          h2: "Wat kun je concreet veranderen in je wervingsproces?",
          ul: [
            "Werf via een bredere community in plaats van uitsluitend via het eigen netwerk of via via",
            "Kijk naar karakter en drijfveren in plaats van naar cv-signalen die toegang tot bepaalde kansen veronderstellen",
            "Formuleer vacature-eisen als “fijn om te hebben” in plaats van harde eisen waar niemand volledig aan voldoet",
            "Zorg voor meerdere beoordelaars bij een selectiegesprek, zodat één persoonlijke voorkeur niet de doorslag geeft",
          ],
        },
        {
          h2: "Kost een breder wervingsproces meer tijd?",
          p: "In het begin misschien iets meer, omdat je een nieuw kanaal moet leren kennen, maar op termijn juist minder: een grotere, diversere poule aan kandidaten vergroot de kans op een goede match, in plaats van steeds hetzelfde beperkte netwerk uit te putten. Bedrijven die klagen dat “goed junior talent moeilijk te vinden is”, zoeken vaak gewoon op te weinig plekken.",
        },
        {
          h2: "Levert een diverser team ook iets concreets op, buiten het principe?",
          p: "Ja: een team met verschillende achtergronden en opleidingen kijkt anders naar een product, een klant of een probleem, en dat levert in de praktijk scherpere beslissingen op dan een team dat op vrijwel alle vlakken op elkaar lijkt. Dat is geen bijkomstig voordeel, het is precies waarom diversiteit ook een zakelijk argument is, los van de eerlijkheidsvraag.",
        },
        {
          h2: "Waarom dit precies is waar VOIDS voor bestaat",
          p: "Bij VOIDS werven we via een brede community van meer dan 4.000 studenten en starters, precies om bedrijven toegang te geven tot talent dat ze via hun eigen netwerk nooit hadden gevonden. Selecteren op karakter in plaats van cv-signalen is daarbij geen extra stap, het is het uitgangspunt.",
        },
      ],
      en: [
        {
          p: "\"We hire on quality, not on diversity\" is a common line that overlooks how hiring channels themselves already act as a filter. If you only hire through your own network, you're not selecting on quality, you're selecting for whoever happened to already have access to that network, and that access isn't evenly distributed.",
        },
        {
          h2: "Why does hiring through your own network produce less diversity?",
          p: "Networks are naturally homogeneous: people mostly know people similar to themselves, in education, background and social circles. Hire structurally through personal connections, and you keep fishing in the same pond, even without meaning to. It's not a question of good or bad intentions, it's simply how networks work.",
        },
        {
          h2: "Do CV requirements unintentionally favour certain candidates?",
          p: "Yes, more often than companies realise. A preference for a well-known student association or a prestigious internship favours whoever had access to those opportunities, and that access often correlates with financial background: not everyone could afford an unpaid internship at a well-known company. Selecting on those signals indirectly selects on background too, even without meaning to.",
        },
        {
          h2: "What can you concretely change in your hiring process?",
          ul: [
            "Hire through a broader community instead of exclusively through your own network or personal connections",
            "Look at character and motivation instead of CV signals that assume access to particular opportunities",
            "Frame job requirements as \"nice to have\" instead of hard requirements no candidate fully meets",
            "Use multiple assessors in a selection interview, so one person's personal preference doesn't decide the outcome",
          ],
        },
        {
          h2: "Does a broader hiring process cost more time?",
          p: "A bit more at first, since you need to learn a new channel, but less over time: a bigger, more diverse candidate pool raises your odds of a good match, instead of repeatedly exhausting the same limited network. Companies that complain \"good junior talent is hard to find\" are often just looking in too few places.",
        },
        {
          h2: "Does a more diverse team deliver anything concrete, beyond the principle?",
          p: "Yes: a team with different backgrounds and degrees looks at a product, a customer or a problem differently, and that produces sharper decisions in practice than a team that's similar across the board. That's not a side benefit, it's exactly why diversity is also a business argument, separate from the fairness question.",
        },
        {
          h2: "Why this is exactly what VOIDS exists for",
          p: "At VOIDS we hire through a broad community of more than 4,000 students and starters, precisely to give companies access to talent they'd never find through their own network. Selecting on character instead of CV signals isn't an extra step in that process, it's the starting point.",
        },
      ],
    },
  },

  // 32 ----------------------------------------------------------------
  {
    slug: "wanneer-is-het-tijd-voor-een-tweede-werkstudent",
    aud: "bedrijf",
    photo: "/photography/mariselle-7.jpg",
    tag: { nl: "Werkgever", en: "Employer" },
    title: {
      nl: "Wanneer is het tijd voor een tweede werkstudent?",
      en: "When is it time for a second working student?",
    },
    excerpt: {
      nl: "Eén werkstudent die overal “een beetje” bij helpt, is een risico, geen efficiëntie. Signalen dat het tijd is om uit te breiden, en hoe je dat zonder chaos aanpakt.",
      en: "One working student helping out \"a bit of everything\" is a risk, not efficiency. Signals it's time to expand, and how to do it without creating chaos.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Eén werkstudent aannemen voelt vaak als een veilige eerste stap, en dat is het ook. Maar bedrijven laten die ene werkstudent vervolgens vaak te lang te veel dragen, in plaats van op tijd na te denken over een tweede. Een paar concrete signalen om op te letten.",
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
          h2: "Is één overbelaste werkstudent goedkoper dan twee werkstudenten?",
          p: "Op papier misschien, in de praktijk zelden. Eén persoon die structureel overbelast is, levert op termijn lagere kwaliteit, hogere kans op uitval door ziekte of vertrek, en het risico dat kennis in één klap verdwijnt als diegene stopt. Twee werkstudenten die het werk verdelen, zijn vaak duurder in salaris maar goedkoper in risico.",
        },
        {
          h2: "Moet een tweede werkstudent hetzelfde werk doen als de eerste?",
          p: "Niet per se, en vaak juist niet. Een tweede werkstudent kan het bestaande werk verdelen, maar ook een nieuw, aangrenzend stuk oppakken, zodat de eerste werkstudent kan doorgroeien naar meer verantwoordelijkheid in plaats van simpelweg hetzelfde takenpakket te blijven delen.",
        },
        {
          h2: "Hoe voorkom je chaos als je van één naar twee werkstudenten gaat?",
          p: "Leg vooraf vast wie waarvoor verantwoordelijk is, zodat er geen overlap of gaten ontstaan. Betrek je bestaande werkstudent bij het inwerken van de nieuwe collega: dat versterkt niet alleen de overdracht van kennis, het geeft de eerste werkstudent ook een concreet signaal dat de rol serieus genoeg is om op te schalen.",
        },
        {
          h2: "Wat als het budget voor een tweede werkstudent er nog niet is?",
          p: "Reken dan eerst door wat de huidige situatie je al kost aan risico en overbelasting, voordat je concludeert dat het budget er niet is. Een werkstudent die vertrekt door structurele overbelasting kost meer aan hernieuwde werving en inwerktijd dan het aannemen van een tweede werkstudent had gekost.",
        },
        {
          h2: "Waarom VOIDS bedrijven helpt met opschalen, niet alleen instromen",
          p: "Bij VOIDS denken we niet alleen mee over de eerste werkstudent, maar ook over hoe een junior team er over een jaar uitziet. Een instroom die blijft plakken is zelden het resultaat van één goede hire, het is het resultaat van tijdig uitbreiden voordat de druk te hoog wordt.",
        },
      ],
      en: [
        {
          p: "Hiring one working student often feels like a safe first step, and it is. But companies then often let that one working student carry too much for too long, instead of thinking about a second one in good time. A few concrete signals worth watching for.",
        },
        {
          h2: "What are the clearest signals you need a second working student?",
          ul: [
            "Your current working student can no longer take a holiday or get sick without something structural falling behind",
            "Knowledge about a process lives entirely in one person's head, with no handover at all",
            "Your working student is structurally working more hours than agreed just to get the work done",
            "You're seriously considering picking execution work back up yourself that you'd previously delegated",
          ],
        },
        {
          h2: "Is one overloaded working student cheaper than two working students?",
          p: "On paper, maybe, in practice rarely. One person who's structurally overloaded produces lower quality over time, a higher chance of falling out through illness or leaving, and the risk that knowledge disappears all at once if they quit. Two working students splitting the work are often more expensive in salary but cheaper in risk.",
        },
        {
          h2: "Does a second working student need to do the same work as the first?",
          p: "Not necessarily, and often it shouldn't. A second working student can split the existing work, but can also pick up a new, adjacent piece, so the first working student can grow into more responsibility instead of simply continuing to share the same task list.",
        },
        {
          h2: "How do you avoid chaos when going from one working student to two?",
          p: "Set out upfront who's responsible for what, so there's no overlap or gaps. Involve your existing working student in onboarding the new one: that strengthens the knowledge handover, and it also gives the first working student a concrete signal that the role is serious enough to scale.",
        },
        {
          h2: "What if the budget for a second working student isn't there yet?",
          p: "Work out first what the current situation is already costing you in risk and overload, before concluding the budget isn't there. A working student who leaves due to structural overload costs more in rehiring and onboarding time than hiring a second working student would have.",
        },
        {
          h2: "Why VOIDS helps companies scale, not just start",
          p: "At VOIDS we don't just think about the first working student, we think about what a junior team looks like a year from now. A pipeline that sticks is rarely the result of one good hire, it's the result of expanding on time, before the pressure gets too high.",
        },
      ],
    },
  },

  // 33 ----------------------------------------------------------------
  {
    slug: "trends-nederlandse-arbeidsmarkt-starters",
    aud: "beide",
    photo: "/photography/mariselle-10.jpg",
    tag: { nl: "Trends", en: "Trends" },
    title: {
      nl: "Trends op de Nederlandse arbeidsmarkt voor starters en Gen Z",
      en: "Trends in the Dutch labour market for starters and Gen Z",
    },
    excerpt: {
      nl: "De arbeidsmarkt voor starters verandert sneller dan de meeste bedrijven hun wervingsproces aanpassen. Vier bewegingen die zowel kandidaten als werkgevers raken.",
      en: "The labour market for starters is changing faster than most companies adjust their hiring process. Four shifts affecting candidates and employers alike.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "De arbeidsmarkt waarin de huidige generatie starters terechtkomt, verschilt op een aantal fundamentele punten van die van hun ouders. Geen enkele van deze bewegingen is nieuw op zichzelf, maar samen veranderen ze wat zowel kandidaten als werkgevers van een eerste baan verwachten.",
        },
        {
          h2: "Waarom is werkervaring tijdens de studie belangrijker geworden dan vroeger?",
          p: "Werkgevers verwachten van starters steeds vaker dat ze al iets van de praktijk hebben meegemaakt voordat ze fulltime beginnen, simpelweg omdat een cv met relevante werkervaring beter voorspelt hoe iemand functioneert dan cijfers alleen. Dat verschuift de druk naar eerder in de studie: wachten tot na het diploma om ervaring op te doen, is een steeds duurdere strategie geworden.",
        },
        {
          h2: "Is de arbeidsmarkt voor starters krapper of ruimer geworden?",
          p: "Dat verschilt sterk per sector en verandert bovendien met conjunctuur, dus een algemene uitspraak daarover is zelden lang houdbaar. Wat wel stabieler is: bedrijven die structureel investeren in een junior pijplijn, via werkstudenten die na hun studie doorstromen, zijn minder afhankelijk van de grillen van een krappe of ruime arbeidsmarkt dan bedrijven die alleen ad hoc werven wanneer de nood hoog is.",
        },
        {
          h2: "Hoe verandert de manier waarop starters op zoek gaan naar werk?",
          p: "Minder via traditionele vacaturesites alleen, meer via communities, social media en via via, maar dan bewust opgebouwd in plaats van toevallig. Studenten en starters delen vacatures en ervaringen steeds vaker binnen community's van duizenden mensen, wat de traditionele vacaturebank een stuk minder centraal maakt dan een aantal jaar geleden.",
        },
        {
          h2: "Welke rol speelt salaristransparantie in deze verschuiving?",
          p: "Een steeds grotere. Vacatures zonder concreet salaris of een duidelijke bandbreedte worden door starters vaker overgeslagen dan vroeger, en steeds meer bedrijven passen zich daarop aan door salaris standaard te noemen, niet als uitzondering maar als norm.",
        },
        {
          h2: "Wat betekenen deze trends concreet voor werkgevers?",
          ul: [
            "Bouw aan een junior pijplijn vóór je die acuut nodig hebt, niet pas als een vacature dringend moet worden ingevuld",
            "Wees transparant over salaris en uren, want dat wordt eerder verwacht dan uitzonderlijk gewaardeerd",
            "Zoek breder dan traditionele vacaturesites en het eigen netwerk",
            "Behandel een werkstudentrol als structureel onderdeel van de organisatie, niet als tijdelijke lapmiddel",
          ],
        },
        {
          h2: "Waarom VOIDS deze bewegingen op de voet volgt",
          p: "Deze trends zijn precies waarom het werkstudentmodel de afgelopen jaren aan relevantie heeft gewonnen: het combineert wat starters steeds vaker zoeken, vroege, relevante ervaring en transparantie, met wat bedrijven nodig hebben, flexibele maar serieuze junior capaciteit. Bij VOIDS bouwen we daar dagelijks aan mee.",
        },
      ],
      en: [
        {
          p: "The labour market the current generation of starters enters differs from their parents' in a few fundamental ways. None of these shifts is new on its own, but together they're changing what both candidates and employers expect from a first job.",
        },
        {
          h2: "Why has work experience during your studies become more important than it used to be?",
          p: "Employers increasingly expect starters to have already experienced some of the practice before starting full-time, simply because a CV with relevant work experience predicts on-the-job performance better than grades alone. That shifts the pressure earlier into a degree: waiting until after graduation to gain experience has become an increasingly costly strategy.",
        },
        {
          h2: "Has the labour market for starters gotten tighter or looser?",
          p: "That varies a lot by sector and shifts with the economic cycle, so a general statement rarely holds for long. What is more stable: companies that structurally invest in a junior pipeline, through working students who move into permanent roles after graduating, depend less on the swings of a tight or loose labour market than companies that only hire ad hoc when the need becomes urgent.",
        },
        {
          h2: "How is the way starters search for work changing?",
          p: "Less through traditional job boards alone, more through communities, social media, and personal connections, but built deliberately rather than left to chance. Students and starters increasingly share openings and experiences within communities of thousands of people, which makes the traditional job board a lot less central than it was a few years ago.",
        },
        {
          h2: "What role does pay transparency play in this shift?",
          p: "A growing one. Postings without a concrete salary or a clear range get skipped by starters more often than they used to, and more and more companies are adapting by stating salary as standard practice, not as an exception.",
        },
        {
          h2: "What do these trends mean concretely for employers?",
          ul: [
            "Build a junior pipeline before you urgently need one, not only once a role has to be filled fast",
            "Be transparent about salary and hours, since it's increasingly expected rather than exceptionally appreciated",
            "Look beyond traditional job boards and your own network",
            "Treat a working-student role as a structural part of the organisation, not a temporary patch",
          ],
        },
        {
          h2: "Why VOIDS tracks these shifts closely",
          p: "These trends are exactly why the working-student model has gained relevance in recent years: it combines what starters increasingly look for, early, relevant experience and transparency, with what companies need, flexible but serious junior capacity. At VOIDS we build toward that every day.",
        },
      ],
    },
  },

  // 34 ----------------------------------------------------------------
  {
    slug: "remote-hybride-werken-als-werkstudent",
    aud: "beide",
    photo: "/photography/mariselle-1.jpg",
    tag: { nl: "Uitgelegd", en: "Explained" },
    title: {
      nl: "Remote of hybride werken als werkstudent: wat is realistisch?",
      en: "Remote or hybrid work as a working student: what's realistic?",
    },
    excerpt: {
      nl: "Volledig remote klinkt flexibel, maar is bij een junior rol vaak niet waar je het meeste van leert. Wat wel en niet werkt, voor kandidaten en voor bedrijven.",
      en: "Fully remote sounds flexible, but for a junior role it's often not where you learn the most. What works and what doesn't, for candidates and for companies.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Remote werken klinkt voor een werkstudent aantrekkelijk: geen reistijd, flexibel in te plannen rond colleges. In de praktijk is volledig remote werken bij een junior rol vaak minder waardevol dan het klinkt, precies omdat een groot deel van wat je leert in een eerste baan niet uit taken komt, maar uit meekijken en meeluisteren.",
        },
        {
          h2: "Is volledig remote werken goed voor een werkstudent in een junior rol?",
          p: "Niet per se, en vaker niet dan wel. Junior rollen leunen sterk op informeel leren: meeluisteren met een collega die een klant belt, kort iets vragen zonder een meeting te hoeven plannen, signalen oppikken over hoe een team werkt. Dat soort leren gaat via videobellen aanzienlijk moeizamer, en juist werkstudenten, die nog volop aan het leren zijn wat werk inhoudt, missen daar het meest door.",
        },
        {
          h2: "Is hybride dan de betere middenweg?",
          p: "Voor de meeste werkstudentrollen wel. Een paar vaste dagen op kantoor geven genoeg toegang tot die informele leermomenten, terwijl de overige dagen ruimte bieden om flexibel te plannen rond tentamens en projectweken. De vaste dagen zorgen er ook voor dat je daadwerkelijk deel wordt van het team, in plaats van een naam in een videobelscherm die af en toe meedoet.",
        },
        {
          h2: "Wanneer past volledig remote werken wél goed bij een werkstudentrol?",
          p: "Als het werk zelf sterk zelfstandig van aard is en weinig continu overleg vraagt, zoals bepaalde vormen van dataverwerking of contentproductie, en als er toch een structureel moment is voor overleg en feedback, ook als dat via videobellen gaat. Het probleem zit niet in remote werken zelf, het zit in remote werken zonder enige structuur voor begeleiding.",
        },
        {
          h2: "Hoe voorkom je dat een werkstudent zich buitengesloten voelt bij hybride werken?",
          ul: [
            "Spreek vaste, gedeelde kantoordagen af in plaats van “kom maar wanneer het uitkomt”",
            "Zorg dat belangrijke besluiten en informele updates niet alleen op kantoor plaatsvinden zonder dat er iets wordt vastgelegd voor wie er niet is",
            "Plan een vast wekelijks moment voor feedback, ongeacht of dat op kantoor of via videobellen gebeurt",
            "Betrek een remote werkstudent net zo actief bij informele momenten als bij formele vergaderingen",
          ],
        },
        {
          h2: "Wat verwachten werkstudenten zelf realistisch gezien van flexibiliteit?",
          p: "Meestal geen volledige vrijheid, maar wel ruimte: flexibiliteit rond tentamenweken, een duidelijke afspraak over welke dagen wel en niet nodig zijn, en een werkgever die niet star vasthoudt aan vijf dagen op kantoor voor een functie die dat niet vereist. Dat is een andere vraag dan volledig remote willen werken, en het is meestal ook de vraag die er echt toe doet.",
        },
        {
          h2: "Waarom VOIDS aandacht besteedt aan deze afspraak bij een match",
          p: "Bij VOIDS bespreken we werkvorm expliciet bij elke match, precies omdat een verkeerde verwachting hierover een van de snelste manieren is om een verder goede match toch te laten mislukken. Duidelijkheid vooraf voorkomt frustratie achteraf, voor kandidaat én bedrijf.",
        },
      ],
      en: [
        {
          p: "Remote work sounds appealing for a working student: no commute, easy to plan around lectures. In practice, fully remote work in a junior role is often less valuable than it sounds, precisely because a large part of what you learn in a first job doesn't come from tasks, it comes from watching and overhearing.",
        },
        {
          h2: "Is fully remote work good for a working student in a junior role?",
          p: "Not necessarily, and more often not than yes. Junior roles rely heavily on informal learning: overhearing a colleague on a client call, asking a quick question without scheduling a meeting, picking up on how a team actually works. That kind of learning is considerably harder over video calls, and working students, who are still very much learning what work involves, miss out on it the most.",
        },
        {
          h2: "Is hybrid the better middle ground, then?",
          p: "For most working-student roles, yes. A few fixed days in the office give enough access to those informal learning moments, while the remaining days offer room to plan flexibly around exams and project weeks. The fixed days also make you actually part of the team, rather than a name on a video call screen who joins occasionally.",
        },
        {
          h2: "When does fully remote work actually fit a working-student role well?",
          p: "When the work itself is strongly independent and doesn't need much continuous coordination, like certain kinds of data processing or content production, and when there's still a structural moment for check-ins and feedback, even if that's over video call. The problem isn't remote work itself, it's remote work with no structure for guidance at all.",
        },
        {
          h2: "How do you stop a working student from feeling left out under hybrid work?",
          ul: [
            "Agree on fixed, shared office days instead of \"come in whenever it suits\"",
            "Make sure important decisions and informal updates don't only happen in the office with nothing recorded for whoever wasn't there",
            "Schedule a fixed weekly feedback moment, whether it happens in the office or over video call",
            "Involve a remote working student just as actively in informal moments as in formal meetings",
          ],
        },
        {
          h2: "What do working students realistically expect from flexibility?",
          p: "Usually not full freedom, but room: flexibility around exam weeks, a clear agreement on which days are and aren't needed, and an employer who doesn't rigidly insist on five office days for a role that doesn't require it. That's a different question from wanting to work fully remote, and it's usually also the question that actually matters.",
        },
        {
          h2: "Why VOIDS pays attention to this agreement in every match",
          p: "At VOIDS we discuss working arrangements explicitly for every match, precisely because a mismatched expectation here is one of the fastest ways an otherwise good match falls apart. Clarity upfront prevents frustration later, for candidate and company alike.",
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
