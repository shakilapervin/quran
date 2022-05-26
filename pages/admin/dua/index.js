import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Layout from '../../../components/admin/layouts/Layout';
import Link from 'next/link';
import db from '../../../utils/db';
import User from '../../../models/User';
import Dua from '../../../models/Dua';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function DuaList({user, duas}) {
    const router = useRouter();
    const [status, setStatus] = useState(null);
    const refreshData = () => {
        router.replace(router.asPath);
    };
    const deleteHandler = async (id) => {
        try {
            const response = await axios.post('/api/dua/delete', {
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
                <title>Manage Dua</title>
            </Head>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">Manage Dua</h1>
                    </div>
                </div>
                <div className="widgetArea">
                    <div className="content">
                        {status !== null ? (
                            <div className="alert alert-success">{status}</div>
                        ) : (
                            ''
                        )}
                        <Link href="/admin/dua/add-new">
                            <a className="btn btn-success">Add New Dua</a>
                        </Link>
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Bangla Name</th>
                                    <th>Arabic Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {duas.map((el, index) => (
                                    <tr
                                        key={el._id.toString()}
                                        style={{ verticalAlign: 'middle' }}
                                    >
                                        <td>{index + 1}</td>
                                        <td>{el.banglaName}</td>
                                        <td dir='rtl' className='text-start'>{el.arabicName}</td>
                                        <td>
                                            <Link
                                                href={`/admin/dua/${el._id}`}
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
    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${process.env.NEXTAUTH_URL}/admin/sura`,
            },
        };
    }
    await db.connect();
    const user = await User.findOne({ email: session.user.email }).lean();
    const duas = await Dua.find({}).lean();
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
            duas: duas.map(db.convertDocToObj),
        },
    };
}