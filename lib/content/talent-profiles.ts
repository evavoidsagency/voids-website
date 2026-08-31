import type { Lang } from "@/lib/i18n/common";

export type TalentProfile = { field: string; edu: string; skills: string; traits: string };

export const TALENT_PROFILES: Record<Lang, TalentProfile[]> = {
  nl: [
    { field: "Marketing", edu: "UvA · MSc Communication Science", skills: "Adobe · Canva · Meta Ads", traits: "Creatief, zelfstandig, sterk in executie." },
    { field: "Finance", edu: "EUR · BSc Economics, Finance & Investments", skills: "Excel macro's · Power Query", traits: "Nauwkeurig, gestructureerd, betrouwbaar." },
    { field: "Legal", edu: "VU · LLM Regulation & Governance", skills: "Beleidsanalyse · Research", traits: "Analytisch, zorgvuldig, maakt complexe materie toegankelijk." },
    { field: "Data & AI", edu: "UU · BSc Artificial Intelligence", skills: "Python · APIs · Automatisering", traits: "Pragmatisch, analytisch, scherp in het spotten van bottlenecks." },
    { field: "Business development", edu: "UvA · BSc International Business", skills: "Klantcontact · Outbound", traits: "Commercieel gedreven, sociaal, doorzettend." },
    { field: "Business support", edu: "EUR · MSc Strategic Management", skills: "Operations & planning", traits: "Vindingrijk, flexibel, pakt eigenaarschap." },
  ],
  en: [
    { field: "Marketing", edu: "UvA · MSc Communication Science", skills: "Adobe · Canva · Meta Ads", traits: "Creative, independent, strong in execution." },
    { field: "Finance", edu: "EUR · BSc Economics, Finance & Investments", skills: "Excel macros · Power Query", traits: "Precise, organised, reliable." },
    { field: "Legal", edu: "VU · LLM Regulation & Governance", skills: "Policy analysis · Research", traits: "Analytical, careful, makes complex material accessible." },
    { field: "Data & AI", edu: "UU · BSc Artificial Intelligence", skills: "Python · APIs · Automation", traits: "Pragmatic, analytical, sharp at spotting bottlenecks." },
    { field: "Business development", edu: "UvA · BSc International Business", skills: "Client-facing · Outbound", traits: "Commercially driven, social, persistent." },
    { field: "Business support", edu: "EUR · MSc Strategic Management", skills: "Operations & planning", traits: "Resourceful, adaptable, ownership-oriented." },
  ],
};
