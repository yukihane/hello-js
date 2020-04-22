import React from "react";
import Styled, { keyframes } from "styled-components";
import { $COLOR_PRIMARY_0, $COLOR_PRIMARY_1 } from "../FoundationStyles";
import { ReducedProps } from "./LoadingContainer";

const BG = Styled.div`
    background: #666;
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
`;

const RoundAnimate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const SpinnerBox = Styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;
const Spinner = Styled.div`
    animation: ${RoundAnimate} 1.1s infinite linear;
    border-bottom: 1.1em solid ${$COLOR_PRIMARY_1};
    border-left: 1.1em solid ${$COLOR_PRIMARY_0};
    border-radius: 50%;
    border-right: 1.1em solid ${$COLOR_PRIMARY_1};
    border-top: 1.1em solid ${$COLOR_PRIMARY_1};
    font-size: 10px;
    height: 10em;
    margin: 60px auto;
    position: relative;
    transform: translateZ(0);
    width: 10em;
    &:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }
`;

interface LoadingComponentProps extends ReducedProps {}

const LoadingComponent = (props: LoadingComponentProps) => {
  if (!props.shown) {
    return null;
  }
  return (
    <div>
      <BG />
      <SpinnerBox>
        <Spinner />
      </SpinnerBox>
    </div>
  );
};

export default LoadingComponent;
