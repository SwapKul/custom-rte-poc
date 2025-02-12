import { combineReducers } from "redux";
import contentReducer from "./content/contentSlice";

const rootReducer = combineReducers({
  content: contentReducer,
  // add other reducers here
});

export default rootReducer;
