import db from './../../utils/db';
import User from './../../models/User';
import bcryptjs from 'bcryptjs';
export default async function handler(req, res) {
    const data = {
        firstName: 'Imran',
        lastName: 'Hossain',
        email: 'sheikhshourov420@gmail.com',
        isAdmin: true,
        password: bcryptjs.hashSync('123456'),
    };
    await db.connect();
    const user = new User(data);
    await user.save();
    await db.disconnect();
    res.status(200).json({ name: 'Emma' });
}
