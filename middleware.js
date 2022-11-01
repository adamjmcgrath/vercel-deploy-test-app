import { initAuth0 } from '@auth0/nextjs-auth0/middleware';
import auth0Config from './lib/auth0-config';

export default initAuth0(auth0Config).withMiddlewareAuthRequired();

export const config = {
  matcher: ['/auth-required-mw'],
};
