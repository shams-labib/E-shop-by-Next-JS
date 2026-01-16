import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");

  const isLoggedIn = authCookie?.value === "true";

  const protectedRoutes = ["/add-item"];

  const pathname = request.nextUrl.pathname;

  // Protected route access check
  if (protectedRoutes.includes(pathname) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Logged-in user login page এ গেলে items এ পাঠিয়ে দাও
  if (pathname === "/login" && isLoggedIn) {
    return NextResponse.redirect(new URL("/items", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/add-item", "/login"],
};
