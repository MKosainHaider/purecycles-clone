// src/components/FilterDropdown.jsx

import React, { useState } from 'react';

const FilterDropdown = ({ onFilterChange }) => {
  const [inStock, setInStock] = useState(true);
  const [color, setColor] = useState('');

  const applyFilter = () => {
    const filterCriteria = {};
    if (inStock !== null) filterCriteria.inStock = inStock;
    if (color) filterCriteria.color = color;

    onFilterChange(filterCriteria);
  };

  return (
    <div className="flex space-x-2">
      <select
        onChange={(e) => setInStock(e.target.value === 'inStock')}
        aria-label="Filter Stock"
        className="p-2 border rounded"
      >
        <option value="inStock">In Stock</option>
        <option value="outOfStock">Out of Stock</option>
      </select>

      <select
        onChange={(e) => setColor(e.target.value)}
        aria-label="Filter Color"
        className="p-2 border rounded"
      >
        <option value="">All Colors</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        {/* Add more colors as needed */}
      </select>

      <button
        onClick={applyFilter}
        className="p-2 text-white bg-blue-500 rounded"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default FilterDropdown;
