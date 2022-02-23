import React, { useState } from 'react';
import {
  Container,
  Grid,
  styled,
} from '@mui/material';
import ProductsPageGrid from './products-page-grid';
import ProductsPageFilters from './products-page-filters';
import ProductsPageTopActions from './products-page-top-actions';
import ProductsPageFiltersDrawer from './products-page-filter-drawer';
import ProductProvider from './contexts/product-context';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const ProductsPage = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const createToggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  return (
    <ProductProvider>
      <Container>
        <Grid container sx={(theme) => ({ mt: `calc(${theme.mixins.toolbar.height}px + 20px)` })}>
          <StyledGrid item md={3}>
            <ProductsPageFilters />
          </StyledGrid>
          <Grid item xs={12} md={9} sx={() => ({ display: 'flex', flexDirection: 'column' })}>
            <ProductsPageTopActions openDrawer={createToggleDrawer(true)} />
            <ProductsPageFiltersDrawer
              openDrawer={openDrawer}
              closeDrawer={createToggleDrawer(false)}
            />
            <ProductsPageGrid />
          </Grid>
        </Grid>
      </Container>
    </ProductProvider>
  );
};

export default ProductsPage;
