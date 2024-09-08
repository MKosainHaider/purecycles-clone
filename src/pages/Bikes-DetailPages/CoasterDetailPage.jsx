// src/pages/CoasterDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";

import Coasters from "../../assets/Products-Images/Coaster.jpeg";

const CoasterDetailPage = () => {
  const product = {
    id: 21,
    image: Coasters,
    altText: "Coaster",
    name: "Coaster",
    oldPrice: "$429.99",
    price: "$299.99",
    description: "A classic coaster bike with a retro style.",
    colors: ["#000000", "#C0C0C0", "#FFD700"],
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default CoasterDetailPage;
