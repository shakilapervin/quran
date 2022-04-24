import Head from "next/head";
import Image from 'next/image'

export default function ComingSoon() {
    return (
        <>
            <Head>
                <title>Coming Soon</title>
            </Head>
            <div style={{'width' : '100px', 'margin' : '60px auto'}}>
                <Image src='/logo.jpg' width={100} height={100}/>
            </div>
            <h1 style={{'textAlign': 'center'}}>
                Coming Soon
            </h1>
        </>
    )
}