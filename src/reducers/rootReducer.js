import { combineReducers } from "redux"
import WeatherReducer from "./weatherReducer"
import SceneReducer from "./sceneReducer"
import AuthReducer from "./authReducer"
import ProfileReducer from "./profileReducer"

const RootReducer = combineReducers({
  auth: AuthReducer,
  weather: WeatherReducer,
  profile: ProfileReducer,
  routes: SceneReducer
})

export default RootReducer
