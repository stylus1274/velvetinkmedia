import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { legacyRedirects } from "./next.config";

const legacyRedirectMap = new Map<string, string>(legacyRedirects);

const retiredPaths = new Set([
  "/checkout",
  "/checkout/confirmation",
  "/checkout/order-history",
  "/checkout/receipt",
  "/checkout/transaction-failed",
  "/get-a-quote-thank-you",
  "/thank-you",
]);

export function proxy(request: NextRequest) {
  let decodedPathname = request.nextUrl.pathname;
  try {
    decodedPathname = decodeURIComponent(decodedPathname);
  } catch {
    // Leave malformed paths unchanged and let Next.js handle them normally.
  }

  const pathname = decodedPathname.replace(/\/$/, "") || "/";

  const redirectDestination = legacyRedirectMap.get(pathname);
  if (redirectDestination) {
    const destination = new URL(redirectDestination, request.url);
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  if (retiredPaths.has(pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  if (decodedPathname !== pathname) {
    const destination = new URL(pathname, request.url);
    destination.search = request.nextUrl.search;
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
