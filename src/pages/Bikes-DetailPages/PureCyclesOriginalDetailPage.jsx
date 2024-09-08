// src/pages/PureCyclesOriginalDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import PureCyclesOriginalImage from "../../assets/Products-Images/purecycleoriginal.webp";

const PureCyclesOriginalDetailPage = () => {
  const product = {
    id: 27,
    image: PureCyclesOriginalImage,
    altText: "Pure Cycles Original",
    name: "Pure Cycles Original",
    price: "$479.99",
    oldPrice: "$599.99",
    description: "The original Pure Cycles bike, now at a discount.",
    sale: true,
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default PureCyclesOriginalDetailPage;
