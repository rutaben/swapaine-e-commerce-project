import React from 'react';
import {
  Button,
  styled,
} from '@mui/material';
import ButtonTypography from '../../../../components/buttons/button-typography';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
  },
}));

const ContainedButton = ({ title }) => (
  <StyledButton
    variant="contained"
    size="large"
    disableElevation
    sx={{
      px: 7,
      pt: 2,
      pb: 2,
      mt: 2,
    }}
  >
    <ButtonTypography variant="body2">
      {title}
    </ButtonTypography>
  </StyledButton>
);

export default ContainedButton;
