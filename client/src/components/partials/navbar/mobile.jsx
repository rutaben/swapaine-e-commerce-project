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
    width: '50%',
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
        <MenuItem sx={{ pr: 15 }}>
          <StyledNavLink
            to={pages[1].link}
            onClick={handleCloseNavMenu}
          >
            {pages[1].title}
          </StyledNavLink>
        </MenuItem>
        <MenuItem sx={{ pr: 15 }}>
          <StyledNavLink
            to={pages[2].link}
            onClick={handleCloseNavMenu}
          >
            {pages[2].title}
          </StyledNavLink>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Mobile;
