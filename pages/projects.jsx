import styles from "@/styles/projects.module.css";
import Link from "next/link";

const projects = () => {
    return <div className={styles.projects}>
        <h1>Projects</h1>
        <h2><Link href="https://github.com/AnishRoy10/CSC207-Time-Management-Project" 
        target="_blank" rel="noopener noreferrer">Time Management App</Link>
        </h2>
        <p>We all struggle to manage time. That’s why we created a time management software that can 
            keep track of any tasks you need to do or any upcoming events. We also added a competitive 
            aspect to the project to try to encourage people to get their tasks done. </p> 

        <h2><Link href="https://github.com/AnishRoy10/personal-website" 
        target="_blank" rel="noopener noreferrer">Personal Website</Link>
        </h2>
        <p>Hey look, you’re already looking at this project right now. I made this website so that 
            I can learn to use Next.js as well as webdev elements like html and css. I also 
            wanted a place where I could display my portfolio to anyone that wants to see it.</p> 
        
    </div>;
};

export default projects;