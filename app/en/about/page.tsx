import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "VOIDS was founded by Eva van Raaij and Wieke Sleutjes. We fill the voids.",
  alternates: { languages: { nl: "/about", en: "/en/about" } },
};

export default function Page() {
  return <AboutPage lang="en" />;
}
