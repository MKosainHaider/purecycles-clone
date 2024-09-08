// AssortmentOne.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import AssortmentOneImage from '../../assets/Accessories-Images/AssortmentOne.jpg';

const AssortmentOne = () => {
  return (
    <ProductCard
      id={1} // Unique ID
      image={AssortmentOneImage}
      altText="Assortment One"
      name="Assortment One"
      brand="PURE CYCLES"
      oldPrice="$12.99"
      price="$10.99"
      type="Accessories"
    />
  );
};

export default AssortmentOne;
