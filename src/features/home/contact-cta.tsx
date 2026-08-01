import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { getContactCtaContent } from "@/data";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type ContactCtaProps = {
  locale: Locale;
};

export function ContactCta({ locale }: ContactCtaProps) {
  const { headingLines, prompt, ctaLabel, href } = getContactCtaContent(locale);

  return (
    <section id="contact" aria-labelledby="home-contact-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <Reveal
          intensity="quiet"
          className="grid items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] md:gap-16 lg:gap-24"
        >
          <h2
            id="home-contact-heading"
            className="max-w-xl text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            {headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="flex flex-col items-end gap-7 text-right">
            <p className="max-w-xs text-base font-medium leading-7 text-foreground sm:text-lg md:max-w-sm">
              {prompt}
            </p>

            <Link
              href={href}
              className={cn(
                "group relative inline-flex items-center gap-2 py-1",
                "text-sm font-semibold tracking-[0.18em] text-foreground uppercase",
                "origin-right transition-[color,transform,letter-spacing] duration-300 ease-out",
                "hover:scale-105 hover:tracking-[0.22em] hover:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                "motion-reduce:transform-none motion-reduce:hover:scale-100 motion-reduce:hover:tracking-[0.18em]",
              )}
            >
              <span className="relative">
                {ctaLabel}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-current",
                    "transition-transform duration-300 ease-out",
                    "group-hover:origin-left group-hover:scale-x-100",
                    "motion-reduce:transition-none motion-reduce:scale-x-100",
                  )}
                />
              </span>

              <ArrowUpRight
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0 translate-x-0 translate-y-0 opacity-60",
                  "transition-[opacity,transform,color] duration-300 ease-out",
                  "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100",
                  "motion-reduce:transition-none",
                )}
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
