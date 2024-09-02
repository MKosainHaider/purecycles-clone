import React from "react";
import styled from "styled-components";
import SecurityLocks from "../../components/Products/SecurityLocks";
import SportcycleBells from "../../components/Products/SportcycleBells";
import SnackBags from "../../components/Products/SnackBags";
import PartsAndAccessories from "../../components/Products/PartsAndAccessories";
import Collection5 from "../../assets/Page-Images/Homeimg2";

const FeaturedCollections = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle>FEATURED COLLECTIONS</SectionTitle>
        <GridContainer>
          <CollectionWrapper>
            <SecurityLocks />
          </CollectionWrapper>
          <CollectionWrapper>
            <SportcycleBells />
          </CollectionWrapper>
          <CollectionWrapper>
            <SnackBags />
          </CollectionWrapper>
          <CollectionWrapper>
            <PartsAndAccessories />
          </CollectionWrapper>
        </GridContainer>
      </SectionContainer>

      <StorySection img={Collection5}>
        <StoryContent>
          <h2>THE PURE CYCLES STORY</h2>
          <p>
            Pure Cycles was founded with one mission in mind: to get more people
            on bikes.
          </p>
          <StoryButton>READ OUR STORY</StoryButton>
        </StoryContent>
      </StorySection>
    </>
  );
};

// Styled Components
const SectionContainer = styled.section`
  background-color: #f7fafc;
  padding: 4rem 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CollectionWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StorySection = styled.section`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
`;

const StoryContent = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  max-width: 300px;
  border: 1px solid #333;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

const StoryButton = styled.button`
  background-color: #b5985a;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a07a3a;
  }
`;

export default FeaturedCollections;
