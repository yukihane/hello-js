import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";
import { StarRating } from "./StarRating";

export const Color = ({
  id,
  title,
  color,
  rating,
}: {
  id: string;
  title: string;
  color: string;
  rating: number;
}) => {
  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
};
