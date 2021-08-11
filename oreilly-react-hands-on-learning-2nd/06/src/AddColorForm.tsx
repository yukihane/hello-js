import { FormEventHandler } from "react";
import { useColors } from "./ColorProvider";
import { useInput } from "./hooks";

export const AddColorForm = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};
