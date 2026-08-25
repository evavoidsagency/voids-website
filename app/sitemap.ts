import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/lib/content/blog-posts";

const BASE_URL = "https://voids.agency";

const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/talent", priority: 0.8, changeFrequency: "monthly" },
  { path: "/companies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/companies/recruitment-selection", priority: 0.7, changeFrequency: "monthly" },
  { path: "/companies/community-jobboard", priority: 0.6, changeFrequency: "monthly" },
  { path: "/companies/employer-branding", priority: 0.6, changeFrequency: "monthly" },
  { path: "/impact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/jobboard", priority: 0.5, changeFrequency: "weekly" },
  { path: "/pager", priority: 0.4, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

function localizedUrls(path: string) {
  const nl = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
  const en = path === "/" ? `${BASE_URL}/en` : `${BASE_URL}/en${path}`;
  return { nl, en };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, priority, changeFrequency }) => {
    const { nl, en } = localizedUrls(path);
    return {
      url: nl,
      priority,
      changeFrequency,
      alternates: { languages: { nl, en } },
    };
  });

  const enEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, priority, changeFrequency }) => {
    const { nl, en } = localizedUrls(path);
    return {
      url: en,
      priority,
      changeFrequency,
      alternates: { languages: { nl, en } },
    };
  });

  const blogEntries: MetadataRoute.Sitemap = getBlogSlugs().flatMap((slug) => {
    const nl = `${BASE_URL}/blog/${slug}`;
    const en = `${BASE_URL}/en/blog/${slug}`;
    return [
      { url: nl, priority: 0.6, changeFrequency: "monthly" as const, alternates: { languages: { nl, en } } },
      { url: en, priority: 0.6, changeFrequency: "monthly" as const, alternates: { languages: { nl, en } } },
    ];
  });

  return [...staticEntries, ...enEntries, ...blogEntries];
}
