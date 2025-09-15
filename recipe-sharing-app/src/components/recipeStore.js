import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      favorites: [],
      searchTerm: '',
      recommendations: [],
      
      setRecipes: (recipes) => set({ recipes }),
      setSearchTerm: (term) => set({ searchTerm: term }),
      
      addRecipe: (recipe) => set((state) => ({
        recipes: [...state.recipes, { ...recipe, id: Date.now(), isFavorite: false }],
      })),
    
      updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
        ),
      })),
    
      deleteRecipe: (id) => set((state) => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
      })),
    
      toggleFavorite: (id) => set((state) => {
        const recipes = state.recipes.map((recipe) =>
          recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
        );
        const favorites = recipes.filter((recipe) => recipe.isFavorite);
        return { recipes, favorites };
      }),
    
      getRecommendations: (recipeId) => set((state) => {
        const currentRecipe = state.recipes.find(r => r.id === recipeId);
        if (!currentRecipe) return { recommendations: [] };
    
        // Simple recommendation logic: find recipes with similar ingredients
        const recommended = state.recipes.filter(r => {
          if (r.id === recipeId) return false;
          const commonIngredients = r.ingredients.filter(ing => currentRecipe.ingredients.includes(ing));
          return commonIngredients.length > 0;
        });
    
        // Get top 3 recommendations or fewer if not enough matches
        const topRecommendations = recommended.slice(0, 3);
        return { recommendations: topRecommendations };
      }),
      clearRecommendations: () => set({ recommendations: [] }),
    }),
    {
      name: 'recipe-storage', // name of the item in the storage (must be unique)
    }
  )
);

export default useRecipeStore;