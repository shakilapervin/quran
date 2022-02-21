import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Layout from '../../../../../components/admin/layouts/Layout';
import Link from 'next/link';
import db from '../../../../../utils/db';
import User from '../../../../../models/User';
import Chapter from '../../../../../models/Chapter';
import Sura from '../../../../../models/Sura';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ChapterList({ user, chapters, sura, id }) {
    const router = useRouter();
    const [status, setStatus] = useState(null);
    const refreshData = () => {
        router.replace(router.asPath);
    };
    const deleteHandler = async (id) => {
        try {
            const response = await axios.post('/api/chapter/delete', {
                id: id,
            });
            if (response.data.success) {
                setStatus(response.data.success);
                refreshData();
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <Head>
                <title>Manage {sura.banglaName} Chapters</title>
            </Head>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">
                            Manage {sura.banglaName} Chapters
                        </h1>
                    </div>
                </div>
                <div className="widgetArea">
                    <div className="content">
                        {status !== null ? (
                            <div className="alert alert-success">{status}</div>
                        ) : (
                            ''
                        )}
                        <Link href={`/admin/sura/${id}/chapter/add-new`}>
                            <a className="btn btn-success">Add New Chapter</a>
                        </Link>
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th>Chapter</th>
                                    <th>Arabic</th>
                                    <th>Bangla</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chapters.map((el, index) => (
                                    <tr
                                        key={el._id.toString()}
                                        style={{ verticalAlign: 'middle' }}
                                    >
                                        <td>{index + 1}</td>
                                        <td dir="rtl" className="text-start">
                                            {el.arabicTitle}
                                        </td>
                                        <td>{el.banglaTitle}</td>
                                        <td>
                                            <Link
                                                href={`/admin/sura/${id}/chapter/${el._id}`}
                                            >
                                                <a className="btn btn-warning btn-sm m-2">
                                                    Edit
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a
                                                    className="btn btn-danger btn-sm"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const result =
                                                            confirm(
                                                                'Want to delete?'
                                                            );
                                                        if (result) {
                                                            deleteHandler(
                                                                el._id
                                                            );
                                                        }
                                                    }}
                                                >
                                                    Delete
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin/sura`,
            },
        };
    }
    await db.connect();
    const user = await User.findOne({ email: session.user.email }).lean();
    const sura = await Sura.findOne({ _id: id }).lean();
    const chapters = await Chapter.find({ sura : id}).lean();
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
            sura: db.convertDocToObj(sura),
            chapters: chapters.map(db.convertDocToObj),
            id
        },
    };
}
