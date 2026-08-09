import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/about",
  title: "About",
  description: "VOIDS was founded by Eva van Raaij and Wieke Sleutjes in Amsterdam. We fill the voids: the gaps between study and work.",
  image: "/photography/about-hero.jpg",
});

export default function Page() {
  return <AboutPage lang="en" />;
}
