import React, { useEffect } from "react";
import Styled from "styled-components";
import Moment from "moment";
import {
  $COLOR_PRIMARY_3,
  $COLOR_FOREGROUND_REVERSE,
} from "./FoundationStyles";
import TaskList from "./taskList/TaskListContainer";
import AddTask from "./addTask/AddTaskContainer";
import * as AppContainer from "./AppContainer";
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

  return (
    <>
      <Header>TODO</Header>
      <MainContainer>
        <AddTask />
        <TaskList />
      </MainContainer>
    </>
  );
};

export default AppComponent;
