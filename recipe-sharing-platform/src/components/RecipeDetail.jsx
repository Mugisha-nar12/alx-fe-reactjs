// src/components/RecipeDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// No longer importing initialRecipes from data.json directly here

// RecipeDetail now receives 'recipes' as a prop from App.js
const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe from the 'recipes' prop
    const foundRecipe = recipes.find((r) => r.id === id);
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      // If recipe not found (e.g., invalid ID), redirect to home
      navigate("/");
    }
  }, [id, recipes, navigate]); // Re-run effect if ID, recipes array, or navigate function changes

  if (!recipe) {
    return (
      <div className="text-center text-gray-600 text-lg mt-8">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10 mt-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Back to Recipes
      </button>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
      <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover rounded-lg mb-8 shadow-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ingredients Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
