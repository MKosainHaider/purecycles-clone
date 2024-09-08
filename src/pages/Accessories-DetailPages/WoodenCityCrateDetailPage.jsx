// src/pages/Bikes-DetailPages/WoodenCityCrateDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import WoodenCityCrateImage from "../../assets/Accessories-Images/WoodenCityCrate.jpg";

const WoodenCityCrateDetailPage = () => {
  const product = {
    id: 16,
    image: WoodenCityCrateImage,
    altText: "Wooden City Crate",
    name: "Wooden City Crate",
    price: "$39.99",
    oldPrice: "$49.99",
    description: "Stylish and functional wooden crate for your bike.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default WoodenCityCrateDetailPage;
