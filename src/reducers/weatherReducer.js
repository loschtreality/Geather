/* @flow */

import {
  RECEIVE_WEATHER,
  ERROR_WEATHER,
  ADD_CITY,
  REMOVE_CITY
} from "../actions/actionTypes"

type State = {
  currentWeather: Weather | Object,
  cities: Array<Weather>,
  weatherError: string
}

const INIT_STATE = {
  currentWeather: {},
  cities: [],
  weatherError: ""
}

// NOTE: Change action type to type which is imported from types.js
const WeatherReducer = (state: State = INIT_STATE, action: Object): State => {
  Object.freeze(state)
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
  const updatedCities: Array<Weather> = state.cities.filter((city) => {
    return city.city !== payload.city
  })

  return { ...state, cities: updatedCities }
}

export default WeatherReducer
