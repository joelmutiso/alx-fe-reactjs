import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import SearchBar from "./SearchBar";


const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes());
    
    return (
        <div>
            <h2>Recipe List</h2>
            <SearchBar />
            {filteredRecipes.length === 0 ? (
                <p>No recipes found. Add one!</p>
            ) : (
                <ul>
                    {filteredRecipes.map(recipe => (
                        <li key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/recipes/add">
                <button>Add New Recipe</button>
            </Link>
        </div>
    );
};

export default RecipeList;