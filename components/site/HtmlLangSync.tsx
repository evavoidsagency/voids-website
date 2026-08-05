"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n/common";

/**
 * The root layout's <html lang> is static (Phase 1 keeps every marketing
 * page fully prerendered, no per-request headers() lookup). This corrects
 * the attribute client-side once we know which locale subtree rendered.
 */
export function HtmlLangSync({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
