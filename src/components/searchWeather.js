import { useState, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import styles from '../css/searchWeather.module.css';

export const SearchWeather = () => {
    const [place, setPlace] = useState('');
    const [lat, setLat] = useState('34.6937249');
    const [lng, setLng] = useState('135.5022535');
    const [name, setName] = useState('大阪市');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GEOCODING_API,
    });

    function changePlace(e) {
        setPlace(e.target.value);
    }

    function searchPlace() {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ 'address': place }, function (results, status) {
            if (status === 'OK') {
                // console.log(results);
                const location = results[0];
                setLat(location.geometry.location.lat());
                setLng(location.geometry.location.lng());
                setName(location.address_components[0].long_name);
            }
        });
    }

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res => res.json()).then(result => {
            setData(result);
            setLoading(false);
            // console.log(result);
        });
    }, [lat, lng]);

    if (loading) {
        return (<div></div>)
    }

    return isLoaded ? (
        <div className={styles.search}>
            <div className={styles.form}>
                <input type="text" placeholder="例) 大阪" onChange={changePlace} />
                <input type="button" value="検索" onClick={searchPlace} />
            </div>

            <div className={styles.result}>
                <p className={styles.title}>{name}付近の現在の天気</p>
                <div className={styles.top}>
                    <div className={styles.icon}>
                        <img src={`${process.env.REACT_APP_ICON_URL}/${data.weather[0].icon}.png`} />
                    </div>
                    <p className={styles.text}>{Math.round(data.main.temp)}℃</p>
                </div>
                <div className={styles.list}>
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
            </div>
        </div>
    ) : <div></div>
}