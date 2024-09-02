import React from "react";
import CityStepThrough26_3SpeedImage from "../../assets/Products-Images/CityStepThrough26-3Speed.jpeg";

const CityStepThrough26_3Speed = () => {
  return (
    <div className="text-center">
      <img
        src={CityStepThrough26_3SpeedImage}
        alt="City Step-Through 26 3-Speed"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">City Step-Through 26" 3-Speed</h3>
      <p className="text-gray-600">PURE CYCLES</p>
      <p className="text-lg">$699.99</p>
      <div className="flex justify-center mt-2 space-x-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#008000" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#ffd700" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#6600cc" }}
        ></div>
      </div>
    </div>
  );
};

export default CityStepThrough26_3Speed;
