let defaultLocationState = {
    location: {
        name: "",
        region: "",
        country: "",
        lat: 43.7,
        lon: -79.42,
        tz_id: "",
        localtime_epoch: "",
        localtime: ""
    }
}

let defaultCurrentState = {
    last_updated_epoch: "",
    last_updated: "",
    temp_c: "",
    temp_f: "",
    is_day: "",
    condition: {
        text: "",
        icon: "",
        code: ""
    },
    wind_mph: "",
    wind_kph: "",
    wind_degree: "",
    wind_dir: "",
    pressure_mb: "",
    pressure_in: "",
    precip_mm: "",
    precip_in: "",
    humidity: "",
    cloud: "",
    feelslike_c: "",
    feelslike_f: "",
    vis_km: "",
    vis_miles: "",
    uv: "",
    gust_mph: "",
    gust_kph: "",
    air_quality: {
        co: "",
        no2: "",
        o3: "",
        so2: "",
        pm2_5: "",
        pm10: "",
        "us-epa-index": "",
        "gb-defra-index": ""
    }
}

let defaultForecastState = {
    forecastday: []
}

export const isDataPresentReducer = (state = false, action) => {
    switch (action.type) {
        case "DATA_LOADED":
            return state = true;
        default:
            return state;
    }
}

export const locationReducer = (state = defaultLocationState, action) => {
    switch (action.type) {
        case "UPDATE_LOCATION":
            return state = action.payload;
        default:
            return state;
    }
};

export const currentReducer = (state = defaultCurrentState, action) => {
    switch (action.type) {
        case "UPDATE_CURRENT":
            return state = action.payload;
        default:
            return state;
    }
};

export const forecastReducer = (state = defaultForecastState, action) => {
    switch (action.type) {
        case "UPDATE_FORECAST":
            return state = action.payload;
        default:
            return state;
    }
};