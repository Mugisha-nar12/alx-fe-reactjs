import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
