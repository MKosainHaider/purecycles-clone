import React from 'react';
import ProductCard from '../ProductCard';
import ThreadlessStemImage from '../../assets/Accessories-Images/ThreadlessStem.jpg';

const ThreadlessStem = () => {
  return (
    <ProductCard
      image={ThreadlessStemImage}
      altText="Threadless 1-1/8\'' Stem"
      name="Threadless 1-1/8\'' Stem"
      brand="PURE CYCLES"
      oldPrice="$29.99"
      price="$23.99"
    />
  );
};

export default ThreadlessStem;
