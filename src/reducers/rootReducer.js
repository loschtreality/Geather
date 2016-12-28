import { combineReducers } from "redux"
import WeatherReducer from "./weatherReducer"
import GifReducer from "./gifReducer"

const RootReducer = combineReducers({
  weather: WeatherReducer,
  gif: GifReducer
})

export default RootReducer
