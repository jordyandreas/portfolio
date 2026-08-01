import { About } from "@/features/home/about";
import { ContactCta } from "@/features/home/contact-cta";
import { Experience } from "@/features/home/experience";
import { Hero } from "@/features/home/hero";
import { Projects } from "@/features/home/projects";
import { Capabilities } from "@/features/home/skills";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <>
      <Hero locale={localeParam} />
      <About locale={localeParam} />
      <Experience locale={localeParam} />
      <Projects locale={localeParam} />
      <Capabilities locale={localeParam} />
      <ContactCta locale={localeParam} />
    </>
  );
}
