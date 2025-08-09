import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/" element={<AddRecipeForm />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
        <Route path="/recipes/:recipeId/edit" element={<EditRecipeForm />} />
        <Route path='/recipes/add' element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
