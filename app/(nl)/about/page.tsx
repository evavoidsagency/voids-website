import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Over ons",
  description: "VOIDS is opgericht door Eva van Raaij en Wieke Sleutjes. We fill the voids.",
  alternates: { languages: { nl: "/about", en: "/en/about" } },
};

export default function Page() {
  return <AboutPage lang="nl" />;
}
