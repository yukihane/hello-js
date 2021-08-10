import React from "react";
import colorData from "./color-data.json";
import { ColorList } from "./ColorList";
import { useState } from "react";
import { AddColorForm } from "./AddColorForm";
import { v4 } from "uuid";

export type ColorDataType = typeof colorData[0];

const App = () => {
  const [colors, setColors] = useState(colorData);

  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ];
          setColors(newColors);
        }}
      />
      <ColorList colors={colors} />
    </>
  );
};

export default App;
