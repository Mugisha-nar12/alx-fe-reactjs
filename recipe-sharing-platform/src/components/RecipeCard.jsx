import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }) => {
  return (
    <>
      <Link to={`/recipe/${recipe.id}`} className="block">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {recipe.title}
            </h3>
            <p className="text-gray-600 text-sm">{recipe.summary}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
