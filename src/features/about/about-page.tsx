import { AboutExpertise } from "@/features/about/about-expertise";
import { AboutIntro } from "@/features/about/about-intro";
import { AboutTechStack } from "@/features/about/about-tech-stack";
import { Experience } from "@/features/home/experience";
import { Capabilities } from "@/features/home/skills";
import type { Locale } from "@/i18n/config";

type AboutPageProps = {
  locale: Locale;
};

export function AboutPage({ locale }: AboutPageProps) {
  return (
    <>
      <AboutIntro locale={locale} />
      <AboutTechStack locale={locale} />
      <AboutExpertise locale={locale} />
      <Experience locale={locale} />
      <Capabilities locale={locale} />
    </>
  );
}
