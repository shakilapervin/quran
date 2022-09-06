import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={`container ${styles.header}`}>
                <div className="row justify-content-center">
                    <div className="col text-center">
                        <Link href={`/`}>
                            <a>
                                <Image src='/logo.jpg' width={100} height={100}/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
