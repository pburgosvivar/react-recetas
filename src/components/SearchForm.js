import React, { useState } from 'react';
import Select from 'react-select';

const categories = [
  { value: 'Beef', label: 'Beef' },
  { value: 'Chicken', label: 'Chicken' },
  { value: 'Dessert', label: 'Dessert' },
  { value: 'Lamb', label: 'Lamb' },
  { value: 'Miscellaneous', label: 'Miscellaneous' },
  { value: 'Pasta', label: 'Pasta' },
  { value: 'Pork', label: 'Pork' },
  { value: 'Seafood', label: 'Seafood' },
  { value: 'Side', label: 'Side' },
  { value: 'Starter', label: 'Starter' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Breakfast', label: 'Breakfast' },
  { value: 'Goat', label: 'Goat' },
];

const SearchForm = ({ onSearchCategory, onSearchMeal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('category');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchType === 'category' && selectedCategory) {
      onSearchCategory(selectedCategory.value);
    } else {
      onSearchMeal(searchTerm);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Buscar ${searchType === 'category' ? 'categoría' : 'comida'}`}
          disabled={searchType === 'category'}
        />
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="category">Categoría</option>
          <option value="meal">Comida</option>
        </select>
        {searchType === 'category' && (
          <Select
            options={categories}
            value={selectedCategory}
            onChange={setSelectedCategory}
            placeholder="Selecciona una categoría"
          />
        )}
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchForm;



