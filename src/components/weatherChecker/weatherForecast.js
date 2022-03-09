import React from 'react';
import { useSelector } from 'react-redux';

function WeatherForecast() {
    const forecastWeather = useSelector(state => state.forecastWeather);

    const forecastWeatherJSX = []

    let day = (date) => {
        let days = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'];
        return days[new Date(date.split(' ')[0]).getDay()];
    } 

    if (forecastWeather.forecastday.length != 0) {
        let isFirstItem = true;
        forecastWeather.forecastday.forEach(item => {
            forecastWeatherJSX.push(
                <div className='forecast-bar'>
                    <div className='day-condition forecast-bar-item'>
                        { isFirstItem ? <div>Today</div> : <div>{day(item.date)}</div> }
                        <div className='forecast-condition-icon'><img src={ item.day.condition.icon } height='32px' /></div>
                    </div>
                    <div className='low-high forecast-bar-item'>
                        <div>{ item.day.mintemp_c }&deg;</div>
                        <div>{ item.day.maxtemp_c }&deg;</div>
                    </div>
                </div>
            );
            isFirstItem = false;
        });
    }

    return (
        <div className='weather-forecast widget'>
            <div className='forecast-title'>Today and Next 2 Days</div>
            { forecastWeatherJSX }
        </div>
    );
}

export default WeatherForecast;