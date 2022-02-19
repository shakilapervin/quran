import nc from 'next-connect';
import { getSession } from 'next-auth/react';
import db from '../../../utils/db';
import Sura from './../../../models/Sura';
const handler = nc();
handler.post(async (req,res) => {
    console.log(req.body.arabicName);
    const session = await getSession({ req });
    if(session){
        if (req.body.banglaName !== '' || req.body.arabicName !== '') {
            await db.connect();
            const sura = new Sura({
                banglaName: req.body.banglaName,
                arabicName: req.body.arabicName,
                serial: req.body.serial,
            });
            await sura.save();
            await db.disconnect();
            if (sura) {
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