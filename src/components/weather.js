import { WeatherData } from "./weatherData";
import styles from '../css/weather.module.css'

export const Weather = () => {

    const cities = [
        {
            cityName: 'Osaka'
        },
        {
            cityName: 'Tokyo'
        },
        {
            cityName: 'Nagoya'
        },
        {
            cityName: 'Fukuoka'
        },
    ]

    return (
        <div className={styles.grid}>
            {cities.map((city, index) => (
                <WeatherData key={index} cityName={city.cityName} />
            ))}
        </div>
    )
}