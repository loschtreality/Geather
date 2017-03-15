import { combineReducers } from "redux"
import WeatherReducer from "./weatherReducer"
import GifReducer from "./gifReducer"
import SceneReducer from "./sceneReducer"
import AuthReducer from "./authReducer"

const RootReducer = combineReducers({
  auth: AuthReducer,
  weather: WeatherReducer,
  gif: GifReducer,
  routes: SceneReducer
})

export default RootReducer
