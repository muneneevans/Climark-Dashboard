import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import all reducers
import authReudcer from "./Authentication/reducers";
import weatherReducer from "./Weather/reducers";

const persistConfig = {
  key: "root",
  blacklist: ["auth", "orders", "outlet"],
  storage
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    weather: weatherReducer,
    auth: authReudcer
  })
);

export default rootReducer;
