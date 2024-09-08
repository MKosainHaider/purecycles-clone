// PartsAndAccessories.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import PartsAccessories from '../../assets/Accessories-Images/PartsandAccerories.jpeg';

const PartsAndAccessories = () => {
  return (
    <ProductCard
      id={5} // Unique ID
      image={PartsAccessories}
      altText="Parts and Accessories"
      name="Parts and Accessories"
      type="Accessories"
    />
  );
};

export default PartsAndAccessories;
