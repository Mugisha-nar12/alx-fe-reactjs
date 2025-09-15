import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, deleteRecipe, toggleFavorite } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/');
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
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
