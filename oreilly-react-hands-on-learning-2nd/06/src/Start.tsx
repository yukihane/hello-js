import { FaStar } from "react-icons/fa";

export const Star = ({
  selected = false,
  onSelect = (f: React.MouseEvent<SVGElement, MouseEvent> | void) => f,
}) => <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
