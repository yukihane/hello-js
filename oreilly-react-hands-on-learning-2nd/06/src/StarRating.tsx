import { FaStar } from "react-icons/fa";
export const StarRating = ({ totalStarts = 5 }) => {
  return [...Array(totalStarts)].map((_, i) => <Star key={i} />);
};

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);
