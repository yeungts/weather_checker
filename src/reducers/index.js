import { combineReducers } from 'redux';
import cityReducer from './city';
import { isDataPresentReducer, locationReducer, currentReducer, forecastReducer, currentHourReducer} from './weather';

const allReducers = combineReducers({
    city: cityReducer,
    isDataPresent: isDataPresentReducer,
    returnedLocation: locationReducer,
    currentWeather: currentReducer,
    forecastWeather: forecastReducer,
    currentHour: currentHourReducer
})

export default allReducers;