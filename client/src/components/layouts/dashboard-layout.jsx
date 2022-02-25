import * as React from 'react';
import {
  Container,
} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../partials/navbar';

const DashboardLayout = () => (
  <Container sx={{ display: 'flex' }}>
    <Navbar />
    <Outlet />
  </Container>
);
export default DashboardLayout;
