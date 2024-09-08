// src/pages/Bikes-DetailPages/ThickslickPureDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import ThickslickPureImage from "../../assets/Accessories-Images/ThickslickPure.jpg";

const ThickslickPureDetailPage = () => {
  const product = {
    id: 13,
    image: ThickslickPureImage,
    altText: "Thickslick Pure",
    name: "Thickslick Pure",
    price: "$28.99",
    oldPrice: "$35.99",
    description: "Durable and grippy tires for urban cycling.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default ThickslickPureDetailPage;
