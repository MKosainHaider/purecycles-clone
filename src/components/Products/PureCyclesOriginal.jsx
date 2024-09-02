import React from 'react';
import ProductCard from '../ProductCard';
import PureCyclesOriginalImage from '../../assets/Products-Images/purecycleoriginal.webp'; // Ensure the correct path to the image

const PureCyclesOriginal = () => {
  return (
    <ProductCard
      image={PureCyclesOriginalImage}
      altText="Pure Cycles Original"
      name="Pure Cycles Original"
      price="$479.99"
      oldPrice="$599.99"
      discount="Save 20%"
      sale={true}
    />
  );
};

export default PureCyclesOriginal;
