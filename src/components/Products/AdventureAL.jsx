import React from 'react';
import ProductCard from '../ProductCard';
import AdventureALImage from '../../assets/Products-Images/AdventureAL.jpeg';

const AdventureAl = () => {
  return (
    <ProductCard
      image={AdventureALImage}
      altText="Adventure AL"
      name="Adventure AL"
      price="$849.99"
    />
  );
};

export default AdventureAl;
