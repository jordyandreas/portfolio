import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { buildPageMetadata, siteConfig } from "@/config/site";
import { getProjects } from "@/data";
import { ProjectPlatformTabs } from "@/features/projects/project-platform-tabs";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/config";

type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);

  return buildPageMetadata({
    locale: localeParam,
    path: "/projects",
    title: dictionary.pages.projectsTitle(siteConfig.name),
    description: dictionary.pages.projectsDescription,
  });
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);
  const projects = getProjects(localeParam);

  return (
    <main className="flex-1">
      <section aria-labelledby="projects-page-heading">
        <Container className="py-8 sm:py-12 md:py-16">
          <div className="space-y-10 md:space-y-12">
            <FadeIn className="text-center">
              <h1
                id="projects-page-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                {dictionary.projects.heading}
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <ProjectPlatformTabs
                projects={projects}
                includeAllTab
                initialTab="all"
                copy={dictionary.projects}
              />
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
