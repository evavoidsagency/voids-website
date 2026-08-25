import type { Metadata } from "next";
import { CommunityJobboardPage } from "@/components/pages/CommunityJobboardPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/companies/community-jobboard",
  title: "Community & job board",
  description: "Put your vacancy directly in front of 4,000+ students and starters in our WhatsApp community and on our job board.",
});

export default function Page() {
  return <CommunityJobboardPage lang="en" />;
}
