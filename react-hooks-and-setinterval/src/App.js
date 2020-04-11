import React, { useState } from "react";
import "./App.css";
import "./Counter";
import Counter from "./Counter";

const App = () => {
  const [delay, setDelay] = useState(1000);
  return (
    <>
      <Counter />
    </>
  );
};

export default App;
