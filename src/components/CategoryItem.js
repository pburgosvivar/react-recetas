import React, { useState } from 'react';

const CategoryItem = ({ category }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
      <div onClick={handleToggleDescription} style={{ cursor: 'pointer' }}>
        <h2>{category.strCategory}</h2>
        <img src={category.strCategoryThumb} alt={category.strCategory} />
      </div>
      {showDescription && (
        <p>{category.strCategoryDescription}</p>
      )}
    </div>
  );
};

export default CategoryItem;

