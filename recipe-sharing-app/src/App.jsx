import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import useRecipeStore from './components/recipeStore';
import FavoriteRecipes from './components/FavoriteRecipes';
import RecommendedRecipes from './components/RecommendedRecipes';

function App() {
  const { addRecipe } = useRecipeStore();

  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm addRecipe={addRecipe} />
              <FavoriteRecipes />
              <RecommendedRecipes />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;