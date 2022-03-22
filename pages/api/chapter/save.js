import nc from 'next-connect';
import { getSession } from 'next-auth/react';
import db from '../../../utils/db';
import Chapter from './../../../models/Chapter';
const handler = nc();
handler.post(async (req,res) => {
    const session = await getSession({ req });
    if(session){
        if (req.body.arabicTitle !== '' || req.body.banglaTitle !== '') {
            await db.connect();
            const chapter = new Chapter({
                arabicTitle: req.body.arabicTitle,
                banglaTitle: req.body.banglaTitle,
                banglaTafsil: req.body.banglaTafsil,
                banglaTafsil2: req.body.banglaTafsil2,
                sura: req.body.id,
                serial: req.body.serial,
            });
            await chapter.save();
            await db.disconnect();
            if (chapter) {
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