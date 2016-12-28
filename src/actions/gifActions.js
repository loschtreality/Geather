import {
  RECEIVE_GIF,
  ERROR_GIF
 } from "./types"

 // import {
 //   fetchContentData
 // } from "../utils/index"


const fetchContentData = (url, options = {}) => {
   debugger
   return fetch(url, options).then((response) => response.json())
   .catch(err => { console.log(err) })
 }

export const getGif = (url, params = {}) => {
  debugger
  return (dispatch) => {
    return fetchContentData(url, params).then(
        (gifRespObj) => dispatch(fetchGifSuccess(gifRespObj.data[0].url)),
       (err) => dispatch(fetchGifFail(err))
     ).catch(err => dispatch(fetchGifFail(err)))
  }
}


export const fetchGifSuccess = (gifObj) => {
  return {
    type: RECEIVE_GIF,
    payload: gifObj
  }
}

export const fetchGifFail = (errorMessage) => {
  return {
    type: ERROR_GIF,
    payload: errorMessage
  }
}
