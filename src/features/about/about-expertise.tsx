import { Blocks, Globe, Smartphone, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { surfaceLiftClassName } from "@/components/motion/interaction";
import { aboutPageContent, type AboutExpertiseIcon } from "@/data/about";
import { cn } from "@/lib/utils";

const expertiseIcons: Record<AboutExpertiseIcon, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  blocks: Blocks,
};

export function AboutExpertise() {
  const { expertiseHeading, expertise } = aboutPageContent;

  return (
    <section aria-labelledby="expertise-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="space-y-8 md:space-y-10">
          <Reveal intensity="medium">
            <h2
              id="expertise-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {expertiseHeading}
            </h2>
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = expertiseIcons[item.icon];

              return (
                <StaggerItem key={item.title}>
                  <article
                    className={cn(
                      "group/expertise relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-surface/80 p-6 sm:p-7",
                      surfaceLiftClassName,
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background text-foreground transition-[border-color,background-color] duration-200 group-hover/expertise:border-foreground/15 group-hover/expertise:bg-surface-elevated">
                        <Icon
                          aria-hidden
                          className="size-5"
                          strokeWidth={1.75}
                        />
                      </span>
                      <span
                        aria-hidden
                        className="font-mono text-xs tracking-[0.14em] text-muted-foreground/70"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-auto space-y-2">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
