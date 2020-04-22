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
import Loading from "./loading/LoadingContainer";

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
    props.loadTasks();
  });

  return (
    <>
      <Header>TODO</Header>
      <MainContainer>
        <AddTask />
        <TaskList />
      </MainContainer>
      <Loading />
    </>
  );
};

export default AppComponent;
