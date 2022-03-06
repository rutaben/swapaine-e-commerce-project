import React, { useState, useRef, useMemo } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Box,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from '../../../store/hooks';
import { userSelector } from '../../../store/auth';
import AuthService from '../../../services/auth-service';
import routes from '../../../routing/routes';

const NavbarAuthMenu = () => {
  const anchorRef = useRef();
  const user = useSelector(userSelector);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);
  const handleLogout = () => {
    handleCloseMenu();
    AuthService.logout();
  };
  const initials = useMemo(() => (user ? `${user.name[0]}${user.surname[0]}` : ''), [user]);

  return (
    <Box>
      <IconButton onClick={handleOpenMenu} ref={anchorRef}>
        <Avatar>{initials}</Avatar>
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
