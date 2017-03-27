import { AsyncStorage } from "react-native"
import { Actions } from "react-native-router-flux"

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from "./types"

import {
  postSession
} from "../utils"


const setCredentials = (userData) => {
  AsyncStorage.setItem("geather_data", JSON.stringify(userData))
    .catch(err => console.log(`There was a huge error with setting token ${err}`))
    .done()
}

export const createUser = (credentials) => {
    // refactor actions to handle error dispatching better
    return (dispatch) => {
      dispatch({ type: LOGIN_USER })

      postSession(credentials, "http://localhost:3000/v1/users")
      .then(user => {
        setCredentials(user)
        loginUserSuccess(dispatch, user)
      })
      .catch(() => loginUserFail(dispatch))
    }
}

export const loginUser = (credentials) => {
 return (dispatch) => {
   dispatch({ type: LOGIN_USER })

   postSession(credentials)
     .then(userData => {
       loginUserSuccess(dispatch, userData)
     })
     .catch((error) => {
       console.log("Error in loginUser", error)
     })
 }
}

// export const loginUserFacebook = (fbResponse) => {
//
// }

export const authStateChanged = () => {
  return async (dispatch) => {
    const userData = await AsyncStorage.getItem("geather_data")
    if (userData) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: JSON.parse(userData) })
      Actions.main()
    } else {
      dispatch({ type: null })
    }
  }
}

// export const logoutUser = () => {
  // TODO: Create Redux cycle + components for logging out
// }

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main()
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}
