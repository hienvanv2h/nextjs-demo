import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (!request.cookies.get("theme")) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("Test-Header", "abcd1234");
  return response;
}

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith("/profile")) {
//     return NextResponse.redirect(new URL("/hello", request.url));
//   }
// }

// export const config = {
//   matcher: "/profile/:path*",
// };
