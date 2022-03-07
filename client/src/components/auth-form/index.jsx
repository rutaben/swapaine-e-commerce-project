import React from 'react';
import {
  Container,
  Box,
  Typography,
  CircularProgress,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Button from './auth-form-button';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const AuthForm = ({
  children,
  title,
  linkTo,
  linkTitle,
  loading,
  onSubmit,
  isValid,
}) => (
  <Container
    maxWidth="xs"
    component="main"
    sx={(theme) => ({ pt: `${theme.mixins.toolbar.height}px` })}
  >
    <Box component="form" onSubmit={onSubmit}>
      <Box sx={() => ({
        mt: 4,
        mb: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      })}
      >
        <Typography variant="h4">
          {title}
        </Typography>
      </Box>
      {children}
      <Button disabled={!isValid}>
        {
        loading
          ? <CircularProgress color="inherit" />
          : title
        }
      </Button>
      <StyledLink to={linkTo}>
        {linkTitle}
      </StyledLink>
    </Box>
  </Container>
);

export default AuthForm;
