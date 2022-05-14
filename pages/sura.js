import Head from "next/head";
import ChapterModel from "../models/Chapter";
import db from "../utils/db";
import Header from "../components/frontend/layouts/Header";
import Page from '../components/frontend/layouts/Page';
import {toArabic} from 'arabic-digits';

export default function Sura({chapters}) {
    return (
        <>
            <Head>
                <title>Almunji</title>
            </Head>
            <Header/>
            <div className="container">
                <Page>
                    {
                        chapters && (
                            chapters.map((el) => (
                                <div key={el._id} className={`row mb-5`}>
                                    <div className="col-md-3">
                                        <p className={`font-size-26`}>
                                            {el.arabicTitle} <span className={`serial`}>﴿{toArabic(el.serial)}﴾</span>
                                        </p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>
                                            {el.banglaTitle} <span className={`serial`}>({el.serial})</span>
                                        </p>
                                    </div>
                                    {
                                        el.banglaTafsil && (
                                            <div className="col-md-3">
                                                <p>
                                                    {el.banglaTafsil} <span className={`serial`}>({el.serial})</span>
                                                </p>
                                            </div>
                                        )
                                    }
                                    {
                                        el.banglaTafsil2 && (
                                            <div className="col-md-3">
                                                <p>
                                                    {el.banglaTafsil2} <span className={`serial`}>({el.serial})</span>
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        )
                    }
                </Page>
            </div>
        </>
    )
}

export async function getServerSideProps({query}) {
    const sura = query.sura;
    const chapter = query.chapter;
    await db.connect();
    const resultObjects = await ChapterModel.find({sura: sura, serial: {$gte : chapter}}).limit(10);
    const chapters = JSON.stringify(resultObjects);
    return {
        props: {
            chapters: JSON.parse(chapters),
        },
    };
}