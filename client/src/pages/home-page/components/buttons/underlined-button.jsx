import React from 'react';
import {
  Button,
  styled,
} from '@mui/material';
import ButtonTypography from '../../../../components/buttons/button-typography';

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
  <StyledButton size="large">
    <ButtonTypography variant="body2">
      {title}
    </ButtonTypography>
  </StyledButton>
);

export default UnderlinedButton;
