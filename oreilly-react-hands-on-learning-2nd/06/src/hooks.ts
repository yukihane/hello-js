import { ChangeEvent } from "react";
import { useState } from "react";

type RetVal = [
  {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  },
  () => void
];

export const useInput = (initialValue: string): RetVal => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
};
