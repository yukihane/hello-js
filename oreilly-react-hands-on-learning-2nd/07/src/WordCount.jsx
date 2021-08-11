import { FC, useEffect } from "react";
import { useAnyKeyToRender } from "./UseEffectArray";

export const WordCount = ({ children = "" }) => {
  useAnyKeyToRender();

  const words = children.split(" ");

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
};
