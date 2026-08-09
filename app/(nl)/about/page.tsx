import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/about",
  title: "Over ons",
  description: "VOIDS is opgericht door Eva van Raaij en Wieke Sleutjes in Amsterdam. We fill the voids: de gaten tussen studie en werk.",
  image: "/photography/about-hero.jpg",
});

export default function Page() {
  return <AboutPage lang="nl" />;
}
