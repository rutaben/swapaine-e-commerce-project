import React from 'react';
import {
  Button,
  styled,
} from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  letterSpacing: '1px',
  color: theme.palette.primary.contrastText,
  padding: 0,
  minHeight: 0,
  minWidth: 0,
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',
  fontWeight: 700,
}));

const UnderlinedButton = ({ title }) => (
  <StyledButton size="large">
    {title}
  </StyledButton>
);

export default UnderlinedButton;
