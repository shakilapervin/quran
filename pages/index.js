import Head from 'next/head';
import CustomImage from '../components/CustomImage';
import SearchByText from '../components/frontend/SearchByText';
import SearchBySura from '../components/frontend/SearchBySura';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import SearchByDua from "../components/frontend/SearchByDua";

export default function Home() {
    return (
        <>
            <Head>
                <title>پارس قرآن : جستجوي قرآن</title>
                <meta
                    name="description"
                    content="جستجوگر قرآن به سه زبان فارسي ، عربي و انگليسي. مقالات و نرم افزارهاي قرآني. تلاوت قرآن. ترجمه هاي مختلف قرآن"
                />
                <meta
                    name="keyword"
                    content="قران , فارسي , قرآن کريم , قرآن مجيد , فارسي , انگليسي, قرآن ,  عربي , عربي , ترجمه , جستجو , quran, iran, koran, islam, god, قران کریم"
                />
            </Head>
            <div className={styles.topArea} dir="rtl">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className={styles.logo}>
                                <CustomImage src="/logo.png" href="/"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <SearchByText/>
                        </div>
                        <div className="col-md-3 text-center">
                            <Link href="#">
                                <a>বাংলা</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <SearchBySura/>
                        </div>
                        <div className="col-md-4">
                            <SearchByDua/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
