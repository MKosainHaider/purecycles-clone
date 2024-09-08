// src/pages/Bikes-DetailPages/PureFixDropBarsDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import PureFixDropBarsImage from "../../assets/Accessories-Images/PureFixDropbar.jpg";

const PureFixDropBarsDetailPage = () => {
  const product = {
    id: 8,
    image: PureFixDropBarsImage,
    altText: "Pure Fix Drop Bars",
    name: "Pure Fix Drop Bars",
    price: "$27.99",
    oldPrice: "$34.99",
    description: "Sleek and aerodynamic drop bars for speed enthusiasts.",
    colors: ["#000000", "#FFD700"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default PureFixDropBarsDetailPage;
