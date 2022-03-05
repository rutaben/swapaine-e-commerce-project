import React, { useState, useRef } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AuthService from '../../../services/auth-service';
import routes from '../../../routing/routes';

const NavbarAuthMenu = () => {
  const anchorRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    handleCloseMenu();
    AuthService.logout();
  };

  return (
    <Box>
      <IconButton onClick={handleOpenMenu} ref={anchorRef}>
        <Avatar>R</Avatar>
      </IconButton>
      <Menu
        open={menuOpen}
        onClose={handleCloseMenu}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Link to={routes.ProfilePage}>
            <Typography textAlign="center">Mano profilis</Typography>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">Atsijungti</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarAuthMenu;
