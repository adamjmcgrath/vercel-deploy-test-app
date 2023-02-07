import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0/edge';

export async function middleware(req) {
  const res = NextResponse.next();
  const user = await getSession(req, res);

  console.log('cookie', req.headers.get('cookie'));

  return res;

}

export const config = {
  matcher: ['/auth-required-mw'],
};
