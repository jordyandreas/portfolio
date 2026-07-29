import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { heroContent } from "@/data/hero";

export function Hero() {
  const { eyebrow, headline, primaryCta, secondaryCta, portrait } = heroContent;

  return (
    <section id="home" aria-labelledby="hero-heading">
      <Container className="w-full py-8 sm:py-12 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-16 xl:gap-24">
          <div className="flex max-w-3xl flex-col gap-8 lg:max-w-4xl">
            <FadeIn className="flex flex-col gap-4">
              <p className="text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase">
                {eyebrow}
              </p>
              <h1
                id="hero-heading"
                className="max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl"
              >
                {headline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border bg-surface hover:border-foreground/15 hover:bg-surface-elevated"
                >
                  <Link
                    href={secondaryCta.href}
                    {...(secondaryCta.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.22}
            className="mx-auto w-full max-w-[26rem] justify-self-center lg:max-w-[28rem] lg:justify-self-end xl:max-w-[32rem]"
          >
            <div className="group/portrait relative mx-auto aspect-square w-full">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-border transition-[border-color,transform] duration-200 group-hover/portrait:border-foreground/25 motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[7%] rounded-full border border-foreground/15 transition-[border-color,transform] duration-200 group-hover/portrait:border-foreground/30 motion-reduce:transition-none"
              />
              <div className="absolute inset-[12%] overflow-hidden rounded-full border border-border bg-surface shadow-[0_24px_80px_-48px_rgba(34,34,34,0.35)] transition-[box-shadow,transform] duration-200 group-hover/portrait:shadow-[0_28px_70px_-40px_rgba(34,34,34,0.4)] motion-reduce:transform-none motion-reduce:transition-none">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 512px"
                  className="object-cover object-[center_20%] transition-[filter,transform] duration-200 group-hover/portrait:brightness-[1.03] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:group-hover/portrait:brightness-100"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
