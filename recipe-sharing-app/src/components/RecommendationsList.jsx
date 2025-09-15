import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import './RecipeList.css';

const RecommendationsList = () => {
  const { recommendations, removeRecommendation } = useRecipeStore();

  return (
    <div className="recipe-list">
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="recipe-card recommendation-card">
            <div className="recipe-card-header">
              <h2>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h2>
              {recipe.isFavorite && <span className="favorite-indicator">⭐</span>}
            </div>
            <button
              onClick={() => removeRecommendation(recipe.id)}
              className="remove-recommendation-btn"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>You haven't added any recommendations yet. Go to the "Manage Recommendations" section to add some!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
