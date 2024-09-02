import React from "react";
import styled from "styled-components";
import CityStepThrough3Speed from "../../components/Products/CityStepThrough3Speed";
import CityClassic3Speed from "../../components/Products/CityClassic3Speed";
import CityStepThrough8Speed from "../../components/Products/CityStepThrough8Speed";
import CityClassic8Speed from "../../components/Products/CityClassic8Speed";
import CityStepThrough26_3Speed from "../../components/Products/CityStepThrough26_3Speed";
import CityStepThrough26_8Speed from "../../components/Products/CityStepThrough26_8Speed";

const CityBikesSection = () => {
  return (
    <SectionWrapper>
      <HeaderWrapper>
        <h2 className="mb-8 text-4xl font-bold text-center">City Bikes</h2>
      </HeaderWrapper>
      <FilterSortWrapper>
        <button className="flex items-center px-4 py-2 bg-white border">
          <i className="mr-2 fas fa-filter"></i>Filter
        </button>
        <select className="px-4 py-2 bg-white border">
          <option>Best selling</option>
          <option>Price, low to high</option>
          <option>Price, high to low</option>
          <option>Newest arrivals</option>
        </select>
      </FilterSortWrapper>
      <GridWrapper>
        <CityStepThrough3Speed />
        <CityClassic3Speed />
        <CityStepThrough8Speed />
        <CityClassic8Speed />
        <CityStepThrough26_3Speed />
        <CityStepThrough26_8Speed />
      </GridWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  padding: 2rem 1rem;
  background-color: #ffffff;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterSortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
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

export default CityBikesSection;
