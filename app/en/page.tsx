import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  path: "/",
  title: "VOIDS · Junior talent agency Amsterdam",
  description:
    "VOIDS connects highly-educated junior talent with ambitious companies through working-student roles, internships and starter positions. Beyond the CV, with an eye for motivation and working style.",
  image: "/photography/home-hero.jpg",
});

export default function Page() {
  return <HomePage lang="en" />;
}
