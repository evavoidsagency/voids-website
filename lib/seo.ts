import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n/common";

export const SITE_URL = "https://voids.agency";
export const SITE_NAME = "VOIDS";

/** Site-wide fallback metadata, set per-locale root layout. Individual pages override this via `pageMetadata()`. */
export const BASE_METADATA: Record<Lang, Metadata> = {
  nl: {
    metadataBase: new URL(SITE_URL),
    title: { default: "VOIDS · Junior talent agency Amsterdam", template: "%s · VOIDS" },
    description: "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties.",
    openGraph: { siteName: SITE_NAME, type: "website", locale: "nl_NL" },
    twitter: { card: "summary_large_image" },
  },
  en: {
    metadataBase: new URL(SITE_URL),
    title: { default: "VOIDS · Junior talent agency Amsterdam", template: "%s · VOIDS" },
    description: "We connect highly-educated talent with ambitious organisations.",
    openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image" },
  },
};

/**
 * Builds canonical + hreflang alternates + Open Graph + Twitter card metadata
 * for a page, so every route gets the same SEO/share fields without repeating
 * the boilerplate. `path` is the unprefixed NL path, e.g. "/talent".
 */
export function pageMetadata({
  lang,
  path,
  title,
  description,
  image,
}: {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const nlPath = path;
  const enPath = path === "/" ? "/en" : `/en${path}`;
  const canonical = lang === "en" ? enPath : nlPath;
  const url = `${SITE_URL}${canonical}`;
  const ogTitle = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`;
  // A title that already spells out "VOIDS" (e.g. the homepage) is shown as-is,
  // bypassing the root layout's "%s · VOIDS" template so it isn't suffixed twice.
  const resolvedTitle = title.includes(SITE_NAME) ? { absolute: title } : title;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical,
      languages: { nl: nlPath, en: enPath },
    },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: lang === "en" ? "en_US" : "nl_NL",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
