import { NextResponse } from 'next/server';
import { getSession, withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export async function middleware(req, ev) {
  const res = NextResponse.next();
  const user = await getSession(req, res);

  console.log(await withMiddlewareAuthRequired()(req, ev));
  console.log('cookie', req.headers.get('cookie'));
  const cookie = req.headers.get('cookie');

  return new NextResponse(
      JSON.stringify({ cookie, length: cookie?.length, user }),
      { headers: { 'content-type': 'application/json' } }
  )

}

export const config = {
  matcher: ['/auth-required-mw'],
};
