// src/pages/Bikes-DetailPages/BullhornBarsDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import BullhornBarsImage from "../../assets/Accessories-Images/BullHornBar.jpg";

const BullhornBarsDetailPage = () => {
  const product = {
    id: 3,
    image: BullhornBarsImage,
    altText: "Bullhorn Bars",
    name: "Bullhorn Bars",
    price: "$31.99",
    oldPrice: "$39.99",
    description: "Ergonomically designed handlebars for a comfortable ride.",
    colors: ["#000000", "#FFD700"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default BullhornBarsDetailPage;
