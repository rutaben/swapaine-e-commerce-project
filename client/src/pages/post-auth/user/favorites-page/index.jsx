import React from 'react';
import {
  Container,
  Grid,
  Box,
} from '@mui/material';
import Navbar from '../../../../components/partials/navbar';
import FavoritesTable from './favorites-table';

const FavoritesPage = () => (
  <Box>
    <Navbar />
    <Container
      maxWidth="lg"
      sx={(theme) => ({ pt: `${theme.mixins.toolbar.height}px` })}
    >
      <Grid container>
        <Grid item xs={12} md={10}>
          <FavoritesTable />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default FavoritesPage;
