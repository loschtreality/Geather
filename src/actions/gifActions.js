import {
  RECEIVE_GIF,
  ERROR_GIF
 } from "./types"

import { fetchUserContent } from "../utils"

// Gif Dispatching and Actions

export const getGif = () => {
    return (dispatch) => {
        fetchUserContent("gif")
        .then(result => {
          const gifURL = result.data.fixed_height_downsampled_url
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
