import React from "react";
import Moment from "moment";
import Styled from "styled-components";
import { $COLOR_SECONDARY_1_3 } from "../FoundationStyles";
import ReactDatePicker from "react-datepicker";

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

interface AddTaskComponentProps {
  deadline: Date;
  taskName: string;
}
const AddTaskComponent = (props: AddTaskComponentProps) => {
  const date = props.deadline;
  const taskNameId = "taskNameId";
  const deadlineId = "deadlineId";
  return (
    <Container>
      <TaskNameBox>
        <label htmlFor={taskNameId}>task name</label>
        <TextBox
          id={taskNameId}
          type="text"
          value={props.taskName}
          onChange={() => {
            /*ここは後で*/
          }}
        />
      </TaskNameBox>
      <DeadlineBox>
        <label htmlFor={deadlineId}>dead line</label>
        <ReactDatePicker
          selected={date}
          showTimeSelect={true}
          dateFormat="yyyy-MM-dd HH:MM"
          onChange={() => {
            /*ここは後で*/
          }}
        />
      </DeadlineBox>
      <AddButton onClick={() => {}}>+</AddButton>
    </Container>
  );
};

export default AddTaskComponent;
