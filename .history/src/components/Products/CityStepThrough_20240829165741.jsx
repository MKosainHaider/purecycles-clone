import React from "react";
import CityStepThroughs from "../../assets/Products-Images/CityStepThrough3Speed.jpeg";

const CityStepThrough = () => {
  return (
    <div className="text-center">
      <img
        src={CityStepThroughs}
        alt="City Step-Through 3-Speed"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">City Step-Through 3-Speed</h3>
      <p className="text-lg">$599.99</p>
    </div>
  );
};

export default CityStepThrough;
