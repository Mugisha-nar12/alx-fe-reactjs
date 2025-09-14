import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  recommendations: [],
  
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

  toggleFavorite: (id) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    ),
  })),

  addRecommendation: (recipe) => set((state) => {
    if (state.recommendations.some(r => r.id === recipe.id)) {
      return {};
    }
    return { recommendations: [...state.recommendations, recipe] };
  }),

  removeRecommendation: (recipeId) => set((state) => ({
    recommendations: state.recommendations.filter((r) => r.id !== recipeId),
  })),
}));

export default useRecipeStore;
