import React from 'react';
import Coaster from '../../components/Products/Coaster';


const ProductSection = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button className="p-2 border">Filter</button>
        <select className="p-2 border">
          <option>Best selling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Coaster />
        
      </div>
    </div>
  );
};

export default ProductSection;
