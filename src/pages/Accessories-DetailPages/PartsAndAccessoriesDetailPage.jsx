// src/pages/Bikes-DetailPages/PartsAndAccessoriesDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import PartsAccessoriesImage from "../../assets/Accessories-Images/PartsandAccerories.jpeg";

const PartsAndAccessoriesDetailPage = () => {
  const product = {
    id: 5,
    image: PartsAccessoriesImage,
    altText: "Parts and Accessories",
    name: "Parts and Accessories",
    price: "$5.99",
    description: "Everything you need to keep your bike in top shape.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default PartsAndAccessoriesDetailPage;
