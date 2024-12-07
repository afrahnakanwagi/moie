import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const categories = [
  'Horror', 'Cartoons', 'Sci-Fi', 'Thrillers', 'Drama',
  'High School', 'Adventure', 'Translated', 'Non-Translated',
  'Musicals', 'Korean'
];

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="category-card"
            onClick={() => navigate(`/categories/${category.toLowerCase()}`)}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
