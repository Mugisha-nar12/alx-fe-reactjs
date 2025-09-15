import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import './Form.css';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, updateRecipe } = useRecipeStore();
  const recipeToEdit = recipes.find(r => r.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [servings, setServings] = useState('');

  useEffect(() => {
    if (recipeToEdit) {
      setTitle(recipeToEdit.title);
      setIngredients(recipeToEdit.ingredients.join(', '));
      setInstructions(recipeToEdit.instructions);
      setCookingTime(recipeToEdit.cookingTime);
      setServings(recipeToEdit.servings);
    }
  }, [recipeToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = {
      id: parseInt(id),
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      cookingTime,
      servings,
      isFavorite: recipeToEdit.isFavorite 
    };
    updateRecipe(updatedRecipe);
    navigate(`/recipe/${id}`);
  };

  if (!recipeToEdit) {
    return <div>Recipe not found!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      
      <label>Ingredients (comma separated)</label>
      <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      
      <label>Instructions</label>
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      
      <label>Cooking Time (in minutes)</label>
      <input type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} required />
      
      <label>Servings</label>
      <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} required />
      
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
