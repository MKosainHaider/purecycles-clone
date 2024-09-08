// src/pages/Bikes-DetailPages/PureFixRiserBarsDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import PureFixRiserBarsImage from "../../assets/Accessories-Images/PureFixRiserBars.jpg";

const PureFixRiserBarsDetailPage = () => {
  const product = {
    id: 9,
    image: PureFixRiserBarsImage,
    altText: "Pure Fix Riser Bars",
    name: "Pure Fix Riser Bars",
    price: "$27.99",
    oldPrice: "$34.99",
    description: "Riser bars for a comfortable upright riding position.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default PureFixRiserBarsDetailPage;
