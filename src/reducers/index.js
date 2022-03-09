import { combineReducers } from 'redux';
import cityReducer from './city';
import { isDataPresentReducer, locationReducer, currentReducer, forecastReducer} from './weather';

const allReducers = combineReducers({
    city: cityReducer,
    isDataPresent: isDataPresentReducer,
    returnedLocation: locationReducer,
    currentWeather: currentReducer,
    forecastWeather: forecastReducer
})

export default allReducers;