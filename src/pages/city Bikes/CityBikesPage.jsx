import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import HeroImage from "../../assets/Page-Images/CityBikesimg1.jpeg";
import CityBikesSection from "./CityBikeSection"; 

const CityBikesPage = () => {
  return (
    <div>
        <NavBar  />
      
      <HeroSection>
        <HeroContent>
          <h1 className="text-6xl font-bold text-white">PURE CITY BIKES</h1>
        </HeroContent>
      </HeroSection>
      <CityBikesSection />

      <Footer />
    </div>
  );
};


const HeroSection = styled.div`
  background: url(${HeroImage}) center center/cover no-repeat;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const HeroContent = styled.div`
  text-align: center;
`;

export default CityBikesPage;
