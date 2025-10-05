// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs

import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import Navbar from "./components/Navbar";

import initialRecipesData from "./data.json"; // Import our initial mock data

function App() {
  // State to hold all recipes.
  // Initialize it by trying to load from localStorage,
  // otherwise use the initial data from data.json.
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : initialRecipesData;
  });

  // Effect to save recipes to localStorage whenever the 'recipes' state changes
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]); // This effect runs whenever the 'recipes' array changes

  // Function to add a new recipe
  const handleAddRecipe = (newRecipeData) => {
    // Generate a unique ID for the new recipe
    const newRecipeWithId = { ...newRecipeData, id: uuidv4() };
    setRecipes((prevRecipes) => [...prevRecipes, newRecipeWithId]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            {/* Pass the current recipes state to HomePage */}
            <Route path="/" element={<HomePage recipes={recipes} />} />
            {/* RecipeDetail needs to find the recipe from the current 'recipes' state */}
            <Route
              path="/recipe/:id"
              element={<RecipeDetail recipes={recipes} />}
            />
            {/* Pass the handleAddRecipe function to the AddRecipeForm */}
            <Route
              path="/add-recipe"
              element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
