import React from 'react';
import {
  Container,
  Grid,
  Divider,
  Box,
} from '@mui/material';
import Navbar from '../../../../components/partials/navbar';
import ProfilePageLinks from '../components/sidebar';
import FavoritesTable from './favorites-table';

const FavoritesPage = () => (
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
          <FavoritesTable />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default FavoritesPage;
