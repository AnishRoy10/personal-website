import styles from "@/styles/projects.module.css";
import Link from "next/link";

const projects = () => {
    return <div className={styles.projects}>
        <h1>Projects</h1>
        <h2><Link href="https://github.com/AnishRoy10/CSC207-Time-Management-Project" 
        target="_blank" rel="noopener noreferrer">Time Management App</Link>
        </h2>
        <p>We all struggle to manage time. That's why we created a time management software that can 
            keep track of any tasks you need to do or any upcoming events. We also added a competitive 
            aspect to the project to try to encourage people to get their tasks done. </p> 
        
    </div>;
};

export default projects;