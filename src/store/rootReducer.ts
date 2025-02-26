import { combineReducers } from "redux";
import contentReducer from "./content/contentSlice";
import layoutReducer from "./layout/layoutSlice";
import rteReducer from "./rte/rteSlice";

const rootReducer = combineReducers({
  content: contentReducer,
  layout: layoutReducer,
  rte: rteReducer,
  // add other reducers here
});

export default rootReducer;
