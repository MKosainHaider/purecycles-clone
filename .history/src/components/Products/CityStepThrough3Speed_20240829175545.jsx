import React from "react";
import CityStepThrough3SpeedImage from "../../assets/Products-Images/CityStepThrough3Speed.jpeg";

const CityStepThrough3Speed = () => {
  return (
    <div className="text-center">
      <img
        src={CityStepThrough3SpeedImage}
        alt="City Step-Through 3-Speed"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">City Step-Through 3-Speed</h3>
      <p className="text-gray-600">PURE CYCLES</p>
      <p className="text-lg">$699.99</p>
      <div className="flex justify-center mt-2 space-x-2">
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#00743e" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#ffd700" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#6600cc" }}
        ></div>
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: "#4b0082" }}
        ></div>
      </div>
    </div>
  );
};

export default CityStepThrough3Speed;
