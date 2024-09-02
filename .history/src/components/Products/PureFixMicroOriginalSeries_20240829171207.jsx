import React from "react";
import PureFixMicroOriginalSeriesImage from "../../assets/Products-Images/PureFixMicroOrignaalSeries"; // Corrected the file name and added the file extension

const PureFixMicroOriginalSeries = () => {
  return (
    <div className="text-center">
      <img
        src={PureFixMicroOriginalSeriesImage} // Corrected variable name
        alt="Pure Fix Micro Original Series"
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">Pure Fix Micro Original Series</h3>
      <p className="text-gray-600">PURE CYCLES</p>
      <p className="text-lg">$599.99</p>
    </div>
  );
};

export default PureFixMicroOriginalSeries;
