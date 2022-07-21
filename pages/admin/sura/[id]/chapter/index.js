import Head from 'next/head';
import Layout from '../../../../../components/admin/layouts/Layout';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {withIronSessionSsr} from "iron-session/next";
import session from "../../../../../utils/session";
import TableSkeleton from "../../../../../components/TableSkeleton";
import {ToastContainer, toast} from 'react-toastify';
import $ from 'jquery';

export default function ChapterList({user, sura}) {
    const [chapters, setChapters] = useState();
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const headers = {
        headers: {Authorization: `Bearer ${user.token}`},
    };

    async function getChapters() {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/${sura}/chapter`,
                headers
            );
            if (res.data.status === true) {
                if (res.data.chapters.data) {
                    setChapters(res.data.chapters.data);
                } else {
                    setChapters([]);
                }
                if (res.data.chapters.links) {
                    setLinks(res.data.chapters.links);
                }
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getChapters();
    }, [setChapters]);

    const paginate = async (url) => {
        setLoading(true);
        try {
            const res = await axios.get(
                url,
                headers
            );
            if (res.data.status === true) {
                setChapters(res.data.suras.data);
                setLinks(res.data.suras.links);
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
            const response = await axios.post(`${process.env.API_URL}/chapter/delete`, {
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
                <title>Manage {sura.banglaName} Chapters</title>
            </Head>
            <ToastContainer/>
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
                        <Link href={`/admin/sura/${sura}/chapter/add-new`}>
                            <a className="btn btn-success">Add New Chapter</a>
                        </Link>
                        <table className="table mt-3">
                            <thead>
                            <tr>
                                <th width="10%">Chapter</th>
                                <th width="40%">Arabic</th>
                                <th width="40%">Bangla</th>
                                <th width="10%">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                chapters && chapters.length <= 0 && (
                                    <tr>
                                        <td colSpan={4} className={`text-center`}>No Sura Found</td>
                                    </tr>
                                )
                            }
                            {
                                chapters && !loading && (
                                    chapters.map((el) => (
                                            <tr
                                                key={el.id}
                                                style={{verticalAlign: 'middle'}}
                                                className={`row-id-${el.id}`}
                                            >
                                                <td>{el.serial}</td>
                                                <td dir='rtl'>{el.arabic}</td>
                                                <td className='text-start'>{el.bangla}</td>
                                                <td>
                                                    <Link
                                                        href={`/admin/sura/${el.sura}/chapter/${el.id}`}
                                                    >
                                                        <a className="btn btn-warning btn-sm m-2">
                                                            Edit
                                                        </a>
                                                    </Link>
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
                                                </td>
                                            </tr>
                                        )
                                    )
                                ) || (
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
    async function getServerSideProps({req, params}) {
        const session = req.session;
        const sura = params.id;
        if (!session.user) {
            return {
                redirect: {
                    destination: `/admin`,
                },
            };
        }
        return {
            props: {
                user: session.user,
                sura
            },
        };
    },
    session
);