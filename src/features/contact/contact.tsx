import { MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getContactContent } from "@/data";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/features/contact/contact-action-icons";
import { ContactForm } from "@/features/contact/contact-form";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const actionIcons = {
  email: MailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
} as const;

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const contactContent = getContactContent(locale);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--palette-primary)_5%,transparent),transparent_55%),linear-gradient(180deg,var(--background),color-mix(in_srgb,var(--palette-tertiary)_55%,var(--background)))]"
      />

      <Container className="relative py-8 sm:py-12 md:py-16">
        <Reveal
          intensity="quiet"
          className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16 xl:gap-20"
        >
          <div className="max-w-xl space-y-10">
            <div className="space-y-7">
              <FadeIn>
                <h2
                  id="contact-heading"
                  className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]"
                >
                  {contactContent.headingLines.map((line, index) => (
                    <span
                      key={line}
                      className={cn(
                        "block",
                        index === 1 && "text-muted-foreground",
                      )}
                    >
                      {line}
                    </span>
                  ))}
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="max-w-md text-base leading-8 text-foreground/80 sm:text-lg sm:leading-8">
                  {contactContent.lead}
                </p>
              </FadeIn>

              <FadeIn delay={0.16}>
                <ul className="space-y-3 border-l border-border pl-4">
                  {contactContent.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-6 text-muted-foreground sm:text-[0.95rem]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.22}>
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MapPin
                    className="size-4 shrink-0 text-muted-foreground"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span>{contactContent.location}</span>
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.28}>
              <div className="flex flex-wrap gap-3">
                {contactContent.actions.map((action) => {
                  const Icon = actionIcons[action.id];

                  return (
                    <Button
                      key={action.id}
                      asChild
                      variant="outline"
                      size="lg"
                      className="rounded-xl border-border bg-background hover:border-foreground/15 hover:bg-surface-elevated"
                    >
                      <a
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={
                          action.external ? "noopener noreferrer" : undefined
                        }
                        aria-label={action.ariaLabel}
                      >
                        <Icon className="size-4" />
                        {action.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.18}>
            <div className="rounded-[1.75rem] border border-border bg-background/90 p-6 shadow-[0_24px_80px_-48px_rgba(34,34,34,0.28)] backdrop-blur-sm sm:p-8">
              <ContactForm locale={locale} />
            </div>
          </FadeIn>
        </Reveal>
      </Container>
    </section>
  );
}
