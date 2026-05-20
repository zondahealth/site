import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeMatch = pathname.match(/^\/(en|es)(\/.*)?$/);

  if (localeMatch) {
    const [, locale, rest] = localeMatch;
    const url = request.nextUrl.clone();
    url.pathname = rest || '/';

    const response = NextResponse.redirect(url);
    response.cookies.set('zonda-locale', locale, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
