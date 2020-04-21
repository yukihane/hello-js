import { v4 as UUID } from "uuid";

export interface TaskItem {
  /** 完了フラグ */
  complete: boolean;
  /** 期限 */
  deadline: Date;
  /** タスクを一意に判断するID (UUID) */
  id: string;
  /** タスクの名前 */
  taskName: string;
}

export interface TaskState {
  tasks: TaskItem[];
}

export const initTaskState: TaskState = {
  tasks: [],
};

export interface UserInput {
  taskName: string;
  deadline: Date;
}

export const createTask = (taskName: string, deadline: Date): TaskItem => ({
  complete: false,
  deadline,
  id: UUID(),
  taskName,
});
