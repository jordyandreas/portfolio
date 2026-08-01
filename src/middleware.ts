import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/resume")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];

  if (segment && isLocale(segment)) {
    // Keep a single public URL for the default locale (no /en prefix).
    if (segment === defaultLocale) {
      const url = request.nextUrl.clone();
      const rest = pathname.slice(`/${defaultLocale}`.length) || "/";
      url.pathname = rest;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
