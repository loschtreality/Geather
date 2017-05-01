/* @flow */

import { deleteCity, postCity } from "../utils"

import {
  // PATCH_PREFERENCE,
  // RECEIVE_PREFERENCES
  REMOVE_CITY,
  ADD_CITY,
} from "./actionTypes"

// Cities
export const addCity = (city: string) => {
  return (dispatch: Dispatch): void => {
    postCity(city).then((cityData) => {
      dispatch(postCitySuccess(cityData))
    })
  }
}

export const removeCity = (city: Object) => {
  return (dispatch: Dispatch): void => {
    deleteCity(city).then(() => {
      dispatch(deleteCitySuccess(city))
    })
  }
}

// Prefrences
// export const patchPreference = (options) => {}

// Dispatches
// const preferencePatchSuccess = (preferences) => {
//   return {
//     action: PATCH_PREFERENCE,
//     payload: preferences
//   }
// }
//
// const receivePreferencesSuccess = (preferences) => {
//   return {
//     aciton: RECEIVE_PREFERENCES,
//     payload: preferences
//   }
// }

const postCitySuccess = (city) => {
  return {
    type: ADD_CITY,
    payload: city
  }
}

const deleteCitySuccess = (city) => {
  return {
    type: REMOVE_CITY,
    payload: city
  }
}
