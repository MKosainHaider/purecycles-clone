import React from 'react';
import ProductCard from '../ProductCard';
import PureFixOriginalImage from '../../assets/Products-Images/PureFixMicroOrignaalSeries.jpeg';

const PureFixOriginal = () => {
  return (
    <ProductCard
      image={PureFixOriginalImage}
      altText="Pure Fix Original"
      name="Pure Fix Original"
      brand="PURE CYCLES"
      price="$599.99"
    />
  );
};

export default PureFixOriginal;
