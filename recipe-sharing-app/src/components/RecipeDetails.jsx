import { useParams, Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => String(recipe.id) === String(recipeId))
  );
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>
        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
      </h1>
      <p>{recipe.description}</p>
      <DeleteRecipeButton recipeId={recipeId} />
      {isFavorite ? (
        <button onClick={() => removeFavorite(recipeId)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default RecipeDetails;
