import { useRouter } from "next/router";
import styles from "../styles/button.module.css";

const Button = ({path, children = "click me"}) => {
    const router = useRouter();

    return <button className={styles.customButton} onClick={() => router.push(path)}>
        {children}
    </button>;
};

export default Button;