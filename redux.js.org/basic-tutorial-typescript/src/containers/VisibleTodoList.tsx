import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import { RootState } from "../reducers";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";
import { TodoState, TodoItem } from "../reducers/todos";
import { VisibilityFilterState } from "../reducers/visibilityFilter";
import { Dispatch } from "redux";

const getVisibleTodos = (
  todos: TodoState,
  filter: VisibilityFilterState
): TodoItem[] => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

interface StateProps {
  todos: TodoItem[];
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

interface DispatchProps {
  toggleTodo: (id: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export interface ReducedProps extends StateProps, DispatchProps {}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
