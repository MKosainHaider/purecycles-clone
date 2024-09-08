// SecurityLocks.jsx
import React from 'react';
import ProductCard from '../ProductCard';
import SecurityLock from '../../assets/Accessories-Images/SecuritLocks.jpeg';

const SecurityLocks = () => {
  return (
    <ProductCard
      id={10} // Unique ID
      image={SecurityLock}
      altText="Security Locks"
      name="Security Locks"
      type="Accessories"
    />
  );
};

export default SecurityLocks;
