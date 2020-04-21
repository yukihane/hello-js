import Moment from "moment";
import React from "react";
import Styled from "styled-components";
import { TaskItem } from "../types";
import {
  $COLOR_SECONDARY_1_3,
  $COLOR_SECONDARY_2_0,
} from "../FoundationStyles";

const Task = Styled.div<{ expiration: boolean }>`
align-items: center;
background-color: ${(p) => (p.expiration ? "inherit" : $COLOR_SECONDARY_2_0)};
border-radius: 5px;
cursor: pointer;
border: 1px solid rgb(200,200,200);
display: flex;
flex-direction: row;
margin-bottom: 1em;
padding: 10px;
transition-duration: .2s;
transition-property: all;
&:hover {
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 5px rgba(200,200,200,4);
}
`;

const TaskCheckBox = Styled.div`
    align-items: center;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    height: 2em;
    width: 2em;
`;

const TaskCheck = Styled.p`
    color: ${$COLOR_SECONDARY_1_3};
    font-size: 150%;
`;

const TaskBody = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    height: 3em;
    justify-content: space-around;
`;

const TaskRemove = Styled.div`
    flex-grow: 0;
    flex-shrink: 0;
`;

const TaskName = Styled.div`
    font-size: 120%;
`;

const Deadline = Styled.div`
`;

interface TaskRowProps extends TaskItem {
  toggleCompleted: (id: string) => void;
  removeTask: (id: string) => void;
}

const TaskRow = (props: TaskRowProps) => {
  const it: TaskItem = props;
  const deadlineString = Moment(it.deadline).format("YYYY-MM-DD hh:mm");

  return (
    <Task
      expiration={new Date() < it.deadline || it.complete}
      onClick={() => props.toggleCompleted(it.id)}
    >
      <TaskCheckBox>
        <TaskCheck>{it.complete ? "✔" : null}</TaskCheck>
      </TaskCheckBox>
      <TaskBody>
        <TaskName>{it.taskName}</TaskName>
        <Deadline>⏰{deadlineString}</Deadline>
      </TaskBody>
      <TaskRemove onClick={() => props.removeTask(it.id)}>❌</TaskRemove>
    </Task>
  );
};

export default TaskRow;
