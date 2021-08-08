import Ingredient from "./Ingredient";

export default function IngredientList({ list }) {
  return (
    <ul className="incredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}
