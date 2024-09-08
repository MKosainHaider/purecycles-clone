// WoodenCityCrate.jsx (Make sure it's consistent if already assigned)
import React from 'react';
import ProductCard from '../ProductCard';
import WoodenCityCrateImage from '../../assets/Accessories-Images/WoodenCityCrate.jpg';

const WoodenCityCrate = () => {
  return (
    <ProductCard
      id={16} // Unique ID (Make sure it's consistent if already assigned)
      image={WoodenCityCrateImage}
      altText="Wooden City Crate"
      name="Wooden City Crate"
      brand="PURE CYCLES"
      oldPrice="$49.99"
      price="$39.99"
      type="Accessories"
    />
  );
};

export default WoodenCityCrate;
