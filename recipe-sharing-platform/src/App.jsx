import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import HomePage from './components/HomePage';
import AddRecipeForm from './components/AddRecipeForm';
import './index.css';

function App() {
  return (
    <Router>
      <div className="py-6">
        <nav className="flex items-center justify-between mb-6 px-4">
          <h1 className="text-3xl font-bold">Recipe App</h1>
          <div className="space-x-4">
            <Link to="/">
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                Home
              </button>
            </Link>
            <Link to="/add-recipe">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Add Recipe
              </button>
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
