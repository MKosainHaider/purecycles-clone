export const filterAndSortProducts = (products, filterOptions, sortOption) => {
    let filteredProducts = [...products];
    const { color, inStock } = filterOptions;
  
    // Apply filtering by color
    if (color) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors && product.colors.includes(color)
      );
    }
  
    // Apply filtering by stock status
    if (inStock) {
      filteredProducts = filteredProducts.filter((product) =>
        inStock === "true" ? product.inStock : !product.inStock
      );
    }
  
    // Apply sorting
    switch (sortOption) {
      case "A to Z":
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price low to high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price high to low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  
    return filteredProducts;
  };
  