/* @flow */

import {
  RECEIVE_WEATHER,
  ERROR_WEATHER
 } from "./actionTypes"

import { fetchUserContent } from "../utils"

type WeatherSuccess = {
  type: string,
  payload: Weather
}

type WeatherFail = {
  type: string,
  payload: string
}

type Action = WeatherSuccess | WeatherFail

export const getWeather = () => {
    return (dispatch: Dispatch) => {
        fetchUserContent("weathers").then(result => {
          dispatch(fetchWeatherSuccess(result))
        })
        .catch(err => {
          console.error("Error in getWeather action", err)
          dispatch(fetchWeatherFail(`${err.name}: ${err.message}`))
        })
    }
}

export const fetchWeatherSuccess = (weatherData: Weather): Action => {
  return {
    type: RECEIVE_WEATHER,
    payload: weatherData
  }
}

export const fetchWeatherFail = (errorMessage: string): Action => {
  return {
    type: ERROR_WEATHER,
    payload: errorMessage
  }
}
