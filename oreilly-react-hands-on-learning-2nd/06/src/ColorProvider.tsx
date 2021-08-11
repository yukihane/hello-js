import React from "react";
import { FC } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { v4 } from "uuid";
import colorData from "./color-data.json";

export type ColorDataType = typeof colorData[0];

export type ColorContextType = {
  colors: ColorDataType[];
  addColor: (title: string, color: string) => void;
  removeColor: (id: string) => void;
  rateColor: (id: string, rating: number) => void;
};

const ColorContext = createContext<ColorContextType>({
  colors: [],
  addColor: (title, color) => {},
  removeColor: (id) => {},
  rateColor: (id, rating) => {},
});

export const useColors = () => useContext(ColorContext);

export const ColorProvider: FC = ({ children }) => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title: string, color: string) =>
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);

  const rateColor = (id: string, rating: number) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id: string) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
};
