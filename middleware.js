import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export async function middleware(req, ev) {
  console.log(req.cookies.get('appSession.0')?.value);
  return withMiddlewareAuthRequired()(req, ev);
}

export const config = {
  matcher: ['/auth-required-mw'],
};
