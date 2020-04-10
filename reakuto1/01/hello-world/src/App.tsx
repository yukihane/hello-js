import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const logoAttrs = {
    alt: "logo",
    className: "App-logo",
    src: logo,
  };
  const title = " こ ん に ち は React";
  const targets = ["World", "Kanae", "Yukina"];

  return (
    <div className="App">
      <header className="App-header">
        {
          // コ メ ン ト は こ う 書 く
        }
        <img {...logoAttrs} />
        {title && <p>{title}</p>}
        {targets.map((target) => (
          <p>Hello, {target}!</p>
        ))}
      </header>
    </div>
  );
};

export default App;
