import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import RecipeDetails from './components/RecipeDetails';
import EditRecipePage from './pages/EditRecipePage';
import FavoritesPage from './pages/FavoritesPage';
import RecommendationsPage from './pages/RecommendationsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'recipe/:id', element: <RecipeDetails /> },
      { path: 'add-recipe', element: <AddRecipePage /> },
      { path: 'edit-recipe/:id', element: <EditRecipePage /> },
      { path: 'favorites', element: <FavoritesPage /> },
      { path: 'recommendations', element: <RecommendationsPage /> },
    ],
  },
]);

export default router;
