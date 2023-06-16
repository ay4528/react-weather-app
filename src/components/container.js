import styles from '../css/container.module.css';

export const Container = ({ children }) => {
    return (
        <div className={styles.default}>{children}</div>
    )
};