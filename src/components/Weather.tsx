import { WeatherData } from "./WeatherData";
import { SearchWeather } from "./SearchWeather";

type City = {
    cityName: string;
}

export const Weather = () => {
    const cities: City[] = [
        { cityName: 'Osaka' },
        { cityName: 'Tokyo' },
        { cityName: 'Nagoya' },
        { cityName: 'Fukuoka' },
    ];

    return (
        <div>
            <SearchWeather />

            <div className="weather_list">
                {cities.map((city, index) => (
                    <WeatherData key={index} cityName={city.cityName} />
                ))}
            </div>
        </div>
    )
}