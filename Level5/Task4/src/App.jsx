import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';
import SpaghettiBolognese from './assets/SpaghettiBolognese.jpeg';
import ChickenCurry from './assets/ChickenCurry.jpeg';
import AvocadoToast from './assets/AvocadoToast.jpeg';

const recipesData = [
  {
    id: '1',
    title: 'Spaghetti Bolognese',
    imageUrl: SpaghettiBolognese,
    ingredients: ['Spaghetti', 'Tomatoes', 'Ground Beef', 'Onion', 'Garlic'],
    instructions: 'Cook spaghetti. In another pan, prepare the sauce with beef and tomatoes. Mix and serve.'
  },
  {
    id: '2',
    title: 'Chicken Curry',
    imageUrl: ChickenCurry,
    ingredients: ['Chicken', 'Curry Powder', 'Yogurt', 'Onion', 'Tomato'],
    instructions: 'Cook chicken with spices, add yogurt, and simmer. Serve with rice.'
  },
  {
    id: '3',
    title: 'Avocado Toast',
    imageUrl: AvocadoToast,
    ingredients: ['Bread', 'Avocado', 'Lemon Juice', 'Salt', 'Pepper'],
    instructions: 'Toast bread, mash avocado with lemon juice, and spread. Sprinkle salt and pepper on top.'
  }
];

function Home() {
  const [search, setSearch] = useState('');

  const filteredRecipes = recipesData.filter(recipe =>
    recipe.title.toLowerCase().includes(search.toLowerCase()) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="title">Recipe Finder</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes..."
          className="search-input"
        />
        <div className="recipe-list">
          {filteredRecipes.map(recipe => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.title} className="recipe-img" />
              <h3>{recipe.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find(r => r.id === id);

  if (!recipe) {
    return <h2 className="not-found">Recipe Not Found</h2>;
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <h1>{recipe.title}</h1>
        <img src={recipe.imageUrl} alt={recipe.title} className="recipe-img" />
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}
