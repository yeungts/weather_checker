import React from 'react';
import { updateWeather } from '../../actions';
import {useSelector, useDispatch} from 'react-redux';


function WeatherDisplay() {
    const dispatch = useDispatch();

    // Fetch city and weather information from store
    const city = useSelector(state => state.city);
    const weather = useSelector(state => state.weather);

    return (
        <div className="weather-display">
            <div>City: { city.name }, { weather.location.region }</div>
            <div>Country: { weather.location.country }</div>
            <div>Current Temp: { weather.current.temp_c }&deg;C / { weather.current.temp_f }&deg;F </div>
            
            
            <button onClick={() => dispatch(updateWeather({
                "location": {
                    "name": "Forest Hill",
                    "region": "Ontario",
                    "country": "Canada",
                    "lat": 43.7,
                    "lon": -79.42,
                    "tz_id": "America/Toronto",
                    "localtime_epoch": 1646791562,
                    "localtime": "2022-03-08 21:06"
                },
                "current": {
                    "last_updated_epoch": 1646787600,
                    "last_updated": "2022-03-08 20:00",
                    "temp_c": 0.0,
                    "temp_f": 32.0,
                    "is_day": 0,
                    "condition": {
                        "text": "Partly cloudy",
                        "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                        "code": 1003
                    },
                    "wind_mph": 12.5,
                    "wind_kph": 20.2,
                    "wind_degree": 230,
                    "wind_dir": "SW",
                    "pressure_mb": 1020.0,
                    "pressure_in": 30.12,
                    "precip_mm": 0.0,
                    "precip_in": 0.0,
                    "humidity": 64,
                    "cloud": 75,
                    "feelslike_c": -2.6,
                    "feelslike_f": 27.3,
                    "vis_km": 24.0,
                    "vis_miles": 14.0,
                    "uv": 1.0,
                    "gust_mph": 5.4,
                    "gust_kph": 8.6,
                    "air_quality": {
                        "co": 423.8999938964844,
                        "no2": 27.799999237060547,
                        "o3": 73.69999694824219,
                        "so2": 6.699999809265137,
                        "pm2_5": 4.0,
                        "pm10": 7.599999904632568,
                        "us-epa-index": 1,
                        "gb-defra-index": 1
                    }
                }
            }))}>load template data</button>
        </div>
    );
}

export default WeatherDisplay;