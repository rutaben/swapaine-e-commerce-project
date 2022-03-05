import React, { useContext } from 'react';
import {
  Box,
} from '@mui/material';

import { ProductContext } from './contexts/product-context';
import AutocompleteFilter from '../components/autocomplete-filter';

const ProductsPageFilters = () => {
  const { filters, handleFilterChange } = useContext(ProductContext);

  return (
    <Box>
      <AutocompleteFilter
        filterOptions={filters.category}
        filterName="category"
        label="Kategorija"
        onChange={(selectedOptions, filterName) => handleFilterChange(
          selectedOptions,
          filterName,
        )}
      />

      <AutocompleteFilter
        filterOptions={filters.color}
        filterName="color"
        label="Spalva"
        onChange={(selectedOptions, filterName) => handleFilterChange(
          selectedOptions,
          filterName,
        )}
      />

      <AutocompleteFilter
        filterOptions={filters.size}
        filterName="size"
        label="Dydžiai"
        onChange={(selectedOptions, filterName) => handleFilterChange(
          selectedOptions,
          filterName,
        )}
      />

      <AutocompleteFilter
        filterOptions={filters.brand}
        filterName="brand"
        label="Gamintojas"
        onChange={(selectedOptions, filterName) => handleFilterChange(
          selectedOptions,
          filterName,
        )}
      />
    </Box>
  );
};

export default ProductsPageFilters;
