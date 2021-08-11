import { FC, useEffect, useMemo } from "react";
import { useAnyKeyToRender } from "./UseEffectArray";

export const WordCount = ({ children = "" }) => {
  useAnyKeyToRender();

  const words = useMemo(() => {
    const words = children.split(" ");
    return words;
  }, [children]);

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
