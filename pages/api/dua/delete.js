import nc from 'next-connect';
import Dua from '../../../models/Dua';
import db from '../../../utils/db';
import { getSession } from 'next-auth/react';

const handler = nc();
handler.post(async (req, res) => {
    const session = await getSession({ req });
    if (session) {
        await db.connect();
        const sura = await Dua.findByIdAndDelete(req.body.id);
        if (sura) {
            res.send({
                success: 'Deleted',
            });
        } else {
            res.status(401).send({ error: 'No sura found' });
        }
    } else {
        res.send({
            error: 'You must be sign in to view the protected content on this page.',
        });
    }
});
export default handler;
