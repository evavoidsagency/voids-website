import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/",
  title: "VOIDS · Junior talent agency Amsterdam",
  description:
    "VOIDS verbindt hoogopgeleid junior talent aan ambitieuze bedrijven via werkstudentschappen, stages en starterrollen. Voorbij het cv, met oog voor drijfveren en werkstijl.",
  image: "/photography/home-hero.jpg",
});

export default function Page() {
  return <HomePage lang="nl" />;
}
