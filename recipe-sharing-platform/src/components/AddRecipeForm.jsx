import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split('\n').filter(i => i.trim()).length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients.';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 md:p-8 lg:p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8">
          Add a New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Ingredients (one per line)
            </label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              rows={4}
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Preparation Steps</label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              rows={4}
              value={steps}
              onChange={e => setSteps(e.target.value)}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;

