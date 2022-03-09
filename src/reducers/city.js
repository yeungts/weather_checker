let defaultState = {
    country: "",
    name: "",
    lat: "",
    lng: ""
}

const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "SELECT_CITY":
        return state = action.payload;
      default:
        return state;
    }
};

export default cityReducer;