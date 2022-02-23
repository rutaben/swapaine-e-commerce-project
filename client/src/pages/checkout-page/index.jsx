import React from 'react';
import {
  Grid,
  Container,
} from '@mui/material';
import CheckoutPageDelivery from './checkout-page-delivery-form';
import CheckoutPageOrderInfo from './checkout-page-order-info';

const CheckoutPage = () => (
  <Container
    maxWidth="md"
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: `calc(100vh -  ${theme.mixins.toolbar.height + theme.mixins.footer.height}px)`,
      mt: `${theme.mixins.toolbar.height}px`,
    })}
  >
    <Grid
      container
      spacing={4}
      sx={() => ({
        mt: 1, display: 'flex', flexDirection: 'row',
      })}
    >
      <Grid item xs={12} sm={6}>
        <CheckoutPageDelivery />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CheckoutPageOrderInfo />
      </Grid>
    </Grid>
  </Container>
);

export default CheckoutPage;
