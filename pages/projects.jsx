import styles from "@/styles/projects.module.css";
import Link from "next/link";

const projects = () => {
    return <div className={styles.projects}>
        <h1>Projects</h1>
        <h2><Link href="https://github.com/AnishRoy10/CSC207-Time-Management-Project" 
        target="_blank" rel="noopener noreferrer">Time Management App</Link>
        </h2>
        <p>description</p> 
        
    </div>;
};

export default projects;