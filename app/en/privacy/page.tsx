import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/privacy",
  title: "Privacy",
  description: "VOIDS privacy policy: what data we collect, why, and what rights you have.",
});

export default function Page() {
  return <PrivacyPage lang="en" />;
}
