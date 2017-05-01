/* @flow */

import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
 } from "../actions/actionTypes"

 type AuthState = {
   error: string,
   user: User,
   loading: boolean
 }

// NOTE: User was null, may need to adjust other code to account for this
const INIT_STATE = { error: "", user: {}, loading: false }

const AuthReducer = (state: AuthState = INIT_STATE, action: Object /* Action */): AuthState => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: "" }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INIT_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication Failed.", loading: false }
    case LOGOUT_USER:
      return INIT_STATE
    default:
      return state
  }
}

export default AuthReducer
