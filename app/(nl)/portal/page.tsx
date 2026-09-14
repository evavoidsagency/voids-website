import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = {
  title: "Portal",
  alternates: { languages: { nl: "/portal", en: "/en/portal" } },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="PORTAL KOMT ERAAN."
      body="Inloggen en je persoonlijke sollicitatie-overzicht komen mogelijk in een latere fase van het platform. Solliciteren kan nu al zonder account via het jobboard."
    />
  );
}
