import Head from "next/head";
import Header from "../components/frontend/layouts/Header";
import Page from '../components/frontend/layouts/Page';
import axios from "axios";
import {useEffect, useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function Dua({id}) {
    const [dua, setDua] = useState();
    const [loading, setLoading] = useState(true);

    async function getDua() {
        try {
            const res = await axios.get(
                `${process.env.API_URL}/dua/${id}`);
            if (res.data.status === true) {
                if (res.data.dua) {
                    setDua(res.data.dua);
                    setLoading(false);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDua();
    }, [setDua]);

    return (
        <>
            <Head>
                <title>Almunji</title>
            </Head>
            <Header/>
            <div className="container">
                <Page>
                    {
                        dua && !loading && (
                            <div className={`row mb-5`}>
                                <div className="col-md-6">
                                    <p className={`font-size-26`}>
                                        {dua.arabicText}
                                    </p>
                                </div>
                                <div className="col-md-6" dir='ltr'>
                                    <p>
                                        {dua.banglaText}
                                    </p>
                                </div>
                            </div>
                        ) || (
                            <SkeletonTheme baseColor="#dddddd" highlightColor="#F1F5F9">
                                <Skeleton width={`100%`} height={40} count={10} style={{marginBottom: 30}}/>
                            </SkeletonTheme>
                        )
                    }
                </Page>
            </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const id = query.id;
    return {
        props: {
            id
        },
    };
}