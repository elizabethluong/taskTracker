import { combineReducers, createStore } from "redux";
import recordReducer from "./recorder";
import userEventsReducer from "./user-events";

const rootReducer = combineReducers({
  userEvents: userEventsReducer,
  recorder: recordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
