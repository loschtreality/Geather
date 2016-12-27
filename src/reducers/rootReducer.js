import { combineReducers } from "redux";
import WeatherReducer from "./weatherReducer";


const RootReducer = combineReducers({
  weather: WeatherReducer
});

export default RootReducer;
