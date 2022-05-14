import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from './../../../models/User';
import bcryptjs from 'bcryptjs';
import db from '../../../utils/db';
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: '',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email'
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                await db.connect();
                const user = await User.findOne({ email: req.body.email });
                if (
                    user &&
                    bcryptjs.compareSync(req.body.password, user.password) &&
                    user.isAdmin === true
                ) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    secret: process.env.SECRET,

    session: {
        strategy: 'jwt',
    },
    events: {},
    theme: {
        colorScheme: 'dark',
    },
    debug: false,
});
