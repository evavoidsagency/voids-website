import type { Lang } from "@/lib/i18n/common";

export const PROCESS: Record<Lang, { num: string; title: string; text: string; when: string }[]> = {
  nl: [
    { num: "01", title: "Intake & briefing", text: "Wij nemen jullie rol, cultuur en groeifase door. Jij levert de richting, wij de rest.", when: "Dag 1" },
    {
      num: "02",
      title: "Sourcing, binnen en buiten de community",
      text: "We zoeken actief binnen onze community van 4.000+ studenten, via ons bredere netwerk van samenwerkingspartners, en daarbuiten via studieverenigingen, om zoveel mogelijk geschikte kandidaten te bereiken.",
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
      text: "We search actively across our 4,000+ student community, our wider network of partner organisations, and beyond through partnerships with study associations, to reach as many suitable candidates as possible.",
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
  nl: ["Business development", "Sales", "Marketing", "Communicatie", "Data", "AI & automatisering", "Finance", "Legal", "Founder's associate", "Operations", "en meer"],
  en: ["Business development", "Sales", "Marketing", "Communications", "Data", "AI & automation", "Finance", "Legal", "Founder's associate", "Operations", "and more"],
};

export const WHY_WS: Record<Lang, { title: string; text: string; icon: "flex" | "spark" | "duration" }[]> = {
  nl: [
    { title: "Vs. een starter", text: "Flexibeler en kostenefficiënter dan meteen een fulltime starter aannemen, zonder de drempel van een vast contract, terwijl je iemand al leert kennen vóór een eventueel vast aanbod.", icon: "flex" },
    { title: "Vs. een stagiair", text: "Blijft langer en groeit mee: een stagiair werkt aan een leerdoel van een paar maanden, een werkstudent draait structureel mee en kan doorgroeien binnen het team.", icon: "duration" },
    { title: "Extra gemotiveerd", text: "Het werk telt mee voor hun studie én hun cv, niet alleen als bijbaantje: dat merk je terug in de betrokkenheid.", icon: "spark" },
  ],
  en: [
    { title: "Vs. a starter", text: "More flexible and more cost-efficient than hiring a full-time starter right away, no fixed-contract threshold, while you get to know someone before any permanent offer.", icon: "flex" },
    { title: "Vs. an intern", text: "Stays longer and grows with your team: an intern works toward a few months' learning goal, a working student runs structurally and can grow within the role.", icon: "duration" },
    { title: "Extra motivated", text: "The work counts toward their studies and their CV, not just a side job: that shows up in how engaged they are.", icon: "spark" },
  ],
};
