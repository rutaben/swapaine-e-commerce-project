import React from 'react';
import {
  Toolbar, AppBar, Container,
} from '@mui/material';
import Desktop from './desktop';
import Mobile from './mobile';
import Logo from '../../../assets/images/logo.png';
import routes from '../../../routing/routes';

const pages = [
  { title: Logo, link: routes.Homepage },
  { title: 'Katalogas', link: routes.ProductsPage },
  { title: 'Prisijungti', link: routes.LoginPage },
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
    <AppBar
      position="fixed"
      elevation={0}
      sx={(theme) => ({ backgroundColor: theme.palette.background.default })}
    >
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
  );
};

export default Navbar;
