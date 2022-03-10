import React from 'react';
import { updateCurrentHour } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

function WeatherDisplay() {
    const dispatch = useDispatch();

    // Fetch city and weather information from store
    const city = useSelector(state => state.city);
    const returnedLocation = useSelector(state => state.returnedLocation);
    const currentWeather = useSelector(state => state.currentWeather);

    document.getElementById("favicon").setAttribute("href", currentWeather.condition.icon);

    let day = () => {
        if (currentWeather != null) {
            let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
            return days[new Date(currentWeather.last_updated.split(' ')[0]).getDay()];
        } else {
            return "";
        }
    } 

    let hourFormatted = () => {
        if (currentWeather != null) {
            let hour = parseInt(currentWeather.last_updated.split(' ')[1].split(':')[0]);
            dispatch(updateCurrentHour(hour));
            if (hour == 0 ) {
                return 12 + " AM";
            } else if (hour > 12) {
                return hour - 12 + " PM";
            } else if (hour == 12) {
                return hour + " PM";
            } else {
                return hour + " AM";
            }
        } else {
            return "";
        }
    }

    return (
        <div className="current-weather widget">
            <div>
                <div className='location-text'>{ city.name }, { returnedLocation.region }</div>
                <div className='day-time'> { day() }, { hourFormatted() } </div>
            </div>
            <div className='condition-group'>
                <div className='condition-icon'><img src={ currentWeather.condition.icon } /></div>
                <div className='temperature'><span>{ currentWeather.temp_c }&deg;C</span></div>
                <div className='condition-text'><span>{ currentWeather.condition.text }</span></div>
            </div>
            <div className='weather-inner-widgets-wrapper'>
                <div className='feels-like weather-inner-widget'>
                    <div className='weather-inner-widget-title'>Feels like:</div> 
                    <div className='weather-inner-widght-content'>{ currentWeather.feelslike_c }&deg;C</div>
                </div>
                <div className='humidity weather-inner-widget'>
                    <div className='weather-inner-widget-title'>Humidity</div> 
                    <div className='weather-inner-widght-content'>{ currentWeather.humidity }%</div> 
                </div>
                <div className='visibility weather-inner-widget'>
                    <div className='weather-inner-widget-title'>Visibility</div> 
                    <div className='weather-inner-widght-content'>{ currentWeather.vis_km } km</div> 
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;