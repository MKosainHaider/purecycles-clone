import React from "react";
import OriginalBikeImage from "../../assets/Products-Images/Original.jpeg"; // Ensure the correct file extension

const OriginalBike = () => {
  return (
    <div className="text-center">
      <img
        src={OriginalBikeImage}
        alt="Original Bike"
        className="mx-auto mb-4"
      />{" "}
      {/* Updated variable name */}
      <h3 className="text-xl font-semibold">Original</h3>
      <p className="text-gray-600">PURE CYCLES</p>
      <p className="text-gray-400">Sold Out</p>
    </div>
  );
};

export default OriginalBike;
