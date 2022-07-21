import { withIronSessionApiRoute } from 'iron-session/next';
import session from '../../../utils/session';
export default withIronSessionApiRoute(
    function logoutRoute(req, res) {
        req.session.destroy();
        res.status(200).send({ ok: true });
    },
    session
);
