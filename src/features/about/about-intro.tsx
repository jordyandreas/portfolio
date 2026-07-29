import {
  Download,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { aboutPageContent } from "@/data/about";
import { heroContent } from "@/data/hero";
import { cn } from "@/lib/utils";

function SocialIcon({ className, children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-4 shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <SocialIcon className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </SocialIcon>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <SocialIcon className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </SocialIcon>
  );
}

export function AboutIntro() {
  const { heading, paragraphs } = aboutPageContent;
  const { portrait } = heroContent;

  return (
    <section aria-labelledby="about-page-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <Reveal
          intensity="medium"
          className="grid gap-10 lg:grid-cols-[minmax(14rem,0.75fr)_minmax(0,1.25fr)] lg:items-center lg:gap-12"
        >
          <div className="mx-auto w-full max-w-[20rem] lg:mx-0 lg:max-w-none">
            <div className="group/portrait relative mx-auto aspect-square w-full">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-border transition-[border-color,transform] duration-200 group-hover/portrait:border-foreground/25 motion-reduce:transition-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[7%] rounded-full border border-foreground/15 transition-[border-color,transform] duration-200 group-hover/portrait:border-foreground/30 motion-reduce:transition-none"
              />
              <div className="absolute inset-[12%] overflow-hidden rounded-full border border-border bg-background shadow-[0_24px_80px_-48px_rgba(34,34,34,0.35)] transition-[box-shadow,transform] duration-200 group-hover/portrait:shadow-[0_28px_70px_-40px_rgba(34,34,34,0.4)] motion-reduce:transform-none motion-reduce:transition-none">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 70vw, 320px"
                  className="object-cover object-[center_20%] transition-[filter,transform] duration-200 group-hover/portrait:brightness-[1.03] motion-reduce:transform-none motion-reduce:transition-none motion-reduce:group-hover/portrait:brightness-100"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-10">
            <div className="space-y-6">
              <h1
                id="about-page-heading"
                className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                {heading}
              </h1>
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

            <div className="flex flex-wrap gap-3">
              {siteConfig.resume ? (
                <Button asChild size="sm" className="rounded-full">
                  <Link
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4" aria-hidden />
                    Download Resume
                  </Link>
                </Button>
              ) : null}

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-border bg-surface"
              >
                <Link
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile for ${siteConfig.name}`}
                >
                  <LinkedInIcon />
                  LinkedIn
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-border bg-surface"
              >
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub profile for ${siteConfig.name}`}
                >
                  <GitHubIcon />
                  GitHub
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-border bg-surface"
              >
                <Link
                  href={`mailto:${siteConfig.email}`}
                  aria-label={`Email ${siteConfig.name}`}
                >
                  <Mail className="size-4" aria-hidden />
                  Email
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
