import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  Drawer,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CarSearchPageDrawer = ({
  openDrawer, closeDrawer,
}) => (
  <Drawer
    open={openDrawer}
    onClose={closeDrawer}
  >
    <Box
      sx={{
        width: 270, display: 'flex', flexDirection: 'column', gap: '10px',
      }}
    >
      <Typography
        component="h2"
        variant="h5"
        sx={{
          display: 'flex', justifyContent: 'space-between', ml: '15px',
        }}
      >
        Filtrai
        <IconButton onClick={closeDrawer}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Typography>
    </Box>
  </Drawer>
);

export default CarSearchPageDrawer;
