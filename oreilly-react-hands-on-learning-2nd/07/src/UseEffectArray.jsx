import React, { useState, useEffect } from "react";

export const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

const words = ["xxx", "yyy"];

export function UseEffectArray() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return <h1>Open the console</h1>;
}
