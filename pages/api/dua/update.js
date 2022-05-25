import nc from 'next-connect';
import db from '../../../utils/db';
import { getSession } from 'next-auth/react';
import Dua from '../../../models/Dua';
const handler = nc();
handler.post(async (req, res) => {
    const session = await getSession({ req });
    if (session) {
        const banglaName = req.body.banglaName;
        const arabicName = req.body.arabicName;
        const arabicText = req.body.arabicText;
        const banglaText = req.body.banglaText;
        let id = req.body.id;
        if (banglaName === '') {
            res.status(400).send({
                error: 'Bangla Name is required',
            });
        }
        if (arabicName === '') {
            res.status(400).send({
                error: 'Arabic Name is required',
            });
        }
        if (id === '') {
            res.status(400).send({
                error: 'Day id is required',
            });
        }
        await db.connect();
        const dua = await Dua.findByIdAndUpdate(id, {
            banglaName: banglaName,
            arabicName: arabicName,
            arabicText: arabicText,
            banglaText: banglaText,
        });
        if (dua) {
            res.status(200).send({
                success: 'Updated',
            });
        } else {
            res.status(500).send({ error: 'Something went wrong' });
        }
    } else {
        res.status(401).send({
            error: 'You must be sign in to view the protected content on this page.',
        });
    }
});
export default handler;
