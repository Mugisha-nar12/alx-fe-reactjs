import React from 'react';
import useRecipeStore from '../store/RecipeStore';
import '../index.css';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
