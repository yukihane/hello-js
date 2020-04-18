import Redux from "redux";

import {
  CHANGE_USER_NAME,
  IChangeUserNameAction,
} from "../actions/UserNameEvents";
import UserState, { initUser } from "../states/UserState";

export const UserReducer: Redux.Reducer<UserState, IChangeUserNameAction> = (
  state: UserState = initUser,
  action: IChangeUserNameAction
) => {
  switch (action.type) {
    case CHANGE_USER_NAME:
      return { ...state, name: action.name };
  }
  return state;
};
