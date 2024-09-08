// src/pages/Bikes-DetailPages/SportcycleBellsDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import SportcycleBellImage from "../../assets/Accessories-Images/SportcycleBells.jpeg";

const SportcycleBellsDetailPage = () => {
  const product = {
    id: 12,
    image: SportcycleBellImage,
    altText: "Sportcycle Bells",
    name: "Sportcycle Bells",
    price: "$7.99",
    description: "Stay safe and heard with these loud bells.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default SportcycleBellsDetailPage;
