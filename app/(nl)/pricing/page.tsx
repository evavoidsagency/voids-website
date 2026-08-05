import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Tarieven", alternates: { languages: { nl: "/pricing", en: "/en/pricing" } } };

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="TARIEVEN KOMEN ERAAN."
      body="Zelf een vacature plaatsen en direct online betalen landt in fase 5 van het platform. Wil je nu al werven? Plan een kennismaking via de pagina voor bedrijven."
    />
  );
}
