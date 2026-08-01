import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

/**
 * Strip a leading locale segment from a pathname.
 * `/id/about` → `/about`, `/en/projects` → `/projects`, `/about` → `/about`
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];

  if (maybeLocale && isLocale(maybeLocale)) {
    const rest = segments.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname || "/";
}

/** Resolve the active locale from a public or rewritten pathname. */
export function getLocaleFromPathname(pathname: string): Locale {
  const maybeLocale = pathname.split("/")[1];

  if (maybeLocale && isLocale(maybeLocale)) {
    return maybeLocale;
  }

  return defaultLocale;
}

/**
 * Prefix an internal href for the given locale.
 * External URLs, mailto, tel, and hash-only links are returned unchanged.
 */
export function localizeHref(href: string, locale: Locale): string {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const [pathPart, hash] = href.split("#");
  const path = pathPart || "/";
  const stripped = stripLocale(path);
  const localized =
    locale === defaultLocale
      ? stripped
      : stripped === "/"
        ? `/${locale}`
        : `/${locale}${stripped}`;

  return hash ? `${localized}#${hash}` : localized;
}

/** Switch locale while keeping the same page path. */
export function switchLocalePath(pathname: string, nextLocale: Locale): string {
  return localizeHref(stripLocale(pathname), nextLocale);
}

/** Public pathname for a route key (used by sitemap / metadata). */
export function localePath(path: string, locale: Locale): string {
  const normalized = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return localizeHref(normalized, locale);
}
