import { siteConfig } from "@/config/site";

export type HeroCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type HeroPortrait = {
  src: string;
  alt: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  portrait: HeroPortrait;
};

export const heroContent: HeroContent = {
  eyebrow: "Senior Frontend Engineer",
  headline:
    "Building product interfaces that are clear, scalable, and engineered to perform.",
  primaryCta: {
    label: "View Projects",
    href: "/projects",
  },
  secondaryCta: {
    label: "My Resume",
    href: siteConfig.resume ?? "/resume/jordy-andreas.pdf",
    external: true,
  },
  portrait: {
    src: "/profile/jordy-andreas.png",
    alt: "Portrait of Jordy Andreas",
  },
};
