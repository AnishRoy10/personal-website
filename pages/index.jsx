import Button from "@/components/Button";
import styles from "@/styles/home.module.css"
// continue at 51 min
const home = () => {
  return <div className={styles.home}>
    <h1>Hi, I'm Anish</h1>
    <p>description</p>
    <Button path="/about">About</Button>
  </div>;
};

export default home;
