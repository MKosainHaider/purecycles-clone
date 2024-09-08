// src/pages/PureFixMicroOriginalSeriesDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import PureFixMicroOriginalSeriesImage from "../../assets/Products-Images/PureFixMicroOrignaalSeries.jpeg";

const PureFixMicroOriginalSeriesDetailPage = () => {
  const product = {
    id: 28,
    image: PureFixMicroOriginalSeriesImage,
    altText: "Pure Fix Micro Original Series",
    name: "Pure Fix Micro Original Series",
    price: "$599.99",
    description: "A smaller version of the Pure Fix Original bike.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default PureFixMicroOriginalSeriesDetailPage;
