// src/pages/UrbanCommuterBikeDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import UrbanCommuterImage from "../../assets/Products-Images/UrbanCommuterBike.jpeg";

const UrbanCommuterBikeDetailPage = () => {
  const product = {
    id: 31,
    image: UrbanCommuterImage,
    altText: "Urban Commuter Bike",
    name: "Urban Commuter Bike",
    price: "$551.99",
    oldPrice: "$689.99",
    description: "An upgraded version of the Urban Commuter Bike with a discount.",
    colors: ["#C0C0C0", "#000000", "#3A506B"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default UrbanCommuterBikeDetailPage;

