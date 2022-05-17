import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./auth/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  auth: authReducer,
});


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancer);

