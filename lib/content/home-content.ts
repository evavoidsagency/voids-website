import type { Lang } from "@/lib/i18n/common";

/** name, slug, url — drop a matching file in /public/logos/{slug}.svg|.png to replace the placeholder. url is optional; omit for companies we couldn't confidently verify. */
/** Order is deliberately interleaved by dominant logo color (checked each
    file directly) so same-color logos never sit next to each other: black
    logos are the largest single group (11 of 28), so they're spaced against
    orange/purple/blue clusters throughout — only the very end has one
    unavoidable black-black pair once the other colors run out. */
export const TRUSTED: { name: string; slug: string; url?: string }[] = [
  { name: "Joulz", slug: "joulz", url: "https://joulz.nl/" },
  { name: "Hubby", slug: "hubby", url: "https://hubbyesim.com/" },
  { name: "Van Oort & Van Oort", slug: "van-oort-van-oort", url: "https://www.vanoortenvanoort.nl/" },
  { name: "De Kiesmannen", slug: "de-kiesmannen", url: "https://www.dekiesmannen.nl/" },
  { name: "Relive", slug: "relive", url: "https://www.relive.com/" },
  { name: "Writify", slug: "writify", url: "https://www.writify.co/" },
  { name: "Structural Collective", slug: "structural-collective", url: "https://www.structuralcollective.nl/" },
  { name: "Onestone", slug: "onestone", url: "https://www.1stoneadvisory.com/" },
  { name: "M&G", slug: "mg", url: "https://www.michael-giso.com/" },
  { name: "Dropp", slug: "dropp", url: "https://dropp.amsterdam/" },
  { name: "Mila Health", slug: "mila-health", url: "https://milahealth.co/" },
  { name: "HotelPlanner", slug: "hotelplanner", url: "https://www.hotelplanner.com/" },
  { name: "Meute", slug: "meute", url: "https://www.meute.nl/" },
  { name: "WePartyNow", slug: "wepartynow", url: "https://wepartynow.com/nl" },
  { name: "Stuwr", slug: "stuwr", url: "https://www.stuwr.nl/" },
  { name: "CribConnects", slug: "cribconnects", url: "https://www.cribconnects.com/" },
  { name: "De Huismeesters", slug: "de-huismeesters", url: "https://dehuismeesters.com/" },
  { name: "Go Delphi", slug: "go-delphi", url: "https://www.godelphi.nl/" },
  { name: "#MasterJeCijfers", slug: "masterjecijfers", url: "https://www.masterjecijfers.nl/" },
  { name: "Monsterscore", slug: "monsterscore", url: "https://monsterscore.nl/" },
  { name: "House of Inclusion", slug: "house-of-inclusion", url: "https://www.house-of-inclusion.com/" },
  { name: "The Cirqle", slug: "the-cirqle", url: "https://thecirqle.com/" },
  { name: "Check and Charge", slug: "check-and-charge", url: "https://www.checkandcharge.com/" },
  { name: "Enerzien", slug: "enerzien", url: "https://www.enerzien.nl/" },
  { name: "Bit", slug: "bit", url: "https://wearebit.com/" },
  { name: "Green Team", slug: "green-team", url: "https://greenteam.energy/" },
  { name: "Doing Goods", slug: "doing-goods", url: "https://www.doing-goods.com/" },
  { name: "The Longevity Store", slug: "the-longevity-store", url: "https://thelongevitystore.com/" },
];

export const TESTIMONIALS: Record<Lang, { quote: string; name: string; role: string; photo?: string; side: "company" | "talent" }[]> = {
  nl: [
    {
      quote: "VOIDS leverde binnen twee weken kandidaten die precies bij onze vraag pasten.",
      name: "Bas Lemmens",
      role: "Co-founder Booking.com · President HotelPlanner",
      photo: "/testimonials/bas-lemmens.jpg",
      side: "company",
    },
    {
      quote: "VOIDS matchte mijn sterke punten met de juiste kans: een baan die ik anders nooit was tegengekomen.",
      name: "Anna Haasnoot",
      role: "Werkstudent bij Van Oort & Van Oort",
      photo: "/testimonials/anna-haasnoot.jpg",
      side: "talent",
    },
  ],
  en: [
    {
      quote: "VOIDS delivered candidates that fit our need exactly, within two weeks.",
      name: "Bas Lemmens",
      role: "Co-founder Booking.com · President HotelPlanner",
      photo: "/testimonials/bas-lemmens.jpg",
      side: "company",
    },
    {
      quote: "VOIDS matched my strengths with the right opportunity: a job I’d never have found otherwise.",
      name: "Anna Haasnoot",
      role: "Working student at Van Oort & Van Oort",
      photo: "/testimonials/anna-haasnoot.jpg",
      side: "talent",
    },
  ],
};
