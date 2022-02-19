import { useState } from 'react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Layout from '../../../../../components/admin/layouts/Layout';
import styles from '../../../../../styles/AddNewChapter.module.css';
import axios from 'axios';
import $ from 'jquery';
import db from '../../../../../utils/db';
import User from '../../../../../models/User';
import Sura from '../../../../../models/Sura';
export default function AddNewChapter({ user, sura, id }) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const handleForm = async (e) => {
        e.preventDefault();
        const arabicTitle = e.target.arabicTitle.value;
        const banglaTitle = e.target.banglaTitle.value;
        const banglaTafsil = e.target.banglaTafsil.value;
        const serial = e.target.serial.value;
        try {
            const response = await axios.post('/api/chapter/save', {
                arabicTitle: arabicTitle,
                banglaTitle: banglaTitle,
                banglaTafsil: banglaTafsil,
                serial: serial,
                id: id,
            });
            if (response.data.success) {
                setSuccess(response.data.success);
                $('#form').trigger('reset');
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
                <title>Add New Chapter In {sura.banglaName}</title>
            </Head>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">
                            Add New Chapter In {sura.banglaName}
                        </h1>
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
                                <form onSubmit={handleForm} id='form'>
                                    <div className="form-group mb-2">
                                        <label>Arabic</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="arabicTitle"
                                            id="arabicTitle"
                                            dir="rtl"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Bangla</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="banglaTitle"
                                            id="banglaTitle"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Tafsil</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="banglaTafsil"
                                            id="banglaTafsil"
                                        />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Chapter Serial Number</label>
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
    const { params } = context;
    const { id } = params;
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin/sura/add-new`,
            },
        };
    }
    await db.connect();
    const user = await User.findOne({ email: session.user.email }).lean();
    const sura = await Sura.findOne({ _id: id }).lean();
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
            sura: db.convertDocToObj(sura),
            id
        },
    };
}
