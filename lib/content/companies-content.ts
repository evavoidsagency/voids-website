import type { Lang } from "@/lib/i18n/common";

export const PROCESS: Record<Lang, { num: string; title: string; text: string; when: string }[]> = {
  nl: [
    { num: "01", title: "Intake & briefing", text: "Wij nemen jullie rol, cultuur en groeifase door. Jij levert de richting, wij de rest.", when: "Dag 1" },
    {
      num: "02",
      title: "Sourcing, binnen en buiten de community",
      text: "We zoeken actief binnen onze community van 4.000+ studenten én daarbuiten, onder andere via studieverenigingen, om zoveel mogelijk geschikte kandidaten te bereiken.",
      when: "Dag 1-7",
    },
    { num: "03", title: "Voorselectie & check", text: "Een recruiter beoordeelt elke match handmatig. Alleen de sterkste gaan door.", when: "Dag 8-14" },
    { num: "04", title: "Shortlist i.p.v. cv-stapel", text: "Jullie ontvangen 2-4 voorgeselecteerde kandidaten met onderbouwing.", when: "Week 3" },
    {
      num: "05",
      title: "Gesprekken & match",
      text: "Jullie plannen zelf de gesprekken met de kandidaten uit de shortlist en kiezen wie het beste past.",
      when: "Na shortlist",
    },
    { num: "06", title: "Nazorg & retentie", text: "We blijven contact houden om te checken of de match werkt.", when: "Doorlopend" },
  ],
  en: [
    { num: "01", title: "Intake & briefing", text: "We dig into your role, culture and growth stage. You set the direction, we do the rest.", when: "Day 1" },
    {
      num: "02",
      title: "Sourcing, inside and outside our community",
      text: "We search actively across our 4,000+ student community and beyond, including through partnerships with study associations, to reach as many suitable candidates as possible.",
      when: "Day 1-7",
    },
    { num: "03", title: "Pre-selection & review", text: "A recruiter reviews every match personally. Only the strongest make the cut.", when: "Day 8-14" },
    { num: "04", title: "Shortlist, not a CV pile", text: "You receive 2-4 pre-selected candidates, with the reasoning behind each one.", when: "Week 3" },
    {
      num: "05",
      title: "Interviews & match",
      text: "You schedule the interviews with candidates from the shortlist yourself, and choose who fits best.",
      when: "After shortlist",
    },
    { num: "06", title: "Aftercare & retention", text: "We keep checking in to make sure the match is working.", when: "Ongoing" },
  ],
};

export const ROLE_TYPES: Record<Lang, string[]> = {
  nl: ["Business development", "Sales", "Marketing", "Communicatie", "Finance", "Legal", "Founder's associate", "Operations"],
  en: ["Business development", "Sales", "Marketing", "Communications", "Finance", "Legal", "Founder's associate", "Operations"],
};

export const WHY_WS: Record<Lang, { title: string; text: string }[]> = {
  nl: [
    { title: "Vs. een stagiair", text: "Een langere, stabielere samenwerking dan een stage van een paar maanden, met iemand die na de inwerkperiode al zelfstandig meedraait." },
    { title: "Vs. een starter", text: "Flexibeler en goedkoper dan meteen een fulltime starter aannemen, zonder vast-contract-drempel, terwijl je iemand al leert kennen vóór een eventueel vast aanbod." },
    { title: "Extra gemotiveerd", text: "Het werk telt mee voor hun studie én hun cv, niet alleen als bijbaantje: dat merk je terug in de betrokkenheid." },
  ],
  en: [
    { title: "Vs. an intern", text: "A longer, more stable collaboration than a few months' internship, with someone who's running independently after onboarding." },
    { title: "Vs. a starter", text: "More flexible and cheaper than hiring a full-time starter right away, no fixed-contract threshold, while you get to know someone before any permanent offer." },
    { title: "Extra motivated", text: "The work counts toward their studies and their CV, not just a side job: that shows up in how engaged they are." },
  ],
};

export const BENCHMARK: Record<Lang, { label: string; value: string; src: string }[]> = {
  nl: [
    { label: "Werkstudent · mediaan uurtarief", value: "€ 16–24", src: "Indicatie marktdata" },
    { label: "Beschikbaarheid juniors", value: "Hoog na tentamenperiodes", src: "" },
    { label: "Werkstudentmodel in Duitsland", value: "Al standaard", src: "" },
    { label: "Onze focus", value: "Betaalde werkstudentrollen", src: "" },
  ],
  en: [
    { label: "Working student · median hourly rate", value: "€ 16–24", src: "Market-data estimate" },
    { label: "Junior availability", value: "High after exam season", src: "" },
    { label: "Working-student model in Germany", value: "Already the norm", src: "" },
    { label: "Our focus", value: "Paid working-student roles", src: "" },
  ],
};
