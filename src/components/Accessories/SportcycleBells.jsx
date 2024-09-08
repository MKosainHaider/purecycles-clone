import React from 'react';
import ProductCard from '../ProductCard';
import SportcycleBell from '../../assets/Accessories-Images/SportcycleBells.jpeg';

const SportcycleBells = () => {
  return (
    <ProductCard
    id={12} // Unique ID
      image={SportcycleBell}
      altText="Sportcycle Bells"
      name="Sportcycle Bells"
      type="Accessories"
    />
  );
};

export default SportcycleBells;
