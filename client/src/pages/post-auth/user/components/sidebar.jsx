import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import routes from '../../../../routing/routes';

const ProfilePageLinks = () => (
  <Box>
    <NavLink to={routes.UserInfoPage}>
      <Typography>Informacija</Typography>
    </NavLink>
    <NavLink to={routes.FavoritesPage}>
      <Typography>Išsaugotos prekės</Typography>
    </NavLink>
    <NavLink to={routes.OrdersPage}>
      <Typography>Užsakymai</Typography>
    </NavLink>
  </Box>
);

export default ProfilePageLinks;
