import React from 'react';
import {useSelector} from 'react-redux';

import PhotoBanner from './photoBanner';
import CityFinder from './cityFinder';
import WeatherDisplay from './weatherDisplay';
import WeatherForecast from './weatherForecast';

import '../../css/weatherChecker.css';



function WeatherChecker() {
    const isDataPresent = useSelector(state => state.isDataPresent);
    if (!isDataPresent) {
        return (
            <>
            <PhotoBanner />
            <div className="weather-app-container">
                <CityFinder />
            </div>
            </>
        );
    }

    return (
        <>
        <PhotoBanner />
        <div className="weather-app-container">
            <CityFinder />
            <div className='widgets-wrapper'>
                <WeatherDisplay />
                <WeatherForecast />
            </div>
        </div>
        </>
    );
}

export default WeatherChecker;