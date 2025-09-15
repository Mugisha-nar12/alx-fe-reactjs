import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../components/recipeStore';
import RecipeDetails from '../components/RecipeDetails';
import './RecipeDetailPage.css';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return <RecipeDetails recipe={recipe} />;
};

export default RecipeDetailPage;
