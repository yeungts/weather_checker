let defaultState = {
    location: {
        name: "",
        region: "",
        country: "",
        lat: 43.7,
        lon: -79.42,
        tz_id: "",
        localtime_epoch: "",
        localtime: ""
    },
    current: {
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
}

const weatherReducer = (state = defaultState, action) => {
      switch (action.type) {
        case "UPDATE_WEATHER":
          return state = action.payload;
        default:
          return state;
      }
  };
  
  export default weatherReducer;