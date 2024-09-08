import React from "react";
import styled from "styled-components";

const SortAndFilter = ({
  onSortChange,
  onFilterChange,
  availableColors = [],
  showStockFilter = true,
  showColorFilter = true,
}) => {
  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  const handleFilterChange = (event) => {
    const [filterType, filterValue] = event.target.value.split(",");
    onFilterChange(filterType, filterValue);
  };

  return (
    <ControlsWrapper>
      <SortWrapper>
        <label>Sort by: </label>
        <select onChange={handleSortChange}>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
          <option value="lowtohigh">Low to High Price</option>
          <option value="hightolow">High to Low Price</option>
        </select>
      </SortWrapper>

      <FilterWrapper>
        <label>Filter by: </label>
        <select onChange={handleFilterChange}>
          {showStockFilter && (
            <>
              <option value="stock,inStock">In Stock</option>
              <option value="stock,outOfStock">Out of Stock</option>
            </>
          )}
          {showColorFilter && availableColors.length > 0 && (
            <>
              {availableColors.map((color) => (
                <option key={color} value={`color,${color}`}>
                  Color: {color}
                </option>
              ))}
            </>
          )}
          {/* Add more filters if needed */}
        </select>
      </FilterWrapper>
    </ControlsWrapper>
  );
};

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f8f8f8;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  
  label {
    margin-right: 0.5rem;
  }

  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 0.5rem;
  }

  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export default SortAndFilter;
