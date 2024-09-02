import React from 'react';
import ProductCard from '../ProductCard';
import SnackBag from '../../assets/Accessories-Images/SnackBags.jpeg';

const SnackBags = () => {
  return (
    <ProductCard
      image={SnackBag}
      altText="Snack Bags"
      name="Snack Bags"
    />
  );
};

export default SnackBags;
