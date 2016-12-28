import {
  RECEIVE_GIF,
  ERROR_GIF
} from "../actions"


const INIT_STATE = {
  currentGif: null,
  gifError: ""
}

const newState = (state, property, payload) => {
  return Object.assign({}, state, { [property]: payload })
}

const GifReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_GIF:
      return newState(state, "currentGif", action.payload)
    case ERROR_GIF:
      return newState(state, "gifError", action.payload)
    default:
      return state
  }
}

export default GifReducer
