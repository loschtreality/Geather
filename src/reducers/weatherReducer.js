import {
  RECEIVE_WEATHER,
  ERROR_WEATHER,
  ADD_CITY,
  REMOVE_CITY
} from "../actions/types"

type State = {
  currentWeather: Object,
  cities: Array<Object>,
  weatherError: string
}

const INIT_STATE = {
  currentWeather: {},
  cities: [],
  weatherError: ""
}

const WeatherReducer = (state = INIT_STATE, action): State => {
  Object.freeze(state)
  // option to use Object.assign({}, state, { payload })
  switch (action.type) {
    case RECEIVE_WEATHER:
      return { ...state, currentWeather: action.payload[0], cities: action.payload }
    case ADD_CITY:
      return { ...state, cities: [...state.cities, action.payload] }
    case REMOVE_CITY:
      return filterCity(state, action.payload)
    case ERROR_WEATHER:
      return { ...state, weatherError: action.payload }
    default:
      return state
  }
}

const filterCity = (state: State, payload: Object): State => {
  const updatedCities = state.cities.filter((city) => {
    return city.city !== payload.city
  })

  return { ...state, cities: updatedCities }
}

export default WeatherReducer
