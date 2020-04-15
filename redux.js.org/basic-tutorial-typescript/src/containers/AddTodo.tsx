import React from "react";
import { connect, DispatchProp } from "react-redux";
import { addTodo } from "../actions";

// https://react-redux.js.org/api/connect#example-usage
// "Inject just dispatch and don't listen to store" のパターン
const AddTodo = ({ dispatch }: DispatchProp) => {
  let input: HTMLInputElement | null;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input?.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
