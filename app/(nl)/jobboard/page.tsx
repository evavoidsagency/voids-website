import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/jobboard",
  title: "Jobboard",
  description: "Het VOIDS jobboard met open werkstudent-, stage- en starterrollen komt eraan. Join de WhatsApp-community voor passende kansen.",
});

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="JOBBOARD KOMT ERAAN."
      body="Het jobboard met open rollen en quick-apply landt in fase 3 van het platform. Wil je nu al passende rollen ontvangen? Join de WhatsApp-community via de knop rechtsboven."
    />
  );
}
