const WeatherReducer = (state = {}, action) => {
  Object.freeze(state);
  // option to use Object.assign({}, state, { payload })
  switch (action.type) {
    case "receive_weather":
      return { ...state, action: action.payload };
    default:
      return state;
  }
};

export default WeatherReducer;
