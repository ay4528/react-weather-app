import { useState, useEffect } from "react";
import { WeatherList } from "./WeatherList";
import { WeatherApiResponse } from "../types";

type WeatherDataProps = {
    cityName: string;
}

export const WeatherData = ({ cityName }: WeatherDataProps) => {

    const [data, setData] = useState<WeatherApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then((result: WeatherApiResponse) => {
            setData(result);
            console.log(result);
            setLoading(false);
        });
    }, [cityName]);

    if (loading || !data) {
        return <div></div>;
    }

    return (
        <WeatherList data={data} />
    )
};