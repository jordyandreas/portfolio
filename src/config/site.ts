import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";
import { localeOg, locales } from "@/i18n/config";
import { localePath } from "@/i18n/pathname";

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  /** Display location on contact surfaces */
  location: string;
  /** WhatsApp number in international digits only, e.g. 62812xxxxxxx */
  whatsapp: string;
  github: string;
  linkedin: string;
  resume: string | null;
  keywords: string[];
  techStack: string[];
};

export type LocalizedSiteCopy = {
  title: string;
  description: string;
  keywords: string[];
  socialImageAlt: string;
};

const localizedCopy: Record<Locale, LocalizedSiteCopy> = {
  en: {
    title: "Senior Frontend Engineer",
    description:
      "I build thoughtful frontend products with strong engineering craft, product mindset, and real-world case studies for recruiters and engineering leaders.",
    keywords: [
      "Frontend Engineer",
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Portfolio",
      "Jordy Andreas",
    ],
    socialImageAlt: "Jordy Andreas portfolio preview",
  },
  id: {
    title: "Senior Frontend Engineer",
    description:
      "Saya membangun produk frontend yang matang dengan kerajinan engineering yang kuat, mindset produk, dan studi kasus nyata untuk rekruter serta pemimpin engineering.",
    keywords: [
      "Frontend Engineer",
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Portofolio",
      "Jordy Andreas",
    ],
    socialImageAlt: "Pratinjau portofolio Jordy Andreas",
  },
};

export const siteConfig: SiteConfig = {
  name: "Jordy Andreas",
  title: localizedCopy.en.title,
  description: localizedCopy.en.description,
  // TODO: replace with confirmed production URL before deployment
  url: "https://jordyandreas.dev",
  email: "jordyandreas76@gmail.com",
  location: "Jakarta, Indonesia",
  whatsapp: "6285397994422",
  github: "https://github.com/jordyandreas",
  linkedin: "https://linkedin.com/in/jordy-andreas",
  resume: "/resume/Jordy_Andreas_Senior_Frontend_Engineer.pdf",
  keywords: localizedCopy.en.keywords,
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
};

export function getLocalizedSiteCopy(locale: Locale): LocalizedSiteCopy {
  return localizedCopy[locale];
}

export function getSiteTitle(locale: Locale): string {
  const copy = getLocalizedSiteCopy(locale);
  return `${siteConfig.name} | ${copy.title}`;
}

export const siteTitle = getSiteTitle("en");

export const siteSocialImage = {
  alt: localizedCopy.en.socialImageAlt,
  width: 1200,
  height: 630,
} as const;

export function getLanguageAlternates(path: string): Record<string, string> {
  return Object.fromEntries(
    locales.map((locale) => {
      const localized = localePath(path, locale);
      return [
        locale,
        `${siteConfig.url}${localized === "/" ? "" : localized}`,
      ];
    }),
  );
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = localePath(path, locale);
  const languages = getLanguageAlternates(path);
  const copy = getLocalizedSiteCopy(locale);
  const absoluteUrl = `${siteConfig.url}${canonical === "/" ? "" : canonical}`;

  return {
    title,
    description,
    keywords: copy.keywords,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: absoluteUrl,
      siteName: siteConfig.name,
      title,
      description,
      locale: localeOg[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeOg[item]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getSiteMetadata(locale: Locale): Metadata {
  const copy = getLocalizedSiteCopy(locale);
  const title = getSiteTitle(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description: copy.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    keywords: copy.keywords,
    alternates: {
      canonical: localePath("/", locale),
      languages: getLanguageAlternates("/"),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description: copy.description,
      locale: localeOg[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeOg[item]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.description,
    },
  };
}

/** @deprecated Prefer getSiteMetadata(locale) */
export const siteMetadata: Metadata = getSiteMetadata("en");

export function getSiteJsonLd(locale: Locale) {
  const copy = getLocalizedSiteCopy(locale);
  const title = getSiteTitle(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: copy.title,
        url: siteConfig.url,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location,
        },
        sameAs: [siteConfig.github, siteConfig.linkedin],
      },
      {
        "@type": "WebSite",
        name: title,
        url: siteConfig.url,
        description: copy.description,
        inLanguage: locale,
      },
    ],
  } as const;
}

/** @deprecated Prefer getSiteJsonLd(locale) */
export const siteJsonLd = getSiteJsonLd("en");
