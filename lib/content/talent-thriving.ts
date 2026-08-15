import type { Lang } from "@/lib/i18n/common";

/** Real quotes from placed working students, carried over from the previous voids.agency site. */
export const TALENT_THRIVING: Record<Lang, { quote: string; name: string; role: string; slug: string }[]> = {
  nl: [
    {
      quote:
        "Bij Meute, een creatief campagnebureau in Amsterdam, ondersteun ik het marketingteam bij het voorbereiden en coördineren van regionale en landelijke campagnes. Zonder VOIDS was ik deze relevante parttime rol nooit tegengekomen.",
      name: "Thomke Tierolff",
      role: "Werkstudent bij Meute",
      slug: "thomke-tierolff",
    },
    {
      quote:
        "Als werkstudent was ik de sidekick van business coach Olivier Zeestraten bij #MasterJeCijfers: ik hielp trainingen voorbereiden en hield tijdens sessies alles op schema. Een leerzame manier om van echte klanten te leren.",
      name: "Charlotte Pallandt",
      role: "Werkstudent bij #MasterJeCijfers",
      slug: "charlotte-pallandt",
    },
  ],
  en: [
    {
      quote:
        "At Meute, a creative campaign agency in Amsterdam, I support the marketing team in preparing and coordinating regional and national campaigns. Without VOIDS, I'd never have found this relevant part-time role.",
      name: "Thomke Tierolff",
      role: "Working student at Meute",
      slug: "thomke-tierolff",
    },
    {
      quote:
        "As a working student I joined business coach Olivier Zeestraten at #MasterJeCijfers as his sidekick during client trainings, keeping everything on schedule. A great way to learn from real clients.",
      name: "Charlotte Pallandt",
      role: "Working student at #MasterJeCijfers",
      slug: "charlotte-pallandt",
    },
  ],
};
