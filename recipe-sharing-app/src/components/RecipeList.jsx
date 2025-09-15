import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import './RecipeList.css';

const RecipeList = () => {
  const { recipes, searchTerm, toggleFavorite, getRecommendations } = useRecipeStore();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-list">
      <h2>Menu List</h2>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h2>
            <div className="recipe-card-actions">
              <button onClick={() => toggleFavorite(recipe.id)}>
                {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
              <button onClick={() => getRecommendations(recipe.id)} className="recommendation-button">Get Recommendations</button>
            </div>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;