import type { Metadata } from "next";

import { AboutPage } from "@/features/about/about-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: `About ${siteConfig.name}, ${siteConfig.title} — background, capabilities, and experience.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: `About ${siteConfig.name}, ${siteConfig.title} — background, capabilities, and experience.`,
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
