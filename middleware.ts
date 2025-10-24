import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle duplicate locale segments (e.g., /en/en, /es/es)
  const duplicateLocalePattern = /^\/([a-z]{2})\/\1(\/.*)?$/;
  const duplicateMatch = pathname.match(duplicateLocalePattern);

  if (duplicateMatch) {
    const [, locale, remainingPath] = duplicateMatch;
    const redirectPath = `/${locale}${remainingPath || ''}`;
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  // Handle mixed locale segments (e.g., /es/en, /en/es)
  const mixedLocalePattern = /^\/([a-z]{2})\/([a-z]{2})(\/.*)?$/;
  const mixedMatch = pathname.match(mixedLocalePattern);

  if (mixedMatch) {
    const [, firstLocale, secondLocale, remainingPath] = mixedMatch;
    // If both are valid locales, redirect to the second one (the intended locale)
    if (
      routing.locales.includes(firstLocale as any) &&
      routing.locales.includes(secondLocale as any)
    ) {
      const redirectPath = `/${secondLocale}${remainingPath || ''}`;
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  // Handle non-localized routes by redirecting to default locale
  if (
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !pathname.includes('.')
  ) {
    const hasLocale = routing.locales.some((locale) =>
      pathname.startsWith(`/${locale}`)
    );
    if (!hasLocale) {
      const redirectPath = `/${routing.defaultLocale}${
        pathname === '/' ? '' : pathname
      }`;
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
