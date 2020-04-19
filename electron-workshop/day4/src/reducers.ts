import { combineReducers, Reducer } from "redux";
import { TaskState, createTask } from "./types";
import {
  ActionType,
  TaskAction,
  addTask,
  showTasks,
  toggleCompleteTask,
  deleteTask,
} from "./actions";

const task: Reducer<TaskState, TaskAction> = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.ADD_TASK:
      const newTask = createTask(action.taskName, action.deadline);
      newState.tasks.push(newTask);
      return newState;
    case ActionType.SHOW_TASKS:
      newState.tasks = { ...action.tasks };
      break;
    case ActionType.TOGGLE_COMPLETE_TASK:
      const targetTask = state.tasks.find((t) => t.id === action.taskId);
      if (!targetTask) {
        return state;
      }
      targetTask.complete = !targetTask.complete;
      return newState;
    case ActionType.DELETE_TASK:
      const deleteTarget = state.tasks.find((t) => t.id === action.taskId);
      if (!deleteTarget) {
        return state;
      }
      state.tasks = state.tasks.filter((it) => it.id !== action.taskId);
      return newState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  task,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
