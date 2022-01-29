import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';
const NavBar = () => {
    const router = useRouter();

    return (
        <nav>
            <Link href={'/'}>
                <a
                    className={`${styles.link} ${
                        router.pathname === '/' ? styles.active : ''
                    }`}
                >
                    home
                </a>
            </Link>
            <Link href={'/about'}>
                <a
                    className={[
                        styles.link,
                        router.pathname === '/about' ? styles.active : '',
                    ].join(' ')}
                >
                    about
                </a>
            </Link>
        </nav>
    );
};

export default NavBar;
