import { combineReducers } from "redux"
import WeatherReducer from "./weatherReducer"
import GifReducer from "./gifReducer"
import SceneReducer from "./sceneReducer"
import AuthReducer from "./authReducer"
import ProfileReducer from "./profileReducer"

const RootReducer = combineReducers({
  routes: SceneReducer,
  auth: AuthReducer,
  gif: GifReducer,
  weather: WeatherReducer,
  profile: ProfileReducer
})

export default RootReducer
