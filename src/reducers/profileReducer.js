import {
  PATCH_PREFERENCE,
  ADD_CITY,
  REMOVE_CITY
} from "../actions/types"

// hot: "love",
// warm: "like",
// chilly: "neutral",
// cold: "dislike",
// freezing: "despise"

const INIT_STATE = {
  cities: {},
  preferences: {
    hot: "",
    warm: "",
    chilly: "",
    cold: "",
    freezing: ""
  }
}

const ProfileReducer = (state = INIT_STATE, action) => {
  Object.freeze(state)

  switch (action.type) {
    case ADD_CITY:
      return Object.assign({}, state.cities, action.payload)

    case REMOVE_CITY:
      const newState = Object.assign({}, state)
      delete newState[action.payload]
      return newState

    case PATCH_PREFERENCE:
      return Object.assign({}, state.preferences, action.payload)

    default:
      return state
  }
}

export default ProfileReducer
