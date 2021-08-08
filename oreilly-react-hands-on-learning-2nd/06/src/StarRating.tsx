import { useState } from "react";
import { Star } from "./Start";

export const StarRating = ({ totalStarts = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStarts)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStarts} stars
      </p>
    </>
  );
};
