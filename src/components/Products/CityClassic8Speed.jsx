import React from 'react';
import ProductCard from '../ProductCard';
import CityClassic8SpeedImg from '../../assets/Products-Images/CityClassic8speed.jpeg';

const CityClassic8Speed = () => {
  return (
    <ProductCard
      image={CityClassic8SpeedImg}
      altText="City Classic 8-Speed"
      name="City Classic 8-Speed"
      brand="PURE CYCLES"
      price="$689.99"
    />
  );
};

export default CityClassic8Speed;
