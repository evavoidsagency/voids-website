import type { Lang } from "@/lib/i18n/common";

export const NICHES: Record<Lang, string[]> = {
  nl: ["Werkstudenten", "Stagiairs", "Starters", "Traineeships"],
  en: ["Working students", "Interns", "Starters", "Traineeships"],
};

/** name, slug — drop a matching file in /public/logos/{slug}.svg|.png to replace the placeholder. */
export const TRUSTED: [string, string][] = [
  ["Meute", "meute"],
  ["House of Inclusion", "house-of-inclusion"],
  ["Enerzien", "enerzien"],
  ["Van Oort & Van Oort", "van-oort-van-oort"],
  ["#MasterJeCijfers", "masterjecijfers"],
  ["The Cirqle", "the-cirqle"],
  ["Wallie", "wallie"],
  ["HotelPlanner", "hotelplanner"],
  ["M&G", "mg"],
  ["Go Delphi", "go-delphi"],
  ["Hubby", "hubby"],
  ["Onestone", "onestone"],
  ["Stuwr", "stuwr"],
  ["Check and Charge", "check-and-charge"],
  ["De Huismeesters", "de-huismeesters"],
  ["De Kiesmannen", "de-kiesmannen"],
  ["Dropp", "dropp"],
  ["Doing Goods", "doing-goods"],
  ["Green Team", "green-team"],
  ["Writify", "writify"],
  ["The Longevity Store", "the-longevity-store"],
  ["Joulz", "joulz"],
  ["Mila Health", "mila-health"],
  ["Bit", "bit"],
  ["Structural Collective", "structural-collective"],
  ["Monsterscore", "monsterscore"],
  ["CribConnects", "cribconnects"],
  ["Relive", "relive"],
];

export const TESTIMONIALS: Record<Lang, { quote: string; name: string; role: string; photo?: string }[]> = {
  nl: [
    {
      quote: "VOIDS leverde binnen twee weken kandidaten die precies bij onze vraag pasten.",
      name: "Bas Lemmens",
      role: "Co-founder Booking.com · President HotelPlanner",
      photo: "/testimonials/bas-lemmens.jpg",
    },
    {
      quote: "VOIDS matchte mijn sterke punten met de juiste kans: een baan die ik anders nooit was tegengekomen.",
      name: "Anna Haasnoot",
      role: "Werkstudent bij Van Oort & Van Oort",
      photo: "/testimonials/anna-haasnoot.jpg",
    },
  ],
  en: [
    {
      quote: "VOIDS delivered candidates that fit our need exactly, within two weeks.",
      name: "Bas Lemmens",
      role: "Co-founder Booking.com · President HotelPlanner",
      photo: "/testimonials/bas-lemmens.jpg",
    },
    {
      quote: "VOIDS matched my strengths with the right opportunity: a job I’d never have found otherwise.",
      name: "Anna Haasnoot",
      role: "Working student at Van Oort & Van Oort",
      photo: "/testimonials/anna-haasnoot.jpg",
    },
  ],
};
