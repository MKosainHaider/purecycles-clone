// src/pages/PureFixOriginalDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import PureFixOriginalImage from "../../assets/Products-Images/PureFixMicroOrignaalSeries.jpeg";

const PureFixOriginalDetailPage = () => {
  const product = {
    id: 29,
    image: PureFixOriginalImage,
    altText: "Pure Fix Original",
    name: "Pure Fix Original",
    price: "$599.99",
    description: "The classic Pure Fix Original bike.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default PureFixOriginalDetailPage;
