import React, { useState } from "react";
import Moment from "moment";
import Styled from "styled-components";
import { $COLOR_SECONDARY_1_3 } from "../FoundationStyles";
import ReactDatePicker from "react-datepicker";
import { createTask, UserInput } from "../types";
import { ReducedProps } from "./AddTaskContainer";

const Container = Styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 1em 0;
    width: 100%;
`;

const TextBox = Styled.input`
    box-sizing: border-box;
    width: 100%;
`;

const TaskNameBox = Styled.p`
    flex-grow: 1;
`;

const DeadlineBox = Styled.div`
`;

const AddButton = Styled.button`
    background-color: ${$COLOR_SECONDARY_1_3};
    border-radius: 50%;
    color: white;
    display: block;
    font-size: 150%;
    height: 40px;
    padding: 0;
    width: 40px;
`;

interface AddTaskComponentProps extends ReducedProps {}

const AddTaskComponent = (props: AddTaskComponentProps) => {
  const [input, setInput] = useState<UserInput>({
    taskName: "",
    deadline: new Date(),
  });

  const addTask = () => {
    props.addTask(createTask(input.taskName, input.deadline));
  };

  const taskNameId = "taskNameId";
  const deadlineId = "deadlineId";
  return (
    <Container>
      <TaskNameBox>
        <label htmlFor={taskNameId}>task name</label>
        <TextBox
          id={taskNameId}
          type="text"
          value={input.taskName}
          onChange={(e) => {
            setInput({ ...input, taskName: e.target.value });
          }}
        />
      </TaskNameBox>
      <DeadlineBox>
        <label htmlFor={deadlineId}>dead line</label>
        <ReactDatePicker
          selected={input.deadline}
          showTimeSelect={true}
          dateFormat="yyyy-MM-dd HH:MM"
          onChange={(e) => {
            const deadline = !!e ? e : new Date();
            return { ...input, deadline };
          }}
        />
      </DeadlineBox>
      <AddButton onClick={(e) => addTask()}>+</AddButton>
    </Container>
  );
};

export default AddTaskComponent;
