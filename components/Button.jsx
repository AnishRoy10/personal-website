import { useRouter } from "next/router";
import styles from "../styles/button.module.css";

const Button = ({path, children = "click me", newtab = false}) => {
    const router = useRouter();
    if (newtab == true) {
        return <button className={styles.customButton} onClick={() => window.open(path, '_blank')}>
        {children}
    </button>;
    };

    return <button className={styles.customButton} onClick={() => router.push(path)}>
        {children}
    </button>;
};

export default Button;