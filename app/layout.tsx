import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppProvider } from "@/components/site/WhatsAppProvider";
import { SOCIALS } from "@/lib/i18n/common";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://voids.agency"),
  title: {
    default: "VOIDS · Junior talent agency Amsterdam",
    template: "%s · VOIDS",
  },
  description: "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties.",
  openGraph: {
    siteName: "VOIDS",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <WhatsAppProvider>{children}</WhatsAppProvider>
      </body>
    </html>
  );
}
