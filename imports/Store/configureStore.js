import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"


import reducer from "./rootReducer";
const store = createStore(reducer,undefined , applyMiddleware(thunk, logger));

export default store;
