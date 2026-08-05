import type { Metadata } from "next";
import { ImpactPage } from "@/components/pages/ImpactPage";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "VOIDS exists to make the transition from study to work fairer. Recruitment is our means; equal opportunity is the goal.",
  alternates: { languages: { nl: "/impact", en: "/en/impact" } },
};

export default function Page() {
  return <ImpactPage lang="en" />;
}
