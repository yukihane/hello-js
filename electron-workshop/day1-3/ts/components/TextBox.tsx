import React from "react";

interface IProps {
  label: string;
  type: "text" | "password";
  value: string;
  onChangeText: (value: string) => void;
}

const TextBox: React.FC<IProps> = (props) => {
  const label = !!props.label ? <label>{props.label}</label> : null;

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeText(e.target.value);
  };

  return (
    <span>
      {label}
      <input
        name="username"
        type={props.type}
        value={props.value}
        onChange={onChangeText}
      />
    </span>
  );
};

export default TextBox;
