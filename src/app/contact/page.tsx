import type { Metadata } from "next";

import { Contact } from "@/features/contact/contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}, ${siteConfig.title}.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.name}, ${siteConfig.title}.`,
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactRoute() {
  return <Contact />;
}
