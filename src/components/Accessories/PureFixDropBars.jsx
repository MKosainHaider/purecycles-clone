import React from 'react';
import ProductCard from '../ProductCard';
import PureFixDropBarsImage from '../../assets/Accessories-Images/PureFixDropbar.jpg';

const PureFixDropBars = () => {
  return (
    <ProductCard
      image={PureFixDropBarsImage}
      altText="Pure Fix Drop Bars"
      name="Pure Fix Drop Bars"
      brand="PURE CYCLES"
      oldPrice="$34.99"
      price="$27.99"
      colors={['#000000', '#FFD700']}
    />
  );
};

export default PureFixDropBars;
