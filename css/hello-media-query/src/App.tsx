import { css } from "@emotion/react";

const wrapper = css`
  margin: 0 auto;

  @media (min-width: 641px) {
    max-width: 593px;
    background-color: red;
  }

  @media (min-width: 1025px) {
    max-width: 945px;
  }

  @media (min-width: 1281px) {
    max-width: 1024px;
    background-color: silver;
  }
`;

export const App = () => {
  return <div css={wrapper}>Hello</div>;
};

export default App;
