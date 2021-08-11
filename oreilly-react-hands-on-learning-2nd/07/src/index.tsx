import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Checkbox } from "./Checkbox";
import { MyApp } from "./MyApp";
import { UseEffectArray } from "./UseEffectArray";
import { WordCount } from "./WordCount";

ReactDOM.render(
  <React.StrictMode>
    <WordCount>You are not going to believe this but...</WordCount>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
