import React from "react";

import "./style.css";

interface RecipeItemProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const RecipeItem: React.FC<RecipeItemProps> = ({
  idMeal,
  strMeal,
  strMealThumb,
}) => {
  console.log(idMeal, strMeal, strMealThumb);
  return (
    <div className="container-meal" key={idMeal}>
      <img className="image-meal" src={strMealThumb} alt={strMeal} />
      <span className="title-meal">{strMeal}</span>
    </div>
  );
};
