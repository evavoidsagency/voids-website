import type { Metadata } from "next";
import { CommunityJobboardPage } from "@/components/pages/CommunityJobboardPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/companies/community-jobboard",
  title: "Community & jobboard",
  description: "Zet je vacature rechtstreeks onder de aandacht van 4.000+ studenten en starters in onze WhatsApp-community en op ons jobboard.",
});

export default function Page() {
  return <CommunityJobboardPage lang="nl" />;
}
