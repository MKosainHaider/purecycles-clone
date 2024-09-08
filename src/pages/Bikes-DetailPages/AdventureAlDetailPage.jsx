// src/pages/Bikes-DetailPages/AdventureAlDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailPage";
import AdventureALImage from "../../assets/Products-Images/AdventureAL.jpeg";

const AdventureAlDetailPage = () => {
  const product = {
    id: 17,
    image: AdventureALImage,
    altText: "Adventure AL",
    name: "Adventure AL",
    price: "$849.99",
    description: "A versatile and durable bike designed for adventure.",
    colors: ["#000000", "#C0C0C0", "#FFD700"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default AdventureAlDetailPage;
