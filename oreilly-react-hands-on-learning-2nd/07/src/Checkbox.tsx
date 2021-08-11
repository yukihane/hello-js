import { useReducer } from "react";

export const Checkbox = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" checked={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
};
