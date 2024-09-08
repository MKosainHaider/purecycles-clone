// src/pages/Bikes-DetailPages/PrestaValveAdapterDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import PrestaValveAdapterImage from "../../assets/Accessories-Images/PrestaValveAdapter.jpg";

const PrestaValveAdapterDetailPage = () => {
  const product = {
    id: 6,
    image: PrestaValveAdapterImage,
    altText: "Presta Valve Adapter",
    name: "Presta Valve Adapter",
    price: "$3.99",
    oldPrice: "$4.99",
    description: "An essential adapter for your Presta valve.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default PrestaValveAdapterDetailPage;
