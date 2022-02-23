import React from 'react';
import {
  Container,
  Grid,
  Divider,
  Box,
} from '@mui/material';
import Navbar from '../../../../components/partials/navbar';
import ProfilePageLinks from '../components/sidebar';
import OrdersTable from './orders-table';

const OrdersPage = () => (
  <Box>
    <Navbar />
    <Container
      maxWidth="lg"
      sx={(theme) => ({ pt: `${theme.mixins.toolbar.height}px` })}
    >
      <Grid container>
        <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ProfilePageLinks />
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={12} md={10}>
          <OrdersTable />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default OrdersPage;
