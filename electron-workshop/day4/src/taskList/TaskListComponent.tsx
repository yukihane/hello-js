import React from "react";
import Styled from "styled-components";
import { TaskItem } from "../types";
import TaskRow from "./TaskrowContainer";

const TaskList = Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`;

interface TaskListComponentProps {
  tasks: TaskItem[];
}

const TaskListComponent = (props: TaskListComponentProps) => {
  const { tasks } = props;
  const taskListElems = tasks
    .sort((a, b) => {
      return a.deadline < b.deadline
        ? -1
        : a.deadline.getTime() === b.deadline.getTime()
        ? 0
        : 1;
    })
    .map((it) => {
      return <TaskRow key={it.id} {...it} />;
    });

  return <TaskList>{taskListElems}</TaskList>;
};

export default TaskListComponent;
