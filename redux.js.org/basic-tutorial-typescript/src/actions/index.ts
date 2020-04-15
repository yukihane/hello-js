export const ADD_TODO = "ADD_TODO";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  id: number;
  text: string;
}

let nextTodoId = 0;
export const addTodo = (text: string): AddTodoAction => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
}

export interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER;
  filter: VisibilityFilters;
}

export const setVisibilityFilter = (
  filter: VisibilityFilters
): SetVisibilityFilterAction => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const TOGGLE_TODO = "TOGGLE_TODO";

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  id,
});

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
