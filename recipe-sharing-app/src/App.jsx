import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'


function App() {
  return (
    <Router>
      <div>
        <Link to="/recipes">
          <button>View Recipes</button>
        </Link>
        <Routes>
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/" element={<AddRecipeForm />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/recipes/:recipeId/edit" element={<EditRecipeForm />} />
          <Route path='/recipes/add' element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
