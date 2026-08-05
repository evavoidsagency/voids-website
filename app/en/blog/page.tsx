import type { Metadata } from "next";
import { BlogPage } from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides for companies and students on junior talent.",
  alternates: { languages: { nl: "/blog", en: "/en/blog" } },
};

export default function Page() {
  return <BlogPage lang="en" />;
}
