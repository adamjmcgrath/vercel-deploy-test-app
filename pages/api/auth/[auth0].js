import { randomBytes } from 'crypto';
import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

export default handleAuth({
  callback: handleCallback({
    afterCallback(req, res, session, state) {
      session.user.customProp = randomBytes(20).toString('base64');
      return session;
    }
  }),
});
