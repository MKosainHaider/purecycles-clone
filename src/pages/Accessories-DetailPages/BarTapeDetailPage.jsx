// src/pages/Bikes-DetailPages/BarTapeDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import BarTapeImage from "../../assets/Accessories-Images/BarType.jpg";

const BarTapeDetailPage = () => {
  const product = {
    id: 2,
    image: BarTapeImage,
    altText: "Bar Tape",
    name: "Bar Tape",
    price: "$15.99",
    oldPrice: "$19.99",
    description: "High-quality bar tape for a secure and comfortable grip.",
    colors: ["#000000", "#FFD700", "#FFFFFF", "#00FF00", "#FF00FF", "#0000FF"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default BarTapeDetailPage;
