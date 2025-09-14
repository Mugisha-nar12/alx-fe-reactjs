import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/RecipeStore';

import './Form.css';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
    };
    addRecipe(newRecipe);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      
      <label>Ingredients (comma separated)</label>
      <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      
      <label>Instructions</label>
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
