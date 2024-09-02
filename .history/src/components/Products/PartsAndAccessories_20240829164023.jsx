import React from "react";
import styled from "styled-components";
import Collection4 from "../..";

const PartsAndAccessories = () => {
  return (
    <CollectionItem img={Collection4}>
      <OverlayText>Parts and Accessories</OverlayText>
    </CollectionItem>
  );
};

const CollectionItem = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
`;

const OverlayText = styled.h3`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
  border: 1px solid #333;
`;

export default PartsAndAccessories;
