import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/pager",
  title: "Talentpool",
  description: "De aanmelding voor de VOIDS talentpool komt eraan.",
});

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="TALENTPOOL-AANMELDING KOMT ERAAN."
      body="De intake voor de talentpool landt in fase 2 van het platform."
    />
  );
}
