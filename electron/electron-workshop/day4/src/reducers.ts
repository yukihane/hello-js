import { combineReducers, Reducer } from "redux";
import {
  TaskState,
  createTask,
  initTaskState,
  SpinnerState,
  initSpinnerState,
} from "./types";
import {
  TaskActionType,
  TaskAction,
  ToggleShowSpinnerAction,
  TOGGLE_SHOW_SPINNER,
} from "./actions";

const task: Reducer<TaskState, TaskAction> = (
  state: TaskState | undefined,
  action: TaskAction
): TaskState => {
  let newState: TaskState;
  if (state) {
    newState = { ...state };
  } else {
    newState = { ...initTaskState };
  }

  switch (action.type) {
    case TaskActionType.ADD_TASK:
      const newTask = createTask(action.taskName, action.deadline);
      newState.tasks.push(newTask);
      return newState;
    case TaskActionType.FINISH_TASKS_LOADING:
      newState.tasks = [...action.tasks];
      return newState;
    case TaskActionType.TOGGLE_COMPLETE_TASK:
      const targetTask = newState.tasks.find((t) => t.id === action.taskId);
      if (!targetTask) {
        return state || initTaskState;
      }
      newState.tasks = [...newState.tasks];
      targetTask.complete = !targetTask.complete;
      return newState;
    case TaskActionType.DELETE_TASK:
      const deleteTarget = newState.tasks.find((t) => t.id === action.taskId);
      if (!deleteTarget) {
        return state || initTaskState;
      }
      newState.tasks = newState.tasks.filter((it) => it.id !== action.taskId);
      return newState;
    default:
      return state || initTaskState;
  }
};

export const toggleSpinner: Reducer<SpinnerState, ToggleShowSpinnerAction> = (
  state: SpinnerState | undefined,
  action
) => {
  switch (action.type) {
    case TOGGLE_SHOW_SPINNER:
      return { ...state, shownLoading: !state?.shownLoading };
    default:
      return state || initSpinnerState;
  }
};

const rootReducer = combineReducers({
  task,
  toggleSpinner,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
