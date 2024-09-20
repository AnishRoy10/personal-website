import Button from "@/components/Button";
import styles from "@/styles/about.module.css";

const about = () => {
    return <div className={styles.about}>
        <h1> something </h1>
        <p>
            Hi, I'm Anish Roy, a computer science student at the University of Toronto.
            <br /> other stuff
        </p>
        <Button path = "/projects">Projects</Button>
    </div>;
};

export default about;