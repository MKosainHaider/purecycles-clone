// WaterBottleCage.jsx (Make sure it's consistent if already assigned)
import React from 'react';
import ProductCard from '../ProductCard';
import WaterBottleCageImage from '../../assets/Accessories-Images/WaterBottleCage.jpg';

const WaterBottleCage = () => {
  return (
    <ProductCard
      id={15} // Unique ID (Make sure it's consistent if already assigned)
      image={WaterBottleCageImage}
      altText="Water Bottle Cage"
      name="Water Bottle Cage"
      brand="PURE CYCLES"
      oldPrice="$9.99"
      price="$7.99"
      type="Accessories"
      colors={['#000000', '#FFFFFF', '#FF0000']}
    />
  );
};

export default WaterBottleCage;
