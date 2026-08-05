import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppProvider } from "@/components/site/WhatsAppProvider";

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
  title: {
    default: "VOIDS — Junior talent agency Amsterdam",
    template: "%s · VOIDS",
  },
  description:
    "Wij verbinden hoogopgeleid talent aan ambitieuze organisaties. Kwaliteit boven kwantiteit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <WhatsAppProvider>{children}</WhatsAppProvider>
      </body>
    </html>
  );
}
