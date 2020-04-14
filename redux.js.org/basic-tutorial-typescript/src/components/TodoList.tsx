import React from "react";
import Todo from "./Todo";

interface TodoState {
  id: number;
  completed: boolean;
  text: string;
}

interface TodoListProps {
  todos: TodoState[];
  onTodoClick: (index: number) => {};
}

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

export default TodoList;
