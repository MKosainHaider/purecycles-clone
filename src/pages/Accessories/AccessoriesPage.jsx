import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import HeroImage from "../../assets/Page-Images/AccessoriesImg1.webp";
import AccessoriesSection from "./AccessoriesSection";

const AccessoriesPage = () => {
  return (
    <>
        <NavBar  />
      <HeroSection>
        <HeroContent>
          <h1 className="text-6xl font-bold text-white">Bicycle Parts and Accessories</h1>
        </HeroContent>
      </HeroSection>

      <AccessoriesSection />

      <Footer />
    </>
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

export default AccessoriesPage;
