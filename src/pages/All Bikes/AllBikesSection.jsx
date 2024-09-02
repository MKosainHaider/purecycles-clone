import React from "react";
import styled from "styled-components";
import AdventureAL from "../../components/Products/AdventureAL"; 
import CityStep3Speed from "../../components/Products/CityStepThrough3Speed"; 
import Coaster from "../../components/Products/Coaster";
import UrbanCommuterBike from "../../components/Products/UrbanCommuterBike"; 
import CityClassic3speed from "../../components/Products/CityClassic3Speed";
import CityClassic8speed from "../../components/Products/CityClassic8Speed";
import CityStepThrough8Speed from "../../components/Products/CityStepThrough8Speed";
import PureCycleOriginal from "../../components/Products/PureCyclesOriginal";
import CityStepThrough263Speed from "../../components/Products/CityStepThrough26_3Speed";
import CityStepThrough268Speed from "../../components/Products/CityStepThrough26_8Speed";


const BikesSection = () => {
  return (
    <SectionWrapper>
      <FilterSortWrapper>
        <FilterButton>
          <i className="fas fa-filter"></i> Filter
        </FilterButton>
        <SortSelect>
          <option>Featured</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
          <option>Newest arrivals</option>
        </SortSelect>
      </FilterSortWrapper>
      <GridWrapper>
        <AdventureAL />
        <CityStep3Speed />
        <Coaster />
        <UrbanCommuterBike />
        <CityClassic3speed />
        <CityClassic8speed />
        <CityStepThrough8Speed />
        <PureCycleOriginal />
        <CityStepThrough268Speed />
        <CityStepThrough263Speed />
     
      </GridWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  padding: 2rem 1rem;
  background-color: #ffffff;
`;

const FilterSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SortSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export default BikesSection;
