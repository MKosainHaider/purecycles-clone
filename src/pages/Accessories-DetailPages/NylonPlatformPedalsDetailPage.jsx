// src/pages/Bikes-DetailPages/NylonPlatformPedalsDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import NylonPlatformPedalsImage from "../../assets/Accessories-Images/NylonPlatformPadals.jpg";

const NylonPlatformPedalsDetailPage = () => {
  const product = {
    id: 4,
    image: NylonPlatformPedalsImage,
    altText: "Nylon Platform Pedals",
    name: "Nylon Platform Pedals",
    price: "$15.99",
    oldPrice: "$19.99",
    description: "Lightweight and durable pedals for any cyclist.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default NylonPlatformPedalsDetailPage;
