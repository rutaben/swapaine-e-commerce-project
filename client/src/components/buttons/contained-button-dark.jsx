import React from 'react';
import {
  Button,
  styled,
} from '@mui/material';
import ButtonTypography from './button-typography';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const ContainedButtonDark = ({ title }) => (
  <StyledButton
    variant="contained"
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
