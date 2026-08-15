import type { ReactNode } from "react";
import { Anton, Inter } from "next/font/google";
import "@/app/globals.css";
import { WhatsAppProvider } from "@/components/site/WhatsAppProvider";
import { SOCIALS, type Lang } from "@/lib/i18n/common";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "VOIDS vof",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "VOIDS is een junior talent agency in Amsterdam die hoogopgeleid junior talent verbindt aan ambitieuze bedrijven via werkstudentschappen, stages en starterrollen.",
  founder: [
    { "@type": "Person", name: "Eva van Raaij" },
    { "@type": "Person", name: "Wieke Sleutjes" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" },
  email: "info@voids.agency",
  sameAs: [SOCIALS.linkedin, SOCIALS.instagram, SOCIALS.tiktok],
};

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Shared `<html>`/`<body>` shell used by each locale's root layout (see
 * app/(nl)/layout.tsx and app/en/layout.tsx). Each locale has its own real
 * root layout (no shared app/layout.tsx) specifically so `lang` is correct
 * in the server-rendered HTML for every locale, not patched in client-side.
 */
export function RootHtml({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${anton.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <WhatsAppProvider>{children}</WhatsAppProvider>
      </body>
    </html>
  );
}
