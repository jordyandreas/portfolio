import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { getAboutContent, type AboutExpertiseIcon } from "@/data";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { Blocks, Globe, Smartphone, type LucideIcon } from "lucide-react";

const expertiseIcons: Record<AboutExpertiseIcon, LucideIcon> = {
  globe: Globe,
  smartphone: Smartphone,
  blocks: Blocks,
};

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const { heading, paragraphs, stats, expertiseHeading, expertise } =
    getAboutContent(locale);

  return (
    <section id="about" aria-labelledby="about-heading" className="bg-surface">
      <Container className="py-8 sm:py-12 md:py-16">
        <Reveal
          intensity="medium"
          className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:items-start lg:gap-14"
        >
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="space-y-6">
              <h2
                id="about-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                {heading}
              </h2>
              <div className="space-y-5">
                {paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-muted-foreground sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <ul className="flex w-full flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-0">
              {stats.map((stat, index) => (
                <li
                  key={stat.label}
                  className={cn(
                    "flex flex-1 flex-col gap-2 sm:max-w-[13rem] sm:px-8",
                    index > 0 && "sm:border-l sm:border-border",
                    index === 0 && "sm:pl-0",
                    index === stats.length - 1 && "sm:pr-0",
                  )}
                >
                  <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-background/60 p-5 sm:p-6">
            <h3 className="text-sm font-medium tracking-[0.18em] text-muted-foreground uppercase">
              {expertiseHeading}
            </h3>
            <ul className="mt-6 space-y-5">
              {expertise.map((item) => {
                const Icon = expertiseIcons[item.icon];

                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground">
                      <Icon aria-hidden className="size-4" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0 space-y-1">
                      <p className="text-base font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
