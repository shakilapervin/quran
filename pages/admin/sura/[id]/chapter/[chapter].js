import Layout from '../../../../../components/admin/layouts/Layout';
import Head from 'next/head';
import axios from 'axios';
import dynamic from "next/dynamic";
import React, {useEffect, useState} from "react";
import $ from 'jquery';
import {withIronSessionSsr} from "iron-session/next";
import session from "../../../../../utils/session";
import Loader from "../../../../../components/Loader";
import {toast, ToastContainer} from "react-toastify";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const JoditEditor = dynamic(
    () => {
        return import("jodit-react");
    },
    {ssr: false}
);

export default function Edit({user, id, sura}) {
    const [chapter, setChapter] = useState();
    const [loading, setLoading] = useState(true);
    const [loader, setLoader] = useState(false);
    const headers = {
        headers: {Authorization: `Bearer ${user.token}`},
    };
    useEffect(() => {
        axios.get(
            `${process.env.API_URL}/chapter/${id}`,
            headers
        ).then(res => {
            if (res.data.status === true) {
                setChapter(res.data.chapter);
                setLoading(false);
            }
        }).catch(err => {
            console.log(err);
        });
    }, []);
    const config = {
        readonly: false,
        height: 400,
    };

    const handleForm = async (e) => {
        e.preventDefault();
        setLoader(true);
        toast.loading('Saving', {
            position: "bottom-left",
            theme: 'dark'
        });
        const arabic = e.target.arabicTitle.value;
        const bangla = e.target.banglaTitle.value;
        const shortTafsil = $('.tafsilShort .jodit-wysiwyg').html();
        const longTafsil = $('.tafsilLong .jodit-wysiwyg').html();
        const serial = e.target.serial.value;
        try {
            const response = await axios.post(`${process.env.API_URL}/chapter/update`, {
                arabic,
                bangla,
                shortTafsil,
                longTafsil,
                serial,
                sura,
                id
            }, headers);
            if (response.data.status === true) {
                toast.dismiss();
                toast.success('Saved', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark',
                });
                setLoader(false);
            } else {
                toast.dismiss();
                toast.error('Something went wrong! Try again', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark',
                });
                setLoader(false);
            }
        } catch (err) {
            toast.dismiss();
            toast.error(err.response.statusText, {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'dark',
            });
            setLoader(false);
        }
    };
    return (
        <>
            <Head>
                <title>Edit Chapter</title>
            </Head>
            {
                loader && loader === true && (
                    <Loader/>
                )
            }
            <ToastContainer/>
            <Layout user={user}>
                <div className="topBar">
                    <div className="content">
                        <h1 className="welcome">Edit Chapter</h1>
                    </div>
                </div>
                <div className="widgetArea">
                    <div className="content">
                        <div className="formWrapper">
                            <form
                                onSubmit={handleForm}
                                encType="multipart/form-data"
                            >
                                <div className="form-group mb-2">
                                    <label>Arabic</label>
                                    {
                                        sura && loading === false && (
                                            <textarea name="arabicTitle" className="form-control" rows="5" dir="rtl"
                                                      defaultValue={chapter.arabic}></textarea>
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={70}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2">
                                    <label>Bangla</label>
                                    {
                                        sura && loading === false && (
                                            <textarea name="banglaTitle" className="form-control" rows="5"
                                                      defaultValue={chapter.bangla}></textarea>
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={70}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2 tafsilShort">
                                    <label>Short Tafsil</label>
                                    {
                                        sura && loading === false && (
                                            <JoditEditor
                                                config={config}
                                                value={chapter.shortTafsil}
                                            />
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={100}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2 tafsilLong">
                                    <label>Long Tafsil</label>

                                    {
                                        sura && loading === false && (
                                            <JoditEditor
                                                config={config}
                                                value={chapter.longTafsil2}
                                            />
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={100}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2">
                                    <label>Chapter Serial Number</label>
                                    {
                                        sura && loading === false && (
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                name="serial"
                                                id="serial"
                                                defaultValue={chapter.serial}
                                            />
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={40}/>
                                            </SkeletonTheme>
                                        )
                                    }
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


export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({req, params}) {
        const session = req.session;
        const sura = params.id;
        const id = params.chapter;
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
                id,
                sura
            },
        };
    },
    session
);