import { initAuth0 } from '@auth0/nextjs-auth0';
import config from './auth0-config';

let auth0;

export default () => {
  if (!auth0) {
    auth0 = initAuth0(config);
  }
  return auth0;
}


