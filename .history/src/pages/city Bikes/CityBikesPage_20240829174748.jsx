import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import HeroImage from "../../assets/Page-Images/CityBikesimg1";
import CityStepThrough3Speed from "../../components/Products/CityStepThrough3Speed";
import CityClassic3Speed from "../../components/Products/CityClassic3Speed";
import CityStepThrough8Speed1 from "../../components/Products/CityStepThrough8Speed1";
import CityClassic3Speed2 from "../../components/Products/CityClassic3Speed2";
import CityStepThrough26_8Speed1 from "../../components/Products/CityStepThrough26_8Speed1";
import CityStepThrough26_8Speed2 from "../../components/Products/CityStepThrough26_8Speed2";

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
          <CityStepThrough3Speed />
          <CityClassic3Speed1 />
          <CityStepThrough8Speed1 />
          <CityClassic3Speed2 />
          <CityStepThrough26_8Speed1 />
          <CityStepThrough26_8Speed2 />
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
