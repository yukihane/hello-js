import { TodoActionTypes } from "../actions";

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoState = TodoItem[];

const todos = (state: TodoState = [], action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
