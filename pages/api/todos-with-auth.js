import { withApiAuthRequired } from '@auth0/nextjs-auth0';

async function todos(req, res) {
  return res.status(200).json('success');
}

export default withApiAuthRequired(todos);

