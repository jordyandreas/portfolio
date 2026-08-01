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
