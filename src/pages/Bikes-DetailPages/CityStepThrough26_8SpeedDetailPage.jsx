// src/pages/CityStepThrough26_8SpeedDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import CityStepThrough26_8SpeedImage from "../../assets/Products-Images/CityStepThrough26-8Speed.jpeg";

const CityStepThrough26_8SpeedDetailPage = () => {
  const product = {
    id: 24,
    image: CityStepThrough26_8SpeedImage,
    altText: "City Step-Through 26'' 8-Speed",
    name: "City Step-Through 26'' 8-Speed",
    price: "$699.99",
    description: "A city step-through bike with an 8-speed system and 26'' wheels.",
    colors: ["#00743e", "#ffd700", "#6600cc", "#4b0082"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default CityStepThrough26_8SpeedDetailPage;
