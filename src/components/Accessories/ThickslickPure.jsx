import React from 'react';
import ProductCard from '../ProductCard';
import ThickslickPureImage from '../../assets/Accessories-Images/ThickslickPure.jpg';

const ThickslickPure = () => {
  return (
    <ProductCard
      image={ThickslickPureImage}
      altText="Thickslick Pure"
      name="Thickslick Pure"
      brand="PURE CYCLES"
      oldPrice="$35.99"
      price="$28.99"
    />
  );
};

export default ThickslickPure;
