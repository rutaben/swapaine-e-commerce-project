import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';
import Footer from '../partials/footer';

const NavbarLayout = () => (
  <Box>
    <Navbar />
    <Outlet />
    <Footer />
  </Box>
);

export default NavbarLayout;
