import React from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { selectCity, updateWeather } from '../../actions';
import cities from 'cities.json';


function CityFinder() {
    const dispatch = useDispatch();
  
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
    }
    
    const handleOnHover = (result) => {
        // the item hovered
        console.log(result);
    }
    
    const handleOnSelect = (city) => {
        // the item selected
        dispatch(selectCity(city));
        const APIUrl = `http://api.weatherapi.com/v1/current.json?key=&q=${city.lat},${city.lng}&aqi=yes`;
        
        // Fetch weather data
        // axios.get(APIUrl)
        // .then((response) => {
        //     dispatch(updateWeather(response.data));
        // })
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
            <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                    items={cities}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                />
            </div>
      </div>
    );
}
  
export default CityFinder;