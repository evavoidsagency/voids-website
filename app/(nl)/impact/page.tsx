import type { Metadata } from "next";
import { ImpactPage } from "@/components/pages/ImpactPage";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "VOIDS bestaat om de overgang van studie naar werk eerlijker te maken. Recruitment is ons middel, gelijke kansen zijn het doel.",
  alternates: { languages: { nl: "/impact", en: "/en/impact" } },
};

export default function Page() {
  return <ImpactPage lang="nl" />;
}
