import React from 'react';
import ProductCard from '../ProductCard';
import SecurityLock from '../../assets/Accessories-Images/SecuritLocks.jpeg';

const SecurityLocks = () => {
  return (
    <ProductCard
      image={SecurityLock}
      altText="Security Locks"
      name="Security Locks"
    />
  );
};

export default SecurityLocks;
