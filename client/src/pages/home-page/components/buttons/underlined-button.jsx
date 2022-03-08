import React from 'react';
import {
  Button,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '../../../../routing/routes';
import ButtonTypography from '../../../../components/buttons/button-typography';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: 0,
  minHeight: 0,
  minWidth: 0,
  textDecoration: 'underline',
  textUnderlineOffset: '0.2rem',
  fontWeight: 700,
  color: theme.palette.primary.contrastText,
}));

const UnderlinedButton = ({ title }) => (
  <StyledLink to={routes.ProductsPage}>
    <StyledButton size="large">
      <ButtonTypography variant="body2">
        {title}
      </ButtonTypography>
    </StyledButton>
  </StyledLink>
);

export default UnderlinedButton;
