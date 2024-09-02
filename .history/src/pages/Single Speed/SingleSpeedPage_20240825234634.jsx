import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import SingleSpeedImage from "../SingleSpeed-Assets/SingleSpeedimg1.jpeg";
import CoasterCard from "./CoasterCard";
import PureFixMicroOriginalSeriesCard from "./PureFixMicroOriginalSeriesCard";
import OriginalCard from "./OriginalCard";

const SingleSpeedPage = () => {
  const renderBikeComponent = (bike) => {
    switch (bike.name) {
      case "Coaster":
        return <CoasterCard bike={bike} />;
      case "Pure Fix Micro Original Series":
        return <PureFixMicroOriginalSeriesCard bike={bike} />;
      case "Original":
        return <OriginalCard bike={bike} />;
      default:
        return null;
    }
  };

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
            <div key={index}>{renderBikeComponent(bike)}</div>
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
