import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/pricing",
  title: "Tarieven",
  description: "Zelf een vacature plaatsen en direct online betalen bij VOIDS komt eraan. Wil je nu al werven? Plan een kennismaking.",
});

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="TARIEVEN KOMEN ERAAN."
      body="Zelf een vacature plaatsen en direct online betalen landt in fase 5 van het platform. Wil je nu al werven? Plan een kennismaking via de pagina voor bedrijven."
    />
  );
}
