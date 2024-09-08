// ThickslickPure.jsx (Make sure it's consistent if already assigned)
import React from 'react';
import ProductCard from '../ProductCard';
import ThickslickPureImage from '../../assets/Accessories-Images/ThickslickPure.jpg';

const ThickslickPure = () => {
  return (
    <ProductCard
      id={13} // Unique ID (Make sure it's consistent if already assigned)
      image={ThickslickPureImage}
      altText="Thickslick Pure"
      name="Thickslick Pure"
      brand="PURE CYCLES"
      oldPrice="$35.99"
      price="$28.99"
      type="Accessories"
    />
  );
};

export default ThickslickPure;
