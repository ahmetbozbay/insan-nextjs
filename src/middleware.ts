import { NextResponse, NextRequest } from "next/server";

export let locales = ['en', 'ar', 'tr']

// Get the preferred locale, similar to the above or using a library
async function getLocale(request: NextRequest) {
  const lang = request.cookies.get('c-lang')?.value
  return lang || 'tr'
}

export async function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )


  if (pathnameHasLocale) {
    const response = NextResponse.next();
    const lang = locales.find(l => pathname.startsWith(`/${l}/`) || pathname === `/${l}`) || 'en'
    const url = request.nextUrl.clone(); // Get the full URL
    const fullUrl = url.toString();
    response.headers.set("x-lang", lang);
    response.headers.set("x-url", fullUrl);

    response.cookies.set('c-lang', lang, {
      httpOnly: true,
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24,
    })

    return response;
  }

  // Redirect if there is no locale
  const locale = await getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next|api|assets|docs|css|fonts|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}