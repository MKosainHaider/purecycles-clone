import React from 'react';
import styled from 'styled-components';
import AssortmentOne from '../../components/Accessories/AssortmentOne';
import BarTape from '../../components/Accessories/BarTape';
import BullhornBars from '../../components/Accessories/BullhornBars';
import NylonPlatformPedals from '../../components/Accessories/NylonPlatformPedals';
import PrestaValveAdapter from '../../components/Accessories/PrestaValveAdapter';
import ProFootstrap from '../../components/Accessories/ProFootstrap';
import PureFixDropBars from '../../components/Accessories/PureFixDropBars';
import PureFixRiserBars from '../../components/Accessories/PureFixRiserBars';
import SecurityLocks from '../../components/Accessories/SecurityLocks';
import SnackBags from '../../components/Accessories/SnackBags';
import SportcycleBells from '../../components/Accessories/SportcycleBells';
import ThickslickPure from '../../components/Accessories/ThickslickPure';
import ThreadlessStem from '../../components/Accessories/ThreadlessStem';
import WaterBottleCage from '../../components/Accessories/WaterBottleCage';
import WoodenCityCrate from '../../components/Accessories/WoodenCityCrate';

const AccessoriesSection = ({ products }) => {
  const productComponents = {
    AssortmentOne,
    BarTape,
    BullhornBars,
    NylonPlatformPedals,
    PrestaValveAdapter,
    ProFootstrap,
    PureFixDropBars,
    PureFixRiserBars,
    SecurityLocks,
    SnackBags,
    SportcycleBells,
    ThickslickPure,
    ThreadlessStem,
    WaterBottleCage,
    WoodenCityCrate,
  };

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
        {products.map((product) => {
          const ProductComponent = productComponents[product.component];
          return <ProductComponent key={product.id} {...product} />;
        })}
      </GridWrapper>

      <ButtonWrapper>
        <ViewAllButton>VIEW ALL</ViewAllButton>
      </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const ViewAllButton = styled.button`
  background-color: #b5985a;
  color: white;
  padding: 0.75rem 2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #a5854b;
  }
`;

export default AccessoriesSection;
