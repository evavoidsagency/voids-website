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
};

export const BLOG_POSTS: BlogPost[] = [
  // 1 ---------------------------------------------------------------------
  {
    slug: "wat-is-een-werkstudent",
    aud: "beide",
    photo: "/photography/blog-1.jpg",
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
          p: "Bij VOIDS geven we zelf de voorkeur aan werkstudenten boven stagiairs, juist omdat het een eerlijkere en stabielere vorm van werkervaring oplevert: een echt salaris in plaats van een vergoeding, en een rol die lang genoeg duurt om er daadwerkelijk iets aan over te houden. Plaatsen we toch een stagiair, dan hanteren we minimaal de wettelijke stagevergoeding-norm van de overheid: €800 bruto per maand fulltime. Werk dat ertoe doet, verdient een salaris dat ertoe doet, ongeacht wat er op iemands cv staat.",
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
    photo: "/photography/blog-2.jpg",
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
    photo: "/photography/blog-3.jpg",
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
    photo: "/photography/blog-4.jpg",
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
          p: "Toegang tot relevante werkervaring hoort niet afhankelijk te zijn van wie het zich kan veroorloven om voor weinig te werken. Daarom geven we bij VOIDS zelf de voorkeur aan werkstudentschappen boven stages, en houden we bij geplaatste stages minimaal de wettelijke stagevergoeding-norm van €800 bruto per maand fulltime aan als ondergrens.",
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
    photo: "/photography/blog-5.jpg",
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
    photo: "/photography/blog-6.jpg",
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
    photo: "/photography/blog-7.jpg",
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
    photo: "/photography/blog-8.jpg",
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
    photo: "/photography/blog-1.jpg",
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
    photo: "/photography/blog-2.jpg",
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
    photo: "/photography/blog-3.jpg",
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
    photo: "/photography/blog-4.jpg",
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
    photo: "/photography/blog-5.jpg",
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
          p: "The question is rarely whether a company needs junior capacity, but how long it takes too long to ask it. If a founder is spending more than a few hours a week on work someone else could do, that's not a sign the company is still too small for a hire, it's a sign the hire is already overdue.",
        },
      ],
    },
  },

  // 14 ----------------------------------------------------------------
  {
    slug: "bijbaan-of-relevante-ervaring",
    aud: "talent",
    photo: "/photography/blog-6.jpg",
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
