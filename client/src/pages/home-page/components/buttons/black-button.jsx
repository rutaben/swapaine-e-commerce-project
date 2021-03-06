import React from 'react';
import {
  Button,
  styled,
} from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  letterSpacing: '1px',
  color: theme.palette.primary.light,
  backgroundColor: theme.palette.primary.contrastText,
  borderColor: theme.palette.primary.contrastText,
  borderRadius: 0,
  fontWeight: 700,
  '&:hover': {
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const BlackButton = ({ title }) => (
  <StyledButton
    fullWidth
    type="submit"
    variant="outlined"
    size="large"
    sx={{ px: 7 }}
  >
    {title}
  </StyledButton>
);

export default BlackButton;
