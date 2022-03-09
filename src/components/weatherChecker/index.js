import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import CityFinder from './cityFinder';
import WeatherDisplay from './weatherDisplay';
import WeatherForecast from './weatherForecast';

import '../../css/weatherChecker.css';
import { dataLoaded, updateLocation, updateCurrent, updateForcast } from '../../actions';
import testJson from '../../resources/testData.json';



function WeatherChecker() {
    const dispatch = useDispatch();
    
    const isDataPresent = useSelector(state => state.isDataPresent);
    if (!isDataPresent) {
        return (
            <div className="weather-app-container">
                <CityFinder />
                <button onClick={() => {
                    dispatch(updateLocation(testJson.location));
                    dispatch(updateCurrent(testJson.current));
                    dispatch(updateForcast(testJson.forecast));
                    dispatch(dataLoaded());
                    }}>load template data</button>
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