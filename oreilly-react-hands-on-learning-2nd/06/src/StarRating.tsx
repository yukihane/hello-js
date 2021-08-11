import { Star } from "./Start";

export const StarRating = ({
  style = {},
  totalStarts = 5,
  selectedStars = 0,
  onRate = (f: number) => {},
}) => {
  return (
    <div style={{ padding: "5px", ...style }}>
      {[...Array(totalStarts)].map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStarts} stars
      </p>
    </div>
  );
};
