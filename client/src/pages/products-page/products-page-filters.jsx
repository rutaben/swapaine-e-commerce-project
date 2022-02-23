import React, { useContext } from 'react';
import {
  Box,
} from '@mui/material';

import { ProductContext } from './contexts/product-context';
import CheckboxFilter from '../components/autocomplete';

const ProductsPageFilters = () => {
  const { filters, handleFilterChange } = useContext(ProductContext);
  // console.log(filters);

  return (
    <Box>
      <CheckboxFilter
        filterOptions={filters.category}
        filterName="category"
        label="Kategorija"
        onChange={(e, selectedOptions, filterName) => handleFilterChange(
          e,
          selectedOptions,
          filterName,
        )}
      />

      <CheckboxFilter
        filterOptions={filters.color}
        filterName="color"
        label="Spalva"
        onChange={(e, selectedOptions, filterName) => handleFilterChange(
          e,
          selectedOptions,
          filterName,
        )}
      />

      <CheckboxFilter
        filterOptions={filters.size}
        filterName="size"
        label="Dydžiai"
        onChange={(e, selectedOptions, filterName) => handleFilterChange(
          e,
          selectedOptions,
          filterName,
        )}
      />

      <CheckboxFilter
        filterOptions={filters.brand}
        filterName="brand"
        label="Gamintojas"
        onChange={(e, selectedOptions, filterName) => handleFilterChange(
          e,
          selectedOptions,
          filterName,
        )}
      />
    </Box>
  );
};

export default ProductsPageFilters;
