import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, createLogger()))
);

export default store;
