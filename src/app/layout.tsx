import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "inlinebase — Next-Gen Low-Latency Data Engine",
  description: "The ultra-minimalist, high-performance real-time data engine built for sub-millisecond execution.",
  keywords: ["inlinebase", "database", "low latency", "real-time data", "data engine", "infrastructure"],
  authors: [{ name: "inlinebase" }],
  openGraph: {
    title: "inlinebase — Next-Gen Low-Latency Data Engine",
    description: "Sub-millisecond data infrastructure built for extreme performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
