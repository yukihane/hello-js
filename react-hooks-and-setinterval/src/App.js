import React, { useState } from "react";
import "./App.css";
import "./Counter";
import Counter from "./Counter";

const App = () => {
  const [delay, setDelay] = useState(1000);
  return (
    <>
      <Counter delay={delay} />
      <input value={delay} onChange={(e) => setDelay(e.target.value)}></input>
    </>
  );
};

export default App;
