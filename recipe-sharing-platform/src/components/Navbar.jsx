import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-300 transition-colors duration-200"
          >
            RecipeShare
          </Link>

          <Link
            to="/add-recipe"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Add Recipe
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
