/* @flow */
import { ActionConst } from "react-native-router-flux"

const initState = { scene: {} }

const SceneReducer = (state = initState, action = {}) => {
    // Safeguard to make sure previous state is not altered
    Object.freeze(state)

  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return { ...state, scene: action.scene }
    case ActionConst.PUSH:
      return { ...state, scene: action.scene }
    default:
      return state
  }
}


export default SceneReducer
