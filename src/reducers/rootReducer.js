import { combineReducers } from "redux";
import WeatherReducer from "./weatherReducer";


const RootReducer = combineReducers({
  WeatherReducer
});

export default RootReducer;
