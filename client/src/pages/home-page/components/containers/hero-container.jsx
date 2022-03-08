import React from 'react';
import {
  Box,
  Typography,
  Paper,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '../../../../routing/routes';
import ContainedButton from '../buttons/contained-button';
import ScrollIconAnimation from '../animations/scroll-icon-animation';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: 700,
  textTransform: 'uppercase',
  fontFamily: 'Cormorant Garamond',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const HeroContainer = ({ heroText, title, children }) => (
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
        top: '400px',
      }}
    >
      <StyledHeader
        align="center"
        variant="h1"
        sx={{ mb: 3 }}
      >
        {heroText}
      </StyledHeader>
      <StyledLink to={routes.ProductsPage}>
        <ContainedButton title={title} />
      </StyledLink>
    </StyledBox>
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 45,
      }}
    >
      <ScrollIconAnimation />
    </Box>
  </StyledBox>
);

export default HeroContainer;
