// src/pages/Bikes-DetailPages/SecurityLocksDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import SecurityLockImage from "../../assets/Accessories-Images/SecuritLocks.jpeg";

const SecurityLocksDetailPage = () => {
  const product = {
    id: 10,
    image: SecurityLockImage,
    altText: "Security Locks",
    name: "Security Locks",
    price: "$19.99",
    description: "Secure your bike with these durable locks.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default SecurityLocksDetailPage;
