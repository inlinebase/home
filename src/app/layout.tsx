import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Preloader } from "@/components/common/Preloader";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "INLINEBASE | Premium Digital Web Agency",
  description:
    "INLINEBASE is a high-end digital web agency specializing in designing and developing luxury, high-performance websites for Medical, Restaurants & Cafés, Resorts, and Law Firms.",
  keywords: [
    "Web Agency",
    "Luxury Web Design",
    "Next.js Development",
    "Medical Web Design",
    "Restaurant Website",
    "Resort Hospitality Website",
    "Law Firm Website",
    "Awwwards Web Agency",
  ],
  authors: [{ name: "INLINEBASE Digital Agency" }],
  openGraph: {
    title: "INLINEBASE | Premium Digital Web Agency",
    description:
      "We design high-performance digital experiences for brands that demand excellence.",
    url: "https://inlinebase.com",
    siteName: "INLINEBASE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INLINEBASE | Premium Digital Web Agency",
    description:
      "High-end digital web agency for Medical, Restaurants, Resorts, and Law Firms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-black antialiased selection:bg-black selection:text-white">
        <Preloader />
        <CustomCursor />
        <WhatsAppButton />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
