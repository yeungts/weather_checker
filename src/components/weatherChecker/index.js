import React from 'react';

import CityFinder from './cityFinder';
import WeatherDisplay from './weatherDisplay';

import '../../css/weatherChecker.css'


function WeatherChecker() {

    return (
        <div className="weather-app-container">
            <CityFinder />
            <div className='information-widgets'>
                <WeatherDisplay />
            </div>
        </div>
    );
}

export default WeatherChecker;