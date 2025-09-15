import React from 'react';
import useRecipeStore from './RecipeStore';

import { Link } from 'react-router-dom';
import './RecipeList.css';

const RecipeList = () => {
  const { recipes, searchTerm } = useRecipeStore();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-list">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h2>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
