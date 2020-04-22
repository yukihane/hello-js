import { Action, Dispatch } from "redux";
import { TaskItem } from "./types";
import { loadTask } from "./utils/taskFileIF";

export enum TaskActionType {
  FINISH_TASKS_LOADING,
  ADD_TASK,
  TOGGLE_COMPLETE_TASK,
  DELETE_TASK,
}

export interface FinishTasksLoadingAction
  extends Action<typeof TaskActionType.FINISH_TASKS_LOADING> {
  tasks: TaskItem[];
}

export const finishTasksLoading = (
  tasks: TaskItem[]
): FinishTasksLoadingAction => {
  return {
    type: TaskActionType.FINISH_TASKS_LOADING,
    tasks,
  };
};

export interface AddTaskAction extends Action<typeof TaskActionType.ADD_TASK> {
  deadline: Date;
  taskName: string;
}

export const addTask = (taskName: string, deadline: Date): AddTaskAction => ({
  type: TaskActionType.ADD_TASK,
  taskName,
  deadline,
});

type EditTaskActionType =
  | TaskActionType.TOGGLE_COMPLETE_TASK
  | TaskActionType.DELETE_TASK;

export interface EditTaskAction extends Action<EditTaskActionType> {
  taskId: string;
}

export const toggleCompleteTask = (taskId: string): EditTaskAction => ({
  type: TaskActionType.TOGGLE_COMPLETE_TASK,
  taskId,
});

export const deleteTask = (taskId: string): EditTaskAction => ({
  type: TaskActionType.DELETE_TASK,
  taskId,
});

export type TaskAction =
  | FinishTasksLoadingAction
  | AddTaskAction
  | EditTaskAction;

/** タスクロード開始のアクションタイプ */
export const TOGGLE_SHOW_SPINNER = "TOGGLE_SHOW_SPINNER";

export interface ToggleShowSpinnerAction
  extends Action<typeof TOGGLE_SHOW_SPINNER> {}

export const startTasksLoading = (
  dispatch: Dispatch
): ToggleShowSpinnerAction => {
  let tasks: TaskItem[] = [];

  loadTask().then((jsonData) => {
    tasks = jsonData.data as TaskItem[];
    dispatch(finishTasksLoading(tasks));

    dispatch<ToggleShowSpinnerAction>({ type: TOGGLE_SHOW_SPINNER });
  });

  return { type: TOGGLE_SHOW_SPINNER };
};
