import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tharwa — The Digital Home of Family Wealth",
  description:
    "A Saudi family financial planning platform. One electronic wallet for the whole family. Asset-light. Family-first. Built on licensed partners.",
  keywords: [
    "Saudi fintech",
    "family wallet",
    "Open Banking Saudi",
    "Smart Zakat",
    "AAOIFI",
    "PDPL",
    "Tharwa",
    "ثروة",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${ibmArabic.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream antialiased">
        <I18nProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
