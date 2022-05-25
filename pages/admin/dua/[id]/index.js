import React, { useState } from 'react';
import Layout from '../../../../components/admin/layouts/Layout';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import axios from 'axios';
import db from '../../../../utils/db';
import Dua from '../../../../models/Dua';
import User from '../../../../models/User';

export default function Edit({ user, dua, id }) {
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const handleForm = async (e) => {
        e.preventDefault();
        const banglaName = e.target.banglaName.value;
        const arabicName = e.target.arabicName.value;
        const arabicText = e.target.arabicText.value;
        const banglaText = e.target.banglaText.value;
        try {
            const response = await axios.post('/api/dua/update', {
                banglaName: banglaName,
                arabicName: arabicName,
                banglaText: banglaText,
                arabicText: arabicText,
                id,
            });
            if (response.data.success) {
                setSuccess(response.data.success);
                setTimeout(function () {
                    setError(null);
                    setSuccess(null);
                }, 2000);
            }
            if (response.data.error) {
                setError(response.data.error);
                setSuccess(null);
            }
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            <Head>
                <title>Edit Dua</title>
            </Head>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">Edit Dua</h1>
                    </div>
                </div>
                <div className="widgetArea">
                    <div className="content">
                        {success !== null ? (
                            <div className="alert alert-success">{success}</div>
                        ) : (
                            ''
                        )}
                        {error !== null ? (
                            <div className="alert alert-danger">{error}</div>
                        ) : (
                            ''
                        )}
                        <div className="formWrapper">
                            <form
                                onSubmit={handleForm}
                                encType="multipart/form-data"
                            >
                                <div className="form-group mb-2">
                                    <label>Bangla Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        name="banglaName"
                                        id="banglaName"
                                        defaultValue={dua.banglaName}
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
                                        defaultValue={dua.arabicName}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Dua in Arabic</label>
                                    <textarea name="arabicText" cols="30" rows="10"
                                              className="form-control" dir='rtl' defaultValue={dua.arabicText}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label>Dua in Bangla</label>
                                    <textarea name="banglaText" cols="30" rows="10"
                                              className="form-control" defaultValue={dua.banglaText}/>
                                </div>
                                <div className="form-group mb-2">
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Update
                                    </button>
                                </div>
                            </form>
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
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/day/${id}`,
            },
        };
    }

    await db.connect();
    const dua = await Dua.findOne({ _id: id }).lean();
    const user = await User.findOne({ email: session.user.email }).lean();
    await db.disconnect();

    return {
        props: {
            user: db.convertDocToObj(user),
            dua: db.convertDocToObj(dua),
            id: id,
        },
    };
}
