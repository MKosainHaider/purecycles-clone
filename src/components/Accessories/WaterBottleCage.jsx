import React from 'react';
import ProductCard from '../ProductCard';
import WaterBottleCageImage from '../../assets/Accessories-Images/WaterBottleCage.jpg';

const WaterBottleCage = () => {
  return (
    <ProductCard
      image={WaterBottleCageImage}
      altText="Water Bottle Cage"
      name="Water Bottle Cage"
      brand="PURE CYCLES"
      oldPrice="$9.99"
      price="$7.99"
      colors={['#000000', '#FFFFFF', '#FF0000']}
    />
  );
};

export default WaterBottleCage;
