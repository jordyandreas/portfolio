import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/data";
import { ProjectPlatformTabs } from "@/features/projects/project-platform-tabs";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizeHref } from "@/i18n/pathname";

type ProjectsProps = {
  locale: Locale;
};

export function Projects({ locale }: ProjectsProps) {
  const dictionary = getDictionary(locale);
  const projects = getProjects(locale);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="space-y-10 md:space-y-12">
          <Reveal intensity="strong" className="text-center">
            <h2
              id="projects-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {dictionary.projects.heading}
            </h2>
          </Reveal>

          <Reveal intensity="strong">
            <ProjectPlatformTabs
              projects={projects}
              limit={3}
              includeAllTab={false}
              initialTab="web"
              copy={dictionary.projects}
            />
          </Reveal>

          <Reveal intensity="strong" className="flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-surface text-foreground hover:border-foreground/15 hover:bg-surface-elevated"
            >
              <Link href={localizeHref("/projects", locale)}>
                {dictionary.projects.browseAll}
              </Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
