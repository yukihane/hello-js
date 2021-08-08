import { StarRating } from "./StarRating";

export const Color = ({
  title,
  color,
  rating,
}: {
  title: string;
  color: string;
  rating: number;
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} />
    </section>
  );
};
