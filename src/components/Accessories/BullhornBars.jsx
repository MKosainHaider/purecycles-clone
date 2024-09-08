// BullhornBars.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import BullhornBarsImage from '../../assets/Accessories-Images/BullHornBar.jpg';

const BullhornBars = () => {
  return (
    <ProductCard
      id={3} // Unique ID
      image={BullhornBarsImage}
      altText="Bullhorn Bars"
      name="Bullhorn Bars"
      brand="PURE CYCLES"
      oldPrice="$39.99"
      price="$31.99"
      type="Accessories"
      colors={['#000000', '#FFD700']}
    />
  );
};

export default BullhornBars;
