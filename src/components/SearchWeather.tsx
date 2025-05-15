import { useState, useEffect, ChangeEvent } from "react";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import { WeatherApiResponse } from "../types";

export const SearchWeather = () => {
    const [place, setPlace] = useState<string>('');
    const [lat, setLat] = useState<number>(34.6937249);
    const [lng, setLng] = useState<number>(135.5022535);
    const [name, setName] = useState<string>('大阪市');

    const [data, setData] = useState<WeatherApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const mapStyle: React.CSSProperties = {
        height: "100%",
        width: "100%",
    };

    const position = {
        lat: lat,
        lng: lng
    };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GEOCODING_API as string,
    });

    function changePlace(e: ChangeEvent<HTMLInputElement>) {
        setPlace(e.target.value);
    }

    function searchPlace() {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'address': place }, function (results, status) {
            if (status === 'OK' && results && results[0]) {
                const location = results[0];
                setLat(location.geometry.location.lat());
                setLng(location.geometry.location.lng());
                setName(location.address_components[0].long_name);
            }
        });
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then((result: WeatherApiResponse) => {
            setData(result);
            setLoading(false);
        });
    }, [lat, lng]);

    if (loading || !data) {
        return (<div></div>)
    }

    return isLoaded ? (
        <div className="search_box">
            <div className="form">
                <input className="text" type="text" placeholder="例) 大阪" onChange={changePlace} />
                <input className="btn" type="button" value="検索" onClick={searchPlace} />
            </div>

            <div className="result">
                <div className="inner">
                    <div className="list">
                        <div className="head_box">
                            <p className="title">{name}付近の現在の天気</p>
                            <div className="temp">
                                <div className="icon">
                                    <img src={`${process.env.REACT_APP_ICON_URL}/${data.weather[0].icon}.png`} alt="天気図"/>
                                </div>
                                <p className="text">{Math.round(data.main.temp)}℃</p>
                            </div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>体感温度</th>
                                    <td>{Math.round(data.main.feels_like)}℃</td>
                                    <th>最高気温</th>
                                    <td>{Math.round(data.main.temp_max)}℃</td>
                                </tr>
                                <tr>
                                    <th>最低気温</th>
                                    <td>{Math.round(data.main.temp_min)}℃</td>
                                    <th>湿度</th>
                                    <td>{data.main.humidity}%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="map">
                        <GoogleMap center={{ lat: lat, lng: lng }} zoom={12} mapContainerStyle={mapStyle}>
                            <MarkerF position={position} />
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    ) : <div></div>
}