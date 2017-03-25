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


const setToken = (value) => {
  // AsyncStorage returns a promise, refactor after working solution
    return AsyncStorage.setItem("geather_token", value).then((resp) => {
      console.log(resp, "Response from setting")
    }, (error) => console.log("reject from storage", error))
    .catch(err => console.log(`There was a huge error with setting token ${err}`))
}

const getToken = () => {
  // AsyncStorage returns a promise, refactor after working solution
  return AsyncStorage.getItem("geather_token").then((token) => {
    console.log(token, "TOKEN FROM STORAGE")
    return token
  }, (error) => {
    console.log(`There was an error retrieving the token ${error}`)
  }).catch(err => console.log(err))
}

export const createUser = (credentials) => {
    // refactor actions to handle error dispatching better
    return (dispatch) => {
      dispatch({ type: LOGIN_USER })

      postSession(credentials, "localhost:3000/v1/users")
      .then(user => {
        loginUserSuccess(dispatch, user)
        setToken(user.acces_token)
      })
      .catch(() => loginUserFail(dispatch))
    }
}

export const loginUser = (credentials) => {
 return (dispatch) => {
   dispatch({ type: LOGIN_USER })

   postSession(/* credentials */)
     .then(user => {
       console.log(user, "USER FROM RESPONSE")
       loginUserSuccess(dispatch, user)
      })
     .catch((error) => {
       console.log(error)
     })
 }
}

export const loginUserFacebook = (fbResponse) => {

}

export const authStateChanged = () => {
  const token = getToken()
  // shoot request to rails
  if (token /* and rails logic */) {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user // <-- this will come from rails
    })
    Actions.main()
  } else {
    dispatch({ type: LOGIN_USER_FAIL })
  }

}

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
