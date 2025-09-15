import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import './RecipeList.css';

const RecommendedRecipes = () => {
  const { recommendations, clearRecommendations } = useRecipeStore();

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="recipe-list-container">
      <h2>Recommended Recipes</h2>
      <button className="clear-button" onClick={clearRecommendations}>Clear Recommendations</button>
      <div className="recipe-list">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} />
              <div className="recipe-card-content">
                <h3>{recipe.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedRecipes;