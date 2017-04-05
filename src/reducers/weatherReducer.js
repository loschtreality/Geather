import {
  RECEIVE_WEATHER,
  ERROR_WEATHER
} from "../actions/types"

const INIT_STATE = {
  currentWeather: {},
  cities: [],
  weatherError: ""
}

const WeatherReducer = (state = INIT_STATE, action) => {
  Object.freeze(state)
  // option to use Object.assign({}, state, { payload })
  switch (action.type) {
    case RECEIVE_WEATHER:
      return { ...state, currentWeather: action.payload[0], cities: action.payload }
    case ERROR_WEATHER:
      return { ...state, weatherError: action.payload }
    default:
      return state
  }
}

export default WeatherReducer
