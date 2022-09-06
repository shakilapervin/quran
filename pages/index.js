import Head from 'next/head';
import CustomImage from '../components/CustomImage';
import SearchByText from '../components/frontend/SearchByText';
import SearchBySura from '../components/frontend/SearchBySura';
import styles from '../styles/Home.module.css'
import SearchByDua from "../components/frontend/SearchByDua";

export default function Home() {
    return (
        <>
            <Head>
                <title>پارس قرآن : جستجوي قرآن</title>
            </Head>
            <div className={styles.topArea}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className={styles.logo}>
                                <CustomImage src="/logo.png" href="/"/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <SearchByText/>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <SearchBySura/>
                        </div>
                        <div className="col-md-6">
                            <SearchByDua/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
