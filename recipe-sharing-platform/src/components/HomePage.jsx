import React from "react";
import { RecipeCard } from "./RecipeCard";

const HomePage = ({ recipes }) => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Our Recipes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
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
