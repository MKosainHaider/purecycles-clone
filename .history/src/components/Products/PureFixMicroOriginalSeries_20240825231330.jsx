import React from "react";
import ColorSwatch from "./ColorSwatch";

const PureFixMicroOriginalSeriesCard = ({ bike }) => {
  return (
    <div className="text-center">
      <img src={bike.img} alt={bike.name} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold">{bike.name}</h3>
      <p className="text-gray-600">{bike.brand}</p>
      <p className="text-lg">{bike.price}</p>
      <div className="flex justify-center mt-2 space-x-2">
        {bike.colors?.map((color, idx) => (
          <ColorSwatch key={idx} color={color} />
        ))}
      </div>
    </div>
  );
};

export default PureFixMicroOriginalSeriesCard;
