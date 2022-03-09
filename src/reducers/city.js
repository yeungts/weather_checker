const cityReducer = (state = {}, action) => {
    switch (action.type) {
      case "SELECT_CITY":
        return state = action.payload;
      default:
        return state;
    }
};

export default cityReducer;