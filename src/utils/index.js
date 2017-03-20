import { Dimensions } from "react-native"
import { openWeatherConfig, giphyConfig } from "../../envVariables.js"

// Fetch function helpers
const checkStatus = (response) => {
  if (response.status === 200) {
    return Promise.resolve(response)
  }
  return Promise.reject(
      new Error(response.statusText))
}

const getJSON = (response) => {
  return response.json()
}

export const fetchContentData = (url, options = {}) => {
  return fetch(url, options)
  .then(checkStatus)
  .then(getJSON)
}

// URLs
export const giphyURL = `http://api.giphy.com/v1/gifs/random?api_key=${giphyConfig.apiKey}`
export const openWeatherURL = `http://api.openweathermap.org/data/2.5/weather?appid=${openWeatherConfig.apiKey}&units=imperial`


// Measurements
export const windowWidth = Dimensions.get("window").width
export const windowHeight = Dimensions.get("window").height
