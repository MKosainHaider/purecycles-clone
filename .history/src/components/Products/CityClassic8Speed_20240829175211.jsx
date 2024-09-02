import React from "react";
import CityClassic8SpeedImg from "../../assets/Products-Images/CityClassic8speed.jpeg";

const CityClassic8Speed = () => {
  return (
    <div className="text-center">
      <img
        src={CityClassic8SpeedImg}
        alt="City Classic 3-Speed"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">City Classic 3-Speed</h3>
      <p className="text-gray-600">PURE CYCLES</p>
      <p className="text-lg">$689.99</p>
    </div>
  );
};

export default CityClassic8Speed;
