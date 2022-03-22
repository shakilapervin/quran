import Layout from '../../../../../components/admin/layouts/Layout';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import axios from 'axios';
import db from '../../../../../utils/db';
import Chapter from '../../../../../models/Chapter';
import User from '../../../../../models/User';
import dynamic from "next/dynamic";
import React, { useState  } from "react";
import $ from 'jquery';
const JoditEditor = dynamic(
    () => {
        return import("jodit-react");
    },
    { ssr: false }
);

export default function Edit({ user, id, chapter }) {
    const config = {
        readonly: false,
        height: 400,
    };


    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const handleForm = async (e) => {
        e.preventDefault();
        const arabicTitle = e.target.arabicTitle.value;
        const banglaTitle = e.target.banglaTitle.value;
        const banglaTafsil = $('.tafsilShort .jodit-wysiwyg').html();
        const banglaTafsil2 = $('.tafsilLong .jodit-wysiwyg').html();
        const serial = e.target.serial.value;
        try {
            const response = await axios.post('/api/chapter/update', {
                arabicTitle: arabicTitle,
                banglaTitle: banglaTitle,
                banglaTafsil: banglaTafsil,
                banglaTafsil2: banglaTafsil2,
                serial: serial,
                id: id,
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
                <title>Edit Chapter</title>
            </Head>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">Edit Chapter</h1>
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
                                    <label>Arabic</label>
                                    <textarea name="arabicTitle" className="form-control" rows="5" dir="rtl"
                                              defaultValue={chapter.arabicTitle}></textarea>
                                </div>
                                <div className="form-group mb-2">
                                    <label>Bangla</label>
                                    <textarea name="banglaTitle" className="form-control" rows="5"
                                              defaultValue={chapter.banglaTitle}></textarea>
                                </div>
                                <div className="form-group mb-2 tafsilShort">
                                    <label>Short Tafsil</label>
                                    <JoditEditor
                                        config={config}
                                        value={chapter.banglaTafsil}
                                    />
                                </div>
                                <div className="form-group mb-2 tafsilLong">
                                    <label>Long Tafsil</label>
                                    <JoditEditor
                                        config={config}
                                        value={chapter.banglaTafsil2}
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
                                        defaultValue={chapter.serial}
                                    />
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
    const { id, chapter } = params;
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin/sura/${id}/chapter/${chapter}`,
            },
        };
    }

    await db.connect();
    const chapterData = await Chapter.findOne({ _id: chapter }).lean();
    const user = await User.findOne({ email: session.user.email }).lean();
    await db.disconnect();

    return {
        props: {
            user: db.convertDocToObj(user),
            chapter: db.convertDocToObj(chapterData),
            id: chapter,
        },
    };
}
