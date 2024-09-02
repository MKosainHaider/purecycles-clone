import React from "react";
import OriginalBike from "../../assets/Products-Images/Original.jpeg";

const OriginalBike = () => {
  return (
    <div className="text-center">
      <img src={OriginalBike} alt="Original" className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold">Original</h3>
      <p className="text-gray-600">PURE CYCLES</p>
      <p className="text-gray-400">Sold Out</p>
    </div>
  );
};

export default OriginalBike;
