// src/pages/CityStepThrough26_3SpeedDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import CityStepThrough26_3SpeedImage from "../../assets/Products-Images/CityStepThrough26-3Speed.jpeg";

const CityStepThrough26_3SpeedDetailPage = () => {
  const product = {
    id: 23,
    image: CityStepThrough26_3SpeedImage,
    altText: "City Step-Through 26'' 3-Speed",
    name: "City Step-Through 26'' 3-Speed",
    price: "$699.99",
    description: "A city step-through bike with a 3-speed system and 26'' wheels.",
    colors: ["#008000", "#ffd700", "#6600cc"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default CityStepThrough26_3SpeedDetailPage;
