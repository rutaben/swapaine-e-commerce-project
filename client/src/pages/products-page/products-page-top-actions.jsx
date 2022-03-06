import React from 'react';
import {
  Box,
  Button,
  Typography,
  styled,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const ProductsPageTopActions = ({ openDrawer }) => (
  <Box sx={{
    minWidth: 120, display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
  }}
  >
    <StyledButton
      size="large"
      onClick={openDrawer}
      sx={{ my: 2 }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Cormorant Garamond',
          fontWeight: 700,
        }}
      >
        Filtrai
      </Typography>
      <FilterListIcon sx={(theme) => ({ color: theme.palette.primary.contrastText, ml: 1 })} />
    </StyledButton>
  </Box>
);

export default ProductsPageTopActions;
