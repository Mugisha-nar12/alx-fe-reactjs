import React from 'react';
import useRecipeStore from '../store/RecipeStore';
import { Link } from 'react-router-dom';
import './RecipeList.css';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  return (
    <div className="recipe-list">
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h2>
          </div>
        ))
      ) : (
        <p>You have no favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
