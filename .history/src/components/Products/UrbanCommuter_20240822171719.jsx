import React from "react";
import Bike4 from "../../pages/home-Assets/Homebike4.jpeg";

const UrbanCommuter = () => {
  return (
    <div className="text-center">
      <img src={Bike4} alt="Urban Commuter Bike" className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold">Urban Commuter Bike</h3>
      <p className="text-lg">$899.99</p>
    </div>
  );
};

export default UrbanCommuter;
