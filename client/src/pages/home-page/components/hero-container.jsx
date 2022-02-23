import React from 'react';
import {
  Box,
  Typography,
  Paper,
  styled,
} from '@mui/material';
import YellowButton from './buttons/yellow-button';
import ScrollIconAnimation from './animations/scroll-icon-animation';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontFamily: 'Lexend Deca',
}));

const HeroContainer = ({ children }) => (
  <StyledBox
    height="100vh"
  >
    <Paper elevation={0} sx={{ height: '100vh' }}>
      {children}
    </Paper>
    <StyledBox
      sx={{
        width: '100%',
        flexDirection: 'column',
        position: 'absolute',
      }}
    >
      <StyledHeader
        align="center"
        variant="h1"
      >
        Moderni
        <br />
        spinta
      </StyledHeader>
      <YellowButton title="Žiūrėti" />
    </StyledBox>
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 40,
      }}
    >
      <ScrollIconAnimation />
    </Box>
  </StyledBox>
);

export default HeroContainer;
