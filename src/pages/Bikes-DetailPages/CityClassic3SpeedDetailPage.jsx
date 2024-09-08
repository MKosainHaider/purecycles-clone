// src/pages/CityClassic3SpeedDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import CityClassic3SpeedImg from "../../assets/Products-Images/CityClassic3speed.jpeg";

const CityClassic3SpeedDetailPage = () => {
  const product = {
    id: 18,
    image: CityClassic3SpeedImg,
    altText: "City Classic 3-Speed",
    name: "City Classic 3-Speed",
    price: "$689.99",
    description: "A classic city bike with a 3-speed gear system.",
    colors: ["#00743e", "#ffd700", "#4b0082"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default CityClassic3SpeedDetailPage;
