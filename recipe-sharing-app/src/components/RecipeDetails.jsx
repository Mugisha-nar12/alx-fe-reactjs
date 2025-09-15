import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import './RecipeDetails.css';
import DeleteRecipeButton from './DeleteRecipeButton';
import RecommendedRecipes from './RecommendedRecipes';

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    recipes,
    toggleFavorite,
    recommendations,
    getRecommendations,
    clearRecommendations,
    isRecommendationModalOpen,
    openRecommendationModal,
    closeRecommendationModal,
  } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  const handleGetRecommendations = () => {
    getRecommendations(recipe.id);
    openRecommendationModal();
  };

  const handleCloseRecommendations = () => {
    clearRecommendations();
    closeRecommendationModal();
  };

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h1>{recipe.title}</h1>
      <div className="recipe-detail-actions">
        <button onClick={() => toggleFavorite(recipe.id)}>
          {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <Link to={`/edit-recipe/${recipe.id}`} className="edit-link">Edit</Link>
        <DeleteRecipeButton recipeId={recipe.id} />
        <Link to="/" className="back-link">Back to Home</Link>
        <button onClick={handleGetRecommendations} className="recommendation-button">Get Recommendations</button>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      {isRecommendationModalOpen && (
        <RecommendedRecipes recommendations={recommendations} onClose={handleCloseRecommendations} />
      )}
    </div>
  );
};

export default RecipeDetails;