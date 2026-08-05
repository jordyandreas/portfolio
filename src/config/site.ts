import type { Metadata } from "next";

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

export const siteConfig: SiteConfig = {
  name: "Jordy Andreas",
  title: "Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer building clear, scalable product interfaces-and frontend-led fullstack delivery with APIs, auth, and backend integrations when products need it.",
  url: "https://www.jordyandreas-dev.web.id",
  email: "jordyandreas76@gmail.com",
  location: "Tangerang Selatan, Indonesia",
  whatsapp: "6285397994422",
  github: "https://github.com/jordyandreas",
  linkedin: "https://linkedin.com/in/jordy-andreas",
  resume: "/resume/Jordy_Andreas_Senior_Frontend_Engineer.pdf",
  keywords: [
    "Frontend Engineer",
    "Fullstack",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Supabase",
    "Firebase",
    "Node.js",
    "Portfolio",
    "Jordy Andreas",
  ],
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "React Native",
  ],
};

export const siteTitle = `${siteConfig.name} | ${siteConfig.title}`;

export const siteSocialImage = {
  alt: `${siteConfig.name} portfolio preview`,
  width: 1200,
  height: 630,
} as const;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteTitle,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
  },
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.title,
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
      name: siteTitle,
      url: siteConfig.url,
      description: siteConfig.description,
    },
  ],
} as const;
