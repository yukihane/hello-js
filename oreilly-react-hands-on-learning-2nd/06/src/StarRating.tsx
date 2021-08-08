import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "grey"} />
);

export const StarRating = ({ totalStarts = 5 }) => {
  const [selectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStarts)].map((_, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStarts} stars
      </p>
    </>
  );
};
