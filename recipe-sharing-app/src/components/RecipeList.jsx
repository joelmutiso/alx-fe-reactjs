import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";


const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    if (recipes.length === 0) {
        return <p>No recipes found. Add one!</p>;
    }

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/recipes/add">
                <button>Add New Recipe</button>
            </Link>
        </div>
    );
};

export default RecipeList;