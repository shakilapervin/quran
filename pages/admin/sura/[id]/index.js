import Layout from '../../../../components/admin/layouts/Layout';
import Head from 'next/head';
import axios from 'axios';
import {withIronSessionSsr} from "iron-session/next";
import session from "../../../../utils/session";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {useEffect, useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import Loader from "../../../../components/Loader";

export default function Edit({user, id}) {
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
            const response = await axios.post(`${process.env.API_URL}/sura/update`, {
                banglaName: banglaName,
                arabicName: arabicName,
                serial_no: serial,
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
                <title>Edit Sura</title>
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
                        <h1 className="welcome">Edit Sura</h1>
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
                                    <label>Bangla Name</label>
                                    {
                                        sura && loading === false && (
                                            <input type="text" className={`form-control`} name="banglaName" required
                                                   defaultValue={sura.bangla_name}/>
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={40}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2">
                                    <label>Arabic Name</label>
                                    {
                                        sura && loading === false && (
                                            <input type="text" className={`form-control`} name="arabicName" required
                                                   defaultValue={sura.arabic_name} dir='rtl'/>
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={40}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2">
                                    <label>Sura Serial Number</label>
                                    {
                                        sura && loading === false && (
                                            <input type="text" className={`form-control`} name="serial" required
                                                   defaultValue={sura.serial_no} dir='rtl'/>
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