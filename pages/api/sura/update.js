import nc from 'next-connect';
import db from '../../../utils/db';
import { getSession } from 'next-auth/react';
import Sura from '../../../models/Sura';
const handler = nc();
handler.post(async (req, res) => {
    const session = await getSession({ req });
    if (session) {
        const banglaName = req.body.banglaName;
        const arabicName = req.body.arabicName;
        let serial = req.body.serial;
        let id = req.body.id;
        if (banglaName == '') {
            res.status(400).send({
                error: 'Bangla Name is required',
            });
        }
        if (arabicName == '') {
            res.status(400).send({
                error: 'Arabic Name is required',
            });
        }
        if (serial == '') {
            res.status(400).send({
                error: 'Serial Number is required',
            });
        }
        if (id == '') {
            res.status(400).send({
                error: 'Day id is required',
            });
        }
        await db.connect();
        const sura = await Sura.findByIdAndUpdate(id, {
            banglaName: banglaName,
            arabicName: arabicName,
            serial: serial,
        });
        await db.disconnect();
        if (sura) {
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
