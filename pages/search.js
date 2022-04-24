import Head from "next/head";
import ChapterModel from "../models/Chapter";
import db from "../utils/db";
import Header from "../components/frontend/layouts/Header";
import Page from '../components/frontend/layouts/Page';
import styles from '../styles/Search.module.css';
import {toArabic} from 'arabic-digits';
import Link from "next/link";

export default function Search({results, keyword, total}) {
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
                                    <div className="col-4">
                                        <button className={`btn btn-dark`} type={`submit`}>جستجو</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className={styles.totalWrapper}>
                        نتیجه {toArabic(total)}
                    </div>
                    <div className={styles.results}>
                        {
                            results && (
                                results.map((el, index) => (
                                    <div key={el._id} className={styles.item}>
                                        <Link href={`#`}>
                                            <a>
                                                {toArabic(index + 1)}. سوره {toArabic(el.sura[0].serial)},
                                                آیه {toArabic(el.serial)}
                                            </a>
                                        </Link>
                                        <p className={styles.chapter}>
                                            {el.arabicTitle}
                                        </p>
                                        <p>{keyword}</p>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </Page>
            </div>
        </>
    )
}
export async function getServerSideProps({query}) {
    const keyword = query.keyword;
    const page = query.page;
    await db.connect();
    const total = await ChapterModel.find({arabicTitle: new RegExp(keyword, 'i')}).count();
    const totalPages = Math.ceil(total / 5);
    const resultObjects = await ChapterModel.aggregate([
        {
            $match: {arabicTitle: new RegExp(keyword, 'i')}
        },
        {'$addFields': {'suraId': {'$toObjectId': "$sura"}}},
        {
            $lookup: {
                from: 'suras',
                localField: 'suraId',
                foreignField: '_id',
                as: 'sura',
                pipeline: [
                    {
                        $project: {
                            _id: 1,
                            serial: 1,
                        }
                    }
                ]
            }
        },
        {
            $project: {
                _id: 1,
                arabicTitle: 1,
                serial: 1,
                sura: 1
            }
        }
    ]).skip(5 * page).limit(50);
    const results = JSON.stringify(resultObjects);
    await db.disconnect();
    return {
        props: {
            results: JSON.parse(results),
            totalPages,
            keyword,
            total
        },
    };
}