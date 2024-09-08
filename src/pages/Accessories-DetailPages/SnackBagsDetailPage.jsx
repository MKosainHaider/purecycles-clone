// src/pages/Bikes-DetailPages/SnackBagsDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import SnackBagImage from "../../assets/Accessories-Images/SnackBags.jpeg";

const SnackBagsDetailPage = () => {
  const product = {
    id: 11,
    image: SnackBagImage,
    altText: "Snack Bags",
    name: "Snack Bags",
    price: "$14.99",
    description: "Convenient snack bags for your cycling adventures.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default SnackBagsDetailPage;
