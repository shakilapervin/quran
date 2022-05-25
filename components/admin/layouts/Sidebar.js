import styles from './Sidebar.module.css';
import CustomImage from './../../CustomImage';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {signOut} from 'next-auth/react';

export default function Sidebar({user}) {
    const router = useRouter();
    return (
        <div className={styles.sideBar}>
            <div className={styles.avatar}>
                <CustomImage href="#" src="/avatar.jpg"/>
            </div>
            <p className="text-center text-white mt-2">
                {user.firstName} {user.lastName}
            </p>
            <ul className={styles.menu}>
                <li>
                    <Link href="/admin">
                        <a
                            className={
                                router.pathname == '/admin' ? styles.active : ''
                            }
                        >
                            <span className="fi fi-rr-dashboard"></span>
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/sura">
                        <a
                            className={
                                router.pathname == '/admin/sura' ||
                                router.pathname == '/admin/sura/add-new' ||
                                router.pathname == '/admin/sura/[id]'
                                    ? styles.active
                                    : ''
                            }
                        >
                            <span className="fi fi-rr-book"></span>
                            Manage Sura
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/dua">
                        <a
                            className={
                                router.pathname == '/admin/dua' ||
                                router.pathname == '/admin/dua/add-new' ||
                                router.pathname == '/admin/dua/[id]'
                                    ? styles.active
                                    : ''
                            }
                        >
                            <span className="fi fi-rr-book"/>
                            Manage Dua
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/api/auth/signout">
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                signOut();
                            }}
                        >
                            <span className="fi fi-rr-sign-out-alt"></span>
                            Logout
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
