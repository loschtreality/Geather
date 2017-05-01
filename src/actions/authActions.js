/* @flow */

import { AsyncStorage } from "react-native"
import { Actions } from "react-native-router-flux"
import { LoginManager } from "react-native-fbsdk"

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
 } from "./actionTypes"

import {
  postSession,
  postUser
} from "../utils"


const setCredentials = (userData: UserData): void => {
  AsyncStorage.setItem("geather_data", JSON.stringify(userData))
    .catch(err => console.log(`There was an error with setting token ${err}`))
    .done()
}

export const createUser = (credentials: Object) => {
    // refactor actions to handle error dispatching better
    return (dispatch: Dispatch): void => {
      dispatch({ type: LOGIN_USER })

      postUser(credentials)
      .then(userData => {
        setCredentials({
          email: userData.email,
          access_token: userData.access_token
        })
        loginUserSuccess(dispatch, userData)
      })
      .catch(() => loginUserFail(dispatch))
    }
}

// Routing logic for Facebook vs Email in Utils index
export const loginUser = (credentials: Object) => {
 return (dispatch: Dispatch): void => {
   dispatch({ type: LOGIN_USER })

   // Set routes in env vars for production / development
   postSession(credentials)
     .then(userData => {
       setCredentials({
         email: userData.email,
         access_token: userData.access_token
       })
       loginUserSuccess(dispatch, userData)
     })
     .catch((error) => {
       console.log("Error in loginUser", error)
     })
   }
 }

export const authStateChanged = () => {
  return async (dispatch: Dispatch) => {
    const userData = await AsyncStorage.getItem("geather_data")
    if (userData) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: JSON.parse(userData) })
      Actions.main()
    } else {
      dispatch({ type: null })
    }
  }
}

export const logoutUser = () => {
  return (dispatch: Dispatch): void => {
    AsyncStorage.removeItem("geather_data")
    LoginManager.logOut()
    dispatch({ type: LOGOUT_USER })
    Actions.auth()
  }
}

// TODO: Refactor not to pass dispatch method
const loginUserSuccess = (dispatch, user: Object): void => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.main()
}

// TODO: Refactor not to pass dispatch method
const loginUserFail = (dispatch): void => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}
