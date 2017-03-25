import {
  RECEIVE_WEATHER,
  ERROR_WEATHER
 } from "./types"

import { fetchContentData } from "../utils"

export const getWeather = (url, params = {}) => {
    return (dispatch) => {
        fetchContentData(url, params)
        .then(result => {
          const weatherData = result.main
          dispatch(fetchWeatherSuccess(weatherData))
        })
        .catch(err => {
          console.log(err, "THIS IS THE ERROR")
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
