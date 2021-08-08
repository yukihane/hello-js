import { Color } from "./Color";
import { ColorDataType } from "./App";

export const ColorList = ({ colors = [] }: { colors: ColorDataType[] }) => {
  if (!colors.length) {
    return <div>No Colors Listed.</div>;
  }
  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};
