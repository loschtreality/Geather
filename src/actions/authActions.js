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
    // AsyncStorage returns a promise, refactor after working solution
    return AsyncStorage.setItem("geather_data", JSON.stringify(userData)).then((resp) => {
        console.log(resp, "Response from setting")
    }, (error) => console.log("reject from storage", error))
    .catch(err => console.log(`There was a huge error with setting token ${err}`))
    // debugger
}

const getCredentials = () => {
  // AsyncStorage returns a promise, refactor after working solution
  return AsyncStorage.getItem("geather_data").then((token) => {
    console.log(token, "TOKEN FROM STORAGE")
    return JSON.parse(token)
  }, (error) => {
    console.log(`There was an rejection retrieving the token ${error}`)
  }).catch(err => console.log(err)).done()
}

export const createUser = (credentials) => {
    // refactor actions to handle error dispatching better
    return (dispatch) => {
      dispatch({ type: LOGIN_USER })

      postSession(credentials, "http://localhost:3000/v1/users")
      .then(user => {
        loginUserSuccess(dispatch, user)
        setCredentials(user)
      })
      .catch(() => loginUserFail(dispatch))
    }
}

export const loginUser = (credentials) => {
 return (dispatch) => {
   dispatch({ type: LOGIN_USER })

   postSession(credentials)
     .then(userData => {
       setCredentials(userData)
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
  getCredentials().then(credentials => {
    return (dispatch) => {
      if (credentials) {
        postSession(credentials, "http://localhost:3000/v1/sessions")
        .then(user => {
          dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: user // <-- this will come from rails
          })
          Actions.main()
        })
      } else {
        dispatch({
          type: null
        })
      }
    }
  })
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
