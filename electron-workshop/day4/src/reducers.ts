import { combineReducers, Reducer } from "redux";
import { TaskState, createTask, initTaskState } from "./types";
import { ActionType, TaskAction } from "./actions";

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
    case ActionType.ADD_TASK:
      const newTask = createTask(action.taskName, action.deadline);
      newState.tasks.push(newTask);
      return newState;
    case ActionType.SHOW_TASKS:
      newState.tasks = [...action.tasks];
      return newState;
    case ActionType.TOGGLE_COMPLETE_TASK:
      const targetTask = newState.tasks.find((t) => t.id === action.taskId);
      if (!targetTask) {
        return state || initTaskState;
      }
      newState.tasks = [...newState.tasks];
      targetTask.complete = !targetTask.complete;
      return newState;
    case ActionType.DELETE_TASK:
      const deleteTarget = newState.tasks.find((t) => t.id === action.taskId);
      if (!deleteTarget) {
        return state || initTaskState;
      }
      newState.tasks = newState.tasks.filter((it) => it.id !== action.taskId);
      return newState;
    default:
      return initTaskState;
  }
};

const rootReducer = combineReducers({
  task,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
