import React from 'react';
import ProductCard from '../ProductCard';
import CityStepThroughs from '../../assets/Products-Images/CityStepThrough3Speed.jpeg';

const CityStepThrough = () => {
  return (
    <ProductCard
      image={CityStepThroughs}
      altText="City Step-Through 3-Speed"
      name="City Step-Through 3-Speed"
      price="$599.99"
    />
  );
};

export default CityStepThrough;
