import Link from "next/link";

const NavBar = () => {
    return <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
    </nav>;
};

export default NavBar;