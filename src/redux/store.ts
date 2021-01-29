import { applyMiddleware, combineReducers, createStore } from "redux";
import recordReducer from "./recorder";
import userEventsReducer from "./user-events";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
