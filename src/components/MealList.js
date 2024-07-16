import React, { useState } from 'react';

const MealList = ({ meals }) => {
  const [expandedMeal, setExpandedMeal] = useState(null);

  const handleExpandMeal = (mealId) => {
    setExpandedMeal(mealId === expandedMeal ? null : mealId);
  };

  return (
    <div className="container">
      {meals.map(meal => (
        <div key={meal.idMeal} className="recipe">
          <h2>{meal.strMeal}</h2>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            onClick={() => handleExpandMeal(meal.idMeal)}
            style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
          />
          {expandedMeal === meal.idMeal && (
            <div>
              <p>{meal.strInstructions}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MealList;

