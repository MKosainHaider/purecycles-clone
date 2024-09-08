// src/pages/CityClassic8SpeedDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import CityClassic8SpeedImg from "../../assets/Products-Images/CityClassic8speed.jpeg";

const CityClassic8SpeedDetailPage = () => {
  const product = {
    id: 19,
    image: CityClassic8SpeedImg,
    altText: "City Classic 8-Speed",
    name: "City Classic 8-Speed",
    price: "$689.99",
    description: "A classic city bike with an 8-speed gear system.",
    colors: ["#000000", "#C0C0C0", "#FFD700"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default CityClassic8SpeedDetailPage;
