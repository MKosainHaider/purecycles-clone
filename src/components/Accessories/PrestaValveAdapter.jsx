// PrestaValveAdapter.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import PrestaValveAdapterImage from '../../assets/Accessories-Images/PrestaValveAdapter.jpg';

const PrestaValveAdapter = () => {
  return (
    <ProductCard
      id={6} // Unique ID
      image={PrestaValveAdapterImage}
      altText="Presta Valve Adapter"
      name="Presta Valve Adapter"
      brand="PURE CYCLES"
      oldPrice="$4.99"
      price="$3.99"
      type="Accessories"
    />
  );
};

export default PrestaValveAdapter;
