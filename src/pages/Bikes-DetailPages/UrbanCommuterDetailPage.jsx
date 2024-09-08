// src/pages/UrbanCommuterDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import Urbancommuter from "../../assets/Products-Images/UrbanCommuterBike.jpeg";

const UrbanCommuterDetailPage = () => {
  const product = {
    id: 30,
    image: Urbancommuter,
    altText: "Urban Commuter Bike",
    name: "Urban Commuter Bike",
    price: "$899.99",
    description: "A bike designed for the urban commuter.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default UrbanCommuterDetailPage;
