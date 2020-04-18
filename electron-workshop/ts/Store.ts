import { combineReducers, createStore } from "redux";
import { UserReducer } from "./reducers/UserReducer";
import UserState from "./states/UserState";

const rootReducer = combineReducers({
  user: UserReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;

export default store;
