import type { Metadata } from "next";
import { StubPage } from "@/components/pages/StubPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/pager",
  title: "Career pager",
  description: "De VOIDS career pager, jouw persoonlijke loopbaanadvies-intake, komt eraan.",
});

export default function Page() {
  return (
    <StubPage
      lang="nl"
      title="CAREER PAGER KOMT ERAAN."
      body="De intake en je persoonlijke loopbaanadvies-generator landen in fase 2 van het platform."
    />
  );
}
