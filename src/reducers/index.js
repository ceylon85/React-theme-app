import { combineReducers } from "redux";
import config from "./config_reducer";

const rootReduer = combineReducers({
  config,
});

export default rootReduer;
