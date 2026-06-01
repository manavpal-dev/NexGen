import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexgenaccountingassociates.com"),
  title: {
    default: "NexGen Accounting Associates",
    template: "%s | NexGen Accounting Associates",
  },
  description:
    "Professional accounting, audit support, taxation, GST, TDS, compliance, financial reporting, and advisory services in Delhi NCR.",
  keywords: [
    "NexGen Accounting Associates",
    "accounting services Delhi NCR",
    "GST compliance",
    "TDS return filing",
    "statutory audit support",
    "income tax filing",
    "business advisory",
  ],
  authors: [{ name: "NexGen Accounting Associates" }],
  creator: "NexGen Accounting Associates",
  publisher: "NexGen Accounting Associates",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NexGen Accounting Associates",
    description:
      "Accounting, audit, taxation, compliance, and advisory support for businesses across Delhi NCR.",
    url: "https://www.nexgenaccountingassociates.com",
    siteName: "NexGen Accounting Associates",
    locale: "en_IN",
    type: "website",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
