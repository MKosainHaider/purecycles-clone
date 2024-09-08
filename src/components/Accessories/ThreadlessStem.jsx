// ThreadlessStem.jsx (Make sure it's consistent if already assigned)
import React from 'react';
import ProductCard from '../ProductCard';
import ThreadlessStemImage from '../../assets/Accessories-Images/ThreadlessStem.jpg';

const ThreadlessStem = () => {
  return (
    <ProductCard
      id={14} // Unique ID (Make sure it's consistent if already assigned)
      image={ThreadlessStemImage}
      altText="Threadless 1-1/8'' Stem"
      name="Threadless 1-1/8'' Stem"
      brand="PURE CYCLES"
      oldPrice="$29.99"
      price="$23.99"
      type="Accessories"
    />
  );
};

export default ThreadlessStem;
