import React from 'react';
import ProductCard from '../ProductCard';
import PartsAccessories from '../../assets/Accessories-Images/PartsandAccerories.jpeg';

const PartsAndAccessories = () => {
  return (
    <ProductCard
      image={PartsAccessories}
      altText="Parts and Accessories"
      name="Parts and Accessories"
    />
  );
};

export default PartsAndAccessories;
