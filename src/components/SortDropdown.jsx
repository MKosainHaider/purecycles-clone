// src/components/SortDropdown.jsx

import React from 'react';

const SortDropdown = ({ onSortChange }) => {
  return (
    <select
      onChange={(e) => {
        const [sortKey, order] = e.target.value.split(':');
        onSortChange(sortKey, order);
      }}
      aria-label="Sort Products"
      className="p-2 border rounded"
    >
      <option value="name:asc">Alphabetically, A-Z</option>
      <option value="name:desc">Alphabetically, Z-A</option>
      <option value="price:asc">Price, low to high</option>
      <option value="price:desc">Price, high to low</option>
    </select>
  );
};

export default SortDropdown;
