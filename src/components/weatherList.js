import styles from '../css/weatherList.module.css';

export const WeatherList = ({ data }) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    return (
        <div className={styles.card}>
            <div className={styles.cityBox}>
                <p className={styles.head}>City Name</p>
                <p className={styles.title}>{data.name}</p>
            </div>
            <div className={styles.conditionBox}>
                <p className={styles.head}>Weather Condition</p>
                <p className={styles.title}>{data.weather[0].main}</p>
            </div>
            <div className={styles.flex}>
                <div>
                    <p className={styles.head}>Date</p>
                    <p className={styles.title}>{year}-{month}-{date}</p>
                </div>
                <div>
                    <p className={styles.head}>Temprature</p>
                    <p className={styles.title}>{Math.round(data.main.temp)}℃</p>
                </div>
                <div>
                    <p className={styles.head}>Humidity</p>
                    <p className={styles.title}>{data.main.humidity}%</p>
                </div>
            </div>
            <div className={styles.icon}>
                <img src={`${process.env.REACT_APP_ICON_URL}/${data.weather[0].icon}.png`} />
            </div>
        </div>
    )
}