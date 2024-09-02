import React from 'react';
import SecurityLocks from '../../components/Accessories/SecurityLocks';
import SportcycleBells from '../../components/Accessories/SportcycleBells';
import SnackBags from '../../components/Accessories/SnackBags';
import PartsAndAccessories from '../../components/Accessories/PartsAndAccessories';

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center">FEATURED COLLECTIONS</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <SecurityLocks />
          <SportcycleBells />
          <SnackBags />
          <PartsAndAccessories />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
