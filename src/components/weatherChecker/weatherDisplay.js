import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function WeatherDisplay() {
    const city = useSelector(state => state.city);
    return (
        <div className="weather-display">
            <div>City: {city.name}</div>
            <div>Country: {city.country}</div>
        </div>
    );
}

export default WeatherDisplay;