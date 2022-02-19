import { useState } from 'react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Layout from '../../../components/admin/layouts/Layout';
import styles from '../../../styles/AddNewSura.module.css';
import axios from 'axios';
import $ from 'jquery';
import db from '../../../utils/db';
import User from '../../../models/User';
export default function AddNewSura({ user }) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const handleForm = async (e) => {
        e.preventDefault();
        const arabicName = e.target.arabicName.value;
        const banglaName = e.target.banglaName.value;
        const serial = e.target.serial.value;
        try {
            const response = await axios.post('/api/sura/save', {
                banglaName: banglaName,
                arabicName: arabicName,
                serial: serial,
            });
            if (response.data.success) {
                setSuccess(response.data.success);
                $('#arabicName').val('');
                $('#banglaName').val('');
                $('#serial').val('');
                setError(null);
            }
            if (response.data.error) {
                setError(response.data.error);
            }
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            <Head>
                <title>Add New Sura</title>
            </Head>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">Add New Sura</h1>
                    </div>
                    <div className="widgetArea">
                        <div className="content">
                            {success !== null ? (
                                <div className="alert alert-success">
                                    {success}
                                </div>
                            ) : (
                                ''
                            )}
                            {error !== null ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : (
                                ''
                            )}
                            <div className={styles.formWrapper}>
                                <form onSubmit={handleForm}>
                                    <div className="form-group mb-2">
                                        <label>Bangla Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="banglaName"
                                            id="banglaName"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Arabic Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="arabicName"
                                            id="arabicName"
                                            dir="rtl"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Sura Serial Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="serial"
                                            id="serial"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
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
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin/sura/add-new`,
            },
        };
    }
    await db.connect();
    const user = await User.findOne({ email: session.user.email }).lean();
    await db.disconnect();
    if (!user) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin/sura/add-new`,
            },
        };
    }
    return {
        props: {
            user: db.convertDocToObj(user),
        },
    };
}
