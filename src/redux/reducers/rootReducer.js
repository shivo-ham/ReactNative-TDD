import { combineReducers } from "redux";
import homeReducer from "./home";
const rootReducer = combineReducers({
  homeReducer: homeReducer
});
export default rootReducer;
