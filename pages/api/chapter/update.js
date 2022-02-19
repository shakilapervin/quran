import nc from 'next-connect';
import db from '../../../utils/db';
import { getSession } from 'next-auth/react';
import Chapter from '../../../models/Chapter';
const handler = nc();
handler.post(async (req, res) => {
    const session = await getSession({ req });
    if (session) {
        const arabicTitle = req.body.arabicTitle;
        const banglaTitle = req.body.banglaTitle;
        let banglaTafsil = req.body.banglaTafsil;
        let serial = req.body.serial;
        let id = req.body.id;
        if (arabicTitle == '') {
            res.status(400).send({
                error: 'Arabic is required',
            });
        }
        if (banglaTitle == '') {
            res.status(400).send({
                error: 'Bangla is required',
            });
        }
        if (serial == '') {
            res.status(400).send({
                error: 'Serial Number is required',
            });
        }
        if (id == '') {
            res.status(400).send({
                error: 'Id is required',
            });
        }
        await db.connect();
        const chapter = await Chapter.findByIdAndUpdate(id, {
            banglaTafsil: banglaTafsil,
            banglaTitle: banglaTitle,
            arabicTitle: arabicTitle,
            serial: serial,
        });
        await db.disconnect();
        if (chapter) {
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
