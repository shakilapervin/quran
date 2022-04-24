import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={`container ${styles.header}`}>
                <div className="row align-items-center justify-content-end">
                    <div className="col">
                        <Link href={`/`}>
                            <a>
                                বাংলা
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href={`/`}>
                            <a>
                                مقالات
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href={`/`}>
                            <a>
                                مقالات
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href={`/`}>
                            <a>
                                فهرست قرآن
                            </a>
                        </Link>
                    </div>
                    <div className="col">
                        <Link href={`/`}>
                            <a>
                                صفحه اول
                            </a>
                        </Link>
                    </div>
                    <div className="col">
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
