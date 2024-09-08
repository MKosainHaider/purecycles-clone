// src/pages/CityStepThrough8SpeedDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import CityStepThrough8SpeedImage from "../../assets/Products-Images/CityStepThrough8Speed.jpeg";

const CityStepThrough8SpeedDetailPage = () => {
  const product = {
    id: 22,
    image: CityStepThrough8SpeedImage,
    altText: "City Step-Through 8-Speed",
    name: "City Step-Through 8-Speed",
    price: "$659.99",
    description: "A city step-through bike with an 8-speed system.",
    colors: ["#008000", "#ffd700", "#6600cc"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default CityStepThrough8SpeedDetailPage;
