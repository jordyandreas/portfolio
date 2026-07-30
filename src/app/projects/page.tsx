import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { ProjectPlatformTabs } from "@/features/projects/project-platform-tabs";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description:
    "Selected web, mobile, and backend product work by Jordy Andreas - interfaces and services built for clarity, performance, and maintainable delivery.",
};

export default function ProjectsPage() {
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
                My Projects
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <ProjectPlatformTabs projects={projects} includeAllTab initialTab="all" />
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}
