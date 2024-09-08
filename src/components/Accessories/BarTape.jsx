// BarTape.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import BarTapeImage from '../../assets/Accessories-Images/BarType.jpg';

const BarTape = () => {
  return (
    <ProductCard
      id={2} // Unique ID
      image={BarTapeImage}
      altText="Bar Tape"
      name="Bar Tape"
      brand="PURE CYCLES"
      oldPrice="$19.99"
      price="$15.99"
      type="Accessories"
      colors={['#000000', '#FFD700', '#FFFFFF', '#00FF00', '#FF00FF', '#0000FF']}
    />
  );
};

export default BarTape;
