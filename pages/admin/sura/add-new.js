import Head from 'next/head';
import Layout from '../../../components/admin/layouts/Layout';
import styles from '../../../styles/AddNewSura.module.css';
import axios from 'axios';
import $ from 'jquery';
import {withIronSessionSsr} from "iron-session/next";
import session from "../../../utils/session";
import {ToastContainer, toast} from 'react-toastify';
import Loader from "../../../components/Loader";
import {useState} from "react";

export default function AddNewSura({user}) {
    const [loader, setLoader] = useState(false);
    const headers = {
        headers: {Authorization: `Bearer ${user.token}`},
    };
    const handleForm = async (e) => {
        e.preventDefault();
        setLoader(true);
        toast.loading('Saving', {
            position: "bottom-left",
            theme: 'dark'
        });
        const arabicName = e.target.arabicName.value;
        const banglaName = e.target.banglaName.value;
        const serial = e.target.serial.value;
        try {
            const response = await axios.post(`${process.env.API_URL}/sura/save`, {
                banglaName: banglaName,
                arabicName: arabicName,
                serial_no: serial,
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
                <title>Add New Sura</title>
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
                        <h1 className="welcome">Add New Sura</h1>
                    </div>
                    <div className="widgetArea">
                        <div className="content">
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