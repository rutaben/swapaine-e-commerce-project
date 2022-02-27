import React, { useContext } from 'react';
import {
  Box,
} from '@mui/material';

import { ProductContext } from './contexts/product-context';
import CheckboxFilter from '../components/checkbox-filter';

const ProductsPageFilters = () => {
  const { filters, handleFilterChange } = useContext(ProductContext);

  return (
    <Box>
      <CheckboxFilter
        filterOptions={filters.category}
        filterName="category"
        label="Kategorija"
        onChange={(selectedOptions, filterName) => handleFilterChange(
          selectedOptions,
          filterName,
        )}
      />

      <CheckboxFilter
        filterOptions={filters.color}
        filterName="color"
        label="Spalva"
        onChange={(selectedOptions, filterName) => handleFilterChange(
          selectedOptions,
          filterName,
        )}
      />

      <CheckboxFilter
        filterOptions={filters.size}
        filterName="size"
        label="Dydžiai"
        onChange={(selectedOptions, filterName) => handleFilterChange(
          selectedOptions,
          filterName,
        )}
      />

      <CheckboxFilter
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
