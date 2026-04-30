import { headers } from "next/headers";
import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathname = req.nextUrl.pathname;

  const isLoggedIn = !!session?.user;
  const isProtectedRoute = pathname.startsWith("/profile") || pathname.startsWith("/all-photos/");

  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/all-photos/:path*"],
};
