import {
  RECEIVE_GIF,
  ERROR_GIF
 } from "./types"


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

// Gif API methods

const fetchContentData = (url, options = {}) => {
  return fetch(url, options)
  .then(checkStatus)
  .then(getJSON)
}

// Gif Dispatching and Actions

export const getGif = (url, params = {}) => {
    return (dispatch) => {
        fetchContentData(url, params)
        .then(result => {
          const gifURL = result.data[0].images.fixed_height.url
          dispatch(fetchGifSuccess(gifURL))
        })
        .catch(err => dispatch(fetchGifFail(`${err.name}: ${err.message}`)))
    }
}

export const fetchGifSuccess = (gifURL) => {
  return {
    type: RECEIVE_GIF,
    payload: gifURL
  }
}

export const fetchGifFail = (errorMessage) => {
  return {
    type: ERROR_GIF,
    payload: errorMessage
  }
}
