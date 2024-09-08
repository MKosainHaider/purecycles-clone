// src/pages/CityStepThroughDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import CityStepThroughs from "../../assets/Products-Images/CityStepThrough3Speed.jpeg";

const CityStepThroughDetailPage = () => {
  const product = {
    id: 20,
    image: CityStepThroughs,
    altText: "City Step-Through 3-Speed",
    name: "City Step-Through 3-Speed",
    price: "$599.99",
    description: "A step-through city bike with 3-speed gears.",
    colors: ["#00743e", "#ffd700", "#6600cc"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default CityStepThroughDetailPage;
