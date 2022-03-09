import React from 'react';

import CityFinder from './cityFinder';
import WeatherDisplay from './weatherDisplay';


function WeatherChecker() {

    return (
        <div className="WeatherChecker">
            <CityFinder />
            <WeatherDisplay />
        </div>
    );
}

export default WeatherChecker;