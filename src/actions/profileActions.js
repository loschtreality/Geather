import firebase from "firebase"

import {
  PATCH_PREFERENCE,
  REMOVE_CITY,
  ADD_CITY,
  RECEIVE_PREFERENCES
} from "./types"


// Weather preferences
export const fetchPreferences = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/preferences`)
    .on("value", (snapshot) => {
      dispatch(receivePreferencesSuccess(snapshot.val()))
    })
  }
}

export const postPreferences = (preferences) => {
  const { currentUser } = firebase.auth()

  firebase.database().ref(`/users/${currentUser.uid}/preferences`)
  .push({ preferences })
}


export const patchPreferences = (/* changes */) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/preferences`)
    // some patch method
    .then(() => dispatch(/* method with changes */))
  }
}

// City list
export const postCity = (city) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/preferences/cities`)
    .push(city)
    // may need to find firebase method for this
    .then(cityInfo => dispatch(postCitySuccess(cityInfo)))
  }
}

export const deleteCity = (city) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/preferences/cities`)
  }
}


// Dispatches
export const preferencePatchSuccess = (preferences) => {
  return {
    action: PATCH_PREFERENCE,
    payload: preferences
  }
}

export const receivePreferencesSuccess = (preferences) => {
  return {
    aciton: RECEIVE_PREFERENCES,
    payload: preferences
  }
}

export const postCitySuccess = (city) => {
  return {
    action: ADD_CITY,
    payload: city
  }
}

export const deleteCitySuccess = (city) => {
  return {
    action: REMOVE_CITY,
    payload: city
  }
}
