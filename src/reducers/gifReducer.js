import {
  RECEIVE_GIF,
  ERROR_GIF
} from "../actions/types"


const INIT_STATE = {
  currentGif: "",
  gifError: ""
}


const GifReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_GIF:
      return { ...state, currentGif: action.payload }
    case ERROR_GIF:
      return { ...state, gifError: action.payload }
    default:
      return state
  }
}

export default GifReducer
