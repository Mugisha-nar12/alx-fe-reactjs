// src/components/AddRecipeForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid'; // REMOVE THIS LINE - App.js will handle ID generation

const AddRecipeForm = ({ onAddRecipe }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (!image.trim()) newErrors.image = "Image URL is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const newRecipeData = {
      // Renamed to newRecipeData as ID is added in App.js
      title,
      summary,
      image,
      ingredients: ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      steps: steps
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    onAddRecipe(newRecipeData); // Pass the new recipe data up to App.js
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10 mt-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Add New Recipe
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="summary"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Summary
          </label>
          <textarea
            id="summary"
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
          {errors.summary && (
            <p className="text-red-500 text-xs mt-1">{errors.summary}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g.,&#10;2 cups flour&#10;1 cup sugar&#10;..."
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Steps (one step per line)
          </label>
          <textarea
            id="steps"
            rows="8"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="e.g.,&#10;1. Preheat oven to 350°F.&#10;2. Mix dry ingredients.&#10;..."
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-xs mt-1">{errors.steps}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
