import React from "react";
import ReactDOM from "react-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import "./styles.css";

interface IFormInputs {
  multipleErrorInput: string;
}

export default function App() {
  const { register, errors, handleSubmit } = useForm<IFormInputs>({
    criteriaMode: "all",
  });

  const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ErrorMessage</h1>
      <input
        name="multipleErrorInput"
        ref={register({
          required: "This input is required.",
          pattern: {
            value: /^\d+$/,
            message: "This input is number only.",
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength.",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
