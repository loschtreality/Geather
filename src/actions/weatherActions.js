import {
  RECEIVE_WEATHER,
  ERROR_WEATHER
 } from "./types"

import { fetchUserContent } from "../utils"

export const getWeather = () => {
    return (dispatch) => {
        fetchUserContent("weather").then(result => {
          const weatherData = result.main
          dispatch(fetchWeatherSuccess(weatherData))
        })
        .catch(err => {
          console.error("Error in getWeather action", err)
          dispatch(fetchWeatherFail(`${err.name}: ${err.message}`))
        })
    }
}

export const fetchWeatherSuccess = (weatherData) => {
  return {
    type: RECEIVE_WEATHER,
    payload: weatherData
  }
}

export const fetchWeatherFail = (errorMessage) => {
  return {
    type: ERROR_WEATHER,
    payload: errorMessage
  }
}
