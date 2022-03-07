import React from 'react';
import {
  Button,
} from '@mui/material';

const FormButton = ({ children, ...rest }) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    sx={(theme) => ({
      height: 56,
      mb: 1,
      mt: 4,
      borderRadius: 0,
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
    })}
    {...rest}
  >
    {children}
  </Button>
);

export default FormButton;
