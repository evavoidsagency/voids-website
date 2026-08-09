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
      nl: "Geen stagiair, geen bijbaantje: de werkstudent zit ergens daartussenin. Wat het contract, het werk en de verwachtingen in de praktijk betekenen.",
      en: "Not an intern, not a side job: the working student sits somewhere in between. What the contract, the work and the expectations actually look like.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Een werkstudent is iemand die naast de studie een structurele, betaalde baan heeft die aansluit op wat diegene later wil doen. Geen bijbaan om rond te komen, geen stage om studiepunten te halen, maar een echte werkrelatie met een echt contract, alleen dan met minder uren en meer flexibiliteit rond tentamenweken.",
        },
        {
          h2: "Het contract",
          p: "Een werkstudent werkt meestal op basis van een gewone arbeidsovereenkomst, vaak voor bepaalde tijd en voor een vast aantal uren per week, bijvoorbeeld 16 tot 24. Dat betekent: gewoon salaris volgens het wettelijk minimumloon of hoger, vakantiegeld, en dezelfde rechten als iedere andere werknemer. Er is geen aparte juridische status “werkstudent”: het is een manier van werken, geen contractvorm.",
        },
        {
          h2: "Hoe het verschilt van een stage of bijbaan",
          p: "Een stage draait om leren en duurt meestal een paar maanden, met een stagevergoeding die vaak lager ligt dan een salaris. Een bijbaan is vooral geld verdienen, met werk dat weinig met de studie te maken hoeft te hebben. Een werkstudentbaan zit ertussenin: het duurt langer, vaak een jaar of meer, het is inhoudelijk relevant, en het wordt behandeld als een volwaardige rol in het team, niet als een verlengstuk van de koffieronde.",
        },
        {
          h2: "Wat je mag verwachten",
          ul: [
            "Een taak die je iets leert, niet alleen administratief werk dat niemand anders wil doen",
            "Een vast aanspreekpunt en begeleiding, ook al werk je maar twee dagen per week",
            "Roosterruimte rond tentamens en projectweken",
            "Een salaris dat past bij het werk dat je doet, niet bij het feit dat je student bent",
          ],
        },
        {
          h2: "Wat het bedrijf ervoor terugkrijgt",
          p: "Bedrijven krijgen iemand die langer blijft dan een stagiair, sneller inwerkt dan een nieuwe starter en vaak frisser tegen problemen aankijkt omdat diegene nog niet gewend is aan “zo doen we dat hier altijd”. Het is ook een manier om iemand te leren kennen vóórdat er een fulltime aanbod op tafel ligt, zonder dat iemand zich meteen vastlegt.",
        },
        {
          h2: "Waarom dit VOIDS' vertrekpunt is",
          p: "Bij VOIDS geven we zelf de voorkeur aan werkstudenten boven stagiairs, juist omdat het een eerlijkere en stabielere vorm van werkervaring oplevert. Plaatsen we toch een stagiair, dan hanteren we minimaal de wettelijke stagevergoeding-norm van de overheid: €800 bruto per maand fulltime. Werk dat ertoe doet, verdient een salaris dat ertoe doet.",
        },
      ],
      en: [
        {
          p: "A working student is someone who, alongside their studies, holds a structural, paid role connected to what they eventually want to do. Not a side job to pay rent, not an internship to collect credits, but a real working relationship with a real contract, just with fewer hours and more room around exam weeks.",
        },
        {
          h2: "The contract",
          p: "A working student usually works under a regular employment contract, often fixed-term and for a set number of hours per week, say 16 to 24. That means a normal salary at or above the statutory minimum wage, holiday pay, and the same rights as any other employee. There's no separate legal status called \"working student\": it's a way of working, not a contract type.",
        },
        {
          h2: "How it differs from an internship or side job",
          p: "An internship is about learning, usually lasts a few months, and comes with an internship allowance that's typically lower than a salary. A side job is mostly about earning money, with work that doesn't need to relate to your studies at all. A working-student role sits in between: it runs longer, often a year or more, it's relevant to your field, and it's treated as a real seat on the team, not an extension of the coffee round.",
        },
        {
          h2: "What you can expect",
          ul: [
            "A task that actually teaches you something, not just admin work no one else wants",
            "A clear point of contact and guidance, even if you're only in two days a week",
            "Schedule flexibility around exams and project weeks",
            "A salary that matches the work you do, not the fact that you happen to be a student",
          ],
        },
        {
          h2: "What the company gets out of it",
          p: "Companies get someone who sticks around longer than an intern, ramps up faster than a new starter, and often looks at problems with fresh eyes precisely because they're not yet used to \"that's just how we do it here.\" It's also a way to get to know someone before any full-time offer is on the table, without either side locking in right away.",
        },
        {
          h2: "Why this is VOIDS' starting point",
          p: "At VOIDS we prefer working students over interns ourselves, because it's a fairer and more stable form of work experience. When we do place an intern, we hold to at least the Dutch government's own internship-allowance norm: €800 gross per month full-time. Work that matters deserves a salary that matters.",
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
      nl: "Drie manieren om junior capaciteit binnen te halen, drie heel verschillende risicoprofielen. Een praktisch afwegingskader per situatie.",
      en: "Three ways to bring in junior capacity, three very different risk profiles. A practical framework for choosing the right one.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "“We hebben iemand junior nodig” is geen volledige zin. Junior kan een stagiair zijn voor drie maanden, een werkstudent voor anderhalf jaar, of een starter met een vast contract vanaf dag één. Elk van de drie lost een ander probleem op, en de verkeerde keuze kost je meer tijd dan het bespaart.",
        },
        {
          h2: "De stagiair: kort, leergericht, goedkoop",
          p: "Een stage is bedoeld om te leren, niet om structureel werk te dragen. Kies hiervoor als je een afgebakend project hebt met een duidelijk begin en einde, zoals een marktonderzoek of een los te bouwen tool, en als je de tijd hebt om iemand serieus te begeleiden. Een stagiair die je erbij zet zonder begeleiding levert geen goed werk op en geen goede ervaring: dat is voor niemand winst.",
        },
        {
          h2: "De werkstudent: langdurig, flexibel, ingebed",
          p: "Een werkstudent past bij structureel terugkerend werk dat te groot is voor een stagiair maar nog niet groot genoeg is voor een fulltime rol. Denk aan het beheren van een deelmarkt, een terugkerend deel van finance, of contentproductie die iedere week doorgaat. Je krijgt geen tijdelijke hulp, maar iemand die na een paar maanden zelfstandig meedraait en voor een jaar of langer blijft.",
        },
        {
          h2: "De starter: volledig ingezet, hoger risico én hoger rendement",
          p: "Een starter is klaar met studeren en beschikbaar voor fulltime, structureel werk. Dit past bij een rol die te groot is geworden voor part-time inzet, of wanneer je iemand nodig hebt die meteen mee-eigenaar wordt van een resultaat. Het risico is hoger: een fulltime contract, een hoger salaris, minder ruimte om “het gewoon even te proberen”.",
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
          h2: "In de praktijk lopen deze door elkaar",
          p: "Bij Mila Health draaiden drie werkstudenten Marketing ieder hun eigen markt (Nederland, Zweden, Duitsland) tijdens de internationale uitbreiding: te groot voor een stage, nog niet rijp voor drie fulltime starters. Bij Joulz vulden werkstudenten Order-to-Cash en Purchase-to-Pay structureel terugkerend financieel werk in. Het patroon is steeds hetzelfde: kijk naar de aard van het werk, niet naar wat toevallig het goedkoopst klinkt.",
        },
      ],
      en: [
        {
          p: "\"We need someone junior\" isn't a complete sentence. Junior can mean an intern for three months, a working student for a year and a half, or a starter with a permanent contract from day one. Each of the three solves a different problem, and picking the wrong one costs you more time than it saves.",
        },
        {
          h2: "The intern: short, learning-focused, low cost",
          p: "An internship exists to teach, not to carry structural work. Choose this when you have a bounded project with a clear start and end, like a piece of market research or a standalone tool to build, and when you actually have the time to guide someone properly. An intern you bolt on without guidance won't produce good work or a good experience: nobody wins there.",
        },
        {
          h2: "The working student: long-term, flexible, embedded",
          p: "A working student fits recurring, structural work that's too big for an intern but not yet big enough for a full-time role. Think of running a sub-market, a recurring finance process, or content production that continues every single week. You're not getting temporary help, you're getting someone who's running independently after a few months and stays for a year or more.",
        },
        {
          h2: "The starter: fully committed, higher risk, higher return",
          p: "A starter has finished studying and is available for full-time, structural work. This fits a role that has outgrown part-time capacity, or when you need someone to take full ownership of an outcome from the start. The risk is higher too: a full-time contract, a higher salary, less room to \"just try it out.\"",
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
          h2: "In practice, these overlap",
          p: "At Mila Health, three working students in Marketing each owned their own market (the Netherlands, Sweden, Germany) during the international expansion: too big for an internship, not yet ready for three full-time starters. At Joulz, working students filled recurring order-to-cash and purchase-to-pay finance work. The pattern is always the same: look at the nature of the work, not at whatever happens to sound cheapest.",
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
      nl: "Junior talent aannemen is makkelijk. Zorgen dat ze na zes maanden nog steeds zin hebben, is het echte werk.",
      en: "Hiring junior talent is the easy part. Making sure they still want to be there after six months is the real work.",
    },
    read: { nl: "7 min", en: "7 min" },
    body: {
      nl: [
        {
          p: "Bedrijven die iedere zes maanden opnieuw op zoek moeten naar “iemand junior” hebben meestal geen wervingsprobleem. Ze hebben een vasthoudprobleem. Instroom regelen is relatief eenvoudig; ervoor zorgen dat iemand blijft, groeit en zich eigenaar voelt van het werk is waar de meeste organisaties op verliezen.",
        },
        {
          h2: "Begin met eigenaarschap, niet met taken",
          p: "Junior talent dat alleen losse taakjes krijgt, blijft zich als tijdelijk personeel voelen, ook als het contract voor een jaar is. Geef in plaats daarvan een afgebakend stukje van het bedrijf waar iemand echt over gaat: een markt, een klantsegment, een proces. Bij Hubby draaiden werkstudenten mee als founder’s associate op strategisch niveau in plaats van uitvoerend op de zijlijn, en dat verschil is precies waarom mensen blijven.",
        },
        {
          h2: "Investeer in de eerste maand, niet in de wervingsadvertentie",
          p: "De meeste bedrijven besteden weken aan het schrijven van een vacaturetekst en een middag aan de onboarding. Draai dat om. Een goede eerste maand, met een duidelijk aanspreekpunt, realistische doelen en snelle feedback, bepaalt of iemand na drie maanden nog gemotiveerd is of stilletjes al aan het afhaken is.",
        },
        {
          h2: "Betaal alsof het structureel werk is, want dat is het",
          p: "Niets ondermijnt betrokkenheid sneller dan het gevoel dat je onderbetaald wordt omdat je toevallig nog studeert. Een eerlijk uurtarief is geen extraatje, het is de basis waarop de rest van je retentiestrategie rust.",
        },
        {
          h2: "Bouw een tweede en derde rol voordat de eerste vertrekt",
          p: "Een instroom die blijft plakken ontstaat niet uit één goede hire, maar uit een doorlopende structuur: als een werkstudent klaar is om door te groeien, moet er al een volgende rol klaarstaan, en idealiter al een nieuwe werkstudent die instroomt. Dat voorkomt dat kennis met één vertrek de deur uit loopt.",
        },
        {
          h2: "Zoek breder dan je eigen netwerk",
          p: "Wie alleen via via werft, blijft vissen in dezelfde vijver en mist het grootste deel van geschikt talent. Een bredere community, met studenten van verschillende opleidingen en achtergronden, levert niet alleen meer kandidaten op maar ook een diversere blik op je product of dienst.",
        },
      ],
      en: [
        {
          p: "Companies that have to go looking for \"someone junior\" every six months usually don't have a hiring problem. They have a retention problem. Bringing people in is relatively easy; making sure they stay, grow, and feel ownership over the work is where most organisations lose the thread.",
        },
        {
          h2: "Start with ownership, not tasks",
          p: "Junior talent that only gets handed loose tasks keeps feeling like temporary staff, even on a one-year contract. Instead, hand over a bounded piece of the company someone genuinely owns: a market, a customer segment, a process. At Hubby, working students operated as founder's associates at a strategic level rather than execution on the sidelines, and that difference is exactly why people stay.",
        },
        {
          h2: "Invest in the first month, not the job ad",
          p: "Most companies spend weeks writing a job posting and an afternoon on onboarding. Flip that. A strong first month, with a clear point of contact, realistic goals and fast feedback, decides whether someone is still motivated after three months or quietly checking out already.",
        },
        {
          h2: "Pay like it's structural work, because it is",
          p: "Nothing undermines engagement faster than feeling underpaid because you happen to still be studying. A fair hourly rate isn't a nice extra, it's the foundation the rest of your retention strategy rests on.",
        },
        {
          h2: "Build the second and third role before the first one leaves",
          p: "A pipeline that sticks doesn't come from one good hire, it comes from an ongoing structure: when a working student is ready to grow into something bigger, the next role should already be lined up, and ideally a new working student already coming in behind them. That's what stops knowledge from walking out the door with a single departure.",
        },
        {
          h2: "Look beyond your own network",
          p: "If you only hire through personal connections, you keep fishing in the same small pond and miss most of the suitable talent out there. A broader community, spanning different degrees and backgrounds, doesn't just bring more candidates, it brings a more varied perspective on your product or service too.",
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
      nl: "“Het is toch maar een student” is geen argument voor een laag uurtarief. Hoe je wél tot een eerlijk bedrag komt.",
      en: "\"They're just a student\" is not an argument for a low hourly rate. How to actually land on a fair number.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "De meest gehoorde reden om een werkstudent onder de marktwaarde te betalen is dat het “toch maar” een student is. Maar een werkstudent is geen stagiair die vooral komt leren: het is iemand die een gewone arbeidsovereenkomst heeft, gewoon werk doet, en gewoon recht heeft op een salaris dat daarbij past.",
        },
        {
          h2: "Begin bij het wettelijk minimumloon, niet erbij vandaan",
          p: "Het wettelijk minimumuurloon is een ondergrens, geen richtlijn. Als een werkstudent hetzelfde werk doet als een junior collega met een fulltime contract, zou het uurtarief in dezelfde orde van grootte moeten liggen, ook al zijn het minder uren per week.",
        },
        {
          h2: "Kijk naar het werk, niet naar de titel op het cv",
          p: "Een werkstudent die zelfstandig een deel van een markt beheert, klantcontact voert of meedraait in finance doet ander werk dan iemand die alleen data invoert. Het tarief moet het niveau van verantwoordelijkheid volgen, niet de leeftijd of studiefase van de persoon die het werk doet.",
        },
        {
          h2: "Vergelijk met wat vergelijkbare rollen elders betalen",
          p: "Voor de meeste steden en sectoren is er een redelijke bandbreedte te vinden voor werkstudentrollen op vergelijkbaar niveau. Een tarief dat structureel onder die bandbreedte zit, is geen scherpe deal, het is een teken dat je binnenkort weer op zoek moet naar iemand nieuw.",
        },
        {
          h2: "Reken door wat onderbetalen je écht kost",
          p: "Een te laag tarief bespaart op papier een paar euro per uur, maar kost in de praktijk meer: hogere uitstroom, meer tijd kwijt aan opnieuw werven en inwerken, en een werkstudent die zich niet volledig inzet omdat het gevoel van eerlijke waardering ontbreekt. Fair betalen is geen kostenpost, het is de goedkoopste manier om iemand te houden.",
        },
        {
          h2: "Waarom VOIDS hier scherp op is",
          p: "Toegang tot relevante werkervaring hoort niet afhankelijk te zijn van wie het zich kan veroorloven om voor weinig te werken. Daarom geven we bij VOIDS zelf de voorkeur aan werkstudentschappen boven stages, en houden we bij geplaatste stages minimaal de wettelijke stagevergoeding-norm van €800 bruto per maand fulltime aan als ondergrens.",
        },
      ],
      en: [
        {
          p: "The most common reason to pay a working student below market value is that they're \"just\" a student. But a working student isn't an intern who's mainly there to learn: it's someone with a regular employment contract, doing regular work, with the same right to a salary that matches it.",
        },
        {
          h2: "Start from the statutory minimum wage, not away from it",
          p: "The statutory minimum hourly wage is a floor, not a target. If a working student is doing the same work as a junior colleague on a full-time contract, the hourly rate should be in the same range, even with fewer hours per week.",
        },
        {
          h2: "Look at the work, not the title on the CV",
          p: "A working student who independently runs part of a market, handles client contact, or operates inside finance is doing different work than someone who's just entering data. The rate should track the level of responsibility, not the age or study stage of the person doing the work.",
        },
        {
          h2: "Compare against what similar roles pay elsewhere",
          p: "For most cities and sectors, there's a reasonable range to be found for working-student roles at a comparable level. A rate that sits structurally below that range isn't a smart deal, it's a sign you'll be hiring again soon.",
        },
        {
          h2: "Work out what underpaying actually costs you",
          p: "A low rate saves a few euros an hour on paper, but costs more in practice: higher turnover, more time spent rehiring and re-onboarding, and a working student who doesn't fully commit because the sense of fair recognition isn't there. Paying fairly isn't a cost, it's the cheapest way to keep someone.",
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
      nl: "Niet nog een motivatiebrief vol “ik ben leergierig en communicatief sterk”. Hoe je een profiel schrijft dat laat zien wie je echt bent.",
      en: "Not another cover letter full of \"eager to learn and a strong communicator.\" How to write a profile that actually shows who you are.",
    },
    read: { nl: "4 min", en: "4 min" },
    body: {
      nl: [
        {
          p: "Bijna iedereen schrijft hetzelfde motivatieprofiel: leergierig, communicatief sterk, werkt goed in teamverband. Het is niet fout, maar het zegt ook niets, want het past op iedere kandidaat voor iedere rol. Een matchprofiel dat opvalt, doet het tegenovergestelde: het is zo specifiek dat het alleen op jou past.",
        },
        {
          h2: "Begin bij waarom, niet bij wat",
          p: "In plaats van op te sommen wat je allemaal gedaan hebt, leg uit waaróm je die dingen deed. Koos je voor die studentenvereniging omdat je van organiseren houdt, of omdat je merkte dat je energie krijgt van mensen bij elkaar brengen? Dat “waarom” is precies wat een recruiter of hiring manager wil weten, want dat voorspelt hoe je je gedraagt in een rol die nog niet bestaat op je cv.",
        },
        {
          h2: "Gebruik concrete situaties, geen bijvoeglijke naamwoorden",
          p: "“Ik ben proactief” overtuigt niemand. “Toen de planning vastliep, heb ik zelf drie leveranciers gebeld en een alternatief geregeld voordat iemand het me vroeg” wel. Kies twee of drie concrete momenten uit je studie, bijbaan of vereniging die laten zien hoe je werkt, in plaats van tien woorden die dat beweren.",
        },
        {
          h2: "Wees specifiek over wat je zoekt, niet alleen wat je kan",
          p: "Een profiel dat alleen gaat over vaardigheden, vertelt een bedrijf niet of de rol bij je past. Benoem ook waar je naartoe wilt: het type werk, het soort team, het tempo waarin je wilt groeien. Dat maakt een match kansrijker, want een goede match werkt twee kanten op.",
        },
        {
          h2: "Laat het kort en specifiek zijn, niet lang en volledig",
          p: "Een matchprofiel hoeft geen compleet cv in lopende tekst te zijn. Kies liever drie scherpe punten over jezelf dan tien vage. Wie alles wil zeggen, zegt uiteindelijk niets dat blijft hangen.",
        },
        {
          h2: "Karakter wint het van kruisjes op een lijst",
          p: "Steeds meer bedrijven kijken verder dan een rijtje vaardigheden en willen weten wie er precies achter het cv zit. Een matchprofiel dat je karakter, drijfveren en manier van werken laat zien, is precies waar dat soort selectie op let, en dat is ook waarom VOIDS bij elke match verder kijkt dan een lijst met kruisjes.",
        },
      ],
      en: [
        {
          p: "Almost everyone writes the same motivation profile: eager to learn, a strong communicator, works well in a team. It's not wrong, but it doesn't say anything either, because it fits every candidate for every role. A match profile that stands out does the opposite: it's specific enough that it only fits you.",
        },
        {
          h2: "Start with why, not what",
          p: "Instead of listing everything you've done, explain why you did it. Did you join that student association because you love organising things, or because you noticed you get energy from bringing people together? That \"why\" is exactly what a recruiter or hiring manager wants to know, because it predicts how you'll behave in a role that isn't on your CV yet.",
        },
        {
          h2: "Use concrete moments, not adjectives",
          p: "\"I'm proactive\" convinces no one. \"When the planning fell apart, I called three suppliers myself and arranged an alternative before anyone asked\" does. Pick two or three concrete moments from your studies, side job, or association that show how you work, instead of ten words that just claim it.",
        },
        {
          h2: "Be specific about what you want, not just what you can do",
          p: "A profile that only covers skills doesn't tell a company whether the role actually fits you. Name what you're moving toward too: the type of work, the kind of team, the pace you want to grow at. That makes a match more likely, because a good match works in both directions.",
        },
        {
          h2: "Keep it short and specific, not long and complete",
          p: "A match profile doesn't need to be a full CV written out in prose. Pick three sharp points about yourself over ten vague ones. Whoever tries to say everything usually ends up saying nothing that sticks.",
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
      nl: "Meer dan alleen geld op je rekening: wat relevant, betaald werk tijdens je studie daadwerkelijk voor je doet.",
      en: "More than just money in your account: what relevant, paid work during your studies actually does for you.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Bijna iedere student werkt ergens naast de studie, maar niet elk werk levert hetzelfde op. Een bijbaan die niets met je opleiding te maken heeft, betaalt je huur. Betaald werk dat wél aansluit, betaalt je huur én je toekomst.",
        },
        {
          h2: "Je ontdekt wat werk echt inhoudt",
          p: "Colleges leggen theorie uit, maar niets vertelt je zo snel of een sector bij je past als er daadwerkelijk in werken. Een paar maanden meedraaien in marketing, finance of operations laat zien wat de dagelijkse praktijk is, iets waar geen enkel vak je op voorbereidt.",
        },
        {
          h2: "Je bouwt een cv dat overtuigt, niet alleen vult",
          p: "Een cv vol vage bijbaantjes overtuigt niemand. Een cv met relevante werkervaring, ook al is het parttime, laat zien dat je al weet hoe het is om verantwoordelijkheid te dragen in een echte werkomgeving. Dat scheelt enorm bij je eerste sollicitatie na afstuderen.",
        },
        {
          h2: "Je verdient ondertussen gewoon geld",
          p: "Relevante werkervaring hoeft niet onbetaald of onderbetaald te zijn om waardevol te zijn. Sterker nog: als het goed betaald wordt, hoef je niet te kiezen tussen rondkomen en ervaring opdoen. Dat zou geen luxe moeten zijn, maar de norm.",
        },
        {
          h2: "Je leert plannen onder echte druk",
          p: "Werk combineren met tentamens en deadlines dwingt je om te plannen op een manier die de meeste studieboeken niet aanleren. Die vaardigheid, prioriteren onder tijdsdruk, is precies wat werkgevers later zoeken in een starter.",
        },
        {
          h2: "Waarom dit niet voor iedereen even makkelijk is",
          p: "Niet elke student heeft dezelfde toegang tot relevante, betaalde werkervaring. Wie een financieel vangnet heeft, kan het zich veroorloven een onbetaalde stage aan te nemen; wie dat niet heeft, neemt vaak genoegen met een bijbaan die niets oplevert voor de studie. Dat verschil is precies waarom VOIDS zich richt op betaalde, relevante rollen: werkervaring die telt, zou niet afhankelijk moeten zijn van wie het zich kan veroorloven.",
        },
      ],
      en: [
        {
          p: "Almost every student works alongside their studies, but not all work brings the same thing. A side job unrelated to your degree pays your rent. Paid work that actually connects to your field pays your rent and your future.",
        },
        {
          h2: "You find out what work actually looks like",
          p: "Lectures explain theory, but nothing tells you whether a sector suits you as fast as actually working in it. A few months inside marketing, finance or operations shows you the daily reality, something no course can prepare you for.",
        },
        {
          h2: "You build a CV that convinces, not just fills space",
          p: "A CV full of vague side jobs convinces no one. A CV with relevant work experience, even part-time, shows you already know what it's like to carry responsibility in a real work environment. That makes a real difference at your first application after graduating.",
        },
        {
          h2: "You earn actual money in the meantime",
          p: "Relevant work experience doesn't need to be unpaid or underpaid to be valuable. In fact, if it's paid properly, you don't have to choose between making ends meet and gaining experience. That shouldn't be a luxury, it should be the standard.",
        },
        {
          h2: "You learn to plan under real pressure",
          p: "Combining work with exams and deadlines forces you to plan in a way most textbooks never teach. That skill, prioritising under time pressure, is exactly what employers later look for in a starter.",
        },
        {
          h2: "Why this isn't equally easy for everyone",
          p: "Not every student has the same access to relevant, paid work experience. Someone with a financial safety net can afford to take an unpaid internship; someone without one often settles for a side job that does nothing for their studies. That gap is exactly why VOIDS focuses on paid, relevant roles: work experience that counts shouldn't depend on who can afford it.",
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
      nl: "De overstap van collegebanken naar je eerste echte baan voelt groot. Vijf concrete stappen om die overstap kleiner te maken.",
      en: "The jump from lecture halls to your first real job feels huge. Five concrete steps to make that jump smaller.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "De overstap van studeren naar werken voelt vaak als een sprong in het diepe, vooral als je niet precies weet wat je wilt. Het goede nieuws: die overstap hoeft geen sprong te zijn als je hem in stukken opdeelt. Vijf stappen die daadwerkelijk helpen.",
        },
        {
          h2: "1. Zoek eerst uit wat je drijft, niet welke titel je wilt",
          p: "“Marketeer worden” is geen doel, het is een label. Kijk in plaats daarvan naar wat voor werk je energie geeft: mensen overtuigen, cijfers doorgronden, dingen bouwen, structuur aanbrengen in chaos. Die drijfveer vertaalt zich naar meer functies dan je denkt, en voorkomt dat je jezelf vastzet op één titel die misschien niet eens bij je past.",
        },
        {
          h2: "2. Doe relevante ervaring op vóór je afstudeert",
          p: "Wachten tot na je diploma om te ontdekken wat werk inhoudt, is de duurste manier om erachter te komen dat een sector niet bij je past. Een werkstudentbaan tijdens je studie geeft je die informatie eerder, en levert meteen relevante ervaring op voor je eerste sollicitatie.",
        },
        {
          h2: "3. Bouw een netwerk voordat je het nodig hebt",
          p: "Een netwerk opbouwen op het moment dat je een baan nodig hebt, is te laat. Praat tijdens je studie al met mensen die het werk doen waar jij nieuwsgierig naar bent, sluit je aan bij een community van andere studenten en starters, en vraag gewoon hoe hun werk er in de praktijk uitziet.",
        },
        {
          h2: "4. Schrijf sollicitaties die specifiek zijn, niet compleet",
          p: "Eén generieke motivatiebrief die je naar twintig vacatures stuurt, overtuigt niemand. Een korte, specifieke reactie die laat zien dat je de rol en het bedrijf snapt, wint het altijd van een langere, algemene brief.",
        },
        {
          h2: "5. Laat je matchen op basis van wie je bent, niet alleen op je cv",
          p: "De beste eerste baan is niet per se de baan met de hoogste titel of het bekendste bedrijf, het is de baan waarin je karakter en drijfveren passen bij het team en het werk. Dat is precies waarom een goede match meer kijkt dan een cv: naar wat je drijft, hoe je werkt, en waar je naartoe wilt groeien.",
        },
      ],
      en: [
        {
          p: "The move from studying to working often feels like jumping into the deep end, especially if you don't know exactly what you want yet. The good news: it doesn't have to be a jump if you break it into pieces. Five steps that actually help.",
        },
        {
          h2: "1. Figure out what drives you before what title you want",
          p: "\"Becoming a marketer\" isn't a goal, it's a label. Look instead at what kind of work gives you energy: convincing people, digging into numbers, building things, bringing structure to chaos. That drive translates to more roles than you'd think, and stops you from locking yourself into one title that might not even suit you.",
        },
        {
          h2: "2. Get relevant experience before you graduate",
          p: "Waiting until after your degree to find out what work actually feels like is the most expensive way to discover a sector isn't for you. A working-student role during your studies gives you that information earlier, and gets you relevant experience for your first job application at the same time.",
        },
        {
          h2: "3. Build a network before you need one",
          p: "Building a network the moment you need a job is too late. Talk to people already doing the work you're curious about while you're still studying, join a community of other students and starters, and simply ask what their work actually looks like day to day.",
        },
        {
          h2: "4. Write applications that are specific, not complete",
          p: "One generic cover letter sent to twenty job postings convinces no one. A short, specific response that shows you understand the role and the company beats a longer, general letter every time.",
        },
        {
          h2: "5. Get matched on who you are, not just your CV",
          p: "The best first job isn't necessarily the one with the fanciest title or the best-known company, it's the one where your character and drive fit the team and the work. That's exactly why a good match looks beyond a CV: at what drives you, how you work, and where you want to grow.",
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
      nl: "Een indrukwekkende functietitel zegt steeds minder over of een baan echt past. Waarom karakter en drijfveren de betere voorspeller zijn.",
      en: "An impressive job title says less and less about whether a job actually fits. Why character and motivation are the better predictor.",
    },
    read: { nl: "4 min", en: "4 min" },
    body: {
      nl: [
        {
          p: "Vorige generaties kozen een baan vaak op naam en titel: een groot bedrijf, een indrukwekkende functie, een duidelijke carrièreladder. Gen Z stelt een andere vraag: past dit werk, dit team en deze manier van werken bij wie ik ben? Dat is geen verwenning, het is een logische reactie op een arbeidsmarkt die minder voorspelbaar is dan die van hun ouders.",
        },
        {
          h2: "Functietitels vertellen steeds minder",
          p: "“Marketing medewerker” bij het ene bedrijf betekent iets compleet anders dan bij het andere: bij de één content maken, bij de ander vooral spreadsheets bijhouden. Nu functies zo verschillen per bedrijf, zegt een titel weinig over de dagelijkse praktijk, en logischerwijs gaan kandidaten op zoek naar iets dat dat wél voorspelt.",
        },
        {
          h2: "Karakter voorspelt beter dan een cv",
          p: "Een cv laat zien wat iemand heeft gedaan, niet hoe iemand werkt onder druk, met onduidelijkheid, of in een klein team zonder vaste processen. Juist bij junior rollen, waar ervaring nog beperkt is, is karakter, hoe iemand met problemen omgaat, wat iemand energie geeft, wat iemand drijft, een betere voorspeller van succes dan een lijstje eerdere functies.",
        },
        {
          h2: "Dit werkt twee kanten op",
          p: "Matchen op karakter betekent niet alleen dat bedrijven verder kijken dan een cv. Het betekent ook dat kandidaten kritischer kijken naar bedrijven: past de cultuur, is er ruimte om te groeien, wordt er eerlijk betaald. Beide kanten stellen scherpere vragen, en dat levert uiteindelijk matches op die langer standhouden.",
        },
        {
          h2: "Waarom dit ook eerlijker is",
          p: "Selecteren op cv-signalen zoals een bekende stage of een prestigieuze studievereniging bevoordeelt onbedoeld wie toegang had tot die kansen, en dat is niet gelijk verdeeld. Selecteren op karakter en drijfveren geeft iedereen een eerlijkere uitgangspositie, ongeacht welke stage wel of niet op iemands cv staat.",
        },
        {
          h2: "Hoe dat er in de praktijk uitziet",
          p: "Bij VOIDS betekent dit dat elke match begint met de vraag wat iemand drijft en hoe iemand werkt, niet met een lijst kruisjes op een functieomschrijving. Dat is geen trucje om jong talent te paaien, het is simpelweg een betere manier om te voorspellen of een match daadwerkelijk gaat werken.",
        },
      ],
      en: [
        {
          p: "Previous generations often picked a job by name and title: a big company, an impressive function, a clear career ladder. Gen Z asks a different question: does this work, this team and this way of working actually fit who I am? That's not entitlement, it's a logical response to a labour market that's less predictable than their parents' was.",
        },
        {
          h2: "Job titles say less and less",
          p: "\"Marketing employee\" means something completely different at one company than another: creating content at one, mostly maintaining spreadsheets at the other. Now that roles vary so much between companies, a title says little about the daily reality, and it makes sense candidates go looking for something that actually predicts it.",
        },
        {
          h2: "Character predicts better than a CV",
          p: "A CV shows what someone has done, not how someone works under pressure, with ambiguity, or in a small team without fixed processes. Especially in junior roles, where experience is still limited, character, how someone handles problems, what gives someone energy, what drives them, is a better predictor of success than a list of previous titles.",
        },
        {
          h2: "This works both ways",
          p: "Matching on character doesn't just mean companies look past a CV. It also means candidates look more critically at companies: does the culture fit, is there room to grow, is the pay fair. Both sides ask sharper questions, and that ultimately produces matches that hold up longer.",
        },
        {
          h2: "Why this is fairer too",
          p: "Selecting on CV signals like a well-known internship or a prestigious student association unintentionally favours whoever had access to those opportunities, and that access isn't equally distributed. Selecting on character and motivation gives everyone a fairer starting position, regardless of which internship does or doesn't appear on someone's CV.",
        },
        {
          h2: "What that looks like in practice",
          p: "At VOIDS, this means every match starts with the question of what drives someone and how they work, not a checklist against a job description. It's not a trick to flatter young talent, it's simply a better way to predict whether a match will actually work.",
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
      nl: "Werkstudent is geen aparte contractvorm. Wat een goede overeenkomst dan wél zou moeten regelen, op hoofdlijnen en zonder juridisch jargon.",
      en: "\"Working student\" isn't a separate contract type. What a good agreement should actually cover, in plain terms.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Dit artikel is algemene informatie, geen juridisch advies. Check bij twijfel altijd de actuele regels of een jurist of accountant. Wat we wél kunnen delen: waar een werkstudentovereenkomst in de praktijk over zou moeten gaan, zodat je weet welke vragen je moet stellen voordat je tekent of laat tekenen.",
        },
        {
          h2: "Er bestaat geen apart “werkstudentcontract”",
          p: "In Nederland is “werkstudent” geen juridische status met eigen regels, zoals een stage-overeenkomst dat wel is. Een werkstudent werkt op basis van een gewone arbeidsovereenkomst, meestal voor bepaalde tijd en voor een vast aantal uren per week. Dat betekent: dezelfde basisrechten als iedere werknemer, inclusief minimumloon, vakantiegeld en vakantiedagen.",
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
          p: "In the Netherlands, \"working student\" isn't a legal status with its own rules, unlike an internship agreement. A working student is employed under a regular employment contract, usually fixed-term and for a set number of hours per week. That means the same basic rights as any employee, including minimum wage, holiday pay and paid leave.",
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
      nl: "In Duitsland is de “Werkstudent” allang normaal. Wat Nederlandse bedrijven van dat model kunnen overnemen.",
      en: "In Germany, the \"Werkstudent\" has been standard practice for years. What Dutch companies can borrow from that model.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Het woord “Werkstudent” komt niet toevallig uit het Duits. In Duitsland is het al lang een gevestigde, serieuze manier van werken naast de studie, met een duidelijke plek in bedrijven en op de arbeidsmarkt. Nederland haalt dat model steeds meer in, maar er valt nog het nodige te leren van hoe het er in Duitsland al standaard uitziet.",
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
          h2: "Het wordt gezien als een serieuze wervingsstrategie, niet als bijzaak",
          p: "Duitse bedrijven, van grote corporates tot scale-ups, bouwen actief aan een pijplijn van Werkstudenten die na hun studie kunnen doorstromen naar een vaste rol. Het is geen toevallige manier om aan goedkope hulp te komen, het is een doordachte manier om junior talent vroeg te binden.",
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
          p: "Steeds meer Nederlandse bedrijven, van scale-ups tot gevestigde organisaties, zien werkstudenten niet meer als goedkope noodoplossing maar als een serieuze manier om junior capaciteit op te bouwen. Het Duitse model laat zien waar dat naartoe kan groeien als je het structureel aanpakt in plaats van ad hoc.",
        },
      ],
      en: [
        {
          p: "The word \"Werkstudent\" comes from German for a reason. In Germany, it's long been an established, serious way of working alongside studies, with a clear place in companies and in the labour market. The Netherlands is increasingly catching up, but there's still plenty to learn from how it already works as standard practice in Germany.",
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
          h2: "It's treated as a real hiring strategy, not an afterthought",
          p: "German companies, from large corporates to scale-ups, actively build a pipeline of Werkstudenten who can move into permanent roles after graduating. It's not an incidental way to get cheap help, it's a deliberate way to bind junior talent early.",
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
          p: "More and more Dutch companies, from scale-ups to established organisations, no longer see working students as a cheap stopgap but as a serious way to build junior capacity. The German model shows where that can grow toward if you approach it structurally instead of ad hoc.",
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
      nl: "De eerste maand bepaalt of iemand na drie maanden nog gemotiveerd is. Een concreet onboardingplan, week voor week.",
      en: "The first month decides whether someone is still motivated after three. A concrete onboarding plan, week by week.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Veel bedrijven besteden meer tijd aan het schrijven van de vacaturetekst dan aan de eerste maand van iemands onboarding. Dat is precies verkeerd om: de eerste maand bepaalt grotendeels of een werkstudent na drie maanden nog gemotiveerd is, of stilletjes al aan het afhaken is.",
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
      ],
      en: [
        {
          p: "Many companies spend more time writing the job posting than on someone's first month of onboarding. That's exactly backwards: the first month largely decides whether a working student is still motivated after three months, or already quietly checking out.",
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
      nl: "Niet elk aanbod dat “ervaring” en “groeikansen” belooft, houdt zich daar ook aan. Vijf signalen om op te letten voordat je tekent.",
      en: "Not every offer that promises \"experience\" and \"growth\" actually delivers on it. Five signals to watch for before you sign.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Als student is het verleidelijk om een aanbod snel aan te nemen, zeker als het je eerste kans lijkt. Maar niet elk aanbod dat er goed uitziet op papier, is dat ook in de praktijk. Vijf signalen die het waard zijn om serieus te nemen voordat je tekent.",
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
      ],
      en: [
        {
          p: "As a student, it's tempting to accept an offer quickly, especially when it feels like your first real chance. But not every offer that looks good on paper holds up in practice. Five signals worth taking seriously before you sign.",
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
      nl: "“Het is sneller als ik het zelf doe” klopt precies tot het moment dat het je grootste bottleneck wordt. Waarom die eerste junior hire eerder moet dan je denkt.",
      en: "\"It's faster if I just do it myself\" is true right up until it becomes your biggest bottleneck. Why that first junior hire should come sooner than you think.",
    },
    read: { nl: "6 min", en: "6 min" },
    body: {
      nl: [
        {
          p: "Bijna elke founder herkent het: een takenlijst die groter is dan de tijd om hem af te werken, en het gevoel dat het sneller is om iets zelf te doen dan om het uit te leggen aan iemand anders. Dat gevoel klopt, tot het moment dat het je grootste bottleneck wordt.",
        },
        {
          h2: "“Sneller zelf doen” is een valkuil met houdbaarheidsdatum",
          p: "Op korte termijn is het waar: zelf iets doen kost minder tijd dan het uitleggen. Op de langere termijn betekent het dat een founder tijd blijft steken in werk dat een ander had kunnen overnemen, terwijl de tijd die daadwerkelijk founder-tijd waard is, zoals strategie, klanten en fondsenwerving, erbij inschiet.",
        },
        {
          h2: "De angst is meestal groter dan het risico",
          p: "De twee grootste angsten bij een eerste junior hire zijn kosten en tijd: kost het te veel, en heb ik wel tijd om iemand te begeleiden? Een werkstudent verlaagt beide risico’s: lagere kosten dan een fulltime hire, en een rol die groeit met de tijd die je hebt, in plaats van meteen volledig ingezet te worden.",
        },
        {
          h2: "Wachten kost meer dan het lijkt",
          p: "Elke maand dat een founder zelf uitvoerend werk blijft doen dat eigenlijk gedelegeerd kan worden, is een maand minder tijd voor het werk dat het bedrijf daadwerkelijk laat groeien. Dat is geen abstract verlies, het is direct meetbaar in gemiste deals, trage besluitvorming en een team dat op de founder blijft wachten voor beslissingen die iemand anders had kunnen nemen.",
        },
        {
          h2: "Begin klein en afgebakend, niet breed en vaag",
          p: "De beste eerste junior hire krijgt niet “een beetje van alles”, maar één duidelijk stuk eigenaarschap: een deel van de klantcommunicatie, een terugkerend rapportageproces, contentproductie. Bij Hubby draaiden werkstudenten mee als founder’s associate op strategisch niveau, precies het soort afgebakende, serieuze verantwoordelijkheid die een eerste hire kan dragen zonder dat een founder alles moet blijven controleren.",
        },
        {
          h2: "De echte vraag is niet of, maar wanneer",
          p: "De vraag is zelden of een bedrijf junior capaciteit nodig heeft, maar wanneer het te lang duurt om die vraag te stellen. Als een founder meer dan een paar uur per week besteedt aan werk dat iemand anders had kunnen doen, is dat niet een teken dat het bedrijf nog te klein is voor een hire, het is een teken dat de hire al te laat is.",
        },
      ],
      en: [
        {
          p: "Almost every founder recognises it: a to-do list bigger than the time available to clear it, and the feeling that it's faster to just do something yourself than to explain it to someone else. That feeling is true, right up until it becomes your biggest bottleneck.",
        },
        {
          h2: "\"Faster to do it myself\" is a trap with an expiry date",
          p: "In the short term it's true: doing something yourself takes less time than explaining it. In the longer term it means a founder keeps sinking time into work someone else could have taken over, while the time that's actually worth a founder's attention, like strategy, customers and fundraising, gets squeezed out.",
        },
        {
          h2: "The fear is usually bigger than the risk",
          p: "The two biggest fears around a first junior hire are cost and time: will it be too expensive, and do I even have time to guide someone? A working student lowers both risks: lower cost than a full-time hire, and a role that grows with the time you have, instead of needing to be fully utilised from day one.",
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
      nl: "Veel studenten werken naast hun studie om rond te komen, niet om ervaring op te doen. Wat dat verschil betekent voor je start op de arbeidsmarkt.",
      en: "Many students work alongside their studies to get by, not to gain experience. What that difference means for your start on the labour market.",
    },
    read: { nl: "5 min", en: "5 min" },
    body: {
      nl: [
        {
          p: "Veel studenten hebben een bijbaan, in de horeca, de detailhandel, of ergens anders waar de uren flexibel zijn. Dat werk is niet minderwaardig, het betaalt de rekeningen en leert je verantwoordelijkheid nemen. Maar op het moment dat je gaat solliciteren naar je eerste baan, telt het anders mee dan werkervaring die inhoudelijk aansluit op je studie.",
        },
        {
          h2: "Waarom bedrijven naar relevante ervaring kijken",
          p: "Een werkgever die een starter aanneemt, wil weten of iemand al eens heeft meegemaakt hoe het werkveld eruitziet: hoe een team samenwerkt, hoe deadlines lopen, hoe je met feedback omgaat in een professionele context. Een bijbaan laat zien dat je kunt werken; relevante ervaring laat zien dat je al iets weet van het vak waar je in wilt starten.",
        },
        {
          h2: "Het probleem: relevante ervaring is niet voor iedereen even bereikbaar",
          p: "Relevante stages en werkstudentbanen zijn niet altijd goed betaald, en dat maakt ze minder toegankelijk voor studenten die ook gewoon huur en boodschappen moeten betalen. Wie een financieel vangnet heeft, kan het zich veroorloven om voor weinig relevante ervaring op te doen; wie dat niet heeft, kiest vaak noodgedwongen voor een bijbaan die wel betaalt maar niets toevoegt aan het cv.",
        },
        {
          h2: "Betaald én relevant hoeft geen tegenstelling te zijn",
          p: "Het idee dat je moet kiezen tussen geld verdienen en ervaring opdoen, is geen natuurwet, het is een gevolg van hoe stages en werkstudentbanen vaak worden geprijsd. Een werkstudentbaan die eerlijk betaalt, lost precies dit probleem op: je verdient genoeg om van te leven én je bouwt aan een cv dat ertoe doet.",
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
          h2: "Why companies look for relevant experience",
          p: "An employer hiring a starter wants to know whether someone has already experienced what the field actually looks like: how a team works together, how deadlines run, how you handle feedback in a professional context. A side job shows you can work; relevant experience shows you already know something about the field you want to start in.",
        },
        {
          h2: "The problem: relevant experience isn't equally accessible to everyone",
          p: "Relevant internships and working-student jobs aren't always well paid, which makes them less accessible to students who also need to cover rent and groceries. Someone with a financial safety net can afford to gain relevant experience for little pay; someone without one often ends up choosing a side job that pays but adds nothing to their CV.",
        },
        {
          h2: "Paid and relevant don't have to be a trade-off",
          p: "The idea that you have to choose between earning money and gaining experience isn't a law of nature, it's a consequence of how internships and working-student jobs are often priced. A working-student role that pays fairly solves exactly this problem: you earn enough to live on and build a CV that actually matters.",
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
