import React from 'react';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const ViewportContainer = styled(Box)(() => ({
  // height: `calc(100vh - ${theme.mixins.navbar.height}px)`,
  height: '100vh',
  overflow: 'hidden',
  display: 'grid',
}));

const ViewportLayout = () => (
  <ViewportContainer>
    <Outlet />
  </ViewportContainer>
);

export default ViewportLayout;
