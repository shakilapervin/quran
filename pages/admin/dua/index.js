import Head from 'next/head';
import Layout from '../../../components/admin/layouts/Layout';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withIronSessionSsr} from "iron-session/next";
import session from "../../../utils/session";
import {toast, ToastContainer} from "react-toastify";
import $ from "jquery";
import TableSkeleton from "../../../components/TableSkeleton";

export default function DuaList({user}) {
    const [duas, setDuas] = useState();
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const headers = {
        headers: {Authorization: `Bearer ${user.token}`},
    };

    async function getDuas() {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/dua`,
                headers
            );
            if (res.data.status === true) {
                if (res.data.duas.data) {
                    setDuas(res.data.duas.data);
                } else {
                    setDuas([]);
                }
                if (res.data.duas.links) {
                    setLinks(res.data.duas.links);
                }
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDuas();
    }, [setDuas]);

    const paginate = async (url) => {
        setLoading(true);
        try {
            const res = await axios.get(
                url,
                headers
            );
            if (res.data.status === true) {
                setDuas(res.data.duas.data);
                setLinks(res.data.duas.links);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }
    const deleteHandler = async (id) => {
        toast.loading('Deleting', {
            position: "bottom-right",
            theme: 'dark'
        });
        try {
            const response = await axios.post(`${process.env.API_URL}/dua/delete`, {
                id: id,
            }, headers);
            if (response.data.status === true) {
                toast.dismiss();
                toast.success('Successfully Deleted', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark',
                });
                $(`.row-id-${id}`).fadeOut();
            } else {
                toast.dismiss();
                toast.error(response.data.error, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark',
                });
            }
        } catch (err) {
            toast.dismiss();
            toast.error(err.response.data.errors, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'dark',
            });
        }
    };
    return (
        <>
            <Head>
                <title>Manage Dua</title>
            </Head>
            <ToastContainer/>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">Manage Dua</h1>
                    </div>
                </div>
                <div className="widgetArea">
                    <div className="content">
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
                            {
                                duas && !loading && (
                                    duas.map((el, index) => (
                                        <tr
                                            key={el.id}
                                            style={{verticalAlign: 'middle'}}
                                            className={`row-id-${el.id}`}
                                        >
                                            <td>{index + 1}</td>
                                            <td>{el.banglaName}</td>
                                            <td dir='rtl' className='text-start'>{el.arabicName}</td>
                                            <td>
                                                <Link
                                                    href={`/admin/dua/${el.id}`}
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
                                                                    el.id
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        Delete
                                                    </a>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                )|| (
                                    <TableSkeleton tr={3} td={4}/>
                                )
                            }
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan={6}>
                                    <nav className={`float-end`}>
                                        <ul className="pagination mt-3">
                                            {
                                                links.map(el => (
                                                    <li className={`page-item ${el.active === true ? 'active' : ''}`}
                                                        key={el.label}>
                                                        <a className={`page-link`}
                                                           onClick={() => paginate(el.url)}
                                                           dangerouslySetInnerHTML={{__html: el.label}}/>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({req}) {
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
                user: session.user
            },
        };
    },
    session
);