import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import HeroImage from "../cityBikes-Assets/CityBikesimg1.jpeg";
import Bike1 from "../cityBikes-Assets/CityBikes1.jpeg";
import Bike2 from "../cityBikes-Assets/CityBikes2.jpeg";
import Bike3 from "../CityBikes-Assets/CityBikes3.jpeg";
import Bike4 from "../CityBikes-Assets/CityBikes4.jpeg";
import Bike5 from "../CityBikes-Assets/CityBikes5.jpeg";
import Bike6 from "../CityBikes-Assets/CityBikes6.jpeg";

const bikes = [
  {
    name: "City Step-Through 3-Speed",
    brand: "PURE CYCLES",
    price: "$699.99",
    img: Bike1,
    colors: ["#00743e", "#ffd700", "#6600cc", "#4b0082"],
  },
  {
    name: "City Classic 3-Speed",
    brand: "PURE CYCLES",
    price: "$689.99",
    img: Bike2,
  },
  {
    name: "City Step-Through 8-Speed",
    brand: "PURE CYCLES",
    price: "$659.99",
    img: Bike3,
    colors: ["#008000", "#ffd700", "#6600cc"],
  },
  {
    name: "City Classic 3-Speed",
    brand: "PURE CYCLES",
    price: "$689.99",
    img: Bike4,
  },
  {
    name: 'City Step-Through 26" 8-Speed',
    brand: "PURE CYCLES",
    price: "$699.99",
    img: Bike5,
    colors: ["#00743e", "#ffd700", "#6600cc", "#4b0082"],
  },
  {
    name: 'City Step-Through 26" 8-Speed',
    brand: "PURE CYCLES",
    price: "$699.99",
    img: Bike6,
    colors: ["#008000", "#ffd700", "#6600cc"],
  },
];

const CityBikesPage = () => {
  return (
    <div>
      <NavBarContainer>
        <NavBar bgColor="transparent" textColor="white" />
      </NavBarContainer>
      <HeroSection>
        <HeroContent>
          <h1 className="text-6xl font-bold text-white">PURE CITY BIKES</h1>
        </HeroContent>
      </HeroSection>

      <div className="py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center px-4 py-2 bg-white border">
            <i className="mr-2 fas fa-filter"></i>Filter
          </button>
          <select className="px-4 py-2 bg-white border">
            <option>Best selling</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Newest arrivals</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {bikes.map((bike, index) => (
            <div key={index} className="text-center">
              <img src={bike.img} alt={bike.name} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{bike.name}</h3>
              <p className="text-gray-600">{bike.brand}</p>
              <p className="text-lg">{bike.price}</p>
              <div className="flex justify-center mt-2 space-x-2">
                {bike.colors?.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const NavBarContainer = styled.div`
  width: 100%;
`;

const HeroSection = styled.div`
  background: url(${HeroImage}) center center/cover no-repeat;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -110px;
`;

const HeroContent = styled.div`
  text-align: center;
`;

export default CityBikesPage;
