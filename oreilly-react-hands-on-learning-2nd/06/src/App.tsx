import React from "react";
import colorData from "./color-data.json";
import { ColorList } from "./ColorList";
import { useState } from "react";

export type ColorDataType = typeof colorData[0];

const App = () => {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
};

export default App;
