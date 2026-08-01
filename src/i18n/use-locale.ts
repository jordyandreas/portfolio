"use client";

import { usePathname } from "next/navigation";

import { getLocaleFromPathname } from "@/i18n/pathname";
import type { Locale } from "@/i18n/config";

export function useLocale(): Locale {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname);
}
