import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "INLINEBASE — High-End Digital Product Studio & Platform Engineering",
  description:
    "Inlinebase designs and builds high-performance digital infrastructure, enterprise software platforms, and transformative visual experiences for modern global brands.",
  keywords: [
    "Inlinebase",
    "Digital Product Studio",
    "Platform Engineering",
    "Enterprise Software",
    "Visual Architecture",
    "React Studio",
    "High Performance Systems"
  ],
  authors: [{ name: "Inlinebase Studio" }],
  openGraph: {
    title: "INLINEBASE — Digital Product Engineering & Visual Architecture",
    description:
      "We architect high-performance digital infrastructure and bespoke platforms that move business.",
    url: "https://inlinebase.com",
    siteName: "Inlinebase",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INLINEBASE — Digital Product Engineering",
    description: "Engineering what moves business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} bg-[#050505] text-[#ECECEC] antialiased selection:bg-white selection:text-black overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
