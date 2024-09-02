import React from 'react';
import ProductCard from '../ProductCard';
import CityStepThrough26_3SpeedImage from '../../assets/Products-Images/CityStepThrough26-3Speed.jpeg';

const CityStepThrough26_3Speed = () => {
  return (
    <ProductCard
      image={CityStepThrough26_3SpeedImage}
      altText="City Step-Through 26'' 3-Speed"
name="City Step-Through 26'' 3-Speed"

      brand="PURE CYCLES"
      price="$699.99"
      colors={['#008000', '#ffd700', '#6600cc']}
    />
  );
};

export default CityStepThrough26_3Speed;
