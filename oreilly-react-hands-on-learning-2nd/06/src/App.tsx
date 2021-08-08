import React from "react";
import { StarRating } from "./StarRating";

const App = () => {
  return (
    <StarRating
      style={{ backgroundColor: "lightblude" }}
      onDoubleClick={() => alert("double click")}
    />
  );
};

export default App;
