import Layout from '../../../../components/admin/layouts/Layout';
import Head from 'next/head';
import axios from 'axios';
import {withIronSessionSsr} from "iron-session/next";
import session from "../../../../utils/session";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {useEffect, useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import Loader from "../../../../components/Loader";

export default function Edit({ user, id }) {
    const [dua, setDua] = useState();
    const [loading, setLoading] = useState(true);
    const [loader, setLoader] = useState(false);
    const headers = {
        headers: {Authorization: `Bearer ${user.token}`},
    };
    useEffect(() => {
        axios.get(
            `${process.env.API_URL}/dua/${id}`,
            headers
        ).then(res => {
            if (res.data.status === true) {
                setDua(res.data.dua);
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
        const banglaName = e.target.banglaName.value;
        const arabicName = e.target.arabicName.value;
        const arabicText = e.target.arabicText.value;
        const banglaText = e.target.banglaText.value;
        const type = e.target.type.value;
        try {
            const response = await axios.post('/api/dua/update', {
                banglaName: banglaName,
                arabicName: arabicName,
                banglaText: banglaText,
                arabicText: arabicText,
                type: type,
                id,
            },headers);
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
                <title>Edit Dua</title>
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
                        <h1 className="welcome">Edit Dua</h1>
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
                                        dua && loading === false && (
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                name="banglaName"
                                                id="banglaName"
                                                defaultValue={dua.banglaName}
                                            />
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
                                        dua && loading === false && (
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                name="arabicName"
                                                id="arabicName"
                                                dir="rtl"
                                                defaultValue={dua.arabicName}
                                            />
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={40}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2">
                                    <label>Dua in Arabic</label>
                                    {
                                        dua && loading === false && (
                                            <textarea name="arabicText" cols="30" rows="10"
                                                      className="form-control" dir='rtl' defaultValue={dua.arabicText}/>
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={80}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-2">
                                    <label>Dua in Bangla</label>
                                    {
                                        dua && loading === false && (
                                            <textarea name="banglaText" cols="30" rows="10"
                                                      className="form-control" defaultValue={dua.banglaText}/>
                                        ) || (
                                            <SkeletonTheme baseColor="#ffffff" highlightColor="#F1F5F9">
                                                <Skeleton width={`100%`} height={80}/>
                                            </SkeletonTheme>
                                        )
                                    }
                                </div>
                                <div className="form-group mb-5">
                                    <label>Type</label>
                                    {
                                        dua && loading === false && (
                                            <select name="type" className="form-control" defaultValue={dua.type}>
                                                <option value="1">প্রতিদিনের দোয়া</option>
                                                <option value="2">সপ্তাহের দোয়া</option>
                                                <option value="3">বিশেষ দোয়া</option>
                                                <option value="4">প্রসিদ্ধ দোয়া</option>
                                            </select>
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