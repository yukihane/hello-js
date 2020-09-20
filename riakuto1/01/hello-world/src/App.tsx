import React from "react";
import "./App.css";

import CharacterList, { Character } from "./CharacterList";

const App = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: " 羽 咲 綾 乃 ",
      age: 16,
      height: 151,
    },
    {
      id: 2,
      name: " 荒 垣 な ぎ さ ",
      age: 18,
      height: 174,
    },
    {
      id: 3,
      name: " 泉 理 子 ",
      age: 18,
    },
  ];

  return (
    <div className="container">
      <header>
        <h1> は ね バ ド ! キ ャ ラ ク タ ー 一 覧 </h1>
      </header>
      <CharacterList school=" 北 小 町 高 校 " characters={characters} />
    </div>
  );
};

export default App;
