import React from 'react';
import useRecipeStore from '../store/RecipeStore';
import RecommendationsList from '../components/RecommendationsList';
import { Link } from 'react-router-dom';
import './RecommendationsPage.css';

const RecommendationsPage = () => {
  const { recipes, addRecommendation, recommendations } = useRecipeStore();

  // Filter out recipes that are already in the recommendations list
  const availableRecipes = recipes.filter(
    (recipe) => !recommendations.some((rec) => rec.id === recipe.id)
  );

  return (
    <div>
      <h1>Manage Recommendations</h1>
      <div className="recommendation-manager">
        <h2>Available Recipes</h2>
        <div className="available-recipes-list">
          {availableRecipes.length > 0 ? (
            availableRecipes.map((recipe) => (
              <div key={recipe.id} className="available-recipe-card">
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                <button onClick={() => addRecommendation(recipe)}>
                  Add to Recommendations
                </button>
              </div>
            ))
          ) : (
            <p>No other recipes available to recommend.</p>
          )}
        </div>
      </div>

      <hr />

      <h1>Your Recommended Recipes</h1>
      <RecommendationsList />
    </div>
  );
};

export default RecommendationsPage;
