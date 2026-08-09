import type { Metadata } from "next";
import { ImpactPage } from "@/components/pages/ImpactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/impact",
  title: "Impact",
  description:
    "VOIDS bestaat om de overgang van studie naar werk eerlijker te maken. Recruitment is ons middel, gelijke kansen zijn het doel.",
  image: "/photography/impact-band.jpg",
});

export default function Page() {
  return <ImpactPage lang="nl" />;
}
