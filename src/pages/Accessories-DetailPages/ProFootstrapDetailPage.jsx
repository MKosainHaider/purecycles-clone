// src/pages/Bikes-DetailPages/ProFootstrapDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import ProFootstrapImage from "../../assets/Accessories-Images/ProFootstrap.jpg";

const ProFootstrapDetailPage = () => {
  const product = {
    id: 7,
    image: ProFootstrapImage,
    altText: "Pro Footstrap",
    name: "Pro Footstrap",
    price: "$27.99",
    oldPrice: "$34.99",
    description: "Durable footstraps for added control and comfort.",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default ProFootstrapDetailPage;
