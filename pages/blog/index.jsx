import styles from "@/styles/blog.module.css";
import Link from "next/link";

const blog = () => {
    return <div className={styles.blog}>
        <h1> Blog </h1>
        <Link href="/blog/adjusting-to-university-my-first-year">
        Adjusting to University: My First Year</Link>
        <p>December 24, 2024</p>
    </div>
}

export default blog;