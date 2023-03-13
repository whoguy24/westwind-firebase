import { combineReducers } from "redux";
import testimonials from "./testimonials.reducer";
import horses from "./horses.reducer";

const rootReducer = combineReducers({
  testimonials,
  horses
});

export default rootReducer;