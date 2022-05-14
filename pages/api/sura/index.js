import nc from 'next-connect';
import db from '../../../utils/db';
import Sura from './../../../models/Sura';

const handler = nc();
handler.get(async (req, res) => {
    await db.connect();
    const suras = await Sura.find({});
    if (suras) {
        res.status(200).send(suras);
    } else {
        res.status(500).send({error: 'Something went wrong'});
    }
});
export default handler;