import firebase from "firebase"
import { Actions } from "react-native-router-flux"

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from "./types"

//TODO: separate login and create account

export const loginUser = ({ email, password }) => {
 return (dispatch) => {
   dispatch({ type: LOGIN_USER })

   firebase.auth().signInWithEmailAndPassword(email, password)
     .then(user => {
       loginUserSuccess(dispatch, user)
      })
     .catch((error) => {
       console.log(error)

       firebase.auth().createUserWithEmailAndPassword(email, password)
         .then(user => loginUserSuccess(dispatch, user))
         .catch(() => loginUserFail(dispatch))
     })
 }
}

export const authStateChanged = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user
        })
        Actions.main()
      } else {
        dispatch({ type: LOGIN_USER_FAIL })
      }
    })
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
