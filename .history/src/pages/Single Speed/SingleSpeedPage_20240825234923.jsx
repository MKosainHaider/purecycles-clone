import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import SingleSpeedImage from "../SingleSpeed-Assets/SingleSpeedimg1.jpeg";
import Bike1 from "../SingleSpeed-Assets/SingleSpeedbike1.jpeg";
import Bike2 from "../SingleSpeed-Assets/SingleSpeedbike2.jpeg";
import Bike3 from "../SingleSpeed-Assets/SingleSpeedbike3.jpeg";

const bikes = [
  {
    name: "Coaster",
    brand: "PURE CYCLES",
    price: "$299.99",
    originalPrice: "$429.99",
    sale: true,
    img: Bike1,
    colors: ["#000000", "#C0C0C0", "#FFD700"],
  },
  {
    name: "Pure Fix Micro Original Series",
    brand: "PURE CYCLES",
    price: "$599.99",
    img: Bike2,
  },
  {
    name: "Original",
    brand: "PURE CYCLES",
    price: "$599.99",
    img: Bike3,
    soldOut: true,
  },
];

const SingleSpeedPage = () => {
  return (
    <div>
      <NavBar bgColor="transparent" textColor="white" />
      <HeroSection>
        <HeroContent>
          <h1 className="text-5xl font-bold text-white">
            FIXED GEAR AND SINGLE SPEED BIKES
          </h1>
        </HeroContent>
      </HeroSection>

      <div className="max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <button className="border px-4 py-2 flex items-center bg-white">
            <i className="fas fa-filter mr-2"></i>Filter
          </button>
          <select className="border px-4 py-2 bg-white">
            <option>Best selling</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Newest arrivals</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bikes.map((bike, index) => (
            <div key={index} className="text-center">
              <img src={bike.img} alt={bike.name} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{bike.name}</h3>
              <p className="text-gray-600">{bike.brand}</p>

              {bike.sale && (
                <div className="text-red-500">
                  <span className="line-through">{bike.originalPrice}</span>{" "}
                  from <span>{bike.price}</span>{" "}
                  <span className="text-red-500">Save 30%</span>
                </div>
              )}
              {!bike.sale && !bike.soldOut && (
                <p className="text-lg">{bike.price}</p>
              )}
              {bike.soldOut && <p className="text-gray-400">Sold Out</p>}
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

const HeroSection = styled.div`
  background: url(${SingleSpeedImage}) center center/cover no-repeat;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -110px;
`;

const HeroContent = styled.div`
  text-align: center;
`;

export default SingleSpeedPage;
