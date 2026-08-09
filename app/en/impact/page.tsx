import type { Metadata } from "next";
import { ImpactPage } from "@/components/pages/ImpactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/impact",
  title: "Impact",
  description:
    "VOIDS exists to make the transition from study to work fairer. Recruitment is our means; equal opportunity is the goal.",
  image: "/photography/impact-band.jpg",
});

export default function Page() {
  return <ImpactPage lang="en" />;
}
