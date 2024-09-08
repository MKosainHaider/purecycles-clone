// NylonPlatformPedals.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import NylonPlatformPedalsImage from '../../assets/Accessories-Images/NylonPlatformPadals.jpg';

const NylonPlatformPedals = () => {
  return (
    <ProductCard
      id={4} // Unique ID
      image={NylonPlatformPedalsImage}
      altText="Nylon Platform Pedals"
      name="Nylon Platform Pedals"
      brand="PURE CYCLES"
      oldPrice="$19.99"
      price="$15.99"
      type="Accessories"
    />
  );
};

export default NylonPlatformPedals;
