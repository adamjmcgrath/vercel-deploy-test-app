import {NextResponse} from "next/server";
import { withMiddlewareAuthRequired, getSession } from '@auth0/nextjs-auth0/edge';

const auth0Middleware = withMiddlewareAuthRequired();

export default async function middleware(req, ev) {
  const { pathname } = req.nextUrl;

  console.log(1, req.headers.get('cookie'));

  if (pathname === '/auth-required-mw') {
    return auth0Middleware(req, ev);
  }
  const user = await getSession(req, NextResponse.next())

  console.log('user', user);
  console.log(2, req.headers.get('cookie'));
}

export const config = {
  matcher: ['/auth-required-mw', '/check-cookie'],
};
