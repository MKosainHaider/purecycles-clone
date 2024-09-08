// src/pages/Bikes-DetailPages/ThreadlessStemDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import ThreadlessStemImage from "../../assets/Accessories-Images/ThreadlessStem.jpg";

const ThreadlessStemDetailPage = () => {
  const product = {
    id: 14,
    image: ThreadlessStemImage,
    altText: "Threadless 1-1/8'' Stem",
    name: "Threadless 1-1/8'' Stem",
    price: "$23.99",
    oldPrice: "$29.99",
    description: "Lightweight stem for a precise and stable ride.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default ThreadlessStemDetailPage;
