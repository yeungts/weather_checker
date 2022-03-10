import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import CityFinder from './cityFinder';
import WeatherDisplay from './weatherDisplay';
import WeatherForecast from './weatherForecast';

import '../../css/weatherChecker.css';



function WeatherChecker() {
    const dispatch = useDispatch();
    
    const isDataPresent = useSelector(state => state.isDataPresent);
    if (!isDataPresent) {
        return (
            <div className="weather-app-container">
                <CityFinder />
            </div>
        );
    }

    return (
        <div className="weather-app-container">
            <CityFinder />
            <div className='widgets-wrapper'>
                <WeatherDisplay />
                <WeatherForecast />
            </div>
        </div>
    );
}

export default WeatherChecker;