import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(req, res) {
  const session = await getSession(req, res);
  res.status(200).json(session.user);
  res.setHeader('Cache-Control', 's-maxage=86400');
})
