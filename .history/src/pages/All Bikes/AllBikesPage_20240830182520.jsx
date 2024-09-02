import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import HeroImage from "../../assets/Page-Images/commuterBikeimg1.webp";

const AllBikesPage = () => {
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

export default AllBikesPage  ;
