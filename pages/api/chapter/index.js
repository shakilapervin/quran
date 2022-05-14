import nc from 'next-connect';
import db from '../../../utils/db';
import Chapter from './../../../models/Chapter';

const handler = nc();
handler.post(async (req, res) => {
    const sura = req.body.sura;
    await db.connect();
    const chapters = await Chapter.find({sura});
    if (chapters) {
        res.status(200).send(chapters);
    } else {
        res.status(500).send({error: 'Something went wrong'});
    }
});
export default handler;