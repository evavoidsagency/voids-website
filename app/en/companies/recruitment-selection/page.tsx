import type { Metadata } from "next";
import { WervingSelectiePage } from "@/components/pages/WervingSelectiePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/companies/werving-selectie",
  title: "Recruitment & selection",
  description: "Six steps. We do the work, you decide. From intake to signed match, for working students, interns and starters.",
});

export default function Page() {
  return <WervingSelectiePage lang="en" />;
}
