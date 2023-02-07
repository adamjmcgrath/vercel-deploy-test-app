import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0/edge';

export async function middleware(req) {
  const res = NextResponse.next();
  const user = await getSession(req, res);

  console.log('user', user);
  console.log('cookie header', req.headers.get('cookie'));
  console.log('cookies', JSON.stringify(req.cookies.getAll(), null, 2));

  return res;

}

export const config = {
  matcher: ['/auth-required-mw'],
};
