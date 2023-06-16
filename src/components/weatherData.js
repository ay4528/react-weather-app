import { useState, useEffect } from "react";
import { WeatherList } from "./weatherList";

export const WeatherData = ({ cityName }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(result => {
            setData(result);
            console.log(result);
            setLoading(false);
        });
    }, [cityName]);

    if (loading) {
        return <div></div>;
    }

    return (
        <WeatherList data={data} />
    )
};