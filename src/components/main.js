// import { Link } from "react-router-dom";
import styles from "../css/main.module.css";

export const Main = ({ children }) => {
    return (
        <main className={styles.main}>{children}</main>
    );
};