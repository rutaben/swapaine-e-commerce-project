// import React from 'react';
import React, { useContext } from 'react';
import {
  Grid,
} from '@mui/material';
import ProductCard from '../../components/cards/product-card';
import { ProductContext } from './contexts/product-context';

const ProductsPageGrid = () => {
  const { products } = useContext(ProductContext);

  return (
    <Grid container>
      {products.map(({
        id, price, name, brand,
      }) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={id}>
          <ProductCard
            brand={brand.title}
            name={name}
            price={price}
            id={id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsPageGrid;
