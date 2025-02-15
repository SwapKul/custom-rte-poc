import { combineReducers } from "redux";
import contentReducer from "./content/contentSlice";
import layoutReducer from "./layout/layoutSlice";

const rootReducer = combineReducers({
  content: contentReducer,
  layout: layoutReducer,
  // add other reducers here
});

export default rootReducer;
