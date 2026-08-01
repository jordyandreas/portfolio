import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Geist_Mono, Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { AppLayout } from "@/components/layout/app-layout";
import { getSiteJsonLd, getSiteMetadata } from "@/config/site";
import { isLocale, localeHtmlLang, locales, type Locale } from "@/i18n/config";

import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  return getSiteMetadata(localeParam);
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return (
    <html
      lang={localeHtmlLang[locale]}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSiteJsonLd(locale)),
          }}
        />
        <AppLayout>{children}</AppLayout>
        <Analytics />
      </body>
    </html>
  );
}
