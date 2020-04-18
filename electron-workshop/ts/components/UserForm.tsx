import React from "react";
import { connect, MapStateToPropsParam } from "react-redux";
import UserState from "../states/UserState";
import { store, RootState } from "../Store";
import TextBox from "./TextBox";
import { createChangeUserNameAction } from "../actions/UserNameEvents";
import { $CombinedState } from "redux";

interface UserFormProps extends StateProps {}

const UserForm: React.FC<UserFormProps> = (props: UserFormProps) => {
  const onChangeText = (value: string) => {
    store.dispatch(createChangeUserNameAction(value));
  };

  return (
    <div>
      <p>
        <TextBox
          label="ユーザ名"
          type="text"
          value={props.name}
          onChangeText={onChangeText}
        />
      </p>
      <p>名前: {props.name}</p>
    </div>
  );
};

interface StateProps {
  name: string;
}

const mapStateToProps = (state: RootState): StateProps => {
  return { name: state.user.name };
};

export default connect(mapStateToProps)(UserForm);
