import { useState } from "react";
import { Star } from "./Start";

export const StarRating = ({ style = {}, totalStarts = 5, ...props }) => {
  const [selectedStars, setSelectedStars] = useState(3);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
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
    </div>
  );
};
