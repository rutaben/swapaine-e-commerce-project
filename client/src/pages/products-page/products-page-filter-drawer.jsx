import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  Drawer,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ProductsPageFilters from './products-page-filters';

const StyledTypography = styled(Typography)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: 'Cormorant Garamond',
  fontWeight: 700,
}));

const ProductsPageFilterDrawerContainer = ({
  openDrawer, closeDrawer,
}) => (
  <Drawer
    open={openDrawer}
    onClose={closeDrawer}
  >
    <Box
      sx={{
        width: '350px', display: 'flex', flexDirection: 'column', mt: 5,
      }}
    >
      <Box sx={{ width: '80%', mx: 'auto' }}>
        <StyledTypography
          variant="h3"
          sx={{ mb: 3 }}
        >
          Filtrai
          <IconButton
            onClick={closeDrawer}
            sx={(theme) => ({
              minHeight: 0, minWidth: 0, padding: 0, color: theme.palette.secondary.light,
            })}
          >
            <CloseIcon />
          </IconButton>
        </StyledTypography>
      </Box>
      <Box sx={{ width: '80%', mx: 'auto' }}>
        <ProductsPageFilters />
      </Box>
    </Box>

  </Drawer>
);

export default ProductsPageFilterDrawerContainer;
