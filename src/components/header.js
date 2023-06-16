// import { Link } from "react-router-dom";
import styles from "../css/header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                天気アプリ
            </h1>
        </header>
    );
};