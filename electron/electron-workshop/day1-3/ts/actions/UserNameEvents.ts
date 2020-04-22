import Redux from "redux";
import { v4 as UUID } from "uuid";

export const CHANGE_USER_NAME = UUID();

export interface IChangeUserNameAction extends Redux.Action {
  name: string;
}

export const createChangeUserNameAction: Redux.ActionCreator<IChangeUserNameAction> = (
  name: string
) => {
  return {
    name,
    type: CHANGE_USER_NAME,
  };
};
