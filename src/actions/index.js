import axios from "axios"

// dispatch actions
export const selectCity = (value) => {
    return {
        type: 'SELECT_CITY',
        payload: value
    }
}

export const updateWeather = (value) => {
    return {
        type: 'UPDATE_WEATHER',
        payload: value
    }
}

// other actions