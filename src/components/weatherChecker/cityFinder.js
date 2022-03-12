import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { dataLoaded, updateLocation, updateCurrent, updateForcast } from '../../actions';
import { selectCity } from '../../actions';
import cities from 'cities.json';
import APIKEY from '../../resources/APIkey.json';


function CityFinder() {
    const dispatch = useDispatch();
  
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
    }
    
    const handleOnHover = (result) => {
        // the item hovered
    }
    
    const handleOnSelect = (city) => {
        // the item selected
        dispatch(selectCity(city));
        const APIUrl = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY.weather_api_key}&q=${city.lat},${city.lng}&days=3&aqi=yes&alerts=yes`;
         
        console.log(APIUrl);

        // Fetch weather data
        axios.get(APIUrl)
        .then((response) => {
            dispatch(updateLocation(response.data.location));
            dispatch(updateCurrent(response.data.current));
            dispatch(updateForcast(response.data.forecast));
            dispatch(dataLoaded());
        }).catch((error) => {
            console.log(error);
        });
    }
    
    const handleOnFocus = () => {
    }

    const formatResult = (city) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{city.name}, {city.country}</span>
          </>
        );
    }

    return (
        <div className="city-finder">
                <ReactSearchAutocomplete
                    items={cities}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                    placeholder={"Which city you feeling today?"}
                />
      </div>
    );
}
  
export default CityFinder;