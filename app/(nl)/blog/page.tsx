import type { Metadata } from "next";
import { BlogPage } from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Praktische gidsen voor bedrijven en studenten over junior talent.",
  alternates: { languages: { nl: "/blog", en: "/en/blog" } },
};

export default function Page() {
  return <BlogPage lang="nl" />;
}
