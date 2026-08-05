import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";

export const metadata: Metadata = { title: "Career pager", alternates: { languages: { nl: "/pager", en: "/en/pager" } } };

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="CAREER PAGER KOMT ERAAN."
      body="De intake en je persoonlijke loopbaanadvies-generator landen in fase 2 van het platform."
    />
  );
}
