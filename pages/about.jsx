import Button from "@/components/Button";
import styles from "@/styles/about.module.css";
// import resume from "@/public/Anish_s_Resume.pdf";

const about = () => {
    return <div className={styles.about}>
        <h1> something </h1>
        <p>
            Hi, I'm Anish Roy, a computer science student at the University of Toronto.
            <br /> other stuff
        </p>
        <Button path = "Anish_s_Resume.pdf">Resume</Button>
        
        <Button path = "/projects">Projects</Button> 
    </div>;
};

export default about;