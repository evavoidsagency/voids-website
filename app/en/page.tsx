import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "VOIDS — Junior talent agency Amsterdam",
  description:
    "We connect highly-educated talent with ambitious organisations. Quality over quantity.",
  alternates: { languages: { nl: "/", en: "/en" } },
};

export default function Page() {
  return <HomePage lang="en" />;
}
