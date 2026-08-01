import type { MetadataRoute } from "next";

import { getLanguageAlternates, siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";
import { localePath } from "@/i18n/pathname";

const routes = ["/", "/about", "/projects", "/contact"] as const;

const priorities: Record<(typeof routes)[number], number> = {
  "/": 1,
  "/projects": 0.9,
  "/about": 0.8,
  "/contact": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => {
      const path = localePath(route, locale);

      return {
        url: `${siteConfig.url}${path === "/" ? "" : path}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: priorities[route],
        alternates: {
          languages: getLanguageAlternates(route),
        },
      };
    }),
  );
}
