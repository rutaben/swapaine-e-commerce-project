import React, { useState } from 'react';
import {
  Box, IconButton, useMediaQuery,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardLayoutMain from './dashboard-layout-main';
import DashboardLayoutDrawerHeader from './dashboard-layout-drawer-header';
import DashboardLayoutDrawer from './dashboard-layout-drawer';
import DashboardLayoutAppBar from './dashboard-layout-app-bar';
import Footer from '../../partials/footer';

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery(({ breakpoints }) => breakpoints.down('md'));

  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Box sx={{ display: 'flex' }}>
        <DashboardLayoutAppBar
          position="fixed"
          open={open}
        />
        <DashboardLayoutDrawer
          open={open}
          handleDrawerClose={handleDrawerToggle}
          isSmallScreen={isSmallScreen}
        />
        <DashboardLayoutMain open={open}>
          <DashboardLayoutDrawerHeader />
          <Outlet />
        </DashboardLayoutMain>

        {isSmallScreen && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          size="large"
          sx={(theme) => ({
            position: 'fixed',
            bottom: 30,
            right: 30,
            mr: 2,
            bgcolor: theme.palette.secondary.main,
            borderRadius: 0,
            ':hover': {
              bgcolor: theme.palette.secondary.light,
            },
          })}
        >
          <MenuOpenIcon sx={(theme) => ({
            color: theme.palette.primary.light,
            transform: 'rotate(180deg)',
            '&:hover': {
              transform: 'rotate(0deg)',
            },
          })}
          />
        </IconButton>
        )}
      </Box>
      <Box sx={(theme) => ({ width: '100%', height: theme.mixins.footer.height })} />
      <Box sx={{
        position: 'absolute', zIndex: 10000, bottom: 0, right: 0, width: '100%',
      }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
