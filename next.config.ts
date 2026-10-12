import type { NextConfig } from "next";

/**
 * The marketing site is a set of static HTML pages in public/site/ (NL) and
 * public/site/en/ (EN). These rewrites serve them at their clean URLs, so
 * the files never show up in the address bar: /talent -> public/site/talent.html.
 * See scripts/site/README.md for how the pages are generated and edited.
 */
const FLAT_PAGES = ["talent", "companies", "impact", "blog", "about", "faq", "jobboard", "pager", "privacy", "terms"];
const COMPANY_SUBPAGES = ["recruitment-selection", "community-jobboard", "employer-branding"];

const nextConfig: NextConfig = {
  async rewrites() {
    const beforeFiles = [
      { source: "/", destination: "/site/index.html" },
      { source: "/en", destination: "/site/en/home.html" },
      ...FLAT_PAGES.flatMap((p) => [
        { source: `/${p}`, destination: `/site/${p}.html` },
        { source: `/en/${p}`, destination: `/site/en/${p}.html` },
      ]),
      ...COMPANY_SUBPAGES.flatMap((p) => [
        { source: `/companies/${p}`, destination: `/site/${p}.html` },
        { source: `/en/companies/${p}`, destination: `/site/en/${p}.html` },
      ]),
      { source: "/blog/:slug", destination: "/site/blog/:slug.html" },
      { source: "/en/blog/:slug", destination: "/site/en/blog/:slug.html" },
    ];
    return { beforeFiles, afterFiles: [], fallback: [] };
  },
};

export default nextConfig;
