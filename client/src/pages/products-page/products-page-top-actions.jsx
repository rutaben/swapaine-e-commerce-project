import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProductsPageTopActions = ({ openDrawer }) => (

  <Box sx={{
    minWidth: 120, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2,
  }}
  >
    <Button
      size="large"
      onClick={openDrawer}
      sx={(theme) => ({
        fontSize: theme.typography.body2,
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down('md')]: {
          display: 'flex',
        },
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      })}
    >
      Filtrai
      <ArrowDropDownIcon sx={{ color: 'gray' }} />
    </Button>
  </Box>
);

export default ProductsPageTopActions;
