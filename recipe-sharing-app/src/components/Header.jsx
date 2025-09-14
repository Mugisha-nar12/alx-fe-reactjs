import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">Recipe Sharing</Link>
      </div>
      <nav className="header-nav">
        <Link to="/favorites">Favorites</Link>
        <Link to="/recommendations">Recommendations</Link>
      </nav>
      <div className="header-actions">
        <SearchBar />
        <Link to="/add-recipe" className="add-recipe-btn">Add Recipe</Link>
      </div>
    </header>
  );
};

export default Header;
