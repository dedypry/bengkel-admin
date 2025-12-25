import type { PageRouteGuard } from "rakkasjs";

import { parse } from "cookie";
import Cookies from "js-cookie";

export const pageGuard: PageRouteGuard = (ctx) => {
  let token: string | undefined;

  // 1. Ambil token secara aman (Server vs Client)
  if (ctx.requestContext) {
    // Sisi Server: Ambil dari header request
    const cookieHeader = ctx.requestContext.request.headers.get("cookie") || "";
    const cookies = parse(cookieHeader);

    token = cookies.token;
  } else {
    // Sisi Client: Ambil menggunakan js-cookie
    token = Cookies.get("token");
  }

  const { pathname } = ctx.url;
  const isLoginPage = pathname.startsWith("/login");

  // 2. Logika Redirect
  if (!token) {
    if (!isLoginPage) {
      return { redirect: "/login" };
    }

    return true;
  }

  if (token && isLoginPage) {
    return { redirect: "/" };
  }

  return true;
};
