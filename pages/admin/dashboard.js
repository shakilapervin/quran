import React from 'react';
import Head from 'next/head';
import Layout from '../../components/admin/layouts/Layout';
import styles from '../../styles/Dashboard.module.css';
import {withIronSessionSsr} from "iron-session/next";
import session from "../../utils/session";

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
                            <div className="col-md-6">
                                <div className={styles.countWidget}>
                                    <p className={styles.blue}>114</p>
                                    <p className={styles.blue}>Total Sura</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.countWidget}>
                                    <p className={styles.red}>
                                        500
                                    </p>
                                    <p className={styles.red}>Total Ayat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({ req }) {
        const session = req.session;
        if (!session.user) {
            return {
                redirect: {
                    destination: `/admin`,
                },
            };
        }
        return {
            props: {
                user : session.user
            },
        };
    },
    session
);