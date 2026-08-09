import type { Metadata } from "next";
import { BlogPage } from "@/components/pages/BlogPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "nl",
  path: "/blog",
  title: "Blog",
  description: "Praktische gidsen voor bedrijven en studenten over junior talent, werkstudentschappen en werven van starters.",
});

export default function Page() {
  return <BlogPage lang="nl" />;
}
