import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RecipeCard } from "./RecipeCard";
// eslint-disable-next-line no-unused-vars
import recipesData from "../data.json";

// Styling for hover, rounded, and shadow effects are in RecipeCard.jsx

const HomePage = ({ recipes: recipesFromProps }) => {
  const [recipes, setRecipes] = useState(recipesFromProps);

  useEffect(() => {
    setRecipes(recipesFromProps);
  }, [recipesFromProps]);

  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Our Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
              <RecipeCard recipe={recipe} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg">
            No recipes found. Add one!
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
