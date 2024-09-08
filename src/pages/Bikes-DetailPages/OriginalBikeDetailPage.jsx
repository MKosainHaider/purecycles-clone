// src/pages/OriginalBikeDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import OriginalBikeImage from "../../assets/Products-Images/Original.jpeg";

const OriginalBikeDetailPage = () => {
  const product = {
    id: 26,
    image: OriginalBikeImage,
    altText: "Original Bike",
    name: "Original",
    description: "The original bike with classic design.",
    isSoldOut: true,
  };

  return <ProductDetailPage product={product} />;
};

export default OriginalBikeDetailPage;
