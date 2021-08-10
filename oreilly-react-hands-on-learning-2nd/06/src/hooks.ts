import { ChangeEvent } from "react";
import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
};
