import React from "react";

interface TodoProps {
  onClick: () => {};
  completed: boolean;
  text: string;
}

const Todo = ({ onClick, completed, text }: TodoProps) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

export default Todo;
