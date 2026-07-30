import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectPlatformTabs } from "@/features/projects/project-platform-tabs";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="space-y-10 md:space-y-12">
          <Reveal intensity="strong" className="text-center">
            <h2
              id="projects-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              My Projects
            </h2>
          </Reveal>

          <Reveal intensity="strong">
            <ProjectPlatformTabs
              projects={projects}
              limit={3}
              includeAllTab={false}
              initialTab="web"
            />
          </Reveal>

          <Reveal intensity="strong" className="flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border bg-surface text-foreground hover:border-foreground/15 hover:bg-surface-elevated"
            >
              <Link href="/projects">Browse all projects</Link>
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
