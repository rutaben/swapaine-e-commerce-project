import React from 'react';
import {
  Button,
  styled,
} from '@mui/material';
import ButtonTypography from './button-typography';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const ContainedButtonDark = ({ type, title }) => (
  <StyledButton
    variant="contained"
    type={type}
    disableElevation
    sx={{
      px: 7,
      py: 2,
      mt: 2,
    }}
  >
    <ButtonTypography variant="body2">
      {title}
    </ButtonTypography>
  </StyledButton>
);

export default ContainedButtonDark;
