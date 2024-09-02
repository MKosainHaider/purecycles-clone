import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <SmallText>CITY BIKES</SmallText>
        <MainText>EXPLORE YOUR CITY</MainText>
        <ShopButton>SHOP CITY BIKES</ShopButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: url(${backgroundImage}) center center/cover no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const SmallText = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  margin-bottom: 0.5rem;
`;

const MainText = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const ShopButton = styled.button`
  background-color: #b5985a;
  color: white;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a07a3a;
  }
`;

export default HeroSection;
