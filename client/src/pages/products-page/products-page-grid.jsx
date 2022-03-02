import React, { useContext } from 'react';
import {
  Grid,
  Pagination,
} from '@mui/material';
import ProductCard from '../../components/cards/product-card';
import { ProductContext } from './contexts/product-context';

const ProductsPageGrid = () => {
  const {
    products, pagesCount, productGridPage, handleChange,
  } = useContext(ProductContext);

  return (
    <Grid container>
      {products.map(({
        id, price, name, brand, productImages,
      }) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={id}>
          <ProductCard
            brand={brand.title}
            name={name}
            price={price}
            id={id}
            productImage={productImages[0].src}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
        <Pagination shape="rounded" count={pagesCount} page={productGridPage} onChange={handleChange} />
      </Grid>
    </Grid>
  );
};

export default ProductsPageGrid;
