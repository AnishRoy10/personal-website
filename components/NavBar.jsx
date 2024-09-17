import Link from "next/link";
import styles from "../styles/navBar.module.css";

const NavBar = () => {
    return <nav className={styles.navBar}>
        <Link legacyBehavior href="/" passHref>
        <a className={styles.logoLink}>ANISH ROY</a>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
    </nav>;
};

export default NavBar;