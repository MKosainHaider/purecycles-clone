// PureFixRiserBars.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import PureFixRiserBarsImage from '../../assets/Accessories-Images/PureFixRiserBars.jpg';

const PureFixRiserBars = () => {
  return (
    <ProductCard
      id={9} // Unique ID
      image={PureFixRiserBarsImage}
      altText="Pure Fix Riser Bars"
      name="Pure Fix Riser Bars"
      brand="PURE CYCLES"
      oldPrice="$34.99"
      price="$27.99"
      type="Accessories"
    />
  );
};

export default PureFixRiserBars;
