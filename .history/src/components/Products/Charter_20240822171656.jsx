import React from "react";
import Bike3 from "../../pages/home-Assets/Homebike3.jpeg";

const Charter = () => {
  return (
    <div className="text-center">
      <img src={Bike3} alt="Charter" className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold">Charter</h3>
      <p className="text-lg">$349.99</p>
      <span className="text-red-500">Sale!</span>
    </div>
  );
};

export default Charter;
