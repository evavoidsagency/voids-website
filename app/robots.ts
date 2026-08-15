import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/portal", "/en/portal"],
    },
    sitemap: "https://voids.agency/sitemap.xml",
  };
}
