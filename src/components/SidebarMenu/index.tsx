import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

interface CategoryProps {
  strCategory: string;
}

export const SideBarMenu = () => {
  const [categoriesMenu, setCategoriesMenu] = useState([]);

  useEffect(() => {
    const fetchMenuItens = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategoriesMenu(response.data?.categories);
      } catch (error) {
        console.log("Erro ao buscar dados na api", error);
      }
    };

    fetchMenuItens();
  }, []);
  return (
    <div className="sidebar">
      <span>Your Recipe</span>
      <ul>
        {categoriesMenu.map((category: CategoryProps) => (
          <li>
            <Link to={`/${category?.strCategory}`}>
              {category?.strCategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
