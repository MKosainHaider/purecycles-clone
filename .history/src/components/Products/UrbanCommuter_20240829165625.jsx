import React from "react";
import UrbanCommuter from "../../assets/Products-Images/UrbanCommuterBike.jpeg";

const UrbanCommuter = () => {
  return (
    <div className="text-center">
      <img
        src={Urbancommuter}
        alt="Urban Commuter Bike"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">Urban Commuter Bike</h3>
      <p className="text-lg">$899.99</p>
    </div>
  );
};

export default UrbanCommuter;
