import React from 'react';
import {
  Box,
  Avatar,
  Typography,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/auth';
import NavbarAuthMenu from './navbar-auth-menu';
import StyledNavlink from './styled-nav-link';

const Desktop = ({ pages, breakPoint }) => {
  const desktopStyles = {
    width: '100%',
    display: { xs: 'none', [breakPoint]: 'flex' },
    justifyContent: 'end',
    alignItems: 'center',
    gap: 5,
  };
  const auth = useSelector(authSelector);

  return (
    <Box sx={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
    }}
    >
      <Box sx={{
        display: 'flex', width: '100%', justifyContent: 'end', gap: 1,
      }}
      >
        <SearchOutlinedIcon />
        <Box sx={{ ...desktopStyles, justifyContent: 'start' }}>
          <Typography variant="body2" sx={{ fontWeight: 300 }}>Paieška</Typography>
        </Box>
      </Box>

      <Box sx={{
        display: 'block', position: 'absolute', left: '50%', marginLeft: '-60px', top: '50%', marginTop: '-13px',
      }}
      >
        <StyledNavlink to={pages[0].link}>
          <Avatar variant="square" src={pages[0].title} sx={{ width: '120px', height: '20px' }} />
        </StyledNavlink>
      </Box>

      <Box sx={{ ...desktopStyles }}>
        <StyledNavlink to={pages[1].link}>
          {pages[1].title}
        </StyledNavlink>
        {
        !auth.loggedIn ? (
          <StyledNavlink to={pages[2].link}>
            {pages[2].title}
          </StyledNavlink>
        ) : <NavbarAuthMenu />
      }
      </Box>
    </Box>
  );
};

export default Desktop;
