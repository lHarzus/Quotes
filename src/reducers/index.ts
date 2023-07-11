import { combineReducers } from "redux";
import quotes from "./quotes";
import image from "./image";

export default combineReducers({
  quotes,
  image,
});
