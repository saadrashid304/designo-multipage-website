import { combineReducers } from "redux";
import serviceReducer from "./ServiceReducer";

const rootReducer = combineReducers({
  service: serviceReducer,
});

export default rootReducer;
