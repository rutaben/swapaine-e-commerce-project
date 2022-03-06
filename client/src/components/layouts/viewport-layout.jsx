import React from 'react';
import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const ViewportContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.mixins.footer.height}px )`,
  overflow: 'hidden',
  display: 'grid',
}));

const ViewportLayout = () => (
  <ViewportContainer>
    <Outlet />
  </ViewportContainer>
);

export default ViewportLayout;
