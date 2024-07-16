// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import MealList from './components/MealList';
import Footer from './components/Footer';
import getMealsByName from './services/getMealsByName';
import getMealsByCategory from './services/getMealsByCategory';
import getCategories from './services/getCategories';
import './App.css';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
      const defaultMeals = await getMealsByCategory('Beef');
      setMeals(defaultMeals);
    };
    fetchCategories();
  }, []);

  const handleSearchMeal = async (mealName) => {
    const meals = await getMealsByName(mealName);
    setMeals(meals);
  };

  const handleSearchCategory = async (categoryName) => {
    const meals = await getMealsByCategory(categoryName);
    setMeals(meals);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <SearchForm onSearchCategory={handleSearchCategory} onSearchMeal={handleSearchMeal} />
      <div className="container">
        <MealList meals={meals} />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;

