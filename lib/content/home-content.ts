import type { Lang } from "@/lib/i18n/common";

export const NICHES: Record<Lang, string[]> = {
  nl: ["Werkstudenten", "Stagiairs", "Starters", "Traineeships"],
  en: ["Working students", "Interns", "Starters", "Traineeships"],
};

/** name, slug, url — drop a matching file in /public/logos/{slug}.svg|.png to replace the placeholder. url is optional; omit for companies we couldn't confidently verify. */
/** Order is deliberately shuffled so monochrome (black/white) logos don't cluster next to each other. */
export const TRUSTED: { name: string; slug: string; url?: string }[] = [
  { name: "De Kiesmannen", slug: "de-kiesmannen", url: "https://www.dekiesmannen.nl/" },
  { name: "Hubby", slug: "hubby", url: "https://hubbyesim.com/" },
  { name: "Onestone", slug: "onestone", url: "https://www.1stoneadvisory.com/" },
  { name: "Writify", slug: "writify", url: "https://www.writify.co/" },
  { name: "Dropp", slug: "dropp", url: "https://dropp.amsterdam/" },
  { name: "M&G", slug: "mg", url: "https://www.michael-giso.com/" },
  { name: "WePartyNow", slug: "wepartynow", url: "https://wepartynow.com/nl" },
  { name: "Stuwr", slug: "stuwr", url: "https://www.stuwr.nl/" },
  { name: "Joulz", slug: "joulz", url: "https://joulz.nl/" },
  { name: "Monsterscore", slug: "monsterscore", url: "https://monsterscore.nl/" },
  { name: "CribConnects", slug: "cribconnects", url: "https://www.cribconnects.com/" },
  { name: "#MasterJeCijfers", slug: "masterjecijfers", url: "https://www.masterjecijfers.nl/" },
  { name: "HotelPlanner", slug: "hotelplanner", url: "https://www.hotelplanner.com/" },
  { name: "Van Oort & Van Oort", slug: "van-oort-van-oort", url: "https://www.vanoortenvanoort.nl/" },
  { name: "Bit", slug: "bit", url: "https://wearebit.com/" },
  { name: "Relive", slug: "relive", url: "https://www.relive.com/" },
  { name: "Enerzien", slug: "enerzien", url: "https://www.enerzien.nl/" },
  { name: "House of Inclusion", slug: "house-of-inclusion", url: "https://www.house-of-inclusion.com/" },
  { name: "Structural Collective", slug: "structural-collective", url: "https://www.structuralcollective.nl/" },
  { name: "Check and Charge", slug: "check-and-charge", url: "https://www.checkandcharge.com/" },
  { name: "Meute", slug: "meute", url: "https://www.meute.nl/" },
  { name: "Go Delphi", slug: "go-delphi", url: "https://www.godelphi.nl/" },
  { name: "Mila Health", slug: "mila-health", url: "https://milahealth.co/" },
  { name: "The Cirqle", slug: "the-cirqle", url: "https://thecirqle.com/" },
  { name: "Doing Goods", slug: "doing-goods", url: "https://www.doing-goods.com/" },
  { name: "De Huismeesters", slug: "de-huismeesters", url: "https://dehuismeesters.com/" },
  { name: "The Longevity Store", slug: "the-longevity-store", url: "https://thelongevitystore.com/" },
  { name: "Green Team", slug: "green-team", url: "https://greenteam.energy/" },
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
