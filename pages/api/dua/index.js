import nc from 'next-connect';
import db from '../../../utils/db';
import Dua from './../../../models/Dua';

const handler = nc();
handler.get(async (req, res) => {
    await db.connect();
    const duas = await Dua.find({});
    if (duas) {
        res.status(200).send(duas);
    } else {
        res.status(500).send({error: 'Something went wrong'});
    }
});
export default handler;