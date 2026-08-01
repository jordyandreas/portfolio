import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Contact } from "@/features/contact/contact";
import {
  buildPageMetadata,
  getLocalizedSiteCopy,
  siteConfig,
} from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type ContactRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ContactRouteProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);
  const copy = getLocalizedSiteCopy(localeParam);

  return buildPageMetadata({
    locale: localeParam,
    path: "/contact",
    title: dictionary.pages.contactTitle(siteConfig.name),
    description: dictionary.pages.contactDescription(
      siteConfig.name,
      copy.title,
    ),
  });
}

export default async function ContactRoute({ params }: ContactRouteProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return <Contact locale={localeParam} />;
}
