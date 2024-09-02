import React from "react";
import styled from "styled-components";
import UrbanCommuterBike from "../../components/Products/UrbanCommuterBike"; const BikeSection = () => {
  return (
    <SectionWrapper>
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
        <UrbanCommuterBike />
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

export default BikeSection;
