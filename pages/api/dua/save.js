import nc from 'next-connect';
import { getSession } from 'next-auth/react';
import db from '../../../utils/db';
import Dua from './../../../models/Dua';
const handler = nc();
handler.post(async (req,res) => {
    const session = await getSession({ req });
    if(session){
        if (req.body.banglaName !== '' || req.body.arabicName !== '') {
            await db.connect();
            const dua = new Dua({
                banglaName: req.body.banglaName,
                arabicName: req.body.arabicName,
                arabicText: req.body.arabicText,
                banglaText: req.body.banglaText,
            });
            await dua.save();
            if (dua) {
                res.status(200).send({
                    success: 'Saved',
                });
            } else {
                res.status(500).send({ error: 'Something went wrong' });
            }
        } else {
            res.send({
                error: 'Bangla and Arabic Name is required',
            });
        }
    }else{
        res.send({
            error: 'You are not authorized',
        });
    }
});
export default handler;