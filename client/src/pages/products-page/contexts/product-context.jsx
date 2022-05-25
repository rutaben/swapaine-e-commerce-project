import React, { createContext, useMemo } from 'react';
import useFilters from './use-filters';
import useProducts from './use-products';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { filters, handleFilterChange } = useFilters();
  const {
    products, pagesCount, currPage, handleChange,
  } = useProducts();

  const providerValue = useMemo(() => ({
    filters,
    handleFilterChange,
    products,
    pagesCount,
    currPage,
    handleChange,
  }), [products, filters]);

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
