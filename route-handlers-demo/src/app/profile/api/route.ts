import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  // Get headers and cookies from request
  const requestHeaders = request.headers;
  const requestCookies = request.cookies;

  // Get headers and cookies with `headers` and `cookies` function
  const headerList = headers();
  const cookieStore = cookies();

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(requestCookies.get("theme"));
  console.log(cookieStore.get("theme"));

  // Set cookie directly
  cookieStore.set("itemsPerPage", "10");

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
