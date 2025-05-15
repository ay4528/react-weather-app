import { WeatherApiResponse } from '../types';

type WeatherListProps = {
    data: WeatherApiResponse;
}

export const WeatherList = ({ data }: WeatherListProps) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    return (
        <div className="card">
            <div className="inbox city">
                <p className="head">City Name</p>
                <p className="title">{data.name}</p>
            </div>
            <div className="inbox condition">
                <p className="head">Weather Condition</p>
                <p className="title">{data.weather[0].main}</p>
            </div>
            <div className="inbox detail">
                <div className="item">
                    <p className="head">Date</p>
                    <p className="title">{year}-{month}-{date}</p>
                </div>
                <div className="item">
                    <p className="head">Temprature</p>
                    <p className="title">{Math.round(data.main.temp)}℃</p>
                </div>
                <div className="item">
                    <p className="head">Humidity</p>
                    <p className="title">{data.main.humidity}%</p>
                </div>
            </div>
            <div className="icon">
                <img src={`${process.env.REACT_APP_ICON_URL}/${data.weather[0].icon}.png`} alt="天気図" />
            </div>
        </div>
    )
}