import type { Metadata } from "next";
import { BlogPage } from "@/components/pages/BlogPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/blog",
  title: "Blog",
  description: "Practical guides for companies and students on junior talent, working-student roles and hiring starters.",
});

export default function Page() {
  return <BlogPage lang="en" />;
}
