import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
} from '@mui/material';
import ApiService from '../../services/api-service';
import ProductPageImages from './product-page-image-container';
import ProductPageInfo from './product-page-info-card';

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(product);

  useEffect(() => {
    (async () => {
      const getProduct = await ApiService.getProduct(id);
      const productProps = [
        { value: Object.values(getProduct?.brand)[1], variant: 'h4' },
        { value: getProduct?.name, variant: 'body1' },
        { value: `€${getProduct?.price}`, name: 'Vertė: ', variant: 'body1' },
        { value: Object.values(getProduct?.size)[1], name: 'Dydis:', variant: 'body1' },
        { value: Object.values(getProduct?.color)[1], name: 'Spalva:', variant: 'body1' },
      ];
      setProduct(productProps);
    })();
  }, []);

  return (
    <Container sx={(theme) => ({ mt: `calc(${theme.mixins.toolbar.height}px + 30px)`, mb: 5 })}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <ProductPageImages />
        </Grid>
        <Grid item xs={12} sm={4} sx={{ pl: 3 }}>
          <ProductPageInfo product={product} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
