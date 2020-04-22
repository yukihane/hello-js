import { Action } from "redux";
import { TaskItem } from "./types";

export enum TaskActionType {
  SHOW_TASKS,
  ADD_TASK,
  TOGGLE_COMPLETE_TASK,
  DELETE_TASK,
}

export interface ShowTasksAction
  extends Action<typeof TaskActionType.SHOW_TASKS> {
  tasks: TaskItem[];
}

export const showTasks = (tasks: TaskItem[]): ShowTasksAction => {
  return {
    type: TaskActionType.SHOW_TASKS,
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

export type TaskAction = ShowTasksAction | AddTaskAction | EditTaskAction;
