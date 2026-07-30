import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist_Mono, Inter } from "next/font/google";

import { AppLayout } from "@/components/layout/app-layout";
import { siteJsonLd, siteMetadata } from "@/config/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <AppLayout>{children}</AppLayout>
        <Analytics />
      </body>
    </html>
  );
}
