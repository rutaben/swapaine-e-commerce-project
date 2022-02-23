import React from 'react';
import {
  Grid,
  Box,
  Avatar,
} from '@mui/material';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import { authSelector } from '../../../store/auth';
import NavbarAuthMenu from './navbar-auth-menu';
import routes from '../../../routing/routes';
import StyledNavlink from './styled-nav-link';
import Logo from '../../../assets/images/logo.png';

const Desktop = ({ pages, breakPoint }) => {
  const desktopStyles = {
    display: { xs: 'none', [breakPoint]: 'flex' },
  };
  const auth = useSelector(authSelector);

  return (
    <Grid
      container
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar variant="square" src={Logo} sx={{ width: '140px', height: '30px' }} />
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ gap: 5, ...desktopStyles }}>
          {pages.map(({ title, link }) => (
            <StyledNavlink key={title} to={link}>{title}</StyledNavlink>
          ))}
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
        {
        !auth.loggedIn ? (
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            {/* <StyledNavlink to=""><SearchOutlinedIcon fontSize="small" /></StyledNavlink> */}
            <StyledNavlink to={routes.LoginPage}><PersonOutlineSharpIcon fontSize="small" /></StyledNavlink>
          </Box>
        ) : <NavbarAuthMenu />
      }
      </Grid>
    </Grid>
  );
};

export default Desktop;
