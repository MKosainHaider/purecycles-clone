// src/pages/Bikes-DetailPages/WaterBottleCageDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import WaterBottleCageImage from "../../assets/Accessories-Images/WaterBottleCage.jpg";

const WaterBottleCageDetailPage = () => {
  const product = {
    id: 15,
    image: WaterBottleCageImage,
    altText: "Water Bottle Cage",
    name: "Water Bottle Cage",
    price: "$7.99",
    oldPrice: "$9.99",
    description: "Secure your water bottle with this lightweight cage.",
    colors: ["#000000", "#FFFFFF", "#FF0000"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default WaterBottleCageDetailPage;
