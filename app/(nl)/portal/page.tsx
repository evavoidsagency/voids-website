import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Portal", alternates: { languages: { nl: "/portal", en: "/en/portal" } } };

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="PORTAL KOMT ERAAN."
      body="Inloggen en je persoonlijke sollicitatie-overzicht landen in fase 4 van het platform."
    />
  );
}
