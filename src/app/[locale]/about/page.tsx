import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutPage } from "@/features/about/about-page";
import {
  buildPageMetadata,
  getLocalizedSiteCopy,
  siteConfig,
} from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type AboutRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AboutRouteProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);
  const copy = getLocalizedSiteCopy(localeParam);

  return buildPageMetadata({
    locale: localeParam,
    path: "/about",
    title: dictionary.pages.aboutTitle(siteConfig.name),
    description: dictionary.pages.aboutDescription(
      siteConfig.name,
      copy.title,
    ),
  });
}

export default async function AboutRoute({ params }: AboutRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <AboutPage locale={localeParam} />;
}
