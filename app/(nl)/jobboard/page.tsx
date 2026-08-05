import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Jobboard", alternates: { languages: { nl: "/jobboard", en: "/en/jobboard" } } };

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="JOBBOARD KOMT ERAAN."
      body="Het jobboard met open rollen en quick-apply landt in fase 3 van het platform. Wil je nu al passende rollen ontvangen? Join de WhatsApp-community via de knop rechtsboven."
    />
  );
}
