import React from 'react';
import {
  Box, IconButton, Menu, MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StyledNavLink from './styled-nav-link';

const Mobile = ({
  pages,
  handleOpenNavMenu,
  handleCloseNavMenu,
  anchorElNav,
  breakPoint,
}) => {
  const mobileStyles = {
    flexGrow: 1,
    display: { xs: 'flex', [breakPoint]: 'none' },
  };

  return (
    <Box sx={mobileStyles}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map(({ title, link }) => (
          <MenuItem key={title}>
            <StyledNavLink
              to={link}
              onClick={handleCloseNavMenu}
            >
              {title}
            </StyledNavLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Mobile;
