import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeItem } from "../RecipeItem";

import "./style.css";

interface RecipesProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export const Recipes = () => {
  const { categoryId } = useParams();
  const [recipes, setRecipes] = useState<RecipesProps[]>([]);

  useEffect(() => {
    const fetchFoodsbyCategories = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`
        );
        setRecipes(response.data?.meals);
      } catch (error) {
        console.log("Erro ao buscar dados na api", error);
      }
    };

    fetchFoodsbyCategories();
  }, [categoryId]);

  return (
    <div className="recipes">
      <h1 className="title">{categoryId}</h1>
      <div className="content">
        {recipes?.map((recipe) => (
          <RecipeItem
            key={recipe.idMeal}
            idMeal={recipe.idMeal}
            strMeal={recipe.strMeal}
            strMealThumb={recipe.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};
