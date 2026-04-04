import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "en", "es"];
const defaultLocale = "tr";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Dışlanan yollar (public klasöründeki her şey ve api istekleri)
  if (
    pathname.includes('.') || // matches files (e.g. .mp4, .png, .jpg)
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return;
  }

  // Path'in başında desteklenen bir dil kodu var mı kontrol et
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Eğer dil kodu yoksa yönlendir
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api (API routes)
     */
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
};
