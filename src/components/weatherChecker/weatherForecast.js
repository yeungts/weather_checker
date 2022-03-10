import React from 'react';
import { useSelector } from 'react-redux';

function WeatherForecast() {
    const forecastWeather = useSelector(state => state.forecastWeather);
    const currentHour = useSelector(state => state.currentHour);

    const forecastWeatherJSX = [];
    
    const hourForecastJSX = [];

    let day = (date) => {
        let days = ['Mon','Tue','Wed','Thu','Fri','Sat', 'Sun'];
        return days[new Date(date.split(' ')[0]).getDay()];
    } 

    let rawHour = (date) => {
        return parseInt(date.split(' ')[1].split(':')[0]);
    }

    let hourFormatted = (date) => {
        let hour = parseInt(date.split(' ')[1].split(':')[0]);
        if (hour == 0 ) {
            return 12 + "AM";
        } else if (hour > 12) {
            return hour - 12 + "PM";
        } else if (hour == 12) {
            return hour + "PM";
        } else {
            return hour + "AM";
        }
    }

    if (forecastWeather.forecastday.length != 0) {
        let isFirstItem = true;
        let foundFirstHour = false;
        let hourForecastCounter = 0;

        // loop through each day to display it's highs and lows
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
            // loop through each hour of a day to provide hourly forecast for the next 24 hours
            if (hourForecastCounter <= 24) {
                item.hour.forEach(hourItem => {
                    if (foundFirstHour && hourForecastCounter <= 24) {
                        hourForecastJSX.push(
                            <div className='hour-widget'>
                                <div>{hourFormatted(hourItem.time)}</div>
                                <div><img src={hourItem.condition.icon} height='32px' /></div>
                                <div>{hourItem.temp_c}&deg;</div>
                            </div>
                        );
                        hourForecastCounter++;
                    } else {
                        // only provide special format for current hour on the current day
                        if (isFirstItem && rawHour(hourItem.time) == currentHour) {
                            foundFirstHour = true;
                            hourForecastJSX.push(
                                <div className='hour-widget'>
                                    <div>Now</div>
                                    <div><img src={hourItem.condition.icon} height='32px' /></div>
                                    <div>{hourItem.temp_c}&deg;</div>
                                </div>
                            );
                            hourForecastCounter++;
                        }
                    }
                });
            }
            isFirstItem = false;
        });
        }

    return (
        <div className='weather-forecast widget'>
            <div className='forecast-title'>Today and Next 2 Days</div>
            { forecastWeatherJSX }
            <div className='hour-forcast'>
                {hourForecastJSX}
            </div>
        </div>
    );
}

export default WeatherForecast;