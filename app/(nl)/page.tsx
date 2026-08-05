import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "VOIDS — Junior talent agency Amsterdam",
  description:
    "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties. Kwaliteit boven kwantiteit.",
  alternates: { languages: { nl: "/", en: "/en" } },
};

export default function Page() {
  return <HomePage lang="nl" />;
}
