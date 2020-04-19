import { Action } from "redux";
import { TaskItem } from "./types";

export enum ActionType {
  SHOW_TASKS,
  ADD_TASK,
  TOGGLE_COMPLETE_TASK,
  DELETE_TASK,
}

export interface ShowTasksAction extends Action<typeof ActionType.SHOW_TASKS> {
  tasks: TaskItem[];
}

export const showTasks = (tasks: TaskItem[]): ShowTasksAction => ({
  type: ActionType.SHOW_TASKS,
  tasks,
});

export interface AddTaskAction extends Action<typeof ActionType.ADD_TASK> {
  deadline: Date;
  taskName: string;
}

export const addTask = (taskName: string, deadline: Date): AddTaskAction => ({
  type: ActionType.ADD_TASK,
  taskName,
  deadline,
});

type EditTaskActionType =
  | ActionType.TOGGLE_COMPLETE_TASK
  | ActionType.DELETE_TASK;

export interface EditTaskAction extends Action<EditTaskActionType> {
  taskId: string;
}

export const toggleCompleteTask = (taskId: string): EditTaskAction => ({
  type: ActionType.TOGGLE_COMPLETE_TASK,
  taskId,
});

export const deleteTask = (taskId: string): EditTaskAction => ({
  type: ActionType.DELETE_TASK,
  taskId,
});

export type TaskAction = ShowTasksAction | AddTaskAction | EditTaskAction;
