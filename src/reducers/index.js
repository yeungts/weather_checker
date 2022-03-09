import { combineReducers } from 'redux';
import cityReducer from './city';
import weatherReducer from './weather';

const allReducers = combineReducers({
    city: cityReducer,
    weather: weatherReducer
})

export default allReducers;