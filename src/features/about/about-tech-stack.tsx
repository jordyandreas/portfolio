import { CapabilityTechIcon } from "@/components/icons/tech-icons";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { surfaceQuietClassName } from "@/components/motion/interaction";
import { aboutPageContent } from "@/data/about";
import { cn } from "@/lib/utils";

export function AboutTechStack() {
  const { techStackHeading, techStack } = aboutPageContent;

  return (
    <section aria-labelledby="tech-stack-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="space-y-8 md:space-y-10">
          <Reveal intensity="medium">
            <h2
              id="tech-stack-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {techStackHeading}
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {techStack.map((technology) => (
              <StaggerItem key={technology.name}>
                <div
                  className={cn(
                    "flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-surface/80 px-3 py-5 text-center",
                    surfaceQuietClassName,
                  )}
                >
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                    <CapabilityTechIcon
                      name={technology.icon}
                      className="size-5"
                    />
                  </span>
                  <span className="text-sm font-medium leading-5 text-foreground">
                    {technology.name}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
