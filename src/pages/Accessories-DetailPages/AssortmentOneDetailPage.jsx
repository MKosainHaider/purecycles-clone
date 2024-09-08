// src/pages/Bikes-DetailPages/AssortmentOneDetailPage.jsx
import React from "react";
import ProductDetailPage from "../../components/ProductDetailpage";
import AssortmentOneImage from "../../assets/Accessories-Images/AssortmentOne.jpg";

const AssortmentOneDetailPage = () => {
  const product = {
    id: 1,
    image: AssortmentOneImage,
    altText: "Assortment One",
    name: "Assortment One",
    price: "$10.99",
    oldPrice: "$12.99",
    description: "A curated assortment of accessories for your bike.",
    isSoldOut: false,
  };

  return <ProductDetailPage product={product} />;
};

export default AssortmentOneDetailPage;
