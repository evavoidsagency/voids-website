import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/privacy",
  title: "Privacy",
  description: "Privacybeleid van VOIDS: welke gegevens we verzamelen, waarom, en welke rechten je hebt.",
});

export default function Page() {
  return <PrivacyPage lang="nl" />;
}
