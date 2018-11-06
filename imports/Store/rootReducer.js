import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

//import all reducers
import authReudcer from "./Authentication/reducers";
import weatherReducer from "./Weather/reducers";
import feedbackReducer from "./Feedback/reducers"

const rootReducer = combineReducers({
  weather: weatherReducer,
  auth: authReudcer,
  feedback: feedbackReducer
});

export default rootReducer;
