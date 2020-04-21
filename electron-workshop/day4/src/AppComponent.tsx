import React, { useEffect } from "react";
import Styled from "styled-components";
import Moment from "moment";
import {
  $COLOR_PRIMARY_3,
  $COLOR_FOREGROUND_REVERSE,
} from "./FoundationStyles";
import AddTask from "./addTask/AddTaskComponent";
import * as AppContainer from "./AppContainer";
import TaskRow from "./taskList/TaskrowContainer";
import { TaskItem } from "./types";

const MainContainer = Styled.div`
    margin: 10px auto 0 auto;
    max-width: 600px;
    min-width: 300px;
    width: 80%;
`;

const Header = Styled.h1`
    background-color: ${$COLOR_PRIMARY_3};
    color: ${$COLOR_FOREGROUND_REVERSE};
    font-size: 160%;
    padding: 1em;
    text-align: center;
`;

const TaskList = Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`;

interface AppComponentProps extends AppContainer.ReducedProps {}
const AppComponent = (props: AppComponentProps) => {
  useEffect(() => {
    const dummyTasks: TaskItem[] = [
      {
        complete: false,
        deadline: Moment().add(1, "day").toDate(),
        id: "0",
        taskName: "task01",
      },
      {
        complete: true,
        deadline: Moment().add(1, "day").toDate(),
        id: "1",
        taskName: "task02",
      },
      {
        complete: false,
        deadline: Moment().add(-1, "day").toDate(),
        id: "2",
        taskName: "task03",
      },
      {
        complete: true,
        deadline: Moment().add(-1, "day").toDate(),
        id: "3",
        taskName: "task04",
      },
    ];
    props.showTasks(dummyTasks);
  });

  const { tasks } = props;
  console.log("tasks: " + Array.isArray(tasks));
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

  return (
    <>
      <Header>TODO</Header>
      <MainContainer>
        <AddTask deadline={new Date()} taskName={"ダミー"} key="1" />
        <TaskList>{taskListElems}</TaskList>
      </MainContainer>
    </>
  );
};

export default AppComponent;
