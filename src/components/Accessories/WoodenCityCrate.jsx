import React from 'react';
import ProductCard from '../ProductCard';
import WoodenCityCrateImage from '../../assets/Accessories-Images/WoodenCityCrate.jpg';

const WoodenCityCrate = () => {
  return (
    <ProductCard
      image={WoodenCityCrateImage}
      altText="Wooden City Crate"
      name="Wooden City Crate"
      brand="PURE CYCLES"
      oldPrice="$49.99"
      price="$39.99"
    />
  );
};

export default WoodenCityCrate;
