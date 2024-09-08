import React from 'react';
import ProductCard from '../ProductCard';
import SnackBag from '../../assets/Accessories-Images/SnackBags.jpeg';

const SnackBags = () => {
  return (
    <ProductCard
    id={11} // Unique ID
      image={SnackBag}
      altText="Snack Bags"
      name="Snack Bags"
      type="Accessories"
    />
  );
};

export default SnackBags;
