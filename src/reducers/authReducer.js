import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from "../actions/types"

const INIT_STATE = { error: "", user: null, loading: false }

const AuthReducer = (state = INIT_STATE, action) => {
  // debugger
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: "" }
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INIT_STATE, user: action.payload }
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication Failed.", loading: false }
    default:
      return state
  }
}

export default AuthReducer
