import { combineReducers } from "redux"
import WeatherReducer from "./weatherReducer"
import GifReducer from "./gifReducer"
import SceneReducer from "./sceneReducer"

const RootReducer = combineReducers({
  weather: WeatherReducer,
  gif: GifReducer,
  routes: SceneReducer
})

export default RootReducer
