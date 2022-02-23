import React from 'react';
import {
  Toolbar, Box, AppBar, Container,
} from '@mui/material';
import Desktop from './desktop';
import Mobile from './mobile';
import NavbarScrollAction from './navbar-scroll-action';
import routes from '../../../routing/routes';

const pages = [
  { title: 'PAGRINDINIS', link: routes.Homepage },
  { title: 'KATALOGAS', link: routes.ProductsPage },
];

const breakPoint = 'md';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <NavbarScrollAction>
        <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#f7ea49' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Mobile
                pages={pages}
                handleOpenNavMenu={handleOpenNavMenu}
                handleCloseNavMenu={handleCloseNavMenu}
                anchorElNav={anchorElNav}
                breakPoint={breakPoint}
              />
              <Desktop pages={pages} breakPoint={breakPoint} />
            </Toolbar>
          </Container>
        </AppBar>
      </NavbarScrollAction>
    </Box>
  );
};

export default Navbar;
