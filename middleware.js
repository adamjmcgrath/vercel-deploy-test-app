import { NextResponse } from 'next/server';

export function middleware(req) {
  const cookie = req.headers.get('cookie');

  return new NextResponse(
      JSON.stringify({ cookie, length: cookie?.length }),
      { headers: { 'content-type': 'application/json' } }
  )
}

export const config = {
  matcher: ['/auth-required-mw'],
};
