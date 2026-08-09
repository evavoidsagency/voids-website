import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/FaqPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/faq",
  title: "FAQ",
  description: "Frequently asked questions about VOIDS: what we do, how we match, and how to sign up as a company or talent.",
});

export default function Page() {
  return <FaqPage lang="en" />;
}
