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

export const WHY_WS: Record<Lang, { title: string; text: string; icon: "flex" | "trust" | "growth" | "spark" }[]> = {
  nl: [
    {
      title: "Flexibel & kostenefficiënt",
      text: "Je schaalt op en af in je eigen tempo, tegen lagere kosten dan een fulltime starter. Geen drempel van een vast contract.",
      icon: "flex",
    },
    {
      title: "Eerst goed leren kennen",
      text: "Je bouwt een langere relatie op dan bij een korte opdracht en leert iemand écht kennen vóórdat er een vast aanbod op tafel ligt.",
      icon: "trust",
    },
    {
      title: "Ruimte om door te groeien",
      text: "De optie blijft open om iemand door te laten groeien naar een structurele rol, wanneer dat bij jullie beiden past.",
      icon: "growth",
    },
    {
      title: "Extra gemotiveerd",
      text: "Het werk telt mee voor hun studie én hun cv, niet alleen als bijbaantje: dat merk je terug in de betrokkenheid en de kwaliteit van het werk.",
      icon: "spark",
    },
  ],
  en: [
    {
      title: "Flexible & cost-efficient",
      text: "You scale up and down at your own pace, at a lower cost than a full-time starter. No fixed-contract threshold.",
      icon: "flex",
    },
    {
      title: "Get to know them first",
      text: "You build a longer relationship than a short assignment gives you, and get to really know someone before any permanent offer is on the table.",
      icon: "trust",
    },
    {
      title: "Room to grow",
      text: "The option stays open to grow them into a structural role, whenever that fits you both.",
      icon: "growth",
    },
    {
      title: "Extra motivated",
      text: "The work counts toward their studies and their CV, not just a side job: that shows up in how engaged they are and in the quality of the work.",
      icon: "spark",
    },
  ],
};
