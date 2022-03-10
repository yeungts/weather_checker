// dispatch actions
export const selectCity = (value) => {
    return {
        type: 'SELECT_CITY',
        payload: value
    }
}

export const dataLoaded = () => {
    return {
        type: 'DATA_LOADED'
    }
}

export const updateLocation = (value) => {
    return {
        type: 'UPDATE_LOCATION',
        payload: value
    }
}

export const updateCurrent = (value) => {
    return {
        type: 'UPDATE_CURRENT',
        payload: value
    }
}

export const updateForcast = (value) => {
    return {
        type: 'UPDATE_FORECAST',
        payload: value
    }
}

export const updateCurrentHour = (value) => {
    return {
        type: 'UPDATE_CURR_HOUR',
        payload: value
    }
}

// other actions