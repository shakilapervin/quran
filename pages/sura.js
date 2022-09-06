import Head from "next/head";
import Header from "../components/frontend/layouts/Header";
import Page from '../components/frontend/layouts/Page';
import {toArabic} from 'arabic-digits';
import axios from "axios";
import {useEffect, useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function Sura({sura, chapter}) {
    const [chapters, setChapters] = useState();
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getChapters() {
        try {
            const res = await axios.post(
                `${process.env.API_URL}/frontend/chapters`, {
                    sura, chapter
                }
            );
            if (res.data.status === true) {
                if (res.data.chapters.data) {
                    setChapters(res.data.chapters.data);
                    setLoading(false);
                }
                if (res.data.chapters.next_page_url) {
                    setNextPage(res.data.chapters.next_page_url);
                } else {
                    setNextPage(null);
                }
                if (res.data.chapters.prev_page_url) {
                    setPreviousPage(res.data.chapters.prev_page_url);
                } else {
                    setPreviousPage(null);
                }
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
            const res = await axios.post(
                url, {
                    sura, chapter
                }
            );
            if (res.data.status === true) {
                setChapters(res.data.chapters.data);
                setLoading(false);
            }
            if (res.data.chapters.next_page_url) {
                setNextPage(res.data.chapters.next_page_url);
            } else {
                setNextPage(null);
            }
            if (res.data.chapters.prev_page_url) {
                setPreviousPage(res.data.chapters.prev_page_url);
            } else {
                setPreviousPage(null);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <Head>
                <title>Almunji</title>
            </Head>
            <Header/>
            <div className="container">
                <Page>
                    {
                        chapters && !loading && (
                            chapters.map((el) => (
                                <div key={el.id} className={`row mb-5`}>
                                    <div className="col-md-3">
                                        <p className={`font-size-26`}>
                                            {el.arabic}
                                            <span className={`serial`}> ﴿{toArabic(el.serial)}﴾</span>
                                        </p>
                                    </div>
                                    <div className="col-md-3" dir='ltr'>
                                        <p>
                                            {el.bangla} <span className={`serial`}>({el.serial})</span>
                                        </p>
                                    </div>
                                    {
                                        el.shortTafsil && (
                                            <div className="col-md-3" dir='ltr'>
                                                <p>
                                                    {el.shortTafsil} <span className={`serial`}>({el.serial})</span>
                                                </p>
                                            </div>
                                        )
                                    }
                                    {
                                        el.longTafsil && (
                                            <div className="col-md-3" dir='ltr'>
                                                <p>
                                                    {el.longTafsil} <span className={`serial`}>({el.serial})</span>
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        ) || (
                            <SkeletonTheme baseColor="#dddddd" highlightColor="#F1F5F9">
                                <Skeleton width={`100%`} height={40} count={10} style={{marginBottom: 30}}/>
                            </SkeletonTheme>
                        )
                    }
                    <div className="row justify-content-center">
                        <div className="col-md-3 text-center">
                            <a className={`btn btn-lg btn-primary mb-5 ${!nextPage ? 'disabled' : ''}`}
                               onClick={() => paginate(nextPage)}
                               dangerouslySetInnerHTML={{__html: 'পরবর্তী>>'}} dir={'ltr'}/>
                        </div>
                        <div className="col-md-3 text-center">
                            <a className={`btn btn-lg btn-primary mb-5 ${!previousPage ? 'disabled' : ''}`}
                               onClick={() => paginate(previousPage)}
                               dangerouslySetInnerHTML={{__html: '<<পূর্ববর্তী'}} dir={'ltr'}/>
                        </div>
                    </div>
                </Page>
            </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const sura = query.sura;
    const chapter = query.chapter;
    return {
        props: {
            sura,
            chapter
        },
    };
}