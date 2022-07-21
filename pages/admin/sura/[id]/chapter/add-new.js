import {useEffect, useState} from 'react';
import Head from 'next/head';
import Layout from '../../../../../components/admin/layouts/Layout';
import styles from '../../../../../styles/AddNewChapter.module.css';
import axios from 'axios';
import $ from 'jquery';
import dynamic from "next/dynamic";
import {withIronSessionSsr} from "iron-session/next";
import session from "../../../../../utils/session";
import Loader from "../../../../../components/Loader";
import {toast, ToastContainer} from "react-toastify";

const JoditEditor = dynamic(
    () => {
        return import("jodit-react");
    },
    {ssr: false}
);
export default function AddNewChapter({user, id}) {
    const [sura, setSura] = useState();
    const [loading, setLoading] = useState(true);
    const [loader, setLoader] = useState(false);
    const headers = {
        headers: {Authorization: `Bearer ${user.token}`},
    };
    useEffect(() => {
        axios.get(
            `${process.env.API_URL}/sura/${id}`,
            headers
        ).then(res => {
            if (res.data.status === true) {
                setSura(res.data.sura);
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
            const response = await axios.post(`${process.env.API_URL}/chapter/save`, {
                arabic,
                bangla,
                shortTafsil,
                longTafsil,
                serial,
                sura: id
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
                $('form').trigger('reset');
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
                <title>Add New Chapter In
                    {
                        sura && loading === false && (
                            ' ' + sura.bangla_name
                        )
                    }</title>
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
                        <h1 className="welcome">
                            Add New Chapter In
                            {
                                sura && loading === false && (
                                    ' ' + sura.bangla_name
                                )
                            }
                        </h1>
                    </div>
                    <div className="widgetArea">
                        <div className="content">
                            <div className={styles.formWrapper}>
                                <form onSubmit={handleForm} id='form'>
                                    <div className="form-group mb-2">
                                        <label>Arabic</label>
                                        <textarea name="arabicTitle" className="form-control" rows="5"
                                                  dir="rtl"></textarea>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label>Bangla</label>
                                        <textarea name="banglaTitle" className="form-control" rows="5"></textarea>
                                    </div>
                                    <div className="form-group mb-2 tafsilShort">
                                        <label>Short Tafsil</label>
                                        <JoditEditor
                                            config={config}
                                        />
                                    </div>
                                    <div className="form-group mb-2 tafsilLong">
                                        <label>Long Tafsil</label>
                                        <JoditEditor
                                            config={config}
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
export const getServerSideProps = withIronSessionSsr(
    async function getServerSideProps({req, params}) {
        const session = req.session;
        const id = params.id;
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
                id
            },
        };
    },
    session
);
