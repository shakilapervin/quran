import nc from 'next-connect';
import User from '../../../models/User';
import db from '../../../utils/db';
import { getSession } from 'next-auth/react';

const handler = nc();
handler.post(async (req, res) => {
    const session = await getSession({ req });
    if (session) {
        await db.connect();
        const user = await User.findOne({ email: req.body.email });
        await db.disconnect();
        if (user) {
            res.send({
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(401).send({ message: 'Invalid email or password' });
        }
    }else{
        res.send({
            error: 'You must be sign in to view the protected content on this page.',
        });
    }
});
export default handler;
