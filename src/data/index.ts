import type { Locale } from "@/i18n/config";

import {
  aboutContent as aboutContentEn,
  aboutPageContent as aboutPageContentEn,
} from "@/data/en/about";
import { capabilitiesContent as capabilitiesContentEn } from "@/data/en/capabilities";
import {
  contactContent as contactContentEn,
  contactCtaContent as contactCtaContentEn,
} from "@/data/en/contact";
import { experienceContent as experienceContentEn } from "@/data/en/experience";
import { heroContent as heroContentEn } from "@/data/en/hero";
import { navigationItems as navigationItemsEn } from "@/data/en/navigation";
import { projects as projectsEn } from "@/data/en/projects";

import {
  aboutContent as aboutContentId,
  aboutPageContent as aboutPageContentId,
} from "@/data/id/about";
import { capabilitiesContent as capabilitiesContentId } from "@/data/id/capabilities";
import {
  contactContent as contactContentId,
  contactCtaContent as contactCtaContentId,
} from "@/data/id/contact";
import { experienceContent as experienceContentId } from "@/data/id/experience";
import { heroContent as heroContentId } from "@/data/id/hero";
import { navigationItems as navigationItemsId } from "@/data/id/navigation";
import { projects as projectsId } from "@/data/id/projects";

import { localizeHref } from "@/i18n/pathname";

import type { AboutContent, AboutPageContent } from "@/data/types/about";
import type { CapabilitiesContent } from "@/data/types/capabilities";
import type { ContactContent, ContactCtaContent } from "@/data/types/contact";
import type { ExperienceContent } from "@/data/types/experience";
import type { HeroContent } from "@/data/types/hero";
import type { NavItem } from "@/data/types/navigation";
import type { Project } from "@/data/types/projects";

function localizeNavItems(items: NavItem[], locale: Locale): NavItem[] {
  return items.map((item) => ({
    ...item,
    href: localizeHref(item.href, locale),
  }));
}

function localizeHero(content: HeroContent, locale: Locale): HeroContent {
  return {
    ...content,
    primaryCta: {
      ...content.primaryCta,
      href: localizeHref(content.primaryCta.href, locale),
    },
    secondaryCta: {
      ...content.secondaryCta,
      href: content.secondaryCta.external
        ? content.secondaryCta.href
        : localizeHref(content.secondaryCta.href, locale),
    },
  };
}

function localizeContactCta(
  content: ContactCtaContent,
  locale: Locale,
): ContactCtaContent {
  return {
    ...content,
    href: localizeHref(content.href, locale),
  };
}

export function getHeroContent(locale: Locale): HeroContent {
  return localizeHero(
    locale === "id" ? heroContentId : heroContentEn,
    locale,
  );
}

export function getAboutContent(locale: Locale): AboutContent {
  return locale === "id" ? aboutContentId : aboutContentEn;
}

export function getAboutPageContent(locale: Locale): AboutPageContent {
  return locale === "id" ? aboutPageContentId : aboutPageContentEn;
}

export function getCapabilitiesContent(locale: Locale): CapabilitiesContent {
  return locale === "id" ? capabilitiesContentId : capabilitiesContentEn;
}

export function getContactContent(locale: Locale): ContactContent {
  return locale === "id" ? contactContentId : contactContentEn;
}

export function getContactCtaContent(locale: Locale): ContactCtaContent {
  return localizeContactCta(
    locale === "id" ? contactCtaContentId : contactCtaContentEn,
    locale,
  );
}

export function getExperienceContent(locale: Locale): ExperienceContent {
  return locale === "id" ? experienceContentId : experienceContentEn;
}

export function getNavigationItems(locale: Locale): NavItem[] {
  return localizeNavItems(
    locale === "id" ? navigationItemsId : navigationItemsEn,
    locale,
  );
}

export function getProjects(locale: Locale): Project[] {
  return locale === "id" ? projectsId : projectsEn;
}

export type {
  AboutContent,
  AboutPageContent,
  AboutExpertise,
  AboutExpertiseIcon,
  AboutStat,
} from "@/data/types/about";
export type {
  CapabilitiesContent,
  CapabilityGroup,
  CapabilityTechnology,
  CapabilityTechnologyIcon,
} from "@/data/types/capabilities";
export type {
  ContactAction,
  ContactContent,
  ContactCtaContent,
  ContactFormCopy,
} from "@/data/types/contact";
export type {
  ExperienceContent,
  ExperienceEntry,
} from "@/data/types/experience";
export type { HeroContent, HeroCta, HeroPortrait } from "@/data/types/hero";
export type { NavItem } from "@/data/types/navigation";
export type {
  Project,
  ProjectPlatform,
  ProjectStatus,
} from "@/data/types/projects";
