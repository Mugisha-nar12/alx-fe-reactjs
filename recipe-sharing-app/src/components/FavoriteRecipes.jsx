import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';
import './RecipeList.css';

const FavoriteRecipes = () => {
  const { favorites } = useRecipeStore();

  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="recipe-list-container">
      <h2>Favorite Recipes</h2>
      <div className="recipe-list">
        {favorites.map((recipe) => (
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

export default FavoriteRecipes;