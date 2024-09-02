import React from "react";
import Coaster from "../../assets/Products-Images/Coaster.jpeg";

const Coaster = () => {
  return (
    <div className="text-center">
      <img src={c} alt="Coaster" className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold">Coaster</h3>
      <p className="text-gray-600">PURE CYCLES</p>
      <div className="text-red-500">
        <span className="line-through">$429.99</span> from <span>$299.99</span>
        <span className="text-red-500"> Save 30%</span>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#000000" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#C0C0C0" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#FFD700" }}
        ></div>
      </div>
    </div>
  );
};

export default Coaster;
