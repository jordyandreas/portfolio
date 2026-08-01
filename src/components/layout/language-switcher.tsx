"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { focusRingClassName } from "@/components/motion/interaction";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocaleFromPathname, switchLocalePath } from "@/i18n/pathname";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const activeLocale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(activeLocale);

  return (
    <div
      role="group"
      aria-label={dictionary.navbar.languageSwitcher}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5 text-xs font-medium",
        className,
      )}
    >
      {locales.map((locale: Locale) => {
        const active = locale === activeLocale;

        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={cn(
              "inline-flex min-w-8 items-center justify-center rounded-full px-2 py-1 transition-[background-color,color] duration-200",
              focusRingClassName,
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
