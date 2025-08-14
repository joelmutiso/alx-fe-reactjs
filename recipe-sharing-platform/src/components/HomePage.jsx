import React, {useState, useEffect} from "react";
import recipesData from "../data.json";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setRecipes(recipesData);
        setLoading(false);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-gray-500">Loading recipes...</p>
            </div>
        );
    }

 return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Featured Recipes</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-base mb-4 line-clamp-3">{recipe.summary}</p>
              <a 
                href={`/recipes/${recipe.id}`} 
                className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
