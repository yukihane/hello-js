import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";
// import "./App.css";

const AppStyle = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  & code {
    color: #aaeeff;
  }
`;
const AppLink = styled.a`
  color: #61dafb;
  &:hover {
    color: #00ffff;
  }
`;
const AppLogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
`;

function App() {
  return (
    <AppStyle>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppStyle>
  );
}

export default App;
