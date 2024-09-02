import React from 'react';
import ProductCard from '../ProductCard';
import ProFootstrapImage from '../../assets/Accessories-Images/ProFootstrap.jpg';

const ProFootstrap = () => {
  return (
    <ProductCard
      image={ProFootstrapImage}
      altText="Pro Footstrap"
      name="Pro Footstrap"
      brand="PURE CYCLES"
      oldPrice="$34.99"
      price="$27.99"
      colors={['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF']}
    />
  );
};

export default ProFootstrap;
