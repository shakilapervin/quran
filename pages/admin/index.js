import React from 'react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Layout from '../../components/admin/layouts/Layout';
import styles from '../../styles/Dashboard.module.css';
import db from '../../utils/db';
import User from '../../models/User';

export default function Dashboard({ user }) {
    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">Welcome Back</h1>
                    </div>
                </div>
                <div className="widgetArea">
                    <div className="content">
                        <div className="row g-5">
                            <div className="col-md-4">
                                <div className={styles.countWidget}>
                                    <p className={styles.blue}>21</p>
                                    <p className={styles.blue}>Total Sura</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles.countWidget}>
                                    <p className={styles.red}>21</p>
                                    <p className={styles.red}>Total Para</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles.countWidget}>
                                    <p className={styles.orange}>21</p>
                                    <p className={styles.orange}>Total Ayat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin`,
            },
        };
    }

    await db.connect();
    const user = await User.findOne({ email: session.user.email }).lean();
    await db.disconnect();
    if (!user) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin`,
            },
        };
    }
    return {
        props: {
            user: db.convertDocToObj(user),
        },
    };
}
