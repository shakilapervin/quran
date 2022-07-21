import Head from "next/head";
import Header from "../components/frontend/layouts/Header";
import Page from '../components/frontend/layouts/Page';
import styles from '../styles/Search.module.css';
import {toArabic} from 'arabic-digits';
import Link from "next/link";
import axios from "axios";
import {useEffect, useState} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function Search({keyword}) {
    const [results, setResults] = useState();
    const [loading, setLoading] = useState(true);
    const [links, setLinks] = useState([]);

    async function getResults() {
        try {
            const res = await axios.post(
                `${process.env.API_URL}/search/chapters`,
                {keyword}
            );
            if (res.data.status === true) {
                if (res.data.chapters.data) {
                    setResults(res.data.chapters.data);
                    setLoading(false);
                }
                if (res.data.suras.links){
                    setLinks(res.data.suras.links);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getResults();
    }, [setResults]);

    const paginate = async (url) => {
        setLoading(true);
        try {
            const res = await axios.post(
                url,
                {
                    keyword
                }
            );
            if (res.data.chapters.data) {
                setResults(res.data.chapters.data);
                setLoading(false);
            }
            if (res.data.suras.links){
                setLinks(res.data.suras.links);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Head>
                <title>جستجوی قرآن: {keyword}</title>
            </Head>
            <Header/>
            <div className="container">
                <Page>
                    <form action={`/search`} method={`get`}>
                        <div className="row justify-content-around">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-8">
                                        <input type="text" defaultValue={keyword} className={`form-control`}
                                               name={`keyword`}/>
                                    </div>
                                    <input type="hidden" name='page' defaultValue={0}/>
                                    <div className="col-4">
                                        <button className={`btn btn-dark`} type={`submit`}>جستجو</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {
                        results && !loading &&(
                            <div className={styles.totalWrapper}>
                                نتیجه {toArabic(results.length)}
                            </div>
                        ) || (
                            <SkeletonTheme baseColor="#dddddd" highlightColor="#F1F5F9">
                                <Skeleton width={`100%`} height={40} count={10} style={{marginBottom: 30}}/>
                            </SkeletonTheme>
                        )
                    }
                    <div className={styles.results}>
                        {
                            results && !loading &&(
                                results.map((el) => (
                                    <div key={el.id} className={styles.item}>
                                        <Link href={`#`}>
                                            <a>
                                                {toArabic(el.serial_no)}. سوره {toArabic(el.serial)},
                                                آیه {toArabic(el.serial)}
                                            </a>
                                        </Link>
                                        <p className={styles.chapter}>
                                            {el.arabic}
                                        </p>
                                        <p>{keyword}</p>
                                    </div>
                                ))
                            ) || (
                                <SkeletonTheme baseColor="#dddddd" highlightColor="#F1F5F9">
                                    <Skeleton width={`100%`} height={40} count={10} style={{marginBottom: 30}}/>
                                </SkeletonTheme>
                            )
                        }
                    </div>
                    <nav>
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
                </Page>
            </div>
        </>
    )
}
export async function getServerSideProps({query}) {
    const keyword = query.keyword;
    return {
        props: {
            keyword
        },
    };
}