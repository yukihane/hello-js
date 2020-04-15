import React from "react";
import Todo from "./Todo";
import { ReducedProps } from "../containers/VisibleTodoList";

interface TodoListProps extends ReducedProps {}

const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
