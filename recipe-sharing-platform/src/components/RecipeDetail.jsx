import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-500">Loading recipe...</p>
      </div>
    );
  }
  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Recipe Not Found</h1>
        <p className="text-lg text-gray-700">The recipe you are looking for does not exist.</p>
      </div>
    );
  }

   return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover"
        />

        <div className="p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{recipe.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{recipe.summary}</p>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-lg">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-lg">{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
